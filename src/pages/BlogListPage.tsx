import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import BlogCard from "../components/blog/BlogCard";
import { blogPosts } from "../data/blogPosts";
import { useSEO } from "../hooks/useSEO";
import { t } from "../i18n/locale";

export default function BlogListPage() {
  useSEO({
    ...t({
      en: {
        title: "Project Build Notes | Justin Johnson",
        description:
          "In-depth build notes on 28 live websites and apps I've shipped — the tech stack, architecture, and reasoning behind each one, from headless commerce booking platforms to multi-brand vehicle hire networks.",
        keywords:
          "React developer case studies, Next.js developer portfolio, Node.js developer projects, Shopify headless commerce examples, AWS developer case studies, web development build notes, Justin Johnson portfolio",
      },
      de: {
        title: "Projekt-Notizen & Fallstudien | Justin Johnson",
        description:
          "Ausführliche Notizen zu 28 Live-Websites und Apps, die ich umgesetzt habe – Tech-Stack, Architektur und Entscheidungen hinter jedem Projekt, von Headless-Commerce-Buchungsplattformen bis zu Fahrzeugvermietungsnetzwerken.",
        keywords:
          "React Entwickler Fallstudien, Next.js Entwickler Portfolio, Node.js Projekte, Shopify Headless Commerce Beispiele, AWS Fallstudien, Webentwicklung Projektberichte, Justin Johnson Portfolio",
      },
    }),
    path: "/blog",
  });

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">{t({ en: "Build Notes", de: "Projekt-Notizen" })}</p>
              <h1 className="font-headline text-4xl md:text-5xl font-black text-primary">
                {t({ en: "HOW EACH SITE WAS BUILT", de: "WIE JEDE WEBSITE ENTSTANDEN IST" })}
              </h1>
              <p className="text-on-surface-variant leading-relaxed mt-4">
                {t({
                  en: `Tech stack breakdowns and architecture notes for ${blogPosts.length} live sites and apps I've built or worked on — booking platforms, e-commerce storefronts, listings marketplaces, and multi-brand networks running on shared React, Next.js, and PHP infrastructure.`,
                  de: `Tech-Stack-Analysen und Architekturnotizen zu ${blogPosts.length} Live-Websites und Apps, die ich entwickelt oder mitentwickelt habe – Buchungsplattformen, Onlineshops, Inserate-Marktplätze und Markennetzwerke auf gemeinsamer React-, Next.js- und PHP-Infrastruktur.`,
                })}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sortedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
