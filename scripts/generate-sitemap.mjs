import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createServer } from "vite";

const SITE_URL = "https://www.justinjohnson.de";
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outPath = path.join(root, "public", "sitemap.xml");

/** Static, non-generated routes. lastmod reflects the last genuine content change, not the build date. */
const staticRoutes = [
  { loc: "/", lastmod: "2026-07-21", changefreq: "monthly", priority: "1.0" },
  { loc: "/freelance", lastmod: "2026-07-21", changefreq: "monthly", priority: "0.9" },
  { loc: "/services", lastmod: "2026-07-24", changefreq: "monthly", priority: "0.9" },
  { loc: "/cv", lastmod: "2026-07-21", changefreq: "monthly", priority: "0.8" },
  { loc: "/blog", lastmod: "2026-07-21", changefreq: "weekly", priority: "0.9" },
];

async function main() {
  // Use Vite's own module loader so asset imports (e.g. .webp in blogPosts.ts) resolve correctly.
  const server = await createServer({ root, server: { middlewareMode: true }, appType: "custom" });

  const { blogPosts } = await server.ssrLoadModule("/src/data/blogPosts.ts");
  const { allSeoPages } = await server.ssrLoadModule("/src/data/seo/index.ts");
  const { CATEGORY_PATHS } = await server.ssrLoadModule("/src/data/seo/types.ts");

  await server.close();

  const hubRoutes = Object.entries(CATEGORY_PATHS)
    .filter(([category]) => category !== "services")
    .map(([, hubPath]) => ({ loc: hubPath, lastmod: "2026-07-24", changefreq: "weekly", priority: "0.8" }));

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

  const allRoutes = [...staticRoutes, ...hubRoutes, ...blogRoutes, ...seoRoutes];

  const seen = new Set();
  for (const route of allRoutes) {
    if (seen.has(route.loc)) throw new Error(`Duplicate sitemap route: ${route.loc}`);
    seen.add(route.loc);
  }

  const body = allRoutes
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.loc}</loc>\n    <lastmod>${r.lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

  writeFileSync(outPath, xml, "utf-8");
  console.log(`sitemap.xml written with ${allRoutes.length} URLs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
