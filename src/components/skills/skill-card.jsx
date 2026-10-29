import { MessageCircle } from "lucide-react";
import { buildWhatsAppCourseLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function SkillCard({ title, description, audience, duration, delayClass }) {
  const whatsappLink = buildWhatsAppCourseLink(title);

  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-6">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading text-xl font-semibold text-ink">{title}</h3>
        {duration && (
          <span className="shrink-0 rounded-full border border-sky/30 bg-sky/10 px-2.5 py-0.5 font-body text-xs font-medium text-sky">
            {duration}
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {audience && (
        <p className="mt-4 font-body text-xs text-muted-foreground">
          <span className="font-medium text-ink">For: </span>
          {audience}
        </p>
      )}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-whatsapp px-4 font-body text-sm font-semibold text-white",
          "transition-colors hover:bg-whatsapp/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
          "animate-ring-pulse",
          delayClass,
        )}
      >
        <MessageCircle className="size-4" />
        Enquire on WhatsApp
      </a>
    </article>
  );
}
