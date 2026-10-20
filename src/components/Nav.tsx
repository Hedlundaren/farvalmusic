"use client";

import { site } from "@/data/site";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  { href: "#music", label: "Music" },
  { href: "#map", label: "Tunes" },
  { href: "#ensemble", label: "The six" },
  { href: "#listen", label: "Listen" },
  { href: "#dates", label: "Dates" },
  { href: "#hello", label: "Hello" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setSolid(value > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = !solid && !open;

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[120] focus:rounded-full focus:bg-cream focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-300 ${
          light ? "text-cream" : "bg-paper/90 text-ink backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="font-display text-2xl leading-none tracking-tight italic">
            {site.name}
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-full border border-current px-4 py-1.5 text-sm lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.nav
            id="site-menu"
            aria-label="Mobile"
            className="fixed inset-0 z-[80] flex flex-col justify-center bg-paper px-6 text-ink"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {links.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      const id = link.href.slice(1);
                      setOpen(false);
                      window.setTimeout(() => {
                        document.body.style.overflow = "";
                        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                        document.getElementById(id)?.scrollIntoView({
                          behavior: reduce ? "auto" : "smooth",
                        });
                        history.replaceState(null, "", `#${id}`);
                      }, 60);
                    }}
                    className="flex items-baseline gap-4 py-1"
                  >
                    <span className="w-8 text-sm text-berry">0{index + 1}</span>
                    <span className="font-display text-5xl leading-tight sm:text-7xl">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  );
}
