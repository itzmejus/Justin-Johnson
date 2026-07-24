import type { SeoPage } from "../data/seo/types";
import { CATEGORY_LABELS, CATEGORY_PATHS } from "../data/seo/types";

/**
 * Framework-agnostic SEO helpers shared by the client-side useSEO hook and the
 * build-time prerender script (scripts/prerender.mjs) — one source of truth so
 * the prerendered HTML head and the hydrated head never drift apart.
 */

export const SITE_URL = "https://www.justinjohnson.de";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/headshot.png`;
const AUTHOR_NAME = "Justin Johnson";
const AUTHOR_URL = SITE_URL;

export function seoPagePath(page: SeoPage): string {
  return `${CATEGORY_PATHS[page.category]}/${page.slug}`;
}

export function seoPageUrl(page: SeoPage): string {
  return `${SITE_URL}${seoPagePath(page)}`;
}

export type BreadcrumbItem = { label: string; path: string };

export function seoBreadcrumbs(page: SeoPage): BreadcrumbItem[] {
  return [
    { label: "Home", path: "/" },
    { label: CATEGORY_LABELS[page.category], path: CATEGORY_PATHS[page.category] },
    { label: page.h1, path: seoPagePath(page) },
  ];
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

function mainEntityJsonLd(page: SeoPage) {
  const url = seoPageUrl(page);
  const base = {
    "@context": "https://schema.org",
    mainEntityOfPage: url,
    url,
    name: page.h1,
    headline: page.h1,
    description: page.description,
    datePublished: page.publishedAt,
    dateModified: page.updatedAt,
  };

  switch (page.schemaType) {
    case "Service":
      return {
        ...base,
        "@type": "Service",
        serviceType: page.primaryKeyword,
        provider: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_URL },
        areaServed: { "@type": "Place", name: "Worldwide (remote)" },
      };
    case "TechArticle":
      return {
        ...base,
        "@type": "TechArticle",
        author: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_URL },
        proficiencyLevel: "Intermediate",
      };
    case "HowTo":
      return {
        ...base,
        "@type": "HowTo",
        step: (page.howToSteps ?? []).map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
        })),
      };
    case "Article":
      return {
        ...base,
        "@type": "Article",
        author: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_URL },
        articleSection: CATEGORY_LABELS[page.category],
      };
    case "SoftwareApplication":
      return {
        ...base,
        "@type": "SoftwareApplication",
        applicationCategory: "BusinessApplication",
      };
    default:
      return { ...base, "@type": "WebPage" };
  }
}

function faqJsonLd(page: SeoPage) {
  if (!page.faqs || page.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** All JSON-LD graphs for a page, ready to serialize individually into <script type="application/ld+json"> tags. */
export function seoJsonLdGraphs(page: SeoPage): object[] {
  const graphs: object[] = [mainEntityJsonLd(page), breadcrumbJsonLd(seoBreadcrumbs(page))];
  const faq = faqJsonLd(page);
  if (faq) graphs.push(faq);
  return graphs;
}

export type SeoHeadMeta = {
  title: string;
  description: string;
  path: string;
  url: string;
  image: string;
  keywords: string;
  type: "website" | "article";
  jsonLdGraphs: object[];
};

export function buildSeoHeadMeta(page: SeoPage): SeoHeadMeta {
  return {
    title: page.title,
    description: page.description,
    path: seoPagePath(page),
    url: seoPageUrl(page),
    image: DEFAULT_OG_IMAGE,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords].join(", "),
    type: page.pageType === "guide" ? "article" : "website",
    jsonLdGraphs: seoJsonLdGraphs(page),
  };
}
