import { locale, type Locale } from "../../i18n/locale";

/** Category = top-level route segment; pageType controls which chrome the shared template renders. */
export type SeoCategory =
  | "services"
  | "technologies"
  | "solutions"
  | "resources"
  | "industries"
  | "guides";

export type SeoPageType = "commercial" | "guide";

export type SearchIntent = "commercial" | "informational" | "transactional" | "comparison";

export type SchemaType =
  | "Service"
  | "TechArticle"
  | "HowTo"
  | "Article"
  | "SoftwareApplication"
  | "WebPage";

export type ContentBlock =
  | { kind: "paragraphs"; paragraphs: string[] }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "code"; language: string; code: string; caption?: string }
  | { kind: "checklist"; items: string[] };

export type PageSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type Faq = { question: string; answer: string };

export type HowToStep = { name: string; text: string };

export type SeoPage = {
  slug: string;
  category: SeoCategory;
  pageType: SeoPageType;
  schemaType: SchemaType;

  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: SearchIntent;

  title: string;
  description: string;
  h1: string;
  eyebrow: string;

  intro: string[];
  sections: PageSection[];
  faqs?: Faq[];
  /** Only set for guide pages rendered with HowTo schema. */
  howToSteps?: HowToStep[];

  relatedSlugs: string[]; // format "category/slug"
  publishedAt: string; // ISO date, set once, never bumped automatically
  updatedAt: string; // ISO date, bumped only on genuine content edits
};

export const CATEGORY_LABELS_BY_LOCALE: Record<Locale, Record<SeoCategory, string>> = {
  en: {
    services: "Services",
    technologies: "Technologies",
    solutions: "AI & Automation Solutions",
    resources: "SEO & Performance",
    industries: "Industry Solutions",
    guides: "Guides",
  },
  de: {
    services: "Leistungen",
    technologies: "Technologien",
    solutions: "KI- & Automatisierungslösungen",
    resources: "SEO & Performance",
    industries: "Branchenlösungen",
    guides: "Anleitungen",
  },
};

export const CATEGORY_LABELS: Record<SeoCategory, string> = CATEGORY_LABELS_BY_LOCALE[locale];

/**
 * A German translation of one SeoPage. It mirrors the English page section by section and
 * block by block; everything structural (category, schema, related pages, dates, code) comes
 * from the English page it overlays.
 *  - paragraphs / list / checklist blocks -> string[] (same number of entries as the English block)
 *  - code blocks -> null, or { caption } when the English block has a caption
 */
export type BlockTranslation = string[] | null | { caption: string };

export type SeoPageTranslation = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intro: string[];
  sections: { heading: string; blocks: BlockTranslation[] }[];
  /** [question, answer] pairs, same order as the English FAQs. */
  faqs?: [string, string][];
  /** [name, text] pairs, same order as the English HowTo steps. */
  howToSteps?: [string, string][];
};

export const CATEGORY_PATHS: Record<SeoCategory, string> = {
  services: "/services",
  technologies: "/technologies",
  solutions: "/solutions",
  resources: "/resources",
  industries: "/industries",
  guides: "/guides",
};
