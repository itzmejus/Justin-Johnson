import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createServer } from "vite";

const SITE_URL = "https://www.justinjohnson.de";
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outPath = path.join(root, "public", "sitemap.xml");

const LOCALES = ["en", "de"];

/** Mirrors localizePath() in src/i18n/locale.ts: English is unprefixed, German lives under /de. */
function localizedPath(logical, locale) {
  if (locale === "en") return logical;
  return logical === "/" ? "/de" : `/de${logical}`;
}

/** Static, non-generated routes. lastmod reflects the last genuine content change, not the build date. */
const staticRoutes = [
  { loc: "/", lastmod: "2026-11-10", changefreq: "monthly", priority: "1.0" },
  { loc: "/freelance", lastmod: "2026-11-10", changefreq: "monthly", priority: "0.9" },
  { loc: "/services", lastmod: "2026-11-10", changefreq: "monthly", priority: "0.9" },
  { loc: "/cv", lastmod: "2026-11-10", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog", lastmod: "2026-11-10", changefreq: "weekly", priority: "0.9" },
];

async function main() {
  // Use Vite's own module loader so asset imports (e.g. .webp in blogPosts.ts) resolve correctly.
  // Loading the data modules also runs their validation, including the German translations.
  const server = await createServer({ root, server: { middlewareMode: true }, appType: "custom" });

  const { blogPosts, buildGermanPosts } = await server.ssrLoadModule("/src/data/blogPosts.ts");
  const { allSeoPages, validateGermanSeoPages } = await server.ssrLoadModule("/src/data/seo/index.ts");
  const { CATEGORY_PATHS } = await server.ssrLoadModule("/src/data/seo/types.ts");
  const { germanContent } = await server.ssrLoadModule("/src/i18n/germanContent.ts");

  await server.close();

  // Every page must exist in German too (and line up with its English original) before /de URLs
  // are published; these throw on a missing or structurally mismatched translation.
  validateGermanSeoPages(germanContent.seo);
  buildGermanPosts(germanContent.blog);

  const hubRoutes = Object.entries(CATEGORY_PATHS)
    .filter(([category]) => category !== "services")
    .map(([, hubPath]) => ({ loc: hubPath, lastmod: "2026-11-10", changefreq: "weekly", priority: "0.8" }));

  const blogRoutes = blogPosts.map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.publishedDate,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const seoRoutes = allSeoPages.map((page) => ({
    loc: `${CATEGORY_PATHS[page.category]}/${page.slug}`,
    lastmod: page.updatedAt,
    changefreq: "monthly",
    priority: page.category === "guides" ? "0.7" : "0.75",
  }));

  const logicalRoutes = [...staticRoutes, ...hubRoutes, ...blogRoutes, ...seoRoutes];

  // Every page exists in English (unprefixed) and German (/de). Each URL lists both versions
  // plus x-default as hreflang alternates, which is how search engines pair the translations.
  const allRoutes = logicalRoutes.flatMap((route) =>
    LOCALES.map((locale) => ({ ...route, logical: route.loc, loc: localizedPath(route.loc, locale) }))
  );

  const seen = new Set();
  for (const route of allRoutes) {
    if (seen.has(route.loc)) throw new Error(`Duplicate sitemap route: ${route.loc}`);
    seen.add(route.loc);
  }

  const alternates = (logical) =>
    [...LOCALES.map((locale) => [locale, localizedPath(logical, locale)]), ["x-default", localizedPath(logical, "en")]]
      .map(([hreflang, p]) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${SITE_URL}${p}"/>`)
      .join("\n");

  const body = allRoutes
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.loc}</loc>\n${alternates(r.logical)}\n    <lastmod>${r.lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`;

  writeFileSync(outPath, xml, "utf-8");
  console.log(`sitemap.xml written with ${allRoutes.length} URLs (${logicalRoutes.length} per language)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
