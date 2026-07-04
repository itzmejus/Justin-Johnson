interface SkillCardProps {
  icon: string;
  title: string;
  accentClass: string;
  borderClass: string;
  tags: string[];
}

export default function SkillCard({
  icon,
  title,
  accentClass,
  borderClass,
  tags,
}: SkillCardProps) {
  return (
    <div className={`p-8 bg-surface-container rounded-lg border-l-2 ${borderClass}`}>
      <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-3">
        <span className={`material-symbols-outlined ${accentClass}`}>{icon}</span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 bg-surface-container-highest ${accentClass} text-xs font-bold uppercase tracking-wider rounded-sm`}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
