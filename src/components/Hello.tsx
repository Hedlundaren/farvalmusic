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
      <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/62 to-ink/48" />
      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pt-32 pb-28 md:px-10 md:pb-32">
        <p className="text-xs tracking-[0.28em] uppercase text-cream/75">Far väl</p>
        <h2 className="mt-3 max-w-5xl font-display text-[clamp(3.4rem,8vw,7rem)] leading-[0.88] italic">
          Let us play at your place.
        </h2>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <p className="max-w-md text-lg leading-relaxed text-cream/90">
            Concerts, music to dance to, and workshops for fellow musicians. We teach
            the tunes, and the tradition they come from.
          </p>
          <address className="not-italic">
            <p className="text-xs tracking-[0.22em] text-cream/70 uppercase">Booking</p>
            <p className="mt-2 font-display text-3xl leading-none">{site.contact.name}</p>
            <div className="mt-4 flex flex-col gap-1.5 text-sm">
              <a
                href={`mailto:${site.contact.email}`}
                className="underline decoration-cream/40 underline-offset-4 hover:text-berry"
              >
                {site.contact.email}
              </a>
              <a href={site.contact.phoneHref} className="hover:text-berry">
                {site.contact.phone}
              </a>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
