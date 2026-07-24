import type { SeoPage } from "./types";

export const technologyPages: SeoPage[] = [
  {
    slug: "nextjs-app-router",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Next.js App Router",
    secondaryKeywords: ["Next.js App Router vs Pages Router", "Next.js layouts", "Next.js route groups", "App Router developer", "Next.js nested routing"],
    searchIntent: "informational",
    title: "Next.js App Router Development | Justin Johnson",
    description: "Next.js App Router expertise — nested layouts, route groups, server components, and when it's the right fit over the Pages Router.",
    h1: "Next.js App Router Development",
    eyebrow: "Technologies",
    intro: [
      "The App Router is the routing and rendering model Next.js has been built around since version 13 — file-based routes, nested layouts that persist across navigations, and server components as the default. It changes how a Next.js app is structured, not just how URLs map to files.",
      "I use the App Router as the default for new Next.js projects, and help teams evaluate whether migrating an existing Pages Router app is worth the effort.",
    ],
    sections: [
      {
        heading: "What the App Router Changes",
        blocks: [
          {
            kind: "list",
            items: [
              "Components are server components by default, only becoming client components when explicitly marked",
              "Layouts nest and persist across navigation instead of re-rendering the whole page shell",
              "Route groups let you organize routes without affecting the URL structure",
              "Loading and error states are handled with dedicated file conventions instead of manual state",
              "Data fetching happens directly in server components with async/await, no separate getServerSideProps function",
            ],
          },
        ],
      },
      {
        heading: "Where I Use It",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Every new Next.js project starts on the App Router — it's the actively developed model and the one with the clearest long-term support. For existing Pages Router apps, the migration decision comes down to whether the app is still actively growing; a stable app with no near-term feature roadmap often isn't worth migrating just for its own sake.",
            ],
          },
        ],
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Marking a component 'use client' out of habit when it could stay a server component and ship less JavaScript",
              "Fetching data in a client component with useEffect when it could be fetched directly in a server component",
              "Not using route groups to separate layout concerns (marketing pages vs authenticated app shell)",
              "Mixing data fetching patterns inconsistently across a codebase, making it hard to reason about what runs where",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I migrate my Pages Router app to the App Router?",
        answer: "Only if the app is actively being extended and would benefit from server components, streaming, or nested layouts. A stable app that's rarely touched usually isn't worth migrating for its own sake — the Pages Router is still fully supported.",
      },
      {
        question: "Do I need to convert everything to server components?",
        answer: "No — the App Router lets server and client components coexist. Interactive pieces (forms, anything using state or browser APIs) stay client components; everything else can default to server rendering.",
      },
      {
        question: "Is the App Router slower to build with?",
        answer: "There's a learning curve if you're used to getServerSideProps and the old data-fetching model, but once the server/client component split clicks, it's generally faster to build with — less boilerplate for data fetching, and layouts avoid re-fetching shared data on every navigation.",
      },
    ],
    relatedSlugs: ["technologies/react-server-components", "services/nextjs-development-services", "guides/how-to-create-dynamic-routes-in-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "react-server-components",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "React Server Components",
    secondaryKeywords: ["RSC development", "server vs client components", "React Server Components performance", "Next.js server components"],
    searchIntent: "informational",
    title: "React Server Components Development | Justin Johnson",
    description: "React Server Components implementation — rendering on the server to cut client-side JavaScript without losing interactivity where it matters.",
    h1: "React Server Components Development",
    eyebrow: "Technologies",
    intro: [
      "Server components render entirely on the server and never ship their code to the browser — no hydration cost, no JavaScript bundle for that piece of UI. Client components are the ones that still need interactivity: forms, click handlers, anything with state. The skill is deciding where that boundary sits.",
      "This matters directly for load performance — a page built mostly from server components ships a fraction of the JavaScript a fully client-rendered equivalent would.",
    ],
    sections: [
      {
        heading: "How the Split Works",
        blocks: [
          {
            kind: "list",
            items: [
              "Server components fetch data directly and render to HTML on the server, with zero client-side JS footprint",
              "Client components ('use client') handle anything interactive — forms, toggles, anything using useState or browser APIs",
              "A server component can render a client component, but not the other way around directly — data has to be passed down as props",
              "Server components can access backend resources (databases, file systems, secrets) directly without an API layer in between",
            ],
          },
        ],
      },
      {
        heading: "Where the Boundary Should Sit",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "The general rule: push 'use client' as far down the component tree as possible. A page with a static header, a list of items, and one interactive filter dropdown should only mark the dropdown as a client component — not the entire page.",
            ],
          },
        ],
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Marking a whole page 'use client' because one small piece needs interactivity",
              "Trying to use hooks or browser APIs inside a server component, which isn't supported",
              "Not realizing that context providers need to be client components, which can force more of the tree client-side than intended if placed too high",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do server components replace client-side React entirely?",
        answer: "No — they're a rendering strategy that coexists with client components. Anything genuinely interactive still runs in the browser; server components just handle the parts that don't need to.",
      },
      {
        question: "Can server components fetch from a database directly?",
        answer: "Yes, which is one of their bigger advantages — no need to build a separate API endpoint just to expose data to a page that only your own frontend consumes.",
      },
      {
        question: "Does this work outside of Next.js?",
        answer: "React Server Components require a framework with the infrastructure to support them (streaming, the server/client boundary). Next.js is currently the most mature implementation; other frameworks are adding support at different stages of maturity.",
      },
    ],
    relatedSlugs: ["technologies/nextjs-app-router", "technologies/react-performance-optimization", "services/nextjs-development-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "nextjs-server-side-rendering",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Next.js server-side rendering",
    secondaryKeywords: ["Next.js SSR", "server-rendered Next.js pages", "SSR vs SSG Next.js", "dynamic rendering Next.js"],
    searchIntent: "informational",
    title: "Next.js Server-Side Rendering | Justin Johnson",
    description: "Server-side rendering in Next.js for pages that need fresh, per-request data — implemented correctly for both speed and SEO.",
    h1: "Next.js Server-Side Rendering",
    eyebrow: "Technologies",
    intro: [
      "Server-side rendering means the HTML for a page is generated on the server for every request, using data that's current at the moment the request comes in. It's the right choice when content genuinely changes per request — a dashboard, search results, anything personalized — and the wrong choice when the content is the same for every visitor, where static generation is faster.",
      "I decide SSR versus static generation per route based on how the data actually behaves, not by defaulting to one pattern across the whole app.",
    ],
    sections: [
      {
        heading: "When SSR Is the Right Call",
        blocks: [
          {
            kind: "list",
            items: [
              "Content that's personalized per user (dashboards, account pages)",
              "Search or filter results that depend on query parameters",
              "Data that changes frequently enough that even short-lived static caching would show stale information",
              "Pages that need request-time information — headers, cookies, geolocation",
            ],
          },
        ],
      },
      {
        heading: "SSR and SEO",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "SSR pages are fully rendered HTML by the time a crawler sees them, same as static pages — the SEO difference between SSR and static generation isn't about crawlability, it's about speed. A statically generated page can be served instantly from a CDN edge; an SSR page has to run the render on every request, which adds latency search engines do factor into ranking signals around page speed.",
            ],
          },
        ],
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Using SSR for content that's actually the same for every visitor, when static generation would be faster and cheaper",
              "Not caching SSR responses at all when partial caching (stale-while-revalidate) would still keep data reasonably fresh",
              "Fetching more data than the page actually needs during the server render, slowing down time-to-first-byte",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is SSR always better for SEO than static generation?",
        answer: "No — both produce fully rendered HTML that crawlers can read. Static generation is usually the better default for SEO specifically because it's faster to serve, and page speed is itself a ranking factor.",
      },
      {
        question: "Does SSR slow down the site?",
        answer: "It adds server render time to every request compared to serving pre-built static HTML, but for genuinely dynamic content it's still far faster than client-side rendering, which has to download and execute JavaScript before showing anything.",
      },
      {
        question: "Can a page mix SSR and static content?",
        answer: "Yes — a page can render mostly static content with a smaller dynamic section (like a personalized greeting) handled separately, so you're not forced to make the whole page dynamic just because one part of it is.",
      },
    ],
    relatedSlugs: ["technologies/nextjs-static-site-generation", "technologies/nextjs-incremental-static-regeneration", "resources/core-web-vitals-optimization", "resources/javascript-seo"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "nextjs-static-site-generation",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Next.js static site generation",
    secondaryKeywords: ["Next.js SSG", "static generation Next.js", "generateStaticParams", "static Next.js pages"],
    searchIntent: "informational",
    title: "Next.js Static Site Generation | Justin Johnson",
    description: "Static site generation in Next.js — pre-built HTML at deploy time for the fastest possible page loads and the strongest SEO baseline.",
    h1: "Next.js Static Site Generation",
    eyebrow: "Technologies",
    intro: [
      "Static generation builds the HTML for a page once, at build time, and serves that same file to every visitor from a CDN edge — no server render on request, no database query per visit. It's the fastest rendering strategy Next.js offers, and the right default for any content that doesn't change per user.",
      "Marketing pages, blog posts, documentation, and most of the SEO-targeted content on a site fall into this category.",
    ],
    sections: [
      {
        heading: "How It Works",
        blocks: [
          {
            kind: "list",
            items: [
              "Pages are rendered to static HTML at build time, not on each request",
              "generateStaticParams tells Next.js which dynamic route params to pre-render (e.g. every blog post slug)",
              "Output is plain HTML/CSS/JS that can be served from a CDN with no server compute per request",
              "Content updates require a rebuild, unless combined with incremental static regeneration",
            ],
          },
        ],
      },
      {
        heading: "Why It's Strong for SEO",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Static pages are the fastest thing you can serve — no render latency, no cold starts, no database round trip. Since page speed factors into ranking and directly affects bounce rate, static generation is usually the strongest starting point for any content page whose primary goal is organic search traffic.",
            ],
          },
        ],
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Reaching for SSR by default when the content doesn't actually change per request",
              "Not using generateStaticParams for dynamic content pages, forcing them to render on-demand instead of at build time",
              "Forgetting that a fully static site needs a rebuild (or ISR) to reflect content changes — a common surprise for teams used to a traditional CMS with instant publishing",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How does static generation handle dynamic routes like blog posts?",
        answer: "generateStaticParams returns the list of param values (e.g. every post slug) Next.js should pre-render at build time, producing one static HTML file per post — the routes are dynamic in code, but static in output.",
      },
      {
        question: "What happens when content changes after the build?",
        answer: "A fully static page won't reflect the change until the next deploy, unless it's set up with incremental static regeneration, which lets Next.js re-generate a page in the background after a defined interval or on-demand trigger.",
      },
      {
        question: "Is static generation suitable for a large site with thousands of pages?",
        answer: "Yes, with generateStaticParams and, if build times become a concern at very large scale, ISR to generate less-visited pages on demand instead of all upfront — that keeps builds fast while still serving static output for everything.",
      },
    ],
    relatedSlugs: ["technologies/nextjs-incremental-static-regeneration", "resources/programmatic-seo", "guides/how-to-build-a-nextjs-website", "technologies/nextjs-server-side-rendering", "guides/how-to-create-dynamic-routes-in-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "nextjs-incremental-static-regeneration",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Next.js incremental static regeneration",
    secondaryKeywords: ["Next.js ISR", "revalidate Next.js", "on-demand revalidation", "ISR caching strategy"],
    searchIntent: "informational",
    title: "Next.js Incremental Static Regeneration | Justin Johnson",
    description: "ISR setup in Next.js — static page speed with content that stays fresh, without rebuilding the entire site on every change.",
    h1: "Next.js Incremental Static Regeneration",
    eyebrow: "Technologies",
    intro: [
      "ISR is the middle ground between fully static and fully server-rendered: pages are served as static HTML, but Next.js regenerates them in the background after a set interval or an on-demand trigger, so content stays reasonably fresh without paying the cost of rendering on every single request.",
      "This is the pattern I reach for on content that changes but not on every request — product catalogs, pricing pages, anything backed by a CMS with periodic updates.",
    ],
    sections: [
      {
        heading: "How ISR Works",
        blocks: [
          {
            kind: "list",
            items: [
              "A page is generated statically at build time, same as full SSG",
              "A revalidate interval defines how long the cached version is served before Next.js regenerates it in the background",
              "Visitors during regeneration still get the last valid cached version — nobody waits on a slow render",
              "On-demand revalidation can trigger a regeneration immediately (e.g. from a CMS webhook when content is published) instead of waiting for the interval",
            ],
          },
        ],
      },
      {
        heading: "Choosing a Revalidation Strategy",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Time-based revalidation (every N seconds) is simplest and works well when a page doesn't need to reflect changes instantly. On-demand revalidation, triggered from a CMS webhook or an admin action, is worth the extra setup when publishing needs to go live immediately rather than on the next interval.",
            ],
          },
        ],
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Setting a revalidate interval so short it effectively behaves like SSR without the benefit of caching",
              "Not setting up on-demand revalidation for content editors who expect changes to appear immediately after publishing",
              "Assuming ISR updates every visitor instantly — the first visitor after expiry still sees the stale version while regeneration happens in the background",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does ISR work for pages that don't exist yet at build time?",
        answer: "Yes — Next.js supports generating new static pages on-demand the first time they're requested (for paths not included in generateStaticParams), then caching them for subsequent visitors according to the revalidation strategy.",
      },
      {
        question: "How is ISR different from SSR?",
        answer: "SSR renders on every request. ISR renders once, serves the cached result to everyone, and only re-renders in the background after the cache expires — far less server load for content that doesn't need to be second-by-second fresh.",
      },
      {
        question: "Can I trigger revalidation from my CMS?",
        answer: "Yes — most headless CMS platforms support webhooks, which can call an on-demand revalidation API route in Next.js the moment content is published, so pages update immediately instead of waiting for the timed interval.",
      },
    ],
    relatedSlugs: ["technologies/nextjs-static-site-generation", "services/headless-cms-development", "resources/programmatic-seo", "technologies/nextjs-server-side-rendering"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "nextjs-authentication",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Next.js authentication",
    secondaryKeywords: ["Next.js auth setup", "NextAuth alternative", "session management Next.js", "protecting Next.js routes"],
    searchIntent: "informational",
    title: "Next.js Authentication Development | Justin Johnson",
    description: "Authentication setup for Next.js apps — sessions, protected routes, and role-based access, built around the App Router's model.",
    h1: "Next.js Authentication Development",
    eyebrow: "Technologies",
    intro: [
      "Authentication in Next.js has to account for both server and client components, middleware, and API routes all needing to know who the current user is — the App Router's model changes how that state gets checked compared to the older Pages Router pattern.",
      "I implement authentication using session cookies validated in middleware and server components, with Supabase Auth as a common backend, or a custom Node.js session layer where the project needs full control.",
    ],
    sections: [
      {
        heading: "What a Solid Setup Includes",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Session validation in middleware, so protected routes redirect before any page code runs",
              "Server components that can read the current user without a client-side round trip",
              "Role-based access control for routes and API endpoints",
              "Secure, httpOnly session cookies rather than tokens stored in localStorage",
              "Password reset, email verification, and OAuth provider flows as needed",
            ],
          },
        ],
      },
      {
        heading: "Protecting Routes",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Next.js middleware runs before a request reaches a page, which makes it the right place to check session validity and redirect unauthenticated users — cheaper and more secure than checking auth state inside the page component after it's already started rendering.",
            ],
          },
        ],
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Storing auth tokens in localStorage, which is readable by any script on the page and vulnerable to XSS",
              "Checking authentication only on the client, leaving the server-rendered HTML briefly exposing content it shouldn't",
              "Not validating sessions in API routes independently, relying only on the frontend to hide unauthorized actions",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you use NextAuth.js or build custom authentication?",
        answer: "It depends on the project — NextAuth (Auth.js) is a solid default for standard email/password and OAuth flows. For projects already using Supabase, its built-in auth is usually simpler since it's already wired into the same database and row-level security.",
      },
      {
        question: "How do you protect API routes?",
        answer: "Every API route independently validates the session — never assuming a request only came from an authenticated page, since API routes can be called directly regardless of what the frontend hides.",
      },
      {
        question: "Can this support role-based permissions?",
        answer: "Yes — roles are checked both in middleware (to gate entire route sections) and at the API level (to gate specific actions), so permission checks don't rely solely on hiding UI elements.",
      },
    ],
    relatedSlugs: ["technologies/supabase-authentication", "guides/how-to-protect-api-routes-in-nextjs", "guides/how-to-use-supabase-authentication-with-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "nextjs-seo",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Next.js SEO",
    secondaryKeywords: ["Next.js metadata API", "Next.js structured data", "Next.js sitemap setup", "SEO-friendly Next.js"],
    searchIntent: "informational",
    title: "Next.js SEO Implementation | Justin Johnson",
    description: "Next.js SEO built into the architecture — metadata API, sitemaps, structured data, and rendering choices that support ranking.",
    h1: "Next.js SEO Implementation",
    eyebrow: "Technologies",
    intro: [
      "Next.js's rendering model is itself an SEO advantage over a plain client-rendered SPA — content is present in the initial HTML rather than depending on JavaScript execution. On top of that, the framework's Metadata API, built-in sitemap generation, and image optimization handle most of the mechanical SEO work directly in code.",
      "The work is wiring these pieces up correctly per page and per route segment, not treating SEO as a separate pass after the build.",
    ],
    sections: [
      {
        heading: "What Next.js Handles Natively",
        blocks: [
          {
            kind: "checklist",
            items: [
              "generateMetadata for per-page titles, descriptions, and Open Graph tags",
              "Automatic sitemap.xml and robots.txt generation via file conventions",
              "next/image for optimized, correctly-sized images with lazy loading",
              "Server rendering or static generation so content is present without JS execution",
              "Streaming and Suspense for fast perceived load times",
            ],
          },
        ],
      },
      {
        heading: "What Still Needs Deliberate Work",
        blocks: [
          {
            kind: "list",
            items: [
              "Structured data (JSON-LD) isn't automatic — it needs to be added per page type based on what's actually on the page",
              "Canonical URLs need to be set explicitly, especially for pages reachable through multiple query parameter combinations",
              "Internal linking structure — Next.js doesn't do this for you; it's a content and architecture decision",
              "Core Web Vitals still depend on how you write the app, not just which framework you chose",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does using Next.js guarantee good SEO?",
        answer: "No — it removes the biggest technical barrier (client-side-only rendering) but content quality, metadata, structured data, and site architecture still have to be done correctly. Next.js makes good SEO achievable; it doesn't do it automatically.",
      },
      {
        question: "How do I set per-page metadata?",
        answer: "Through generateMetadata (dynamic, e.g. based on fetched content) or a static metadata export, both part of the App Router's Metadata API — each route segment can define its own title, description, and Open Graph data.",
      },
      {
        question: "Does Next.js generate a sitemap automatically?",
        answer: "It supports a sitemap.ts file convention that generates sitemap.xml at build or request time from your route data — the structure still needs to be defined based on your actual pages, but the generation mechanism is built in.",
      },
    ],
    relatedSlugs: ["resources/nextjs-seo-services", "guides/how-to-generate-metadata-in-nextjs", "guides/how-to-add-json-ld-in-nextjs", "services/nextjs-development-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "nextjs-performance-optimization",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Next.js performance optimization",
    secondaryKeywords: ["Next.js speed optimization", "Next.js bundle size", "Next.js Core Web Vitals", "optimize Next.js app"],
    searchIntent: "informational",
    title: "Next.js Performance Optimization | Justin Johnson",
    description: "Next.js performance work — bundle size, rendering strategy, and image handling tuned for real Core Web Vitals improvement.",
    h1: "Next.js Performance Optimization",
    eyebrow: "Technologies",
    intro: [
      "Next.js ships with strong performance defaults, but a real application accumulates the usual culprits — unnecessarily large client bundles, images that aren't optimized, third-party scripts loaded on every page regardless of whether they're needed. Optimization here means measuring first, then fixing what's actually slow.",
      "I typically start with a Lighthouse and Core Web Vitals audit to find the specific bottleneck rather than applying generic advice that may not apply to the app in question.",
    ],
    sections: [
      {
        heading: "Where the Time Usually Goes",
        blocks: [
          {
            kind: "list",
            items: [
              "Oversized client-side JavaScript bundles from unnecessary 'use client' boundaries or heavy dependencies",
              "Unoptimized images served at full resolution instead of the size actually displayed",
              "Third-party scripts (analytics, chat widgets, ad tags) blocking the main thread",
              "Layout shift from images or fonts without reserved space",
              "Waterfalled data fetching where requests run sequentially instead of in parallel",
            ],
          },
        ],
      },
      {
        heading: "Fixes That Usually Move the Needle",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Pushing 'use client' boundaries as low as possible in the component tree",
              "next/image with correct sizing and modern formats (WebP/AVIF)",
              "next/font for self-hosted, layout-shift-free font loading",
              "Deferring or lazy-loading non-critical third-party scripts",
              "Parallelizing data fetches instead of awaiting them sequentially",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What's the first thing you check on a slow Next.js site?",
        answer: "A Lighthouse run and the Network tab to see what's actually blocking render — oversized JS bundles and unoptimized images are the two most common causes, in roughly that order of frequency in my experience.",
      },
      {
        question: "Does switching to the App Router automatically improve performance?",
        answer: "It gives you the tools to (server components shipping less JS, streaming), but only if you actually use them correctly — a badly structured App Router app can still ship just as much client JavaScript as a Pages Router one.",
      },
      {
        question: "How much does image optimization actually matter?",
        answer: "Often the single biggest lever on real-world sites — unoptimized hero images are consistently one of the largest contributors to a poor Largest Contentful Paint score, which is one of the three Core Web Vitals metrics.",
      },
    ],
    relatedSlugs: ["resources/core-web-vitals-optimization", "guides/how-to-optimize-nextjs-images", "guides/how-to-improve-core-web-vitals-in-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "react-performance-optimization",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "React performance optimization",
    secondaryKeywords: ["React re-render optimization", "React memoization", "slow React app fix", "React bundle size reduction"],
    searchIntent: "informational",
    title: "React Performance Optimization | Justin Johnson",
    description: "React performance fixes for slow, unresponsive interfaces — unnecessary re-renders, oversized bundles, and expensive computations.",
    h1: "React Performance Optimization",
    eyebrow: "Technologies",
    intro: [
      "React performance problems are almost always one of two things: components re-rendering more than they need to, or too much JavaScript being downloaded and parsed before the app becomes interactive. Both are fixable once you can see exactly what's happening, which is why profiling comes before any optimization work.",
      "I use React's built-in Profiler and browser dev tools to find the actual bottleneck before reaching for memoization or code-splitting — guessing at performance fixes tends to add complexity without fixing the real problem.",
    ],
    sections: [
      {
        heading: "Common Causes of Slowness",
        blocks: [
          {
            kind: "list",
            items: [
              "Passing new object or function references as props on every render, defeating memoization",
              "Expensive computations running on every render instead of being memoized",
              "Large lists rendered without virtualization",
              "Context providers causing every consumer to re-render on any state change, even unrelated ones",
              "Oversized dependencies bundled into the initial load instead of code-split",
            ],
          },
        ],
      },
      {
        heading: "Fixes, In Order of What I'd Try First",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Profile first — find which components are re-rendering and why, using React DevTools Profiler",
              "Fix unnecessary re-renders at the source (state placement, prop stability) before reaching for memo/useMemo",
              "Virtualize long lists so only visible items render",
              "Code-split routes and heavy components so the initial bundle stays small",
              "Split large context providers so unrelated state changes don't cascade re-renders",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I wrap everything in React.memo?",
        answer: "No — memoization has its own cost (comparing props on every render) and adds complexity. It's worth applying to components that render often with the same props and are expensive to re-render, not as a blanket default.",
      },
      {
        question: "What's the biggest performance mistake you see?",
        answer: "State placed too high in the component tree, so a small UI change triggers a re-render of a much larger subtree than necessary. Moving state closer to where it's actually used fixes more performance problems than any memoization technique.",
      },
      {
        question: "Does TypeScript affect runtime performance?",
        answer: "No — TypeScript is compiled away entirely before the code runs; type checking happens at build time and has zero runtime cost.",
      },
    ],
    relatedSlugs: ["technologies/react-server-components", "services/react-development-services", "resources/core-web-vitals-optimization"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "typescript-for-web-applications",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "TypeScript for web applications",
    secondaryKeywords: ["TypeScript in production", "type-safe web development", "TypeScript strict mode", "TypeScript best practices"],
    searchIntent: "informational",
    title: "TypeScript for Web Applications | Justin Johnson",
    description: "Applied TypeScript for production web apps — strict typing, shared types across frontend and backend, and where types earn their cost.",
    h1: "TypeScript for Web Applications",
    eyebrow: "Technologies",
    intro: [
      "TypeScript's value in a real application isn't the type annotations themselves — it's the errors it catches before deployment and the confidence it gives when refactoring. Used well, it becomes a form of documentation the compiler actually enforces instead of one that quietly goes out of date.",
      "I use it on every project by default, with strictness settings tuned to whether the codebase is new or an incremental migration.",
    ],
    sections: [
      {
        heading: "Where Types Earn Their Cost",
        blocks: [
          {
            kind: "list",
            items: [
              "API boundaries — request and response shapes shared between frontend and backend",
              "Form validation, so invalid data is caught before it reaches business logic",
              "Anything touched by multiple developers, where types act as a contract between them",
              "Refactors — the compiler flags every place a change breaks, instead of relying on manual testing to catch it",
            ],
          },
        ],
      },
      {
        heading: "Where Not to Overdo It",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Types are a tool, not a goal — overly clever generic types that take longer to read than the runtime bug they'd prevent aren't worth it. For most application code, straightforward interfaces and type aliases cover what's needed without turning the type system into its own maintenance burden.",
            ],
          },
        ],
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Using 'any' as a shortcut to silence errors instead of modeling the actual shape of the data",
              "Not enabling strict null checks, which catches a large share of real runtime bugs",
              "Duplicating types between frontend and backend instead of sharing a single source of truth",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is TypeScript worth it for a small project?",
        answer: "For a genuinely small, short-lived project, the setup overhead might not pay for itself. For anything expected to be maintained or extended over time — which is most real projects — it pays off quickly once the codebase grows past a size where you can hold the whole thing in your head.",
      },
      {
        question: "Does TypeScript slow down development?",
        answer: "Initially, slightly, especially with strict mode. Past that initial adjustment, it tends to speed things up — autocomplete and inline errors catch mistakes immediately instead of during manual testing or in production.",
      },
      {
        question: "What's the difference between 'any' and 'unknown'?",
        answer: "'any' opts a value out of type checking entirely. 'unknown' still requires narrowing (checking the type) before you can use the value, which is safer — it forces you to handle the actual shape of the data rather than assuming it.",
      },
    ],
    relatedSlugs: ["services/typescript-development-services", "services/api-development-integration"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "supabase-authentication",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Supabase authentication",
    secondaryKeywords: ["Supabase auth setup", "Supabase login integration", "Supabase OAuth", "Supabase session management"],
    searchIntent: "informational",
    title: "Supabase Authentication Development | Justin Johnson",
    description: "Supabase authentication implementation — email/password, OAuth providers, and session handling integrated with row-level security.",
    h1: "Supabase Authentication Development",
    eyebrow: "Technologies",
    intro: [
      "Supabase Auth handles the mechanics of sign-up, login, password reset, and OAuth providers, and — because it's built on the same Postgres database as the rest of the app — ties directly into row-level security policies, so access control is enforced at the database layer rather than only in application code.",
      "I set this up so the auth state, session refresh, and RLS policies are consistent across server and client rendering in Next.js or React.",
    ],
    sections: [
      {
        heading: "What's Involved",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Email/password and OAuth provider (Google, GitHub, etc.) sign-in flows",
              "Session handling that works across server components and client components",
              "Row-level security policies that reference auth.uid() for per-user data access",
              "Email verification and password reset flows",
              "Role or permission metadata attached to user accounts where needed",
            ],
          },
        ],
      },
      {
        heading: "Why RLS Matters Here",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Because Supabase's client libraries can query the database somewhat directly, access control can't rely solely on the frontend hiding what it doesn't show — row-level security policies enforce who can read or write which rows at the database level, so even a compromised or buggy frontend can't bypass it.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does Supabase Auth work with Next.js server components?",
        answer: "Yes, with the appropriate server-side client setup — sessions are read from cookies on the server, keeping auth state consistent between server-rendered and client-rendered parts of the app.",
      },
      {
        question: "What OAuth providers does Supabase support?",
        answer: "Google, GitHub, GitLab, Facebook, Apple, and several others out of the box — each just needs the provider's OAuth credentials configured in the Supabase project settings.",
      },
      {
        question: "Is Supabase Auth secure enough for production?",
        answer: "Yes, it's built on well-established patterns (JWT sessions, standard OAuth flows) and is used in production by a large number of applications — the main security work on top of it is writing correct row-level security policies for your specific data model.",
      },
    ],
    relatedSlugs: ["services/supabase-development-services", "guides/how-to-use-supabase-authentication-with-nextjs", "technologies/supabase-database-development", "technologies/nextjs-authentication"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "supabase-database-development",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Supabase database development",
    secondaryKeywords: ["Supabase schema design", "Supabase row-level security", "Supabase Postgres", "Supabase database migrations"],
    searchIntent: "informational",
    title: "Supabase Database Development | Justin Johnson",
    description: "Supabase database schema design, row-level security policies, and migrations — built on standard PostgreSQL underneath.",
    h1: "Supabase Database Development",
    eyebrow: "Technologies",
    intro: [
      "Supabase's database is just PostgreSQL, which means standard schema design principles — normalization, foreign keys, indexes — apply directly, on top of Supabase's own layer of auto-generated APIs, row-level security, and realtime subscriptions.",
      "I design schemas around the actual relationships in the data first, then layer RLS policies and API access on top, rather than starting from Supabase's tooling and working backward.",
    ],
    sections: [
      {
        heading: "What Goes Into a Schema",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Tables and relationships modeled around the real data, not a generic template",
              "Foreign keys and constraints enforced at the database level",
              "Indexes on columns used in frequent queries and filters",
              "Row-level security policies scoping access per user or organization",
              "Database functions and triggers for logic that belongs at the data layer",
            ],
          },
        ],
      },
      {
        heading: "Migrations",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Schema changes go through versioned migration files rather than manual edits in the Supabase dashboard, so changes are tracked, reviewable, and reproducible across environments — the same discipline as any standard Postgres migration workflow.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use raw SQL with Supabase?",
        answer: "Yes — since it's standard PostgreSQL, you can write raw SQL migrations, functions, and triggers alongside using Supabase's auto-generated client APIs for typical queries.",
      },
      {
        question: "How does Supabase's auto-generated API work?",
        answer: "It exposes a REST and GraphQL-compatible API directly from your Postgres schema, so CRUD operations don't require writing a separate backend layer — though row-level security is what actually governs what each request is allowed to do.",
      },
      {
        question: "Can I migrate away from Supabase later if needed?",
        answer: "The database itself is portable since it's standard Postgres — the main migration work if you moved away would be replacing Supabase's auth and auto-generated API layer with your own equivalents.",
      },
    ],
    relatedSlugs: ["technologies/postgresql-development", "services/supabase-development-services", "guides/how-to-connect-nextjs-to-postgresql", "services/admin-dashboard-development", "technologies/supabase-authentication", "guides/how-to-build-a-crm-with-nextjs-and-supabase"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "postgresql-development",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "PostgreSQL development",
    secondaryKeywords: ["PostgreSQL developer", "Postgres schema design", "PostgreSQL performance tuning", "relational database design"],
    searchIntent: "informational",
    title: "PostgreSQL Development Services | Justin Johnson",
    description: "PostgreSQL schema design, query optimization, and integration with Node.js and Next.js applications.",
    h1: "PostgreSQL Development Services",
    eyebrow: "Technologies",
    intro: [
      "PostgreSQL is my default database for anything with real relational data — orders tied to customers, bookings tied to resources, anything where data integrity actually matters. It's mature, well-documented, and handles both simple CRUD and complex relational queries without the workarounds a document database often needs for the same job.",
      "This covers schema design, query optimization, and connecting Postgres reliably to a Node.js or Next.js application layer.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Schema design with proper normalization and foreign key relationships",
              "Indexing strategy based on actual query patterns",
              "Query optimization for slow endpoints",
              "Connection pooling configuration for serverless or high-concurrency environments",
              "Migration tooling for versioned schema changes",
            ],
          },
        ],
      },
      {
        heading: "When Postgres Is the Right Call",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Any application where data has real relationships — a booking tied to a customer and a resource, an order tied to line items and a customer — benefits from a relational database's ability to enforce those relationships and query across them efficiently. Document databases can work, but usually end up re-implementing relational features informally once the data model grows past something trivial.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "PostgreSQL or MongoDB?",
        answer: "PostgreSQL for anything with clear relationships between entities — which is most business applications. MongoDB can be a reasonable fit for genuinely document-shaped, loosely structured data, but that's a smaller share of real projects than it's often used for.",
      },
      {
        question: "How do you handle connection limits in serverless environments?",
        answer: "Connection pooling (via PgBouncer or a managed pooler like Supabase's) so serverless functions, which can spin up many concurrent connections, don't exhaust the database's connection limit.",
      },
      {
        question: "Can you optimize an existing slow database?",
        answer: "Yes — usually starting with EXPLAIN ANALYZE on the slowest queries to see what's actually happening, then adding indexes, restructuring queries, or denormalizing specific hot paths where it's justified.",
      },
    ],
    relatedSlugs: ["technologies/supabase-database-development", "services/api-development-integration", "guides/how-to-connect-nextjs-to-postgresql", "services/full-stack-development-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "tailwind-css-development",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Tailwind CSS development",
    secondaryKeywords: ["Tailwind CSS developer", "utility-first CSS", "Tailwind design system", "Tailwind CSS theming"],
    searchIntent: "informational",
    title: "Tailwind CSS Development | Justin Johnson",
    description: "Tailwind CSS implementation — consistent design tokens, responsive layouts, and dark mode without a separate CSS file per component.",
    h1: "Tailwind CSS Development",
    eyebrow: "Technologies",
    intro: [
      "Tailwind's utility-first approach keeps styling co-located with markup instead of spread across separate CSS files, which in practice means fewer naming decisions and less dead CSS accumulating over a project's lifetime. The tradeoff is verbose class lists, which a component-based framework like React absorbs reasonably well.",
      "I use Tailwind as the default styling approach on new projects, configured with a project-specific design token set rather than the stock color palette.",
    ],
    sections: [
      {
        heading: "What a Good Setup Looks Like",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Custom color tokens and typography scale defined in the Tailwind config, matched to the brand",
              "Consistent spacing and border-radius scale used throughout instead of arbitrary values",
              "Dark mode configured via the class strategy for explicit control",
              "Shared component classes for repeated patterns, avoiding excessive class duplication",
              "Responsive breakpoints used consistently across the component library",
            ],
          },
        ],
      },
      {
        heading: "Common Mistakes",
        blocks: [
          {
            kind: "list",
            items: [
              "Using the default color palette instead of defining brand-specific tokens, leading to visual inconsistency",
              "Arbitrary one-off values (like top-[13px]) scattered through the codebase instead of using the design scale",
              "Not extracting genuinely repeated class combinations into a shared component or class",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Isn't Tailwind's class list unreadable?",
        answer: "It takes adjustment, but in a component-based framework the classes live next to the markup they style, which in practice makes it easier to see what a piece of UI looks like without jumping to a separate stylesheet.",
      },
      {
        question: "Does Tailwind bloat the CSS bundle?",
        answer: "No — Tailwind scans your codebase at build time and only includes the utility classes actually used, producing a smaller final CSS file than most hand-written CSS approaches on a comparable project.",
      },
      {
        question: "Can Tailwind match a specific existing brand design?",
        answer: "Yes — the config file lets you replace the default color, spacing, and typography scales entirely with project-specific tokens, so the utility classes reflect your design system rather than Tailwind's defaults.",
      },
    ],
    relatedSlugs: ["services/react-development-services", "resources/conversion-focused-web-design", "resources/mobile-website-optimization"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "rest-api-development",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "REST API development",
    secondaryKeywords: ["RESTful API design", "REST API developer", "API versioning", "REST API best practices"],
    searchIntent: "informational",
    title: "REST API Development | Justin Johnson",
    description: "RESTful API design and development — resource modeling, authentication, and consistent error handling for Node.js backends.",
    h1: "REST API Development",
    eyebrow: "Technologies",
    intro: [
      "A REST API is defined by how consistently it's used, not by strict adherence to a spec — resource-based URLs, correct HTTP methods and status codes, and predictable error shapes make an API easy for any client to consume, including a frontend built by someone other than the API's author.",
      "I design APIs around the actual resources and operations a system needs, with versioning and authentication decided upfront rather than retrofitted.",
    ],
    sections: [
      {
        heading: "What a Well-Designed REST API Looks Like",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Resource-based URLs (/orders/:id, not /getOrderById)",
              "Correct use of HTTP methods (GET, POST, PATCH, DELETE) and status codes",
              "Consistent error response shape across every endpoint",
              "Pagination for any endpoint that can return an unbounded list",
              "Versioning strategy defined before the first breaking change is needed",
            ],
          },
        ],
      },
      {
        heading: "Authentication and Authorization",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "API keys for server-to-server integrations, JWTs or session cookies for user-facing apps — the choice depends on who's calling the API and how. Authorization (what an authenticated caller is allowed to do) is checked per endpoint, not assumed from the fact that a request is authenticated at all.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How should I version a REST API?",
        answer: "A version in the URL path (/v1/orders) is the simplest and most explicit approach — it's visible in every request and makes it obvious which version a given client is using, which matters once you need to make a breaking change without disrupting existing consumers.",
      },
      {
        question: "What's a good error response format?",
        answer: "Consistent, structured errors — an error code, a human-readable message, and enough detail for the client to know what went wrong, on every endpoint, not just some of them. Inconsistent error shapes are one of the more common frustrations for anyone integrating against an API.",
      },
      {
        question: "How do you handle rate limiting?",
        answer: "Per-client or per-API-key limits enforced at the API layer, with rate limit headers returned so clients can back off appropriately rather than hitting a wall with no information.",
      },
    ],
    relatedSlugs: ["services/api-development-integration", "technologies/graphql-development", "guides/how-to-protect-api-routes-in-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "graphql-development",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "GraphQL development",
    secondaryKeywords: ["GraphQL API developer", "GraphQL schema design", "GraphQL vs REST", "GraphQL developer for hire"],
    searchIntent: "informational",
    title: "GraphQL Development Services | Justin Johnson",
    description: "GraphQL API design and integration — schema design, resolvers, and when GraphQL is actually the better fit over REST.",
    h1: "GraphQL Development Services",
    eyebrow: "Technologies",
    intro: [
      "GraphQL lets a client request exactly the fields it needs in a single query, which solves real problems for apps with deeply nested, variable data requirements across many different screens. It's not automatically better than REST — it earns its added complexity specifically when over-fetching or under-fetching with REST becomes a genuine performance or development problem.",
      "I build GraphQL schemas and resolvers when a project's data shape justifies it, and I'll say directly when REST is the simpler, better-fitting choice instead.",
    ],
    sections: [
      {
        heading: "When GraphQL Makes Sense",
        blocks: [
          {
            kind: "list",
            items: [
              "Multiple frontends (web, mobile) with different data needs from the same backend",
              "Deeply nested data where REST would require multiple round trips or heavily over-fetched responses",
              "A product that changes frequently, where a flexible query layer avoids constant API versioning",
            ],
          },
        ],
      },
      {
        heading: "When REST Is Simpler",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Most CRUD-heavy applications with a single frontend and fairly flat data don't need GraphQL's flexibility, and REST is simpler to build, cache, and debug. I don't default to GraphQL just because it's available — the added resolver and schema complexity has to be worth it for the specific project.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is GraphQL faster than REST?",
        answer: "Not inherently — it can reduce over-fetching by letting clients request exactly what they need, but resolver design that isn't careful about N+1 query problems can make a GraphQL API slower than an equivalent REST endpoint.",
      },
      {
        question: "Do I need GraphQL if I only have one frontend?",
        answer: "Usually not — GraphQL's main advantage shows up most clearly when multiple clients with different data needs consume the same backend. A single frontend can usually be served well by a well-designed REST API.",
      },
      {
        question: "How do you prevent the N+1 query problem?",
        answer: "Batching and caching within a single request using a data loader pattern, so resolving nested fields doesn't trigger a separate database query per item in a list.",
      },
    ],
    relatedSlugs: ["technologies/rest-api-development", "services/api-development-integration"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "google-maps-api-integration",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Google Maps API integration",
    secondaryKeywords: ["Google Maps developer", "interactive map integration", "location picker development", "Maps API pricing optimization"],
    searchIntent: "informational",
    title: "Google Maps API Integration | Justin Johnson",
    description: "Google Maps API integration for booking flows, location pickers, and pickup/drop-off selection interfaces.",
    h1: "Google Maps API Integration",
    eyebrow: "Technologies",
    intro: [
      "Interactive maps come up most often in booking and transport applications — pickup and drop-off selection, service area boundaries, location search with autocomplete. I've built this pattern for transfer and delivery booking flows, where route pricing depends on the two points a customer selects on the map.",
      "The API surface itself is well-documented; the actual engineering work is usually in the interaction design — making a map-based picker fast and clear on a small mobile screen, and controlling API costs at scale.",
    ],
    sections: [
      {
        heading: "Common Use Cases",
        blocks: [
          {
            kind: "list",
            items: [
              "Pickup and drop-off location selection for transfer or delivery bookings",
              "Address autocomplete for checkout and account forms",
              "Store or service-area locators with distance filtering",
              "Route and distance calculation for pricing that depends on trip length",
            ],
          },
        ],
      },
      {
        heading: "Cost and Performance Considerations",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "The Maps API bills per request across several distinct APIs (Maps, Places, Directions), so a booking flow that fires autocomplete requests on every keystroke without debouncing can generate a meaningfully larger bill than one built with request batching and debouncing in mind from the start.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use a free alternative like Leaflet with OpenStreetMap?",
        answer: "Yes — Leaflet with OpenStreetMap tiles is a solid free option for basic map display. Google Maps is usually worth its cost specifically when you need its Places autocomplete and Directions/routing data, which OpenStreetMap-based tools don't match as directly.",
      },
      {
        question: "How do you control Maps API costs?",
        answer: "Debouncing autocomplete requests, caching geocoding results where addresses repeat, and setting usage quotas/alerts in the Google Cloud console so a runaway integration doesn't generate an unexpected bill.",
      },
      {
        question: "Can the map calculate pricing based on distance?",
        answer: "Yes — the Directions or Distance Matrix API returns route distance and duration, which can feed directly into a pricing calculation for transfer or delivery-style bookings.",
      },
    ],
    relatedSlugs: ["services/api-development-integration", "guides/how-to-add-google-maps-to-nextjs", "industries/web-development-for-transport-companies"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "stripe-payment-integration",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Stripe payment integration",
    secondaryKeywords: ["Stripe developer", "Stripe subscription billing", "Stripe checkout integration", "Stripe webhook handling"],
    searchIntent: "informational",
    title: "Stripe Payment Integration | Justin Johnson",
    description: "Stripe integration for checkout, subscription billing, and webhook handling — built to handle failed payments correctly.",
    h1: "Stripe Payment Integration",
    eyebrow: "Technologies",
    intro: [
      "Stripe handles the hard parts of payments — PCI compliance, card storage, fraud detection — but the integration work around it (webhook handling, subscription state, failed payment recovery) is where most of the actual engineering effort goes. A checkout that works in a demo and a checkout that handles a declined card or a webhook delivered twice are different amounts of work.",
      "I build both one-time checkout flows and subscription billing, with webhook handling treated as a first-class part of the integration, not an afterthought.",
    ],
    sections: [
      {
        heading: "What's Involved",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Checkout flow — Stripe Checkout (hosted) or Elements (embedded), depending on how much UI control is needed",
              "Subscription plans, upgrades, downgrades, and proration",
              "Webhook handling for payment success, failure, disputes, and subscription lifecycle events",
              "Idempotency handling so retried webhooks don't create duplicate records",
              "Failed payment recovery flows (dunning) for subscription businesses",
            ],
          },
        ],
      },
      {
        heading: "Why Webhooks Matter More Than the Checkout Form",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "A successful checkout on the frontend doesn't guarantee the payment actually settled — webhooks are Stripe's way of reliably telling your backend what actually happened, including events with no frontend equivalent, like a subscription renewal or a delayed bank transfer confirming days later. Correct webhook handling is what keeps your database in sync with reality.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Stripe Checkout or Stripe Elements?",
        answer: "Checkout (Stripe's hosted payment page) for faster implementation and less PCI scope. Elements (embedded, custom-styled fields) when the checkout experience needs to stay fully on your own domain and match your design exactly.",
      },
      {
        question: "How do you verify webhooks are genuinely from Stripe?",
        answer: "Every webhook is verified against its signature using Stripe's webhook secret before being processed — this prevents a malicious actor from sending fake payment-success events to your endpoint.",
      },
      {
        question: "What happens when a subscription payment fails?",
        answer: "Stripe's dunning system retries the charge automatically on a schedule; the integration listens for the relevant webhook events to update the subscription status and, where appropriate, notify the customer or restrict access until it's resolved.",
      },
    ],
    relatedSlugs: ["services/api-development-integration", "guides/how-to-integrate-stripe-with-nextjs", "services/saas-application-development", "services/ecommerce-development", "industries/online-ordering-systems-for-restaurants", "industries/hotel-booking-website-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "vercel-deployment",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Vercel deployment",
    secondaryKeywords: ["deploy Next.js to Vercel", "Vercel vs AWS", "Vercel environment setup", "Vercel preview deployments"],
    searchIntent: "informational",
    title: "Vercel Deployment Services | Justin Johnson",
    description: "Vercel deployment setup for Next.js apps — environments, preview deployments, custom domains, and edge configuration.",
    h1: "Vercel Deployment Services",
    eyebrow: "Technologies",
    intro: [
      "Vercel is built by the team behind Next.js and it shows — deployments pick up ISR, edge functions, and image optimization without extra configuration that a general-purpose host would require. For most Next.js projects it's the path of least friction from git push to a live URL.",
      "I set up the deployment pipeline, environment variables, custom domains, and preview deployment workflow so every pull request gets its own testable URL before merging.",
    ],
    sections: [
      {
        heading: "What a Proper Setup Includes",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Production, preview, and development environment variables kept separate",
              "Preview deployments on every pull request for review before merge",
              "Custom domain configuration with correct DNS and SSL",
              "Build and deployment notifications wired into the team's workflow",
              "Edge/serverless function configuration where the app uses them",
            ],
          },
        ],
      },
      {
        heading: "Vercel vs Self-Hosting",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Vercel trades some infrastructure control for significantly less operational overhead — no servers to patch, automatic scaling, and native support for Next.js features. Self-hosting on AWS or via Docker makes more sense when you need infrastructure that must live in a specific environment, or when Vercel's pricing at scale becomes a real factor for the project.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Vercel free to use?",
        answer: "Vercel has a free tier suitable for personal projects and small sites; production applications with real traffic typically move to a paid plan, priced around usage (bandwidth, function execution, team seats).",
      },
      {
        question: "Can I use a custom domain on Vercel?",
        answer: "Yes — domains are added directly in the project settings, with DNS records pointed at Vercel; SSL certificates are provisioned and renewed automatically.",
      },
      {
        question: "Does Vercel work for non-Next.js projects?",
        answer: "Yes, it supports most modern frameworks (Vite, Remix, static sites), but the deepest feature integration — ISR, edge middleware — is specifically tuned for Next.js.",
      },
    ],
    relatedSlugs: ["technologies/docker-deployment", "guides/how-to-deploy-nextjs-on-vercel", "services/nextjs-development-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "docker-deployment",
    category: "technologies",
    pageType: "commercial",
    schemaType: "TechArticle",
    primaryKeyword: "Docker deployment",
    secondaryKeywords: ["containerized Next.js deployment", "Docker for Node.js apps", "self-hosted deployment", "Docker CI/CD setup"],
    searchIntent: "informational",
    title: "Docker Deployment Services | Justin Johnson",
    description: "Docker-based deployment for Node.js and Next.js apps — containerized builds that run consistently across environments.",
    h1: "Docker Deployment Services",
    eyebrow: "Technologies",
    intro: [
      "Docker packages an application with everything it needs to run — dependencies, runtime version, configuration — into a container that behaves the same on a developer's machine, a staging server, and production. This matters most when infrastructure needs to run somewhere other than a managed platform like Vercel, or when the app has to live alongside other services in a self-hosted environment.",
      "I set up multi-stage Docker builds that keep the final image small, plus the CI/CD pipeline that builds and deploys it.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Multi-stage Dockerfile that keeps the production image lean (no dev dependencies shipped)",
              "Environment variable and secrets handling appropriate to the target platform",
              "CI/CD pipeline that builds, tests, and deploys the container on push",
              "Health checks and restart policies for reliability",
              "Reverse proxy and SSL configuration where self-hosting",
            ],
          },
        ],
      },
      {
        heading: "When Docker Is Worth the Setup",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "If the target is a managed platform that handles builds for you (Vercel), Docker is usually unnecessary overhead. It earns its place when deploying to your own servers, running on AWS ECS or a similar container platform, or when the app needs to run consistently alongside other containerized services.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need Docker for a Next.js app?",
        answer: "Not if deploying to Vercel or a similar managed platform that handles the build environment for you. It becomes worth it when self-hosting, deploying to AWS/GCP container services, or when consistency across a team's different local environments is a real recurring problem.",
      },
      {
        question: "How do you keep Docker images small?",
        answer: "Multi-stage builds — dependencies and the build step happen in an intermediate stage, and only the compiled output plus production dependencies get copied into the final image, keeping build tools and dev dependencies out of what actually ships.",
      },
      {
        question: "Can Docker deployments still support CI/CD?",
        answer: "Yes — a standard pipeline builds the image, runs tests against it, pushes it to a registry, and triggers a deployment, the same automation flow as any other deployment target, just containerized.",
      },
    ],
    relatedSlugs: ["technologies/vercel-deployment", "services/full-stack-development-services", "guides/how-to-deploy-nextjs-on-cpanel"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
];
