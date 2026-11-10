import { useEffect, useState } from 'react'
import Profile from '../../assets/Profile.webp'
import { useChatWidget } from '../../hooks/useChatWidget'
import { t } from '../../i18n/locale'

const roles = t({
  en: [
    "Full Stack Developer",
    "Founder of Selo Assist",
    "E-commerce Specialist",
    "Next.js & React Engineer",
    "Payment Integration Expert",
  ],
  de: [
    "Full Stack Entwickler",
    "Gründer von Selo Assist",
    "E-Commerce-Spezialist",
    "Next.js- & React-Entwickler",
    "Experte für Zahlungsintegration",
  ],
});

const copy = t({
  en: {
    basedIn: "Based in",
    location: "Abu Dhabi, UAE",
    tagline: "Crafting high-performance digital ecosystems with precision and code.",
    hire: "Hire Me",
    portfolio: "View Portfolio",
    askAi: "or ask my AI assistant a question",
    rolesSr: "Full Stack Developer, founder of Selo Assist and e-commerce specialist",
    clientsTitle: "Built for businesses across the UAE, UK & beyond",
    yrs: "5+ yrs",
    years: "5+ Years",
    globalExperience: "Global Experience",
  },
  de: {
    basedIn: "Ansässig in",
    location: "Abu Dhabi, VAE",
    tagline: "Ich entwickle leistungsstarke digitale Ökosysteme – präzise und mit sauberem Code.",
    hire: "Projekt anfragen",
    portfolio: "Portfolio ansehen",
    askAi: "oder stellen Sie meinem KI-Assistenten eine Frage",
    rolesSr: "Full Stack Entwickler, Gründer von Selo Assist und E-Commerce-Spezialist",
    clientsTitle: "Entwickelt für Unternehmen in den VAE, Großbritannien & darüber hinaus",
    yrs: "5+ J.",
    years: "5+ Jahre",
    globalExperience: "Internationale Erfahrung",
  },
});

const clients = [
  "Jade Props",
  "Jetset Visas",
  "Safaris UAE",
  "Excursions Dubai",
  "UAE Luxury Car Hire",
  "Minibus Hire London",
  "Dubai Print Design",
  "Compare Flights AE",
  "UAE Transfers",
  "Tawaf Essentials",
  "Daisy's Paws",
  "SMP Nationwide",
  "Maldives Hotel Reviews",
  "Selo Assist",
];

export default function HeroSection() {
  return (
    <section className="site-hero relative min-h-[600px] md:min-h-[921px] flex flex-col overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="flex-1 flex items-center px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto w-full z-10 grid md:grid-cols-2 gap-12 items-center">
          <HeroCopy />
          <HeroImage />
        </div>
      </div>

      <ClientMarquee />
    </section>
  );
}

function HeroCopy() {
  const chat = useChatWidget();

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h1 className="min-w-0 font-headline text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            JUSTIN <br />
            <span className="text-primary">JOHNSON</span>
          </h1>
          <MobilePhoto />
        </div>
        <TypedRole />
      </div>

      <p className="text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-lg font-light leading-relaxed">
        {copy.basedIn}{" "}
        <span className="text-on-surface font-semibold">{copy.location}</span>.{" "}
        {copy.tagline}
      </p>

      <div className="space-y-4 pt-4">
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/25 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95"
          >
            {copy.hire}
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-outline-variant text-on-surface rounded-full font-bold text-lg hover:bg-surface-container-low transition-colors"
          >
            {copy.portfolio}
          </a>
        </div>

        {/* Only offered once the Selo Assist widget has loaded, since it is what opens the chat */}
        {chat.ready && (
          <button
            type="button"
            data-chat-open
            className="group inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-lg text-primary">forum</span>
            {copy.askAi}
            <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
          </button>
        )}
      </div>
    </div>
  );
}

// Types each role, pauses, deletes it and moves to the next. With reduced motion
// it simply swaps the whole role every few seconds.
function TypedRole() {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const role = roles[index];

  useEffect(() => {
    if (reduceMotion) {
      const timer = setTimeout(() => setIndex((i) => (i + 1) % roles.length), 3000);
      return () => clearTimeout(timer);
    }

    const typed = length === role.length;
    const cleared = length === 0;
    const delay = !deleting && typed ? 1800 : deleting ? 35 : 70;

    const timer = setTimeout(() => {
      if (!deleting && typed) {
        setDeleting(true);
      } else if (deleting && cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % roles.length);
      } else {
        setLength((l) => l + (deleting ? -1 : 1));
      }
    }, deleting && cleared ? 300 : delay);
    return () => clearTimeout(timer);
  }, [length, deleting, role, reduceMotion]);

  const text = reduceMotion ? role : role.slice(0, length);

  return (
    <p className="font-headline text-xl sm:text-2xl md:text-3xl font-bold text-on-surface min-h-[1.5em]">
      <span className="sr-only">{copy.rolesSr}</span>
      <span aria-hidden="true">
        {text}
        <span className="inline-block w-[3px] h-[0.9em] ml-1 align-[-0.1em] bg-primary animate-caret" />
      </span>
    </p>
  );
}

function ClientMarquee() {
  // The list is rendered twice and slid left by half its width, so it loops seamlessly.
  const items = [...clients, ...clients];

  return (
    <div className="relative z-10 border-t border-outline-variant bg-white/60 backdrop-blur-sm py-5">
      <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-4 px-4">
        {copy.clientsTitle}
      </p>
      <div className="marquee-mask overflow-hidden group">
        <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {items.map((name, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length}
              className="flex items-center shrink-0 font-headline text-lg md:text-xl font-bold text-on-surface/70 whitespace-nowrap"
            >
              <span className="px-6 md:px-8">{name}</span>
              <span className="w-1.5 h-1.5 rounded-[999px] bg-primary/50" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Phones don't have room for the large portrait, so a smaller one sits beside the name.
function MobilePhoto() {
  return (
    <div className="relative shrink-0 md:hidden">
      <div className="w-24 sm:w-32 aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-primary/20 rotate-3">
        <img
          src={Profile}
          alt="Justin Johnson"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="absolute -bottom-2 -left-3 px-2 py-1 rounded-[999px] bg-primary text-on-primary text-[10px] font-bold uppercase tracking-wider shadow-lg shadow-primary/30 whitespace-nowrap">
        {copy.yrs}
      </span>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative hidden md:block">
      <div className="aspect-square bg-surface-container-low rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-outline-variant relative group">
        <img
          src={Profile}
          alt="Justin Johnson"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover filter  hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
          <div className="font-headline text-3xl font-bold text-white">{copy.years}</div>
          <div className="text-white/80 text-sm uppercase tracking-widest">
            {copy.globalExperience}
          </div>
        </div>
      </div>
    </div>
  );
}
