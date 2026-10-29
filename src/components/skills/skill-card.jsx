export function SkillCard({ title, description, audience, duration }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-heading text-xl font-semibold text-ink">{title}</h3>
        {duration && (
          <span className="shrink-0 rounded-full border border-sky/30 bg-sky/10 px-2.5 py-0.5 font-body text-xs font-medium text-sky">
            {duration}
          </span>
        )}
      </div>
      <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {audience && (
        <p className="mt-4 font-body text-xs text-muted-foreground">
          <span className="font-medium text-ink">For: </span>
          {audience}
        </p>
      )}
    </article>
  );
}
