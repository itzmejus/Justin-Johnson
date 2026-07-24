import type { SeoPage } from "./types";

export const guidePages: SeoPage[] = [
  {
    slug: "how-to-build-a-nextjs-website",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to build a Next.js website",
    secondaryKeywords: ["Next.js tutorial", "getting started with Next.js", "Next.js project setup", "build a website with Next.js"],
    searchIntent: "informational",
    title: "How to Build a Next.js Website | Justin Johnson",
    description: "A practical walkthrough of setting up a Next.js project, structuring routes, and getting a real page live.",
    h1: "How to Build a Next.js Website",
    eyebrow: "Guides",
    intro: [
      "This walks through setting up a new Next.js project with the App Router, structuring your first routes, and getting a real page rendering — the foundation everything else in this guide series builds on.",
      "It assumes basic familiarity with React and JavaScript, but not prior Next.js experience.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [
          { kind: "list", items: ["Node.js 18.18 or later installed", "Basic familiarity with React components and JSX", "A code editor and terminal"] },
        ],
      },
      {
        heading: "Step 1: Create the Project",
        blocks: [
          { kind: "code", language: "bash", code: "npx create-next-app@latest my-site\ncd my-site\nnpm run dev" },
          { kind: "paragraphs", paragraphs: ["The CLI will ask about TypeScript, ESLint, Tailwind, and the App Router — say yes to TypeScript and the App Router unless you have a specific reason not to; both are the current recommended defaults."] },
        ],
      },
      {
        heading: "Step 2: Understand the File Structure",
        blocks: [
          { kind: "list", items: ["app/layout.tsx — the root layout, wraps every page", "app/page.tsx — the homepage (route: /)", "app/about/page.tsx — creates the /about route", "public/ — static assets served as-is"] },
        ],
      },
      {
        heading: "Step 3: Build Your First Real Page",
        blocks: [
          { kind: "code", language: "tsx", caption: "app/about/page.tsx", code: "export default function AboutPage() {\n  return (\n    <main>\n      <h1>About</h1>\n      <p>Content goes here.</p>\n    </main>\n  );\n}" },
          { kind: "paragraphs", paragraphs: ["This is a server component by default — no 'use client' needed unless it uses state, effects, or browser-only APIs."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["\"Module not found\" after adding a new page — check the file is named page.tsx exactly, not Page.tsx or index.tsx", "Hooks like useState failing — the component needs 'use client' at the top of the file", "Styles not applying — confirm the global CSS file is imported in the root layout"] },
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          { kind: "list", items: ["Keep components server components by default; only add 'use client' where interactivity is genuinely needed", "Co-locate related components in the same route folder rather than one flat components directory", "Set up TypeScript strict mode from the start"] },
        ],
      },
    ],
    faqs: [
      { question: "Should I use the App Router or Pages Router for a new project?", answer: "App Router — it's the actively developed model with the clearest long-term support and better performance characteristics for most sites." },
      { question: "Do I need a backend to start?", answer: "No — Next.js can render static or server-rendered pages with no backend at all; you add API routes or a database connection only once the site actually needs dynamic data." },
      { question: "Where do I deploy it?", answer: "Vercel is the simplest option for Next.js specifically; see the guide on deploying Next.js on Vercel for the walkthrough." },
    ],
    howToSteps: [
      { name: "Create the project", text: "Run npx create-next-app@latest and choose TypeScript and the App Router." },
      { name: "Understand the file structure", text: "Learn how app/page.tsx and folder names map to routes." },
      { name: "Build your first page", text: "Create a new route folder with a page.tsx file exporting a component." },
    ],
    relatedSlugs: ["services/nextjs-development-services", "guides/how-to-deploy-nextjs-on-vercel", "guides/how-to-create-dynamic-routes-in-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-deploy-nextjs-on-vercel",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to deploy Next.js on Vercel",
    secondaryKeywords: ["deploy Next.js app", "Vercel deployment tutorial", "Next.js production deployment", "Vercel environment variables"],
    searchIntent: "informational",
    title: "How to Deploy Next.js on Vercel | Justin Johnson",
    description: "Deploying a Next.js app to Vercel — from git push to a live custom domain, including environment variables.",
    h1: "How to Deploy Next.js on Vercel",
    eyebrow: "Guides",
    intro: [
      "Vercel is built by the Next.js team and handles the framework's features (ISR, edge functions, image optimization) with no extra configuration for most projects. This walks through going from a local project to a live, custom-domain deployment.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js project in a Git repository (GitHub, GitLab, or Bitbucket)", "A free or paid Vercel account"] }],
      },
      {
        heading: "Step 1: Import the Project",
        blocks: [
          { kind: "list", ordered: true, items: ["Log into Vercel and click 'Add New Project'", "Select the Git repository containing your Next.js app", "Vercel auto-detects the Next.js framework and sets the build command"] },
        ],
      },
      {
        heading: "Step 2: Configure Environment Variables",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Add any secrets or config (database URLs, API keys) under Project Settings → Environment Variables, scoped separately for Production, Preview, and Development so a test deployment never touches production data."] },
        ],
      },
      {
        heading: "Step 3: Deploy and Connect a Domain",
        blocks: [
          { kind: "list", ordered: true, items: ["Click deploy — Vercel builds and assigns a *.vercel.app URL automatically", "Go to Project Settings → Domains and add your custom domain", "Update your domain's DNS records as Vercel instructs (usually an A record or CNAME)"] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Build fails with a missing environment variable — confirm it's set for the Production environment specifically, not just Development", "Site works on *.vercel.app but not the custom domain — DNS propagation can take time; verify records match exactly what Vercel specifies", "Preview deployments show old data — check whether ISR revalidation or caching is masking the update"] },
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          { kind: "list", items: ["Never commit secrets to the repository — always use environment variables", "Use preview deployments to review every pull request before merging to production", "Set up deployment notifications so failed builds don't go unnoticed"] },
        ],
      },
    ],
    faqs: [
      { question: "Is Vercel free for a small project?", answer: "Yes, Vercel's free tier covers personal and small projects; production apps with meaningful traffic typically move to a paid plan as usage grows." },
      { question: "Does every git push trigger a deployment?", answer: "By default, pushes to the production branch deploy to production, and other branches or pull requests get their own preview deployment URL." },
      { question: "Can I roll back a bad deployment?", answer: "Yes — Vercel keeps previous deployments and lets you instantly promote an earlier one back to production from the dashboard." },
    ],
    howToSteps: [
      { name: "Import the project", text: "Connect your Git repository to a new Vercel project." },
      { name: "Configure environment variables", text: "Add secrets scoped to Production, Preview, and Development." },
      { name: "Deploy and connect a domain", text: "Deploy the project and point your custom domain's DNS at Vercel." },
    ],
    relatedSlugs: ["technologies/vercel-deployment", "guides/how-to-build-a-nextjs-website", "guides/how-to-deploy-nextjs-on-cpanel"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-deploy-nextjs-on-cpanel",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to deploy Next.js on cPanel",
    secondaryKeywords: ["Next.js shared hosting", "deploy Next.js without Vercel", "Next.js Node.js hosting", "cPanel Node.js app"],
    searchIntent: "informational",
    title: "How to Deploy Next.js on cPanel | Justin Johnson",
    description: "Running a Next.js app on cPanel hosting with Node.js support — build, upload, and process manager setup.",
    h1: "How to Deploy Next.js on cPanel",
    eyebrow: "Guides",
    intro: [
      "Some hosting situations require sticking with existing shared hosting rather than moving to Vercel — many cPanel hosts now support Node.js applications directly, which makes running a Next.js app possible, with some extra manual steps compared to a platform built specifically for it.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["cPanel hosting with 'Setup Node.js App' available (check with your host)", "SSH or terminal access is helpful but not always required", "A Next.js project ready to build"] }],
      },
      {
        heading: "Step 1: Build the App Locally",
        blocks: [
          { kind: "code", language: "bash", code: "npm run build" },
          { kind: "paragraphs", paragraphs: ["This produces the .next production build. Unlike a static export, a standard Next.js build needs a Node.js server to run — cPanel's Node.js app feature provides that."] },
        ],
      },
      {
        heading: "Step 2: Upload and Configure the Node.js App",
        blocks: [
          { kind: "list", ordered: true, items: ["Upload the project (excluding node_modules) via File Manager or Git", "In cPanel, open 'Setup Node.js App' and create a new application pointing at your project folder", "Set the application startup file to a small server script that calls next start, or use the Next.js standalone output mode", "Install dependencies through cPanel's provided npm install button or terminal"] },
        ],
      },
      {
        heading: "Step 3: Start and Verify",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Start the app from the cPanel Node.js interface and check the assigned port is correctly proxied through your domain — most cPanel setups handle this proxy automatically once the app is running."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Host doesn't support Node.js at all — pure static hosting can't run a server-rendered Next.js app; a static export (next export equivalent) with no server features is the fallback, or move to Node-capable hosting", "App crashes immediately after starting — check the Node.js version selected in cPanel matches what Next.js requires", "Environment variables not picked up — set them in cPanel's Node.js app environment variable section, not just a local .env file"] },
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          { kind: "list", items: ["Use Next.js's standalone output mode to minimize what needs to be uploaded and run", "Keep a process manager (cPanel's built-in one, or PM2 if you have shell access) restarting the app automatically on crash", "For a purely static site with no server features, consider a static export instead — it removes the need for a persistent Node.js process entirely"] },
        ],
      },
    ],
    faqs: [
      { question: "Can I run Next.js on hosting without Node.js support?", answer: "Only via a fully static export, which drops server-side rendering, ISR, and API routes — appropriate only for content that's genuinely static." },
      { question: "Is this harder than deploying to Vercel?", answer: "Yes, meaningfully — Vercel handles builds, scaling, and Next.js-specific features automatically. cPanel deployment is a valid option when you're constrained to existing hosting, not a recommendation over Vercel by default." },
      { question: "Does ISR work on cPanel hosting?", answer: "It can, since the app is running as a persistent Node.js process, but it depends on your host's specific Node.js app configuration and file system write permissions." },
    ],
    howToSteps: [
      { name: "Build the app locally", text: "Run npm run build to produce the production build." },
      { name: "Upload and configure the Node.js app", text: "Upload the project and set it up under cPanel's Node.js App tool." },
      { name: "Start and verify", text: "Start the app and confirm it's reachable through your domain." },
    ],
    relatedSlugs: ["guides/how-to-deploy-nextjs-on-vercel", "technologies/docker-deployment", "services/website-maintenance-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-use-supabase-authentication-with-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to use Supabase authentication with Next.js",
    secondaryKeywords: ["Supabase Next.js auth tutorial", "Supabase SSR auth", "Next.js login with Supabase", "Supabase session cookies Next.js"],
    searchIntent: "informational",
    title: "How to Use Supabase Auth With Next.js | Justin Johnson",
    description: "Setting up Supabase authentication in a Next.js App Router project, with sessions working across server and client components.",
    h1: "How to Use Supabase Authentication With Next.js",
    eyebrow: "Guides",
    intro: [
      "Supabase Auth combined with the App Router requires a specific setup so that session state is available consistently in both server components and client components — this walks through that setup end to end.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Supabase project (free tier is fine)", "A Next.js App Router project", "@supabase/supabase-js and @supabase/ssr packages installed"] }],
      },
      {
        heading: "Step 1: Install and Configure",
        blocks: [
          { kind: "code", language: "bash", code: "npm install @supabase/supabase-js @supabase/ssr" },
          { kind: "paragraphs", paragraphs: ["Add your Supabase project URL and anon key as environment variables (NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY)."] },
        ],
      },
      {
        heading: "Step 2: Create Server and Client Supabase Clients",
        blocks: [
          { kind: "code", language: "ts", caption: "lib/supabase/server.ts", code: "import { createServerClient } from '@supabase/ssr';\nimport { cookies } from 'next/headers';\n\nexport function createClient() {\n  const cookieStore = cookies();\n  return createServerClient(\n    process.env.NEXT_PUBLIC_SUPABASE_URL!,\n    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,\n    { cookies: { getAll: () => cookieStore.getAll() } }\n  );\n}" },
        ],
      },
      {
        heading: "Step 3: Protect Routes With Middleware",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Middleware runs before a request reaches a page, making it the right place to check session validity and redirect unauthenticated users before any page code executes — this is faster and more secure than checking auth state inside the page component."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Session appears logged out on the server but logged in on the client — usually a cookie handling mismatch between the server and client Supabase clients", "\"Invalid JWT\" errors after deploying — confirm environment variables are set correctly in the deployment environment, not just locally", "Redirect loops on protected routes — check the middleware's matcher config isn't also intercepting the login page itself"] },
        ],
      },
      {
        heading: "Security Considerations",
        blocks: [
          { kind: "list", items: ["Never expose the Supabase service role key to the client — only the anon key belongs in NEXT_PUBLIC_ variables", "Row-level security policies are the real access control layer — client-side route protection alone isn't sufficient", "Validate the session independently in every API route, not just in middleware"] },
        ],
      },
    ],
    faqs: [
      { question: "Why do I need both a server and client Supabase instance?", answer: "Server components and client components read the session differently — the server client reads from cookies via Next.js's server APIs, while the client instance manages the browser session; using the wrong one in the wrong context causes session mismatches." },
      { question: "Is middleware required for auth to work?", answer: "Not strictly, but without it, unauthenticated users would reach page code before being redirected, which is both slower and a weaker security boundary than checking in middleware first." },
      { question: "How do I handle OAuth providers like Google?", answer: "Configure the provider in the Supabase dashboard, then use supabase.auth.signInWithOAuth() with a redirect URL pointing to a callback route that exchanges the auth code for a session." },
    ],
    howToSteps: [
      { name: "Install and configure Supabase", text: "Install the Supabase SSR package and add environment variables." },
      { name: "Create server and client Supabase instances", text: "Set up separate clients for server components and browser code." },
      { name: "Protect routes with middleware", text: "Check session validity in Next.js middleware before rendering protected pages." },
    ],
    relatedSlugs: ["technologies/supabase-authentication", "services/supabase-development-services", "guides/how-to-protect-api-routes-in-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-build-a-nextjs-admin-dashboard",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to build a Next.js admin dashboard",
    secondaryKeywords: ["Next.js dashboard tutorial", "admin panel Next.js", "Next.js data table", "Next.js dashboard layout"],
    searchIntent: "informational",
    title: "How to Build a Next.js Admin Dashboard | Justin Johnson",
    description: "Structuring an admin dashboard in Next.js — layout, protected routes, data tables, and role-based access.",
    h1: "How to Build a Next.js Admin Dashboard",
    eyebrow: "Guides",
    intro: [
      "An admin dashboard has different requirements from a marketing site — it's behind auth, doesn't need to rank in search, and is judged on data density and speed of use rather than visual polish. This covers structuring one in Next.js with a persistent layout, protected routes, and a data table pattern.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A working Next.js App Router project", "An authentication system already set up (see the Supabase auth guide)", "A data source (database or API) to display"] }],
      },
      {
        heading: "Step 1: Structure the Dashboard Layout",
        blocks: [
          { kind: "code", language: "tsx", caption: "app/dashboard/layout.tsx", code: "export default function DashboardLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <div className=\"flex\">\n      <Sidebar />\n      <main className=\"flex-1 p-6\">{children}</main>\n    </div>\n  );\n}" },
          { kind: "paragraphs", paragraphs: ["A dedicated layout for the /dashboard route group means the sidebar persists across navigation instead of re-rendering on every page change."] },
        ],
      },
      {
        heading: "Step 2: Protect the Route Group",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Check the session in middleware for any path under /dashboard, redirecting unauthenticated users to login before the layout or page even starts rendering."] },
        ],
      },
      {
        heading: "Step 3: Build a Data Table",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Fetch data server-side in the page component (a server component can query the database directly), and pass it to a client component only for the interactive parts — sorting, filtering, pagination controls."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Sidebar re-rendering or flashing on navigation — confirm it lives in the layout, not duplicated inside each page", "Large tables slow to render — add pagination or virtualization rather than rendering thousands of rows at once", "Role checks only in the UI — permissions must also be enforced at the API/data layer, not just hidden in the interface"] },
        ],
      },
      {
        heading: "Performance Considerations",
        blocks: [
          { kind: "list", items: ["Fetch only the data a given view needs — avoid loading entire tables client-side just to filter in the browser", "Paginate or virtualize long lists", "Keep heavy client-side libraries (charting, rich tables) out of the initial bundle where possible using dynamic imports"] },
        ],
      },
    ],
    faqs: [
      { question: "Should the dashboard be server-rendered or client-rendered?", answer: "A hybrid — data fetching and the initial render can happen server-side for speed, while sorting, filtering, and other interactions run client-side once the data's loaded." },
      { question: "How do I add role-based permissions?", answer: "Check the user's role both in middleware (to gate entire sections) and at the data-fetching level (to filter what's actually returned), never relying solely on hiding UI elements." },
      { question: "What's the best way to handle large data tables?", answer: "Server-side pagination — fetch only the current page of results rather than loading the full dataset into the browser and paginating client-side." },
    ],
    howToSteps: [
      { name: "Structure the dashboard layout", text: "Create a persistent layout with a sidebar for the dashboard route group." },
      { name: "Protect the route group", text: "Check authentication in middleware for all dashboard routes." },
      { name: "Build a data table", text: "Fetch data server-side and handle interactivity in a client component." },
    ],
    relatedSlugs: ["services/admin-dashboard-development", "guides/how-to-protect-api-routes-in-nextjs", "guides/how-to-connect-nextjs-to-postgresql"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-connect-nextjs-to-postgresql",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to connect Next.js to PostgreSQL",
    secondaryKeywords: ["Next.js Postgres tutorial", "Next.js database connection", "Prisma Next.js Postgres", "Next.js server component database query"],
    searchIntent: "informational",
    title: "How to Connect Next.js to PostgreSQL | Justin Johnson",
    description: "Connecting a Next.js app directly to PostgreSQL — connection pooling, querying from server components, and common pitfalls.",
    h1: "How to Connect Next.js to PostgreSQL",
    eyebrow: "Guides",
    intro: [
      "Server components can query a database directly without a separate API layer in between, which simplifies a lot of app structure — but it also means connection management needs care, especially in serverless deployment environments.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A running PostgreSQL database (local, Supabase, or a managed provider)", "A Next.js App Router project", "A database client library (pg, or an ORM like Prisma or Drizzle)"] }],
      },
      {
        heading: "Step 1: Install a Database Client",
        blocks: [{ kind: "code", language: "bash", code: "npm install pg\nnpm install -D @types/pg" }],
      },
      {
        heading: "Step 2: Set Up a Connection Pool",
        blocks: [
          { kind: "code", language: "ts", caption: "lib/db.ts", code: "import { Pool } from 'pg';\n\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL });\n\nexport default pool;" },
          { kind: "paragraphs", paragraphs: ["A single shared pool instance, not a new connection per request, keeps the database from being overwhelmed as traffic grows."] },
        ],
      },
      {
        heading: "Step 3: Query From a Server Component",
        blocks: [
          { kind: "code", language: "tsx", code: "import pool from '@/lib/db';\n\nexport default async function ProductsPage() {\n  const { rows } = await pool.query('SELECT id, name FROM products LIMIT 20');\n  return (\n    <ul>{rows.map((p) => <li key={p.id}>{p.name}</li>)}</ul>\n  );\n}" },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["\"Too many connections\" in production — serverless functions can each open their own connection; use connection pooling (PgBouncer, or your provider's built-in pooler) instead of a raw pool per function instance", "Queries work locally but time out in deployment — check that the database allows connections from your deployment platform's IP ranges", "SQL injection risk — always use parameterized queries, never string-concatenate user input into a query"] },
        ],
      },
      {
        heading: "Security Considerations",
        blocks: [
          { kind: "list", items: ["Always use parameterized queries ($1, $2 placeholders), never string interpolation, to prevent SQL injection", "Keep the database connection string in environment variables, never committed to the repository", "Use a database user with only the permissions the application actually needs, not a superuser"] },
        ],
      },
    ],
    faqs: [
      { question: "Should I use a raw SQL client or an ORM?", answer: "An ORM (Prisma, Drizzle) adds type safety and migration tooling that's worth it for most applications; raw SQL via pg gives more direct control and is reasonable for simpler projects or highly specific queries." },
      { question: "How do I handle connections in a serverless deployment?", answer: "Use a connection pooler designed for serverless (like PgBouncer or your provider's managed pooler) rather than a standard connection pool, since serverless functions can spin up many concurrent instances that would otherwise exhaust the database's connection limit." },
      { question: "Can I query the database directly from a client component?", answer: "No — database credentials should never reach the browser. Server components, API routes, or Server Actions are the correct places to query the database." },
    ],
    howToSteps: [
      { name: "Install a database client", text: "Add the pg package or an ORM to the project." },
      { name: "Set up a connection pool", text: "Create a single shared pool instance rather than connecting per request." },
      { name: "Query from a server component", text: "Query the database directly inside an async server component." },
    ],
    relatedSlugs: ["technologies/postgresql-development", "technologies/supabase-database-development", "guides/how-to-build-a-nextjs-admin-dashboard"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-create-dynamic-routes-in-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to create dynamic routes in Next.js",
    secondaryKeywords: ["Next.js dynamic segments", "Next.js [slug] route", "generateStaticParams tutorial", "Next.js catch-all routes"],
    searchIntent: "informational",
    title: "How to Create Dynamic Routes in Next.js | Justin Johnson",
    description: "Building dynamic routes with the App Router — folder conventions, generateStaticParams, and catch-all segments.",
    h1: "How to Create Dynamic Routes in Next.js",
    eyebrow: "Guides",
    intro: [
      "Dynamic routes let a single template render many pages based on a URL parameter — a blog post slug, a product ID. This covers the folder conventions and how to pre-render them at build time.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js App Router project", "A data source with the list of items to render (array, database, or CMS)"] }],
      },
      {
        heading: "Step 1: Create a Dynamic Segment",
        blocks: [
          { kind: "paragraphs", paragraphs: ["A folder named [slug] inside app/blog/ creates a route matching any value at that position — app/blog/[slug]/page.tsx handles /blog/anything."] },
          { kind: "code", language: "tsx", caption: "app/blog/[slug]/page.tsx", code: "export default async function BlogPost({ params }: { params: { slug: string } }) {\n  const post = await getPost(params.slug);\n  if (!post) return <NotFound />;\n  return <article><h1>{post.title}</h1></article>;\n}" },
        ],
      },
      {
        heading: "Step 2: Pre-Render Known Paths With generateStaticParams",
        blocks: [
          { kind: "code", language: "tsx", code: "export async function generateStaticParams() {\n  const posts = await getAllPosts();\n  return posts.map((post) => ({ slug: post.slug }));\n}" },
          { kind: "paragraphs", paragraphs: ["This tells Next.js exactly which slug values to pre-render as static HTML at build time, rather than rendering every visit on demand."] },
        ],
      },
      {
        heading: "Step 3: Catch-All Segments for Nested Paths",
        blocks: [
          { kind: "paragraphs", paragraphs: ["A folder named [...slug] matches any number of path segments (e.g. /docs/a/b/c), useful for documentation trees or deeply nested content structures where the depth isn't fixed."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Page shows a 404 for a valid slug — check that generateStaticParams returns exactly the same shape of value used in the URL (string, not number)", "Build takes a very long time — for very large datasets, only pre-render the most important paths and let the rest generate on-demand with ISR", "TypeScript complaining about the params type — in recent Next.js versions params is a Promise and needs to be awaited"] },
        ],
      },
    ],
    faqs: [
      { question: "Do I have to use generateStaticParams?", answer: "No — without it, dynamic routes still work but render on each request (or on first request with caching, depending on configuration) rather than being pre-built as static HTML." },
      { question: "What's the difference between [slug] and [...slug]?", answer: "[slug] matches exactly one path segment; [...slug] (catch-all) matches one or more segments, useful for arbitrarily nested paths like documentation trees." },
      { question: "How do I handle a slug that doesn't exist?", answer: "Check for the record inside the page component and call notFound() from next/navigation, which renders the route's not-found.tsx file with a proper 404 status." },
    ],
    howToSteps: [
      { name: "Create a dynamic segment", text: "Add a [slug] folder to define a dynamic route." },
      { name: "Pre-render known paths", text: "Export generateStaticParams to statically build known routes." },
      { name: "Use catch-all segments for nested paths", text: "Use [...slug] for routes with variable depth." },
    ],
    relatedSlugs: ["technologies/nextjs-static-site-generation", "guides/how-to-build-a-nextjs-website", "resources/programmatic-seo"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-generate-metadata-in-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to generate metadata in Next.js",
    secondaryKeywords: ["Next.js generateMetadata tutorial", "Next.js Metadata API", "dynamic page titles Next.js", "Next.js Open Graph tags"],
    searchIntent: "informational",
    title: "How to Generate Metadata in Next.js | Justin Johnson",
    description: "Using the Next.js Metadata API for per-page titles, descriptions, and Open Graph tags — static and dynamic.",
    h1: "How to Generate Metadata in Next.js",
    eyebrow: "Guides",
    intro: [
      "The Metadata API lets every route define its own title, description, and Open Graph tags — either as a static object or dynamically, based on fetched data.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js App Router project"] }],
      },
      {
        heading: "Step 1: Static Metadata",
        blocks: [
          { kind: "code", language: "tsx", caption: "app/about/page.tsx", code: "import type { Metadata } from 'next';\n\nexport const metadata: Metadata = {\n  title: 'About | My Site',\n  description: 'A short, specific description under 160 characters.',\n};" },
        ],
      },
      {
        heading: "Step 2: Dynamic Metadata",
        blocks: [
          { kind: "code", language: "tsx", caption: "app/blog/[slug]/page.tsx", code: "export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {\n  const post = await getPost(params.slug);\n  return {\n    title: post.title,\n    description: post.excerpt,\n    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },\n  };\n}" },
        ],
      },
      {
        heading: "Step 3: Set a Site-Wide Default in the Root Layout",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Metadata defined in app/layout.tsx acts as a fallback and can use title.template to append a consistent site name to every page's title automatically."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Every page shows the same title — a static metadata export in a layout is overriding page-level metadata; check the specificity of where each is defined", "generateMetadata not running — confirm it's exported from a page.tsx or layout.tsx file, not a regular component", "Open Graph image not showing on social platforms — confirm the image URL is absolute (starts with https://), not relative"] },
        ],
      },
    ],
    faqs: [
      { question: "Can metadata be generated from a database?", answer: "Yes — generateMetadata is an async function, so it can fetch the same data the page itself uses (ideally with request memoization so it's not fetched twice)." },
      { question: "How long should a meta description be?", answer: "Roughly under 160 characters so it doesn't get truncated in search results, though search engines sometimes rewrite descriptions regardless of length." },
      { question: "Do I need separate Open Graph and Twitter tags?", answer: "Twitter reads Open Graph tags by default if twitter:card is set to summary_large_image; separate twitter: tags are only needed if you want Twitter-specific overrides." },
    ],
    howToSteps: [
      { name: "Add static metadata", text: "Export a metadata object from a page for fixed titles and descriptions." },
      { name: "Add dynamic metadata", text: "Export an async generateMetadata function for content-driven pages." },
      { name: "Set a site-wide default", text: "Define fallback metadata and a title template in the root layout." },
    ],
    relatedSlugs: ["technologies/nextjs-seo", "guides/how-to-add-json-ld-in-nextjs", "resources/nextjs-seo-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-create-an-xml-sitemap-in-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to create an XML sitemap in Next.js",
    secondaryKeywords: ["Next.js sitemap.ts tutorial", "Next.js sitemap generation", "dynamic sitemap Next.js", "Next.js robots.txt"],
    searchIntent: "informational",
    title: "How to Create an XML Sitemap in Next.js | Justin Johnson",
    description: "Generating sitemap.xml in Next.js using the built-in sitemap.ts file convention, including dynamic routes.",
    h1: "How to Create an XML Sitemap in Next.js",
    eyebrow: "Guides",
    intro: [
      "Next.js supports a sitemap.ts file convention that generates a valid sitemap.xml automatically — this covers a static sitemap and one that includes dynamic routes pulled from your actual data.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js App Router project (v13.3+)", "A function that returns your dynamic route data (e.g. all blog post slugs)"] }],
      },
      {
        heading: "Step 1: Create the Sitemap File",
        blocks: [
          { kind: "code", language: "ts", caption: "app/sitemap.ts", code: "import type { MetadataRoute } from 'next';\n\nexport default function sitemap(): MetadataRoute.Sitemap {\n  return [\n    { url: 'https://example.com', lastModified: new Date(), priority: 1 },\n    { url: 'https://example.com/about', lastModified: new Date(), priority: 0.8 },\n  ];\n}" },
        ],
      },
      {
        heading: "Step 2: Add Dynamic Routes",
        blocks: [
          { kind: "code", language: "ts", code: "export default async function sitemap(): Promise<MetadataRoute.Sitemap> {\n  const posts = await getAllPosts();\n  const postEntries = posts.map((post) => ({\n    url: `https://example.com/blog/${post.slug}`,\n    lastModified: post.updatedAt,\n  }));\n  return [{ url: 'https://example.com' }, ...postEntries];\n}" },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Sitemap includes noindex or redirected pages — filter your data source to only genuinely indexable URLs before mapping them into the sitemap", "lastModified showing the current date on every build — pull the actual content update timestamp from your data source rather than using new Date() at build time", "Sitemap exceeds 50,000 URLs — split into multiple sitemap files referenced by a sitemap index"] },
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          { kind: "list", items: ["Generate the sitemap from the same data source that powers your routes, so they can't drift out of sync", "Use real lastModified dates tied to actual content changes", "Submit the sitemap URL in Google Search Console after significant changes"] },
        ],
      },
    ],
    faqs: [
      { question: "Does Next.js generate robots.txt too?", answer: "Yes, via the same file-convention pattern — an app/robots.ts file can export the rules, and Next.js serves it at /robots.txt automatically." },
      { question: "How do I handle a very large number of URLs?", answer: "Return an array of sitemaps from a generateSitemaps function, splitting URLs across multiple sitemap files under the 50,000 URL / 50MB limit per file." },
      { question: "Do I need to resubmit the sitemap after every change?", answer: "Not strictly — search engines periodically recrawl a submitted sitemap, but resubmitting in Search Console after major changes can prompt a faster recrawl." },
    ],
    howToSteps: [
      { name: "Create the sitemap file", text: "Add an app/sitemap.ts file exporting static entries." },
      { name: "Add dynamic routes", text: "Fetch your dynamic content and map it into sitemap entries." },
    ],
    relatedSlugs: ["resources/xml-sitemap-optimization", "guides/how-to-generate-metadata-in-nextjs", "resources/programmatic-seo"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-add-json-ld-in-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to add JSON-LD in Next.js",
    secondaryKeywords: ["Next.js structured data tutorial", "JSON-LD script tag Next.js", "Next.js schema markup", "Next.js rich results"],
    searchIntent: "informational",
    title: "How to Add JSON-LD in Next.js | Justin Johnson",
    description: "Adding valid JSON-LD structured data to Next.js pages, as a reusable pattern instead of duplicated inline scripts.",
    h1: "How to Add JSON-LD in Next.js",
    eyebrow: "Guides",
    intro: [
      "JSON-LD structured data is added as a script tag rendered directly in the page — this covers the pattern for doing that safely and reusably across multiple page types.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js App Router project", "Content that genuinely matches a schema.org type (Article, Service, FAQPage, etc.)"] }],
      },
      {
        heading: "Step 1: Render the Script Tag",
        blocks: [
          { kind: "code", language: "tsx", code: "export default function ArticlePage({ post }: { post: Post }) {\n  const jsonLd = {\n    '@context': 'https://schema.org',\n    '@type': 'Article',\n    headline: post.title,\n    datePublished: post.publishedAt,\n  };\n  return (\n    <>\n      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />\n      <article>{/* ... */}</article>\n    </>\n  );\n}" },
        ],
      },
      {
        heading: "Step 2: Build a Reusable Helper",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Rather than constructing the JSON-LD object inline on every page, a shared function that takes your content data and returns the correct schema object keeps the markup consistent and makes it far easier to fix a mistake across every page at once."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Using JSON.stringify directly as children instead of dangerouslySetInnerHTML — React escapes text content, which corrupts the JSON", "Marking up content that isn't actually visible on the page — this can trigger a manual action from Google for misleading structured data", "Forgetting to validate — always test output against Google's Rich Results Test before shipping"] },
        ],
      },
      {
        heading: "Security Considerations",
        blocks: [
          { kind: "list", items: ["Never interpolate unsanitized user input directly into the JSON-LD object — stringify it properly rather than building the string manually, which could otherwise allow script injection"] },
        ],
      },
    ],
    faqs: [
      { question: "Where should the script tag be placed?", answer: "Anywhere within the page or a shared layout — Next.js and search engines don't require it in a specific position, though keeping it near the content it describes is common practice for readability." },
      { question: "Can I add multiple JSON-LD blocks on one page?", answer: "Yes — separate script tags for distinct schema types (e.g. Article plus BreadcrumbList) are valid and common." },
      { question: "How do I validate the output?", answer: "Google's Rich Results Test and the Schema.org validator both accept a URL or raw markup and flag structural errors before you ship." },
    ],
    howToSteps: [
      { name: "Render the script tag", text: "Add a script tag with type application/ld+json containing your schema object." },
      { name: "Build a reusable helper", text: "Extract schema construction into a shared function for consistency." },
    ],
    relatedSlugs: ["resources/structured-data-implementation", "technologies/nextjs-seo", "guides/how-to-generate-metadata-in-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-improve-core-web-vitals-in-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to improve Core Web Vitals in Next.js",
    secondaryKeywords: ["Next.js LCP fix", "Next.js CLS fix", "Next.js performance tutorial", "Next.js Lighthouse score"],
    searchIntent: "informational",
    title: "How to Improve Core Web Vitals in Next.js | Justin Johnson",
    description: "Practical fixes for LCP, CLS, and INP in a Next.js app, using the framework's built-in optimization tools correctly.",
    h1: "How to Improve Core Web Vitals in Next.js",
    eyebrow: "Guides",
    intro: [
      "Next.js gives you the tools to hit strong Core Web Vitals scores — but only if they're used deliberately. This walks through the highest-impact fixes in order of typical effect.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js app with a Lighthouse or PageSpeed Insights baseline already run"] }],
      },
      {
        heading: "Step 1: Fix LCP With next/image",
        blocks: [
          { kind: "code", language: "tsx", code: "import Image from 'next/image';\n\n<Image src={hero} alt=\"\" priority width={1200} height={630} />" },
          { kind: "paragraphs", paragraphs: ["The priority prop tells Next.js to preload this specific image rather than lazy-loading it — use it only on the actual largest above-the-fold image, not everywhere."] },
        ],
      },
      {
        heading: "Step 2: Fix CLS With Reserved Space",
        blocks: [
          { kind: "paragraphs", paragraphs: ["next/image requires width and height (or fill with a sized container), which reserves the correct space before the image loads, preventing layout shift. Apply the same discipline to ads, embeds, and web fonts using next/font."] },
        ],
      },
      {
        heading: "Step 3: Fix INP by Reducing Client-Side JavaScript",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Push 'use client' boundaries as low as possible in the component tree, and use dynamic imports for heavy, non-critical client components so they don't block the main thread during initial interaction."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Using priority on every image on the page, which defeats its purpose by preloading everything", "Loading web fonts without next/font, causing font-swap layout shift", "Large third-party scripts (chat widgets, analytics) loaded synchronously in the head, blocking render"] },
        ],
      },
      {
        heading: "Performance Considerations",
        blocks: [
          { kind: "list", items: ["Measure with both Lighthouse (lab data) and Search Console's Core Web Vitals report (field data) — they can disagree", "Fix the single largest contributor first, then re-measure, rather than changing many things at once"] },
        ],
      },
    ],
    faqs: [
      { question: "What's the single most impactful fix?", answer: "For most content sites, correctly sizing and prioritizing the largest above-the-fold image, since LCP is frequently the worst-performing of the three Core Web Vitals metrics on unoptimized sites." },
      { question: "Does Next.js improve Core Web Vitals automatically?", answer: "It provides the tools (image optimization, font optimization, code splitting) but doesn't apply them for you — a badly built Next.js app can still perform poorly." },
      { question: "How often should I re-measure?", answer: "After any significant change, and periodically in production via Search Console's field data, since real-world conditions vary from lab tests." },
    ],
    howToSteps: [
      { name: "Fix LCP with next/image", text: "Use next/image with the priority prop on the largest above-the-fold image." },
      { name: "Fix CLS with reserved space", text: "Set explicit width and height on images and use next/font for fonts." },
      { name: "Fix INP by reducing client JavaScript", text: "Minimize client component scope and defer non-critical scripts." },
    ],
    relatedSlugs: ["resources/core-web-vitals-optimization", "technologies/nextjs-performance-optimization", "guides/how-to-optimize-nextjs-images"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-optimize-nextjs-images",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to optimize Next.js images",
    secondaryKeywords: ["next/image tutorial", "Next.js image sizing", "Next.js responsive images", "Next.js remote images"],
    searchIntent: "informational",
    title: "How to Optimize Next.js Images | Justin Johnson",
    description: "Using next/image correctly for automatic resizing, format conversion, and lazy loading — including remote image sources.",
    h1: "How to Optimize Next.js Images",
    eyebrow: "Guides",
    intro: [
      "next/image handles resizing, format conversion, and lazy loading automatically, but it needs correct configuration — especially for images served from an external domain like a CMS or CDN.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js project", "Image assets, either local or from a remote source (CMS, CDN)"] }],
      },
      {
        heading: "Step 1: Basic Usage With Local Images",
        blocks: [
          { kind: "code", language: "tsx", code: "import Image from 'next/image';\nimport hero from './hero.jpg';\n\n<Image src={hero} alt=\"Product hero shot\" />" },
          { kind: "paragraphs", paragraphs: ["Importing a local image gives Next.js its dimensions automatically, so width and height don't need to be set manually."] },
        ],
      },
      {
        heading: "Step 2: Configure Remote Images",
        blocks: [
          { kind: "code", language: "js", caption: "next.config.js", code: "module.exports = {\n  images: {\n    remotePatterns: [{ protocol: 'https', hostname: 'cdn.example.com' }],\n  },\n};" },
          { kind: "paragraphs", paragraphs: ["Remote images need explicit width and height props since Next.js can't read the file's dimensions ahead of time, and the hostname must be allow-listed in next.config.js for security."] },
        ],
      },
      {
        heading: "Step 3: Use Priority for the LCP Image Only",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Set priority on the single largest above-the-fold image to preload it; every other image should lazy-load by default, which is next/image's out-of-the-box behavior."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["\"hostname not configured\" error — the remote domain isn't listed in remotePatterns", "Layout shift despite using next/image — width/height (or fill with a sized parent) missing on a remote image", "Images look blurry — check the sizes prop is set correctly for responsive layouts so the right resolution is requested"] },
        ],
      },
      {
        heading: "Performance Considerations",
        blocks: [
          { kind: "list", items: ["Use priority sparingly — only the actual LCP image", "Set sizes accurately for responsive images so the browser doesn't request a larger file than needed", "Prefer modern formats — next/image serves WebP/AVIF automatically where the browser supports it"] },
        ],
      },
    ],
    faqs: [
      { question: "Do I need to manually convert images to WebP?", answer: "No — next/image serves an optimized, modern format automatically based on the requesting browser's support, without a manual conversion step." },
      { question: "Why does a remote image need explicit width and height?", answer: "Next.js can read dimensions from local imported files automatically, but has no way to inspect a remote file's dimensions ahead of render, so they must be provided explicitly to reserve the correct layout space." },
      { question: "What does the fill prop do?", answer: "It makes the image expand to fill its parent container, useful for responsive layouts where the image's size should match a container rather than fixed pixel dimensions — the parent needs position: relative." },
    ],
    howToSteps: [
      { name: "Use next/image for local images", text: "Import local images directly so dimensions are read automatically." },
      { name: "Configure remote images", text: "Allow-list remote hostnames in next.config.js and set explicit dimensions." },
      { name: "Set priority on the LCP image only", text: "Preload just the largest above-the-fold image." },
    ],
    relatedSlugs: ["technologies/nextjs-performance-optimization", "guides/how-to-improve-core-web-vitals-in-nextjs", "resources/website-speed-optimization"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-protect-api-routes-in-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to protect API routes in Next.js",
    secondaryKeywords: ["Next.js API authentication", "secure Next.js Route Handlers", "Next.js API middleware auth", "Next.js API rate limiting"],
    searchIntent: "informational",
    title: "How to Protect API Routes in Next.js | Justin Johnson",
    description: "Securing Next.js API routes and Route Handlers — session validation, rate limiting, and input validation.",
    h1: "How to Protect API Routes in Next.js",
    eyebrow: "Guides",
    intro: [
      "An API route is reachable directly, regardless of what the frontend hides — so every route needs to independently validate the caller's identity and permissions, not assume a request only ever comes from your own authenticated frontend.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js project with authentication already set up", "Route Handlers (app/api/*/route.ts) to secure"] }],
      },
      {
        heading: "Step 1: Validate the Session in the Route Handler",
        blocks: [
          { kind: "code", language: "ts", caption: "app/api/orders/route.ts", code: "export async function GET(request: Request) {\n  const session = await getSession(request);\n  if (!session) {\n    return new Response('Unauthorized', { status: 401 });\n  }\n  // proceed with authorized logic\n}" },
        ],
      },
      {
        heading: "Step 2: Check Authorization, Not Just Authentication",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Being logged in isn't the same as being allowed to perform a specific action — check that the session's user actually has permission for the requested resource (e.g. this order belongs to this user) before returning or modifying data."] },
        ],
      },
      {
        heading: "Step 3: Validate Input and Add Rate Limiting",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Validate the request body against a schema (Zod is a common choice) before using it, and add rate limiting on any endpoint that's expensive or could be abused (login attempts, AI API calls, email sending)."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Assuming middleware-level auth checks cover API routes too — middleware matchers need to explicitly include API paths, or each route needs its own check", "Trusting a user ID sent in the request body instead of deriving it from the validated session", "No rate limiting on expensive operations, leaving them open to abuse or runaway cost"] },
        ],
      },
      {
        heading: "Security Considerations",
        blocks: [
          { kind: "list", items: ["Never trust client-supplied identifiers for authorization decisions — always derive identity from the verified session", "Return generic error messages for auth failures — don't reveal whether a user ID exists or not", "Log authentication failures for monitoring, without logging sensitive payload data"] },
        ],
      },
    ],
    faqs: [
      { question: "Is middleware enough to protect API routes?", answer: "Only if its matcher explicitly covers the API paths — many middleware configs are written with pages in mind and accidentally exclude /api routes, leaving them unchecked." },
      { question: "How do I add rate limiting?", answer: "Track request counts per user or IP over a time window, either with a lightweight in-memory approach for small scale or a dedicated service (like Upstash's rate limiter) for anything running across multiple serverless instances." },
      { question: "Should error messages reveal what went wrong?", answer: "For authentication and authorization failures, keep messages generic — detailed error messages can leak information useful to an attacker, like whether a given user account exists." },
    ],
    howToSteps: [
      { name: "Validate the session", text: "Check the caller's session independently inside every API route." },
      { name: "Check authorization", text: "Confirm the authenticated user is allowed to access the specific resource." },
      { name: "Validate input and rate limit", text: "Validate request bodies and add rate limiting to sensitive endpoints." },
    ],
    relatedSlugs: ["technologies/nextjs-authentication", "technologies/rest-api-development", "guides/how-to-use-supabase-authentication-with-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-add-google-maps-to-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to add Google Maps to Next.js",
    secondaryKeywords: ["Next.js Google Maps integration", "Google Maps React component", "Next.js map component tutorial", "Google Maps API key setup"],
    searchIntent: "informational",
    title: "How to Add Google Maps to Next.js | Justin Johnson",
    description: "Integrating an interactive Google Map into a Next.js app, loaded client-side with a properly restricted API key.",
    h1: "How to Add Google Maps to Next.js",
    eyebrow: "Guides",
    intro: [
      "Google Maps is inherently interactive, so the map component itself has to be a client component — this covers loading it correctly and keeping the API key secure.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Google Cloud project with the Maps JavaScript API enabled", "An API key restricted to your domain"] }],
      },
      {
        heading: "Step 1: Secure the API Key",
        blocks: [
          { kind: "paragraphs", paragraphs: ["In the Google Cloud Console, restrict the API key to your site's domain(s) under Application restrictions, and limit it to only the specific Maps APIs you actually use — this prevents the key from being abused if it's exposed in client-side code, which it necessarily will be for a browser-rendered map."] },
        ],
      },
      {
        heading: "Step 2: Load the Map in a Client Component",
        blocks: [
          { kind: "code", language: "tsx", caption: "components/Map.tsx", code: "'use client';\nimport { APIProvider, Map } from '@vis.gl/react-google-maps';\n\nexport default function LocationMap() {\n  return (\n    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY!}>\n      <Map defaultCenter={{ lat: 25.2, lng: 55.3 }} defaultZoom={11} style={{ height: '400px' }} />\n    </APIProvider>\n  );\n}" },
        ],
      },
      {
        heading: "Step 3: Use It in a Server-Rendered Page",
        blocks: [
          { kind: "paragraphs", paragraphs: ["The rest of the page — surrounding content, metadata — stays server-rendered as normal; only the map component itself needs 'use client', since it's the only part requiring browser APIs."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Map fails to load with a 'RefererNotAllowedMapError' — the API key's domain restrictions don't include the current domain (including localhost during development)", "Map container renders with zero height — the container needs an explicit height, since the map has no natural content to size itself against", "Billing errors — Google Maps requires a billing account attached to the project, even within the free usage tier"] },
        ],
      },
      {
        heading: "Performance Considerations",
        blocks: [
          { kind: "list", items: ["Lazy-load the map component below the fold using dynamic import with ssr: false, since it's client-only anyway and shouldn't block initial page render", "Debounce any autocomplete or search-as-you-type interactions to avoid excessive API requests"] },
        ],
      },
    ],
    faqs: [
      { question: "Is it safe to expose the Maps API key in client code?", answer: "Yes, as long as it's properly restricted by domain (HTTP referrer) and limited to specific APIs in the Google Cloud Console — the key is meant to be public-facing for browser-based maps, and restrictions are what actually prevent abuse." },
      { question: "Can I use a free alternative instead?", answer: "Leaflet with OpenStreetMap tiles is a free option for basic map display, without Google's Places autocomplete or Directions data — see the Google Maps API integration page for a fuller comparison." },
      { question: "Why does the map need to be a client component?", answer: "The Maps JavaScript API is inherently interactive and runs in the browser — it can't be rendered server-side, so any component using it needs 'use client'." },
    ],
    howToSteps: [
      { name: "Secure the API key", text: "Restrict the key to your domain and specific Maps APIs in Google Cloud Console." },
      { name: "Load the map in a client component", text: "Mark the map component 'use client' and render it with a Maps React library." },
      { name: "Use it in a server-rendered page", text: "Keep the surrounding page server-rendered, isolating client code to the map itself." },
    ],
    relatedSlugs: ["technologies/google-maps-api-integration", "services/api-development-integration", "industries/web-development-for-transport-companies"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-integrate-stripe-with-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to integrate Stripe with Next.js",
    secondaryKeywords: ["Stripe Next.js checkout tutorial", "Next.js Stripe webhook", "Stripe Checkout Next.js", "Next.js subscription billing tutorial"],
    searchIntent: "informational",
    title: "How to Integrate Stripe With Next.js | Justin Johnson",
    description: "Setting up Stripe Checkout in Next.js, including the webhook handler that keeps your database in sync with real payment events.",
    h1: "How to Integrate Stripe With Next.js",
    eyebrow: "Guides",
    intro: [
      "This covers the two core pieces of a Stripe integration: creating a Checkout session from a Route Handler, and handling the webhook that confirms what actually happened with the payment.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Stripe account with API keys", "The stripe npm package installed", "A Next.js App Router project"] }],
      },
      {
        heading: "Step 1: Create a Checkout Session",
        blocks: [
          { kind: "code", language: "ts", caption: "app/api/checkout/route.ts", code: "import Stripe from 'stripe';\nconst stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);\n\nexport async function POST(request: Request) {\n  const { priceId } = await request.json();\n  const session = await stripe.checkout.sessions.create({\n    mode: 'payment',\n    line_items: [{ price: priceId, quantity: 1 }],\n    success_url: `${process.env.NEXT_PUBLIC_URL}/success`,\n    cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,\n  });\n  return Response.json({ url: session.url });\n}" },
        ],
      },
      {
        heading: "Step 2: Handle Webhooks",
        blocks: [
          { kind: "code", language: "ts", caption: "app/api/webhooks/stripe/route.ts", code: "export async function POST(request: Request) {\n  const body = await request.text();\n  const signature = request.headers.get('stripe-signature')!;\n  const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);\n\n  if (event.type === 'checkout.session.completed') {\n    // fulfill the order in your database\n  }\n  return new Response('ok');\n}" },
          { kind: "paragraphs", paragraphs: ["The webhook, not the success_url redirect, is the reliable source of truth for whether a payment actually completed — a customer could close the tab before the redirect fires, but the webhook still arrives."] },
        ],
      },
      {
        heading: "Step 3: Test With the Stripe CLI",
        blocks: [
          { kind: "code", language: "bash", code: "stripe listen --forward-to localhost:3000/api/webhooks/stripe" },
          { kind: "paragraphs", paragraphs: ["This forwards real Stripe events to your local dev server so you can test the webhook handler without deploying first."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["\"Webhook signature verification failed\" — the raw request body must be read as text before parsing; parsing it as JSON first breaks signature verification", "Order marked complete before payment actually confirmed — relying on the success_url redirect instead of the webhook as the source of truth", "Duplicate order fulfillment — webhooks can be delivered more than once; use the event ID or an idempotency check before processing"] },
        ],
      },
      {
        heading: "Security Considerations",
        blocks: [
          { kind: "list", items: ["Always verify the webhook signature — without it, anyone could POST a fake 'payment succeeded' event to your endpoint", "Never expose the Stripe secret key to the client — only the publishable key belongs in frontend code", "Store the webhook secret in environment variables, separate per environment (test vs. live)"] },
        ],
      },
    ],
    faqs: [
      { question: "Should I use Stripe Checkout or Payment Elements?", answer: "Checkout (Stripe's hosted page) is faster to implement and reduces PCI compliance scope. Elements gives full control over the payment form's appearance if it needs to stay fully on your domain." },
      { question: "Why do webhooks matter more than the redirect?", answer: "The redirect only fires if the customer's browser successfully completes it; the webhook is delivered by Stripe directly to your server regardless, making it the reliable signal for whether payment actually succeeded." },
      { question: "How do I test payments without real money?", answer: "Stripe's test mode provides test card numbers (like 4242 4242 4242 4242) that simulate successful and failed payments without moving real money." },
    ],
    howToSteps: [
      { name: "Create a Checkout session", text: "Build an API route that creates a Stripe Checkout session and returns its URL." },
      { name: "Handle webhooks", text: "Verify and process Stripe webhook events to confirm payment completion." },
      { name: "Test with the Stripe CLI", text: "Forward real Stripe events to your local server for testing." },
    ],
    relatedSlugs: ["technologies/stripe-payment-integration", "services/api-development-integration", "services/saas-application-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-build-a-crm-with-nextjs-and-supabase",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to build a CRM with Next.js and Supabase",
    secondaryKeywords: ["Next.js Supabase CRM tutorial", "build a custom CRM tutorial", "Supabase CRM schema", "Next.js CRM data model"],
    searchIntent: "informational",
    title: "How to Build a CRM With Next.js and Supabase | Justin Johnson",
    description: "A walkthrough of the core building blocks for a custom CRM — schema, row-level security, and the pipeline view.",
    h1: "How to Build a CRM With Next.js and Supabase",
    eyebrow: "Guides",
    intro: [
      "This covers the foundational pieces of a custom CRM built on Next.js and Supabase — the data model, access control, and a basic pipeline view — rather than every feature a full CRM eventually needs.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Supabase project", "A Next.js App Router project with Supabase auth already set up"] }],
      },
      {
        heading: "Step 1: Design the Core Schema",
        blocks: [
          { kind: "code", language: "sql", code: "create table contacts (\n  id uuid primary key default gen_random_uuid(),\n  owner_id uuid references auth.users(id),\n  name text not null,\n  email text,\n  created_at timestamptz default now()\n);\n\ncreate table deals (\n  id uuid primary key default gen_random_uuid(),\n  contact_id uuid references contacts(id),\n  owner_id uuid references auth.users(id),\n  stage text not null default 'new',\n  value numeric,\n  created_at timestamptz default now()\n);" },
        ],
      },
      {
        heading: "Step 2: Add Row-Level Security",
        blocks: [
          { kind: "code", language: "sql", code: "alter table contacts enable row level security;\n\ncreate policy \"Users see their own contacts\"\n  on contacts for select\n  using (owner_id = auth.uid());" },
          { kind: "paragraphs", paragraphs: ["Repeat similar policies for insert, update, and the deals table — RLS is what actually enforces that one sales rep can't see another's pipeline, regardless of what the frontend shows."] },
        ],
      },
      {
        heading: "Step 3: Build the Pipeline View",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Fetch deals grouped by stage in a server component, and render them as columns — a simple starting point before adding drag-and-drop stage changes, which needs a client component and an update call back to Supabase."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Data visible across all users despite RLS being enabled — check that a policy actually exists for the operation (select/insert/update/delete) being performed; RLS with no matching policy denies access by default, but a missing policy for one operation while others exist can create confusing gaps", "Foreign key errors when creating a deal — confirm the referenced contact_id actually exists and belongs to the same owner", "Slow pipeline queries as data grows — add an index on the stage and owner_id columns used in the main query"] },
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          { kind: "list", items: ["Design RLS policies before writing any frontend code, not after", "Keep the schema close to the actual sales process rather than a generic template", "Add an activity/notes table early — it's usually needed sooner than expected"] },
        ],
      },
    ],
    faqs: [
      { question: "Do I need a separate backend API, or can the frontend talk to Supabase directly?", answer: "For most CRM use cases, querying Supabase directly from server components (or via the client library with RLS enforcing access) is sufficient — a separate API layer is worth adding only once business logic gets complex enough to need it centralized." },
      { question: "How do I add automation, like AI-drafted follow-ups?", answer: "That's the AI-powered CRM layer — once the core schema and RLS are solid, AI features read from and write back to the same tables, calling an LLM API for the generative parts." },
      { question: "Can multiple sales reps share visibility into the same deals?", answer: "Yes, if that's the intended workflow — the RLS policy would check team or organization membership instead of a strict owner_id match, depending on how sharing should work." },
    ],
    howToSteps: [
      { name: "Design the core schema", text: "Create contacts and deals tables with appropriate relationships." },
      { name: "Add row-level security", text: "Write RLS policies so users only access their own data." },
      { name: "Build the pipeline view", text: "Fetch and display deals grouped by pipeline stage." },
    ],
    relatedSlugs: ["services/crm-development-services", "technologies/supabase-database-development", "solutions/ai-powered-crm-solutions"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-build-a-saas-application-with-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to build a SaaS application with Next.js",
    secondaryKeywords: ["Next.js SaaS boilerplate concepts", "multi-tenant Next.js tutorial", "Next.js SaaS billing tutorial", "SaaS starter architecture"],
    searchIntent: "informational",
    title: "How to Build a SaaS Application With Next.js | Justin Johnson",
    description: "The foundational pieces of a SaaS product on Next.js — multi-tenancy, auth, and billing — before the product-specific features.",
    h1: "How to Build a SaaS Application With Next.js",
    eyebrow: "Guides",
    intro: [
      "Before any product-specific feature, a SaaS application needs three things working correctly: accounts, a way to keep customer data isolated, and billing. This covers the architecture decisions behind each.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A Next.js project with a database (Postgres/Supabase)", "A Stripe account for billing"] }],
      },
      {
        heading: "Step 1: Design for Multi-Tenancy",
        blocks: [
          { kind: "paragraphs", paragraphs: ["The simplest and most common approach: a shared database with an organization_id (tenant ID) column on every table that holds customer data, enforced on every single query — either manually or via row-level security if using Postgres/Supabase."] },
          { kind: "code", language: "sql", code: "create table tasks (\n  id uuid primary key default gen_random_uuid(),\n  organization_id uuid not null references organizations(id),\n  title text not null\n);" },
        ],
      },
      {
        heading: "Step 2: Wire Up Subscription Billing",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Create a Stripe Customer and Subscription when an organization signs up for a paid plan, and store the subscription status on the organization record, updated via Stripe webhooks (not the checkout redirect) whenever it changes."] },
        ],
      },
      {
        heading: "Step 3: Gate Features by Plan",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Check the organization's current plan (read from your database, kept in sync via webhooks) before rendering or allowing access to plan-gated features, both in the UI and at the API level."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["A query missing the organization_id filter, leaking data across tenants — this is the single most consequential bug category in a multi-tenant app and worth extra review attention", "Subscription status going stale because it's only updated via the checkout redirect, not webhooks", "Feature gates checked only in the UI, letting a determined user hit the API directly and bypass the plan restriction"] },
        ],
      },
      {
        heading: "Security Considerations",
        blocks: [
          { kind: "list", items: ["Every query touching tenant data must filter by organization_id — consider row-level security as a database-enforced backstop rather than relying solely on application code discipline", "Verify Stripe webhook signatures before trusting any billing event", "Don't expose another organization's data in API error messages"] },
        ],
      },
    ],
    faqs: [
      { question: "Should each customer get a separate database?", answer: "For most SaaS products, no — a shared database with a tenant ID column is simpler to operate and sufficient until you reach a scale or compliance requirement that specifically demands isolation, which is a smaller set of cases than commonly assumed." },
      { question: "How do I keep subscription status accurate?", answer: "Update it from Stripe webhook events (subscription created, updated, canceled), not from the checkout success redirect alone — the redirect can be missed if the customer closes the tab early." },
      { question: "What's the biggest risk in multi-tenant architecture?", answer: "A query that forgets to filter by tenant ID, which can leak one customer's data to another — this is worth specific code review attention and, where the database supports it, a row-level security policy as a backstop." },
    ],
    howToSteps: [
      { name: "Design for multi-tenancy", text: "Add a tenant/organization ID to every table holding customer data." },
      { name: "Wire up subscription billing", text: "Integrate Stripe subscriptions, syncing status via webhooks." },
      { name: "Gate features by plan", text: "Check plan status before granting access to gated features." },
    ],
    relatedSlugs: ["services/saas-application-development", "guides/how-to-integrate-stripe-with-nextjs", "technologies/supabase-database-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-build-an-ai-chatbot-for-a-website",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to build an AI chatbot for a website",
    secondaryKeywords: ["build a chatbot tutorial", "AI chatbot with RAG tutorial", "website chatbot development guide", "custom chatbot with OpenAI"],
    searchIntent: "informational",
    title: "How to Build an AI Chatbot for a Website | Justin Johnson",
    description: "The core pieces of a website chatbot grounded in your own content — retrieval, prompt structure, and the chat interface.",
    h1: "How to Build an AI Chatbot for a Website",
    eyebrow: "Guides",
    intro: [
      "A chatbot that's actually useful for a specific website needs to be grounded in that site's content, not just the model's general knowledge — this covers the retrieval pipeline that makes that possible, plus the interface around it.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["An OpenAI (or similar) API key", "A set of content to ground the bot in (docs, FAQs, product pages)", "A vector database or Postgres with pgvector"] }],
      },
      {
        heading: "Step 1: Chunk and Embed Your Content",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Split source content into reasonably sized chunks (a few hundred words each is a common starting point), generate an embedding vector for each using an embeddings API, and store both the text and its vector."] },
        ],
      },
      {
        heading: "Step 2: Retrieve Relevant Chunks at Query Time",
        blocks: [
          { kind: "code", language: "ts", code: "const queryEmbedding = await embed(userQuestion);\nconst relevantChunks = await vectorDb.similaritySearch(queryEmbedding, { limit: 5 });" },
        ],
      },
      {
        heading: "Step 3: Build the Prompt and Generate a Response",
        blocks: [
          { kind: "code", language: "ts", code: "const prompt = `Answer using only the context below. If the answer isn't in the context, say you don't know.\\n\\nContext:\\n${relevantChunks.join('\\n\\n')}\\n\\nQuestion: ${userQuestion}`;\nconst response = await openai.chat.completions.create({\n  model: 'gpt-4o-mini',\n  messages: [{ role: 'user', content: prompt }],\n});" },
          { kind: "paragraphs", paragraphs: ["Explicitly instructing the model to say it doesn't know when the context doesn't cover the question is one of the simplest, highest-leverage ways to reduce fabricated answers."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Bot confidently answers questions outside its actual content — the prompt isn't instructing it clearly enough to stick to the provided context", "Irrelevant chunks getting retrieved — chunk size may be too large or too small for the content type; this usually needs iteration against real test questions", "Slow response times — streaming the response token by token makes the same total latency feel much faster to the user"] },
        ],
      },
      {
        heading: "Security Considerations",
        blocks: [
          { kind: "list", items: ["Rate limit the chat endpoint to prevent abuse and runaway API costs", "Never let the retrieval step pull content the current user shouldn't have access to — respect the same permissions as the source system", "Sanitize and log conversations for quality monitoring without storing more personal data than necessary"] },
        ],
      },
    ],
    faqs: [
      { question: "How much content do I need before building this?", answer: "Enough that a keyword search would genuinely struggle to find the right answer — a handful of pages may not need a chatbot at all; a large documentation set or product catalog is where retrieval-based search starts to add real value." },
      { question: "Can I use this approach without a vector database?", answer: "For a very small content set, a simpler keyword or full-text search might suffice instead of embeddings — vector search earns its complexity once content is large or the phrasing of questions varies a lot from the source text." },
      { question: "How do I stop the bot from making things up?", answer: "Ground it strictly in retrieved context, instruct it explicitly to say when it doesn't know, and consider a confidence threshold below which it defers to a human rather than answering." },
    ],
    howToSteps: [
      { name: "Chunk and embed content", text: "Split source content into chunks and generate vector embeddings for each." },
      { name: "Retrieve relevant chunks", text: "Embed the user's question and retrieve the most similar chunks." },
      { name: "Build the prompt and generate a response", text: "Combine retrieved context with the question and call the LLM API." },
    ],
    relatedSlugs: ["solutions/ai-chatbot-development", "solutions/retrieval-augmented-generation-systems", "guides/how-to-integrate-the-openai-api-with-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-integrate-the-openai-api-with-nextjs",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to integrate the OpenAI API with Next.js",
    secondaryKeywords: ["OpenAI API Next.js tutorial", "Next.js streaming chat completion", "OpenAI Route Handler Next.js", "Next.js AI SDK tutorial"],
    searchIntent: "informational",
    title: "How to Integrate the OpenAI API With Next.js | Justin Johnson",
    description: "Calling the OpenAI API from a Next.js Route Handler with streaming responses, error handling, and cost control.",
    h1: "How to Integrate the OpenAI API With Next.js",
    eyebrow: "Guides",
    intro: [
      "This covers calling the OpenAI API from a Route Handler, streaming the response back to the client for a responsive UI, and the error handling and cost controls worth having from the start.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["An OpenAI API key", "A Next.js App Router project", "The openai npm package installed"] }],
      },
      {
        heading: "Step 1: Create a Route Handler",
        blocks: [
          { kind: "code", language: "ts", caption: "app/api/chat/route.ts", code: "import OpenAI from 'openai';\nconst openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });\n\nexport async function POST(request: Request) {\n  const { message } = await request.json();\n  const completion = await openai.chat.completions.create({\n    model: 'gpt-4o-mini',\n    messages: [{ role: 'user', content: message }],\n  });\n  return Response.json({ reply: completion.choices[0].message.content });\n}" },
        ],
      },
      {
        heading: "Step 2: Stream the Response",
        blocks: [
          { kind: "code", language: "ts", code: "const stream = await openai.chat.completions.create({\n  model: 'gpt-4o-mini',\n  messages: [{ role: 'user', content: message }],\n  stream: true,\n});\n\nconst encoder = new TextEncoder();\nconst readable = new ReadableStream({\n  async start(controller) {\n    for await (const chunk of stream) {\n      const text = chunk.choices[0]?.delta?.content ?? '';\n      controller.enqueue(encoder.encode(text));\n    }\n    controller.close();\n  },\n});\nreturn new Response(readable);" },
          { kind: "paragraphs", paragraphs: ["Streaming shows the response as it's generated instead of waiting for the full completion, which meaningfully improves perceived speed for longer responses."] },
        ],
      },
      {
        heading: "Step 3: Handle Errors and Rate Limits",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Wrap the API call in a try/catch, handle rate limit (429) responses with a retry-with-backoff strategy, and set a reasonable timeout so a slow or hanging request doesn't leave the user waiting indefinitely."] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["API key exposed in client-side code — the OpenAI API must only ever be called from server code (Route Handlers, server components), never directly from the browser", "No error handling around the API call, so a transient failure crashes the request instead of degrading gracefully", "No cost monitoring, leading to a surprise bill if usage spikes unexpectedly"] },
        ],
      },
      {
        heading: "Security & Cost Considerations",
        blocks: [
          { kind: "list", items: ["Keep the API key server-side only, in an environment variable never exposed to the client", "Set per-user or per-session usage limits to control cost", "Choose the smallest model that reliably handles the task — cost scales directly with tokens processed"] },
        ],
      },
    ],
    faqs: [
      { question: "Can I call the OpenAI API directly from a client component?", answer: "No — this would expose your API key in the browser, where anyone could extract and misuse it. Always route the call through a server-side Route Handler." },
      { question: "How do I stream a response to a React component?", answer: "The Route Handler returns a ReadableStream response, which the client reads incrementally (via fetch's response.body reader, or a library like the Vercel AI SDK that wraps this pattern) to update the UI as text arrives." },
      { question: "Which model should I default to?", answer: "A smaller, faster model (like gpt-4o-mini) is often sufficient and considerably cheaper for most tasks; reserve larger models for genuinely complex reasoning tasks where the smaller model's output quality falls short." },
    ],
    howToSteps: [
      { name: "Create a Route Handler", text: "Set up a server-side endpoint that calls the OpenAI API." },
      { name: "Stream the response", text: "Return a streaming response so the UI updates as text generates." },
      { name: "Handle errors and rate limits", text: "Add error handling, retries, and cost-conscious model selection." },
    ],
    relatedSlugs: ["solutions/openai-api-integration", "guides/how-to-build-an-ai-chatbot-for-a-website", "solutions/ai-development-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "how-to-improve-seo-for-a-react-website",
    category: "guides",
    pageType: "guide",
    schemaType: "HowTo",
    primaryKeyword: "how to improve SEO for a React website",
    secondaryKeywords: ["React SEO checklist", "improve SEO for single page app", "React Helmet alternative", "React app search visibility"],
    searchIntent: "informational",
    title: "How to Improve SEO for a React Website | Justin Johnson",
    description: "A practical checklist for improving search visibility on a React app, from rendering strategy down to per-page metadata.",
    h1: "How to Improve SEO for a React Website",
    eyebrow: "Guides",
    intro: [
      "This is a practical, ordered checklist for a React app's SEO — starting with the highest-impact issue (rendering strategy) and working down to the details that matter once the foundation is right.",
    ],
    sections: [
      {
        heading: "Prerequisites",
        blocks: [{ kind: "list", items: ["A live or locally running React application", "Access to view page source / raw HTML responses"] }],
      },
      {
        heading: "Step 1: Check What's Actually in the Initial HTML",
        blocks: [
          { kind: "paragraphs", paragraphs: ["View the page's raw HTML source (not the browser's rendered DOM). If your main content isn't there, it's dependent on client-side JavaScript — the single biggest lever for React SEO is fixing this, either through prerendering or migrating to a framework with server rendering built in."] },
        ],
      },
      {
        heading: "Step 2: Add Per-Route Metadata",
        blocks: [
          { kind: "paragraphs", paragraphs: ["Every route needs its own title, description, and canonical URL rather than one static set defined once in index.html — this can be done with a small hook that updates document.head on route change, though this only helps crawlers that execute JavaScript."] },
        ],
      },
      {
        heading: "Step 3: Fix the Mechanical Basics",
        blocks: [
          { kind: "checklist", items: ["A real sitemap.xml listing every indexable route", "robots.txt not accidentally blocking content that should be indexed", "Semantic HTML with a single H1 per page and a logical heading hierarchy", "Real anchor tags (<a href>) for internal navigation, not click handlers on non-link elements", "Structured data where genuinely applicable"] },
        ],
      },
      {
        heading: "Common Errors",
        blocks: [
          { kind: "list", items: ["Navigation built entirely with onClick handlers on <div> elements instead of real <a> tags, which crawlers and users relying on standard link behavior can't follow normally", "One static meta description for the entire app, duplicated across every indexed page", "No sitemap at all, leaving discovery entirely dependent on internal links and external backlinks"] },
        ],
      },
      {
        heading: "Best Practices",
        blocks: [
          { kind: "list", items: ["Prioritize fixing rendering strategy over any other single SEO change — it affects every other fix's actual visibility to crawlers", "Use real <a> tags for all internal navigation, even in a single-page app", "Test with Google Search Console's URL Inspection tool to see what Google's crawler actually captured, not just what renders in your own browser"] },
        ],
      },
    ],
    faqs: [
      { question: "Is my React app definitely invisible to search engines?", answer: "Not necessarily invisible, but at a disadvantage — Google's crawler does execute JavaScript, just slower and less reliably than reading pre-rendered HTML, and other crawlers may not execute it at all. Content should be present without JavaScript execution for the strongest results." },
      { question: "What's the fastest fix if I can't migrate frameworks right now?", answer: "Static prerendering — generating HTML snapshots of each route at build time — improves crawlability significantly without a full rendering-strategy rewrite; see the React website SEO service page for more on this approach." },
      { question: "Does React Router affect SEO?", answer: "Client-side routing itself isn't the core issue as long as real <a href> tags are used for links (which both users and crawlers can follow); the underlying rendering strategy — whether content exists in the initial HTML — is what actually matters most." },
    ],
    howToSteps: [
      { name: "Check the initial HTML", text: "View raw page source to confirm whether content is present without JavaScript." },
      { name: "Add per-route metadata", text: "Ensure every route has a unique title, description, and canonical URL." },
      { name: "Fix the mechanical basics", text: "Add a sitemap, correct robots.txt, semantic HTML, and real anchor tags." },
    ],
    relatedSlugs: ["resources/react-website-seo", "resources/javascript-seo", "services/react-development-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
];
