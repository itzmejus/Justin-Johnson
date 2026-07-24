import type { ContentBlock, PageSection } from "../../data/seo/types";

function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "paragraphs":
      return (
        <div className="space-y-4">
          {block.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-on-surface-variant leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      );
    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className={block.ordered ? "list-decimal pl-5 space-y-2" : "space-y-2"}>
          {block.items.map((item, i) => (
            <li key={i} className={block.ordered ? "text-on-surface-variant leading-relaxed" : "flex gap-2 text-on-surface-variant leading-relaxed"}>
              {!block.ordered && (
                <span className="material-symbols-outlined text-primary text-base shrink-0 leading-6">
                  arrow_right
                </span>
              )}
              <span>{item}</span>
            </li>
          ))}
        </Tag>
      );
    }
    case "checklist":
      return (
        <ul className="grid sm:grid-cols-2 gap-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-on-surface-variant leading-relaxed">
              <span className="material-symbols-outlined text-primary text-base shrink-0 leading-6">
                check
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div>
          {block.caption && (
            <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-2">{block.caption}</p>
          )}
          <pre className="bg-surface-container-lowest border border-outline-variant/15 rounded-lg p-4 overflow-x-auto text-sm">
            <code className={`language-${block.language}`}>{block.code}</code>
          </pre>
        </div>
      );
  }
}

export function ContentSection({ section, level = "h2" }: { section: PageSection; level?: "h2" | "h3" }) {
  const HeadingTag = level;
  return (
    <section>
      <HeadingTag className="font-headline text-xl md:text-2xl font-black mb-4">{section.heading}</HeadingTag>
      <div className="space-y-4">
        {section.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </section>
  );
}
