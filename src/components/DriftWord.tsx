"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function DriftWord() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.p
        style={reduce ? undefined : { x }}
        className="absolute top-[8%] left-[-4vw] font-display text-[26vw] leading-none text-transparent"
      >
        <span style={{ WebkitTextStroke: "1.5px rgb(28 22 18 / 0.16)" }}>väl</span>
      </motion.p>
    </div>
  );
}
