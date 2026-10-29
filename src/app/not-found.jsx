import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ArcMark } from "@/components/shared/arc-mark";

export const metadata = buildMetadata({
  title: "Page not found",
  description: "The page you are looking for does not exist.",
});

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-paper px-6">
      <div className="text-center">
        <span className="font-heading text-8xl font-bold tracking-tight text-line">
          404
        </span>
        <h1 className="mt-4 font-heading text-2xl font-bold text-ink">
          Page not found
        </h1>
        <p className="mt-2 font-body text-base text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-11 items-center rounded-xl bg-royal px-6 font-body text-sm font-semibold text-white transition-colors hover:bg-royal/90"
        >
          Back to home
        </Link>
        <div className="mx-auto mt-8 flex justify-center">
          <ArcMark className="h-8 w-32 text-sky/60" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}
