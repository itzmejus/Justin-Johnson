import { locale } from "../../i18n/locale";
import type { SeoCategory } from "./types";

export type HubGroup = { heading: string; slugs: string[] };

export type HubConfig = {
  category: SeoCategory;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  intro: string[];
  groups: HubGroup[];
};

const hubConfigsEn: Record<SeoCategory, HubConfig> = {
  services: {
    category: "services",
    eyebrow: "Services",
    h1: "Web Development Services",
    title: "Web Development Services | Justin Johnson",
    description: "Development services across Next.js, React, full-stack, Supabase, SaaS, CRM, and e-commerce, from a freelance engineer.",
    intro: [
      "This is the full breakdown of what I build, beyond the summary on the main services page — each one below covers what's included, how the work is structured, and the technology behind it in more depth.",
      "If nothing here matches exactly what you need, the custom web application development page is the closer fit for anything specific to your business that doesn't map to a standard category.",
    ],
    groups: [
      { heading: "Build From Scratch", slugs: ["nextjs-development-services", "react-development-services", "full-stack-development-services", "typescript-development-services", "custom-web-application-development"] },
      { heading: "Data & Product Infrastructure", slugs: ["supabase-development-services", "saas-application-development", "crm-development-services", "admin-dashboard-development", "api-development-integration"] },
      { heading: "Commerce & Content", slugs: ["ecommerce-development", "progressive-web-app-development", "headless-cms-development"] },
      { heading: "Keep It Running", slugs: ["website-redesign-services", "website-maintenance-services"] },
    ],
  },
  technologies: {
    category: "technologies",
    eyebrow: "Technologies",
    h1: "Technology Expertise",
    title: "Technology Expertise | Justin Johnson",
    description: "Applied expertise across Next.js, React, TypeScript, Supabase, PostgreSQL, and the tools around them.",
    intro: [
      "This is a breakdown of the specific technologies behind the services above — what each one does, where it fits, and the tradeoffs involved in choosing it, written from direct hands-on use rather than as a marketing feature list.",
      "Start with a services page if you already know what you need built; use these if you're evaluating a specific technology choice.",
    ],
    groups: [
      { heading: "Next.js Rendering & Routing", slugs: ["nextjs-app-router", "react-server-components", "nextjs-server-side-rendering", "nextjs-static-site-generation", "nextjs-incremental-static-regeneration"] },
      { heading: "Next.js Application Layer", slugs: ["nextjs-authentication", "nextjs-seo", "nextjs-performance-optimization", "react-performance-optimization", "typescript-for-web-applications"] },
      { heading: "Data Layer", slugs: ["supabase-authentication", "supabase-database-development", "postgresql-development", "rest-api-development", "graphql-development"] },
      { heading: "Integrations & Deployment", slugs: ["tailwind-css-development", "google-maps-api-integration", "stripe-payment-integration", "vercel-deployment", "docker-deployment"] },
    ],
  },
  solutions: {
    category: "solutions",
    eyebrow: "AI & Automation",
    h1: "AI & Automation Solutions",
    title: "AI & Automation Solutions | Justin Johnson",
    description: "AI development and automation — chatbots, RAG systems, workflow automation, and where AI genuinely fits a business process.",
    intro: [
      "AI work here means integrating existing large language model APIs into real application workflows — grounded, tested, and scoped to a specific task, rather than a generic 'add AI' feature with no clear job to do.",
      "Start with AI consulting services if it's unclear where AI would actually help; otherwise the pages below cover the specific, common applications.",
    ],
    groups: [
      { heading: "AI Foundations", slugs: ["ai-development-services", "ai-consulting-services", "openai-api-integration", "retrieval-augmented-generation-systems", "ai-agents-for-businesses"] },
      { heading: "Customer-Facing AI", slugs: ["ai-chatbot-development", "ai-customer-support-automation", "ai-knowledge-base-development", "ai-appointment-scheduling"] },
      { heading: "Sales & Operations AI", slugs: ["ai-lead-generation-systems", "ai-powered-crm-solutions", "ai-automation-services", "ai-workflow-automation", "ai-document-processing", "ai-email-automation"] },
    ],
  },
  resources: {
    category: "resources",
    eyebrow: "SEO & Performance",
    h1: "SEO & Performance",
    title: "SEO & Website Performance | Justin Johnson",
    description: "Technical SEO, Core Web Vitals, and site architecture — fixed at the code level by a developer, not a generic marketing checklist.",
    intro: [
      "This covers the technical side of search visibility and site speed — the part of SEO that lives in code, architecture, and rendering decisions rather than content or backlinks.",
      "These pages are written for site owners and developers evaluating what's actually wrong with a site's search performance, not as a generic SEO glossary.",
    ],
    groups: [
      { heading: "Technical SEO", slugs: ["technical-seo-services", "nextjs-seo-services", "react-website-seo", "javascript-seo", "structured-data-implementation"] },
      { heading: "Speed & Core Web Vitals", slugs: ["core-web-vitals-optimization", "website-speed-optimization", "mobile-website-optimization"] },
      { heading: "Architecture & Discovery", slugs: ["xml-sitemap-optimization", "internal-linking-strategy", "programmatic-seo", "local-seo-website-development"] },
      { heading: "Audits & UX", slugs: ["seo-website-audit", "conversion-focused-web-design", "website-accessibility-services"] },
    ],
  },
  industries: {
    category: "industries",
    eyebrow: "Industries",
    h1: "Industry Solutions",
    title: "Industry-Specific Web Development | Justin Johnson",
    description: "Web development for real estate, hospitality, healthcare, transport, and other industries with specific operational needs.",
    intro: [
      "Different industries have genuinely different operational requirements — a real estate site needs property search, a restaurant needs a menu that updates easily, a transport company needs route-based booking. These pages cover the patterns specific to each.",
      "If your business doesn't fit neatly into one of these, web development for small businesses or custom web application development are the more general starting points.",
    ],
    groups: [
      { heading: "Property & Hospitality", slugs: ["web-development-for-real-estate", "crm-development-for-real-estate", "web-development-for-hotels", "hotel-booking-website-development"] },
      { heading: "Food & Retail", slugs: ["web-development-for-restaurants", "online-ordering-systems-for-restaurants"] },
      { heading: "Health & Personal Care", slugs: ["web-development-for-dental-clinics", "web-development-for-healthcare-clinics", "appointment-booking-systems", "web-development-for-salons", "salon-booking-system-development"] },
      { heading: "Transport & Travel", slugs: ["web-development-for-transport-companies", "bus-and-coach-booking-systems", "web-development-for-travel-agencies", "tour-booking-platform-development"] },
      { heading: "Professional & Institutional", slugs: ["web-development-for-schools", "school-management-software", "web-development-for-law-firms", "web-development-for-construction-companies", "web-development-for-small-businesses"] },
    ],
  },
  guides: {
    category: "guides",
    eyebrow: "Guides",
    h1: "Guides & Tutorials",
    title: "Next.js, React & AI Development Guides | Justin Johnson",
    description: "Practical, code-first guides covering Next.js, Supabase, Stripe, and AI integration — written from direct implementation.",
    intro: [
      "Step-by-step guides covering the technical work behind the services on this site — Next.js fundamentals, database and auth integration, payments, and AI features — with real code, common errors, and the reasoning behind each step.",
      "These are written for developers implementing this themselves; if you'd rather have it built, the relevant service page links from each guide.",
    ],
    groups: [
      { heading: "Getting Started", slugs: ["how-to-build-a-nextjs-website", "how-to-deploy-nextjs-on-vercel", "how-to-deploy-nextjs-on-cpanel", "how-to-create-dynamic-routes-in-nextjs"] },
      { heading: "SEO & Metadata", slugs: ["how-to-generate-metadata-in-nextjs", "how-to-create-an-xml-sitemap-in-nextjs", "how-to-add-json-ld-in-nextjs", "how-to-improve-seo-for-a-react-website"] },
      { heading: "Performance", slugs: ["how-to-improve-core-web-vitals-in-nextjs", "how-to-optimize-nextjs-images"] },
      { heading: "Data & Auth", slugs: ["how-to-use-supabase-authentication-with-nextjs", "how-to-connect-nextjs-to-postgresql", "how-to-protect-api-routes-in-nextjs", "how-to-build-a-nextjs-admin-dashboard"] },
      { heading: "Integrations & Products", slugs: ["how-to-add-google-maps-to-nextjs", "how-to-integrate-stripe-with-nextjs", "how-to-build-a-crm-with-nextjs-and-supabase", "how-to-build-a-saas-application-with-nextjs", "how-to-build-an-ai-chatbot-for-a-website", "how-to-integrate-the-openai-api-with-nextjs"] },
    ],
  },
};

