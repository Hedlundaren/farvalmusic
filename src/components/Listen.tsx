const discs = [
  { label: "At home", note: "Nordic sets" },
  { label: "Abroad", note: "Tunes from the road" },
  { label: "Sung", note: "Songs, when the room asks" },
];

export function Listen() {
  return (
    <section id="listen" className="relative overflow-hidden bg-moss text-cream">
      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <p className="text-xs tracking-[0.28em] text-berry uppercase">The listening room</p>
        <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95]">
          Better in the room than on a speaker.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">
          Nothing is up for streaming yet. When there is a recording, it will live
          here. Until then, the honest way to hear Far väl is in person.
        </p>
        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute inset-x-8 top-[5.5rem] space-y-3 sm:top-24"
            aria-hidden
          >
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="h-px bg-cream/20" />
            ))}
          </div>
          <ul className="relative grid gap-12 sm:grid-cols-3">
            {discs.map((disc) => (
              <li key={disc.label} className="flex flex-col items-center text-center">
                <div className="relative grid h-48 w-48 place-items-center sm:h-52 sm:w-52">
                  <div className="vinyl vinyl-spin absolute inset-0 rounded-full" />
                  <span className="relative z-10 max-w-24 text-center font-display text-lg leading-tight italic text-cream">
                    {disc.label}
                  </span>
                </div>
                <p className="mt-5 text-sm tracking-[0.14em] text-cream/75 uppercase">{disc.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
