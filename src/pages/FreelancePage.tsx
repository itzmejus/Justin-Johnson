import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { profile } from "../data/profile";
import { caseStudies } from "../data/caseStudies";
import { blogPosts } from "../data/blogPosts";
import { useSEO } from "../hooks/useSEO";
import { lp, t } from "../i18n/locale";

const copy = t({
  en: {
    seoTitle: "Hire Justin Johnson | Freelance Full Stack Developer (React, Next.js, AWS)",
    seoDescription:
      "Justin Johnson is available for freelance and contract work as a Full Stack Developer — React, Next.js, Node.js, AWS, and Shopify headless commerce. Based in Abu Dhabi, UAE, working remotely worldwide.",
    seoKeywords:
      "hire freelance full stack developer, freelance React developer, freelance Next.js developer, freelance Node.js developer, hire React developer UAE, freelance web developer Abu Dhabi, freelance Shopify developer, contract developer for hire, remote full stack developer",
    serviceType: "Freelance Full Stack Web Development",
    areaServed: "Worldwide",
    serviceDescription:
      "Freelance full stack development covering React, Next.js, Node.js, AWS, and Shopify headless commerce for e-commerce, booking platforms, and cloud-integrated web applications.",
    available: "Available for freelance work",
    h1a: "HIRE A FREELANCE",
    h1b: "FULL STACK DEVELOPER",
    intro: `I'm ${profile.name}, a Full Stack Developer based in Abu Dhabi, UAE, available for freelance and contract engagements building React, Next.js, and Node.js applications — with a particular focus on e-commerce, Shopify headless commerce, cloud integrations, and multi-market booking platforms.`,
    whatsappText: "Hi Justin, I'd like to discuss a freelance project.",
    whatsapp: "Message on WhatsApp",
    emailSubject: "Freelance project enquiry",
    email: "Email Me",
    waysHeading: "WAYS TO WORK TOGETHER",
    whyHeading: "WHY WORK WITH ME",
    recentHeading: "RECENT WORK",
    recentIntroA: "A few of the platforms I've built or contributed to. See the",
    recentLink: "full Build Notes archive",
    recentIntroB: `for tech-stack breakdowns of ${blogPosts.length} live sites and apps.`,
    faqHeading: "FREQUENTLY ASKED QUESTIONS",
    ctaHeading: "LET'S TALK ABOUT YOUR PROJECT",
    ctaBody: "Whether it's a full build, an integration, or ongoing support — reach out and tell me what you're working on.",
    contactForm: "Go to Contact Form",
  },
  de: {
    seoTitle: "Justin Johnson beauftragen | Freelance Full Stack Entwickler",
    seoDescription:
      "Justin Johnson ist als freiberuflicher Full Stack Entwickler verfügbar – React, Next.js, Node.js, AWS und Shopify Headless Commerce. Remote-Zusammenarbeit weltweit, auch für Kunden in Deutschland.",
    seoKeywords:
      "Freelance Full Stack Entwickler, freiberuflicher React Entwickler, Next.js Freelancer, Node.js Freelancer, React Entwickler beauftragen, Freelance Webentwickler, Shopify Entwickler Freelance, Entwickler auf Projektbasis, Remote Full Stack Entwickler",
    serviceType: "Freiberufliche Full-Stack-Webentwicklung",
    areaServed: "Weltweit",
    serviceDescription:
      "Freiberufliche Full-Stack-Entwicklung mit React, Next.js, Node.js, AWS und Shopify Headless Commerce für E-Commerce, Buchungsplattformen und cloudintegrierte Webanwendungen.",
    available: "Verfügbar für Freelance-Projekte",
    h1a: "FREIBERUFLICHER",
    h1b: "FULL STACK ENTWICKLER",
    intro: `Ich bin ${profile.name}, Full Stack Entwickler mit Sitz in Abu Dhabi (VAE), und stehe für Freelance- und Projektaufträge zur Verfügung: Ich entwickle Anwendungen mit React, Next.js und Node.js – mit besonderem Fokus auf E-Commerce, Shopify Headless Commerce, Cloud-Integrationen und Buchungsplattformen für mehrere Märkte.`,
    whatsappText: "Hallo Justin, ich möchte gerne ein Freelance-Projekt mit Ihnen besprechen.",
    whatsapp: "Nachricht per WhatsApp",
    emailSubject: "Anfrage Freelance-Projekt",
    email: "E-Mail schreiben",
    waysHeading: "FORMEN DER ZUSAMMENARBEIT",
    whyHeading: "WARUM MIT MIR ARBEITEN",
    recentHeading: "AKTUELLE PROJEKTE",
    recentIntroA: "Einige der Plattformen, die ich entwickelt oder mitentwickelt habe. Im",
    recentLink: "vollständigen Archiv der Projekt-Notizen",
    recentIntroB: `finden Sie Tech-Stack-Analysen zu ${blogPosts.length} Live-Websites und Apps.`,
    faqHeading: "HÄUFIG GESTELLTE FRAGEN",
    ctaHeading: "LASSEN SIE UNS ÜBER IHR PROJEKT SPRECHEN",
    ctaBody: "Ob komplette Neuentwicklung, Integration oder laufende Betreuung – schreiben Sie mir, woran Sie gerade arbeiten.",
    contactForm: "Zum Kontaktformular",
  },
});

