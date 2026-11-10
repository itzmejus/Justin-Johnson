import type { ContentBlock, SeoCategory, SeoPage, SeoPageTranslation } from "./types";
import { locale } from "../../i18n/locale";
import { getGermanContent } from "../../i18n/germanContentStore";
import { servicePages } from "./services";
import { technologyPages } from "./technologies";
import { solutionPages } from "./solutions";
import { resourcePages } from "./resources";
import { industryPages } from "./industries";
import { guidePages } from "./guides";

const englishPagesByCategory: Record<SeoCategory, SeoPage[]> = {
  services: servicePages,
  technologies: technologyPages,
  solutions: solutionPages,
  resources: resourcePages,
  industries: industryPages,
  guides: guidePages,
};

/** Every English page must have a German translation; the build fails otherwise. */
const REQUIRE_COMPLETE_TRANSLATIONS = true;

/** Applies a German translation on top of its English page, checking that the structure lines up. */
function applyTranslation(page: SeoPage, tr: SeoPageTranslation): SeoPage {
  const key = `${page.category}/${page.slug}`;
  const fail = (msg: string): never => {
    throw new Error(`[seo content:de] ${key}: ${msg}`);
  };

  if (tr.sections.length !== page.sections.length) {
    fail(`has ${tr.sections.length} sections, English has ${page.sections.length}`);
  }
  if (tr.intro.length === 0) fail("has no introduction");

  const sections = page.sections.map((section, si) => {
    const trSection = tr.sections[si];
    if (trSection.blocks.length !== section.blocks.length) {
      fail(`section ${si + 1} has ${trSection.blocks.length} blocks, English has ${section.blocks.length}`);
    }
    const blocks: ContentBlock[] = section.blocks.map((block, bi) => {
      const trBlock = trSection.blocks[bi];
      const where = `section ${si + 1}, block ${bi + 1}`;
      if (block.kind === "code") {
        if (Array.isArray(trBlock)) fail(`${where} should be a code block (null or { caption })`);
        const caption = trBlock && !Array.isArray(trBlock) ? trBlock.caption : undefined;
        return caption ? { ...block, caption } : block;
      }
      if (!Array.isArray(trBlock)) fail(`${where} should be a string[] for a ${block.kind} block`);
      const items = trBlock as string[];
      const expected = block.kind === "paragraphs" ? block.paragraphs.length : block.items.length;
      if (items.length !== expected) fail(`${where} has ${items.length} entries, English has ${expected}`);
      if (block.kind === "paragraphs") return { kind: "paragraphs", paragraphs: items };
      if (block.kind === "list") return { ...block, items };
      return { kind: "checklist", items };
    });
    return { heading: trSection.heading, blocks };
  });

  if ((page.faqs?.length ?? 0) !== (tr.faqs?.length ?? 0)) {
    fail(`has ${tr.faqs?.length ?? 0} FAQs, English has ${page.faqs?.length ?? 0}`);
  }
  if ((page.howToSteps?.length ?? 0) !== (tr.howToSteps?.length ?? 0)) {
    fail(`has ${tr.howToSteps?.length ?? 0} HowTo steps, English has ${page.howToSteps?.length ?? 0}`);
  }

  return {
    ...page,
    title: tr.title,
    description: tr.description,
    h1: tr.h1,
    eyebrow: tr.eyebrow,
    primaryKeyword: tr.primaryKeyword,
    secondaryKeywords: tr.secondaryKeywords,
    intro: tr.intro,
    sections,
    faqs: tr.faqs?.map(([question, answer]) => ({ question, answer })),
    howToSteps: tr.howToSteps?.map(([name, text]) => ({ name, text })),
  };
}

/**
 * Builds the German pages from their translations (the German content is lazy-loaded on /de
 * pages, see src/i18n/germanContent.ts). Throws on any missing or misaligned translation;
 * the sitemap script calls this at build time so a broken translation fails the build.
 */
export function buildGermanPages(germanTranslationsByCategory: Record<SeoCategory, SeoPageTranslation[]>): Record<SeoCategory, SeoPage[]> {
  const result = {} as Record<SeoCategory, SeoPage[]>;
  for (const [category, pages] of Object.entries(englishPagesByCategory) as [SeoCategory, SeoPage[]][]) {
    const translations = new Map(germanTranslationsByCategory[category].map((tr) => [tr.slug, tr]));
    for (const slug of translations.keys()) {
      if (!pages.some((p) => p.slug === slug)) {
        throw new Error(`[seo content:de] translation for unknown page ${category}/${slug}`);
      }
    }
    result[category] = pages.map((page) => {
      const tr = translations.get(page.slug);
      if (!tr) {
        if (REQUIRE_COMPLETE_TRANSLATIONS) throw new Error(`[seo content:de] missing German translation for ${category}/${page.slug}`);
        return page;
      }
      return applyTranslation(page, tr);
    });
  }
  return result;
}

export const englishSeoPagesByCategory = englishPagesByCategory;

export const seoPagesByCategory: Record<SeoCategory, SeoPage[]> =
  locale === "de" ? buildGermanPages(getGermanContent().seo) : englishPagesByCategory;

export const allSeoPages: SeoPage[] = Object.values(seoPagesByCategory).flat();

function validate(pages: SeoPage[], label: string) {
  const seenKeys = new Set<string>();
  for (const page of pages) {
    const key = `${page.category}/${page.slug}`;
    if (seenKeys.has(key)) {
      throw new Error(`[seo content${label}] Duplicate page key: ${key}`);
    }
    seenKeys.add(key);

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(page.slug)) {
      throw new Error(`[seo content${label}] Invalid slug "${page.slug}" in ${page.category} — must be lowercase-hyphenated`);
    }
    if (page.title.length > 65) {
      throw new Error(`[seo content${label}] Title too long (${page.title.length} chars) for ${key}: "${page.title}"`);
    }
    if (page.description.length > 165) {
      throw new Error(`[seo content${label}] Meta description too long (${page.description.length} chars) for ${key}`);
    }
    if (page.secondaryKeywords.length < 4) {
      throw new Error(`[seo content${label}] Need >=4 secondary keywords for ${key}`);
    }
    if (page.sections.length === 0) {
      throw new Error(`[seo content${label}] ${key} has no sections`);
    }
    if (page.intro.length === 0) {
      throw new Error(`[seo content${label}] ${key} has no introduction`);
    }
  }

  for (const page of pages) {
    for (const relatedKey of page.relatedSlugs) {
      if (!seenKeys.has(relatedKey)) {
        throw new Error(
          `[seo content${label}] ${page.category}/${page.slug} links to missing related page "${relatedKey}"`
        );
      }
    }
  }

  // Inline markdown-style links ([label](category/slug)) written into prose must resolve to real pages.
  const inlineLinkPattern = /\[([^\]]+)\]\((services|technologies|solutions|resources|industries|guides)\/([a-z0-9-]+)\)/g;
  for (const page of pages) {
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
        throw new Error(`[seo content${label}] ${selfKey} has an inline link to missing page "${targetKey}"`);
      }
      if (targetKey === selfKey) {
        throw new Error(`[seo content${label}] ${selfKey} has an inline link pointing to itself`);
      }
    }
  }
}

validate(Object.values(englishPagesByCategory).flat(), "");

/** Build-time check used by the sitemap script: every German page is complete and valid. */
export function validateGermanSeoPages(germanTranslationsByCategory: Record<SeoCategory, SeoPageTranslation[]>) {
  const pages = buildGermanPages(germanTranslationsByCategory);
  validate(Object.values(pages).flat(), ":de");
  return pages;
}

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
