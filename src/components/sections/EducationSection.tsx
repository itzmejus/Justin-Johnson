import { education } from "../../data/education";

export default function EducationSection() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline text-4xl font-black text-primary mb-12">
              ACADEMIC FOUNDATION
            </h2>
            <div className="space-y-8">
              {education.map((edu) => (
                <EducationItem key={edu.degree} {...edu} />
              ))}
            </div>
          </div>

          <ContinuousLearningCard />
        </div>
      </div>
    </section>
  );
}

function EducationItem({
  degree,
  institution,
  institutionLink,
  years,
  isCurrent = false,
}: {
  degree: string;
  institution: string;
  institutionLink?: string;
  years: string;
  isCurrent?: boolean;
}) {
  return (
    <div className="border-l border-outline-variant/30 pl-8 relative">
      <div
        className={`absolute -left-[5px] top-0 w-[10px] h-[10px] rounded-full ${
          isCurrent ? "bg-primary" : "bg-outline"
        }`}
      />
      <h4 className="font-bold text-lg">{degree}</h4>
      <p className="text-on-surface-variant">
        {institutionLink ? (
          <a
            href={institutionLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-outline-variant/40 underline-offset-4 hover:text-primary transition-colors"
          >
            {institution}
          </a>
        ) : (
          institution
        )}{" "}
        | {years}
      </p>
    </div>
  );
}

function ContinuousLearningCard() {
  return (
    <div className="bg-surface-container-high p-8 md:p-12 rounded-2xl flex flex-col justify-center items-center text-center">
      <span className="material-symbols-outlined text-6xl text-primary mb-6">
        workspace_premium
      </span>
      <h3 className="font-headline text-2xl font-bold mb-4">Continuous Learning</h3>
      <p className="text-on-surface-variant max-w-sm">
        Consistently updating skillsets through AWS certifications and modern framework deep-dives.
      </p>
    </div>
  );
}
