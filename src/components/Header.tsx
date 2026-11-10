import { useState } from "react";
import { profile } from "../data/profile";
import { alternateLocaleHref, locale, lp, stripLocale, t, type Locale } from "../i18n/locale";

const navLinks = t({
  en: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Freelance", href: "/freelance" },
    { label: "Contact", href: "#contact" },
  ],
  de: [
    { label: "Über mich", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Erfahrung", href: "#experience" },
    { label: "Fallstudien", href: "#case-studies" },
    { label: "Projekte", href: "#projects" },
    { label: "Blog", href: "/blog" },
    { label: "Freelance", href: "/freelance" },
    { label: "Kontakt", href: "#contact" },
  ],
});

const copy = t({
  en: {
    hire: "Hire Me",
    email: "Email",
    emailLabel: "Email Justin Johnson",
    linkedinLabel: "Justin Johnson on LinkedIn",
    menu: "Toggle menu",
    language: "Language",
  },
  de: {
    hire: "Anfragen",
    email: "E-Mail",
    emailLabel: "E-Mail an Justin Johnson",
    linkedinLabel: "Justin Johnson auf LinkedIn",
    menu: "Menü öffnen oder schließen",
    language: "Sprache",
  },
});

const LANGUAGE_NAMES: Record<Locale, string> = { en: "English", de: "Deutsch" };

/** Hash links point at home sections; off the home page they need the localized home path in front. */
function navHref(href: string, onHome: boolean) {
  if (href.startsWith("#")) return onHome ? href : `${lp("/")}${href}`;
  return lp(href);
}

function LanguageSwitcher() {
  return (
    <div
      className="flex items-center rounded-full border border-outline-variant text-xs font-bold overflow-hidden shrink-0"
      role="group"
      aria-label={copy.language}
    >
      {(["en", "de"] as Locale[]).map((l) =>
        l === locale ? (
          <span key={l} className="px-2.5 py-1 bg-primary text-on-primary" aria-current="true" title={LANGUAGE_NAMES[l]}>
            {l.toUpperCase()}
          </span>
        ) : (
          <a
            key={l}
            href={alternateLocaleHref(l)}
            hrefLang={l}
            lang={l}
            title={LANGUAGE_NAMES[l]}
            className="px-2.5 py-1 text-on-surface-variant hover:text-primary transition-colors"
          >
            {l.toUpperCase()}
          </a>
        ),
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const onHome = stripLocale(window.location.pathname) === "/";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-outline-variant">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-20">
        <a
          href={lp("/")}
          onClick={(e) => {
            if (onHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="shrink-0 whitespace-nowrap text-lg sm:text-xl xl:text-2xl font-black text-primary tracking-tighter font-['Space_Grotesk']"
        >
          JUSTIN JOHNSON
        </a>

        <nav className="hidden xl:flex gap-4 2xl:gap-6 items-center text-[15px] 2xl:text-base font-['Space_Grotesk'] font-bold tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={navHref(link.href, onHome)}
              className="text-on-surface-variant font-medium hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href={lp("/cv")}
            className="flex items-center gap-1.5 border border-primary/40 text-primary px-4 2xl:px-5 py-2 rounded-full font-bold transition-all duration-300 hover:bg-primary/10 whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">description</span>
            CV
          </a>
          <a
            href={navHref("#contact", onHome)}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/25 px-5 2xl:px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            {copy.hire}
          </a>
        </nav>

        <div className="hidden xl:flex items-center gap-4 ml-4 shrink-0">
          <LanguageSwitcher />
          {/* Email/LinkedIn icons only where there's room; they're also in the footer and mobile menu */}
          <a
            href={`mailto:${profile.email}`}
            aria-label={copy.emailLabel}
            className="hidden 2xl:flex items-center justify-center w-5 h-5 text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl leading-none">mail</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={copy.linkedinLabel}
            className="hidden 2xl:flex items-center justify-center w-5 h-5 text-on-surface-variant hover:text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </div>

        <div className="xl:hidden flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <button className="shrink-0 text-primary" onClick={() => setMenuOpen((o) => !o)} aria-label={copy.menu}>
            <span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-outline-variant px-6 pb-6 pt-4 flex flex-col items-center text-center gap-5 font-['Space_Grotesk'] font-bold max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={navHref(link.href, onHome)}
              className="text-on-surface-variant text-lg hover:text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="w-full border-t border-outline-variant" />
          <a
            href={lp("/cv")}
            className="flex items-center gap-1.5 border border-primary/40 text-primary px-5 py-2 rounded-full font-bold transition-all duration-300 hover:bg-primary/10"
          >
            <span className="material-symbols-outlined text-base">description</span>
            CV
          </a>
          <a
            href={navHref("#contact", onHome)}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/25 px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setMenuOpen(false)}
          >
            {copy.hire}
          </a>
          <div className="flex items-center justify-center gap-6 pt-1 border-t border-outline-variant w-full">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base leading-none">mail</span>
              {copy.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
