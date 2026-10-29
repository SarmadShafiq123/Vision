import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { ArcMark } from "@/components/shared/arc-mark";
import { buildWhatsAppLink, buildMailtoLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function CtaBand({ heading, subheading, className }) {
  const whatsappLink = buildWhatsAppLink();
  const emailLink = buildMailtoLink("Enquiry from Vision Academy website");

  return (
    <section className={cn("relative overflow-hidden bg-royal", className)}>
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="max-w-2xl font-heading text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 max-w-xl font-body text-lg leading-relaxed text-white/80">
              {subheading}
            </p>
          )}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-medium text-royal",
                "transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-royal",
              )}
            >
              <MessageCircle className="size-5" />
              Chat on WhatsApp
            </Link>
            <Link
              href={emailLink}
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/30 px-6 font-medium text-white",
                "transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-royal",
              )}
            >
              <Mail className="size-5" />
              Email us
            </Link>
          </div>
        </div>
        <ArcMark className="pointer-events-none absolute right-8 top-8 h-16 w-64 text-white opacity-20" />
      </div>
    </section>
  );
}
