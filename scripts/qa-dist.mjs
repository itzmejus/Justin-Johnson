import { readFileSync, readdirSync, statSync } from "node:fs";
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

const files = walk(distDir);
console.log(`Checking ${files.length} prerendered HTML files...\n`);

let jsonLdErrors = 0;
let missingH1 = 0;
let duplicateH1 = 0;
let missingTitle = 0;
let missingCanonical = 0;

for (const file of files) {
  const html = readFileSync(file, "utf-8");
  const rel = path.relative(distDir, file);

  // JSON-LD validity
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const s of scripts) {
    try {
      JSON.parse(s[1]);
    } catch (e) {
      console.error(`  JSON-LD parse error in ${rel}: ${e.message}`);
      jsonLdErrors++;
    }
  }

  // Single H1 check (only within <main>, since header/logo isn't an h1 anyway)
  const h1s = [...html.matchAll(/<h1[^>]*>/g)];
  if (h1s.length === 0) {
    console.error(`  No H1 found in ${rel}`);
    missingH1++;
  } else if (h1s.length > 1) {
    console.error(`  ${h1s.length} H1 tags found in ${rel}`);
    duplicateH1++;
  }

  if (!/<title>.*?<\/title>/.test(html)) {
    console.error(`  Missing <title> in ${rel}`);
    missingTitle++;
  }
  if (!/<link rel="canonical"/.test(html)) {
    console.error(`  Missing canonical link in ${rel}`);
    missingCanonical++;
  }
}

console.log(`\nSummary:`);
console.log(`  JSON-LD parse errors: ${jsonLdErrors}`);
console.log(`  Pages missing H1: ${missingH1}`);
console.log(`  Pages with multiple H1s: ${duplicateH1}`);
console.log(`  Pages missing <title>: ${missingTitle}`);
console.log(`  Pages missing canonical: ${missingCanonical}`);

if (jsonLdErrors || missingH1 || duplicateH1 || missingTitle || missingCanonical) {
  process.exit(1);
}
