import { allSeoPages } from "../src/data/seo/index.ts";

const h1s = new Map();
const titles = new Map();
const descriptions = new Map();
const primaryKeywords = new Map();

for (const p of allSeoPages) {
  const key = `${p.category}/${p.slug}`;
  for (const [map, val, label] of [
    [h1s, p.h1, "H1"],
    [titles, p.title, "title"],
    [descriptions, p.description, "description"],
    [primaryKeywords, p.primaryKeyword, "primaryKeyword"],
  ]) {
    if (!map.has(val)) map.set(val, []);
    map.get(val).push(key);
  }
}

function reportDupes(map, label) {
  const dupes = [...map.entries()].filter(([, keys]) => keys.length > 1);
  if (dupes.length) {
    console.log(`\nDuplicate ${label}:`);
    for (const [val, keys] of dupes) console.log(`  "${val}" -> ${keys.join(", ")}`);
  } else {
    console.log(`No duplicate ${label}.`);
  }
}

reportDupes(h1s, "H1");
reportDupes(titles, "title");
reportDupes(descriptions, "description");
reportDupes(primaryKeywords, "primaryKeyword");

console.log(`\nTotal pages: ${allSeoPages.length}`);
