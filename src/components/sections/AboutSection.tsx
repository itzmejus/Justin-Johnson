const stats = [
  { value: "5+", label: "Years Exp" },
  { value: "16+", label: "Projects Delivered" },
  { value: "AWS", label: "Cloud Certified" },
  { value: "GCC", label: "Operational Base" },
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-6 md:gap-12">
          <div className="md:col-span-4">
            {/* Sticky only beside the text on wider screens; on phones it would pin under the header */}
            <h2 className="font-headline text-3xl md:text-4xl font-black text-primary md:sticky md:top-32">
              THE <br className="hidden md:block" /> PHILOSOPHY
            </h2>
          </div>

          <div className="md:col-span-8 space-y-8 md:space-y-12">
            <p className="text-lg sm:text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light">
              I specialize in building{" "}
              <span className="text-on-surface font-normal">scalable web applications</span>{" "}
              that bridge the gap between complex backend architectures and
              seamless user experiences. My expertise lies in React, Next.js,
              and Node.js, with a heavy focus on{" "}
              <span className="text-on-surface font-normal">
                E-commerce, Cloud Integrations, and Payment Gateways
              </span>
              .
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-2xl p-4 md:p-5 shadow-sm">
      <div className="text-primary font-headline font-black text-3xl md:text-4xl mb-1 md:mb-2">{value}</div>
      <div className="text-[10px] tracking-widest uppercase font-bold text-on-surface-variant leading-snug">
        {label}
      </div>
    </div>
  );
}
