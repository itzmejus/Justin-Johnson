import { hubConfigs } from "../../data/seo/hubs";
import { getSeoPage } from "../../data/seo";
import { CATEGORY_LABELS, CATEGORY_PATHS, type SeoCategory } from "../../data/seo/types";
import { seoPagePath } from "../../lib/seoMeta";
import { lp, t } from "../../i18n/locale";

const CATEGORIES: SeoCategory[] = ["services", "technologies", "solutions", "resources", "industries", "guides"];

/** Pages linked per category: the first entries of each hub group, so every group is represented. */
const LINKS_PER_CATEGORY = 4;

const copy = t({
  en: { heading: "EXPLORE MY WORK", subheading: "Services, technologies, industries & guides", all: "View all" },
  de: { heading: "LEISTUNGEN & WISSEN", subheading: "Leistungen, Technologien, Branchen & Anleitungen", all: "Alle ansehen" },
});

/**
 * Homepage hub of internal links into the service, technology, industry and guide pages.
 * The homepage is the most-crawled URL on the site, so linking the deeper pages from here
 * helps search engines discover and prioritise them.
 */
export default function ExploreSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low" id="explore">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary">{copy.heading}</h2>
          <p className="text-on-surface-variant uppercase tracking-[0.2em] text-xs mt-2">{copy.subheading}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((category) => {
            const hub = hubConfigs[category];
            const slugs = hub.groups.flatMap((g) => g.slugs.slice(0, 1)).concat(hub.groups.flatMap((g) => g.slugs.slice(1)));
            const pages = slugs
              .slice(0, LINKS_PER_CATEGORY)
              .map((slug) => getSeoPage(category, slug))
              .filter((p) => p !== undefined);
            return (
              <div key={category} className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm flex flex-col">
                <a
                  href={lp(CATEGORY_PATHS[category])}
                  className="font-headline text-lg font-bold text-on-surface hover:text-primary transition-colors"
                >
                  {CATEGORY_LABELS[category]}
                </a>
                <ul className="mt-4 space-y-2 flex-1">
                  {pages.map((page) => (
                    <li key={page.slug}>
                      <a
                        href={lp(seoPagePath(page))}
                        className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                      >
                        {page.h1}
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href={lp(CATEGORY_PATHS[category])}
                  className="inline-flex items-center gap-1 text-primary font-bold text-xs mt-5"
                >
                  {copy.all}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
