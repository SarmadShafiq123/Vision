import { buildMetadata } from "@/lib/metadata";
import { buildContactGraph } from "@/lib/seo/schemas";
import { buildBreadcrumbItems } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/shared/page-hero";
import { ContactDetails } from "@/components/contact/contact-details";
import { ContactMap } from "@/components/contact/contact-map";
import { ContactForm } from "@/components/forms/contact-form";
import { RegistrationSection } from "@/components/home/registration-section";
import { CtaBand } from "@/components/shared/cta-band";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
} from "@/constants/layout";

export const metadata = buildMetadata("contact");

const BREADCRUMB_ITEMS = [{ name: "Contact", href: "/contact" }];

export default function ContactPage() {
  const crumbs = buildBreadcrumbItems(BREADCRUMB_ITEMS);

  return (
    <>
      <JsonLd schema={buildContactGraph(crumbs)} />
      <PageHero
        breadcrumbs={BREADCRUMB_ITEMS}
        label="Contact"
        title="Find us in Gujranwala"
        description="Call, email, or send a message below. We respond within one working day."
      />
      <section className={`border-t border-line bg-paper ${SECTION_PADDING_Y}`}>
        <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">
                Contact details
              </h2>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Reach us through any of the options below.
              </p>
              <div className="mt-6">
                <ContactDetails />
              </div>
              <div className="mt-8">
                <ContactMap />
              </div>
            </div>
            <Card className="border-line">
              <CardHeader>
                <CardTitle className="font-heading text-xl text-ink">
                  Send a message
                </CardTitle>
                <CardDescription className="font-body text-sm text-muted-foreground">
                  Fill in the form and we will get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <RegistrationSection />
      <CtaBand
        heading="Prefer to talk directly?"
        subheading="Send a WhatsApp message or an email and we will pick it up right away."
      />
    </>
  );
}
