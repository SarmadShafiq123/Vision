"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/links";
import { cn } from "@/lib/utils";

export function WhatsAppFab() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const link = buildWhatsAppLink();

  if (isContactPage) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-5 z-40",
        "flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg",
        "transition-transform hover:scale-105",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2",
      )}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
