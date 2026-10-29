import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { skillsData } from "@/data/skills";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
  GRID_GAP,
} from "@/constants/layout";

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
          {skillsData.map((skill, idx) => (
            <Reveal key={skill.id} delay={idx * 0.08}>
              <Link
                href="/skills"
                className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-shadow hover:shadow-md"
              >
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
                <span className="mt-4 inline-flex items-center gap-1 font-body text-xs font-medium text-royal">
                  See details
                  <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
