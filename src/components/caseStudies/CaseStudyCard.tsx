import type { CaseStudy } from "../../data/caseStudies";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="bg-surface-container-low border border-outline-variant/15 rounded-3xl p-8 md:p-10 space-y-8">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-2">
            {caseStudy.category}
          </p>
          <h3 className="font-headline text-2xl md:text-3xl font-black">{caseStudy.title}</h3>
          <p className="text-on-surface-variant text-sm mt-2">
            {caseStudy.role} &middot; {caseStudy.company} &middot; {caseStudy.period}
          </p>
        </div>
      </header>

      <div className="flex flex-wrap gap-2">
        {caseStudy.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full border border-outline-variant/20 text-on-surface-variant"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <CaseStudyBlock label="Problem" text={caseStudy.problem} />
        <CaseStudyBlock label="My Role" text={caseStudy.myRole} />
        <CaseStudyBlock label="Architecture & Stack" text={caseStudy.architecture} />
        <CaseStudyBlock label="Business Outcome" text={caseStudy.outcome} />
      </div>

      {caseStudy.examples && caseStudy.examples.length > 0 && (
        <div className="flex flex-wrap gap-4 pt-2 border-t border-outline-variant/10">
          <span className="text-xs uppercase tracking-widest text-on-surface-variant self-center">
            Live examples:
          </span>
          {caseStudy.examples.map((ex) => (
            <a
              key={ex.href}
              href={ex.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-primary hover:underline"
            >
              {ex.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function CaseStudyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2">
        {label}
      </p>
      <p className="text-on-surface-variant leading-relaxed">{text}</p>
    </div>
  );
}