const engagementTypes = t({
  en: [
    {
      icon: "assignment_turned_in",
      title: "Project-Based",
      description:
        "A fixed-scope build with a clear deliverable — a new site, a booking platform, an integration — quoted after a short discovery call.",
    },
    {
      icon: "schedule",
      title: "Hourly / Part-Time",
      description:
        "Ongoing feature work, bug fixes, or support on an existing React, Next.js, or Node.js codebase, billed hourly.",
    },
    {
      icon: "autorenew",
      title: "Retainer / Ongoing",
      description:
        "Continued development and maintenance for a live product — new features, performance work, and third-party integrations as they come up.",
    },
  ],
  de: [
    {
      icon: "assignment_turned_in",
      title: "Projektbasiert",
      description:
        "Eine Umsetzung mit festem Umfang und klarem Ergebnis – eine neue Website, eine Buchungsplattform, eine Integration – mit Angebot nach einem kurzen Erstgespräch.",
    },
    {
      icon: "schedule",
      title: "Stundenbasiert / Teilzeit",
      description:
        "Laufende Feature-Entwicklung, Fehlerbehebung oder Support an einer bestehenden React-, Next.js- oder Node.js-Codebasis, nach Stunden abgerechnet.",
    },
    {
      icon: "autorenew",
      title: "Retainer / Laufend",
      description:
        "Kontinuierliche Weiterentwicklung und Wartung eines Live-Produkts – neue Funktionen, Performance-Optimierung und Drittanbieter-Integrationen nach Bedarf.",
    },
  ],
});

const reasons = t({
  en: [
    {
      icon: "verified",
      title: "5+ years shipping production software",
      description:
        "From enterprise IoT dashboards to a 100+ site multi-tenant booking network — code that's live and handling real traffic today.",
    },
    {
      icon: "hub",
      title: "Full stack, not just frontend",
      description:
        "React and Next.js on the frontend, Node.js and AWS (Lambda, Step Functions, DynamoDB, RDS) on the backend, plus Shopify, Stripe, and payment gateway integrations.",
    },
    {
      icon: "bolt",
      title: "Headless commerce specialist",
      description:
        "Repeated experience wiring Shopify's Storefront API into fully custom React frontends — booking flows, multi-currency checkout, and WhatsApp-based ordering.",
    },
    {
      icon: "public",
      title: "Remote-ready, GCC time zone",
      description:
        "Based in Abu Dhabi, UAE, comfortable working with clients across Europe, the UK, and the GCC, with async-friendly communication over WhatsApp and email.",
    },
  ],
  de: [
    {
      icon: "verified",
      title: "Über 5 Jahre Software im Produktivbetrieb",
      description:
        "Von IoT-Dashboards für Unternehmen bis zu einem mandantenfähigen Buchungsnetzwerk mit über 100 Websites – Code, der heute live ist und echten Traffic verarbeitet.",
    },
    {
      icon: "hub",
      title: "Full Stack, nicht nur Frontend",
      description:
        "React und Next.js im Frontend, Node.js und AWS (Lambda, Step Functions, DynamoDB, RDS) im Backend, dazu Integrationen mit Shopify, Stripe und weiteren Payment-Gateways.",
    },
    {
      icon: "bolt",
      title: "Spezialist für Headless Commerce",
      description:
        "Wiederholte Erfahrung darin, die Shopify Storefront API in vollständig individuelle React-Frontends einzubinden – Buchungsabläufe, Checkout in mehreren Währungen und Bestellungen per WhatsApp.",
    },
    {
      icon: "public",
      title: "Remote-erfahren, nah an der europäischen Zeitzone",
      description:
        "Von Abu Dhabi aus arbeite ich problemlos mit Kunden in Deutschland, Europa, Großbritannien und der Golfregion zusammen – mit asynchroner Kommunikation per WhatsApp und E-Mail.",
    },
  ],
});

