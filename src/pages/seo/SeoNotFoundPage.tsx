import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { useSEO } from "../../hooks/useSEO";
import { CATEGORY_LABELS, CATEGORY_PATHS, type SeoCategory } from "../../data/seo/types";
import { lp, t } from "../../i18n/locale";

const copy = t({
  en: { title: "Page Not Found | Justin Johnson", heading: "Page not found", body: "This page doesn't exist or may have moved.", back: "Back to" },
  de: { title: "Seite nicht gefunden | Justin Johnson", heading: "Seite nicht gefunden", body: "Diese Seite existiert nicht oder wurde verschoben.", back: "Zurück zu" },
});

export default function SeoNotFoundPage({ category }: { category: SeoCategory }) {
  const categoryPath = CATEGORY_PATHS[category];
  useSEO({
    title: copy.title,
    description: copy.body,
    path: categoryPath,
    alternates: false,
  });

  return (
    <div className="font-body">
      <Header />
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-32 text-center">
          <h1 className="font-headline text-3xl font-black mb-4">{copy.heading}</h1>
          <p className="text-on-surface-variant mb-8">{copy.body}</p>
          <a href={lp(categoryPath)} className="text-primary font-bold hover:underline">
            &larr; {copy.back} {CATEGORY_LABELS[category]}
          </a>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
