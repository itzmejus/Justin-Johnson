import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { profile } from "../data/profile";
import { useSEO } from "../hooks/useSEO";

type Service = {
  icon: string;
  title: string;
  summary: string;
  details: string[];
  proof: { label: string; href: string };
};

const services: Service[] = [
  {
    icon: "data_object",
    title: "React & Next.js Frontend Development",
    summary:
      "Fast, SEO-friendly frontends built with React and Next.js — from single-page applications to server-rendered marketing sites.",
    details: [
      "Component-driven builds with TypeScript and Tailwind CSS",
      "Server-side rendering with Next.js for content-heavy, search-driven sites",
      "Multi-tenant, config-driven frontends for brands running several localized sites off one codebase",
    ],
    proof: { label: "See the multi-city minibus network build", href: "/blog/minibus-hire-london" },
  },
  {
    icon: "dns",
    title: "Node.js & AWS Backend Development",
    summary:
      "Backend systems and cloud infrastructure on Node.js and AWS — APIs, serverless pipelines, and database design.",
    details: [
      "REST API design and integration",
      "Event-driven pipelines with AWS Lambda and Step Functions",
      "Data layer design across DynamoDB, RDS, and PostgreSQL",
    ],
    proof: { label: "See the KORE Digital ecommerce platform case study", href: "/#case-studies" },
  },
  {
    icon: "shopping_cart",
    title: "Shopify Headless Commerce",
    summary:
      "Shopify's Storefront API wired into fully custom React frontends — full control over UX while keeping Shopify's product, inventory, and checkout infrastructure.",
    details: [
      "Headless storefronts with custom booking and cart flows",
      "Multi-currency checkout for international audiences",
      "Shopify's product model repurposed as a flexible backend for listings and directories",
    ],
    proof: { label: "See how Excursions Dubai was built", href: "/blog/excursions-dubai" },
  },
  {
    icon: "event_available",
    title: "Booking & Marketplace Platforms",
    summary:
      "Booking flows, multi-step forms, and marketplace logic for travel, transport, and services businesses.",
    details: [
      "Interactive map-based pickup and drop-off selection",
      "Multi-step booking forms with validation and payment options",
      "Listing submission and moderation flows for marketplaces",
    ],
    proof: { label: "See the UAE Transfers map-based booking flow", href: "/blog/uae-transfers" },
  },
  {
    icon: "chat",
    title: "WhatsApp & Third-Party API Integrations",
    summary:
      "WhatsApp ordering and enquiry flows built into the codebase, plus integrations with payment gateways, ERPs, and logistics providers.",
    details: [
      "WhatsApp Business API integration for orders and enquiries",
      "Payment gateway integration (Stripe, PayPal, HyperPay)",
      "ERP and fulfillment automation (NetSuite, carrier APIs)",
    ],
    proof: { label: "See the Tawaf Essentials WhatsApp checkout", href: "/blog/tawaf-essentials" },
  },
  {
    icon: "search",
    title: "SEO-Friendly, Performance-First Builds",
    summary:
      "Sites structured for search from the start — clean semantic markup, structured data, and fast load times.",
    details: [
      "Per-page metadata, canonical tags, and structured data (Schema.org)",
      "Sitemap and robots.txt setup for search engine discovery",
      "Large-scale local-SEO page structures for multi-location businesses",
    ],
    proof: { label: "See the 100+ location-page SMP Nationwide build", href: "/blog/smp-nationwide" },
  },
];

export default function ServicesPage() {
  useSEO({
    title: "Web Development Services | React, Next.js, Node.js, AWS & Shopify",
    description:
      "Web development services from Justin Johnson: React & Next.js frontends, Node.js & AWS backends, Shopify headless commerce, booking platforms, WhatsApp integrations, and SEO-friendly builds.",
    path: "/services",
    keywords:
      "React development services, Next.js development services, Node.js backend development, AWS cloud integration services, Shopify headless commerce developer, booking platform development, WhatsApp API integration, SEO-friendly web development",
    jsonLd: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "Service",
        position: index + 1,
        name: service.title,
        description: service.summary,
        provider: {
          "@type": "Person",
          name: profile.name,
          url: "https://www.justinjohnson.de/",
        },
      })),
    }),
  });

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">
              Services
            </p>
            <h1 className="font-headline text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter">
              WEB DEVELOPMENT <br />
              <span className="text-primary">SERVICES</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mt-6 max-w-3xl">
              Full stack development across React, Next.js, Node.js, and AWS — with particular depth in
              Shopify headless commerce and booking platform architecture. Available for{" "}
              <a href="/freelance" className="text-primary font-bold hover:underline">
                freelance and contract work
              </a>
              .
            </p>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10 flex flex-col"
                >
                  <span className="material-symbols-outlined text-primary text-3xl mb-4">
                    {service.icon}
                  </span>
                  <h2 className="font-headline text-xl font-bold mb-3">{service.title}</h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                    {service.summary}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {service.details.map((detail) => (
                      <li key={detail} className="text-sm text-on-surface-variant flex gap-2">
                        <span className="material-symbols-outlined text-primary text-base shrink-0">
                          check
                        </span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.proof.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                  >
                    {service.proof.label}
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-primary mb-6">
              NEED ONE OF THESE FOR YOUR PROJECT?
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-10">
              I'm currently available for freelance and contract work. Check availability and engagement
              options, or reach out directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/freelance"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95"
              >
                View Freelance Availability
              </a>
              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-outline-variant/20 text-on-surface rounded-full font-bold text-lg hover:bg-surface-container transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
