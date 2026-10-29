import { buildMetadata } from "@/lib/metadata";
import { buildAcademicsGraph } from "@/lib/seo/schemas";
import { buildBreadcrumbItems } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { LevelTabs } from "@/components/academics/level-tabs";
import { CtaBand } from "@/components/shared/cta-band";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
} from "@/constants/layout";

export const metadata = buildMetadata("academics");

const BREADCRUMB_ITEMS = [{ name: "Academics", href: "/academics" }];

export default function AcademicsPage() {
  const crumbs = buildBreadcrumbItems(BREADCRUMB_ITEMS);

  return (
    <>
      <JsonLd schema={buildAcademicsGraph(crumbs)} />
      <PageHero
        breadcrumbs={BREADCRUMB_ITEMS}
        label="Academics"
        title="Classes we teach"
        description="Five levels of learning, each building on the one before. Select a level to see the subjects and focus for that stage."
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
