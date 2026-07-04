export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  company: string;
  period: string;
  role: string;
  stack: string[];
  problem: string;
  myRole: string;
  architecture: string;
  outcome: string;
  examples?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-country-booking-platform",
    title: "Multi-Country Transportation Booking Platform",
    category: "Travel & Transportation",
    company: "Global Web Marketing LLC",
    period: "Sep 2025 – Present",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "PHP", "Multi-tenant theming"],
    problem:
      "The business runs 100+ localized booking websites across the UK and Europe (car hire, transfers, minibus hire, tours), and each new market or brand risked becoming a one-off rebuild rather than a repeatable process.",
    myRole:
      "Designed and built a centralized React/Next.js frontend architecture on top of a shared PHP backend, so new country and brand sites could be launched from a common component library and content model instead of custom development each time.",
    architecture:
      "A shared Next.js/React component library handles booking flows, search, and checkout UI across all sites, with a config-driven layer for per-market branding, currency, and localized content. A shared PHP backend handles booking, inventory, and payment logic, allowing each site to plug into common services rather than duplicating backend logic.",
    outcome:
      "Turned launching a new country or brand site into a configuration exercise rather than a full rebuild, letting the business expand into new UK and European markets while keeping a single codebase to maintain and improve.",
    examples: [
      { label: "Minibus Hire London", href: "https://www.minibushirelondon.org/" },
      { label: "Compare Transport UK", href: "http://comparetransport.co.uk/" },
    ],
  },
  {
    slug: "kore-digital-ecommerce",
    title: "KORE Digital Ecommerce Platform",
    category: "E-Commerce & Cloud",
    company: "Gadgeon Systems Inc",
    period: "Oct 2022 – Jul 2025",
    role: "Software Engineer",
    stack: ["React", "Next.js", "AWS Lambda", "Step Functions", "DynamoDB", "RDS", "Stripe", "Shopify", "NetSuite"],
    problem:
      "KORE Digital needed a storefront where checkout, ERP order sync, and multi-carrier fulfillment worked together automatically, instead of requiring manual coordination between payment, ERP, and shipping systems.",
    myRole:
      "Built the React/Next.js storefront and contributed to the AWS backend, wiring together payment, ERP, and logistics providers into a single automated order pipeline.",
    architecture:
      "React/Next.js frontend backed by an event-driven AWS architecture: Lambda functions and Step Functions orchestrate the order lifecycle, with DynamoDB and RDS handling application and transactional data. Stripe and Shopify handle payments and commerce, NetSuite keeps orders in sync with the ERP, and UPS, FedEx, and 3PL integrations automate shipping label generation and tracking updates.",
    outcome:
      "Replaced manual shipping and order-fulfillment coordination with an automated, event-driven pipeline spanning payment, ERP, and multiple carriers, giving the business a consistent fulfillment flow across sales channels.",
  },
  {
    slug: "tour-booking-travel-platforms",
    title: "Tour Booking & Travel Platforms",
    category: "Headless Commerce",
    company: "Global Web Marketing LLC",
    period: "Sep 2025 – Present",
    role: "Full Stack Developer",
    stack: ["Shopify Storefront API", "React", "Redux", "Multi-currency checkout", "WhatsApp API"],
    problem:
      "Tour and excursion booking sites needed flexible product and inventory management, multi-currency checkout for international customers, and a low-friction way for customers who prefer messaging over web forms to complete a booking.",
    myRole:
      "Built booking flows on Shopify's Storefront API with Redux for state management, implemented multi-currency checkout, and added a WhatsApp-based booking flow as an alternate path to conversion.",
    architecture:
      "Headless commerce setup using Shopify's Storefront API for product and inventory management, with a React/Redux frontend handling booking state and multi-currency pricing at checkout. A WhatsApp integration lets customers start or complete a booking via chat, with confirmations tying back into the same order flow.",
    outcome:
      "Gave customers two complete paths to booking — standard web checkout or WhatsApp — while centralizing product, inventory, and multi-currency pricing through a single headless commerce layer.",
    examples: [
      { label: "Excursions Dubai", href: "https://www.excursionsdubai.ae/" },
      { label: "Safaris UAE", href: "https://www.safaris.ae/" },
    ],
  },
];
