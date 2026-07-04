const stats = [
  { value: "5+", label: "Years Exp" },
  { value: "16+", label: "Projects Delivered" },
  { value: "AWS", label: "Cloud Certified" },
  { value: "GCC", label: "Operational Base" },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-headline text-4xl font-black text-primary sticky top-32">
              THE <br /> PHILOSOPHY
            </h2>
          </div>

          <div className="md:col-span-8 space-y-12">
            <p className="text-2xl text-on-surface-variant leading-relaxed font-light">
              I specialize in building{" "}
              <span className="text-on-surface">scalable web applications</span>{" "}
              that bridge the gap between complex backend architectures and
              seamless user experiences. My expertise lies in React, Next.js,
              and Node.js, with a heavy focus on{" "}
              <span className="text-on-surface">
                E-commerce, Cloud Integrations, and Payment Gateways
              </span>
              .
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
    <div>
      <div className="text-primary font-black text-4xl mb-2">{value}</div>
      <div className="text-[10px] tracking-widest uppercase text-on-surface-variant">
        {label}
      </div>
    </div>
  );
}
