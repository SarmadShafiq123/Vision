import { useReducedMotion } from "motion/react";

export const REVEAL_OFFSET_PX = 16;
export const REVEAL_DURATION_S = 0.5;
export const REVEAL_EASE = [0.22, 1, 0.36, 1];

export const STAGGER_CHILDREN_S = 0.08;

export const COUNTER_DURATION_S = 1.8;

export const VIEWPORT_ONCE = true;
export const VIEWPORT_MARGIN = "-80px";

export const fadeUpVariants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET_PX },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION_S, ease: REVEAL_EASE },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER_CHILDREN_S } },
};

export function getMotionProps(prefersReduced) {
  if (prefersReduced) return {};
  return {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: VIEWPORT_ONCE, margin: VIEWPORT_MARGIN },
  };
}

export { useReducedMotion };
