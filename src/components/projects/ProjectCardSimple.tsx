interface ProjectCardSimpleProps {
  category: string;
  title: string;
  link?: string;
  image?: string;
}

export default function ProjectCardSimple({
  category,
  title,
  link = "#",
  image,
}: ProjectCardSimpleProps) {
  return (
    <div
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") window.open(link, "_blank", "noopener,noreferrer");
      }}
      className="group bg-surface-container p-6 rounded-lg transition-all hover:bg-surface-bright border border-transparent hover:border-primary/20 cursor-pointer"
    >
      {image && (
        <div className="aspect-video bg-surface-container-low mb-6 overflow-hidden rounded">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        </div>
      )}
      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
          {category}
        </span>
        <h3 className="text-xl font-headline font-bold">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
        >
          LIVE LINK <span className="material-symbols-outlined text-sm">open_in_new</span>
        </a>
      </div>
    </div>
  );
}
