import type { SeoPage } from "./types";

export const resourcePages: SeoPage[] = [
  {
    slug: "technical-seo-services",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "technical SEO services",
    secondaryKeywords: ["technical SEO consultant", "site architecture SEO", "crawlability audit", "indexability fixes"],
    searchIntent: "commercial",
    title: "Technical SEO Services | Justin Johnson",
    description: "Technical SEO work at the code level — crawlability, indexability, site architecture, and the issues content-only SEO can't fix.",
    h1: "Technical SEO Services",
    eyebrow: "SEO & Performance",
    intro: [
      "Technical SEO is the part of search optimization that lives in code rather than content — whether pages can be crawled and indexed at all, whether the site architecture supports discovery, whether rendering choices hide content from search engines. Content and backlinks don't matter if the technical foundation is blocking a page from being indexed in the first place.",
      "As a developer rather than a marketer, this is where I add the most value — fixing the underlying causes rather than working around them.",
    ],
    sections: [
      {
        heading: "What This Covers",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Crawlability and indexability audit (robots.txt, meta robots, canonical tags)",
              "Site architecture and internal linking structure",
              "Rendering audit — confirming content is actually present in the HTML search engines see",
              "XML sitemap accuracy and structure",
              "Structured data implementation and validation",
              "Core Web Vitals and page speed diagnosis",
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
              "Crawl the site the way a search engine would, to find indexability and rendering issues directly",
              "Review Search Console for existing crawl errors and coverage issues",
              "Prioritize fixes by expected impact — indexability blockers first, then architecture, then finer details",
              "Implement fixes directly in the codebase, not as a separate report someone else has to act on",
              "Monitor Search Console after changes to confirm the fixes actually resolved the issue",
            ],
          },
        ],
      },
      {
        heading: "Suitable For",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Sites with content and marketing effort that isn't translating into search visibility — often a sign the technical foundation is holding results back regardless of content quality.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How is this different from an SEO agency's technical audit?",
        answer: "Most SEO audits produce a report of recommendations someone else then has to implement, often a developer unfamiliar with SEO priorities. Since I'm both the auditor and the developer, fixes get implemented directly rather than translated across a handoff.",
      },
      {
        question: "Can technical SEO fix a ranking problem by itself?",
        answer: "It fixes the foundation — indexability, crawlability, page speed — but content quality and relevance still drive rankings on top of that foundation. Technical SEO removes obstacles; it doesn't replace the need for genuinely useful content.",
      },
      {
        question: "How long before technical fixes show results?",
        answer: "Indexability fixes can show up in Search Console within days to weeks as pages get re-crawled; ranking improvements from technical changes typically take longer to materialize and are harder to isolate from other factors.",
      },
    ],
    relatedSlugs: ["resources/seo-website-audit", "resources/core-web-vitals-optimization", "resources/javascript-seo", "resources/nextjs-seo-services", "services/website-redesign-services", "services/headless-cms-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "nextjs-seo-services",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "Next.js SEO services",
    secondaryKeywords: ["Next.js SEO consultant", "Next.js technical SEO", "Next.js Search Console setup", "Next.js SEO implementation"],
    searchIntent: "commercial",
    title: "Next.js SEO Services | Justin Johnson",
    description: "SEO implementation specifically for Next.js sites — metadata, sitemaps, structured data, and rendering strategy done correctly.",
    h1: "Next.js SEO Services",
    eyebrow: "SEO & Performance",
    intro: [
      "Next.js gives you the tools for strong SEO — the Metadata API, built-in sitemap generation, server rendering — but a site can still be built on Next.js and have real SEO problems if those tools aren't used correctly. This service is specifically for Next.js sites: auditing and fixing metadata, rendering strategy, and structured data at the framework level.",
      "Because I build Next.js applications directly, I can implement fixes in the codebase rather than handing over generic recommendations.",
    ],
    sections: [
      {
        heading: "What Gets Reviewed",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Metadata API usage — are titles and descriptions actually unique per page, or duplicated from a default",
              "Rendering strategy per route — is content statically generated where it should be, or unnecessarily client-rendered",
              "Sitemap and robots.txt configuration",
              "Structured data coverage for the page types that support it",
              "Image optimization and Core Web Vitals",
              "Canonical URL handling, especially for pages reachable via multiple paths or query params",
            ],
          },
        ],
      },
      {
        heading: "Common Next.js-Specific Issues",
        blocks: [
          {
            kind: "list",
            items: [
              "Pages accidentally rendered fully client-side, hiding content from crawlers that don't fully execute JavaScript",
              "Missing or duplicated metadata because generateMetadata wasn't implemented per route",
              "No sitemap.ts file, or one that's out of sync with the actual routes",
              "Images not using next/image, missing width/height and causing layout shift",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is this different from your general technical SEO service?",
        answer: "Same underlying discipline, focused specifically on Next.js's tools and common pitfalls — the Metadata API, App Router rendering decisions, and sitemap file conventions — rather than a framework-agnostic audit.",
      },
      {
        question: "Can you fix SEO issues without a full redesign?",
        answer: "In most cases, yes — metadata, sitemap, and structured data fixes are usually implementable without touching the visual design, since they live in the framework's data and configuration layer rather than the UI.",
      },
      {
        question: "Do you set up Search Console and monitoring?",
        answer: "Yes — verifying the property, submitting the sitemap, and reviewing coverage reports afterward to confirm indexing issues are actually resolved.",
      },
    ],
    relatedSlugs: ["technologies/nextjs-seo", "guides/how-to-generate-metadata-in-nextjs", "guides/how-to-create-an-xml-sitemap-in-nextjs", "resources/technical-seo-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "react-website-seo",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "React website SEO",
    secondaryKeywords: ["SEO for single page applications", "React SPA SEO fix", "client-side rendering SEO problem", "React SEO consultant"],
    searchIntent: "commercial",
    title: "React Website SEO Services | Justin Johnson",
    description: "SEO for React single-page applications — fixing the crawlability gap that comes from purely client-side rendering.",
    h1: "React Website SEO Services",
    eyebrow: "SEO & Performance",
    intro: [
      "A plain React SPA renders everything in the browser, which means the initial HTML delivered to a crawler is close to empty until JavaScript executes. Google's crawler does execute JavaScript, but slower and less reliably than reading static HTML directly, and other search engines and social media link previews often don't execute it at all.",
      "This service is for React sites that need better search visibility without necessarily doing a full framework migration, plus honest guidance on when migration actually is the right call.",
    ],
    sections: [
      {
        heading: "Options, Roughly by Effort",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Static prerendering — generate static HTML snapshots of each route at build time, served to crawlers and users alike, while the app still hydrates into a full SPA. Lower effort, works for content that doesn't need to be dynamic per visitor.",
              "Server-side rendering added to the existing React app via a framework migration (typically to Next.js), which handles rendering, metadata, and routing more completely",
              "Hybrid approach — prerender the SEO-critical marketing pages, leave the authenticated app experience as a client-rendered SPA",
            ],
          },
        ],
      },
      {
        heading: "What Else Gets Fixed",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Per-route metadata (title, description, canonical) instead of one static set for the whole app",
              "A proper XML sitemap covering all indexable routes",
              "Structured data where it's genuinely applicable",
              "Internal linking with real anchor tags rather than JavaScript-only navigation",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does Google actually index client-rendered React sites?",
        answer: "Yes, Google's crawler does render JavaScript, but on a delay and with more resource constraints than static HTML rendering — pages can take noticeably longer to get indexed, and other crawlers (social previews, some other search engines) may not execute JavaScript reliably at all.",
      },
      {
        question: "Do I need to migrate to Next.js?",
        answer: "Not necessarily — prerendering can meaningfully improve crawlability without a framework migration. A full migration to Next.js is worth considering when the site is content-heavy and search visibility is a primary goal, since it handles rendering strategy more completely long-term.",
      },
      {
        question: "What is prerendering exactly?",
        answer: "A build step that renders each route to static HTML ahead of time (often using a headless browser), so crawlers and slow connections get real content immediately, while the app still becomes a fully interactive SPA once JavaScript loads and hydrates.",
      },
    ],
    relatedSlugs: ["resources/javascript-seo", "services/react-development-services", "resources/technical-seo-services", "guides/how-to-improve-seo-for-a-react-website"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "core-web-vitals-optimization",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "Core Web Vitals optimization",
    secondaryKeywords: ["LCP optimization", "CLS fix", "INP optimization", "Core Web Vitals developer"],
    searchIntent: "commercial",
    title: "Core Web Vitals Optimization | Justin Johnson",
    description: "Core Web Vitals fixes for LCP, CLS, and INP — diagnosed with real data, fixed at the code level, not guessed at.",
    h1: "Core Web Vitals Optimization",
    eyebrow: "SEO & Performance",
    intro: [
      "Core Web Vitals — Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint — measure real user-perceived speed and are used by Google as a ranking signal. Fixing them means finding the specific element or script actually causing the problem, not applying generic 'make it faster' advice.",
      "I diagnose using both lab data (Lighthouse) and field data (real user metrics from Search Console or a monitoring tool), since the two don't always agree and the field data reflects what actual visitors experience.",
    ],
    sections: [
      {
        heading: "What Each Metric Actually Measures",
        blocks: [
          {
            kind: "list",
            items: [
              "LCP (Largest Contentful Paint) — how long until the largest visible element (usually a hero image or heading) renders",
              "CLS (Cumulative Layout Shift) — how much visible content shifts unexpectedly during load",
              "INP (Interaction to Next Paint) — how responsive the page feels when a user actually interacts with it",
            ],
          },
        ],
      },
      {
        heading: "Common Fixes",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Optimizing and correctly sizing the largest above-the-fold image (biggest lever for LCP on most sites)",
              "Reserving space for images and ads before they load, to prevent layout shift",
              "Self-hosting fonts with next/font or equivalent to avoid font-swap layout shift",
              "Deferring non-critical JavaScript that blocks the main thread",
              "Reducing the size and priority of render-blocking resources",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do Core Web Vitals really affect rankings?",
        answer: "They're one signal among many in Google's ranking system, more likely to matter as a tiebreaker between otherwise similar-quality pages than as a dominant factor on their own — but they directly affect bounce rate and conversion regardless of their ranking weight, which makes them worth fixing either way.",
      },
      {
        question: "Why do lab and field data disagree?",
        answer: "Lab data (Lighthouse) tests a single simulated run under controlled conditions; field data aggregates real visitors on real devices and connections, which vary far more — a site can score well in Lighthouse but poorly in the field if a large share of real visitors are on slow mobile connections.",
      },
      {
        question: "What's the single biggest lever for LCP?",
        answer: "On most content sites, it's the largest above-the-fold image — serving it at the correct size, in a modern format, with high loading priority, usually moves LCP more than any other single change.",
      },
    ],
    relatedSlugs: ["resources/website-speed-optimization", "technologies/nextjs-performance-optimization", "guides/how-to-improve-core-web-vitals-in-nextjs", "services/website-redesign-services", "services/website-maintenance-services", "technologies/nextjs-server-side-rendering"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "website-speed-optimization",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "website speed optimization",
    secondaryKeywords: ["page speed optimization service", "slow website fix", "website performance audit", "speed up my website"],
    searchIntent: "commercial",
    title: "Website Speed Optimization | Justin Johnson",
    description: "Website speed fixes based on real profiling — images, JavaScript, fonts, and server response time, addressed in order of impact.",
    h1: "Website Speed Optimization",
    eyebrow: "SEO & Performance",
    intro: [
      "Speed work starts with measurement, not assumptions — the actual bottleneck on a given site could be an oversized hero image, an unoptimized third-party script, or slow server response time, and they each need a different fix. I profile first to find what's actually slow before touching anything.",
      "This covers both one-off audits with a prioritized fix list and hands-on implementation of the fixes themselves.",
    ],
    sections: [
      {
        heading: "Where I Start",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Run Lighthouse and WebPageTest to get both lab metrics and a visual waterfall of what's loading and when",
              "Check Search Console's field data for how real visitors are actually experiencing the site",
              "Identify the single largest contributor to slow load — usually images, JavaScript bundle size, or third-party scripts",
              "Fix the biggest issue first, then re-measure before moving to the next",
            ],
          },
        ],
      },
      {
        heading: "Frequent Culprits",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Unoptimized, oversized images served at far larger dimensions than displayed",
              "Third-party scripts (analytics, chat widgets, ad tags) loaded synchronously and blocking render",
              "Web fonts loaded without proper preloading or fallback strategy, causing layout shift or invisible text",
              "Server response time (TTFB) slow due to unoptimized backend queries or no caching",
              "Excessive JavaScript shipped for interactivity the page doesn't actually need",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How much can speed realistically improve?",
        answer: "Depends entirely on the starting point and what's causing the slowness — a site with clear, fixable bottlenecks (unoptimized images, blocking scripts) usually sees substantial, measurable improvement; a site that's already reasonably optimized has less low-hanging fruit left.",
      },
      {
        question: "Is a CDN necessary?",
        answer: "For static assets, generally yes — serving images, CSS, and JS from a CDN edge close to the visitor reduces latency meaningfully. Most modern hosting platforms (Vercel, Netlify) include this by default.",
      },
      {
        question: "Do you optimize images automatically?",
        answer: "For Next.js sites, next/image handles resizing and format conversion automatically. For other stacks, this is set up as part of the build pipeline or a CDN-level image transformation service.",
      },
    ],
    relatedSlugs: ["resources/core-web-vitals-optimization", "resources/mobile-website-optimization", "guides/how-to-optimize-nextjs-images", "industries/web-development-for-hotels"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "javascript-seo",
    category: "resources",
    pageType: "commercial",
    schemaType: "Article",
    primaryKeyword: "JavaScript SEO",
    secondaryKeywords: ["client-side rendering SEO", "JS SEO best practices", "rendering and SEO", "SEO for JavaScript frameworks"],
    searchIntent: "informational",
    title: "JavaScript SEO | Justin Johnson",
    description: "How JavaScript rendering choices affect crawlability and indexing, and how to avoid content being invisible to search engines.",
    h1: "JavaScript SEO",
    eyebrow: "SEO & Performance",
    intro: [
      "JavaScript SEO is about one core question: is the content that matters actually present in what a search engine reads, or does it only appear after client-side JavaScript executes? The answer depends entirely on the rendering strategy chosen for a given page, not on JavaScript usage in general — a page can use plenty of JavaScript and still be perfectly crawlable if rendering is handled correctly.",
      "This is the underlying issue behind most SEO problems on modern JavaScript-framework sites, and the reason server rendering or static generation matters for anything meant to rank.",
    ],
    sections: [
      {
        heading: "The Core Distinction",
        blocks: [
          {
            kind: "list",
            items: [
              "Client-side rendering — the server sends near-empty HTML, and content is injected by JavaScript in the browser. Search engines must execute that JavaScript to see the content, which is slower and less reliable than reading HTML directly.",
              "Server-side rendering / static generation — the server sends fully-formed HTML with content already present. No JavaScript execution required to see the content.",
              "Hybrid — a shell renders on the server with the bulk of content, and only specific interactive pieces hydrate on the client.",
            ],
          },
        ],
      },
      {
        heading: "How to Check What a Crawler Actually Sees",
        blocks: [
          {
            kind: "list",
            items: [
              "View the page's raw HTML source (not the rendered DOM) — if the main content isn't there, it's relying entirely on JavaScript",
              "Use Google Search Console's URL Inspection tool to see the rendered HTML Google's crawler actually captured",
              "Disable JavaScript in the browser and reload the page to see what's left",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does Google penalize JavaScript-heavy sites?",
        answer: "Not for using JavaScript itself — the issue is specifically when content that should be indexed only exists after JavaScript execution, which adds delay and risk to indexing compared to content present in the initial HTML.",
      },
      {
        question: "Is hydration a problem for SEO?",
        answer: "Hydration itself isn't — a server-rendered page that later hydrates into an interactive app has its content already in the HTML by the time a crawler reads it. The problem is specifically pages that are rendered client-side only, with no server-rendered content to begin with.",
      },
      {
        question: "How do I know if my site has a JavaScript SEO problem?",
        answer: "Check the raw HTML response (not the browser's rendered DOM) for a given page — if the main content isn't there, it's dependent on client-side JavaScript, which is the underlying pattern worth investigating further.",
      },
    ],
    relatedSlugs: ["resources/react-website-seo", "technologies/nextjs-server-side-rendering", "resources/technical-seo-services", "guides/how-to-improve-seo-for-a-react-website"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "structured-data-implementation",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "structured data implementation",
    secondaryKeywords: ["JSON-LD implementation", "schema markup developer", "structured data for SEO", "rich results setup"],
    searchIntent: "commercial",
    title: "Structured Data Implementation | Justin Johnson",
    description: "JSON-LD structured data implemented correctly and validated — matched to what's actually visible on the page.",
    h1: "Structured Data Implementation",
    eyebrow: "SEO & Performance",
    intro: [
      "Structured data (usually JSON-LD) tells search engines explicitly what a page represents — an article, a product, a service, an FAQ — which can unlock rich results in search listings and helps search engines understand content that would otherwise need to be inferred. The requirement that trips people up: the markup has to accurately reflect what's genuinely visible on the page, not what you'd like it to say.",
      "I implement this as reusable, typed helper functions rather than duplicating JSON-LD scripts by hand across every page, and validate every schema against Google's testing tools before it ships.",
    ],
    sections: [
      {
        heading: "Common Schema Types and When They Apply",
        blocks: [
          {
            kind: "list",
            items: [
              "Article / TechArticle — blog posts, guides, and technical content",
              "Service — commercial service pages",
              "FAQPage — only when genuine, visible FAQ content exists on the page",
              "BreadcrumbList — any page with a visible breadcrumb trail",
              "HowTo — step-by-step tutorial content with a genuine sequence of steps",
              "Person / Organization — identity and entity information",
            ],
          },
        ],
      },
      {
        heading: "What to Avoid",
        blocks: [
          {
            kind: "list",
            items: [
              "Adding FAQPage schema mechanically to every page whether or not it has real, visible FAQ content",
              "Including review, rating, or price data that isn't actually displayed on the page",
              "Marking up content that doesn't match what a visitor actually sees — this risks a manual action from Google, not just a missed opportunity",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does structured data guarantee rich results?",
        answer: "No — it makes a page eligible for rich results, but Google decides whether and how to display them based on its own criteria, which isn't guaranteed or fully documented.",
      },
      {
        question: "Can I add review schema without real reviews?",
        answer: "No — this violates Google's structured data guidelines and can trigger a manual penalty. Structured data must accurately reflect content genuinely present and visible on the page.",
      },
      {
        question: "How do you validate structured data?",
        answer: "Against Google's Rich Results Test and the Schema.org validator before deployment, and periodically afterward as content changes, since a later content edit can silently make previously accurate markup incorrect.",
      },
    ],
    relatedSlugs: ["resources/technical-seo-services", "guides/how-to-add-json-ld-in-nextjs", "resources/programmatic-seo"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "xml-sitemap-optimization",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "XML sitemap optimization",
    secondaryKeywords: ["sitemap.xml setup", "sitemap for large sites", "sitemap indexing issues", "dynamic sitemap generation"],
    searchIntent: "commercial",
    title: "XML Sitemap Optimization | Justin Johnson",
    description: "XML sitemap setup and cleanup — accurate, current, and structured so crawl budget goes to pages that matter.",
    h1: "XML Sitemap Optimization",
    eyebrow: "SEO & Performance",
    intro: [
      "A sitemap's job is telling search engines which URLs exist and are worth crawling — it doesn't guarantee indexing, but an inaccurate one (listing removed pages, missing new ones, wrong lastmod dates) actively wastes crawl budget and can create confusion about which version of a page is canonical.",
      "I build sitemaps generated programmatically from the actual route data, so they can't silently drift out of sync with the real site the way a hand-maintained file eventually does.",
    ],
    sections: [
      {
        heading: "What a Good Sitemap Includes",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Only canonical, indexable URLs — no duplicates, redirects, or noindex pages",
              "Accurate lastmod dates that reflect genuine content changes, not fabricated on every build",
              "Sitemap index files for sites large enough to exceed a single sitemap's URL limit",
              "Separate sitemaps by content type where it helps monitoring (e.g. one for blog content, one for service pages)",
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
              "A hand-maintained sitemap that falls out of sync as pages are added, removed, or renamed",
              "Including pages that redirect or return errors, which sends mixed signals to crawlers",
              "Setting lastmod to the current date on every deploy regardless of whether the page's content actually changed",
              "Not submitting the sitemap in Search Console after significant changes",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does a sitemap guarantee my pages get indexed?",
        answer: "No — it's a hint that helps discovery, not a guarantee. Indexing still depends on content quality, crawlability, and the page not being blocked by robots.txt or a noindex tag.",
      },
      {
        question: "Should lastmod dates update automatically on every build?",
        answer: "No — lastmod should reflect when a page's content genuinely changed, not the last time the site was rebuilt. Setting it to the current date on every deploy regardless of actual changes reduces its usefulness as a freshness signal.",
      },
      {
        question: "How many URLs can a single sitemap hold?",
        answer: "Up to 50,000 URLs or 50MB uncompressed per the sitemap protocol — sites larger than that need a sitemap index file referencing multiple individual sitemaps.",
      },
    ],
    relatedSlugs: ["resources/technical-seo-services", "guides/how-to-create-an-xml-sitemap-in-nextjs", "resources/programmatic-seo"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "internal-linking-strategy",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "internal linking strategy",
    secondaryKeywords: ["internal link structure SEO", "site architecture linking", "orphan page fix", "internal link audit"],
    searchIntent: "commercial",
    title: "Internal Linking Strategy | Justin Johnson",
    description: "Internal linking structure built deliberately — no orphan pages, clear topic hierarchy, and descriptive anchor text.",
    h1: "Internal Linking Strategy",
    eyebrow: "SEO & Performance",
    intro: [
      "Internal links are how both users and search engines discover pages that aren't in the main navigation, and how authority flows from well-linked pages to newer or deeper ones. A site with strong content but no deliberate internal linking structure often has pages that are functionally invisible — reachable only by direct URL, never through normal browsing.",
      "This is architecture work as much as SEO — deciding how categories, hub pages, and individual content pages should reference each other.",
    ],
    sections: [
      {
        heading: "What a Deliberate Structure Looks Like",
        blocks: [
          {
            kind: "list",
            items: [
              "Every content page links back to its parent category or hub page",
              "Hub pages link out to their child pages, grouped logically rather than as a flat list",
              "Related-content sections connect pages on similar topics to each other",
              "Contextual links within body content point to genuinely relevant pages, not just a sidebar widget",
              "Descriptive anchor text ('Next.js SEO implementation') instead of generic anchors ('click here', 'learn more')",
            ],
          },
        ],
      },
      {
        heading: "Finding and Fixing Orphan Pages",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "An orphan page has no internal links pointing to it — it might still be indexed if it's in the sitemap, but it gets little of the authority or discovery benefit that comes from being linked from relevant, established pages. A full site crawl compared against the sitemap is the standard way to find these.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many internal links should a page have?",
        answer: "There's no fixed number — the standard is relevance, not quantity. A handful of genuinely related links in context is more useful than a long list of tenuously related ones added just to hit a target count.",
      },
      {
        question: "Does anchor text really matter?",
        answer: "Yes, to a meaningful degree — descriptive anchor text gives both users and search engines a clear signal about what the linked page covers, which generic anchors like 'click here' don't provide.",
      },
      {
        question: "How do I find orphan pages on my site?",
        answer: "Crawl the site with a tool that follows links (not just reads the sitemap) and compare the discovered pages against your full sitemap — anything in the sitemap but not reached by crawling internal links is an orphan.",
      },
    ],
    relatedSlugs: ["resources/technical-seo-services", "resources/programmatic-seo", "resources/local-seo-website-development", "resources/seo-website-audit"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "seo-website-audit",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "SEO website audit",
    secondaryKeywords: ["SEO audit service", "website SEO health check", "SEO audit developer", "comprehensive SEO audit"],
    searchIntent: "commercial",
    title: "SEO Website Audit | Justin Johnson",
    description: "A developer-led SEO audit covering technical issues, content gaps, and site architecture, with fixes prioritized by impact.",
    h1: "SEO Website Audit",
    eyebrow: "SEO & Performance",
    intro: [
      "An SEO audit is only as useful as what happens after it — a long list of generic recommendations doesn't help if nobody prioritizes or implements them. I run audits with a clear priority order (indexability issues first, then architecture, then finer details) and I'm equally able to implement the fixes directly rather than handing off a report.",
      "This covers the full technical and structural picture: crawlability, site speed, metadata, structured data, and internal linking.",
    ],
    sections: [
      {
        heading: "What Gets Reviewed",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Crawlability and indexing status via Search Console and a direct site crawl",
              "Metadata coverage and quality across all indexable pages",
              "Core Web Vitals and page speed",
              "Structured data presence and validity",
              "Internal linking structure and orphan pages",
              "Content gaps against the site's actual target topics",
            ],
          },
        ],
      },
      {
        heading: "What You Get",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "A prioritized list of issues ordered by expected impact, not just a raw dump of everything a crawler tool flagged — many automated audit tools surface dozens of low-impact warnings alongside the handful of issues that actually matter, and separating those two categories is most of the value of a manual review.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does an audit take?",
        answer: "Depends on site size and complexity — a small marketing site is a much smaller undertaking than a large, content-heavy site with hundreds of indexed pages and a more complex architecture to review.",
      },
      {
        question: "Do you implement the fixes or just report on them?",
        answer: "Both, depending on what's wanted — a standalone audit report, or the audit plus direct implementation of the fixes in the codebase, which is usually the faster path to actual improvement.",
      },
      {
        question: "How is this different from a free automated SEO tool?",
        answer: "Automated tools are useful for surfacing a broad list of potential issues but don't prioritize well and often flag low-impact warnings alongside genuine problems. A manual audit adds judgment about what actually matters for this specific site.",
      },
    ],
    relatedSlugs: ["resources/technical-seo-services", "resources/core-web-vitals-optimization", "resources/internal-linking-strategy"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "programmatic-seo",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "programmatic SEO",
    secondaryKeywords: ["programmatic SEO developer", "data-driven SEO pages", "scalable SEO page system", "programmatic SEO without thin content"],
    searchIntent: "commercial",
    title: "Programmatic SEO Development | Justin Johnson",
    description: "Programmatic SEO systems that scale to hundreds of pages without becoming thin, duplicate, or low-quality doorway pages.",
    h1: "Programmatic SEO Development",
    eyebrow: "SEO & Performance",
    intro: [
      "Programmatic SEO means generating many pages from a shared template and a structured data source, targeting a wide set of related keywords — a location, a use case, a comparison — without hand-building each page individually. Done well, it's how a site scales content coverage; done poorly, it produces exactly the kind of thin, near-duplicate pages search engines rank down.",
      "The system underlying this cluster of pages on this site is itself a programmatic SEO build — a typed content model and shared templates, with each page's actual content written to be genuinely distinct rather than swapping one variable into a fixed paragraph.",
    ],
    sections: [
      {
        heading: "What Separates Good Programmatic SEO From Doorway Pages",
        blocks: [
          {
            kind: "list",
            items: [
              "Each page answers a genuinely distinct search intent, not the same content with one keyword swapped",
              "The data backing each page is real and specific — not padding to hit a word count",
              "Pages link to each other deliberately, forming real topical structure rather than an isolated page farm",
              "The template itself supports enough variation in structure, not just variation in a few filled-in fields",
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
              "Content data model design — what varies genuinely per page, what stays structural",
              "Reusable page templates matched to each content type",
              "Validation to catch duplicate or malformed content before it ships",
              "Sitemap and internal linking generated from the same data source",
              "A content plan sized to genuine keyword and search-intent coverage, not an arbitrary page count",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Isn't programmatic SEO just spam at scale?",
        answer: "It can be, when pages are near-duplicates with a single variable swapped and no real informational value. It isn't inherently spam — a large e-commerce catalog or a genuinely distinct set of local or use-case pages is a legitimate application of the same underlying pattern.",
      },
      {
        question: "How do you avoid thin content across many pages?",
        answer: "By requiring each page to have distinct sections, FAQs, and examples tied to its specific topic — the template defines structure, not the actual sentences, and any page too thin to stand alone gets cut rather than published.",
      },
      {
        question: "How many pages is 'too many' to launch at once?",
        answer: "There's no fixed number, but launching a very large batch of new pages at once is worth a search engine's attention in either direction — quality matters more than volume, and a smaller set of genuinely useful pages outperforms a much larger set of weak ones.",
      },
    ],
    relatedSlugs: ["resources/internal-linking-strategy", "resources/xml-sitemap-optimization", "resources/structured-data-implementation", "technologies/nextjs-static-site-generation", "technologies/nextjs-incremental-static-regeneration", "resources/local-seo-website-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "local-seo-website-development",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "local SEO website development",
    secondaryKeywords: ["local business website SEO", "multi-location SEO pages", "Google Business Profile website integration", "local search visibility"],
    searchIntent: "commercial",
    title: "Local SEO Website Development | Justin Johnson",
    description: "Websites built for local search visibility — location pages, structured data, and technical fundamentals for local rankings.",
    h1: "Local SEO Website Development",
    eyebrow: "SEO & Performance",
    intro: [
      "Local search visibility depends on a mix of factors outside a website's direct control (Google Business Profile, reviews, citations) and factors that are entirely within the site itself — dedicated location pages with genuinely distinct content, accurate structured data, and fast load times for the mobile searches local queries mostly come from.",
      "I focus on the website side: building location or service-area pages that hold up on their own merits, not thin pages that just swap a city name.",
    ],
    sections: [
      {
        heading: "What This Covers",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Location or service-area pages with genuinely location-specific content",
              "LocalBusiness structured data matched to what's actually on the page",
              "Mobile-first performance, since local search skews heavily mobile",
              "Consistent NAP (name, address, phone) information across the site",
              "Internal linking between location pages and the main service pages",
            ],
          },
        ],
      },
      {
        heading: "Multi-Location Businesses",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "For businesses with multiple locations, this is essentially a specialized case of [programmatic SEO](resources/programmatic-seo) — a shared template with genuinely distinct, location-specific content per page (local service details, area-specific information) rather than the same copy repeated with only the city name changed.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does the website itself affect local rankings, or just Google Business Profile?",
        answer: "Both — Google Business Profile and reviews carry significant weight for local pack rankings, but the website's relevance, structured data, and technical quality still factor into both local and standard organic rankings, and matter more for the broader organic search results beyond the local pack.",
      },
      {
        question: "How do you avoid thin, duplicate location pages?",
        answer: "Each location page needs genuinely distinct, useful content specific to that area — not a template with only the city name swapped. If there isn't enough distinct information to justify a separate page, it's often better as a single well-structured service-area page instead.",
      },
      {
        question: "What structured data helps local SEO?",
        answer: "LocalBusiness schema, populated only with information genuinely displayed on the page (address, hours, service area) — fabricated or inconsistent business details in structured data can cause more harm than benefit.",
      },
    ],
    relatedSlugs: ["resources/programmatic-seo", "resources/technical-seo-services", "services/website-redesign-services", "resources/internal-linking-strategy", "industries/web-development-for-real-estate", "industries/web-development-for-restaurants"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "conversion-focused-web-design",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "conversion-focused web design",
    secondaryKeywords: ["conversion rate optimization developer", "CRO web design", "landing page conversion design", "high-converting website design"],
    searchIntent: "commercial",
    title: "Conversion-Focused Web Design | Justin Johnson",
    description: "Web design decisions made around what actually helps visitors take action, not just aesthetic preference.",
    h1: "Conversion-Focused Web Design",
    eyebrow: "SEO & Performance",
    intro: [
      "Traffic that doesn't convert isn't worth much regardless of how well a page ranks — conversion-focused design means every significant design decision (page structure, CTA placement, form length, load speed) gets evaluated against whether it helps or hinders the visitor taking the intended action.",
      "This isn't a separate visual style; it's a set of practical constraints applied within whatever the site's existing brand and design language already are.",
    ],
    sections: [
      {
        heading: "What Gets Reviewed",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Clarity of the primary call to action on every key page",
              "Form length and friction — asking for only what's actually needed at that stage",
              "Page load speed, since slow pages measurably increase abandonment before a visitor even sees the offer",
              "Mobile usability, given the majority of traffic on most sites is mobile",
              "Trust signals appropriate to the business — genuine, not fabricated",
            ],
          },
        ],
      },
      {
        heading: "Where This Overlaps With SEO and Performance",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "A fast, well-structured, mobile-friendly page serves both SEO and conversion goals simultaneously — the two aren't in tension the way they're sometimes framed. The main place they can conflict is when a design choice (an intrusive popup, for instance) helps one narrow metric while hurting user experience broadly.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is this about A/B testing?",
        answer: "A/B testing is one tool within conversion optimization, most useful once there's enough traffic to reach statistical significance. For most sites, applying established, well-evidenced design principles directly is more practical than running formal tests on every decision.",
      },
      {
        question: "Does this change the whole design?",
        answer: "Not necessarily — it's usually about adjusting specific elements (CTA prominence, form length, page structure) within the existing brand and visual design, not a wholesale redesign.",
      },
      {
        question: "How is this measured?",
        answer: "Against a defined conversion goal specific to the page — a form submission, a purchase, a booking — tracked through analytics before and after changes, rather than judged on subjective visual preference.",
      },
    ],
    relatedSlugs: ["resources/mobile-website-optimization", "services/website-redesign-services", "resources/website-accessibility-services", "technologies/tailwind-css-development", "industries/web-development-for-law-firms", "industries/web-development-for-construction-companies"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "mobile-website-optimization",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "mobile website optimization",
    secondaryKeywords: ["mobile-first design developer", "responsive website fix", "mobile page speed optimization", "mobile usability audit"],
    searchIntent: "commercial",
    title: "Mobile Website Optimization | Justin Johnson",
    description: "Mobile-first fixes for layout, speed, and usability — built around how the majority of visitors actually experience the site.",
    h1: "Mobile Website Optimization",
    eyebrow: "SEO & Performance",
    intro: [
      "Google indexes and ranks primarily based on the mobile version of a site, and for most businesses the majority of real traffic is mobile too — a site that's polished on desktop but slow or awkward on a phone is optimizing for the smaller share of actual visitors.",
      "This covers both the technical side (mobile page speed, responsive layout correctness) and the usability side (tap target sizing, readable text without zooming, forms that work well on a touch keyboard).",
    ],
    sections: [
      {
        heading: "What Gets Checked",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Layout correctness across real device widths, not just a browser's responsive mode",
              "Tap target size and spacing for touch interaction",
              "Text readability without requiring zoom",
              "Mobile page speed specifically, which often lags behind desktop on the same site",
              "Forms and checkout flows tested on an actual touch keyboard",
            ],
          },
        ],
      },
      {
        heading: "Why Mobile Speed Often Lags",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Mobile devices generally have less processing power and often a slower network connection than the desktop machine a site was likely built and tested on, so the same JavaScript bundle and images that feel fine in development can be genuinely slow in the field on a mid-range phone over mobile data.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is mobile-first indexing?",
        answer: "Google primarily uses the mobile version of a page's content for indexing and ranking, even for searches happening on desktop — which means a site with content or functionality missing on mobile is effectively invisible to Google in that respect, regardless of how complete the desktop version is.",
      },
      {
        question: "How do you test mobile performance accurately?",
        answer: "On real devices or throttled network/CPU conditions in dev tools, not just a resized desktop browser window — visual layout can look fine at a narrow width while actual touch usability and load performance are still poor.",
      },
      {
        question: "What's a common mobile usability mistake?",
        answer: "Tap targets (buttons, links) placed too close together for accurate thumb interaction, and forms that don't specify the right input type, causing the wrong mobile keyboard to appear (a text keyboard for a phone number field, for example).",
      },
    ],
    relatedSlugs: ["resources/core-web-vitals-optimization", "services/progressive-web-app-development", "resources/conversion-focused-web-design", "technologies/tailwind-css-development", "resources/website-speed-optimization", "industries/web-development-for-salons"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "website-accessibility-services",
    category: "resources",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "website accessibility services",
    secondaryKeywords: ["WCAG compliance developer", "accessibility audit developer", "ADA website compliance", "accessible web design"],
    searchIntent: "commercial",
    title: "Website Accessibility Services | Justin Johnson",
    description: "Accessibility work built into the markup — semantic HTML, keyboard navigation, and contrast, reviewed against WCAG.",
    h1: "Website Accessibility Services",
    eyebrow: "SEO & Performance",
    intro: [
      "Accessibility is largely a byproduct of correct, semantic HTML — proper heading hierarchy, real buttons and links instead of divs with click handlers, labeled form fields, sufficient color contrast. Most of it is a development discipline rather than a bolt-on feature, which is also why it tends to be cheaper to build in from the start than to retrofit.",
      "I review against WCAG 2.1 AA as the practical baseline, and fix issues directly in the markup rather than relying on a third-party accessibility overlay script, which tends to paper over problems rather than fix them.",
    ],
    sections: [
      {
        heading: "What Gets Checked",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Semantic HTML structure and correct heading hierarchy",
              "Keyboard navigability — everything interactive reachable and usable without a mouse",
              "Visible focus states on interactive elements",
              "Color contrast against WCAG AA thresholds",
              "Form labels and error messaging that work with screen readers",
              "Alt text on meaningful images, empty alt on purely decorative ones",
            ],
          },
        ],
      },
      {
        heading: "Why Not Just Use an Accessibility Overlay?",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "Overlay scripts attempt to patch accessibility issues at runtime via JavaScript without fixing the underlying markup, and have a well-documented track record of introducing new problems or failing to address the issues that actually matter to assistive technology users. Fixing the markup directly is more reliable and doesn't add a dependency on a third-party script.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you guarantee full WCAG compliance?",
        answer: "I work toward WCAG 2.1 AA as a practical, well-established standard and fix issues found during review, but no external party can guarantee full legal compliance without a comprehensive audit including real assistive-technology user testing — that's a distinct, larger undertaking from a development-focused accessibility pass.",
      },
      {
        question: "Are accessibility overlays a legitimate shortcut?",
        answer: "They're widely considered an unreliable substitute for fixing underlying markup — several have faced legal challenges themselves for failing to deliver genuine accessibility, and they don't address issues rooted in the actual HTML structure.",
      },
      {
        question: "Does accessibility work slow down a project?",
        answer: "Building with semantic HTML and correct structure from the start adds minimal time compared to retrofitting it later, when non-semantic markup often has to be substantially reworked.",
      },
    ],
    relatedSlugs: ["resources/conversion-focused-web-design", "resources/technical-seo-services", "industries/web-development-for-healthcare-clinics"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
];
