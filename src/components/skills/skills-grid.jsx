import { SkillCard } from "@/components/skills/skill-card";
import { Reveal } from "@/components/shared/reveal";

export function SkillsGrid({ skills }) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, idx) => (
        <Reveal key={skill.id} delay={idx * 0.08}>
          <SkillCard
            title={skill.title}
            description={skill.description}
            audience={skill.audience}
            duration={skill.duration}
          />
        </Reveal>
      ))}
    </div>
  );
}
