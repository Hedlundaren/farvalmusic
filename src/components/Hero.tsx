"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-moss text-cream"
    >
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-x-0 -top-[12%] h-[124%]"
      >
        <Image
          src="/nature/forest-mist.jpg"
          alt="Sunlight through a dark spruce forest"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/35" />
      <motion.div
        style={reduce ? undefined : { opacity: fade }}
        className="relative z-10 flex h-full flex-col justify-end px-5 pt-28 pb-20 md:px-10 md:pb-24"
      >
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.28em] uppercase text-cream/80">
            Nordic folk, and the scenic route
          </p>
          <h1 className="mt-4 font-display text-[clamp(4.6rem,16vw,11rem)] leading-[0.82] tracking-tight">
            <span className="block">Far</span>
            <span className="block italic">väl</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/90 md:text-lg">
            Two violins, a guitar, a mandolin, a clarinet, and a voice. We start
            in the north and keep the door open.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#ensemble"
              className="rounded-full bg-cream px-5 py-2.5 text-sm text-ink transition-colors hover:bg-berry hover:text-cream"
            >
              Meet the six
            </a>
            <a
              href="#map"
              className="rounded-full border border-cream/50 px-5 py-2.5 text-sm text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              Where the tunes go
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
