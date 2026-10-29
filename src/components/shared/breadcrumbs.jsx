import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Breadcrumbs({ items }) {
  const all = [{ name: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1 font-body text-sm text-muted-foreground">
        {all.map((item, idx) => {
          const isLast = idx === all.length - 1;
          return (
            <li key={item.href || item.name} className="flex items-center gap-1">
              {idx > 0 && (
                <span aria-hidden="true" className="text-line">
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-royal"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function buildBreadcrumbItems(items) {
  return [
    { name: "Home", url: siteConfig.url },
    ...items.map((item) => ({
      name: item.name,
      url: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  ];
}
