import { cn } from "@/lib/utils";

export function Marquee({ items, className }) {
  if (!items || items.length === 0) return null;

  const rendered = items.map((item, index) => (
    <span
      key={`${item}-${index}`}
      className="mx-6 inline-flex items-center font-body text-lg font-medium text-muted-foreground"
    >
      {item}
      <span className="ml-12 text-line" aria-hidden="true">
        /
      </span>
    </span>
  ));

  return (
    <div className={cn("marquee-pause overflow-hidden", className)}>
      <div className="flex w-max animate-marquee">
        <div className="flex shrink-0 items-center">{rendered}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {rendered}
        </div>
      </div>
    </div>
  );
}