type HubTranslation = Omit<HubConfig, "category" | "groups"> & { groupHeadings: string[] };

const hubTranslationsDe: Record<SeoCategory, HubTranslation> = {
  services: {
    eyebrow: "Leistungen",
    h1: "Webentwicklung – Leistungen",
    title: "Webentwicklung – Leistungen | Justin Johnson",
    description: "Entwicklungsleistungen für Next.js, React, Full Stack, Supabase, SaaS, CRM und E-Commerce – von einem freiberuflichen Entwickler.",
    intro: [
      "Hier finden Sie die vollständige Übersicht dessen, was ich entwickle – ausführlicher als die Zusammenfassung auf der Leistungsseite. Jede der folgenden Seiten beschreibt, was enthalten ist, wie die Arbeit abläuft und welche Technologie dahintersteht.",
      "Wenn nichts davon genau zu Ihrem Bedarf passt, ist die Seite zur individuellen Webanwendungsentwicklung der bessere Einstieg für alles, was speziell auf Ihr Unternehmen zugeschnitten ist und in keine Standardkategorie fällt.",
    ],
    groupHeadings: ["Neuentwicklung", "Daten- & Produktinfrastruktur", "Commerce & Content", "Betrieb & Pflege"],
  },
  technologies: {
    eyebrow: "Technologien",
    h1: "Technologie-Expertise",
    title: "Technologie-Expertise | Justin Johnson",
    description: "Praxiserfahrung mit Next.js, React, TypeScript, Supabase, PostgreSQL und den Werkzeugen rund um diese Technologien.",
    intro: [
      "Hier sind die konkreten Technologien hinter den Leistungen aufgeschlüsselt – was sie leisten, wo sie passen und welche Abwägungen mit ihrer Wahl verbunden sind. Geschrieben aus direkter Praxiserfahrung, nicht als Marketing-Featureliste.",
      "Beginnen Sie mit einer Leistungsseite, wenn Sie bereits wissen, was entwickelt werden soll; nutzen Sie diese Seiten, wenn Sie eine bestimmte Technologieentscheidung prüfen.",
    ],
    groupHeadings: ["Next.js Rendering & Routing", "Next.js Anwendungsschicht", "Datenschicht", "Integrationen & Deployment"],
  },
  solutions: {
    eyebrow: "KI & Automatisierung",
    h1: "KI- & Automatisierungslösungen",
    title: "KI- & Automatisierungslösungen | Justin Johnson",
    description: "KI-Entwicklung und Automatisierung – Chatbots, RAG-Systeme, Workflow-Automatisierung und wo KI wirklich in einen Geschäftsprozess passt.",
    intro: [
      "KI-Arbeit bedeutet hier, bestehende Large-Language-Model-APIs in echte Anwendungsabläufe zu integrieren – fundiert, getestet und auf eine konkrete Aufgabe zugeschnitten, statt einer generischen „KI hinzufügen“-Funktion ohne klaren Zweck.",
      "Beginnen Sie mit der KI-Beratung, wenn unklar ist, wo KI tatsächlich helfen würde; ansonsten behandeln die folgenden Seiten die konkreten, häufigen Anwendungsfälle.",
    ],
    groupHeadings: ["KI-Grundlagen", "KI im Kundenkontakt", "KI für Vertrieb & Betrieb"],
  },
  resources: {
    eyebrow: "SEO & Performance",
    h1: "SEO & Performance",
    title: "SEO & Website-Performance | Justin Johnson",
    description: "Technisches SEO, Core Web Vitals und Seitenarchitektur – auf Code-Ebene von einem Entwickler gelöst, keine generische Marketing-Checkliste.",
    intro: [
      "Hier geht es um die technische Seite von Sichtbarkeit in Suchmaschinen und Ladegeschwindigkeit – den Teil von SEO, der in Code, Architektur und Rendering-Entscheidungen steckt, nicht in Inhalten oder Backlinks.",
      "Diese Seiten richten sich an Website-Betreiber und Entwickler, die herausfinden wollen, was mit der Suchperformance ihrer Website tatsächlich nicht stimmt – kein allgemeines SEO-Glossar.",
    ],
    groupHeadings: ["Technisches SEO", "Geschwindigkeit & Core Web Vitals", "Architektur & Auffindbarkeit", "Audits & UX"],
  },
  industries: {
    eyebrow: "Branchen",
    h1: "Branchenlösungen",
    title: "Branchenspezifische Webentwicklung | Justin Johnson",
    description: "Webentwicklung für Immobilien, Hotellerie, Gesundheitswesen, Transport und andere Branchen mit besonderen betrieblichen Anforderungen.",
    intro: [
      "Verschiedene Branchen haben tatsächlich unterschiedliche betriebliche Anforderungen – eine Immobilien-Website braucht eine Objektsuche, ein Restaurant eine leicht aktualisierbare Speisekarte, ein Transportunternehmen eine routenbasierte Buchung. Diese Seiten behandeln die jeweils typischen Muster.",
      "Wenn Ihr Unternehmen in keine dieser Kategorien passt, sind Webentwicklung für kleine Unternehmen oder individuelle Webanwendungsentwicklung die allgemeineren Einstiegspunkte.",
    ],
    groupHeadings: ["Immobilien & Hotellerie", "Gastronomie & Handel", "Gesundheit & Körperpflege", "Transport & Reisen", "Dienstleister & Institutionen"],
  },
  guides: {
    eyebrow: "Anleitungen",
    h1: "Anleitungen & Tutorials",
    title: "Next.js-, React- & KI-Anleitungen | Justin Johnson",
    description: "Praxisnahe, codezentrierte Anleitungen zu Next.js, Supabase, Stripe und KI-Integration – aus direkter Umsetzungserfahrung geschrieben.",
    intro: [
      "Schritt-für-Schritt-Anleitungen zur technischen Arbeit hinter den Leistungen auf dieser Website – Next.js-Grundlagen, Datenbank- und Auth-Integration, Zahlungen und KI-Funktionen – mit echtem Code, typischen Fehlern und der Begründung hinter jedem Schritt.",
      "Sie richten sich an Entwickler, die das selbst umsetzen; wenn Sie es lieber entwickeln lassen möchten, verlinkt jede Anleitung auf die passende Leistungsseite.",
    ],
    groupHeadings: ["Erste Schritte", "SEO & Metadaten", "Performance", "Daten & Authentifizierung", "Integrationen & Produkte"],
  },
};

function translateHub(hub: HubConfig, tr: HubTranslation): HubConfig {
  if (tr.groupHeadings.length !== hub.groups.length) {
    throw new Error(`[hubs:de] ${hub.category} has ${tr.groupHeadings.length} group headings, English has ${hub.groups.length}`);
  }
  const { groupHeadings, ...copy } = tr;
  return { ...hub, ...copy, groups: hub.groups.map((g, i) => ({ ...g, heading: groupHeadings[i] })) };
}

const hubConfigsDe = Object.fromEntries(
  (Object.keys(hubConfigsEn) as SeoCategory[]).map((c) => [c, translateHub(hubConfigsEn[c], hubTranslationsDe[c])]),
) as Record<SeoCategory, HubConfig>;

export const hubConfigs: Record<SeoCategory, HubConfig> = locale === "de" ? hubConfigsDe : hubConfigsEn;
