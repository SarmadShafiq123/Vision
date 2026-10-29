import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Logo({ className, variant = "dark" }) {
  const textColor = variant === "dark" ? "text-ink" : "text-white";
  const subColor = variant === "dark" ? "text-muted-foreground" : "text-white/70";

  return (
    <Link
      href="/"
      className={cn("inline-flex flex-col leading-none", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <span className={cn("font-heading text-lg font-bold tracking-tight", textColor)}>
        {siteConfig.name.toUpperCase().replace(" ACADEMY", "")}
      </span>
      <span className={cn("font-heading text-[0.625rem] font-medium uppercase tracking-[0.25em]", subColor)}>
        Academy
      </span>
    </Link>
  );
}
