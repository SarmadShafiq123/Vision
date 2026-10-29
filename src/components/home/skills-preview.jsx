import { MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { buildWhatsAppCourseLink } from "@/lib/links";
import { skillsData } from "@/data/skills";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
  GRID_GAP,
  PULSE_DELAYS,
} from "@/constants/layout";
import { cn } from "@/lib/utils";

export function SkillsPreview() {
  return (
    <section className={`border-t border-line bg-card ${SECTION_PADDING_Y}`}>
      <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
        <SectionHeading
          index="02"
          label="Skills"
          titleLead="Practical"
          titleAccent="skills"
          titleTail="that count"
          description="Short courses that give students real, usable abilities alongside their studies."
        />
        <div className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${GRID_GAP}`}>
          {skillsData.map((skill, idx) => {
            const whatsappLink = buildWhatsAppCourseLink(skill.title);
            const delayClass = PULSE_DELAYS[idx % PULSE_DELAYS.length];

            return (
              <Reveal key={skill.id} delay={idx * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {skill.title}
                  </h3>
                  {skill.duration && (
                    <span className="mt-1 font-body text-xs font-medium text-sky">
                      {skill.duration}
                    </span>
                  )}
                  <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                    {skill.description}
                  </p>
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
