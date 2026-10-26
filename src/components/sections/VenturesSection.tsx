import imgSeloAssist from "../../assets/siteselo-assist.png";

const features = [
  "Answers only from the business's own information",
  "Replies in the customer's language, with Arabic RTL",
  "Captures leads and hands over to a human in one click",
  "Live team inbox and insights on unanswered questions",
];

const stack = ["Next.js", "TypeScript", "PostgreSQL + pgvector", "Prisma", "OpenAI", "Server-Sent Events"];

export default function VenturesSection() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="ventures">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-black text-primary">MY VENTURES</h2>
          <p className="text-on-surface-variant uppercase tracking-[0.2em] text-xs mt-2">
            Products I build and run
          </p>
        </div>

        <article className="grid lg:grid-cols-[1.15fr_1fr] bg-surface-container rounded-3xl border border-outline-variant shadow-xl shadow-primary/5 overflow-hidden">
          <a
            href="https://assist.siteselo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-3 sm:p-6 lg:p-8 bg-surface-container-high/60"
            aria-label="Visit Selo Assist"
          >
            {/* Browser-window frame; the screenshot keeps its own aspect ratio so nothing is cropped */}
            <div className="w-full bg-white rounded-xl border border-outline-variant shadow-lg shadow-primary/10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-outline-variant bg-surface-container-low">
                <span className="w-2.5 h-2.5 rounded-[999px] bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-[999px] bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-[999px] bg-[#28c840]" />
                <span className="ml-2 flex-1 min-w-0 truncate text-[10px] sm:text-xs text-on-surface-variant bg-white border border-outline-variant rounded-[999px] px-3 py-0.5">
                  assist.siteselo.com
                </span>
              </div>
              <img
                src={imgSeloAssist}
                alt="Selo Assist website: an AI assistant that answers every customer, even when you're closed"
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </div>
          </a>

          <div className="p-6 md:p-10 flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-[999px] bg-surface-container-high text-[10px] uppercase tracking-widest text-primary font-bold">
                Founder · SaaS
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[999px] bg-surface-container-highest text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                Live
              </span>
            </div>

            <h3 className="mt-4 font-headline text-3xl md:text-4xl font-black tracking-tight text-on-surface">
              Selo Assist
            </h3>
            <p className="mt-2 text-lg font-bold text-primary">
              AI customer support for UAE businesses
            </p>
            <p className="mt-4 text-on-surface-variant leading-relaxed">
              My own multi-tenant SaaS product. A business adds its information, pastes one line of
              code on its website, and an AI assistant answers customers around the clock, in their
              own language, using only that business's information. I designed, built and run it
              end to end, from product and pricing to infrastructure.
            </p>

            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-lg leading-5">check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-bold uppercase tracking-wider rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant flex flex-wrap items-center gap-4">
              <a
                href="https://assist.siteselo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/25 rounded-full font-bold hover:scale-105 transition-transform active:scale-95"
              >
                Visit assist.siteselo.com
                <span className="material-symbols-outlined text-lg">arrow_outward</span>
              </a>
              <span className="text-xs text-on-surface-variant">
                Try it live: the chat bubble on this site runs on Selo Assist.
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
