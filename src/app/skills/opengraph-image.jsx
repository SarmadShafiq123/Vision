import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Skills Programmes — Vision Academy Gujranwala";

export default function OgImage() {
  return createOgImage("Skills Programmes", "Vision Academy Gujranwala");
}
