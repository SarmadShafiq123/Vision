import { publicEnv } from "@/config/env";

const WHATSAPP_BASE = "https://wa.me";
const WHATSAPP_DEFAULT_MESSAGE =
  "Hello, I would like to know more about admissions at Vision Academy.";

export function buildWhatsAppLink(message) {
  const number = publicEnv.whatsappNumber.replace(/[^\d]/g, "");
  const text = message || WHATSAPP_DEFAULT_MESSAGE;
  return `${WHATSAPP_BASE}/${number}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoLink(subject) {
  const email = publicEnv.contactEmail;
  const subjectParam = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${email}${subjectParam}`;
}
