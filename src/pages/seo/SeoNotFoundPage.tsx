import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { useSEO } from "../../hooks/useSEO";
import { CATEGORY_LABELS, CATEGORY_PATHS, type SeoCategory } from "../../data/seo/types";

export default function SeoNotFoundPage({ category }: { category: SeoCategory }) {
  const categoryPath = CATEGORY_PATHS[category];
  useSEO({
    title: `Page Not Found | Justin Johnson`,
    description: "This page doesn't exist or may have moved.",
    path: categoryPath,
  });

  return (
    <div className="font-body">
      <Header />
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-32 text-center">
          <h1 className="font-headline text-3xl font-black mb-4">Page not found</h1>
          <p className="text-on-surface-variant mb-8">This page doesn't exist or may have moved.</p>
          <a href={categoryPath} className="text-primary font-bold hover:underline">
            &larr; Back to {CATEGORY_LABELS[category]}
          </a>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
