import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import BlogCard from "../components/blog/BlogCard";
import { blogPosts, getBlogPost, type BlogPost } from "../data/blogPosts";
import { profile } from "../data/profile";
import { useSEO } from "../hooks/useSEO";
import { getSiteScreenshot } from "../lib/screenshot";

const SITE_URL = "https://www.justinjohnson.de";

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = getBlogPost(slug);

  if (!post) {
    return <NotFound />;
  }

  return <BlogPostContent post={post} />;
}

function BlogPostContent({ post }: { post: BlogPost }) {
  const [imgFailed, setImgFailed] = useState(false);
  const heroImage = post.image ?? getSiteScreenshot(post.siteUrl, 1200);

  const keywords = [
    ...post.techStack,
    post.category,
    `${post.category} developer`,
    "Justin Johnson",
    "freelance full stack developer",
    "web development case study",
  ].join(", ");

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    articleSection: post.category,
    keywords,
    author: {
      "@type": "Person",
      name: profile.name,
      url: SITE_URL,
    },
    ...(post.image ? { image: `${SITE_URL}${post.image}` } : {}),
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  });

  useSEO({
    title: `${post.title} | Justin Johnson`,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.image ? `${SITE_URL}${post.image}` : undefined,
    type: "article",
    keywords,
    jsonLd,
  });

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <article className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <nav className="text-xs text-on-surface-variant mb-8" aria-label="Breadcrumb">
              <a href="/blog" className="hover:text-primary transition-colors">
                Build Notes
              </a>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span className="text-on-surface">{post.title}</span>
            </nav>

            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">
              {post.category}
            </p>
            <h1 className="font-headline text-3xl md:text-5xl font-black leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-on-surface-variant mt-4">
              <span>{post.company}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readTime}</span>
            </div>

            {!imgFailed && (
              <div className="aspect-video bg-surface-container-low rounded-2xl overflow-hidden mt-8">
                <img
                  src={heroImage}
                  alt={post.title}
                  loading="eager"
                  decoding="async"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-8">
              {post.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border border-outline-variant/20 text-on-surface-variant"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={post.siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline mt-6"
            >
              Visit the live site <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>

            <div className="prose-blog mt-12 space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-headline text-xl md:text-2xl font-black mb-4">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-on-surface-variant leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>

        <section className="py-16 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-2xl font-black text-primary mb-8">MORE BUILD NOTES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
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

function NotFound() {
  useSEO({
    title: "Post Not Found | Justin Johnson",
    description: "This build note doesn't exist or may have moved.",
    path: "/blog",
  });

  return (
    <div className="font-body">
      <Header />
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-32 text-center">
          <h1 className="font-headline text-3xl font-black mb-4">Post not found</h1>
          <p className="text-on-surface-variant mb-8">This build note doesn't exist or may have moved.</p>
          <a href="/blog" className="text-primary font-bold hover:underline">
            &larr; Back to all build notes
          </a>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
