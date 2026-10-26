interface SkillCardProps {
  icon: string;
  title: string;
  tags: string[];
}

export default function SkillCard({ icon, title, tags }: SkillCardProps) {
  return (
    <div className="group relative flex flex-col p-5 sm:p-7 bg-surface-container rounded-2xl border border-outline-variant shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      {/* Red accent bar that grows in on hover */}
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <span className="flex shrink-0 items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-surface-container-high text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
          <span className="material-symbols-outlined">{icon}</span>
        </span>
        <h3 className="flex-1 min-w-0 font-headline text-lg sm:text-xl font-bold text-on-surface">{title}</h3>
        <span className="font-headline text-sm font-bold text-outline tabular-nums">
          {String(tags.length).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 rounded-[999px] bg-surface-container-low border border-outline-variant text-on-surface text-xs font-semibold transition-colors hover:border-primary/40 hover:text-primary"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
