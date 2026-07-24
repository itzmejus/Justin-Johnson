import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import Breadcrumbs from "../../components/seo/Breadcrumbs";
import PageHero from "../../components/seo/PageHero";
import { ContentSection } from "../../components/seo/ContentBlocks";
import FaqAccordion from "../../components/seo/FaqAccordion";
import RelatedPages from "../../components/seo/RelatedPages";
import ContactCta from "../../components/seo/ContactCta";
import type { SeoPage as SeoPageData } from "../../data/seo/types";
import { getRelatedPages } from "../../data/seo";
import { useSEO } from "../../hooks/useSEO";
import { buildSeoHeadMeta, seoBreadcrumbs } from "../../lib/seoMeta";

const CTA_COPY: Record<SeoPageData["pageType"], { heading: string; body: string }> = {
  commercial: {
    heading: "NEED THIS FOR YOUR PROJECT?",
    body:
      "I'm currently available for freelance and contract work. Check availability and engagement options, or reach out directly to discuss scope.",
  },
  guide: {
    heading: "BUILDING SOMETHING SIMILAR?",
    body:
      "If you'd rather have this built and shipped than build it yourself, I'm available for freelance and contract work.",
  },
};

export default function SeoPage({ page }: { page: SeoPageData }) {
  const meta = buildSeoHeadMeta(page);
  useSEO({
    title: meta.title,
    description: meta.description,
    path: meta.path,
    image: meta.image,
    type: meta.type,
    keywords: meta.keywords,
    jsonLd: meta.jsonLdGraphs.map((graph) => JSON.stringify(graph)),
  });

  const related = getRelatedPages(page);
  const cta = CTA_COPY[page.pageType];

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <article className="py-2">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <Breadcrumbs items={seoBreadcrumbs(page)} />
            <PageHero eyebrow={page.eyebrow} h1={page.h1} intro={page.intro} />

            <div className="space-y-12 pb-16">
              {page.sections.map((section) => (
                <ContentSection key={section.heading} section={section} />
              ))}
            </div>

            {page.faqs && page.faqs.length > 0 && <div className="pb-16">
              <FaqAccordion faqs={page.faqs} />
            </div>}
          </div>
        </article>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <RelatedPages pages={related} />
        </div>

        <ContactCta heading={cta.heading} body={cta.body} />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
