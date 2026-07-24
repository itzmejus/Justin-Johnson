import { CATEGORY_PATHS, type SeoCategory } from "../data/seo/types";

/** Matches markdown-style links scoped to our own SEO routes: [label](category/slug) */
const INLINE_LINK_PATTERN = /\[([^\]]+)\]\((services|technologies|solutions|resources|industries|guides)\/([a-z0-9-]+)\)/g;

/**
 * Renders inline contextual links inside body copy. Content data authors write
 * `[Next.js SEO implementation](technologies/nextjs-seo)` directly in prose; this
 * turns that into a real <a> so search engines and users can follow it in place,
 * rather than only surfacing the relationship in the bottom-of-page related cards.
 */
export function renderInlineLinks(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  INLINE_LINK_PATTERN.lastIndex = 0;
  while ((match = INLINE_LINK_PATTERN.exec(text)) !== null) {
    const [full, label, category, slug] = match;
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const href = `${CATEGORY_PATHS[category as SeoCategory]}/${slug}`;
    nodes.push(
      <a key={`link-${key++}`} href={href} className="text-primary font-bold hover:underline">
        {label}
      </a>
    );
    lastIndex = match.index + full.length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}
