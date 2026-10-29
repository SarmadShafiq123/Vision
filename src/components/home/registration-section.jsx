import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RegistrationForm } from "@/components/forms/registration-form";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
} from "@/constants/layout";

export function RegistrationSection() {
  return (
    <section id="register" className={`bg-paper ${SECTION_PADDING_Y}`}>
      <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              index="05"
              label="Register"
              titleLead="Start the"
              titleAccent="process"
              titleTail="here"
              description="Fill in your details and our team will get back to you to arrange a visit."
            />
            <p className="mt-6 font-body text-base leading-relaxed text-muted-foreground">
              We will confirm receipt of your registration and reach out on WhatsApp
              or by phone within one working day. There is no fee to register your
              interest.
            </p>
          </div>
          <Card className="border-line shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-xl text-ink">
                Registration form
              </CardTitle>
              <CardDescription className="font-body text-sm text-muted-foreground">
                All fields except message are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegistrationForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
