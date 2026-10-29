import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { academicsOverview } from "@/data/home";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
  GRID_GAP,
} from "@/constants/layout";

export function AcademicsOverview() {
  return (
    <section className={`bg-paper ${SECTION_PADDING_Y}`}>
      <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
        <SectionHeading
          index="01"
          label="Academics"
          titleLead="Five levels,"
          titleAccent="one"
          titleTail="academy"
          description="From first classroom to final exams, each stage builds on the last."
        />
        <div className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ${GRID_GAP}`}>
          {academicsOverview.map((level, idx) => (
            <Reveal key={level.id} delay={idx * 0.08}>
              <Link
                href={level.href}
                className="group flex h-full flex-col rounded-2xl border border-line bg-card p-5"
              >
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {level.title}
                </h3>
                <p className="mt-1 font-body text-xs font-medium uppercase tracking-wide text-royal">
                  {level.gradeRange}
                </p>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                  {level.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-body text-xs font-medium text-royal">
                  Learn more
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
