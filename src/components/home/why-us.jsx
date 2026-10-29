import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { whyUsItems } from "@/data/home";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
  GRID_GAP,
} from "@/constants/layout";

export function WhyUs() {
  return (
    <section className={`bg-paper ${SECTION_PADDING_Y}`}>
      <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
        <SectionHeading
          index="03"
          label="Why us"
          titleLead="What makes"
          titleAccent="Vision"
          titleTail="different"
        />
        <div className={`mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ${GRID_GAP}`}>
          {whyUsItems.map((item, idx) => (
            <Reveal key={item.number} delay={idx * 0.1}>
              <div className="border-l border-line pl-5">
                <span className="font-heading text-3xl font-bold text-line">
                  {item.number}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
