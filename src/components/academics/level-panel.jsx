import { Reveal } from "@/components/shared/reveal";

export function LevelPanel({ level }) {
  return (
    <Reveal className="mx-auto max-w-3xl">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-ink">
        {level.label}
      </h2>
      <div className="mt-2 inline-block rounded-full bg-mist px-3 py-1 font-body text-sm font-medium text-royal">
        {level.classesCovered}
      </div>
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Subjects
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-foreground">
            {level.subjects}
          </p>
        </div>
        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Focus
          </h3>
          <p className="mt-2 font-body text-base leading-relaxed text-foreground">
            {level.focus}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
