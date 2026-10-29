import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  label,
  titleLead,
  titleAccent,
  titleTail,
  description,
  className,
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("max-w-2xl", alignClass, className)}>
      {(index || label) && (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
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
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-[2.75rem]">
        {titleLead}{" "}
        {titleAccent && <span className="font-serif-accent text-royal">{titleAccent}</span>}
        {titleTail && ` ${titleTail}`}
      </h2>
      {description && (
        <p className="mt-4 font-body text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
