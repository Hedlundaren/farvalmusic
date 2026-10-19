"use client";

import { members } from "@/data/site";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Ensemble() {
  const [active, setActive] = useState(0);
  const rows = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const nodes = rows.current.filter((node): node is HTMLElement => node !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActive(index);
      },
      { rootMargin: "-35% 0px -40% 0px", threshold: [0.15, 0.4, 0.7] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ensemble" className="bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 pt-24 md:px-8 md:pt-32 lg:hidden">
        <p className="text-xs tracking-[0.28em] text-berry uppercase">The band</p>
        <h2 className="mt-3 font-display text-6xl leading-[0.9]">The six</h2>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">
          Pass a tune around this group and it comes back slightly changed. That is
          the point.
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <div className="relative hidden lg:block">
          <div className="sticky top-0 h-screen overflow-hidden bg-moss">
            {members.map((member, index) => {
              const src = member.portrait ?? member.scene;
              const showing = index === active;
              return (
                <div
                  key={member.name}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    showing ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={showing ? (member.portrait ? `${member.name}, ${member.role}` : member.sceneAlt) : ""}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    aria-hidden={!showing}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-ink/25" />
                </div>
              );
            })}
            <div className="absolute inset-x-0 bottom-0 p-10 pb-14 text-cream">
              <p className="text-xs tracking-[0.22em] text-cream/70">0{active + 1}</p>
              <p className="mt-2 font-display text-6xl leading-none">{members[active].name}</p>
              <p className="mt-3 text-lg italic text-cream/85">{members[active].role}</p>
            </div>
            <div className="absolute top-28 left-10 max-w-xs text-cream">
              <p className="text-xs tracking-[0.28em] uppercase text-cream/75">The band</p>
              <h2 className="mt-3 font-display text-6xl leading-[0.9]">The six</h2>
            </div>
          </div>
        </div>

        <div className="px-5 py-10 md:px-8 lg:px-0 lg:py-0">
          <p className="mb-4 hidden max-w-sm text-lg leading-relaxed text-ink-soft lg:ml-16 lg:block lg:pt-28">
            Pass a tune around this group and it comes back slightly changed. That is
            the point.
          </p>
          <ol>
            {members.map((member, index) => {
              const on = index === active;
              return (
                <li
                  key={member.name}
                  data-index={index}
                  ref={(node) => {
                    rows.current[index] = node;
                  }}
                  className="border-t border-line"
                >
                  <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-[1.4rem] lg:hidden">
                    <Image
                      src={member.portrait ?? member.scene}
                      alt={member.portrait ? `${member.name}, ${member.role}` : member.sceneAlt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
                  </div>
                  <div
                    className={`flex items-end justify-between gap-6 py-8 transition-opacity duration-500 lg:min-h-[64vh] lg:items-center lg:px-16 lg:py-0 ${
                      on ? "opacity-100" : "lg:opacity-30"
                    }`}
                  >
                    <div>
                      <p className="text-xs tracking-[0.22em] text-berry">0{index + 1}</p>
                      <h3 className="mt-2 font-display text-5xl leading-none sm:text-6xl lg:text-7xl">
                        {member.name}
                      </h3>
                    </div>
                    <p className="pb-1 text-right font-display text-2xl italic text-ink-soft sm:text-3xl">
                      {member.role}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
