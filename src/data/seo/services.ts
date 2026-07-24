import type { SeoPage } from "./types";

export const servicePages: SeoPage[] = [
  {
    slug: "nextjs-development-services",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "Next.js development services",
    secondaryKeywords: [
      "Next.js developer for hire",
      "Next.js web application development",
      "server-rendered Next.js sites",
      "Next.js e-commerce development",
      "Next.js consultant",
    ],
    searchIntent: "commercial",
    title: "Next.js Development Services | Justin Johnson",
    description: "Next.js development for content-heavy and commerce sites: App Router builds, server rendering, and SEO-first architecture from a freelance engineer.",
    h1: "Next.js Development Services",
    eyebrow: "Services",
    intro: [
      "Next.js is my default choice whenever a site needs to rank in search or load fast on the first visit. It gives you server rendering, file-based routing, and image/metadata handling without hand-rolling a build pipeline, which means less infrastructure code and more time spent on the product itself.",
      "I build and maintain production Next.js applications end to end — architecture decisions, data fetching strategy, deployment, and the ongoing changes that come after launch.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "A React single-page app that search engines can't index properly because content only appears after client-side JavaScript runs",
              "Marketing pages that load slowly because the whole bundle ships before anything becomes visible",
              "A codebase with no clear pattern for where data fetching, routing, and rendering decisions belong",
              "Needing both a fast marketing site and an authenticated app in the same codebase without duplicating infrastructure",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "App Router architecture with route groups and layouts",
              "Server and client component split for minimal JS shipped to the browser",
              "Metadata API setup for per-page titles, descriptions, and Open Graph tags",
              "Image optimization with next/image",
              "API routes or Route Handlers for backend logic",
              "Deployment pipeline (Vercel or self-hosted Node)",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Scope the pages and data sources, and decide what should be static, server-rendered, or client-rendered",
              "Set up the App Router structure, shared layouts, and design system integration (Tailwind CSS, component library)",
              "Build out routes, data fetching, and forms, with TypeScript types shared between frontend and API layer",
              "Wire up metadata, sitemap, and structured data before launch, not after",
              "Deploy, monitor Core Web Vitals, and hand over a codebase that's straightforward for another developer to pick up",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "Node.js APIs", "PostgreSQL or Supabase for data", "Vercel or Docker-based deployment"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Businesses that need a marketing site to actually rank in search, SaaS products that want a fast public-facing site alongside an app shell, and teams migrating off a slow client-rendered React app or a legacy CMS theme.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why Next.js instead of a plain React app?",
        answer: "A plain React app (Vite, Create React App) renders everything in the browser, so search engines and social media crawlers see an empty page until JavaScript executes. Next.js renders the initial HTML on the server or at build time, so content is present immediately — this matters directly for organic search visibility and for how fast the page feels on a slow connection.",
      },
      {
        question: "Do you use the Pages Router or the App Router?",
        answer: "App Router for new projects — it's the current model Next.js is built around, with better support for layouts, streaming, and server components. I'll work in the Pages Router for existing projects that are already built on it rather than force a migration that isn't needed.",
      },
      {
        question: "Can you migrate an existing React app to Next.js?",
        answer: "Yes. The routing and component structure usually carry over with adjustments; the bigger work is deciding what should become a server component versus stay client-side, and rebuilding data fetching around Next.js's model instead of useEffect-based fetching.",
      },
      {
        question: "Do you handle hosting and deployment?",
        answer: "Yes — typically Vercel for simplicity, or a Docker container on your own infrastructure if you need to keep everything in-house or avoid vendor lock-in.",
      },
    ],
    relatedSlugs: ["technologies/nextjs-app-router", "technologies/nextjs-seo", "services/react-development-services", "guides/how-to-build-a-nextjs-website"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "react-development-services",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "React development services",
    secondaryKeywords: [
      "React developer for hire",
      "custom React application development",
      "React frontend development",
      "React component development",
      "single page application development",
    ],
    searchIntent: "commercial",
    title: "React Development Services | Justin Johnson",
    description: "Custom React application and frontend development — component architecture, state management, and integration with existing APIs and backends.",
    h1: "React Development Services",
    eyebrow: "Services",
    intro: [
      "React is the right tool when you need an interactive interface — dashboards, booking flows, multi-step forms, anything with heavy client-side state. I build React frontends that stay maintainable as they grow, with clear component boundaries and typed data flowing through them.",
      "This covers both greenfield builds and taking over an existing React codebase that's grown past its original structure.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "A UI that's become hard to change because state is scattered across components with no clear ownership",
              "Slow interactions caused by unnecessary re-renders or oversized bundles",
              "A frontend that needs to talk to multiple backends or third-party APIs (payments, maps, CRMs) reliably",
              "No existing frontend at all — starting from a design and an API",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Component architecture and folder structure that scales past the first few features",
              "State management setup appropriate to the app's size (React state/context, or Redux for larger apps)",
              "Form handling with validation",
              "API integration with typed request/response contracts",
              "Accessibility pass — semantic HTML, keyboard navigation, focus states",
              "Performance profiling and fixes for slow renders",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Review the design or existing app and map out component boundaries and data flow",
              "Set up the project (or audit the existing one) with TypeScript, linting, and a build tool",
              "Build features incrementally, each one working end to end before moving to the next",
              "Test critical flows manually across breakpoints and browsers",
              "Hand over with documentation on where things live and why",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["React 18/19", "TypeScript", "Redux or React Context", "Tailwind CSS", "Vite or Next.js", "REST or GraphQL APIs"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Products that are primarily interactive rather than content-driven — internal tools, booking systems, marketplaces, and dashboards — plus teams that need an existing React codebase stabilized before adding new features.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "React or Next.js for my project?",
        answer: "If the app sits behind a login and search visibility doesn't matter — an admin dashboard, an internal tool — a plain React SPA (built with Vite) is simpler and has less infrastructure to manage. If any part of it needs to be found in search, Next.js is the better starting point.",
      },
      {
        question: "Can you work inside an existing React codebase?",
        answer: "Yes, this is common work. I start with an audit — component structure, state management, dependency versions — before making changes, so fixes don't conflict with patterns already in use elsewhere in the app.",
      },
      {
        question: "Do you write tests?",
        answer: "For critical paths — checkout flows, auth, anything with financial or data consequences — yes, typically with Vitest or Jest plus React Testing Library. For smaller marketing-style projects, manual QA across the flows is usually a better time investment than a full test suite.",
      },
      {
        question: "How do you handle state management?",
        answer: "I default to React's built-in state and context for most apps — it's less code to maintain. Redux comes in when state needs to be shared across many unrelated components, or when you need time-travel debugging and middleware for things like API caching.",
      },
    ],
    relatedSlugs: ["services/nextjs-development-services", "technologies/react-performance-optimization", "services/full-stack-development-services", "resources/react-website-seo"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "full-stack-development-services",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "full-stack development services",
    secondaryKeywords: [
      "full-stack developer for hire",
      "React and Node.js development",
      "end-to-end web application development",
      "full-stack web app development",
      "freelance full-stack engineer",
    ],
    searchIntent: "commercial",
    title: "Full-Stack Development Services | Justin Johnson",
    description: "End-to-end web application development covering frontend, backend, database, and deployment — one engineer across the whole stack.",
    h1: "Full-Stack Development Services",
    eyebrow: "Services",
    intro: [
      "Most projects don't need a five-person team to get from idea to a working product — they need one person who can move between the database, the API, and the interface without losing context switching between them. That's the work I do: frontend in React or Next.js, backend in Node.js, data layer in PostgreSQL, deployed and monitored.",
      "The advantage of one person across the stack is fewer handoffs and fewer integration bugs, because the same person who designed the API also built the UI that consumes it.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Needing a working product without assembling and managing a multi-person team",
              "Integration bugs that come from frontend and backend being built by people who never talk directly",
              "A prototype that needs to become a real, deployed application with a proper database",
              "Wanting one point of accountability for the whole build rather than coordinating specialists",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Database schema design (PostgreSQL/Supabase)",
              "REST API or Route Handlers with authentication",
              "React or Next.js frontend consuming that API",
              "Third-party integrations (payments, maps, messaging)",
              "Deployment and environment setup",
              "Ongoing maintenance after launch",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Define the data model first — this drives the API shape and the frontend structure",
              "Build the backend and a minimal frontend together, so the API is validated against real usage early",
              "Layer in the full interface once the core flows work",
              "Add authentication, error handling, and edge cases",
              "Deploy to a staging environment before going live",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["React / Next.js", "Node.js", "TypeScript", "PostgreSQL / Supabase", "AWS or Vercel", "Docker for containerized deployments"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Founders validating a product who need a real, working build rather than a static mockup, and small businesses that need custom software — a booking system, an internal tool, a client portal — that off-the-shelf products don't quite cover.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What does 'full-stack' actually cover here?",
        answer: "Database design, API/backend logic, the frontend that consumes it, and getting it deployed — one person handling all four layers instead of coordinating separate frontend and backend contractors.",
      },
      {
        question: "Is one full-stack developer enough for a real product?",
        answer: "For most early-stage products and small business tools, yes — the complexity that needs a dedicated backend or DevOps specialist usually shows up at a scale most projects haven't reached yet. I'll say directly if a project needs more than one engineer.",
      },
      {
        question: "Do you handle the database design too?",
        answer: "Yes — schema design, relationships, indexes, and migrations are part of the build, not an afterthought. Getting the data model right early avoids expensive rewrites later.",
      },
      {
        question: "What if my project grows past what one developer can maintain?",
        answer: "I'll flag that as it approaches, and hand over a codebase that's documented and structured well enough for additional developers to join without a lengthy onboarding process.",
      },
    ],
    relatedSlugs: ["services/nextjs-development-services", "services/api-development-integration", "services/saas-application-development", "technologies/postgresql-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "typescript-development-services",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "TypeScript development services",
    secondaryKeywords: [
      "TypeScript developer for hire",
      "JavaScript to TypeScript migration",
      "typed React development",
      "TypeScript API development",
      "TypeScript codebase audit",
    ],
    searchIntent: "commercial",
    title: "TypeScript Development Services | Justin Johnson",
    description: "TypeScript development and migration services — typed frontends, typed APIs, and converting existing JavaScript codebases without a rewrite.",
    h1: "TypeScript Development Services",
    eyebrow: "Services",
    intro: [
      "TypeScript catches a category of bugs before they reach production — wrong argument types, undefined properties, API responses that don't match what the frontend expects. I use it by default on every project, and I also take on migrations of existing JavaScript codebases that have grown past the point where untyped code is manageable.",
      "The value isn't the type annotations themselves, it's what they enable: safer refactors, better autocomplete, and a contract between frontend and backend that the compiler enforces instead of relying on documentation staying accurate.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Runtime errors from typos or wrong assumptions about a value's shape that only show up in production",
              "A JavaScript codebase that's become risky to refactor because nobody's sure what depends on what",
              "API responses drifting out of sync with what the frontend expects",
              "Onboarding new developers who have to read implementation code to understand what a function expects",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Incremental JavaScript-to-TypeScript migration (file by file, no big-bang rewrite)",
              "Shared types between API and frontend",
              "Strict mode configuration tuned to the project's risk tolerance",
              "Type-safe form validation and API clients",
              "ESLint rules that enforce type discipline going forward",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Set up the TypeScript config and get the build passing with permissive settings first",
              "Migrate high-traffic or high-risk files first — the ones where a bug costs the most",
              "Tighten compiler strictness incrementally as coverage improves",
              "Add types to API boundaries so frontend and backend can't silently drift apart",
              "Document any intentional escape hatches (any, unknown casts) so they're easy to find later",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["TypeScript", "React / Next.js", "Node.js", "Zod or similar for runtime validation", "ESLint with typescript-eslint"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Teams running a JavaScript codebase that's grown large enough that bugs from type mismatches are a recurring cost, and new projects that want type safety built in from the first commit rather than retrofitted later.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does migrating to TypeScript mean rewriting the app?",
        answer: "No. TypeScript is a superset of JavaScript, so files can be converted one at a time (.js to .ts) while the rest of the app keeps running. I typically start with the highest-risk or most-changed files rather than doing it all at once.",
      },
      {
        question: "How long does a migration take?",
        answer: "It depends entirely on codebase size and how dynamic the existing JavaScript is. A focused migration of the core data layer and API boundary is usually the highest-value first step, and can happen incrementally alongside regular feature work rather than as a separate blocking project.",
      },
      {
        question: "Is strict mode worth turning on?",
        answer: "For new projects, yes, from day one — it's much harder to retrofit strict null checks onto a large existing codebase. For migrations, I usually start loose and tighten settings gradually as coverage improves.",
      },
      {
        question: "Do you use TypeScript on the backend too?",
        answer: "Yes, when the backend is Node.js — it lets types flow from the database layer through the API to the frontend with a single source of truth for shared types.",
      },
    ],
    relatedSlugs: ["technologies/typescript-for-web-applications", "services/react-development-services", "services/api-development-integration", "guides/how-to-build-a-nextjs-website"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "supabase-development-services",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "Supabase development services",
    secondaryKeywords: [
      "Supabase developer for hire",
      "Supabase backend development",
      "Supabase and Next.js development",
      "Postgres backend development",
      "Supabase authentication setup",
    ],
    searchIntent: "commercial",
    title: "Supabase Development Services | Justin Johnson",
    description: "Supabase backend development — database schema, authentication, row-level security, and API design for React and Next.js applications.",
    h1: "Supabase Development Services",
    eyebrow: "Services",
    intro: [
      "Supabase gives a project a real PostgreSQL database, authentication, and auto-generated APIs without standing up a separate backend service — which makes it a strong default for products that need to move fast without giving up a proper relational database underneath.",
      "I build the schema, security rules, and integration layer so the frontend talks to Supabase safely, rather than treating it as a black box that happens to return data.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Needing user authentication and a database without building and hosting a custom backend from scratch",
              "Wanting real SQL and relational data instead of a document store that struggles with relationships",
              "Security rules that need to live at the database level, not just enforced in application code",
              "Realtime features — live updates, presence — without hand-rolling WebSocket infrastructure",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Database schema design with proper relationships and constraints",
              "Row-level security (RLS) policies so access control lives in the database",
              "Authentication setup (email/password, OAuth providers, magic links)",
              "Storage bucket configuration for file uploads",
              "Realtime subscriptions where the product needs live data",
              "Typed client integration in React/Next.js",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Design the schema based on the actual data relationships in the product, not a generic template",
              "Write row-level security policies before writing frontend code, so access control is never bolted on later",
              "Set up auth flows and test them against every user role in the system",
              "Generate typed database types and wire them into the frontend",
              "Load-test critical queries and add indexes where needed",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["Supabase", "PostgreSQL", "Next.js / React", "TypeScript", "Row-level security policies", "Supabase Storage"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "SaaS products and internal tools that need real user accounts and a relational database without the overhead of managing a separate backend server, and teams that want to avoid vendor lock-in that comes with fully proprietary backend-as-a-service platforms — Supabase is Postgres underneath, so the data stays portable.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Supabase or a custom Node.js backend the better choice?",
        answer: "Supabase is faster to build with for standard CRUD, auth, and file storage needs, because the database, auth, and API layer come already wired together. A custom Node.js backend makes more sense when the business logic is complex enough that you need full control over the API layer, not just the database.",
      },
      {
        question: "What is row-level security and why does it matter?",
        answer: "RLS is PostgreSQL's built-in access control — rules that run at the database level to decide which rows a given user can read or write. It matters because it means access control can't be bypassed by a bug in frontend code; the database enforces it regardless of what the client sends.",
      },
      {
        question: "Can Supabase scale for a growing product?",
        answer: "It's Postgres under the hood, so the same scaling techniques that apply to any Postgres database apply here — indexing, connection pooling, read replicas. Supabase's managed tiers handle the infrastructure side of that scaling.",
      },
      {
        question: "Do you migrate existing databases to Supabase?",
        answer: "Yes, since Supabase runs standard PostgreSQL, migrating an existing Postgres database is usually a matter of dumping and restoring the schema and data, then rebuilding auth and RLS policies to match Supabase's model.",
      },
    ],
    relatedSlugs: ["technologies/supabase-authentication", "technologies/supabase-database-development", "guides/how-to-use-supabase-authentication-with-nextjs", "services/saas-application-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "saas-application-development",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "SaaS application development",
    secondaryKeywords: [
      "SaaS developer for hire",
      "build a SaaS product",
      "SaaS MVP development",
      "multi-tenant SaaS development",
      "subscription SaaS application",
    ],
    searchIntent: "commercial",
    title: "SaaS Application Development | Justin Johnson",
    description: "SaaS product development from MVP to a maintainable multi-tenant application — auth, billing, and the core product features.",
    h1: "SaaS Application Development",
    eyebrow: "Services",
    intro: [
      "A SaaS product has a few non-negotiable pieces before it can charge anyone money: accounts, billing, and a way to keep one customer's data separate from another's. I build that foundation alongside the actual product features, so the MVP is a real multi-tenant application rather than a demo that needs rebuilding once the first paying customer signs up.",
      "The goal is shipping something real fast without accumulating the kind of technical debt that makes the second version of the product harder to build than the first.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Needing to validate a product idea with paying customers without over-building before knowing if it's wanted",
              "A prototype that has no real account system, billing, or data isolation between customers",
              "Uncertainty about how to structure a multi-tenant data model so customers can't see each other's data",
              "Wanting to add subscription billing without building a payments system from scratch",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Authentication and account management",
              "Multi-tenant data architecture with proper isolation",
              "Subscription billing via Stripe",
              "Core product features scoped to what proves the concept",
              "Admin views for managing customers and subscriptions",
              "Deployment and monitoring setup",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Scope the MVP down to the features that actually test the product's core assumption",
              "Design the multi-tenant data model — usually a tenant/organization ID on every row, enforced consistently",
              "Build auth, billing, and the core feature set together, since they're interdependent",
              "Add the admin tooling needed to support early customers without a full internal dashboard",
              "Launch, then prioritize the next build based on real usage rather than guesses",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["Next.js / React", "Node.js", "PostgreSQL / Supabase", "Stripe billing", "TypeScript", "Vercel or AWS deployment"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Founders with a validated idea who need a real product to put in front of paying customers, and existing SaaS products that need a technical partner to keep building features without an in-house engineering team yet.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does a SaaS MVP take to build?",
        answer: "It depends entirely on scope — the honest answer is that timeline should be driven by cutting features to the minimum that proves the idea, not the other way around. I'll push back on scope that doesn't need to exist in version one.",
      },
      {
        question: "How do you handle multi-tenancy?",
        answer: "Typically a shared database with a tenant/organization ID enforced on every table and every query — simpler to operate than separate databases per customer, and sufficient for the vast majority of SaaS products until they reach a scale that needs isolation for compliance reasons.",
      },
      {
        question: "Can you add Stripe billing to an existing product?",
        answer: "Yes — subscription plans, metered billing, upgrade/downgrade flows, and webhook handling for payment events (failed charges, cancellations) can be added to an existing app without a rebuild.",
      },
      {
        question: "Do you build the marketing site too?",
        answer: "Yes, usually as a separate Next.js route or app from the authenticated product, since the marketing site needs to be fast and indexable while the app itself doesn't.",
      },
    ],
    relatedSlugs: ["services/crm-development-services", "services/admin-dashboard-development", "technologies/stripe-payment-integration", "guides/how-to-build-a-saas-application-with-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "crm-development-services",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "CRM development services",
    secondaryKeywords: [
      "custom CRM developer",
      "build a CRM system",
      "CRM software development",
      "custom customer management system",
      "CRM integration development",
    ],
    searchIntent: "commercial",
    title: "CRM Development Services | Justin Johnson",
    description: "Custom CRM development for businesses whose sales or customer process doesn't fit off-the-shelf CRM software.",
    h1: "CRM Development Services",
    eyebrow: "Services",
    intro: [
      "Off-the-shelf CRMs are built for a generic sales process. When a business's actual workflow — how leads come in, how they're qualified, what happens after a deal closes — doesn't match that generic shape, the CRM ends up fought against instead of used. A custom CRM is built around the process that already works, not the other way around.",
      "I build these as web applications with a database behind them, so the data stays fully owned by the business rather than living in a third-party platform's export format.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "A generic CRM that requires workarounds because it doesn't match how the sales or support team actually works",
              "Customer data spread across spreadsheets, email, and a CRM that nobody fully trusts",
              "Needing to combine CRM functionality with something CRM platforms don't do well — booking, inventory, custom reporting",
              "Recurring per-seat licensing costs for a CRM that's mostly used for one or two core workflows",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Lead and contact management built around the actual sales pipeline",
              "Custom pipeline stages and automation rules",
              "Role-based access for sales, support, and management",
              "Integration with existing tools (email, WhatsApp, calendars)",
              "Reporting views built around the metrics that matter to the business",
              "Data import from the current system (spreadsheet, existing CRM export)",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Map the current process — how a lead becomes a customer, step by step",
              "Design the data model and pipeline stages around that actual process",
              "Build the core contact/deal management first, then layer in automation and integrations",
              "Migrate existing customer data",
              "Train the team and gather feedback before considering it finished",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["React / Next.js", "Node.js", "PostgreSQL / Supabase", "WhatsApp Business API", "Role-based authentication"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Businesses with a sales or account-management process specific enough that generic CRM software fights against it — real estate agencies tracking property-linked leads, service businesses managing recurring bookings, or B2B teams with a multi-stage approval process.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why build a custom CRM instead of using Salesforce or HubSpot?",
        answer: "Off-the-shelf CRMs make sense when your process is close to standard sales pipeline shape. A custom build makes sense when you're paying for a lot of unused features, working around the platform's limitations, or need the CRM tightly integrated with something specific to your business (bookings, inventory, a custom approval flow).",
      },
      {
        question: "How is customer data kept secure?",
        answer: "Role-based access control so each user only sees what their role requires, encrypted connections throughout, and the database hosted on infrastructure you control rather than a third-party SaaS platform.",
      },
      {
        question: "Can it integrate with WhatsApp or email?",
        answer: "Yes — WhatsApp Business API for messaging directly from a contact record, and email integration for logging correspondence against leads and deals automatically.",
      },
      {
        question: "What happens to our existing CRM data?",
        answer: "It gets migrated as part of the build — exported from the current system and imported into the new schema, mapped field by field so history isn't lost.",
      },
    ],
    relatedSlugs: ["solutions/ai-powered-crm-solutions", "industries/crm-development-for-real-estate", "services/saas-application-development", "services/admin-dashboard-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "admin-dashboard-development",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "admin dashboard development",
    secondaryKeywords: [
      "custom dashboard developer",
      "internal tool development",
      "React admin dashboard",
      "data dashboard development",
      "back-office application development",
    ],
    searchIntent: "commercial",
    title: "Admin Dashboard Development | Justin Johnson",
    description: "Custom admin dashboards and internal tools — data tables, role permissions, and reporting built around how your team actually works.",
    h1: "Admin Dashboard Development",
    eyebrow: "Services",
    intro: [
      "Most products eventually need a place for staff to manage the data customers don't see — orders, users, content, configuration. Generic admin panel generators handle basic CRUD but fall short once the business logic gets specific: custom approval flows, calculated fields, permission rules tied to your org structure.",
      "I build these as focused internal tools: fast to load, clear permission boundaries, and structured around the tasks staff actually perform rather than a one-size-fits-all table generator.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Staff managing data directly in the production database because there's no proper interface for it",
              "A generic admin panel generator that can't express the business's actual approval or permission logic",
              "No audit trail for who changed what, which matters once more than one person has admin access",
              "Reporting needs that a generic table view can't answer without manual spreadsheet work",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Data tables with search, filtering, and sorting",
              "Role-based permissions (viewer, editor, admin, custom roles)",
              "Forms for creating and editing records with validation",
              "Audit logging for sensitive changes",
              "Reporting views and exports",
              "Bulk actions where the workflow needs them",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "List the tasks staff need to perform, not just the data tables they need to see",
              "Design permission roles based on who actually needs to do what",
              "Build the core data views first, then the workflows layered on top",
              "Add audit logging for anything that affects customers or money",
              "Test with the actual staff who'll use it before calling it done",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["React / Next.js", "TypeScript", "PostgreSQL / Supabase", "Role-based authentication", "Tailwind CSS"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Any product that has reached the point where staff are managing data through the database directly or through a generic tool that doesn't match the actual workflow — order management, content moderation, customer support tooling, internal reporting.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why not use a no-code admin panel builder?",
        answer: "No-code tools are a reasonable starting point for simple CRUD. They tend to break down once you need custom business logic, complex permission rules, or a workflow that doesn't map to a generic table-and-form pattern — at that point, a purpose-built dashboard is less fragile.",
      },
      {
        question: "Can you build this on top of our existing database?",
        answer: "Yes — the dashboard connects to your existing schema rather than requiring a separate data store, as long as the schema supports the queries the dashboard needs (and I'll flag it if it doesn't).",
      },
      {
        question: "How do you handle different permission levels?",
        answer: "Role-based access control defined around your actual org structure — for example, support staff can view and update tickets, but only managers can issue refunds — enforced both in the UI and at the API level.",
      },
      {
        question: "Is this a separate app from our main product?",
        answer: "Usually yes, deployed and authenticated separately from the customer-facing product, so it can evolve independently and isn't exposed to the public.",
      },
    ],
    relatedSlugs: ["services/custom-web-application-development", "services/crm-development-services", "services/saas-application-development", "technologies/supabase-database-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "custom-web-application-development",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "custom web application development",
    secondaryKeywords: [
      "bespoke web application developer",
      "custom software development",
      "web app developer for hire",
      "tailored web application",
      "custom business software",
    ],
    searchIntent: "commercial",
    title: "Custom Web Application Development | Justin Johnson",
    description: "Custom web applications built around a specific business process that off-the-shelf software doesn't fit.",
    h1: "Custom Web Application Development",
    eyebrow: "Services",
    intro: [
      "Some processes are specific enough that no off-the-shelf product fits without heavy compromise — booking systems with unusual rules, internal tools tied to a particular operational workflow, marketplaces connecting two specific kinds of users. When that's the case, a custom-built application is the more reliable long-term answer than bending a generic SaaS product to fit.",
      "This is the broadest of the service pages here because the work genuinely varies by project — the constant is the same process: understand the real workflow, design a data model around it, and build an interface people will actually want to use.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "A business process specific enough that no off-the-shelf software fits without significant compromise",
              "Manual work — spreadsheets, email chains, phone calls — that could be replaced with a purpose-built tool",
              "Needing two-sided functionality (a marketplace, a booking platform) that generic tools don't handle well",
              "Wanting to own the software outright rather than rent it indefinitely from a SaaS vendor",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Requirements and workflow mapping before any code is written",
              "Data model designed around the specific business process",
              "Full-stack build — frontend, backend, database",
              "Third-party integrations as needed (payments, maps, messaging, email)",
              "Deployment and handover documentation",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Understand the current process in detail, including the edge cases that make it hard to standardize",
              "Design a data model that represents that process accurately, not a generic approximation",
              "Build in stages, validating each core workflow before adding secondary features",
              "Integrate with whatever the business already uses (accounting software, messaging, calendars)",
              "Deploy and support through the first weeks of real usage",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["React / Next.js", "Node.js", "TypeScript", "PostgreSQL / Supabase", "AWS or Vercel deployment", "Relevant third-party APIs per project"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Businesses whose core operational process is specific enough that they've already tried and outgrown generic software, and founders building a product where the software itself is the business, not a support tool for it.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do you scope a custom build before writing code?",
        answer: "By mapping the actual workflow in detail first — who does what, in what order, and where the exceptions happen. That mapping becomes the basis for the data model and feature list, rather than starting from a feature wishlist.",
      },
      {
        question: "How is this different from your SaaS application development service?",
        answer: "Overlapping skill set, different shape of product — SaaS development is specifically about multi-tenant products sold to many customers with subscription billing. Custom web application development covers single-business tools, internal software, and two-sided platforms that aren't necessarily sold as a subscription product.",
      },
      {
        question: "What if requirements change partway through the build?",
        answer: "Expected on most projects — the difference between a good custom build and a bad one is usually how cleanly the architecture absorbs changed requirements. Building in stages with working software at each step keeps that manageable.",
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes, through the website maintenance service, or on an ad hoc basis for smaller changes as the business's needs evolve.",
      },
    ],
    relatedSlugs: ["services/api-development-integration", "services/website-maintenance-services", "services/full-stack-development-services", "industries/web-development-for-small-businesses"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "api-development-integration",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "API development and integration",
    secondaryKeywords: [
      "REST API developer",
      "third-party API integration",
      "API integration services",
      "custom API development",
      "backend API developer",
    ],
    searchIntent: "commercial",
    title: "API Development & Integration Services | Justin Johnson",
    description: "REST API design and third-party integrations — payments, maps, ERPs, and messaging platforms connected reliably to your application.",
    h1: "API Development & Integration Services",
    eyebrow: "Services",
    intro: [
      "Applications rarely operate in isolation — they need to talk to payment processors, mapping services, ERPs, messaging platforms, and each other. I design REST APIs from scratch and integrate third-party APIs into existing systems, with attention to the parts that are easy to skip: error handling, retries, and what happens when the third-party service is slow or down.",
      "Good API work is mostly about handling the failure cases correctly, since the happy path is rarely where integrations actually break in production.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "No API layer at all — the frontend talks directly to the database, which doesn't scale or secure well",
              "A third-party integration (payments, shipping, CRM) that needs to be added reliably, not just made to work once in testing",
              "Webhooks from external services that need to be handled idempotently and securely",
              "An existing API with no documentation, making it hard for anyone else to build against it",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "REST API design with consistent resource naming and status codes",
              "Authentication (API keys, OAuth, JWT) appropriate to the use case",
              "Third-party integration: payment gateways, maps, ERPs, messaging APIs",
              "Webhook handling with signature verification and idempotency",
              "Error handling and retry logic for unreliable external services",
              "API documentation for internal or partner use",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Define the resources and operations the API needs to support based on how the frontend or partner will actually use it",
              "Build authentication and authorization first, before any business logic",
              "Implement endpoints with input validation and consistent error responses",
              "For third-party integrations, build against their sandbox environment and handle documented failure modes explicitly",
              "Load test critical endpoints and add rate limiting where needed",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["Node.js", "TypeScript", "REST / GraphQL", "Stripe, PayPal, HyperPay", "Google Maps API", "WhatsApp Business API"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Products that need a proper API layer between frontend and database, businesses connecting their systems to payment processors or ERPs, and teams that need a specific third-party integration built and tested properly rather than patched together.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "REST or GraphQL for a new API?",
        answer: "REST for most applications — it's simpler to build, cache, and debug. GraphQL earns its complexity when a frontend genuinely needs to query flexible, nested data shapes and over-fetching with REST becomes a real performance problem.",
      },
      {
        question: "How do you handle a third-party API that's unreliable?",
        answer: "Retry logic with backoff for transient failures, idempotency keys so retries don't create duplicate charges or records, and monitoring so failures are visible instead of silently swallowed.",
      },
      {
        question: "Can you integrate payment gateways like Stripe or HyperPay?",
        answer: "Yes — checkout flows, subscription billing, and webhook handling for payment events (successful charges, failures, refunds, disputes) across Stripe, PayPal, and HyperPay.",
      },
      {
        question: "Do you document the API for other developers?",
        answer: "Yes, typically as an OpenAPI spec or a written reference covering endpoints, auth, and expected request/response shapes — useful both for your own team and for any partner integrating against it.",
      },
    ],
    relatedSlugs: ["technologies/rest-api-development", "technologies/stripe-payment-integration", "technologies/google-maps-api-integration", "guides/how-to-integrate-stripe-with-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "website-redesign-services",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "website redesign services",
    secondaryKeywords: [
      "website rebuild developer",
      "modernize old website",
      "website redesign and rebuild",
      "rebuild WordPress site in React",
      "website relaunch developer",
    ],
    searchIntent: "commercial",
    title: "Website Redesign Services | Justin Johnson",
    description: "Website redesigns rebuilt on modern infrastructure, with SEO and existing rankings preserved through the migration.",
    h1: "Website Redesign Services",
    eyebrow: "Services",
    intro: [
      "A redesign is a rebuild with existing search rankings, existing traffic, and existing customer expectations attached — the parts that go wrong on a redesign are almost always about what got lost in the migration, not the new design itself. I treat URL structure, redirects, and metadata as first-class parts of the project, not a checklist item at the end.",
      "This covers both visual redesigns and full platform migrations — moving off an aging CMS or theme onto a faster, more maintainable stack.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "An outdated design that no longer reflects the business or converts visitors well",
              "A site built on an old CMS or theme that's slow, hard to update, or has accumulated plugin bloat",
              "Fear of losing search rankings during a rebuild, which keeps businesses stuck on infrastructure they've outgrown",
              "A site that isn't usable on mobile or fails basic accessibility checks",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Full site audit — content inventory, current rankings, and technical issues",
              "URL mapping and 301 redirects from old to new structure",
              "Rebuild on modern infrastructure (React/Next.js)",
              "Metadata, sitemap, and structured data carried over and improved",
              "Performance and Core Web Vitals pass before launch",
              "Post-launch monitoring for ranking or traffic drops",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Audit the existing site — every indexed URL, current rankings, and what's actually driving traffic",
              "Map every old URL to its new equivalent before building anything, so redirects are planned, not improvised",
              "Rebuild the site with the new design on the target stack",
              "Set up 301 redirects and verify every mapped URL resolves correctly",
              "Launch, then monitor Search Console for crawl errors or ranking changes over the following weeks",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["Next.js / React", "Tailwind CSS", "Redirect and sitemap tooling", "Google Search Console monitoring"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Businesses with an outdated site that's holding back conversions, and anyone migrating off WordPress, Wix, or a legacy custom CMS onto faster, more maintainable infrastructure without wanting to lose the search visibility already built up.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will a redesign hurt my search rankings?",
        answer: "It can, if URLs change without redirects or if content gets thinner in the rebuild — those are the two most common causes of ranking drops after a redesign. Careful URL mapping and 301 redirects for every existing indexed page is the main defense against that.",
      },
      {
        question: "Do you keep the same URLs?",
        answer: "Where possible, yes — it's the simplest way to protect rankings. When URLs do need to change (a genuinely better structure, a platform migration that forces it), every old URL gets a 301 redirect to its new equivalent.",
      },
      {
        question: "Can you migrate off WordPress?",
        answer: "Yes — content gets extracted from the WordPress database or export, and rebuilt on the new stack with the same URL structure and metadata carried across.",
      },
      {
        question: "How long does a redesign take?",
        answer: "Depends on site size and how much content needs auditing and migrating; a content-heavy site with hundreds of pages takes meaningfully longer than a small marketing site, mostly due to the URL mapping and content migration work, not the build itself.",
      },
    ],
    relatedSlugs: ["services/website-maintenance-services", "resources/technical-seo-services", "resources/core-web-vitals-optimization", "services/nextjs-development-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "website-maintenance-services",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "website maintenance services",
    secondaryKeywords: [
      "ongoing website support",
      "React website maintenance",
      "Next.js website support",
      "website updates and fixes",
      "retainer web developer",
    ],
    searchIntent: "commercial",
    title: "Website Maintenance Services | Justin Johnson",
    description: "Ongoing maintenance for React and Next.js websites — dependency updates, bug fixes, content changes, and monitoring.",
    h1: "Website Maintenance Services",
    eyebrow: "Services",
    intro: [
      "A website that isn't touched for a year accumulates outdated dependencies, unnoticed bugs, and content that's gone stale. Maintenance is the unglamorous work that keeps a site secure and functional after launch — dependency updates, small fixes, content changes, and keeping an eye on uptime and performance.",
      "This is typically structured as an ongoing retainer or an as-needed arrangement, depending on how much change the site sees.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Outdated dependencies that accumulate security vulnerabilities over time",
              "Small bugs and content changes piling up with no one responsible for handling them",
              "A site that's slowly gotten slower as more has been bolted onto it without anyone reviewing performance",
              "No monitoring in place, so downtime or errors go unnoticed until a customer reports them",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Dependency and security updates on a regular cadence",
              "Bug fixes and small feature changes",
              "Content and copy updates",
              "Uptime and error monitoring",
              "Periodic performance and Core Web Vitals review",
              "Backups and deployment management",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Maintenance work runs on whatever cadence fits the site — a monthly check-in for low-change sites, or a standing retainer for sites with frequent content or feature updates. Requests come in, get triaged by urgency, and shipped without disrupting whatever else is running on the site.",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["Whatever the existing site is built on", "Dependency update tooling", "Error and uptime monitoring", "Git-based deployment workflow"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Any live site or app that needs ongoing attention after the initial build — especially ones without an in-house developer to handle routine updates and the occasional urgent fix.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you only maintain sites you originally built?",
        answer: "No — I take on maintenance for existing React and Next.js sites built by other developers, though the first engagement usually starts with an audit to understand the codebase before making changes.",
      },
      {
        question: "How quickly are urgent issues handled?",
        answer: "Urgent issues — the site down, a broken checkout, a security vulnerability — get priority over routine work. The exact response time depends on the maintenance arrangement in place.",
      },
      {
        question: "What counts as a 'small' change versus a new project?",
        answer: "Content updates, bug fixes, and minor feature tweaks fall under maintenance. Anything that needs its own scoping and design work — a new section, a new integration — is treated as its own project, discussed before starting.",
      },
      {
        question: "Do you handle hosting and domain issues too?",
        answer: "Yes, where relevant — deployment configuration, DNS, SSL renewal, and the general infrastructure the site runs on.",
      },
    ],
    relatedSlugs: ["services/website-redesign-services", "resources/core-web-vitals-optimization", "services/custom-web-application-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "ecommerce-development",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "e-commerce development",
    secondaryKeywords: [
      "custom e-commerce developer",
      "headless commerce development",
      "Shopify headless developer",
      "online store development",
      "e-commerce checkout development",
    ],
    searchIntent: "commercial",
    title: "E-Commerce Development Services | Justin Johnson",
    description: "Custom e-commerce builds and headless Shopify storefronts — product catalogs, checkout flows, and WhatsApp ordering paths.",
    h1: "E-Commerce Development Services",
    eyebrow: "Services",
    intro: [
      "E-commerce work here usually means headless commerce — Shopify's Storefront API as the backend for products, inventory, and checkout, with a fully custom React frontend on top. That combination keeps commerce infrastructure (payments, tax, inventory sync) reliable while giving full control over the shopping experience itself.",
      "I've built this pattern across product catalogs, booking-style commerce, and WhatsApp-based ordering flows that run alongside standard checkout.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "A stock theme that can't be customized enough to match the brand or the desired shopping flow",
              "Wanting Shopify's commerce reliability (inventory, payments, tax) without being limited to Shopify's theme system",
              "Needing an ordering path outside a standard cart — WhatsApp orders, custom quote requests, booking-style purchases",
              "Multi-currency or multi-market storefronts that a single stock theme can't cleanly support",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Headless storefront on React/Next.js using Shopify's Storefront API",
              "Custom product listing, filtering, and search",
              "Cart and checkout flow (Shopify-hosted or custom)",
              "WhatsApp ordering flow as an alternative to standard checkout",
              "Customer accounts and order history",
              "Multi-currency support for international audiences",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Set up Shopify as the commerce backend — products, inventory, and payment processing",
              "Build the custom storefront against the Storefront API, matching the intended brand and UX",
              "Implement cart, checkout, and any alternative ordering paths (WhatsApp, quotes)",
              "Add customer accounts if the business needs order history and repeat-purchase flows",
              "Test the full purchase flow across currencies and payment methods before launch",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["Shopify Storefront API", "React / Next.js", "TypeScript", "WhatsApp Business API", "Stripe / PayPal / HyperPay"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Retail and product businesses that have outgrown a stock Shopify theme, and service or booking-style businesses that want commerce infrastructure (payments, inventory) without a traditional storefront shape.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is headless commerce and why use it?",
        answer: "Headless commerce separates the storefront (what customers see) from the commerce backend (products, inventory, checkout). Shopify handles the backend reliably; a custom React frontend gives full control over design and UX that a theme-based store can't match.",
      },
      {
        question: "Do we still use Shopify's checkout?",
        answer: "Usually yes — Shopify's checkout is well-tested and handles tax, fraud checks, and payment methods reliably, so most builds keep it rather than reimplementing checkout from scratch. It can be customized within Shopify's constraints or paired with an alternative path like WhatsApp ordering.",
      },
      {
        question: "Can you add a WhatsApp ordering option?",
        answer: "Yes — this has been built as an alternative to cart checkout, useful for businesses where customers want to confirm order details (specifications, urgency, custom requests) directly with someone before finalizing.",
      },
      {
        question: "Is this only for Shopify, or can you build fully custom commerce?",
        answer: "Shopify headless is the default recommendation because it removes the need to build and maintain payment processing, tax, and inventory logic in-house. A fully custom commerce backend is possible but rarely worth the additional maintenance burden unless there's a specific reason Shopify's model doesn't fit.",
      },
    ],
    relatedSlugs: ["services/headless-cms-development", "technologies/stripe-payment-integration", "industries/web-development-for-restaurants"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "progressive-web-app-development",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "progressive web app development",
    secondaryKeywords: [
      "PWA developer",
      "installable web app development",
      "offline-capable web app",
      "PWA vs native app",
      "React PWA development",
    ],
    searchIntent: "commercial",
    title: "Progressive Web App Development | Justin Johnson",
    description: "Progressive web app development — installable, offline-capable web apps built on React and Next.js instead of native code.",
    h1: "Progressive Web App Development",
    eyebrow: "Services",
    intro: [
      "A PWA is a web app that behaves like a native one — installable to the home screen, works offline for the parts that don't need a live connection, and sends push notifications — built with the same web technologies as any other site, no App Store review process required to ship an update.",
      "This is a good fit when native-app polish is wanted but the cost and delay of two native codebases (iOS and Android) isn't justified yet.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Wanting an app-like experience without committing to native iOS and Android development",
              "Needing offline access to core functionality on an unreliable connection",
              "App Store approval delays getting in the way of shipping updates quickly",
              "Wanting push notifications and home-screen installation without the overhead of a native app",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Web app manifest for home-screen installation",
              "Service worker for offline caching and asset precaching",
              "Push notification setup",
              "Responsive, touch-optimized interface",
              "App-like navigation and transitions",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Identify which parts of the app genuinely need to work offline versus always require a live connection",
              "Set up the service worker and caching strategy around that split",
              "Configure the web app manifest for installability across platforms",
              "Add push notifications if the product needs them",
              "Test install and offline behavior across real devices, not just desktop dev tools",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["React / Next.js", "Service workers", "Web App Manifest", "Push API", "IndexedDB for offline data"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Products where native-app feel matters — field service tools, booking apps, anything used repeatedly on mobile — but where building and maintaining two separate native codebases isn't justified given the team size or timeline.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a PWA a real replacement for a native app?",
        answer: "For most business use cases, yes — installability, offline support, and push notifications cover what most products actually need. Where it falls short is deep integration with device hardware or platform-specific APIs that only native code can access; that's a smaller set of cases than people expect.",
      },
      {
        question: "Do PWAs show up in the App Store?",
        answer: "Not by default — they install directly from the browser to the home screen. They can be wrapped and submitted to app stores if that distribution channel matters, though that adds back some of the review-process overhead a PWA is meant to avoid.",
      },
      {
        question: "Does offline support work for everything?",
        answer: "Only for what's explicitly cached — static assets and any data intentionally stored for offline use. Anything requiring a live server call (checkout, real-time data) still needs a connection; the app should degrade gracefully when it doesn't have one.",
      },
      {
        question: "Can an existing React or Next.js site become a PWA?",
        answer: "Yes — adding a manifest and service worker to an existing app is usually additive rather than a rebuild, though the offline behavior needs to be designed deliberately rather than just switched on.",
      },
    ],
    relatedSlugs: ["services/react-development-services", "services/nextjs-development-services", "resources/mobile-website-optimization"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "headless-cms-development",
    category: "services",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "headless CMS development",
    secondaryKeywords: [
      "headless CMS developer",
      "content management for Next.js",
      "decoupled CMS setup",
      "headless CMS integration",
      "structured content management",
    ],
    searchIntent: "commercial",
    title: "Headless CMS Development | Justin Johnson",
    description: "Headless CMS integration for React and Next.js sites, so content editors can publish without touching code.",
    h1: "Headless CMS Development",
    eyebrow: "Services",
    intro: [
      "A headless CMS separates content editing from the frontend that displays it — editors work in a proper interface, developers keep full control over how content renders, and neither side is constrained by the other. This matters once a site has non-technical people who need to publish or update content regularly without a developer in the loop for every change.",
      "I integrate headless CMS platforms into React and Next.js sites, structuring content models around what the site actually needs rather than a generic blog template.",
    ],
    sections: [
      {
        heading: "Problems This Solves",
        blocks: [
          {
            kind: "list",
            items: [
              "Content changes that require a developer because copy is hardcoded into components",
              "A traditional CMS (WordPress) that's slow and hard to secure, used only for its editing interface",
              "Needing the same content to power multiple frontends — website, app, marketing pages",
              "Non-technical team members needing to publish content independently",
            ],
          },
        ],
      },
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Content model design matched to the site's actual content types",
              "CMS setup and editor onboarding",
              "Integration into React/Next.js with static generation or ISR for content pages",
              "Preview mode for editors to check unpublished changes",
              "Image and asset handling through the CMS",
            ],
          },
        ],
      },
      {
        heading: "How I Work",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Define the content types the site actually needs — not a generic 'blog post' model if the content is more structured than that",
              "Set up the CMS and content model, matched to how editors will actually use it",
              "Build the frontend integration, choosing static generation, ISR, or on-demand fetching per content type",
              "Add preview functionality so editors can check content before publishing",
              "Migrate existing content if moving off a previous CMS",
            ],
          },
        ],
      },
      {
        heading: "Technology Stack",
        blocks: [
          {
            kind: "list",
            items: ["Next.js", "Headless CMS (Sanity, Contentful, or similar)", "Incremental Static Regeneration", "next/image for CMS-hosted assets"],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Content-heavy sites — blogs, marketing sites, resource libraries — where non-technical staff need to publish regularly, and any team migrating off WordPress that still wants a proper editing experience without WordPress itself running the frontend.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which headless CMS do you recommend?",
        answer: "It depends on the content model and team's technical comfort — Sanity for structured, developer-friendly content with a customizable studio; Contentful for larger teams wanting a more polished out-of-the-box editing experience. The right choice depends on the specific content types involved.",
      },
      {
        question: "Can editors see changes before they go live?",
        answer: "Yes, through Next.js's preview mode, which renders draft content from the CMS on a preview URL before it's published to the live site.",
      },
      {
        question: "How does this affect page load speed?",
        answer: "Content pages are typically statically generated at build time or via incremental static regeneration, so visitors get pre-rendered HTML rather than a live CMS query on every request — the CMS only gets hit at build/revalidation time, not per page view.",
      },
      {
        question: "Can we migrate from WordPress?",
        answer: "Yes — content gets exported from WordPress and mapped into the new CMS's content model, which is also a good opportunity to clean up an accumulated, inconsistent content structure.",
      },
    ],
    relatedSlugs: ["services/nextjs-development-services", "technologies/nextjs-incremental-static-regeneration", "resources/technical-seo-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
];
