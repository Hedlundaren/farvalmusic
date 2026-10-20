import { members, site, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-cream md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <p className="font-display text-4xl italic">{site.name}</p>
          <p className="mt-2 text-sm text-cream/65">{site.tagline}</p>
        </div>
        <div className="text-sm leading-relaxed text-cream/70">
          <p>{members.map((member) => member.name).join(" · ")}</p>
          <p className="mt-3">
            <a href={`mailto:${site.contact.email}`} className="underline decoration-cream/30 underline-offset-4">
              {site.contact.email}
            </a>
            <span className="mx-2 text-cream/35">·</span>
            <a href={site.contact.phoneHref}>{site.contact.phone}</a>
          </p>
        </div>
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
        <p className="text-right">
          <a
            href="https://unsplash.com"
            className="underline decoration-cream/25 underline-offset-4"
          >
            Photographs from Unsplash
          </a>
          <span className="mx-1.5 text-cream/30">·</span>
          <a
            href="https://commons.wikimedia.org/wiki/File:M%C3%B8ns_Klint_chalk_cliffs_1.jpg"
            className="underline decoration-cream/25 underline-offset-4"
          >
            Møns Klint by kallerna
          </a>
          ,{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            className="underline decoration-cream/25 underline-offset-4"
          >
            CC BY-SA
          </a>
        </p>
      </div>
    </footer>
  );
}
