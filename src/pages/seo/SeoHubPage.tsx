import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import PageHero from "../../components/seo/PageHero";
import ContactCta from "../../components/seo/ContactCta";
import type { HubConfig } from "../../data/seo/hubs";
import { seoPagesByCategory, getSeoPage } from "../../data/seo";
import { useSEO } from "../../hooks/useSEO";
import { SITE_URL, seoPagePath, breadcrumbJsonLd } from "../../lib/seoMeta";
import { CATEGORY_LABELS, CATEGORY_PATHS, type SeoCategory } from "../../data/seo/types";

const ALL_CATEGORIES: SeoCategory[] = ["services", "technologies", "solutions", "resources", "industries", "guides"];

export default function SeoHubPage({ hub }: { hub: HubConfig }) {
  const categoryPath = CATEGORY_PATHS[hub.category];
  const otherCategories = ALL_CATEGORIES.filter((c) => c !== hub.category);
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: hub.h1, path: categoryPath },
  ];

  const jsonLd = [
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: hub.h1,
      description: hub.description,
      url: `${SITE_URL}${categoryPath}`,
    }),
    JSON.stringify(breadcrumbJsonLd(breadcrumbItems)),
  ];

  useSEO({
    title: hub.title,
    description: hub.description,
    path: categoryPath,
    keywords: [hub.h1, ...hub.groups.map((g) => g.heading)].join(", "),
    jsonLd,
  });

  const total = seoPagesByCategory[hub.category].length;

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <Breadcrumbs items={breadcrumbItems} />
          <PageHero eyebrow={`${hub.eyebrow} · ${total} pages`} h1={hub.h1} intro={hub.intro} />
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-16 space-y-16">
          {hub.groups.map((group) => (
            <section key={group.heading}>
              <h2 className="font-headline text-xl md:text-2xl font-black mb-6">{group.heading}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {group.slugs.map((slug) => {
                  const page = getSeoPage(hub.category, slug);
                  if (!page) return null;
                  return (
                    <a
                      key={slug}
                      href={seoPagePath(page)}
                      className="group bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10 hover:border-primary/20 transition-all flex flex-col"
                    >
                      <h3 className="font-headline text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {page.h1}
                      </h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{page.description}</p>
                      <span className="inline-flex items-center gap-1 text-primary font-bold text-xs mt-4">
                        Read more
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 md:px-8 pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">More</p>
          <h2 className="font-headline text-xl md:text-2xl font-black mb-6">Explore Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {otherCategories.map((category) => (
              <a
                key={category}
                href={CATEGORY_PATHS[category]}
                className="px-5 py-3 rounded-full border border-outline-variant/20 text-sm font-bold text-on-surface hover:bg-surface-container transition-colors"
              >
                {CATEGORY_LABELS[category]}
              </a>
            ))}
          </div>
        </div>

        <ContactCta
          heading="NEED HELP WITH THIS?"
          body="I'm currently available for freelance and contract work. Get in touch to discuss your project, or check current availability."
        />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
