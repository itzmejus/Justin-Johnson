import ExperienceItem from "../experience/ExperienceItem";
import { experiences } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-surface-container-low" id="experience">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-4xl font-black text-primary">EXPERIENCE</h2>
            <p className="text-on-surface-variant uppercase tracking-[0.2em] text-xs mt-2">
              Professional Journey
            </p>
          </div>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-outline-variant/20 hidden md:block" />
          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
