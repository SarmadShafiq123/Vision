"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useReducedMotion, COUNTER_DURATION_S } from "@/constants/motion";

export function StatCounter({ value, suffix = "", label }) {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(
    prefersReduced ? value : 0,
  );

  useEffect(() => {
    if (!isInView || prefersReduced) return;
    let raf;
    const start = performance.now();
    function tick(now) {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / COUNTER_DURATION_S, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, prefersReduced, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-bold tracking-tight text-royal md:text-5xl">
        {displayValue}
        {suffix}
      </div>
      <div className="mt-2 font-body text-sm font-medium text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
