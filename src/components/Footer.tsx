import { useId, useState } from "react";
import { profile } from "../data/profile";
import { CATEGORY_LABELS, CATEGORY_PATHS, type SeoCategory } from "../data/seo/types";

const seoCategories: SeoCategory[] = ["services", "technologies", "solutions", "resources", "industries", "guides"];

// The footer appears on every page, so home sections are linked as "/#id" rather than "#id".
const exploreLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Ventures", href: "/#ventures" },
  { label: "Projects", href: "/#projects" },
];

const workLinks = [
  { label: "Hire Me", href: "/#contact" },
  { label: "Freelance", href: "/freelance" },
  { label: "Blog", href: "/blog" },
  { label: "Download CV", href: "/cv" },
];

const resourceLinks = seoCategories.map((category) => ({
  label: CATEGORY_LABELS[category],
  href: CATEGORY_PATHS[category],
}));

const linkClass = "text-sm text-on-surface-variant hover:text-primary transition-colors";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-low w-full mt-16 md:mt-24 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 sm:gap-x-6 sm:gap-y-10">
          <Brand />

          {/* Phones: contact card comes straight after the brand; wider screens: last column */}
          <div className="order-2 sm:order-last mt-8 sm:mt-0 lg:col-span-2">
            <ColumnTitle className="hidden sm:block">Get in touch</ColumnTitle>
            <ul className="grid gap-3 p-4 sm:p-0 bg-white sm:bg-transparent border border-outline-variant sm:border-0 rounded-2xl shadow-sm sm:shadow-none">
              <li>
                <a href={`mailto:${profile.email}`} className={`${linkClass} inline-flex items-start gap-2 break-all`}>
                  <span className="material-symbols-outlined text-base text-primary">mail</span>
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone}`} className={`${linkClass} inline-flex items-center gap-2`}>
                  <span className="material-symbols-outlined text-base text-primary">call</span>
                  {profile.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-base text-primary">location_on</span>
                {profile.location}
              </li>
            </ul>
          </div>

          <div className="order-3 mt-6 sm:mt-0 border-t border-outline-variant sm:border-0 sm:contents">
            <LinkGroup title="Explore" links={exploreLinks} className="sm:order-3 lg:col-span-2" />
            <LinkGroup title="Work with me" links={workLinks} className="sm:order-3 lg:col-span-2" />
            <LinkGroup title="Resources" links={resourceLinks} className="sm:order-3 lg:col-span-2" />
          </div>
        </div>

        {/* Extra bottom padding on phones keeps the bar clear of the floating buttons */}
        <div className="mt-8 md:mt-16 py-6 pb-28 sm:pb-6 border-t border-outline-variant flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-xs text-on-surface-variant text-center">
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1 font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Back to top
            <span className="material-symbols-outlined text-base">arrow_upward</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function Brand() {
  return (
    <div className="order-1 sm:col-span-2 lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5">
      <a href="/" className="font-headline text-2xl font-black tracking-tighter text-primary">
        JUSTIN JOHNSON
      </a>
      <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm">
        {profile.jobTitle} in {profile.location}, building fast, scalable web platforms for
        e-commerce, travel and service businesses, and founder of{" "}
        <a
          href="https://assist.siteselo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-on-surface hover:text-primary transition-colors"
        >
          Selo Assist
        </a>
        .
      </p>
      <div className="flex gap-2">
        <SocialLink href={profile.linkedin} label="LinkedIn">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.92 1.3-1.92 2.63V21h-4z" />
        </SocialLink>
        <SocialLink href={profile.github} label="GitHub">
          <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5z" />
        </SocialLink>
        <SocialLink href={`https://wa.me/${profile.whatsapp}`} label="WhatsApp">
          <path d="M12 .5A11.4 11.4 0 0 0 2.2 17.7L.6 23.5l6-1.6A11.4 11.4 0 1 0 12 .5zm0 20.8a9.4 9.4 0 0 1-4.8-1.3l-.35-.2-3.55.93.95-3.46-.23-.36A9.4 9.4 0 1 1 12 21.3zm5.2-7c-.28-.14-1.68-.83-1.94-.92-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.17.19-.33.21-.62.07a7.7 7.7 0 0 1-3.82-3.34c-.29-.5.29-.46.82-1.53.09-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 .97-1 2.37 0 1.4 1.02 2.75 1.17 2.94.14.19 2.01 3.07 4.87 4.3 1.81.78 2.52.85 3.42.71.55-.08 1.68-.69 1.92-1.35.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
        </SocialLink>
        <SocialLink href={`mailto:${profile.email}`} label="Email" external={false}>
          <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2.2V17h16V7.2l-8 5.6zM5.4 7 12 11.6 18.6 7z" />
        </SocialLink>
      </div>
    </div>
  );
}

// On phones each group is a tap-to-open row; from the small breakpoint up it is an always-open column.
function LinkGroup({
  title,
  links,
  className = "",
}: {
  title: string;
  links: { label: string; href: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <div className={`border-b border-outline-variant sm:border-0 ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={listId}
        className="sm:hidden w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-[0.2em] font-black text-on-surface">{title}</span>
        <span className={`material-symbols-outlined text-xl text-on-surface-variant transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>
      <ColumnTitle className="hidden sm:block">{title}</ColumnTitle>
      <ul id={listId} className={`${open ? "grid" : "hidden"} sm:grid grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-3 pb-5 sm:pb-0`}>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className={linkClass}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ColumnTitle({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <h3 className={`text-[10px] uppercase tracking-[0.2em] font-black text-on-surface mb-4 ${className}`}>{children}</h3>
  );
}

function SocialLink({
  href,
  label,
  external = true,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="flex items-center justify-center w-10 h-10 rounded-[999px] bg-white border border-outline-variant text-on-surface-variant shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary hover:border-primary hover:text-on-primary"
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-hidden="true">
        {children}
      </svg>
    </a>
  );
}
