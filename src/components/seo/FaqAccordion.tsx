import type { Faq } from "../../data/seo/types";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-headline text-xl md:text-2xl font-black mb-6">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-outline-variant border-y border-outline-variant">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-4">
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded">
              <span>{faq.question}</span>
              <span className="material-symbols-outlined shrink-0 text-primary transition-transform group-open:rotate-45">
                add
              </span>
            </summary>
            <p className="text-on-surface-variant leading-relaxed mt-3 pr-8">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
