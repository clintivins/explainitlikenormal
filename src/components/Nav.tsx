"use client";

import { useEffect, useState } from "react";
import { AUTHOR } from "@/lib/books";

const links = [
  { href: "#books", label: "Books" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-yellow text-navy-950 font-display text-lg">
            CI
          </span>
          <span className="hidden font-semibold tracking-tight sm:block">
            {AUTHOR.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#books"
            className="rounded-full bg-brand-yellow px-4 py-2 text-sm font-bold text-navy-950 transition-transform hover:-translate-y-0.5"
          >
            Get the books
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 md:hidden"
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#books"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-yellow px-4 py-2 text-center text-sm font-bold text-navy-950"
            >
              Get the books
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
