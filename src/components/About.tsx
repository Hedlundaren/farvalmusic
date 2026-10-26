import Image from "next/image";
import { DriftWord } from "@/components/DriftWord";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="music" className="relative overflow-hidden bg-paper">
      {/* <DriftWord /> */}
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="text-xs tracking-[0.28em] text-berry uppercase">
            The music
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.95] tracking-tight">
            Close to home.
            <span className="mt-1 block italic text-berry">Passed along.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6" delay={0.05}>
            <p className="max-w-md text-lg leading-relaxed text-pretty">
              Far väl plays concerts, and sits down with other musicians for
              workshops. Swedish, Norwegian, Danish, Indian, Irish, and American
              tunes, taught so they can travel further.
            </p>
          </Reveal>
          <Reveal className="md:col-span-5 md:col-start-8" delay={0.12}>
            <p className="text-lg leading-relaxed text-ink-soft text-pretty">
              The name is a wish on the way out the door. Far väl. The work is
              the same wish: share the tradition, and inspire someone to carry
              it further.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-end gap-4 sm:grid-cols-12 sm:gap-5">
          <figure className="sm:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.6rem]">
              <Image
                src="/the-band/1.jpg"
                alt="Far väl with fiddles and guitars in front of an autumn pine forest"
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="origin-[center_50%] scale-145 object-cover object-[center_58%]"
              />
            </div>
          </figure>
          <figure className="sm:col-span-4 sm:-mb-10">
            <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-[1.6rem] shadow-[0_18px_40px_rgb(28_22_18_/_0.12)]">
              <Image
                src="/the-band/6.jpg"
                alt="Far väl standing together among the pines, holding instruments"
                fill
                sizes="(min-width: 640px) 32vw, 100vw"
                className="object-cover object-[center_48%]"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
