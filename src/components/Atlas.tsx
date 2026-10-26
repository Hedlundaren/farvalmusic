"use client";

import { places } from "@/data/site";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function PlaceCard({
  place,
  index,
  className = "",
}: {
  place: (typeof places)[number];
  index: number;
  className?: string;
}) {
  return (
    <article
      className={`relative h-[58vh] w-[78vw] max-w-[460px] shrink-0 snap-center overflow-hidden rounded-[1.6rem] sm:w-[48vw] lg:h-auto lg:w-[34vw] lg:max-w-none lg:self-stretch ${className}`}
    >
      <Image
        src={place.image}
        alt={place.alt}
        fill
        sizes="(min-width: 1024px) 34vw, 80vw"
        className="object-cover"
        style={{ objectPosition: place.focus ?? "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
        <p className="text-xs tracking-[0.22em] text-cream/70">0{index + 1}</p>
        <h3 className="mt-1 font-display text-4xl leading-none">
          {place.title}
        </h3>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/85">
          {place.text}
        </p>
      </div>
    </article>
  );
}

export function Atlas() {
  const pinnedRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const [viewport, setViewport] = useState(800);
  const [step, setStep] = useState(1);

  const { scrollYProgress } = useScroll({
    target: pinnedRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      places.length,
      Math.max(1, Math.round(value * (places.length - 1) + 1)),
    );
    setStep(next);
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      setViewport(window.innerHeight);
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section id="map" className="bg-ink text-cream">
      <div className="atlas-carousel px-5 py-20 lg:hidden">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.28em] text-berry uppercase">
              The traditions
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95]">
              What we play and teach
            </h2>
          </div>
          <p className="text-xs tracking-[0.18em] uppercase text-cream/60">
            Swipe
          </p>
        </div>
        <div className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 pb-2 snap-x snap-mandatory">
          {places.map((place, index) => (
            <PlaceCard key={place.title} place={place} index={index} />
          ))}
        </div>
        <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/70">
          Six traditions we play and teach, so they keep traveling.
        </p>
      </div>

      <div
        ref={pinnedRef}
        className="atlas-pinned relative hidden lg:block"
        style={
          reduce
            ? undefined
            : { height: distance > 0 ? distance + viewport : viewport * 3.6 }
        }
      >
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden pt-24 pb-8">
          <div className="mb-5 flex shrink-0 items-end justify-between gap-10 px-[6vw]">
            <div>
              <p className="text-xs tracking-[0.28em] text-berry uppercase">
                The traditions
              </p>
              <h2 className="mt-3 max-w-xl font-display text-5xl leading-[0.95] xl:text-6xl">
                What we play and teach
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
                Six traditions we play and teach, so they keep traveling.
              </p>
            </div>
            <p className="text-sm tracking-[0.2em] text-cream/70 uppercase">
              0{step} / 0{places.length}
            </p>
          </div>
          <motion.div
            ref={trackRef}
            data-atlas-track
            style={reduce ? undefined : { x }}
            className="flex min-h-0 flex-1 gap-5 pl-[6vw] pr-[10vw]"
          >
            {places.map((place, index) => (
              <PlaceCard key={place.title} place={place} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
