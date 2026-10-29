"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const LOGO_WIDTH = 140;
const LOGO_HEIGHT = 48;

export function Logo({ className }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${siteConfig.name} home`}
    >
      {failed ? (
        <span className="font-heading text-lg font-bold tracking-tight text-ink">
          {siteConfig.name}
        </span>
      ) : (
        <Image
          src="/brand/logo.png"
          alt={siteConfig.name}
          width={LOGO_WIDTH}
          height={LOGO_HEIGHT}
          priority
          onError={() => setFailed(true)}
          className="h-10 w-auto object-contain"
        />
      )}
    </Link>
  );
}
