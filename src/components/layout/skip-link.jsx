import { cn } from "@/lib/utils";

export function SkipLink() {
  return (
    <a
      href="#main"
      className={cn(
        "sr-only focus:not-sr-only",
        "focus:fixed focus:left-4 focus:top-4 focus:z-[100]",
        "focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2",
        "focus:text-primary-foreground focus:shadow-lg",
      )}
    >
      Skip to content
    </a>
  );
}
