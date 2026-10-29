import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { LeadershipProfile } from "@/components/home/leadership-profile";
import { leadershipData } from "@/data/leadership";
import {
  SECTION_PADDING_Y,
  PAGE_MAX_WIDTH,
  CONTAINER_PADDING_X,
} from "@/constants/layout";

export function Leadership() {
  return (
    <section className={`bg-card ${SECTION_PADDING_Y}`}>
      <div className={`${PAGE_MAX_WIDTH} ${CONTAINER_PADDING_X}`}>
        <SectionHeading
          index="04"
          label="Leadership"
          titleLead="Who runs"
          titleAccent="Vision"
          titleTail="Academy"
        />
        <div className="mt-12 grid grid-cols-1 gap-12 sm:max-w-md sm:gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-16">
          {leadershipData.map((leader, idx) => (
            <Reveal key={leader.displayName} delay={idx * 0.1}>
              <LeadershipProfile
                displayName={leader.displayName}
                role={leader.role}
                photo={leader.photo}
                bio={leader.bio}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
