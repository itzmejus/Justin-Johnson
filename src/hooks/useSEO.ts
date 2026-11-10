import { useEffect } from "react";
import { LOCALES, LOCALE_TAGS, OG_LOCALES, locale, localizePath } from "../i18n/locale";

const SITE_URL = "https://www.justinjohnson.de";
const DEFAULT_IMAGE = `${SITE_URL}/headshot.png`;

type SEOOptions = {
  title: string;
  description: string;
  /** Logical (unprefixed, English) route path — the hook localizes it and emits hreflang alternates. */
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  /** One or more pre-serialized JSON-LD strings, each rendered as its own <script> tag. */
  jsonLd?: string | string[];
  /** Set false for pages that only exist in the current language (e.g. not-found pages). */
  alternates?: boolean;
};

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

/** Updates document head tags for the current client-rendered route. */
export function useSEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  jsonLd,
  alternates = true,
}: SEOOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute("content") ?? null;
    const url = absoluteUrl(localizePath(path, locale));

    document.documentElement.lang = LOCALE_TAGS[locale];
    document.title = title;
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setLink("canonical", url);

    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);
    setMeta("property", "og:locale", OG_LOCALES[locale]);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    const added: Element[] = [];

    if (alternates) {
      for (const target of [...LOCALES, "x-default"] as const) {
        const link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", target === "x-default" ? "x-default" : LOCALE_TAGS[target]);
        link.setAttribute("href", absoluteUrl(localizePath(path, target === "x-default" ? "en" : target)));
        document.head.appendChild(link);
        added.push(link);
      }
      for (const other of LOCALES.filter((l) => l !== locale)) {
        const meta = document.createElement("meta");
        meta.setAttribute("property", "og:locale:alternate");
        meta.setAttribute("content", OG_LOCALES[other]);
        document.head.appendChild(meta);
        added.push(meta);
      }
    }

    if (jsonLd) {
      const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      for (const entry of entries) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = entry;
        document.head.appendChild(script);
        added.push(script);
      }
    }

    return () => {
      document.title = previousTitle;
      if (keywords) {
        if (previousKeywords !== null) {
          setMeta("name", "keywords", previousKeywords);
        } else {
          document.querySelector('meta[name="keywords"]')?.remove();
        }
      }
      added.forEach((el) => el.remove());
    };
  }, [title, description, path, image, type, keywords, jsonLd, alternates]);
}
