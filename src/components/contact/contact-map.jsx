import { publicEnv } from "@/config/env";

export function ContactMap() {
  const mapUrl = publicEnv.mapEmbedUrl;

  if (!mapUrl) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <iframe
        title="Vision Academy on the map"
        src={mapUrl}
        width="100%"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block"
        allowFullScreen
      />
    </div>
  );
}
