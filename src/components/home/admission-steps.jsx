import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { admissionSteps } from "@/data/home";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
} from "@/constants/layout";

export function AdmissionSteps() {
  return (
    <section className={`border-t border-line bg-card ${SECTION_PADDING_Y}`}>
      <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
        <SectionHeading
          index="04"
          label="Admissions"
          titleLead="How to"
          titleAccent="join"
          titleTail="in four steps"
          description="A simple process from first enquiry to first day of class."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((step, idx) => (
            <Reveal key={step.step} delay={idx * 0.1}>
              <div className="rounded-2xl border border-line bg-paper p-6">
                <span className="flex size-9 items-center justify-center rounded-full bg-royal font-heading text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
