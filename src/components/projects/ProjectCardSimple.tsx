interface ProjectCardSimpleProps {
  category: string;
  title: string;
  link?: string;
  image?: string;
  locked?: boolean;
}

export default function ProjectCardSimple({
  category,
  title,
  link = "#",
  image,
  locked = false,
}: ProjectCardSimpleProps) {
  if (locked) return <LockedCard category={category} title={title} />;

  return (
    <div
      onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") window.open(link, "_blank", "noopener,noreferrer");
      }}
      className="group flex flex-col bg-surface-container rounded-2xl border border-outline-variant shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
    >
      {image && (
        <div className="p-3 pb-0">
          <div className="aspect-video bg-surface-container-low overflow-hidden rounded-xl border border-outline-variant">
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      )}
      <div className="flex flex-col flex-1 p-6 pt-5">
        <span className="self-start px-2.5 py-1 rounded-[999px] bg-surface-container-high text-[10px] uppercase tracking-widest text-primary font-bold">
          {category}
        </span>
        <h3 className="mt-3 mb-5 text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-outline-variant">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-xs uppercase tracking-widest font-bold text-on-surface-variant hover:text-primary transition-colors"
          >
            Live link
          </a>
          <span className="flex items-center justify-center w-9 h-9 rounded-[999px] bg-surface-container-highest text-on-surface-variant transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-lg group-hover:shadow-primary/25">
            <span className="material-symbols-outlined text-lg">arrow_outward</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// Internal systems have no public URL, so the card shows a lock instead of a screenshot.
function LockedCard({ category, title }: { category: string; title: string }) {
  return (
    <div
      className="group flex flex-col bg-surface-container rounded-2xl border border-outline-variant shadow-sm overflow-hidden"
      aria-label={`${title} (internal system, not publicly accessible)`}
    >
      <div className="p-3 pb-0">
        <div className="aspect-video rounded-xl border border-dashed border-outline bg-[repeating-linear-gradient(135deg,#f8f8f9_0px,#f8f8f9_10px,#f4f4f5_10px,#f4f4f5_20px)] flex flex-col items-center justify-center gap-2">
          <span className="flex items-center justify-center w-14 h-14 rounded-[999px] bg-white border border-outline-variant shadow-sm text-primary">
            <span className="material-symbols-outlined text-3xl">lock</span>
          </span>
          <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
            Internal system
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-6 pt-5">
        <span className="self-start px-2.5 py-1 rounded-[999px] bg-surface-container-high text-[10px] uppercase tracking-widest text-primary font-bold">
          {category}
        </span>
        <h3 className="mt-3 mb-5 text-xl font-headline font-bold text-on-surface">{title}</h3>
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-outline-variant">
          <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
            Private access
          </span>
          <span className="flex items-center justify-center w-9 h-9 rounded-[999px] bg-surface-container-highest text-on-surface-variant">
            <span className="material-symbols-outlined text-lg">lock</span>
          </span>
        </div>
      </div>
    </div>
  );
}
