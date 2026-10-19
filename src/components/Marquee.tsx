import { marquee } from "@/data/site";

export function Marquee() {
  const items = [...marquee, ...marquee];

  return (
    <div className="overflow-hidden bg-berry text-cream" aria-hidden>
      <div className="marquee-track flex w-max">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-5 px-4 py-3 text-sm tracking-[0.18em] uppercase"
          >
            {item}
            <span className="text-cream/50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
