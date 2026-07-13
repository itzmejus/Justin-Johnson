import imgExcursions from "../assets/excursionsdubai.webp";
import imgJetsetVisas from "../assets/jetsetvisas.webp";
import imgSafaris from "../assets/safaris.webp";
import imgUaeCar from "../assets/uaeluxurycarhire.webp";
import imgCompareFlights from "../assets/compareflights.webp";
import imgDubaiPrint from "../assets/dubaiprintdesign.webp";
import imgUaeTransfers from "../assets/uaetransfers.webp";
import imgDaisysPaws from "../assets/daisyspaws.webp";
import imgMinibus from "../assets/minibushirelondon.webp";
import imgTawaf from "../assets/tawafessentials.webp";
import imgCompareTransport from "../assets/comparetransport.webp";
import imgJetsetApp from "../assets/app.jetsetvisas.webp";
import imgSmpNationwide from "../assets/smpnationwide.webp";
import imgFranksHandyman from "../assets/frankshandyman.webp";
import imgMaldivesHotelReviews from "../assets/maldivesproject.webp";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  company: string;
  siteUrl: string;
  image?: string;
  publishedDate: string;
  readTime: string;
  techStack: string[];
  excerpt: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "excursions-dubai",
    title: "Building Excursions Dubai: A Headless Booking Platform for Desert Tours",
    metaDescription:
      "How Excursions Dubai was built on Shopify's Storefront API with a React and Redux frontend, multi-currency support, and a WhatsApp booking flow for international tourists.",
    category: "Tour Booking",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.excursionsdubai.ae/",
    image: imgExcursions,
    publishedDate: "2026-07-10",
    readTime: "7 min read",
    techStack: ["React", "Redux", "Vite", "Shopify Storefront API", "WhatsApp Business API"],
    excerpt:
      "A headless commerce build for a Dubai tour operator, combining Shopify's product engine with a custom React booking experience and a WhatsApp-first checkout path.",
    sections: [
      {
        heading: "What Excursions Dubai Does",
        paragraphs: [
          "Excursions Dubai sells tours and activities across the UAE  desert safaris, city tours, water parks, theme parks and cultural experiences in Dubai, Abu Dhabi and Ras Al Khaimah. It's built for a tourism audience that's mostly browsing on a phone, often mid-holiday, and wants to go from 'what can I do tomorrow' to a confirmed booking in a couple of minutes.",
          "That kind of buyer doesn't want a traditional multi-page checkout. They want to see a tour, see a price, and either pay instantly or message someone who can answer a question first. The site is built around that expectation rather than a generic e-commerce template.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The frontend is a React single-page application built with Vite, using Redux for state management. Product, collection and cart data are powered by Shopify's Storefront API, called directly from the React app rather than through Shopify's own hosted theme  giving full control over the browsing and booking experience while still relying on Shopify for inventory, pricing and cart handling.",
          "WhatsApp is integrated at the code level rather than as a bolted-on chat widget, generating links that carry booking context straight into the conversation  a fast, familiar path to a sale for a mobile-first, tourism-driven audience.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "The architecture follows a pattern used across several of the company's UAE travel sites: Shopify as a headless product and order backend, React/Redux as the presentation and state layer, and WhatsApp as an alternate, low-friction path to conversion alongside standard checkout. Structured data is built into the page so search engines understand the business type and can surface rich results, including an on-site search action for tour listings.",
          "Separating commerce logic from presentation this way means new tour categories or seasonal packages can be added through the product catalog without touching the frontend code  a clean split between what changes often (inventory) and what stays stable (the booking experience).",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The result is a tour-booking storefront that gives international visitors two full paths to a booking  a standard web checkout backed by Shopify's cart and payment infrastructure, and a WhatsApp conversation for anyone who'd rather ask a question before paying. For a tourism business where trust and responsiveness matter as much as price, that second path often closes bookings a rigid checkout form would lose.",
        ],
      },
    ],
  },
  {
    slug: "jetset-visas",
    title: "Jetset Visas: Building a Visa Application Platform for the UAE",
    metaDescription:
      "A look at the technology behind Jetset Visas, a UAE visa application platform built to guide travelers through document-heavy, multi-nationality visa requests.",
    category: "Visa Services",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.jetsetvisas.ae/",
    image: imgJetsetVisas,
    publishedDate: "2026-07-05",
    readTime: "6 min read",
    techStack: ["React", "Redux", "Vite", "Shopify Storefront API", "Document uploads"],
    excerpt:
      "Turning a document-heavy, multi-nationality visa application process into a guided digital flow, built on the same React and Redux foundation used across the company's UAE travel brands.",
    sections: [
      {
        heading: "What Jetset Visas Does",
        paragraphs: [
          "Jetset Visas is a UAE visa application service, guiding travelers through nationality-specific requirements, document uploads, and processing tiers for entry visas into the UAE. It sits alongside Excursions Dubai, Safaris UAE and Tawaf Essentials in the same travel portfolio, serving a similar mobile-first, international audience.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site follows the same architectural family as its sibling platforms  a React and Redux frontend built with Vite, with Shopify's Storefront API used as a flexible, hosted backend for structured application data rather than a physical product catalog. WhatsApp is wired in at the code level, giving applicants a fast way to ask questions or confirm documents mid-application.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Visa applications are inherently document- and step-heavy, so the frontend is built around a guided, multi-step flow rather than a single long form  collecting nationality, travel dates, and required documents in stages, with validation at each step to reduce abandoned applications. Reusing the same headless architecture as the company's other UAE travel sites meant the application flow, document handling, and WhatsApp integration could be built on proven infrastructure rather than from scratch.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "By treating a visa application the same way the rest of the portfolio treats a tour booking  a guided, mobile-first flow with a human fallback via WhatsApp  the platform turns a naturally bureaucratic process into something closer to a standard e-commerce checkout.",
        ],
      },
    ],
  },
  {
    slug: "safaris-ae",
    title: "Safaris UAE: Desert Safari Booking on a Headless Commerce Stack",
    metaDescription:
      "How Safaris UAE was built with Shopify's Storefront API, React/Redux state management, and a WhatsApp booking alternative for desert safari and adventure tour bookings.",
    category: "Desert Safaris",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.safaris.ae/",
    image: imgSafaris,
    publishedDate: "2026-06-30",
    readTime: "7 min read",
    techStack: ["React", "Redux", "Vite", "Shopify Storefront API", "WhatsApp Business API"],
    excerpt:
      "Sister platform to Excursions Dubai, sharing the same headless Shopify + React booking core but tuned for desert safari packages, add-ons, and group bookings.",
    sections: [
      {
        heading: "What Safaris UAE Does",
        paragraphs: [
          "Safaris UAE sells desert safari experiences  dune bashing, camel rides, BBQ dinners, and cultural shows  across Dubai, Abu Dhabi, Sharjah and Ras Al Khaimah. It's built for the same kind of visitor as Excursions Dubai: someone deciding same-week or next-day, comparing a handful of packages, and wanting a fast, low-friction way to lock one in.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site is a React single-page application built with Vite and Redux, with product data served through Shopify's Storefront API  the same headless commerce pattern used on Excursions Dubai and Tawaf Essentials. WhatsApp is compiled into the app as a genuine integration, generating chat links with booking context attached rather than relying on a generic embedded widget.",
          "Rich structured data covers the tour operator listing, FAQ content, and pricing bands, helping the site earn richer, more informative results on search engines.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Structurally, this is the sibling build to Excursions Dubai and Tawaf Essentials, reusing the same headless-Shopify-plus-React pattern across the portfolio. Building it this way means new tour categories or seasonal packages can be added by editing product data rather than redeploying frontend code  the commerce logic and the presentation layer are cleanly separated.",
          "FAQ content covering safari duration, dress code, and safety for children and elderly guests renders as an on-page accordion  a pattern that supports both user trust and search visibility for informational queries.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "As a sister build to Excursions Dubai, this site shows how far one architectural pattern can stretch across a portfolio: same stack, same headless commerce approach, same WhatsApp fallback, different product catalog and a slightly different regional focus.",
        ],
      },
    ],
  },
  {
    slug: "uae-luxury-car-hire",
    title: "UAE Luxury Car Hire: A Fleet Booking Site Built for Conversion",
    metaDescription:
      "The tech stack and build process behind UAE Luxury Car Hire, a fleet browsing and enquiry site for luxury and exotic vehicle rentals in Dubai and Abu Dhabi.",
    category: "Luxury Car Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.uaeluxurycarhire.com/",
    image: imgUaeCar,
    publishedDate: "2026-06-25",
    readTime: "6 min read",
    techStack: ["React", "Redux", "Vite", "Shopify Storefront API", "WhatsApp Business API"],
    excerpt:
      "A high-end fleet showcase and enquiry-driven booking funnel, built on the same headless Shopify + React pattern as the company's other UAE travel sites.",
    sections: [
      {
        heading: "What UAE Luxury Car Hire Does",
        paragraphs: [
          "This site rents luxury and exotic vehicles  supercars, premium SUVs and chauffeur-driven cars  across Dubai and Abu Dhabi. The audience is high-intent and image-driven: fleet photography and fast browsing matter more than long-form content.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "It's the same architectural family as Excursions Dubai and Safaris UAE: a React and Redux single-page app built with Vite, product data served from Shopify's Storefront API, and a code-level WhatsApp integration for enquiries rather than a checkout-only flow. An on-site search and filter experience helps visitors narrow down the fleet by vehicle type quickly.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "The build reuses the same headless commerce approach as the rest of the company's UAE travel sites  Shopify as the product and inventory backend, React/Redux for a fully custom fleet-browsing UI, WhatsApp as the primary conversion path for a purchase this considered. Renting a supercar isn't typically an instant-checkout decision, so giving visitors a fast way to ask about availability or add-ons before committing matters more than a rigid cart flow.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Reusing a proven headless commerce pattern across the fleet-hire, tour, and transfer sites in the portfolio let this build focus its effort on what actually differentiates it  fast, high-quality fleet browsing and a frictionless enquiry path  rather than reinventing booking infrastructure.",
        ],
      },
    ],
  },
  {
    slug: "compare-flights-ae",
    title: "Compare Flights AE: Building a Flight Comparison Front End",
    metaDescription:
      "How Compare Flights AE aggregates and presents flight options for UAE travelers, and the frontend architecture used to keep search and comparison fast.",
    category: "Flight Booking",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.compareflights.ae/",
    image: imgCompareFlights,
    publishedDate: "2026-06-20",
    readTime: "6 min read",
    techStack: ["React", "Redux", "Vite", "Search & filter UI"],
    excerpt:
      "A comparison-first interface for flight search, built to make dense pricing and schedule data scannable without overwhelming the visitor.",
    sections: [
      {
        heading: "What Compare Flights AE Does",
        paragraphs: [
          "Compare Flights AE is a flight search and comparison front end for UAE travelers, helping visitors scan schedules and pricing across routes without wading through raw airline data. It's a comparison-focused entry point in the same portfolio as Excursions Dubai and Safaris UAE.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The frontend follows the same React and Redux pattern used across the company's UAE travel sites, built with Vite for a fast, focused single-page experience. The interface is built around search and filter interactions  route, date, and price sorting  rather than a traditional content-heavy layout.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Flight comparison is a different data problem from tour or rental bookings  pricing and schedules are time-sensitive rather than a relatively static catalog, so the UI is built to present dense, fast-changing information in a scannable way: clear route groupings, sortable results, and a filter panel that narrows results without a full page reload.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The result is a lightweight, comparison-first tool that fits naturally alongside the company's other UAE travel properties, giving visitors a fast way to weigh flight options before booking elsewhere in the same journey.",
        ],
      },
    ],
  },
  {
    slug: "dubai-print-design",
    title: "Dubai Print Design: A Headless Storefront for a Print Studio",
    metaDescription:
      "The build behind Dubai Print Design, covering its Shopify-backed React storefront, WhatsApp ordering flow, and customer account system.",
    category: "Print Design",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.dubaiprintdesign.com/",
    image: imgDubaiPrint,
    publishedDate: "2026-06-15",
    readTime: "6 min read",
    techStack: ["React", "React Router", "Vite", "Shopify Storefront API", "WhatsApp ordering"],
    excerpt:
      "A print-ordering storefront running on Shopify as a headless backend, with a custom React frontend, customer accounts, and a WhatsApp-based order path alongside standard checkout.",
    sections: [
      {
        heading: "What Dubai Print Design Does",
        paragraphs: [
          "This site sells printing services across the UAE  business cards, brochures, banners, stickers and more  for a local business audience ordering print materials online with fast turnaround expectations.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "It's a React single-page application built with Vite, using React Router for client-side navigation across product, booking, and account pages. Commerce runs on Shopify's Storefront API as a headless backend, with Shopify's own checkout completing the payment step.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "What sets this build apart from the tour-booking sites in the portfolio is a fuller application shell: customer login, registration, and profile pages sit alongside the product catalog, plus a booking-style route for scheduling  a more application-like structure layered on top of the same headless-Shopify-plus-React foundation used elsewhere.",
          "A custom WhatsApp ordering flow runs alongside the standard cart, giving customers a direct line to confirm print specifications or urgent turnaround requests before an order is finalized.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The result goes beyond a simple product catalog  accounts, bookings, and a dual order path (Shopify checkout or WhatsApp) give customers more than one way to complete an order, tailored to how print businesses actually take requests.",
        ],
      },
    ],
  },
  {
    slug: "uae-transfers",
    title: "UAE Transfers: Airport and Intercity Transfer Booking",
    metaDescription:
      "How UAE Transfers handles chauffeur bookings across the UAE, with a Shopify-backed React frontend and interactive maps for pickup and drop-off selection.",
    category: "Taxi & Transfers",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.uaetransfers.com/",
    image: imgUaeTransfers,
    publishedDate: "2026-06-10",
    readTime: "7 min read",
    techStack: ["React", "Redux", "Vite", "Shopify Storefront API", "Leaflet", "Google Maps", "WhatsApp Business API"],
    excerpt:
      "A transfer booking flow built around interactive maps for pickup and drop-off, on the same headless Shopify architecture as the rest of the company's travel portfolio.",
    sections: [
      {
        heading: "What UAE Transfers Does",
        paragraphs: [
          "UAE Transfers offers chauffeur-driven airport transfers and daily car bookings across Dubai, Abu Dhabi and the wider Emirates, positioned as a 24/7 premium transport service rather than a standard taxi-hailing app.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "Alongside the familiar React, Redux and Vite foundation used across the company's UAE travel sites, this build brings in interactive mapping  Leaflet and Google Maps  plus support for multiple payment options, reflecting the extra UI complexity of a location-based booking flow compared to a standard product catalog.",
          "That combination powers an interactive pickup and drop-off map for selecting transfer locations, with pricing calculated from the selected route  a meaningfully different UI problem than a simple product catalog, and the reason this build carries more mapping and payment tooling than its sibling sites.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "The commerce layer follows the same headless Shopify pattern as Excursions Dubai and Safaris UAE, with WhatsApp wired in for both general enquiries and specific service lines like daily bookings versus airport transfers  giving customers a quick way to confirm pickup details for a time-sensitive trip.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The map-based pickup selection and route pricing make this one of the more technically involved builds in the portfolio  solving a genuinely different problem, point-to-point transport, rather than reusing a product-catalog pattern wholesale.",
        ],
      },
    ],
  },
  {
    slug: "daisys-paws",
    title: "Daisy's Paws: A WhatsApp-First E-Commerce Storefront for a Pet Boutique",
    metaDescription:
      "The technology behind Daisy's Paws, a UK pet boutique storefront that pairs a Shopify-backed React catalog with a friendly WhatsApp order confirmation step.",
    category: "Pet Boutique",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.daisyspaws.com/",
    image: imgDaisysPaws,
    publishedDate: "2026-06-05",
    readTime: "6 min read",
    techStack: ["React", "React Router", "Vite", "Shopify Storefront API", "WhatsApp ordering"],
    excerpt:
      "A UK-based dog clothing and accessories boutique where a friendly WhatsApp conversation confirms the finer details of an order alongside the standard catalog.",
    sections: [
      {
        heading: "What Daisy's Paws Does",
        paragraphs: [
          "Daisy's Paws is a boutique e-commerce storefront selling premium dog clothing, harnesses, collars and accessories, based in Greater Manchester. It's a small, product-photography-led catalog rather than a mass-market pet supply store.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site is a React single-page application built with Vite and React Router, with product and cart data powered by Shopify's Storefront API  the same headless commerce pattern used across the company's other Shopify-backed builds. An on-site product search helps visitors find specific items quickly rather than relying purely on category browsing.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "What's distinctive here is the checkout experience: alongside the standard cart, a customer can complete their order through a guided WhatsApp conversation, giving the boutique's owner a chance to confirm sizing or stock details directly before the sale is finalized. It's a deliberate, personal touch well suited to a small boutique where that kind of confirmation adds real value for the customer.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "For a boutique-scale catalog, pairing Shopify's product and inventory tooling with a friendly WhatsApp confirmation step keeps the technical footprint lean while matching how a lot of small sellers already prefer to close a sale  in conversation, not through a faceless form.",
        ],
      },
    ],
  },
  {
    slug: "minibus-hire-london",
    title: "Minibus Hire London: The Flagship of a Multi-City Booking Network",
    metaDescription:
      "How Minibus Hire London was built as the flagship of a shared React frontend deployed across a growing network of UK minibus and coach hire brands.",
    category: "Vehicle Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.minibushirelondon.org/",
    image: imgMinibus,
    publishedDate: "2026-05-31",
    readTime: "8 min read",
    techStack: ["React", "Redux", "Vite", "react-helmet-async", "Leaflet", "Google Tag Manager"],
    excerpt:
      "The flagship site behind a growing network of UK city minibus hire brands, sharing one component library and booking flow across every market.",
    sections: [
      {
        heading: "What Minibus Hire London Does",
        paragraphs: [
          "Minibus Hire London books minibus and coach hire in London  8 to 72-seater vehicles with professional drivers for airport transfers, weddings, corporate events and day trips. It's the flagship of a much larger network: the same underlying platform powers minibus hire brands in several other UK cities.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site is a React single-page application built with Vite, using Redux for state and react-helmet-async to manage page titles and meta tags per route. A Leaflet-powered map component helps visualize coverage areas and pickup points, and Google Tag Manager centralizes analytics across the network from one place.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "This is the clearest example in the portfolio of a genuinely shared frontend architecture: one component library and booking flow, deployed repeatedly across UK cities with per-market branding, address data, and copy swapped in  turning a new city launch into a configuration and content exercise rather than a full rebuild.",
          "That config-driven, multi-tenant approach is what let the business expand into new UK markets quickly, reusing proven booking logic instead of building a new platform for every city.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "As the flagship of the network, this site set the pattern that let the business expand into new UK cities without rebuilding a booking platform from scratch each time  new markets became a matter of deploying the same platform with new branding and local details, exactly the efficiency a multi-tenant architecture is meant to deliver.",
        ],
      },
    ],
  },
  {
    slug: "tawaf-essentials",
    title: "Tawaf Essentials: An E-Commerce Site for Umrah Travelers",
    metaDescription:
      "The build behind Tawaf Essentials, a Shopify-backed React storefront selling Umrah essentials, with WhatsApp supporting order confirmation for a global audience.",
    category: "Umrah Essentials",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.tawafessentials.com/",
    image: imgTawaf,
    publishedDate: "2026-05-26",
    readTime: "6 min read",
    techStack: ["React", "Redux", "Vite", "Shopify Storefront API", "WhatsApp Business API"],
    excerpt:
      "A focused e-commerce build for pilgrimage travel essentials, where WhatsApp gives a global, mobile-first audience a familiar way to confirm and complete an order.",
    sections: [
      {
        heading: "What Tawaf Essentials Does",
        paragraphs: [
          "Tawaf Essentials sells Umrah and pilgrimage products  guides, Islamic e-books, prayer accessories and other essentials for a global, mostly mobile audience preparing for a pilgrimage.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "It's built on the same pattern as Excursions Dubai and Safaris UAE: a React and Redux single-page app built with Vite, with product data served from Shopify's Storefront API, and WhatsApp integrated directly into the purchase flow rather than layered on as a widget.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "What sets this build apart is how central WhatsApp is to the purchase experience  customers can complete a purchase and receive delivery confirmation through a WhatsApp conversation, which fits a pilgrimage audience that, across many regions, is more comfortable messaging than filling out card-payment forms.",
          "An on-site product search and multi-currency pricing support an international audience shopping from different countries ahead of their trip.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "For a digital-and-physical product mix aimed at a global pilgrimage audience, building WhatsApp in as a genuine part of the purchase path  not just a chat widget  is a considered fit for how this audience actually prefers to shop.",
        ],
      },
    ],
  },
  {
    slug: "compare-transport-uk",
    title: "Compare Transport UK: A Comparison Layer Across the Minibus Network",
    metaDescription:
      "How Compare Transport UK gives visitors a way to compare coach and minibus hire options across the UK, built on the same platform family as the city-specific brands.",
    category: "Transport Comparison",
    company: "Global Web Marketing LLC",
    siteUrl: "http://comparetransport.co.uk/",
    image: imgCompareTransport,
    publishedDate: "2026-05-21",
    readTime: "6 min read",
    techStack: ["React", "Vite", "Structured data (Organization, TravelAgency)"],
    excerpt:
      "A comparison-positioned front end sharing the same visual identity as the UK minibus network, focused on helping visitors weigh operators side by side.",
    sections: [
      {
        heading: "What Compare Transport UK Does",
        paragraphs: [
          "Compare Transport helps visitors compare coach and minibus hire prices across the UK for events, airport transfers and school trips  a comparison-first entry point into the same network of vehicle-hire brands built by the company.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site is a React single-page application built with Vite, sharing the same visual identity  color palette, map integration, and typography  as the rest of the minibus hire network. It carries rich structured data (Organization, TravelAgency and WebSite schema with a defined search action), giving it strong footing for search visibility as a comparison destination.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "As a comparison-focused property rather than a single-fleet operator site, this build is intentionally leaner than the city-specific brands  a streamlined, single-bundle frontend suited to a page that's more about presenting options clearly than running a full per-city booking flow.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Sitting alongside the city-specific minibus brands, this comparison layer gives visitors a way to see multiple options in one place before choosing where to book  a useful complement to the network rather than a competing product.",
        ],
      },
    ],
  },
  {
    slug: "jetset-visas-app",
    title: "Jetset Visas App: Extending Visa Services Into a Dedicated Application",
    metaDescription:
      "How the Jetset Visas App extends the core Jetset Visas platform into a dedicated dashboard experience for tracking and managing visa applications.",
    category: "Visa App",
    company: "Global Web Marketing LLC",
    siteUrl: "https://app.jetsetvisas.ae/",
    image: imgJetsetApp,
    publishedDate: "2026-05-16",
    readTime: "6 min read",
    techStack: ["React", "Redux", "Vite", "Application dashboard"],
    excerpt:
      "A dedicated application layer giving customers a dashboard view of visa applications in progress, kept separate from the main marketing site.",
    sections: [
      {
        heading: "What Jetset Visas App Does",
        paragraphs: [
          "This subdomain hosts a dedicated application and dashboard experience for Jetset Visas customers  tracking status, managing documents, and following an application through to completion  kept separate from the marketing site so each can be optimized for its own job.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "Built on the same React, Redux and Vite foundation as the rest of the company's travel platforms, this application layer is tuned for a returning, logged-in user rather than a first-time visitor  prioritizing clarity of status and next steps over marketing content.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Splitting the application experience onto its own subdomain keeps the marketing site fast and focused on conversion, while the app itself can be built around authentication, document status, and progress tracking  a genuinely different data model from the tour and rental sites in the same group.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "By separating the application dashboard from the marketing funnel, customers get a clear, focused place to track a visa application from submission through to approval, without that experience competing for space with sales content.",
        ],
      },
    ],
  },
  {
    slug: "abc-minibuses-edinburgh",
    title: "ABC Minibuses Edinburgh: Localizing a Shared Booking Platform for Scotland",
    metaDescription:
      "How ABC Minibuses Edinburgh was launched from the shared, config-driven React minibus hire platform used across the UK.",
    category: "Minibus Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.abcminibusesedinburgh.co.uk/",
    publishedDate: "2026-05-11",
    readTime: "5 min read",
    techStack: ["React", "Redux", "Vite", "react-helmet-async", "Google Tag Manager"],
    excerpt:
      "One of the city-specific brands launched from the shared minibus hire platform, configured for Edinburgh routes, pricing, and branding.",
    sections: [
      {
        heading: "What ABC Minibuses Edinburgh Does",
        paragraphs: [
          "ABC Minibuses Edinburgh offers minibus and coach hire for Edinburgh and the surrounding area  the same vehicle range and use cases as the rest of the network, positioned for a Scottish audience.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "It shares the same platform as Minibus Hire London and the rest of the network: a React and Redux single-page app built with Vite, react-helmet-async for per-page titles and meta tags, shared analytics tooling, and the same map integration for pickup and coverage visualization.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "This is a config-driven launch on the shared platform: rather than building a new booking system for Edinburgh, the existing component library and booking flow were redeployed with local branding, contact details, and address data configured for this market.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "As one of several cities built on the shared platform, this site shows how quickly a proven booking system can be brought into a new UK region without rebuilding the underlying technology.",
        ],
      },
    ],
  },
  {
    slug: "minibuses-manchester",
    title: "Minibuses Manchester: Extending the Network to Greater Manchester",
    metaDescription:
      "How Minibuses Manchester was launched as a configuration of the shared React minibus hire platform used across the company's UK network.",
    category: "Minibus Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.minibusesmanchester.co.uk/",
    publishedDate: "2026-05-06",
    readTime: "5 min read",
    techStack: ["React", "Redux", "Vite", "react-helmet-async", "Google Tag Manager"],
    excerpt:
      "Manchester's entry in the multi-city minibus hire network, built from the same shared component library as the rest of the platform.",
    sections: [
      {
        heading: "What Minibuses Manchester Does",
        paragraphs: [
          "Minibuses Manchester offers minibus and coach hire for Greater Manchester, serving airport transfers, corporate travel, weddings and day trips from a local base.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "This is the same shared platform as the rest of the network: a React and Redux single-page app built with Vite, react-helmet-async for page-level SEO tags, and centralized analytics tooling shared across every city brand.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Address and local business details for this deployment are configured specifically for Manchester through the platform's config-driven branding layer  the same underlying booking engine, presented with local details relevant to this market.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Manchester adds another market to a platform built specifically to make city-by-city expansion fast, without changing the core booking technology.",
        ],
      },
    ],
  },
  {
    slug: "minibuses-glasgow",
    title: "Minibuses Glasgow: Scaling the Booking Network North of the Border",
    metaDescription:
      "How Minibuses Glasgow fits into the shared React minibus hire platform powering multiple UK city brands.",
    category: "Minibus Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "http://minibusesglasgow.co.uk/",
    publishedDate: "2026-05-01",
    readTime: "5 min read",
    techStack: ["React", "Redux", "Vite", "react-helmet-async", "Google Tag Manager"],
    excerpt:
      "Glasgow's branch of the shared minibus hire platform, reusing the same booking flow and design system with local routes and pricing.",
    sections: [
      {
        heading: "What Minibuses Glasgow Does",
        paragraphs: [
          "Minibuses Glasgow offers minibus and coach hire with professional drivers for airport transfers, weddings, corporate events and Scottish tours from a central Glasgow base.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "Same shared platform: a React and Redux single-page app built with Vite, react-helmet-async, centralized analytics, and the same map integration used across every city site in the network.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Glasgow's structured data and local content are fully configured for this market  Scottish tour messaging, local address details, and relevant use cases  layered onto the same booking engine shared across the network.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Glasgow is a clean example of the platform's core value: a new UK market brought online through configuration and content, not a rebuild.",
        ],
      },
    ],
  },
  {
    slug: "minibuses-liverpool",
    title: "Minibuses Liverpool: The Same Platform, a New Market",
    metaDescription:
      "How Minibuses Liverpool was brought online using the shared React minibus hire platform architecture used across the UK network.",
    category: "Minibus Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://minibusesliverpool.co.uk/",
    publishedDate: "2026-04-26",
    readTime: "5 min read",
    techStack: ["React", "Redux", "Vite", "react-helmet-async", "Google Tag Manager"],
    excerpt:
      "Liverpool's minibus hire brand, launched from the shared platform with routes and messaging tuned to local demand, including football and race-day travel.",
    sections: [
      {
        heading: "What Minibuses Liverpool Does",
        paragraphs: [
          "Minibuses Liverpool provides minibus and coach hire from a central base, positioned around airport transfers, football and Aintree race-day transport, corporate events and UK tours.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "Same confirmed platform as the rest of the network: a React and Redux single-page app built with Vite, react-helmet-async, shared analytics, and map-based coverage visualization.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Liverpool's local content  address, messaging around football and race-day travel demand  is configured on top of the same shared component library used across the network, deployed consistently alongside the other city brands.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Liverpool is a clean example of the platform doing exactly what a config-driven, multi-tenant architecture is meant to do: another market, one shared build.",
        ],
      },
    ],
  },
  {
    slug: "minibuses-birmingham",
    title: "Minibuses Birmingham: Extending the Network to the Midlands",
    metaDescription:
      "How Minibuses Birmingham was configured on the shared React minibus hire platform used across the UK network.",
    category: "Minibus Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://minibusesbirmingham.co.uk/",
    publishedDate: "2026-04-21",
    readTime: "5 min read",
    techStack: ["React", "Redux", "Vite", "react-helmet-async", "Google Tag Manager"],
    excerpt:
      "Birmingham's presence in the minibus hire network, sharing the same booking core as the rest of the platform, tuned for local demand.",
    sections: [
      {
        heading: "What Minibuses Birmingham Does",
        paragraphs: [
          "Minibuses Birmingham serves the Midlands with copy tuned to local use cases  football transport and popular day-trip destinations alongside the standard airport-transfer and corporate-travel offering shared across the network.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "Same platform as the rest of the network: a React and Redux single-page app built with Vite, react-helmet-async, and shared analytics tooling.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Birmingham's structured data and local content are configured specifically for the Midlands market, layered onto the same booking engine and design system used across the rest of the network.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Birmingham adds another data point to a well-proven pattern: one shared platform, deployed city by city, with local branding and copy as the market-specific layer.",
        ],
      },
    ],
  },
  {
    slug: "minibuses-cardiff",
    title: "Minibuses Cardiff: Bringing the Booking Platform to Wales",
    metaDescription:
      "How Minibuses Cardiff was launched on the shared React minibus hire platform used across the UK network.",
    category: "Minibus Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://minibusescardiff.co.uk/",
    publishedDate: "2026-04-16",
    readTime: "5 min read",
    techStack: ["React", "Redux", "Vite", "react-helmet-async", "Google Tag Manager"],
    excerpt:
      "Cardiff's minibus hire brand, another configuration of the same shared frontend, positioned around match-day and event transfer demand.",
    sections: [
      {
        heading: "What Minibuses Cardiff Does",
        paragraphs: [
          "Minibuses Cardiff serves Cardiff and the surrounding area, with messaging tuned toward match-day transfers, corporate events, city tours and UK-wide group travel.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "Same platform as the rest of the network again: a React and Redux single-page app built with Vite, react-helmet-async, and shared analytics tooling.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Cardiff's local content is configured to its own market  a low-cost way to make a shared platform feel locally relevant without touching the underlying booking logic at all.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Cardiff demonstrates the platform's core value proposition once more: a new UK market, launched without rebuilding the booking engine itself.",
        ],
      },
    ],
  },
  {
    slug: "minibus-leeds",
    title: "Minibus Leeds: Another Node in the Shared Platform",
    metaDescription:
      "How Minibus Leeds was built from the shared React minibus hire platform used across the company's UK network.",
    category: "Minibus Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.minibusleeds.com/",
    publishedDate: "2026-04-11",
    readTime: "5 min read",
    techStack: ["React", "Redux", "Vite", "react-helmet-async", "Google Tag Manager"],
    excerpt:
      "Leeds' minibus hire site, launched from the shared platform used for the rest of the UK city network.",
    sections: [
      {
        heading: "What Minibus Leeds Does",
        paragraphs: [
          "Minibus Leeds serves the city with the standard range of vehicles and use cases shared across the network  airport transfers, corporate events, weddings and school excursions.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "Same confirmed platform: a React and Redux single-page app built with Vite, react-helmet-async for page-level SEO metadata, and shared analytics tooling across the network.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Leeds' local content and structured data are configured for this market, consistent with how every other city in the network is brought online through the shared platform.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "With Leeds, the platform continues to prove its value: rolling a proven booking system out to a new market is a configuration exercise, not a rebuild.",
        ],
      },
    ],
  },
  {
    slug: "cheap-minibus",
    title: "Cheap Minibus: A Value Brand Built on the Same Shared Platform",
    metaDescription:
      "How Cheap Minibus was positioned as a value-focused brand within the shared React minibus hire platform, with a fully featured booking form and multiple payment options.",
    category: "Minibus Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.cheapminibus.co.uk/",
    publishedDate: "2026-04-06",
    readTime: "6 min read",
    techStack: ["React", "Redux", "Vite", "Tailwind CSS", "Google Tag Manager"],
    excerpt:
      "A budget-positioned brand built on the same shared minibus hire platform, with a full multi-step booking form and a wide range of payment options.",
    sections: [
      {
        heading: "What Cheap Minibus Does",
        paragraphs: [
          "Cheap Minibus positions itself around price  advertising a large fleet up to 72 passengers, covering airport transfers, corporate and conference travel, weddings and events UK-wide.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "This site shares its core platform with Minibus Hire London, styled with Tailwind CSS and using the same Google Tag Manager setup as the rest of the network. A full multi-step booking form covers location selection, date and time, contact details, and a one-way or return journey toggle.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "The site supports a wide range of payment methods, including major cards and popular digital wallets  giving visitors flexibility at checkout. A WhatsApp contact option sits alongside the booking form for anyone who'd rather confirm details in conversation before booking.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "As a value-positioned brand on the same shared platform, this site shows how far one component library can stretch across different price tiers and audiences without losing a fully featured booking experience.",
        ],
      },
    ],
  },
  {
    slug: "gb-coach-hire",
    title: "GB Coach Hire: Widening the Network From Minibuses to Coaches",
    metaDescription:
      "How GB Coach Hire extends the company's vehicle-hire portfolio from minibuses into larger coach hire bookings, built on a modern Next.js foundation.",
    category: "Coach Hire",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.gbcoachhire.com/",
    publishedDate: "2026-04-01",
    readTime: "6 min read",
    techStack: ["Next.js", "Turbopack", "Tailwind CSS"],
    excerpt:
      "A larger-vehicle counterpart to the minibus network, built on a modern Next.js and Turbopack foundation to support UK, European and worldwide coach hire.",
    sections: [
      {
        heading: "What GB Coach Hire Does",
        paragraphs: [
          "GB Coach Hire books minibuses, coaches and buses with professional drivers for UK, European and worldwide group travel  a broader vehicle range and geographic scope than the city-specific minibus sites in the same portfolio.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "This site is built on Next.js, bundled with Turbopack for fast builds, and styled with Tailwind CSS using a distinct navy-and-gold brand identity. Content is server-rendered, giving fast, fully populated page loads well suited to a site competing for broader, higher-volume search terms across multiple countries.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Extending into larger vehicle categories and a wider geographic scope was a good opportunity to build on a modern, server-rendered foundation  well suited to the deeper content and broader search footprint that international coach hire demands. A structured quote form captures passenger count, pickup and destination, timing, and vehicle preference in one step.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "GB Coach Hire shows how the same business can grow beyond its original platform when the product itself grows  investing in a modern stack to support a bigger vehicle range and a wider international audience.",
        ],
      },
    ],
  },
  {
    slug: "sell-my-business-ae",
    title: "Sell My Business AE: Using Shopify as a Headless CMS for Business Listings",
    metaDescription:
      "How Sell My Business AE repurposes Shopify's product model as a listings backend for a UAE business-for-sale marketplace, built on a modern React frontend.",
    category: "Business Marketplace",
    company: "Global Web Marketing LLC",
    siteUrl: "https://sellmybusiness.ae/",
    publishedDate: "2026-03-27",
    readTime: "7 min read",
    techStack: ["React", "React Router", "Vite", "Shopify Storefront API", "WhatsApp"],
    excerpt:
      "A UAE business-for-sale marketplace that repurposes Shopify's product catalog as a headless listings backend, with a review-queue moderation flow for submissions.",
    sections: [
      {
        heading: "What Sell My Business AE Does",
        paragraphs: [
          "Sell My Business AE is a marketplace connecting buyers and sellers of businesses across Dubai, Abu Dhabi and the wider UAE  browsing verified listings, submitting a business for sale, and reaching out about a listing.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The frontend is a React single-page app using React Router for its listings, listing-detail, and submission pages, built with a modern Vite-based tooling setup. Shopify's Storefront API is used here in a creative way  as a flexible, hosted backend for listing data, with each business-for-sale listing modeled as a product and tags used for filtering and categorization.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "That's a clever reuse of infrastructure: rather than standing up a separate database and admin panel for listings, Shopify's product model  with its built-in tagging, image handling, and API  does the job of a lightweight content management system. It's the same Shopify Storefront API experience applied to a completely different problem than tour bookings or product sales.",
          "A listing submission flow includes a review step before a new listing goes live, and a WhatsApp contact option supports quick enquiries between interested buyers and the platform.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "This is one of the more interesting architectural choices in the portfolio: proof that a headless Shopify integration doesn't have to mean e-commerce at all  it can just as easily power a listings marketplace, as long as the product and tagging model is bent to fit the domain.",
        ],
      },
    ],
  },
  {
    slug: "compare-movers-ae",
    title: "Compare Movers AE: Connecting Movers and Customers in the UAE",
    metaDescription:
      "The build behind Compare Movers AE, a UAE moving company comparison and lead-generation site designed to turn enquiries into qualified quotes quickly.",
    category: "Movers Comparison",
    company: "Global Web Marketing LLC",
    siteUrl: "https://comparemovers.ae/",
    publishedDate: "2026-03-22",
    readTime: "5 min read",
    techStack: ["React", "Vite", "Quote request forms"],
    excerpt:
      "A comparison and quote-request platform for movers in the UAE, designed to convert visitors into qualified leads quickly.",
    sections: [
      {
        heading: "What Compare Movers AE Does",
        paragraphs: [
          "Compare Movers AE connects customers in the UAE with moving companies  capturing a move date, origin and destination, and property size, then routing that enquiry to relevant movers for quotes.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site follows the same React and Vite foundation used across the company's UAE comparison sites, built around a quote-request form rather than a full booking or checkout flow.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "The core of the experience is a short, well-structured lead form  enough detail to route an enquiry to the right movers, without so many fields that visitors drop off before submitting. That balance matters most for a lead-generation product, where the form itself is the conversion event.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "As a comparison and quote-request platform, this site fits the same family as Compare Transport UK and Compare Flights AE  a focused, lead-capture-first design built around getting a visitor's request in front of the right provider fast.",
        ],
      },
    ],
  },
  {
    slug: "franks-handyman",
    title: "Franks Handyman Services: A Local Services Site Built for Enquiries",
    metaDescription:
      "How Franks Handyman Services was built as a local services website in the UK, focused on service listings and turning visitors into booked call-outs.",
    category: "Handyman Services",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.frankhandyman.co.uk/",
    image: imgFranksHandyman,
    publishedDate: "2026-03-17",
    readTime: "5 min read",
    techStack: ["React", "Vite", "Service listings", "Enquiry forms"],
    excerpt:
      "A straightforward local services site built to turn visitors into booked call-outs, with service pages structured for local search.",
    sections: [
      {
        heading: "What Franks Handyman Services Does",
        paragraphs: [
          "Franks Handyman Services is a UK local services site, built to turn organic and local search traffic into booked call-outs for handyman work.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site is a React frontend built with Vite, structured around a small number of service category pages and a simple enquiry form  a lightweight, fast-loading build well suited to a local trade business.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Each service is given its own page with content structured for local search intent, paired with clear calls to action and contact details throughout. Keeping the build simple and focused means the site loads quickly and gets straight to the point for a visitor who's usually looking to book a job, not browse.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "For a single-operator local trade business, a fast, focused site built around service pages and a clear enquiry path does exactly what's needed  turning local search visibility into booked jobs.",
        ],
      },
    ],
  },
  {
    slug: "smp-nationwide",
    title: "SMP Nationwide: A Booking Site for Scalp Micropigmentation Clinics",
    metaDescription:
      "The technology behind SMP Nationwide, a UK-wide scalp micropigmentation clinic directory and booking site built around a large-scale local search strategy.",
    category: "Scalp Micropigmentation",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.smpnationwide.co.uk/",
    image: imgSmpNationwide,
    publishedDate: "2026-03-12",
    readTime: "6 min read",
    techStack: ["React", "Vite", "Clinic directory", "WhatsApp"],
    excerpt:
      "A directory-and-booking hybrid connecting customers across the UK to scalp micropigmentation clinics, built around a large-scale location-page structure for local search.",
    sections: [
      {
        heading: "What SMP Nationwide Does",
        paragraphs: [
          "SMP Nationwide is a UK-wide provider of Scalp Micro Pigmentation  a non-surgical cosmetic hairline and hair-tattoo treatment  operating through a network of clinic locations. The site's messaging leans into transformation and confidence, fitting a cosmetic-treatment audience.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The frontend is built in React with Vite, with WhatsApp wired in as a direct contact channel alongside standard phone and email links.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "The standout structural feature is scale: over 100 individual clinic location pages are linked from the site, giving it broad local-search coverage across the UK. That's a genuinely different content-architecture problem than most of the other sites in this portfolio  less about a single booking flow, more about programmatic local-SEO coverage across a large number of towns and cities, all funneling toward the same consultation-booking call to action.",
          "Trust signals  before/after galleries, review badges, and an FAQ section  support the \"Book Free Consultation\" call to action that runs throughout the site.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "The content strategy here is clear and effective: over 100 location pages built to capture local search intent nationwide, all funneling every visitor toward the same free-consultation booking action regardless of which city brought them in.",
        ],
      },
    ],
  },
  {
    slug: "maldives-hotel-reviews",
    title: "Maldives Hotel Reviews: A Content Platform for Resort Research",
    metaDescription:
      "How Maldives Hotel Reviews was built as a content and guide platform to help travelers research Maldives resorts across different atolls and price points.",
    category: "Hotel Reviews",
    company: "Global Web Marketing LLC",
    siteUrl: "https://www.maldiveshotelreviews.com/",
    image: imgMaldivesHotelReviews,
    publishedDate: "2026-03-07",
    readTime: "6 min read",
    techStack: ["React", "Vite", "Editorial content", "Search widget"],
    excerpt:
      "A content-first Maldives resort guide, built around atoll-based browsing and editorial reviews to help travelers research resorts before booking.",
    sections: [
      {
        heading: "What Maldives Hotel Reviews Does",
        paragraphs: [
          "Maldives Hotel Reviews is an editorial-style travel guide offering resort and hotel reviews, atoll-based browsing, and comparison tools aimed at travelers researching Maldives resorts before booking.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site is a React frontend built with Vite, with a search widget for location, dates and guest count, and a newsletter signup supporting the content-first strategy.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "Featured resort listings are organized by atoll and category  top-rated, best for families, and similar groupings  with star ratings and editorial summaries giving visitors a fast way to shortlist options before diving into a full review. That structure is built to serve research-stage travelers who are comparing resorts across regions rather than ready to book a specific one immediately.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "As a content-first platform, this site is built to rank for research-stage Maldives travel searches and guide readers through resort discovery, with atoll-based browsing and editorial reviews doing the work that a pure booking engine wouldn't.",
        ],
      },
    ],
  },
  {
    slug: "total-property-ae",
    title: "Total Property AE: A Next.js Listings Site for Abu Dhabi Office Space",
    metaDescription:
      "How Total Property AE was built on Next.js and Tailwind CSS to market private, serviced, coworking and virtual office space across Abu Dhabi.",
    category: "Real Estate",
    company: "Global Web Marketing LLC",
    siteUrl: "https://totalproperty.ae/",
    publishedDate: "2026-03-02",
    readTime: "6 min read",
    techStack: ["Next.js", "Tailwind CSS", "WhatsApp"],
    excerpt:
      "An enquiry-focused site marketing private, serviced, coworking and virtual office space across Abu Dhabi business centres, built on Next.js and Tailwind CSS.",
    sections: [
      {
        heading: "What Total Property AE Does",
        paragraphs: [
          "This site markets private office space, serviced offices, coworking desks and virtual offices across Abu Dhabi business centres, helping businesses find the right type of workspace for their needs.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "The site is built on Next.js with server-side rendering, styled with Tailwind CSS. Server rendering keeps pages fast and fully indexable  a good fit for a business that relies heavily on organic and local search to reach companies looking for office space.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "The core of the site is a guided enquiry form  office type and preferred location selectors paired with a free-text field for team size, start date and budget  designed to gather enough detail for a useful first conversation. WhatsApp is offered as a quicker alternative for visitors who'd rather ask a question directly than fill out a form.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "As a Next.js-rendered enquiry site rather than a Shopify-backed storefront, this build reflects a sensible stack choice for the problem: office-space leasing is a lead-generation business, so a fast, SEO-friendly rendered page paired with a strong enquiry form and WhatsApp channel does the job well.",
        ],
      },
    ],
  },
  {
    slug: "office-broker-ae",
    title: "Office Broker AE: Commercial Space Listings for the UAE",
    metaDescription:
      "How Office Broker AE was built on Next.js and Tailwind CSS to help businesses find and enquire about commercial office space across Abu Dhabi.",
    category: "Office Space Broker",
    company: "Global Web Marketing LLC",
    siteUrl: "https://officebroker.ae/",
    publishedDate: "2026-02-25",
    readTime: "6 min read",
    techStack: ["Next.js", "Tailwind CSS", "reCAPTCHA", "WhatsApp"],
    excerpt:
      "A commercial real estate directory connecting businesses to office space across Abu Dhabi, built on Next.js with pricing shown directly on-page.",
    sections: [
      {
        heading: "What Office Broker AE Does",
        paragraphs: [
          "Office Broker AE is a directory-style marketplace listing coworking desks, private offices, virtual offices and meeting rooms across multiple buildings and neighborhoods in Abu Dhabi.",
        ],
      },
      {
        heading: "The Tech Stack",
        paragraphs: [
          "This is a Next.js build styled with Tailwind CSS, with reCAPTCHA protecting the contact and call-back forms from spam submissions.",
        ],
      },
      {
        heading: "How It Was Built",
        paragraphs: [
          "The site is structured as a browsable directory  featured buildings, links into dozens of neighborhoods, and a resource hub of guide articles supporting search visibility. Pricing is shown directly on-page, reducing friction for a visitor comparing options before making contact, alongside a simple call-back form and a prominent phone CTA.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "As a companion product to Total Property AE, this site takes a broader, directory-first approach to the same Abu Dhabi office-space market  giving businesses more ways to browse and compare before reaching out.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
