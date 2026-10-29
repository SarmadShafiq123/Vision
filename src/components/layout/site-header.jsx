"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navLinks, registerHref } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "border-b border-line bg-paper",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 md:px-8 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative font-body text-sm font-medium transition-colors",
                  isActive
                    ? "text-royal"
                    : "text-muted-foreground hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={registerHref}
            className={cn(
              "hidden h-10 items-center rounded-lg bg-royal px-5 font-body text-sm font-semibold text-white",
              "transition-colors hover:bg-royal/90 md:inline-flex",
            )}
          >
            Register now
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
