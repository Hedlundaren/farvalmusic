import { members, site, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-cream md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="font-display text-4xl italic">{site.name}</p>
          <p className="mt-2 text-sm text-cream/65">{site.tagline}</p>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-cream/70">
          {members.map((member) => member.name).join(" · ")}
        </p>
      </div>
      {socials.length > 0 ? (
        <ul className="mt-8 flex flex-wrap gap-4 text-sm">
          {socials.map((social) => (
            <li key={social.href}>
              <a href={social.href} className="underline decoration-cream/30 underline-offset-4">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-cream/15 pt-6 text-xs tracking-wide text-cream/50">
        <p>© {site.name}</p>
        <a
          href="https://unsplash.com"
          className="underline decoration-cream/25 underline-offset-4"
        >
          Nature photographs from Unsplash
        </a>
      </div>
    </footer>
  );
}
