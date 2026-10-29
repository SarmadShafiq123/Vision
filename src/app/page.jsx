import { buildMetadata } from "@/lib/metadata";
import { buildHomeGraph } from "@/lib/seo/schemas";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/home/hero";
import { StatsStrip } from "@/components/home/stats-strip";
import { SubjectMarquee } from "@/components/home/subject-marquee";
import { AcademicsOverview } from "@/components/home/academics-overview";
import { SkillsPreview } from "@/components/home/skills-preview";
import { WhyUs } from "@/components/home/why-us";
import { Leadership } from "@/components/home/leadership";
import { AdmissionSteps } from "@/components/home/admission-steps";
import { RegistrationSection } from "@/components/home/registration-section";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBand } from "@/components/shared/cta-band";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <JsonLd schema={buildHomeGraph()} />
      <Hero />
      <StatsStrip />
      <SubjectMarquee />
      <AcademicsOverview />
      <SkillsPreview />
      <WhyUs />
      <Leadership />
      <AdmissionSteps />
      <RegistrationSection />
      <Testimonials />
      <CtaBand
        heading="Ready to take the next step?"
        subheading="Message us on WhatsApp or send an email. We answer within one working day."
      />
    </>
  );
}
