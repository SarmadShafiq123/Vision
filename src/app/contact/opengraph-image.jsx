import { createOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Contact Vision Academy Gujranwala";

export default function OgImage() {
  return createOgImage("Contact Vision Academy", "Gujranwala, Pakistan");
}
