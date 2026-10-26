import type { CaseStudy } from "../../data/caseStudies";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <article className="bg-white border border-outline-variant shadow-sm rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 space-y-6 md:space-y-8">
      <header>
        <span className="inline-block px-2.5 py-1 rounded-[999px] bg-surface-container-high text-[10px] uppercase tracking-widest text-primary font-bold mb-3">
          {caseStudy.category}
        </span>
        <h3 className="font-headline text-xl sm:text-2xl md:text-3xl font-black leading-tight">{caseStudy.title}</h3>
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3 text-sm text-on-surface-variant">
          {[caseStudy.role, caseStudy.company, caseStudy.period].map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-[999px] bg-outline" aria-hidden="true" />}
              <span className={i === 0 ? "font-semibold text-on-surface" : undefined}>{item}</span>
            </li>
          ))}
        </ul>
      </header>

      <div className="flex flex-wrap gap-2">
        {caseStudy.stack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] md:text-xs font-bold uppercase tracking-wide px-2.5 md:px-3 py-1 rounded-[999px] bg-surface-container-low border border-outline-variant text-on-surface-variant"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-8">
        <CaseStudyBlock label="Problem" text={caseStudy.problem} />
        <CaseStudyBlock label="My Role" text={caseStudy.myRole} />
        <CaseStudyBlock label="Architecture & Stack" text={caseStudy.architecture} />
        <CaseStudyBlock label="Business Outcome" text={caseStudy.outcome} />
      </div>

      {caseStudy.examples && caseStudy.examples.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4 gap-y-2 pt-5 border-t border-outline-variant">
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
            Live examples
          </span>
          {caseStudy.examples.map((ex) => (
            <a
              key={ex.href}
              href={ex.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
            >
              {ex.label}
              <span className="material-symbols-outlined text-base">arrow_outward</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function CaseStudyBlock({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-l-2 border-primary/30 pl-4">
      <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1.5 md:mb-2">
        {label}
      </p>
      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">{text}</p>
    </div>
  );
}
