import type { SeoPage } from "../../data/seo/types";
import { CATEGORY_LABELS } from "../../data/seo/types";
import { seoPagePath } from "../../lib/seoMeta";

export default function RelatedPages({ pages, heading = "Related Reading" }: { pages: SeoPage[]; heading?: string }) {
  if (pages.length === 0) return null;

  return (
    <section className="py-16 border-t border-outline-variant/10" aria-labelledby="related-heading">
      <h2 id="related-heading" className="font-headline text-2xl font-black text-primary mb-8">
        {heading.toUpperCase()}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <a
            key={`${page.category}/${page.slug}`}
            href={seoPagePath(page)}
            className="group bg-surface-container p-6 rounded-lg transition-all hover:bg-surface-bright border border-transparent hover:border-primary/20 flex flex-col"
          >
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2">
              {CATEGORY_LABELS[page.category]}
            </span>
            <h3 className="text-lg font-headline font-bold leading-snug mb-2">{page.h1}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{page.description}</p>
            <span className="inline-flex items-center gap-1 text-primary font-bold text-xs mt-4">
              Read more
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
