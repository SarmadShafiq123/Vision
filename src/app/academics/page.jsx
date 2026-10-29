import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { LevelTabs } from "@/components/academics/level-tabs";
import { CtaBand } from "@/components/shared/cta-band";
import { SECTION_PADDING_Y, PAGE_MAX_WIDTH, CONTAINER_PADDING_X } from "@/constants/layout";

export const metadata = buildMetadata({
  title: "Academics",
  description:
    "Academic programmes at Vision Academy from playgroup through Class 12, covering early years, primary, middle, secondary, and higher secondary levels.",
  path: "/academics",
});

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        index="01"
        label="Academics"
        title="From playgroup to Class 12"
        description="Five levels of learning, each building on the one before. Find the details for each stage below."
      />
      <section className={`border-t border-line bg-paper ${SECTION_PADDING_Y}`}>
        <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
          <LevelTabs />
        </div>
      </section>
      <CtaBand
        heading="Not sure which level fits?"
        subheading="Send us a message and we will help you find the right place for your child."
      />
    </>
  );
}
