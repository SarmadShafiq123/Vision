import { cn } from "@/lib/utils";
import { CARD_RADIUS, HAIRLINE_BORDER } from "@/constants/layout";

export function InfoCard({ icon: Icon, title, children, className }) {
  return (
    <div
      className={cn(
        CARD_RADIUS,
        HAIRLINE_BORDER,
        "bg-card p-6 transition-shadow hover:shadow-md",
        className,
      )}
    >
      {Icon && (
        <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-mist">
          <Icon className="size-5 text-royal" />
        </div>
      )}
      {title && (
        <h3 className="font-heading text-lg font-semibold text-ink">{title}</h3>
      )}
      {children && (
        <div className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  );
}
