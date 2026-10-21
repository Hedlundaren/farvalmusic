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
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-cream/30 underline-offset-4"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-10 border-t border-cream/15 pt-6 text-xs tracking-wide text-cream/50">
        <p>© 2026 Far väl. All rights reserved.</p>
      </div>
    </footer>
  );
}
