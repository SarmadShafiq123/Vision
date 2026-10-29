import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHero({ breadcrumbs, label, title, description, className }) {
  return (
    <section className={cn("border-b border-line bg-paper", className)}>
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-20 lg:px-10">
        <div className="max-w-3xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Breadcrumbs items={breadcrumbs} />
          )}
          {label && (
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-royal">
              {label}
            </span>
          )}
          <h1 className="mt-3 text-balance font-heading text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-prose font-body text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
