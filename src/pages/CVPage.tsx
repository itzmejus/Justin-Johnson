import type { ReactNode } from "react";
import { profile } from "../data/profile";
import { experiences } from "../data/experience";
import { education } from "../data/education";
import { skills } from "../data/skills";
import { languages } from "../data/languages";
import { caseStudies } from "../data/caseStudies";
import { useSEO } from "../hooks/useSEO";
import { lp, t } from "../i18n/locale";

const copy = t({
  en: {
    title: "Justin Johnson | Full Stack Developer CV & Resume",
    description:
      "View and download the CV of Justin Johnson, a Full Stack Developer specializing in React, Next.js, Node.js, and AWS, with experience across e-commerce, cloud integrations, and multi-market booking platforms.",
    keywords:
      "Justin Johnson CV, Justin Johnson resume, Full Stack Developer resume, React developer CV, Next.js developer resume, hire full stack developer",
    back: "← Back",
    backLong: "← Back to Portfolio",
    print: "Print",
    download: "Download PDF",
    profile: "Profile",
    experience: "Experience",
    caseStudies: "Selected Project Case Studies",
    skills: "Skills",
    education: "Education",
    languages: "Languages",
  },
  de: {
    title: "Justin Johnson | Lebenslauf – Full Stack Entwickler",
    description:
      "Lebenslauf von Justin Johnson ansehen und herunterladen: Full Stack Entwickler für React, Next.js, Node.js und AWS mit Erfahrung in E-Commerce, Cloud-Integrationen und Buchungsplattformen.",
    keywords:
      "Justin Johnson Lebenslauf, Justin Johnson CV, Full Stack Entwickler Lebenslauf, React Entwickler CV, Next.js Entwickler Lebenslauf, Full Stack Entwickler einstellen",
    back: "← Zurück",
    backLong: "← Zurück zum Portfolio",
    print: "Drucken",
    download: "PDF herunterladen",
    profile: "Profil",
    experience: "Berufserfahrung",
    caseStudies: "Ausgewählte Fallstudien",
    skills: "Kenntnisse",
    education: "Ausbildung",
    languages: "Sprachen",
  },
});

export const CV_PDF_PATH = "/cv/Justin-Johnson-CV.pdf";

export default function CVPage() {
  useSEO({
    title: copy.title,
    description: copy.description,
    path: "/cv",
    keywords: copy.keywords,
    jsonLd: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": profile.name,
        "jobTitle": profile.jobTitle,
        "url": "https://www.justinjohnson.de/",
        "email": `mailto:${profile.email}`,
      },
    }),
  });

  return (
    <div className="min-h-screen bg-background text-on-surface print:bg-white print:text-black">
      <div className="print:hidden sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-outline-variant">
        <div className="max-w-4xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-2">
          <a
            href={lp("/")}
            className="text-xs sm:text-sm font-bold text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
          >
            <span className="sm:hidden">{copy.back}</span>
            <span className="hidden sm:inline">{copy.backLong}</span>
          </a>
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-outline-variant text-xs sm:text-sm font-bold hover:bg-surface-container-low transition-colors whitespace-nowrap"
            >
              {copy.print}
            </button>
            <a
              href={CV_PDF_PATH}
              download
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary text-on-primary text-xs sm:text-sm font-black uppercase tracking-wide hover:bg-primary-container transition-colors whitespace-nowrap"
            >
              {copy.download}
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12 print:py-0 print:px-0 print:max-w-full">
        <header className="mb-10 print:mb-6 border-b border-outline-variant print:border-black pb-8 print:pb-4">
          <h1 className="font-headline text-4xl md:text-5xl font-black">{profile.name}</h1>
          <p className="text-xl text-primary print:text-black font-bold mt-1">{profile.jobTitle}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm text-on-surface-variant print:text-black">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`} className="hover:text-primary print:text-black">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="hover:text-primary print:text-black">
              {profile.phoneDisplay}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary print:text-black"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary print:text-black"
            >
              GitHub
            </a>
          </div>
        </header>

        <Section title={copy.profile}>
          <p className="leading-relaxed text-on-surface-variant print:text-black">{profile.summary}</p>
        </Section>

        <Section title={copy.experience}>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.company}>
                <div className="flex flex-wrap justify-between gap-x-4">
                  <h3 className="font-bold">
                    {exp.role} &middot; {exp.company}
                  </h3>
                  <span className="text-sm text-on-surface-variant print:text-black">{exp.period}</span>
                </div>
                <p className="text-sm text-on-surface-variant print:text-black">{exp.location}</p>
                <p className="mt-1 text-on-surface-variant print:text-black leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={copy.caseStudies}>
          <div className="space-y-4">
            {caseStudies.map((cs) => (
              <div key={cs.slug}>
                <h3 className="font-bold">{cs.title}</h3>
                <p className="text-sm text-on-surface-variant print:text-black">
                  {cs.company} &middot; {cs.period}
                </p>
                <p className="mt-1 text-on-surface-variant print:text-black leading-relaxed">
                  {cs.outcome}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={copy.skills}>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {skills.map((skill) => (
              <div key={skill.title}>
                <span className="font-bold text-sm">{skill.title}: </span>
                <span className="text-on-surface-variant print:text-black text-sm">
                  {skill.tags.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title={copy.education}>
          <div className="space-y-3">
            {education.map((edu) => (
              <div key={edu.degree} className="flex flex-wrap justify-between gap-x-4">
                <span className="font-bold">
                  {edu.degree} — {edu.institution}
                </span>
                <span className="text-sm text-on-surface-variant print:text-black">{edu.years}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title={copy.languages}>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {languages.map((lang) => (
              <span key={lang.name} className="text-on-surface-variant print:text-black">
                <span className="font-bold text-on-surface print:text-black">{lang.name}</span> —{" "}
                {lang.level}
                {lang.note ? ` (${lang.note})` : ""}
              </span>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10 print:mb-6 print:break-inside-avoid">
      <h2 className="text-xs uppercase tracking-[0.2em] font-black text-primary print:text-black border-b border-outline-variant print:border-black pb-2 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
