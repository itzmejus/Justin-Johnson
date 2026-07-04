import SkillCard from "../skills/SkillCard";
import { skills } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section className="py-24" id="skills">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-black text-primary">TECH STACK</h2>
          <p className="text-on-surface-variant uppercase tracking-[0.2em] text-xs mt-2">
            Tools of the trade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.title} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
