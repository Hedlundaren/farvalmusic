"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";

export function Progress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[110] h-[3px] origin-left bg-berry"
      aria-hidden
    />
  );
}
