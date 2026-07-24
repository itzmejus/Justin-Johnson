import type { BreadcrumbItem } from "../../lib/seoMeta";

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="text-xs text-on-surface-variant mb-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              {index > 0 && (
                <span className="mx-1" aria-hidden="true">
                  /
                </span>
              )}
              {isLast ? (
                <span className="text-on-surface" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a href={item.path} className="hover:text-primary transition-colors">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
