import { buildMetadata } from "@/lib/metadata";
import { buildSkillsGraph } from "@/lib/seo/schemas";
import { buildBreadcrumbItems } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { SkillsGrid } from "@/components/skills/skills-grid";
import { CtaBand } from "@/components/shared/cta-band";
import { skillsData } from "@/data/skills";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
} from "@/constants/layout";

export const metadata = buildMetadata("skills");

const BREADCRUMB_ITEMS = [{ name: "Skills", href: "/skills" }];

export default function SkillsPage() {
  const crumbs = buildBreadcrumbItems(BREADCRUMB_ITEMS);

  return (
    <>
      <JsonLd schema={buildSkillsGraph(crumbs)} />
      <PageHero
        breadcrumbs={BREADCRUMB_ITEMS}
        label="Skills"
        title="Courses we offer"
        description="Short, focused programmes that give students abilities they can use straight away, alongside their academic studies or on their own."
      />
      <section className={`bg-paper ${SECTION_PADDING_Y}`}>
        <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
          <SkillsGrid skills={skillsData} />
        </div>
      </section>
      <CtaBand
        heading="Want to know more about a course?"
        subheading="Ask us about start dates and enrolment on WhatsApp."
      />
    </>
  );
}
