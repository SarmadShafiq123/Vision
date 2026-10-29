import { Marquee } from "@/components/shared/marquee";
import { marqueeItems } from "@/data/home";

export function SubjectMarquee() {
  if (!marqueeItems || marqueeItems.length === 0) return null;

  return (
    <section className="border-b border-line bg-paper py-8">
      <Marquee items={marqueeItems} />
    </section>
  );
}
