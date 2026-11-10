/**
 * Locale handling for the English (default, unprefixed) and German (/de) versions of the site.
 *
 * Every navigation on this site is a full page load (no client-side router), so the locale
 * is resolved once from the URL when the bundle boots. Outside the browser (sitemap script,
 * QA scripts) it falls back to English.
 */

export type Locale = "en" | "de";

export const LOCALES: Locale[] = ["en", "de"];

export const LOCALE_PREFIX: Record<Locale, string> = { en: "", de: "/de" };

/** BCP 47 tags used for <html lang>, hreflang and date formatting. */
export const LOCALE_TAGS: Record<Locale, string> = { en: "en", de: "de" };

/** Open Graph locale codes. */
export const OG_LOCALES: Record<Locale, string> = { en: "en_US", de: "de_DE" };

export function detectLocale(pathname: string): Locale {
  return pathname === "/de" || pathname.startsWith("/de/") ? "de" : "en";
}

/** Removes the locale prefix, returning the logical (English) route path. */
export function stripLocale(pathname: string): string {
  if (pathname === "/de" || pathname === "/de/") return "/";
  if (pathname.startsWith("/de/")) return pathname.slice(3);
  return pathname;
}

/**
 * Turns a logical site path ("/", "/cv", "/#contact") into the path for a given locale.
 * Hash-only links, external URLs, mailto: and tel: links are returned unchanged.
 */
export function localizePath(path: string, target: Locale): string {
  if (target === "en" || !path.startsWith("/") || path.startsWith("//")) return path;
  if (path === "/") return "/de";
  if (path.startsWith("/#")) return `/de${path.slice(1)}`;
  if (path.startsWith("/de/") || path === "/de") return path;
  return `/de${path}`;
}

export const locale: Locale =
  typeof window !== "undefined" ? detectLocale(window.location.pathname) : "en";

export const isGerman = locale === "de";

/** Localizes an internal path for the current page's locale. */
export function lp(path: string): string {
  return localizePath(path, locale);
}

/** Picks the copy for the current locale. */
export function t<T>(copy: Record<Locale, T>): T {
  return copy[locale];
}

/** Path of the current page in the other language (keeps the hash). */
export function alternateLocaleHref(target: Locale): string {
  if (typeof window === "undefined") return "/";
  const logical = stripLocale(window.location.pathname);
  return `${localizePath(logical, target)}${window.location.hash}`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(locale === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
