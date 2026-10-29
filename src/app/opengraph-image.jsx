import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Vision Academy Gujranwala — Playgroup to Class 12";

export default function OgImage() {
  return createOgImage("Vision Academy Gujranwala", "Playgroup to Class 12");
}
