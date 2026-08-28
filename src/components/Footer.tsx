import { AUTHOR } from "@/lib/books";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Stop guessing. <span className="text-brand-yellow">Start doing.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Grab a book, get in touch, or say hello. Whether it's AI, crypto or
              automation — the goal is the same: make it make sense.
            </p>
            <a
              href={AUTHOR.amazonAuthorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 font-bold text-navy-950 transition-transform hover:-translate-y-0.5"
            >
              Shop the series on Amazon
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold uppercase tracking-widest text-muted">
                Explore
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#books" className="text-ink/90 hover:text-brand-yellow">
                    Books
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-ink/90 hover:text-brand-yellow">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href={AUTHOR.amazonAuthorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/90 hover:text-brand-yellow"
                  >
                    Amazon
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold uppercase tracking-widest text-muted">
                Connect
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/clinton-ivins-8bb15142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/90 hover:text-brand-yellow"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@clintonwesleyivins.com"
                    className="text-ink/90 hover:text-brand-yellow"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {year} {AUTHOR.name}. All rights reserved.
          </p>
          <p className="hand text-lg text-brand-blue">Explain it like I'm normal.</p>
        </div>
      </div>
    </footer>
  );
}
