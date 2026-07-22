import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import BlogCard from "../components/blog/BlogCard";
import { blogPosts } from "../data/blogPosts";
import { useSEO } from "../hooks/useSEO";

export default function BlogListPage() {
  useSEO({
    title: "Project Build Notes | Justin Johnson",
    description:
      "In-depth build notes on 28 live websites and apps I've shipped — the tech stack, architecture, and reasoning behind each one, from headless commerce booking platforms to multi-brand vehicle hire networks.",
    path: "/blog",
    keywords:
      "React developer case studies, Next.js developer portfolio, Node.js developer projects, Shopify headless commerce examples, AWS developer case studies, web development build notes, Justin Johnson portfolio",
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
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">Build Notes</p>
              <h1 className="font-headline text-4xl md:text-5xl font-black text-primary">
                HOW EACH SITE WAS BUILT
              </h1>
              <p className="text-on-surface-variant leading-relaxed mt-4">
                Tech stack breakdowns and architecture notes for {blogPosts.length} live sites and apps I've
                built or worked on — booking platforms, e-commerce storefronts, listings marketplaces, and
                multi-brand networks running on shared React, Next.js, and PHP infrastructure.
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
