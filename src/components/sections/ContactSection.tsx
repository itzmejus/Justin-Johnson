import { useState } from "react";
import { profile } from "../../data/profile";

const WHATSAPP_NUMBER = profile.whatsapp;

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
        LET'S BUILD <br /> SOMETHING <br /> EXTRAORDINARY
      </h2>

      <div className="space-y-6 mt-12">
        <ContactMethod
          icon="mail"
          label="Direct Email"
          display={profile.email}
          href={`mailto:${profile.email}`}
        />
        <ContactMethod
          icon="call"
          label="Call / WhatsApp"
          display={profile.phoneDisplay}
          href={`tel:${profile.phone}`}
        />
        <ContactMethod
          icon="link"
          label="LinkedIn"
          display="Connect on LinkedIn"
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
      <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
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
    const text = `Hi Justin,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-surface-container-low p-6 md:p-10 rounded-3xl border border-outline-variant/10">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <FormField
          label="Full Name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={setName}
          required
        />
        <FormField
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          value={email}
          onChange={setEmail}
          required
        />
        <FormTextarea
          label="Message"
          placeholder="Tell me about your project..."
          value={message}
          onChange={setMessage}
          required
        />
        <button
          type="submit"
          className="w-full py-4 bg-primary text-on-primary font-black uppercase tracking-widest rounded-full hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-base">send</span>
          Send via WhatsApp
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
        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-zinc-700 outline-none"
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
        className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-colors py-3 text-on-surface placeholder:text-zinc-700 outline-none resize-none"
      />
    </div>
  );
}
