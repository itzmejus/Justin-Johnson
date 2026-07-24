import { createServer } from "vite";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

async function main() {
  const server = await createServer({ root, server: { middlewareMode: true }, appType: "custom" });
  const { allSeoPages } = await server.ssrLoadModule("/src/data/seo/index.ts");
  const { hubConfigs } = await server.ssrLoadModule("/src/data/seo/hubs.ts");
  await server.close();

  const byKey = new Map(allSeoPages.map((p) => [`${p.category}/${p.slug}`, p]));

  // Reciprocity check: if A -> B, does B -> A?
  let missingReciprocal = [];
  for (const page of allSeoPages) {
    const selfKey = `${page.category}/${page.slug}`;
    for (const relKey of page.relatedSlugs) {
      const target = byKey.get(relKey);
      if (target && !target.relatedSlugs.includes(selfKey)) {
        missingReciprocal.push({ from: selfKey, to: relKey });
      }
    }
  }

  console.log(`Total pages: ${allSeoPages.length}`);
  console.log(`Total relatedSlugs edges: ${allSeoPages.reduce((n, p) => n + p.relatedSlugs.length, 0)}`);
  console.log(`Missing reciprocal (backward) edges: ${missingReciprocal.length}`);
  for (const m of missingReciprocal.slice(0, 20)) {
    console.log(`  ${m.from} -> ${m.to}  (but ${m.to} does NOT link back to ${m.from})`);
  }
  if (missingReciprocal.length > 20) console.log(`  ... and ${missingReciprocal.length - 20} more`);

  // Inline contextual link check: do any intro/section paragraphs contain [label](path) markdown links?
  const linkPattern = /\[[^\]]+\]\((services|technologies|solutions|resources|industries|guides)\/[a-z0-9-]+\)/;
  let pagesWithInlineLinks = 0;
  for (const page of allSeoPages) {
    const allText = [
      ...page.intro,
      ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.kind === "paragraphs" ? b.paragraphs : []))),
    ].join(" ");
    if (linkPattern.test(allText)) pagesWithInlineLinks++;
  }
  console.log(`\nPages with inline contextual links in body paragraphs: ${pagesWithInlineLinks} / ${allSeoPages.length}`);

  // Hub cross-linking: does each hub page currently link to sibling hubs? (structural, checked in component code, not data)
  console.log(`\nHub categories: ${Object.keys(hubConfigs).join(", ")}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
