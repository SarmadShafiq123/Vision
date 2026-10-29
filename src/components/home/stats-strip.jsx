import { StatCounter } from "@/components/shared/stat-counter";
import { statsData } from "@/data/home";
import { SECTION_PADDING_Y_SM } from "@/constants/layout";

export function StatsStrip() {
  if (!statsData || statsData.length === 0) return null;

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  const colClass = gridCols[statsData.length] || "grid-cols-2 md:grid-cols-4";

  return (
    <section className={`border-b border-line bg-card ${SECTION_PADDING_Y_SM}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
        <div className={`grid gap-x-8 gap-y-6 ${colClass}`}>
          {statsData.map((stat, idx) => (
            <div key={stat.key || stat.label} className="text-left">
              {idx > 0 && (
                <div className="absolute inset-y-0 left-0 hidden w-px bg-line md:block" />
              )}
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
