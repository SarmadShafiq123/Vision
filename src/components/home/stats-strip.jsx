import { StatCounter } from "@/components/shared/stat-counter";
import { statsData } from "@/data/home";
import { SECTION_PADDING_Y_SM } from "@/constants/layout";

export function StatsStrip() {
  if (!statsData || statsData.length === 0) return null;

  return (
    <section className={`border-b border-line bg-card ${SECTION_PADDING_Y_SM}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {statsData.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
