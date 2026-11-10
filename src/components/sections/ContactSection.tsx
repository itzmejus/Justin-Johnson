import { useState } from "react";
import { profile } from "../../data/profile";
import { t } from "../../i18n/locale";

const WHATSAPP_NUMBER = profile.whatsapp;

const copy = t({
  en: {
    heading: ["LET'S BUILD", "SOMETHING", "EXTRAORDINARY"],
    directEmail: "Direct Email",
    callWhatsapp: "Call / WhatsApp",
    connect: "Connect on LinkedIn",
    fullName: "Full Name",
    namePlaceholder: "John Doe",
    emailAddress: "Email Address",
    emailPlaceholder: "john@example.com",
    message: "Message",
    messagePlaceholder: "Tell me about your project...",
    send: "Send via WhatsApp",
    waEmail: "Email",
    waMessage: "Message",
  },
  de: {
    heading: ["LASSEN SIE UNS", "ETWAS BESONDERES", "ENTWICKELN"],
    directEmail: "E-Mail",
    callWhatsapp: "Telefon / WhatsApp",
    connect: "Auf LinkedIn vernetzen",
    fullName: "Vollständiger Name",
    namePlaceholder: "Max Mustermann",
    emailAddress: "E-Mail-Adresse",
    emailPlaceholder: "max@beispiel.de",
    message: "Nachricht",
    messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt ...",
    send: "Per WhatsApp senden",
    waEmail: "E-Mail",
    waMessage: "Nachricht",
  },
});

export default function ContactSection() {
  return (
    <section className="py-24" id="contact">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div>
      <h2 className="font-headline text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter">
        {copy.heading[0]} <br /> {copy.heading[1]} <br /> {copy.heading[2]}
      </h2>

      <div className="space-y-6 mt-12">
        <ContactMethod
          icon="mail"
          label={copy.directEmail}
          display={profile.email}
          href={`mailto:${profile.email}`}
        />
        <ContactMethod
          icon="call"
          label={copy.callWhatsapp}
          display={profile.phoneDisplay}
          href={`tel:${profile.phone}`}
        />
        <ContactMethod
          icon="link"
          label="LinkedIn"
          display={copy.connect}
          href={profile.linkedin}
        />
      </div>
    </div>
  );
}

function ContactMethod({
  icon,
  label,
  display,
  href,
}: {
  icon: string;
  label: string;
  display: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">{label}</p>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-lg font-bold hover:text-primary transition-colors"
        >
          {display}
        </a>
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Justin,\n\nName: ${name}\n${copy.waEmail}: ${email}\n\n${copy.waMessage}:\n${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-surface-container-low p-6 md:p-10 rounded-3xl border border-outline-variant shadow-sm">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <FormField
          label={copy.fullName}
          type="text"
          placeholder={copy.namePlaceholder}
          value={name}
          onChange={setName}
          required
        />
        <FormField
          label={copy.emailAddress}
          type="email"
          placeholder={copy.emailPlaceholder}
          value={email}
          onChange={setEmail}
          required
        />
        <FormTextarea
          label={copy.message}
          placeholder={copy.messagePlaceholder}
          value={message}
          onChange={setMessage}
          required
        />
        <button
          type="submit"
          className="w-full py-4 bg-primary text-on-primary font-black uppercase tracking-widest rounded-full shadow-lg shadow-primary/25 hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-base">send</span>
          {copy.send}
        </button>
      </form>
    </div>
  );
}

function FormField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-outline outline-none"
      />
    </div>
  );
}

function FormTextarea({
  label,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
        {label}
      </label>
      <textarea
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-outline outline-none resize-none"
      />
    </div>
  );
}
