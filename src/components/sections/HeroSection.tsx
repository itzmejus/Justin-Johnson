import Profile from '../../assets/Profile.webp'

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[921px] flex items-center px-4 md:px-8 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        <HeroCopy />
        <HeroImage />
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant/15">
        <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
          Available for projects
        </span>
      </div>

      <h1 className="font-headline text-5xl sm:text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
        JUSTIN <br />
        <span className="text-primary">JOHNSON</span>
      </h1>

      <p className="text-base sm:text-xl md:text-2xl text-on-surface-variant max-w-lg font-light leading-relaxed">
        Full Stack Developer based in{" "}
        <span className="text-on-surface font-semibold">Abu Dhabi, UAE</span>.
        Crafting high-performance digital ecosystems with precision and code.
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        <a
          href="#contact"
          className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-bold text-lg hover:scale-105 transition-transform active:scale-95"
        >
          Hire Me
        </a>
        <a
          href="#projects"
          className="px-8 py-4 border border-outline-variant/20 text-on-surface rounded-full font-bold text-lg hover:bg-surface-container transition-colors"
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="relative hidden md:block">
      <div className="aspect-square bg-surface-container-low rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/15 relative group">
        <img
          src={Profile}
          alt="Justin Johnson"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover filter  hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8">
          <div className="font-headline text-3xl font-bold">5+ Years</div>
          <div className="text-on-surface-variant text-sm uppercase tracking-widest">
            Global Experience
          </div>
        </div>
      </div>
    </div>
  );
}
