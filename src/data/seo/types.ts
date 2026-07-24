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

export const CATEGORY_LABELS: Record<SeoCategory, string> = {
  services: "Services",
  technologies: "Technologies",
  solutions: "AI & Automation Solutions",
  resources: "SEO & Performance",
  industries: "Industry Solutions",
  guides: "Guides",
};

export const CATEGORY_PATHS: Record<SeoCategory, string> = {
  services: "/services",
  technologies: "/technologies",
  solutions: "/solutions",
  resources: "/resources",
  industries: "/industries",
  guides: "/guides",
};
