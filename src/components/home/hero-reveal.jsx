"use client";

import { motion } from "motion/react";
import { useReducedMotion, fadeUpVariants, REVEAL_DURATION_S, REVEAL_EASE } from "@/constants/motion";

export function HeroReveal({ children, delay = 0 }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeUpVariants}
      transition={{ delay, duration: REVEAL_DURATION_S, ease: REVEAL_EASE }}
    >
      {children}
    </motion.div>
  );
}
