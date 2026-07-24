import { renderInlineLinks } from "../../lib/inlineLinks";

export default function PageHero({
  eyebrow,
  h1,
  intro,
}: {
  eyebrow: string;
  h1: string;
  intro: string[];
}) {
  return (
    <section className="py-16 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">{eyebrow}</p>
      <h1 className="font-headline text-3xl md:text-5xl font-black leading-tight">{h1}</h1>
      <div className="space-y-4 mt-6 max-w-3xl">
        {intro.map((paragraph, i) => (
          <p
            key={i}
            className={i === 0 ? "text-lg md:text-xl text-on-surface-variant leading-relaxed" : "text-on-surface-variant leading-relaxed"}
          >
            {renderInlineLinks(paragraph)}
          </p>
        ))}
      </div>
    </section>
  );
}
