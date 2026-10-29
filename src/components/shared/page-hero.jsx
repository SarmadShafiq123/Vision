import { ArcMark } from "@/components/shared/arc-mark";
import { cn } from "@/lib/utils";

export function PageHero({ index, label, title, description }) {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="max-w-3xl">
          {(index || label) && (
            <div className="flex items-center gap-3">
              {index && (
                <span className="font-body text-sm font-medium text-muted-foreground">
                  {index}
                </span>
              )}
              {label && (
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-royal">
                  {label}
                </span>
              )}
            </div>
          )}
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
          <ArcMark
            className="mt-8 h-10 w-32 text-sky"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </section>
  );
}
