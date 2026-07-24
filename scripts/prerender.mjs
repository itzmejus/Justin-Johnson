import { readFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import http from "node:http";
import puppeteer from "puppeteer";

/**
 * Post-build static prerendering for this Vite SPA.
 *
 * The app is client-rendered only (no SSR framework), so crawlers depend on
 * executing JavaScript to see page content and the meta tags useSEO() injects.
 * This script serves the production build locally, visits every route in
 * sitemap.xml with a headless browser, waits for React to render, and writes
 * the resulting HTML to disk at that route's path. Netlify serves these real
 * files directly (ahead of the SPA catch-all redirect in netlify.toml), so
 * crawlers get fully-formed HTML on first response, while the same bundled
 * script tag still boots the app for real visitors.
 */

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");
const CONCURRENCY = 4;

function routesFromSitemap() {
  const xml = readFileSync(sitemapPath, "utf-8");
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => new URL(m[1]).pathname);
}

function startStaticServer() {
  const mimeTypes = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript",
    ".css": "text/css",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".webp": "image/webp",
    ".jpg": "image/jpeg",
    ".json": "application/json",
    ".xml": "application/xml",
    ".txt": "text/plain",
    ".pdf": "application/pdf",
    ".woff2": "font/woff2",
  };

  const server = http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split("?")[0]);
    const hasExtension = path.extname(urlPath) !== "";
    const filePath = hasExtension ? path.join(distDir, urlPath) : path.join(distDir, urlPath, "index.html");
    const fallback = path.join(distDir, "index.html");
    const target = existsSync(filePath) ? filePath : fallback;
    const ext = path.extname(target);
    res.writeHead(200, { "Content-Type": mimeTypes[ext] ?? "application/octet-stream" });
    res.end(readFileSync(target));
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve(server));
  });
}

async function prerenderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  try {
    await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
    // Give useEffect-driven head mutations (useSEO) a beat past network idle.
    await new Promise((r) => setTimeout(r, 150));
    const html = await page.content();

    const outDir = route === "/" ? distDir : path.join(distDir, route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, "index.html"), html, "utf-8");
    return { route, ok: true };
  } catch (err) {
    return { route, ok: false, error: err.message };
  } finally {
    await page.close();
  }
}

async function runQueue(items, worker, concurrency) {
  const results = [];
  let i = 0;
  async function next() {
    while (i < items.length) {
      const index = i++;
      results[index] = await worker(items[index]);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, next));
  return results;
}

async function main() {
  if (!existsSync(distDir)) {
    throw new Error("dist/ not found — run `vite build` before prerendering.");
  }
  const routes = routesFromSitemap();
  console.log(`Prerendering ${routes.length} routes...`);

  const server = await startStaticServer();
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  const browser = await puppeteer.launch({ headless: true });
  const results = await runQueue(routes, (route) => prerenderRoute(browser, baseUrl, route), CONCURRENCY);
  await browser.close();
  server.close();

  const failed = results.filter((r) => !r.ok);
  for (const r of results.filter((r) => r.ok)) {
    console.log(`  ok  ${r.route}`);
  }
  if (failed.length) {
    console.error(`\n${failed.length} route(s) failed to prerender:`);
    for (const f of failed) console.error(`  FAIL ${f.route} — ${f.error}`);
    process.exit(1);
  }
  console.log(`\nPrerendered ${results.length} routes successfully.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
