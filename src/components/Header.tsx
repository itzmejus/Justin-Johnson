import { useState } from "react";
import { profile } from "../data/profile";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Freelance", href: "/freelance" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const onHome = window.location.pathname === "/";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-xl shadow-[0_0_32px_0_rgba(255,255,255,0.04)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-20">
        <a
          href="/"
          onClick={(e) => {
            if (onHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="shrink-0 whitespace-nowrap text-lg sm:text-xl xl:text-2xl font-black text-cyan-400 tracking-tighter font-['Space_Grotesk']"
        >
          JUSTIN JOHNSON
        </a>

        <nav className="hidden xl:flex gap-6 items-center font-['Space_Grotesk'] font-bold tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href.startsWith("#") && !onHome ? `/${link.href}` : link.href}
              className="text-zinc-400 font-medium hover:text-cyan-300 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv"
            className="flex items-center gap-1.5 border border-primary/40 text-primary px-5 py-2 rounded-full font-bold transition-all duration-300 hover:bg-primary/10 whitespace-nowrap"
          >
            <span className="material-symbols-outlined text-base">description</span>
            CV
          </a>
          <a
            href={onHome ? "#contact" : "/#contact"}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Hire Me
          </a>
        </nav>

        <div className="hidden xl:flex items-center gap-4 ml-4 shrink-0">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Justin Johnson"
            className="flex items-center justify-center w-5 h-5 text-zinc-400 hover:text-cyan-300 transition-colors"
          >
            <span className="material-symbols-outlined text-xl leading-none">mail</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Justin Johnson on LinkedIn"
            className="flex items-center justify-center w-5 h-5 text-zinc-400 hover:text-cyan-300 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
        </div>

        <button
          className="xl:hidden shrink-0 text-primary"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="xl:hidden bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-zinc-800/30 px-6 pb-6 pt-4 flex flex-col items-center text-center gap-5 font-['Space_Grotesk'] font-bold max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href.startsWith("#") && !onHome ? `/${link.href}` : link.href}
              className="text-zinc-400 text-lg hover:text-cyan-300 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="w-full border-t border-zinc-800/30" />
          <a
            href="/cv"
            className="flex items-center gap-1.5 border border-primary/40 text-primary px-5 py-2 rounded-full font-bold transition-all duration-300 hover:bg-primary/10"
          >
            <span className="material-symbols-outlined text-base">description</span>
            CV
          </a>
          <a
            href={onHome ? "#contact" : "/#contact"}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
          <div className="flex items-center justify-center gap-6 pt-1 border-t border-zinc-800/30 w-full">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-zinc-400 text-sm hover:text-cyan-300 transition-colors"
            >
              <span className="material-symbols-outlined text-base leading-none">mail</span>
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 text-sm hover:text-cyan-300 transition-colors"
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
