import { profile } from "../data/profile";
import { CATEGORY_LABELS, CATEGORY_PATHS, type SeoCategory } from "../data/seo/types";

const seoCategories: SeoCategory[] = ["services", "technologies", "solutions", "resources", "industries", "guides"];

const linkClass =
  "text-on-surface-variant font-['Inter'] text-[10px] tracking-[0.05em] uppercase hover:text-primary transition-all duration-300 underline decoration-2 underline-offset-4";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full pt-12 pb-28 sm:pb-12 px-4 md:px-8 mt-24 border-t border-outline-variant">
      <div className="flex flex-col items-center max-w-7xl mx-auto w-full gap-8">
        <nav aria-label="Site sections" className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {seoCategories.map((category) => (
            <a key={category} href={CATEGORY_PATHS[category]} className={linkClass}>
              {CATEGORY_LABELS[category]}
            </a>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={`mailto:${profile.email}`} className={`${linkClass} break-all`}>
            {profile.email}
          </a>
          <a href="/cv" className={linkClass}>
            Download CV
          </a>
          <a href="/blog" className={linkClass}>
            Blog
          </a>
          <a href="/freelance" className={linkClass}>
            Freelance
          </a>
        </div>
      </div>
    </footer>
  );
}
