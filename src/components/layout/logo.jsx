import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 140;
const LOGO_HEIGHT = 48;

export function Logo({ className }) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/brand/logo.png"
        alt={siteConfig.name}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}
