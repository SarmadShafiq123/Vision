"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/constants/motion";
import { fadeUpVariants, getMotionProps } from "@/constants/motion";

export function Reveal({ children, className, delay = 0 }) {
  const prefersReduced = useReducedMotion();
  const motionProps = getMotionProps(prefersReduced);

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      {...motionProps}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
