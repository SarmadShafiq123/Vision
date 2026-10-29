"use client";

import { motion } from "motion/react";
import { useReducedMotion, REVEAL_DURATION_S, REVEAL_EASE } from "@/constants/motion";

export function ArcMark({ className }) {
  const prefersReduced = useReducedMotion();

  return (
    <svg
      viewBox="0 0 300 80"
      fill="none"
      className={className}
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <motion.path
        d="M 10 70 Q 80 10, 150 40 T 290 30"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
        initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: REVEAL_DURATION_S * 2, ease: REVEAL_EASE }}
      />
      <motion.circle
        cx="290"
        cy="30"
        r="3"
        fill="currentColor"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: REVEAL_DURATION_S * 1.5, duration: 0.3 }}
      />
    </svg>
  );
}
