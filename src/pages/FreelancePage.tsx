import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { profile } from "../data/profile";
import { caseStudies } from "../data/caseStudies";
import { blogPosts } from "../data/blogPosts";
import { useSEO } from "../hooks/useSEO";

const engagementTypes = [
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
];

const reasons = [
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
];

const faqs = [
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
];

const highlightedCaseStudies = caseStudies.slice(0, 3);

export default function FreelancePage() {
  useSEO({
    title: "Hire Justin Johnson | Freelance Full Stack Developer (React, Next.js, AWS)",
    description:
      "Justin Johnson is available for freelance and contract work as a Full Stack Developer — React, Next.js, Node.js, AWS, and Shopify headless commerce. Based in Abu Dhabi, UAE, working remotely worldwide.",
    path: "/freelance",
    keywords:
      "hire freelance full stack developer, freelance React developer, freelance Next.js developer, freelance Node.js developer, hire React developer UAE, freelance web developer Abu Dhabi, freelance Shopify developer, contract developer for hire, remote full stack developer",
    jsonLd: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          serviceType: "Freelance Full Stack Web Development",
          provider: {
            "@type": "Person",
            name: profile.name,
            url: "https://www.justinjohnson.de/",
          },
          areaServed: "Worldwide",
          description:
            "Freelance full stack development covering React, Next.js, Node.js, AWS, and Shopify headless commerce for e-commerce, booking platforms, and cloud-integrated web applications.",
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

  return (
    <div className="font-body selection:bg-primary selection:text-on-primary">
      <Header />
      <main className="pt-20">
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                Available for freelance work
              </span>
            </div>

            <h1 className="font-headline text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter">
              HIRE A FREELANCE <br />
              <span className="text-primary">FULL STACK DEVELOPER</span>
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mt-6 max-w-3xl">
              I'm {profile.name}, a Full Stack Developer based in {profile.location}, available for
              freelance and contract engagements building React, Next.js, and Node.js applications —
              with a particular focus on e-commerce, Shopify headless commerce, cloud integrations, and
              multi-market booking platforms.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Justin, I'd like to discuss a freelance project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95"
              >
                Message on WhatsApp
              </a>
              <a
                href={`mailto:${profile.email}?subject=${encodeURIComponent("Freelance project enquiry")}`}
                className="px-8 py-4 border border-outline-variant/20 text-on-surface rounded-full font-bold text-lg hover:bg-surface-container transition-colors"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-container-low">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-10">
              WAYS TO WORK TOGETHER
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {engagementTypes.map((type) => (
                <div key={type.title} className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-3xl mb-4 block">
                    {type.icon}
                  </span>
                  <h3 className="font-headline text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-10">
              WHY WORK WITH ME
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <span className="material-symbols-outlined text-primary text-2xl shrink-0">
                    {reason.icon}
                  </span>
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
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-4">
              RECENT WORK
            </h2>
            <p className="text-on-surface-variant mb-10 max-w-2xl">
              A few of the platforms I've built or contributed to. See the{" "}
              <a href="/blog" className="text-primary font-bold hover:underline">
                full Build Notes archive
              </a>{" "}
              for tech-stack breakdowns of {blogPosts.length} live sites and apps.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {highlightedCaseStudies.map((cs) => (
                <div key={cs.slug} className="bg-surface-container p-6 rounded-2xl border border-outline-variant/10">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                    {cs.category}
                  </span>
                  <h3 className="font-headline text-base font-bold mt-2 mb-2">{cs.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{cs.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary mb-10">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-outline-variant/10 pb-8">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-primary mb-6">
              LET'S TALK ABOUT YOUR PROJECT
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-10">
              Whether it's a full build, an integration, or ongoing support — reach out and tell me what
              you're working on.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hi Justin, I'd like to discuss a freelance project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95"
              >
                Message on WhatsApp
              </a>
              <a
                href="/#contact"
                className="px-8 py-4 border border-outline-variant/20 text-on-surface rounded-full font-bold text-lg hover:bg-surface-container transition-colors"
              >
                Go to Contact Form
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
