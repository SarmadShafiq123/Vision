import Link from "next/link";
import { navLinks } from "@/config/navigation";

export const metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="flex min-h-dvh items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <span className="font-heading text-8xl font-bold tracking-tight text-line">
          404
        </span>
        <h1 className="mt-4 font-heading text-2xl font-bold text-ink">
          Page not found
        </h1>
        <p className="mt-2 font-body text-base text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-royal px-6 font-body text-sm font-semibold text-white transition-colors hover:bg-royal/90"
          >
            Back to home
          </Link>
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex h-11 items-center justify-center rounded-xl border border-line bg-card px-6 font-body text-sm font-semibold text-ink transition-colors hover:bg-mist"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
