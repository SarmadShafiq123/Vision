import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { ArcMark } from "@/components/shared/arc-mark";
import { buildWhatsAppLink } from "@/lib/links";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/data/home";
import { cn } from "@/lib/utils";

export function Hero() {
  const { headlineLead, headlineAccent, headlineTail, subline, primaryAction, secondaryAction, facts } = heroContent;
  const whatsappLink = buildWhatsAppLink();

  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-32 lg:px-10">
        <div className="max-w-3xl">
          {siteConfig.admissionsOpen && (
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-warm/30 bg-warm/10 px-3 py-1 text-xs font-medium text-warm">
                <span className="size-1.5 rounded-full bg-warm" />
                {heroContent.badge}
              </span>
            </Reveal>
          )}

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
              {headlineLead}{" "}
              <span className="font-serif-accent text-royal">{headlineAccent}</span>{" "}
              {headlineTail}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
              {subline}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryAction.href}
                className={cn(
                  "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-royal px-6 font-body text-sm font-semibold text-white",
                  "transition-colors hover:bg-royal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                )}
              >
                {primaryAction.label}
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-card px-6 font-body text-sm font-semibold text-ink",
                  "transition-colors hover:bg-mist focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                )}
              >
                <MessageCircle className="size-4" />
                {secondaryAction.label}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2">
              {facts.map((fact) => (
                <span
                  key={fact.label}
                  className="font-body text-sm font-medium text-muted-foreground"
                >
                  {fact.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <ArcMark
          className="mt-16 h-12 w-48 text-sky/60"
          strokeWidth={2}
        />
      </div>
    </section>
  );
}
