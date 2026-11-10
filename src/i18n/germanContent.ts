/**
 * All long-form German content (SEO pages + blog posts) in one module.
 *
 * This is loaded with a dynamic import from main.tsx only on /de pages, so it ends up in its
 * own chunk and English visitors never download it. The sitemap script also loads it to
 * validate every translation at build time.
 */
import type { SeoCategory, SeoPageTranslation } from "../data/seo/types";
import type { BlogPostTranslation } from "../data/blogPosts";
import { servicePagesDe } from "../data/seo/de/services";
import { technologyPagesDe } from "../data/seo/de/technologies";
import { solutionPagesDe } from "../data/seo/de/solutions";
import { resourcePagesDe } from "../data/seo/de/resources";
import { industryPagesDe } from "../data/seo/de/industries";
import { guidePagesDe } from "../data/seo/de/guides";
import { blogPostsDe } from "../data/blogPosts.de";

export type GermanContent = {
  seo: Record<SeoCategory, SeoPageTranslation[]>;
  blog: BlogPostTranslation[];
};

export const germanContent: GermanContent = {
  seo: {
    services: servicePagesDe,
    technologies: technologyPagesDe,
    solutions: solutionPagesDe,
    resources: resourcePagesDe,
    industries: industryPagesDe,
    guides: guidePagesDe,
  },
  blog: blogPostsDe,
};
