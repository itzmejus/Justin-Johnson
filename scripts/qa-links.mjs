import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const distDir = path.join(process.cwd(), "dist");

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) files.push(...walk(full));
    else if (entry === "index.html") files.push(full);
  }
  return files;
}

const sitemapXml = readFileSync(path.join(distDir, "sitemap.xml"), "utf-8");
const knownRoutes = new Set(
  [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
);
// Anchor targets that exist but aren't standalone pages (in-page section links, external, etc.)
const allow = [/^#/, /^https?:\/\//, /^mailto:/, /^tel:/, /^\/#/, /^\/cv\/.*\.pdf$/];

const files = walk(distDir);
const broken = new Map();

for (const file of files) {
  const html = readFileSync(file, "utf-8");
  const rel = "/" + path.relative(distDir, file).replace(/index\.html$/, "").replace(/\\/g, "/");
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (allow.some((re) => re.test(href))) continue;
    const pathname = href.split("#")[0].split("?")[0];
    if (pathname === "") continue;
    // Static assets (images, css, js, fonts, pdfs) are validated against the filesystem, not the route sitemap.
    if (path.extname(pathname) && path.extname(pathname) !== ".html") {
      if (!existsSync(path.join(distDir, pathname))) {
        if (!broken.has(pathname)) broken.set(pathname, []);
        broken.get(pathname).push(rel);
      }
      continue;
    }
    if (!knownRoutes.has(pathname)) {
      if (!broken.has(pathname)) broken.set(pathname, []);
      broken.get(pathname).push(rel);
    }
  }
}

if (broken.size === 0) {
  console.log(`No broken internal links found across ${files.length} pages.`);
} else {
  console.log(`Broken/unknown internal link targets:`);
  for (const [target, sources] of broken) {
    console.log(`  ${target}  (linked from ${sources.length} page(s), e.g. ${sources[0]})`);
  }
  process.exit(1);
}
