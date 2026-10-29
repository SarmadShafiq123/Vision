import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { contactDetailCards } from "@/data/contact";

const iconMap = {
  MapPin,
  Phone,
  Mail,
  Clock,
};

export function ContactDetails() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {contactDetailCards.map((card) => {
        const Icon = iconMap[card.icon] || MapPin;
        return (
          <div
            key={card.id}
            className="flex gap-4 rounded-2xl border border-line bg-card p-5"
          >
            <div className="mt-0.5 shrink-0">
              <Icon className="size-5 text-royal" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-heading text-sm font-semibold text-ink">
                {card.title}
              </h3>
              <div className="mt-1 space-y-1">
                {card.lines.map((line, index) => {
                  if (card.href && index === 0) {
                    return (
                      <a
                        key={index}
                        href={card.href}
                        className="block font-body text-sm text-royal hover:underline"
                      >
                        {line}
                      </a>
                    );
                  }
                  return (
                    <p key={index} className="font-body text-sm text-muted-foreground">
                      {line}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
