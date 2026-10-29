"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks, registerHref } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-lg border border-line bg-card md:hidden",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          )}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm border-line bg-paper p-0">
        <SheetHeader className="flex flex-row items-center justify-between border-b border-line px-6 py-4">
          <SheetTitle className="font-heading text-lg font-bold text-ink">
            Menu
          </SheetTitle>
          <SheetClose asChild>
            <button
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-lg hover:bg-mist",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </SheetClose>
        </SheetHeader>
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center rounded-lg px-4 py-3 font-body text-base font-medium transition-colors",
                  isActive
                    ? "bg-mist text-royal"
                    : "text-muted-foreground hover:bg-mist hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={registerHref}
            onClick={() => setOpen(false)}
            className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-royal px-4 py-3 font-body text-base font-semibold text-white transition-colors hover:bg-royal/90"
          >
            Register now
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
