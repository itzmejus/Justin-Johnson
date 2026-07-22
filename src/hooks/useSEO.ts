import { useEffect } from "react";

const SITE_URL = "https://www.justinjohnson.de";
const DEFAULT_IMAGE = `${SITE_URL}/headshot.png`;

type SEOOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  jsonLd?: string;
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

/** Updates document head tags for the current client-rendered route. */
export function useSEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  jsonLd,
}: SEOOptions) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousKeywords = document.querySelector('meta[name="keywords"]')?.getAttribute("content") ?? null;
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setLink("canonical", url);

    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = jsonLd;
      document.head.appendChild(script);
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
      script?.remove();
    };
  }, [title, description, path, image, type, keywords, jsonLd]);
}
