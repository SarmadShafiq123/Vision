import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/shared/page-hero";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { CtaBand } from "@/components/shared/cta-band";
import { skillsData } from "@/data/skills";
import { SECTION_PADDING_Y, PAGE_MAX_WIDTH, CONTAINER_PADDING_X } from "@/constants/layout";

export const metadata = buildMetadata("skills");

export default function SkillsPage() {
  return (
    <>
      <PageHero
        index="01"
        label="Skills"
        title="Practical courses for real skills"
        description="Short, focused programmes that give students abilities they can use right away, alongside their academic studies or on their own."
      />
      <section className={`bg-paper ${SECTION_PADDING_Y}`}>
        <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
          <SkillsGrid skills={skillsData} />
        </div>
      </section>
      <CtaBand
        heading="Want to learn a skill?"
        subheading="Ask us about course start dates and details on WhatsApp."
      />
    </>
  );
}
