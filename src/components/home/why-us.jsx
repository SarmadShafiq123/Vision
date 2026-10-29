import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { whyUsItems } from "@/data/home";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
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
        <div className="mt-12 space-y-8">
          {whyUsItems.map((item, idx) => (
            <Reveal key={item.number} delay={idx * 0.1}>
              <div className="flex gap-6 border-t border-line pt-8 first:border-t-0 first:pt-0">
                <div className="shrink-0">
                  <span className="font-heading text-5xl font-bold text-line">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
