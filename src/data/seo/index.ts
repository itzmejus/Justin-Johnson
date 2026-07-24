import type { SeoCategory, SeoPage } from "./types";
import { servicePages } from "./services";
import { technologyPages } from "./technologies";
import { solutionPages } from "./solutions";
import { resourcePages } from "./resources";
import { industryPages } from "./industries";
import { guidePages } from "./guides";

export const seoPagesByCategory: Record<SeoCategory, SeoPage[]> = {
  services: servicePages,
  technologies: technologyPages,
  solutions: solutionPages,
  resources: resourcePages,
  industries: industryPages,
  guides: guidePages,
};

export const allSeoPages: SeoPage[] = Object.values(seoPagesByCategory).flat();

function validate() {
  const seenKeys = new Set<string>();
  for (const page of allSeoPages) {
    const key = `${page.category}/${page.slug}`;
    if (seenKeys.has(key)) {
      throw new Error(`[seo content] Duplicate page key: ${key}`);
    }
    seenKeys.add(key);

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(page.slug)) {
      throw new Error(`[seo content] Invalid slug "${page.slug}" in ${page.category} — must be lowercase-hyphenated`);
    }
    if (page.title.length > 65) {
      throw new Error(`[seo content] Title too long (${page.title.length} chars) for ${key}: "${page.title}"`);
    }
    if (page.description.length > 165) {
      throw new Error(`[seo content] Meta description too long (${page.description.length} chars) for ${key}`);
    }
    if (page.secondaryKeywords.length < 4) {
      throw new Error(`[seo content] Need >=4 secondary keywords for ${key}`);
    }
    if (page.sections.length === 0) {
      throw new Error(`[seo content] ${key} has no sections`);
    }
    if (page.intro.length === 0) {
      throw new Error(`[seo content] ${key} has no introduction`);
    }
  }

  for (const page of allSeoPages) {
    for (const relatedKey of page.relatedSlugs) {
      if (!seenKeys.has(relatedKey)) {
        throw new Error(
          `[seo content] ${page.category}/${page.slug} links to missing related page "${relatedKey}"`
        );
      }
    }
  }

  // Inline markdown-style links ([label](category/slug)) written into prose must resolve to real pages.
  const inlineLinkPattern = /\[([^\]]+)\]\((services|technologies|solutions|resources|industries|guides)\/([a-z0-9-]+)\)/g;
  for (const page of allSeoPages) {
    const selfKey = `${page.category}/${page.slug}`;
    const text = [
      ...page.intro,
      ...page.sections.flatMap((s) => s.blocks.flatMap((b) => (b.kind === "paragraphs" || b.kind === "list" || b.kind === "checklist" ? (b.kind === "paragraphs" ? b.paragraphs : b.items) : []))),
    ].join("\n");
    let match: RegExpExecArray | null;
    inlineLinkPattern.lastIndex = 0;
    while ((match = inlineLinkPattern.exec(text)) !== null) {
      const targetKey = `${match[2]}/${match[3]}`;
      if (!seenKeys.has(targetKey)) {
        throw new Error(`[seo content] ${selfKey} has an inline link to missing page "${targetKey}"`);
      }
      if (targetKey === selfKey) {
        throw new Error(`[seo content] ${selfKey} has an inline link pointing to itself`);
      }
    }
  }
}

validate();

export function getSeoPage(category: SeoCategory, slug: string): SeoPage | undefined {
  return seoPagesByCategory[category].find((page) => page.slug === slug);
}

export function getRelatedPages(page: SeoPage): SeoPage[] {
  return page.relatedSlugs
    .map((key) => {
      const [category, slug] = key.split("/") as [SeoCategory, string];
      return getSeoPage(category, slug);
    })
    .filter((p): p is SeoPage => Boolean(p));
}

export function allSeoRoutePaths(): string[] {
  return allSeoPages.map((page) => `/${page.category}/${page.slug}`);
}
