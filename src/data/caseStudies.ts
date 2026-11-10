import { t } from "../i18n/locale";

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

const caseStudiesEn: CaseStudy[] = [
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

const caseStudiesDe: CaseStudy[] = [
  {
    ...caseStudiesEn[0],
    title: "Buchungsplattform für Transportleistungen in mehreren Ländern",
    category: "Reisen & Transport",
    period: "Sep. 2025 – heute",
    role: "Full Stack Entwickler",
    stack: ["React", "Next.js", "PHP", "Mandantenfähiges Theming"],
    problem:
      "Das Unternehmen betreibt über 100 lokalisierte Buchungswebsites in Großbritannien und Europa (Mietwagen, Transfers, Minibusvermietung, Touren), und jeder neue Markt oder jede neue Marke drohte zu einer einmaligen Neuentwicklung statt zu einem wiederholbaren Prozess zu werden.",
    myRole:
      "Konzeption und Entwicklung einer zentralen React/Next.js-Frontend-Architektur auf einem gemeinsamen PHP-Backend, sodass neue Länder- und Markenwebsites aus einer gemeinsamen Komponentenbibliothek und einem einheitlichen Content-Modell gestartet werden konnten, statt jedes Mal individuell entwickelt zu werden.",
    architecture:
      "Eine gemeinsame Next.js/React-Komponentenbibliothek übernimmt Buchungsabläufe, Suche und Checkout-Oberfläche für alle Websites, ergänzt durch eine konfigurationsgesteuerte Schicht für marktspezifisches Branding, Währungen und lokalisierte Inhalte. Ein gemeinsames PHP-Backend verarbeitet Buchungs-, Bestands- und Zahlungslogik, sodass jede Website auf zentrale Dienste zugreift, statt Backend-Logik zu duplizieren.",
    outcome:
      "Der Start einer neuen Länder- oder Markenwebsite wurde zu einer Konfigurationsaufgabe statt einer kompletten Neuentwicklung – das Unternehmen konnte in neue Märkte in Großbritannien und Europa expandieren und dabei eine einzige Codebasis pflegen und weiterentwickeln.",
  },
  {
    ...caseStudiesEn[1],
    title: "KORE Digital E-Commerce-Plattform",
    category: "E-Commerce & Cloud",
    period: "Okt. 2022 – Jul. 2025",
    role: "Software Engineer",
    problem:
      "KORE Digital brauchte einen Onlineshop, in dem Checkout, ERP-Auftragssynchronisierung und Versand über mehrere Carrier automatisch zusammenspielen, statt manuelle Abstimmung zwischen Zahlungs-, ERP- und Versandsystemen zu erfordern.",
    myRole:
      "Entwicklung des React/Next.js-Shops und Mitarbeit am AWS-Backend, wobei Zahlungs-, ERP- und Logistikanbieter zu einer einzigen automatisierten Auftragspipeline verbunden wurden.",
    architecture:
      "React/Next.js-Frontend auf einer ereignisgesteuerten AWS-Architektur: Lambda-Funktionen und Step Functions orchestrieren den Auftragslebenszyklus, DynamoDB und RDS verwalten Anwendungs- und Transaktionsdaten. Stripe und Shopify übernehmen Zahlungen und Commerce, NetSuite hält Aufträge mit dem ERP synchron, und Integrationen mit UPS, FedEx und 3PL automatisieren die Erstellung von Versandetiketten und Tracking-Updates.",
    outcome:
      "Die manuelle Koordination von Versand und Auftragsabwicklung wurde durch eine automatisierte, ereignisgesteuerte Pipeline über Zahlung, ERP und mehrere Carrier ersetzt – mit einem einheitlichen Fulfillment-Prozess über alle Vertriebskanäle hinweg.",
  },
  {
    ...caseStudiesEn[2],
    title: "Plattformen für Tourenbuchung & Reisen",
    category: "Headless Commerce",
    period: "Sep. 2025 – heute",
    role: "Full Stack Entwickler",
    stack: ["Shopify Storefront API", "React", "Redux", "Checkout in mehreren Währungen", "WhatsApp API"],
    problem:
      "Websites für Touren- und Ausflugsbuchungen brauchten flexible Produkt- und Bestandsverwaltung, einen Checkout in mehreren Währungen für internationale Kunden und einen einfachen Buchungsweg für Kunden, die Messaging gegenüber Webformularen bevorzugen.",
    myRole:
      "Umsetzung der Buchungsabläufe auf Basis der Shopify Storefront API mit Redux für das State-Management, Implementierung des Mehrwährungs-Checkouts und Ergänzung eines WhatsApp-basierten Buchungsablaufs als alternativen Weg zur Conversion.",
    architecture:
      "Headless-Commerce-Setup mit der Shopify Storefront API für Produkt- und Bestandsverwaltung und einem React/Redux-Frontend, das Buchungsstatus und Preise in mehreren Währungen im Checkout verarbeitet. Eine WhatsApp-Integration ermöglicht es Kunden, eine Buchung per Chat zu beginnen oder abzuschließen, wobei die Bestätigungen in denselben Bestellprozess zurückfließen.",
    outcome:
      "Kunden erhielten zwei vollständige Buchungswege – den klassischen Web-Checkout oder WhatsApp –, während Produkte, Bestände und Mehrwährungspreise zentral über eine einzige Headless-Commerce-Schicht verwaltet werden.",
  },
];

export const caseStudies: CaseStudy[] = t({ en: caseStudiesEn, de: caseStudiesDe });
