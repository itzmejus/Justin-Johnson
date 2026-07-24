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

export const hubConfigs: Record<SeoCategory, HubConfig> = {
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