const faqs = t({
  en: [
    {
      question: "Are you available for freelance or contract work right now?",
      answer:
        "Yes — I'm currently open to new freelance projects, contract roles, and ongoing retainer work alongside my full-time position, subject to scope and availability.",
    },
    {
      question: "What kind of projects do you take on?",
      answer:
        "Mainly React/Next.js frontends, Node.js and AWS backends, Shopify headless commerce storefronts, booking and marketplace platforms, and API/WhatsApp integrations. See the Build Notes blog for examples of shipped work.",
    },
    {
      question: "Do you work with clients outside the UAE?",
      answer:
        "Yes. I've built and shipped sites for clients and brands across the UK, Europe, and the GCC, and work comfortably across time zones using async communication.",
    },
    {
      question: "How does a project usually start?",
      answer:
        "With a short discovery call or WhatsApp/email conversation to scope the problem, followed by a proposal covering timeline, cost, and tech approach before any code is written.",
    },
    {
      question: "What's the best way to reach you?",
      answer:
        "WhatsApp or email are fastest — both are linked on this page. I typically respond within a business day.",
    },
  ],
  de: [
    {
      question: "Sind Sie aktuell für Freelance- oder Projektarbeit verfügbar?",
      answer:
        "Ja – ich bin derzeit offen für neue Freelance-Projekte, Projektverträge und laufende Retainer-Aufträge neben meiner Festanstellung, je nach Umfang und Verfügbarkeit.",
    },
    {
      question: "Welche Art von Projekten übernehmen Sie?",
      answer:
        "Vor allem React/Next.js-Frontends, Node.js- und AWS-Backends, Shopify-Headless-Commerce-Shops, Buchungs- und Marktplatzplattformen sowie API- und WhatsApp-Integrationen. Beispiele umgesetzter Projekte finden Sie im Blog mit den Projekt-Notizen.",
    },
    {
      question: "Arbeiten Sie auch mit Kunden außerhalb der VAE?",
      answer:
        "Ja. Ich habe Websites für Kunden und Marken in Großbritannien, Europa und der Golfregion entwickelt und ausgeliefert und arbeite mit asynchroner Kommunikation problemlos über Zeitzonen hinweg – auch mit Kunden in Deutschland.",
    },
    {
      question: "Wie beginnt ein Projekt normalerweise?",
      answer:
        "Mit einem kurzen Erstgespräch oder einem Austausch per WhatsApp/E-Mail, um die Aufgabe einzugrenzen. Danach erhalten Sie ein Angebot zu Zeitplan, Kosten und technischem Ansatz – bevor eine Zeile Code geschrieben wird.",
    },
    {
      question: "Wie erreiche ich Sie am besten?",
      answer:
        "Am schnellsten per WhatsApp oder E-Mail – beides ist auf dieser Seite verlinkt. In der Regel antworte ich innerhalb eines Werktags.",
    },
  ],
});

const highlightedCaseStudies = caseStudies.slice(0, 3);

export default function FreelancePage() {
  useSEO({
    title: copy.seoTitle,
    description: copy.seoDescription,
    path: "/freelance",
    keywords: copy.seoKeywords,
    jsonLd: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: copy.serviceType,
          provider: {
            "@type": "Person",
            name: profile.name,
            url: "https://www.justinjohnson.de/",
          },
          areaServed: copy.areaServed,
          description: copy.serviceDescription,
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    }),
  });

  const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(copy.whatsappText)}`;

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-outline-variant shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                {copy.available}
              </span>
            </div>

            <h1 className="font-headline text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter">
              {copy.h1a} <br />
              <span className="text-primary">{copy.h1b}</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mt-6 max-w-3xl">{copy.intro}</p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/25 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95"
              >
                {copy.whatsapp}
              </a>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent(copy.emailSubject)}`}
                className="px-8 py-4 border border-outline-variant text-on-surface rounded-full font-bold text-lg hover:bg-surface-container-low transition-colors"
              >
                {copy.email}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-container-low">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-10">{copy.waysHeading}</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {engagementTypes.map((type) => (
                <div key={type.title} className="bg-surface-container p-6 rounded-2xl border border-outline-variant shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">{type.icon}</span>
                  <h3 className="font-headline text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-10">{copy.whyHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl shrink-0">{reason.icon}</span>
                  <div>
                    <h3 className="font-bold mb-1">{reason.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-container-low">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4">{copy.recentHeading}</h2>
            <p className="text-on-surface-variant mb-10 max-w-2xl">
              {copy.recentIntroA}{" "}
              <a href={lp("/blog")} className="text-primary font-bold hover:underline">
                {copy.recentLink}
              </a>{" "}
              {copy.recentIntroB}
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {highlightedCaseStudies.map((cs) => (
                <div key={cs.slug} className="bg-surface-container p-6 rounded-2xl border border-outline-variant shadow-sm">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">{cs.category}</span>
                  <h3 className="font-headline text-base font-bold mt-2 mb-2">{cs.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{cs.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-10">{copy.faqHeading}</h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-outline-variant pb-8">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-primary mb-6">{copy.ctaHeading}</h2>
            <p className="text-on-surface-variant leading-relaxed mb-10">{copy.ctaBody}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/25 rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95"
              >
                {copy.whatsapp}
              </a>
              <a
                href={lp("/#contact")}
                className="px-8 py-4 border border-outline-variant text-on-surface rounded-full font-bold text-lg hover:bg-surface-container-low transition-colors"
              >
                {copy.contactForm}
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
