"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { asset } from "@/lib/config";

const links = [
  { href: "#books", label: "Books" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const FACEBOOK_HREF = "https://www.facebook.com/profile.php?id=61594667902758";

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.55.45-1 1-1z" />
    </svg>
  );
}

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
        <a href="#top" className="group flex min-w-0 items-center" aria-label="Explain It Like I am Normal home">
          <Image
            src={asset("/site-banner.png")}
            alt="Explain It Like I am Normal banner logo"
            width={2142}
            height={734}
            className="h-[5.625rem] w-auto max-w-[86vw] drop-shadow-[0_5px_14px_rgba(0,0,0,0.38)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:h-[6.75rem] sm:max-w-[72vw] md:h-[7.875rem] md:max-w-[54vw] lg:h-36"
            priority
          />
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
            href={FACEBOOK_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <FacebookIcon />
            Facebook
          </a>
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
              href={FACEBOOK_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-ink"
            >
              <FacebookIcon />
              Facebook
            </a>
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
