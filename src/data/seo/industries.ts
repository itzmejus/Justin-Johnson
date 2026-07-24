import type { SeoPage } from "./types";

export const industryPages: SeoPage[] = [
  {
    slug: "web-development-for-real-estate",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for real estate companies",
    secondaryKeywords: ["real estate website developer", "property listing website", "real estate portal development", "property search website"],
    searchIntent: "commercial",
    title: "Web Development for Real Estate Companies | Justin Johnson",
    description: "Real estate websites with property search, listing management, and lead capture built around how agencies actually work.",
    h1: "Web Development for Real Estate Companies",
    eyebrow: "Industries",
    intro: [
      "Real estate sites live or die on their search and listing experience — filters that actually match how buyers narrow down properties, listing pages with the details that matter (floor plans, area breakdowns, nearby amenities), and a lead capture flow that gets an interested visitor talking to an agent quickly.",
      "I build these as custom applications rather than generic real estate WordPress themes, so the listing data model matches your actual inventory and workflow.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Property search with filters that match real buyer criteria (price, area, bedrooms, amenities)",
              "Listing pages with maps, image galleries, and floor plans",
              "Lead capture tied to specific listings, routed to the right agent",
              "Agent or agency profile pages",
              "Admin interface for managing listings without developer involvement",
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
              "Real estate agencies and brokerages that need more control over their listing experience than a generic portal template gives, and property developers who need a dedicated site for a specific project or development.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can this integrate with an existing property management system?",
        answer: "Yes, where the system has an API or feed format (like an IDX feed) — listings can be synced automatically rather than entered twice.",
      },
      {
        question: "Do you build the search and filtering from scratch?",
        answer: "Yes, matched to how your buyers actually search — generic filters don't always match the specific criteria that matter for a given market or property type.",
      },
      {
        question: "Can agents manage their own listings?",
        answer: "Yes, through a role-based admin interface, with permissions scoped to their own listings versus full agency access as needed.",
      },
    ],
    relatedSlugs: ["industries/crm-development-for-real-estate", "services/api-development-integration", "resources/local-seo-website-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "crm-development-for-real-estate",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "CRM development for real estate",
    secondaryKeywords: ["real estate CRM developer", "property lead management system", "custom real estate CRM", "agent CRM software"],
    searchIntent: "commercial",
    title: "CRM Development for Real Estate | Justin Johnson",
    description: "A CRM built around how real estate leads actually move — property interest, viewings, offers, and closing.",
    h1: "CRM Development for Real Estate",
    eyebrow: "Industries",
    intro: [
      "Real estate leads don't move through a generic sales pipeline — they're tied to specific properties, involve viewings that need scheduling, and often stay in consideration for months before a decision. A CRM built for this specifically tracks lead interest per property, not just as a generic contact record.",
      "This builds on the general CRM development service, with a data model and pipeline stages specific to property sales or leasing.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Lead records tied to specific property interest, not just a generic contact card",
              "Viewing scheduling and follow-up tracking",
              "Pipeline stages matched to a property sales or leasing process",
              "Agent assignment and performance tracking",
              "Integration with the listing website so inbound leads land directly in the CRM",
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
              "Agencies managing enough leads and listings that spreadsheets or a generic CRM template no longer reflect the actual sales process, and brokerages that want lead activity tied directly to their listing website rather than a disconnected tool.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can it track which properties a lead is interested in?",
        answer: "Yes — leads are linked to specific property records, so an agent can see interest history across multiple listings for the same contact rather than a flat, undifferentiated contact list.",
      },
      {
        question: "Does it integrate with our listing site?",
        answer: "Yes — inbound inquiries from the listing site route directly into the CRM, tied to the specific property that generated the interest.",
      },
      {
        question: "Can it schedule property viewings?",
        answer: "Yes, with availability checked against agent calendars and confirmation sent automatically to both the agent and the prospective buyer or tenant.",
      },
    ],
    relatedSlugs: ["services/crm-development-services", "industries/web-development-for-real-estate", "solutions/ai-lead-generation-systems", "solutions/ai-powered-crm-solutions"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-restaurants",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for restaurants",
    secondaryKeywords: ["restaurant website developer", "restaurant menu website", "restaurant reservation system", "restaurant website design"],
    searchIntent: "commercial",
    title: "Web Development for Restaurants | Justin Johnson",
    description: "Restaurant websites with a menu that's easy to update, reservations, and online ordering — fast on mobile, where most visits happen.",
    h1: "Web Development for Restaurants",
    eyebrow: "Industries",
    intro: [
      "Most restaurant site visits are on a phone, from someone deciding whether to go — the menu, hours, and location need to load fast and be easy to read without pinch-zooming. Reservations and ordering, where relevant, need to work without friction on a small screen.",
      "I build these to be genuinely easy for restaurant staff to update — menu changes, hours, specials — without needing a developer for routine edits.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Fast-loading, mobile-first design",
              "Menu management that staff can update without touching code",
              "Reservation booking, if the restaurant takes them",
              "Location, hours, and contact information structured for local search",
              "Integration with online ordering if applicable",
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
              "Independent restaurants and small groups that need a fast, easy-to-maintain site distinct from a generic listing-platform page, especially where [local search visibility](resources/local-seo-website-development) (being found by nearby, hungry searchers) matters directly to foot traffic.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can staff update the menu themselves?",
        answer: "Yes — the menu is built as manageable content rather than hardcoded into the page, so price and item changes don't require a developer.",
      },
      {
        question: "Do you handle online ordering?",
        answer: "Yes, either integrated custom ordering or a connection to an existing ordering platform, depending on what fits the restaurant's operations.",
      },
      {
        question: "How important is mobile speed for a restaurant site?",
        answer: "Very — most restaurant searches happen on mobile, often from someone nearby deciding in the moment, so a slow-loading menu page directly costs potential visits.",
      },
    ],
    relatedSlugs: ["industries/online-ordering-systems-for-restaurants", "industries/appointment-booking-systems", "resources/local-seo-website-development", "services/ecommerce-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "online-ordering-systems-for-restaurants",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "online ordering systems for restaurants",
    secondaryKeywords: ["custom food ordering website", "restaurant delivery ordering system", "WhatsApp restaurant ordering", "commission-free restaurant ordering"],
    searchIntent: "commercial",
    title: "Online Ordering Systems for Restaurants | Justin Johnson",
    description: "A custom ordering system that skips third-party delivery app commissions, with WhatsApp or standard checkout paths.",
    h1: "Online Ordering Systems for Restaurants",
    eyebrow: "Industries",
    intro: [
      "Third-party delivery apps take a meaningful commission on every order, which adds up fast for a restaurant doing real volume. A custom ordering system on the restaurant's own site keeps that revenue, at the cost of building and maintaining the ordering flow directly.",
      "I've built this pattern using Shopify's Storefront API as the commerce backend with a custom frontend, plus a WhatsApp ordering path as an alternative to standard checkout for restaurants where customers prefer confirming orders directly.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Menu with modifiers and options (sizes, add-ons, special requests)",
              "Cart and checkout, or WhatsApp ordering as an alternative path",
              "Order status tracking for the customer",
              "Kitchen-facing order notifications",
              "Delivery zone and fee configuration if the restaurant delivers directly",
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
              "Restaurants with enough consistent order volume that third-party delivery commissions are a real, ongoing cost, and restaurants that want more control over the ordering experience and direct customer relationship than a delivery marketplace app allows.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does this replace delivery apps entirely?",
        answer: "Not necessarily — many restaurants run both, using the custom system for direct orders (often at better margin) while still listing on delivery apps for their additional reach and delivery logistics.",
      },
      {
        question: "How does WhatsApp ordering work?",
        answer: "Customers build an order on the site, which generates a pre-filled WhatsApp message summarizing the order for the restaurant to confirm directly — useful when customers want to clarify special requests before the order is finalized.",
      },
      {
        question: "Do you handle delivery logistics too?",
        answer: "The ordering and payment side, yes — actual delivery logistics (driver dispatch, routing) typically stay with the restaurant's existing delivery staff or a separate logistics integration, depending on scale.",
      },
    ],
    relatedSlugs: ["industries/web-development-for-restaurants", "services/ecommerce-development", "technologies/stripe-payment-integration"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-dental-clinics",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for dental clinics",
    secondaryKeywords: ["dental practice website developer", "dentist website design", "dental clinic booking website", "dental website SEO"],
    searchIntent: "commercial",
    title: "Web Development for Dental Clinics | Justin Johnson",
    description: "Dental clinic websites with online booking, service pages, and local SEO built for patients actively searching for care.",
    h1: "Web Development for Dental Clinics",
    eyebrow: "Industries",
    intro: [
      "Most new dental patients search locally with clear intent — a specific problem, a specific procedure, a specific area. A clinic site that has dedicated pages for its actual services (rather than one vague 'services' list) and makes booking genuinely easy converts more of that search traffic into booked appointments.",
      "This covers the site itself and the booking flow, built around how patients actually decide and schedule care.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Service pages for individual treatments, structured for local search",
              "Online appointment booking with real-time availability",
              "New patient intake forms",
              "Practitioner profile pages",
              "Location and hours structured for local search visibility",
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
              "Dental practices relying on generic directory listings or an outdated site that doesn't reflect their actual services, and multi-practitioner clinics that need booking tied to specific dentists or specialties.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can patients book appointments online directly?",
        answer: "Yes — real-time availability tied to your actual scheduling system, so bookings don't create conflicts with the front desk's calendar.",
      },
      {
        question: "Do you build separate pages per treatment?",
        answer: "Yes, where it makes sense for the practice's services — dedicated pages for distinct treatments perform better in local search than a single generic services page covering everything briefly.",
      },
      {
        question: "Is patient data handled securely?",
        answer: "Intake forms and any stored patient information are handled over encrypted connections with access controls appropriate to healthcare data; specific compliance requirements (like HIPAA in the US) should be scoped explicitly based on your jurisdiction.",
      },
    ],
    relatedSlugs: ["industries/web-development-for-healthcare-clinics", "industries/appointment-booking-systems", "resources/local-seo-website-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-healthcare-clinics",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for healthcare clinics",
    secondaryKeywords: ["medical clinic website developer", "healthcare website development", "clinic booking system", "medical practice website"],
    searchIntent: "commercial",
    title: "Web Development for Healthcare Clinics | Justin Johnson",
    description: "Healthcare clinic websites with appointment booking, provider profiles, and service information built for patient trust and speed.",
    h1: "Web Development for Healthcare Clinics",
    eyebrow: "Industries",
    intro: [
      "A healthcare clinic's site is often the first real interaction a prospective patient has with the practice — clear information about services and providers, an easy booking path, and a site that loads fast and works well on mobile all factor into whether that visitor becomes a patient.",
      "I build these with attention to accurate, specific service information and a booking flow that reduces friction, since a confusing or slow booking process is a direct loss of a patient who was ready to schedule.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Service and specialty pages with accurate, specific information",
              "Provider profile pages with credentials and specialties",
              "Online appointment booking tied to real scheduling availability",
              "Patient intake and pre-visit forms",
              "Multi-location support for clinics with several branches",
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
              "Clinics and multi-provider practices whose current site doesn't reflect the range of services offered, or that rely on phone-only booking despite patients increasingly preferring to book online.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can the site support multiple providers and specialties?",
        answer: "Yes — provider profiles and service pages can be structured to reflect a multi-provider practice, with booking tied to the specific provider and specialty a patient needs.",
      },
      {
        question: "How is patient data protected?",
        answer: "Through encrypted connections, access controls, and secure form handling; specific regulatory requirements depend on your jurisdiction and should be scoped explicitly as part of the project rather than assumed.",
      },
      {
        question: "Do you handle multi-location clinics?",
        answer: "Yes, with location-specific pages for hours, providers, and services at each branch, tied together under a shared clinic brand.",
      },
    ],
    relatedSlugs: ["industries/web-development-for-dental-clinics", "industries/appointment-booking-systems", "resources/website-accessibility-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "appointment-booking-systems",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "appointment booking systems",
    secondaryKeywords: ["online booking system developer", "custom appointment scheduler", "booking calendar integration", "real-time booking system"],
    searchIntent: "commercial",
    title: "Appointment Booking Systems | Justin Johnson",
    description: "Custom appointment booking systems with real-time availability, reminders, and calendar sync — built for the specific business.",
    h1: "Appointment Booking Systems",
    eyebrow: "Industries",
    intro: [
      "Generic booking widgets cover the basics — pick a time, get a confirmation — but fall short once a business has real constraints: multiple staff with different availability, services with different durations, resources (rooms, equipment) that need to be booked alongside the appointment itself.",
      "I build booking systems tied to real-time availability from the actual calendar or scheduling data, avoiding the double-booking risk that comes from a system syncing on a delay.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Real-time availability checking against actual staff or resource calendars",
              "Support for multiple staff, services, and durations",
              "Automated confirmation and reminder messages (email, SMS, or WhatsApp)",
              "Rescheduling and cancellation handling",
              "Admin view for managing bookings and blocking off unavailable time",
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
              "Any appointment-based business — clinics, salons, consultancies, service providers — outgrowing a generic scheduling tool's limitations, or businesses that want booking built directly into their own site rather than routing to a third-party scheduling page.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do you prevent double-bookings?",
        answer: "Availability is checked in real time against the actual calendar at the moment of booking, with the slot briefly held during the booking process to prevent two customers claiming the same slot simultaneously.",
      },
      {
        question: "Can it handle multiple staff members with different schedules?",
        answer: "Yes — each staff member's availability is tracked independently, with services optionally restricted to specific staff who can perform them.",
      },
      {
        question: "Can bookings send reminders automatically?",
        answer: "Yes, via email, SMS, or WhatsApp depending on preference, which measurably reduces no-shows compared to no reminder system at all.",
      },
    ],
    relatedSlugs: ["solutions/ai-appointment-scheduling", "industries/salon-booking-system-development", "industries/hotel-booking-website-development", "industries/web-development-for-restaurants", "industries/web-development-for-dental-clinics", "industries/web-development-for-healthcare-clinics"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-hotels",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for hotels",
    secondaryKeywords: ["hotel website developer", "hotel website design", "hotel direct booking website", "boutique hotel website"],
    searchIntent: "commercial",
    title: "Web Development for Hotels | Justin Johnson",
    description: "Hotel websites built to drive direct bookings — fast, visual, and structured to compete with third-party booking platforms.",
    h1: "Web Development for Hotels",
    eyebrow: "Industries",
    intro: [
      "Every booking made through a third-party platform (Booking.com, Expedia) costs a commission that a direct booking on the hotel's own site avoids. A hotel site's job is giving visitors enough reason and enough ease to book directly — strong visuals, clear room information, and a booking flow that isn't more friction than the third-party alternative.",
      "This covers the marketing site and the booking integration together, since they need to work as one continuous flow from browsing to confirmed reservation.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Room type pages with detailed information and imagery",
              "Direct booking flow integrated with the hotel's property management or channel manager system",
              "Rate and availability display in real time",
              "Amenity and local area information",
              "Fast, image-heavy design that still loads quickly",
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
              "Independent hotels and boutique properties competing for direct bookings against large third-party platforms, and hotel groups that need a consistent booking experience across multiple properties.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can this connect to our existing booking engine?",
        answer: "Yes, where the booking engine or channel manager provides an API — real-time rate and availability data can be pulled directly rather than requiring a separate manual sync.",
      },
      {
        question: "How do you compete with sites like Booking.com on speed and trust?",
        answer: "Through faster load times, clearer property-specific information than a generic listing format allows, and often a direct-booking incentive (rate match, added perk) that gives visitors a genuine reason to book on the hotel's own site.",
      },
      {
        question: "Do you handle high-resolution photography display without slowing the site?",
        answer: "Yes — images are served at appropriately sized, optimized formats per device rather than full-resolution originals, which is usually the biggest factor in keeping an image-heavy hotel site fast.",
      },
    ],
    relatedSlugs: ["industries/hotel-booking-website-development", "resources/website-speed-optimization", "industries/web-development-for-travel-agencies"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "hotel-booking-website-development",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "hotel booking website development",
    secondaryKeywords: ["hotel reservation system developer", "custom hotel booking engine", "hotel PMS integration", "direct booking system for hotels"],
    searchIntent: "commercial",
    title: "Hotel Booking Website Development | Justin Johnson",
    description: "Custom hotel booking flows integrated with your property management system — real-time rates, availability, and payment.",
    h1: "Hotel Booking Website Development",
    eyebrow: "Industries",
    intro: [
      "A hotel's booking engine is the part of the site where the actual transaction happens — real-time rate and availability data, room selection, guest details, and payment, all needing to stay in sync with the property management system so the front desk and the website never show conflicting availability.",
      "I build this integrated with your existing PMS or channel manager where it provides an API, rather than a disconnected booking form that requires manual reconciliation.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Real-time rate and availability pulled from your PMS or channel manager",
              "Multi-room and multi-night booking flow",
              "Payment processing and deposit handling",
              "Booking confirmation and modification for guests",
              "Rate rules — seasonal pricing, minimum stays, promotional codes",
            ],
          },
        ],
      },
      {
        heading: "PMS and Channel Manager Integration",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "The booking engine's reliability depends entirely on staying in sync with whatever system actually manages inventory. Where the PMS or channel manager exposes an API, availability and rates flow through automatically; where it doesn't, that's a real constraint worth identifying early rather than discovering after the build.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which property management systems can this integrate with?",
        answer: "Any system with an accessible API — the specific integration work depends on which PMS or channel manager the hotel uses, and that's confirmed early in scoping.",
      },
      {
        question: "How are payments and deposits handled?",
        answer: "Through a payment gateway (Stripe or similar), with deposit and cancellation policy rules configured to match the hotel's actual terms.",
      },
      {
        question: "Can guests modify or cancel their own booking?",
        answer: "Yes, within whatever policy rules the hotel sets — self-service modification within the allowed window, with staff notified of changes.",
      },
    ],
    relatedSlugs: ["industries/web-development-for-hotels", "industries/appointment-booking-systems", "technologies/stripe-payment-integration"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-transport-companies",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for transport companies",
    secondaryKeywords: ["transport company website developer", "vehicle hire website", "transfer booking website", "fleet booking website"],
    searchIntent: "commercial",
    title: "Web Development for Transport Companies | Justin Johnson",
    description: "Transport and vehicle hire websites with route-based pricing, map-based booking, and fleet management built in.",
    h1: "Web Development for Transport Companies",
    eyebrow: "Industries",
    intro: [
      "Transport bookings — transfers, vehicle hire, chauffeur services — usually involve pricing tied to a specific route, an interactive map for pickup and drop-off selection, and often multiple vehicle types or service tiers. This is a meaningfully different UI problem than a standard product catalog, and I've built this specific pattern for airport transfer and chauffeur booking platforms.",
      "The build typically combines Shopify's Storefront API as a commerce backend with Google Maps or Leaflet for the location and route selection layer.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Interactive pickup and drop-off map selection",
              "Route-based pricing calculated from distance or predefined zones",
              "Vehicle type and service tier selection",
              "Booking confirmation with driver and vehicle details",
              "WhatsApp integration for booking confirmations or urgent changes",
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
              "Airport transfer services, chauffeur companies, and vehicle hire businesses that need booking built around actual routes and vehicle availability rather than a generic product-style catalog.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How does route-based pricing work?",
        answer: "Pickup and drop-off points selected on the map feed into a distance or zone-based pricing calculation, so the customer sees an accurate price before confirming rather than a flat estimate.",
      },
      {
        question: "Can this support multiple vehicle types?",
        answer: "Yes — pricing and availability can vary by vehicle class (sedan, SUV, minibus, luxury) as part of the same booking flow.",
      },
      {
        question: "Do you support WhatsApp for booking confirmations?",
        answer: "Yes — this is a common pattern for transport bookings where customers want a direct line to confirm pickup details for a time-sensitive trip.",
      },
    ],
    relatedSlugs: ["industries/bus-and-coach-booking-systems", "technologies/google-maps-api-integration", "services/ecommerce-development", "guides/how-to-add-google-maps-to-nextjs"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "bus-and-coach-booking-systems",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "bus and coach booking systems",
    secondaryKeywords: ["coach hire booking website", "minibus booking system", "group transport booking developer", "bus seat booking website"],
    searchIntent: "commercial",
    title: "Bus & Coach Booking Systems | Justin Johnson",
    description: "Booking systems for coach and minibus hire — quote requests, route-based pricing, and multi-city network support.",
    h1: "Bus & Coach Booking Systems",
    eyebrow: "Industries",
    intro: [
      "Coach and minibus hire bookings often don't fit a simple fixed-price cart — group size, route, vehicle type, and trip duration all affect pricing, and many bookings start as a quote request rather than an instant checkout. I've built this for multi-city minibus hire networks running shared infrastructure across several localized city sites.",
      "The pattern that works well here is a config-driven frontend — one shared codebase powering multiple city or brand-specific sites from a single source of truth.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Quote request flow for group and route-based pricing",
              "Vehicle type and capacity selection",
              "Multi-city or multi-brand support from a shared codebase",
              "Booking confirmation and driver/vehicle assignment",
              "Local SEO structure for city-specific pages",
            ],
          },
        ],
      },
      {
        heading: "Multi-City Networks",
        blocks: [
          {
            kind: "paragraphs",
            paragraphs: [
              "For operators serving multiple cities, a shared, config-driven codebase keeps the core booking logic consistent while letting each city's site carry genuinely distinct local content — service area details, local pricing, and location-specific SEO — rather than duplicating the whole application per city.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can this handle instant booking as well as quote requests?",
        answer: "Yes — for routes and vehicle types with predictable pricing, instant booking with a set price works; for larger or custom group requests, a quote request flow routes to staff for a manual quote.",
      },
      {
        question: "Can one system power multiple city-specific sites?",
        answer: "Yes — this is the config-driven pattern used across multi-city minibus hire networks, where each city site shares the same underlying booking logic and design system but carries its own content and local SEO.",
      },
      {
        question: "How is group size handled in pricing?",
        answer: "Pricing tiers or vehicle capacity options are matched against group size, either automatically for standard configurations or via a quote for larger or unusual group requirements.",
      },
    ],
    relatedSlugs: ["industries/web-development-for-transport-companies", "resources/local-seo-website-development", "resources/programmatic-seo"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-schools",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for schools",
    secondaryKeywords: ["school website developer", "education website design", "school website with parent portal", "school admissions website"],
    searchIntent: "commercial",
    title: "Web Development for Schools | Justin Johnson",
    description: "School websites with admissions information, news and events, and a parent-facing portal built around real school operations.",
    h1: "Web Development for Schools",
    eyebrow: "Industries",
    intro: [
      "A school's website has two distinct audiences with different needs — prospective parents researching admissions, and current parents and students needing ongoing information (events, announcements, sometimes grades or attendance). Serving both well usually means a clear public marketing section plus a properly access-controlled portal.",
      "This covers the public-facing site and, where needed, the parent or staff portal built on top of it.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Admissions information and inquiry forms",
              "News, events, and announcement pages",
              "Staff and faculty directory",
              "Parent portal for announcements, calendars, or academic information",
              "Content management so staff can update news and events independently",
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
              "Independent and private schools that need a more capable site than a generic template, particularly ones wanting a genuinely useful parent portal beyond just a static PDF newsletter posted occasionally.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can this integrate with a school management system?",
        answer: "Where the system exposes an API, yes — a parent portal can pull real data (attendance, grades, schedules) rather than requiring a separate manual update process.",
      },
      {
        question: "Can staff update news and events without a developer?",
        answer: "Yes — this is built as manageable content specifically so routine updates don't require developer involvement.",
      },
      {
        question: "Is the parent portal secure?",
        answer: "Yes — access is authenticated and scoped per family or student, so parents only see information relevant to their own children.",
      },
    ],
    relatedSlugs: ["industries/school-management-software", "services/headless-cms-development", "services/admin-dashboard-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "school-management-software",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "school management software",
    secondaryKeywords: ["custom school management system", "student information system developer", "school admin software", "attendance tracking software"],
    searchIntent: "commercial",
    title: "School Management Software Development | Justin Johnson",
    description: "Custom school management software for attendance, communication, and administration — built around how your school runs.",
    h1: "School Management Software Development",
    eyebrow: "Industries",
    intro: [
      "Off-the-shelf student information systems cover the common cases, but schools with a specific administrative process, a particular grading or reporting structure, or an unusual academic calendar often find themselves working around a generic system's assumptions rather than with them.",
      "I build custom school management tools scoped to the specific administrative gap — attendance tracking, parent communication, custom reporting — rather than attempting to replace an entire established student information system unnecessarily.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Attendance tracking and reporting",
              "Parent-teacher communication tools",
              "Role-based access for teachers, administrators, and parents",
              "Custom reporting matched to the school's specific requirements",
              "Integration with existing systems where full replacement isn't the goal",
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
              "Schools with an administrative process specific enough that a generic student information system doesn't fit well, or schools needing a targeted tool (attendance, communication) rather than a full system replacement.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you replace our existing student information system?",
        answer: "Not necessarily — often the better scope is a targeted tool addressing a specific gap (attendance, communication, reporting) that integrates with the existing system rather than replacing it wholesale, which is a larger undertaking with more risk.",
      },
      {
        question: "Can parents and teachers have different access levels?",
        answer: "Yes — role-based permissions control what each user type can see and do, matched to your school's actual staff structure.",
      },
      {
        question: "Can this generate custom reports?",
        answer: "Yes, built around the specific reporting formats your school actually needs, rather than being limited to whatever a generic system's report builder supports.",
      },
    ],
    relatedSlugs: ["industries/web-development-for-schools", "services/admin-dashboard-development", "services/custom-web-application-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-law-firms",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for law firms",
    secondaryKeywords: ["law firm website developer", "attorney website design", "legal website development", "law firm SEO website"],
    searchIntent: "commercial",
    title: "Web Development for Law Firms | Justin Johnson",
    description: "Law firm websites structured around practice areas, built to convert visitors researching a specific legal need.",
    h1: "Web Development for Law Firms",
    eyebrow: "Industries",
    intro: [
      "Someone searching for a lawyer is usually already dealing with a specific, often stressful situation — a clear, dedicated page per practice area that speaks to that specific need converts better than one general 'our services' page. Trust signals matter more here than in most industries, since visitors are making a decision with real personal stakes.",
      "This covers the site's structure and content architecture, built around genuine practice area distinctions rather than a generic template.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Dedicated pages per practice area, structured for both users and search",
              "Attorney profile pages with credentials and experience",
              "Case inquiry or consultation request forms",
              "Content structured to answer the specific questions a prospective client is searching for",
              "Local SEO setup for firms serving a specific geographic area",
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
              "Law firms with multiple practice areas whose current site treats them as one undifferentiated services list, and solo practitioners or small firms needing a site that reads as credible and specific rather than generic.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you write the legal content itself?",
        answer: "No — practice area and case-specific content should come from the firm or a legal content specialist, given the accuracy and liability considerations involved. I build the structure, SEO, and presentation around content the firm provides or reviews.",
      },
      {
        question: "Can each practice area have its own dedicated page?",
        answer: "Yes, and this is generally the stronger approach for search visibility — a dedicated page per practice area targets its specific search intent far better than a single combined page briefly covering everything.",
      },
      {
        question: "How do you handle client confidentiality on the site?",
        answer: "No specific case details or client information appear on the public site without explicit authorization; inquiry forms are the appropriate channel for anything involving a prospective client's specific situation.",
      },
    ],
    relatedSlugs: ["resources/local-seo-website-development", "resources/conversion-focused-web-design", "services/website-redesign-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-construction-companies",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for construction companies",
    secondaryKeywords: ["construction company website developer", "contractor website design", "construction portfolio website", "construction lead generation website"],
    searchIntent: "commercial",
    title: "Web Development for Construction Companies | Justin Johnson",
    description: "Construction company websites with project portfolios, service pages, and quote request forms built for lead generation.",
    h1: "Web Development for Construction Companies",
    eyebrow: "Industries",
    intro: [
      "A construction company's website is largely a trust and portfolio problem — prospective clients want to see real completed work relevant to their own project before requesting a quote. Clear service pages by project type and a portfolio that's easy to browse do more for conversion than a generic corporate template.",
      "This covers the marketing site, project portfolio, and quote request flow together, since they all feed into the same lead generation goal.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Service pages organized by project type (residential, commercial, renovation, etc.)",
              "Project portfolio with filtering by category",
              "Quote request forms that capture the details needed to scope a project",
              "Team and credentials pages for building trust",
              "Local SEO structure for service-area targeting",
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
              "Contractors and construction companies relying on referrals or outdated sites that don't showcase their actual completed work, particularly firms handling multiple distinct project types that deserve separate, targeted pages.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can the portfolio be filtered by project type?",
        answer: "Yes — categorized filtering lets prospective clients find examples of work relevant to their specific project rather than browsing an undifferentiated gallery.",
      },
      {
        question: "What should a quote request form ask for?",
        answer: "Enough detail to meaningfully scope the inquiry — project type, rough size or scope, timeline, location — without being so long it discourages submission; the right balance depends on how the sales team actually follows up.",
      },
      {
        question: "Do you help with local SEO for service areas?",
        answer: "Yes — for companies serving a defined geographic area, the site is structured to support that local visibility as part of the build.",
      },
    ],
    relatedSlugs: ["resources/local-seo-website-development", "resources/conversion-focused-web-design", "services/custom-web-application-development"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-salons",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for salons",
    secondaryKeywords: ["salon website developer", "spa website design", "hair salon booking website", "beauty salon website"],
    searchIntent: "commercial",
    title: "Web Development for Salons | Justin Johnson",
    description: "Salon and spa websites with service menus, stylist profiles, and online booking built for mobile-first visitors.",
    h1: "Web Development for Salons",
    eyebrow: "Industries",
    intro: [
      "Salon and spa clients typically research and book on their phones, often on short notice — a clear service menu with pricing, easy-to-browse stylist or therapist profiles, and fast online booking matter more here than an elaborate desktop experience.",
      "This covers the marketing site and the booking flow, matched to a business where clients often book a specific service with a specific staff member.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Service menu with pricing and duration, easy for staff to update",
              "Stylist or therapist profile pages",
              "Online booking tied to real staff availability",
              "Gallery of work for salons where visual portfolio matters (hair, nails, aesthetics)",
              "Mobile-first design, since most bookings happen on phones",
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
              "Salons and spas relying on a third-party booking platform's generic listing page instead of their own branded site, and multi-stylist salons where clients often want to book with a specific person.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can clients book with a specific stylist?",
        answer: "Yes — booking can be tied to individual staff availability, so clients requesting a specific stylist see only their real open slots.",
      },
      {
        question: "Can staff update the service menu themselves?",
        answer: "Yes — services, pricing, and duration are manageable content, so routine updates don't require developer involvement.",
      },
      {
        question: "Do you handle deposits for bookings?",
        answer: "Yes, where the salon requires a deposit or prepayment to reduce no-shows, integrated with a payment gateway as part of the booking flow.",
      },
    ],
    relatedSlugs: ["industries/salon-booking-system-development", "industries/appointment-booking-systems", "resources/mobile-website-optimization"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "salon-booking-system-development",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "salon booking system development",
    secondaryKeywords: ["spa appointment booking developer", "salon scheduling software", "beauty booking platform developer", "stylist availability booking"],
    searchIntent: "commercial",
    title: "Salon Booking System Development | Justin Johnson",
    description: "Custom salon and spa booking systems — staff-specific availability, service durations, and deposit handling.",
    h1: "Salon Booking System Development",
    eyebrow: "Industries",
    intro: [
      "Salon booking has its own specific constraints — different services take different amounts of time, clients often want a specific stylist, and no-shows are a real cost that deposits or cancellation policies help manage. A booking system built for this handles all three natively rather than approximating them.",
      "This is the booking engine specifically, either standalone or as part of a full salon website build.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Service-specific duration handling so the calendar reflects real time needed per appointment",
              "Staff-specific availability and service assignment",
              "Deposit or prepayment collection to reduce no-shows",
              "Automated reminders to reduce missed appointments",
              "Admin view for managing the day's schedule across staff",
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
              "Salons and spas outgrowing a generic scheduling tool's limitations around staff-specific booking and service durations, especially ones with recurring no-show problems a deposit policy could address.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can different services have different durations on the calendar?",
        answer: "Yes — each service's duration is configured explicitly, so a 90-minute color treatment and a 20-minute trim block the calendar correctly rather than both defaulting to the same slot length.",
      },
      {
        question: "Does this reduce no-shows?",
        answer: "Automated reminders and, if the business wants it, a deposit or cancellation policy both measurably reduce no-shows compared to no system at all — the specific reduction depends on the business and policy chosen.",
      },
      {
        question: "Can it manage a full day's schedule across multiple stylists?",
        answer: "Yes — the admin view shows the full schedule across staff, making it easy to spot gaps or conflicts at a glance.",
      },
    ],
    relatedSlugs: ["industries/web-development-for-salons", "industries/appointment-booking-systems", "solutions/ai-appointment-scheduling"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-travel-agencies",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for travel agencies",
    secondaryKeywords: ["travel agency website developer", "tour operator website", "travel booking website design", "excursion booking website"],
    searchIntent: "commercial",
    title: "Web Development for Travel Agencies | Justin Johnson",
    description: "Travel agency and tour operator websites with package listings, booking flows, and WhatsApp enquiry paths.",
    h1: "Web Development for Travel Agencies",
    eyebrow: "Industries",
    intro: [
      "Travel bookings often involve enough variation — dates, group size, add-ons, custom itineraries — that a rigid e-commerce cart doesn't always fit cleanly. I've built this using Shopify's product model repurposed as a flexible backend for tour and excursion listings, with WhatsApp as an alternative enquiry path for bookings that need more back-and-forth before confirming.",
      "This covers package or excursion listings, booking or enquiry flows, and the visual, image-heavy presentation travel content usually needs.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Tour and package listing pages with rich imagery and itinerary details",
              "Booking flow with date and group size selection",
              "WhatsApp enquiry path for custom or complex requests",
              "Multi-currency support for international customers",
              "Reviews or trip highlights presentation, using only genuine content",
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
              "Travel agencies and tour operators selling packaged experiences directly, particularly those wanting more control over presentation and booking than a listing on a third-party travel marketplace allows.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can this handle both instant booking and custom enquiries?",
        answer: "Yes — standard packages can support instant booking with fixed pricing, while custom or group requests route through a WhatsApp or form-based enquiry for a tailored quote.",
      },
      {
        question: "Do you support multiple currencies?",
        answer: "Yes, important for agencies serving an international customer base booking from different countries.",
      },
      {
        question: "Can we display genuine customer reviews?",
        answer: "Yes — reviews sourced from actual completed bookings can be displayed, though fabricated or placeholder reviews aren't something I'll add, both as a matter of practice and to avoid review-schema issues with search engines.",
      },
    ],
    relatedSlugs: ["industries/tour-booking-platform-development", "services/ecommerce-development", "industries/web-development-for-hotels"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "tour-booking-platform-development",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "tour booking platform development",
    secondaryKeywords: ["excursion booking system developer", "activity booking platform", "tour reservation system", "safari booking website"],
    searchIntent: "commercial",
    title: "Tour Booking Platform Development | Justin Johnson",
    description: "Tour and excursion booking platforms with date-based availability, group pricing, and add-on selection.",
    h1: "Tour Booking Platform Development",
    eyebrow: "Industries",
    intro: [
      "Tour and excursion bookings depend on date-based availability (a tour running on specific days, with capacity limits), group size pricing, and often optional add-ons — a standard product cart doesn't model any of that natively without adaptation.",
      "I've built this pattern for desert safari and excursion booking platforms in the UAE, treating each tour as a bookable resource with its own calendar rather than a static product listing.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "Date-based availability with capacity limits per departure",
              "Group size and per-person pricing calculation",
              "Add-on and upgrade selection during booking",
              "Booking confirmation with pickup or meeting point details",
              "Admin view for managing capacity across upcoming departures",
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
              "Tour operators running scheduled excursions with defined capacity per departure, and activity providers needing booking logic beyond what a simple product catalog handles.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How is departure capacity managed?",
        answer: "Each departure date has its own capacity limit, decremented as bookings come in, so the system prevents overbooking a specific date's tour automatically rather than requiring manual tracking.",
      },
      {
        question: "Can pricing vary by group size?",
        answer: "Yes — per-person pricing, group discounts, or tiered pricing based on group size can all be configured to match the operator's actual pricing model.",
      },
      {
        question: "Can customers select add-ons during booking?",
        answer: "Yes — optional extras (equipment, upgrades, meals) can be presented and priced as part of the same booking flow rather than requiring a separate follow-up purchase.",
      },
    ],
    relatedSlugs: ["industries/web-development-for-travel-agencies", "services/ecommerce-development", "industries/appointment-booking-systems"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
  {
    slug: "web-development-for-small-businesses",
    category: "industries",
    pageType: "commercial",
    schemaType: "Service",
    primaryKeyword: "web development for small businesses",
    secondaryKeywords: ["small business website developer", "affordable custom website", "small business web design", "local business website developer"],
    searchIntent: "commercial",
    title: "Web Development for Small Businesses | Justin Johnson",
    description: "Custom small business websites — fast, easy to update, and built around the actual services offered, not a generic template.",
    h1: "Web Development for Small Businesses",
    eyebrow: "Industries",
    intro: [
      "Small businesses don't need enterprise software, but a generic template also often undersells what makes the business actually worth choosing. The goal here is a site that's fast, genuinely easy for the owner or staff to update, and structured around real services rather than filler sections copied from a template.",
      "This is intentionally the broadest of the industry pages — the common thread across small business projects is keeping scope proportional to what the business actually needs, not over-building.",
    ],
    sections: [
      {
        heading: "What's Included",
        blocks: [
          {
            kind: "checklist",
            items: [
              "A site structured around the business's actual services, not a generic template's assumptions",
              "Content that staff or the owner can update without a developer",
              "Local SEO fundamentals so the business shows up for relevant nearby searches",
              "Fast load times, since small business budgets can't absorb lost visitors to slow pages",
              "A contact or booking path matched to how the business actually wants leads to reach it",
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
              "Any small business that's outgrown a DIY website builder's limitations, or one relying entirely on social media presence and wants a proper site to anchor its online presence and support [local search visibility](resources/local-seo-website-development).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a custom site worth it over a website builder like Wix or Squarespace?",
        answer: "Depends on the business — a builder is a reasonable starting point for very simple needs. A custom site earns its cost once the business needs something a template genuinely can't do well (specific booking logic, integrations, performance), or once page speed and SEO limitations of a builder start costing real visibility.",
      },
      {
        question: "How much does a small business website cost?",
        answer: "It scales with scope — a straightforward informational site is a much smaller project than one with booking, e-commerce, or custom functionality. Scope gets discussed and agreed before any work starts.",
      },
      {
        question: "Can I update the site myself after launch?",
        answer: "Yes — content is built to be manageable without touching code for routine updates, with the maintenance service available for anything beyond that.",
      },
    ],
    relatedSlugs: ["services/custom-web-application-development", "resources/local-seo-website-development", "services/website-maintenance-services"],
    publishedAt: "2026-07-24",
    updatedAt: "2026-07-24",
  },
];
