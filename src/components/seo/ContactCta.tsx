import { profile } from "../../data/profile";

export default function ContactCta({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-black text-primary mb-6">{heading}</h2>
        <p className="text-on-surface-variant leading-relaxed mb-10">{body}</p>
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
  );
}
