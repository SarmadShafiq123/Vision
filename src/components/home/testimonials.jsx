import { SectionHeading } from "@/components/shared/section-heading";
import { testimonialsData } from "@/data/home";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
} from "@/constants/layout";

export function Testimonials() {
  if (!testimonialsData || testimonialsData.length === 0) return null;

  return (
    <section className={`border-t border-line bg-card ${SECTION_PADDING_Y}`}>
      <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
        <SectionHeading
          index="06"
          label="Testimonials"
          titleLead="What"
          titleAccent="families"
          titleTail="say"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((item) => (
            <div key={item.id} className="rounded-2xl border border-line bg-paper p-6">
              <p className="font-body text-base leading-relaxed text-foreground">
                {item.quote}
              </p>
              <p className="mt-4 font-body text-sm font-medium text-muted-foreground">
                {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
