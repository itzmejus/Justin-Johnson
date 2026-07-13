import { useState } from "react";
import type { BlogPost } from "../../data/blogPosts";
import { getSiteScreenshot } from "../../lib/screenshot";

export default function BlogCard({ post }: { post: BlogPost }) {
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = post.image ?? getSiteScreenshot(post.siteUrl, 640);

  return (
    <a
      href={`/blog/${post.slug}`}
      className="group bg-surface-container p-6 rounded-lg transition-all hover:bg-surface-bright border border-transparent hover:border-primary/20 flex flex-col"
    >
      <div className="aspect-video bg-surface-container-low mb-6 overflow-hidden rounded">
        {!imgFailed ? (
          <img
            src={imageSrc}
            alt={post.title}
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-container-low to-surface-container-high">
            <span className="font-headline text-2xl font-black text-primary/40">
              {post.category}
            </span>
          </div>
        )}
      </div>
      <div className="space-y-3 flex-1 flex flex-col">
        <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
          {post.category}
        </span>
        <h3 className="text-xl font-headline font-bold leading-snug">{post.title}</h3>
        <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{post.excerpt}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-on-surface-variant pt-2">
          <span>{post.readTime}</span>
          <span aria-hidden="true">&middot;</span>
          <span className="inline-flex items-center gap-1 text-primary font-bold">
            Read case study
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
      </div>
    </a>
  );
}
