import CaseStudyCard from "../caseStudies/CaseStudyCard";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary">CASE STUDIES</h2>
          <p className="text-on-surface-variant uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-xs leading-relaxed mt-2">
            Problem &middot; Role &middot; Architecture &middot; Outcome
          </p>
        </div>

        <div className="space-y-4 md:space-y-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
