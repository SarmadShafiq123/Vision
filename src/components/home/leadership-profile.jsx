import Image from "next/image";
import { CARD_RADIUS, HAIRLINE_BORDER } from "@/constants/layout";
import { cn } from "@/lib/utils";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
}

export function LeadershipProfile({ displayName, role, photo, bio }) {
  return (
    <div className="flex flex-col">
      <div className={cn("aspect-[4/5] overflow-hidden", CARD_RADIUS, HAIRLINE_BORDER)}>
        {photo ? (
          <Image
            src={photo}
            alt={`Portrait of ${displayName}, ${role} of Vision Academy`}
            width={400}
            height={500}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="size-full object-cover"
          />
        ) : (
          <div className="flex size-full items-center justify-center bg-mist">
            <span className="font-heading text-6xl font-bold text-royal">
              {getInitials(displayName)}
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-4 text-balance break-words font-heading text-xl font-semibold text-ink">
        {displayName}
      </h3>
      <p className="mt-1 font-body text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {role}
      </p>
      {bio && (
        <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
          {bio}
        </p>
      )}
    </div>
  );
}
