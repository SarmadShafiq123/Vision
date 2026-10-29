import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Academics Playgroup to Class 12 — Vision Academy";

export default function OgImage() {
  return createOgImage("Academics: Playgroup to Class 12", "Vision Academy Gujranwala");
}
