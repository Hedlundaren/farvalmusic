import { shows } from "@/data/site";

export function Dates() {
  return (
    <section id="dates" className="bg-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <p className="text-xs tracking-[0.28em] text-berry uppercase">Out playing</p>
        <h2 className="mt-4 font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95]">
          The poster wall
        </h2>

        {shows.length === 0 ? (
          <div className="mx-auto mt-14 max-w-xl -rotate-1 bg-cream px-8 py-14 text-center shadow-[0_24px_50px_rgb(28_22_18_/_0.08)]">
            <div className="mx-auto mb-8 h-3.5 w-3.5 rounded-full bg-berry shadow-[0_6px_0_rgb(28_22_18_/_0.15)]" />
            <p className="text-xs tracking-[0.24em] uppercase text-ink-soft">Nothing pinned up</p>
            <p className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">
              The wall is clear.
            </p>
            <p className="mx-auto mt-4 max-w-sm leading-relaxed text-ink-soft">
              When a concert, a dance, or a slightly too-small room is booked, the
              date goes here in letters you can read from the door.
            </p>
          </div>
        ) : (
          <ol className="mt-12">
            {shows.map((show) => (
              <li
                key={`${show.date}-${show.place}`}
                className="grid gap-2 border-t border-line py-7 md:grid-cols-[13rem_1.2fr_1fr] md:items-baseline md:gap-6"
              >
                <time className="text-sm tracking-[0.14em] text-berry uppercase">{show.date}</time>
                <p className="font-display text-4xl leading-none">{show.city}</p>
                <p className="text-ink-soft">
                  {show.place}
                  {show.note ? <span className="mt-1 block text-sm">{show.note}</span> : null}
                </p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
