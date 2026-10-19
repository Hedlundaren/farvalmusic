import { site } from "@/data/site";
import Image from "next/image";

export function Hello() {
  return (
    <section id="hello" className="relative min-h-[100svh] overflow-hidden bg-ink text-cream">
      <Image
        src="/nature/peaks.jpg"
        alt="Snowy mountains above a wide forested valley"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/25" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pt-32 pb-16 md:px-10 md:pb-20">
        <p className="text-xs tracking-[0.28em] uppercase text-cream/75">Far väl</p>
        <h2 className="mt-3 max-w-5xl font-display text-[clamp(4rem,12vw,9rem)] leading-[0.85] italic">
          Travel well.
        </h2>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-md text-lg leading-relaxed text-cream/90">
            Concerts, dances, and gatherings with enough room for a clarinet. If you
            have a floor, we would like to play it.
          </p>
          {site.bookingEmail ? (
            <a
              href={`mailto:${site.bookingEmail}`}
              className="rounded-full bg-berry px-6 py-3 text-sm text-cream transition-transform hover:-translate-y-0.5"
            >
              Write to {site.bookingEmail}
            </a>
          ) : (
            <p className="max-w-xs text-sm leading-relaxed text-cream/70">
              The letter box is being painted. A booking address will land here.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
