import { AUTHOR } from "@/lib/books";
import { BASE_PATH } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  const homeHref = BASE_PATH || "/";

  return (
    <footer id="contact" className="scroll-mt-20 border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="display text-3xl text-ink sm:text-4xl">
              Stop guessing. <span className="text-brand-yellow">Start doing.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Grab a book, get in touch, or say hello. Whether it&apos;s AI, crypto or
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
            <a
              href="mailto:info@explainitnormal.co.uk?subject=Next%20guide%20please"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/5"
            >
              Tell me when the next guide drops
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold uppercase tracking-widest text-muted">
                Explore
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href={homeHref} className="text-ink/90 hover:text-brand-yellow">
                    Site home
                  </a>
                </li>
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
                  <a href="#top" className="text-ink/90 hover:text-brand-yellow">
                    Series home
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
                    className="inline-flex items-center gap-2 text-ink/90 hover:text-brand-yellow"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.98 3.5A2.5 2.5 0 0 0 2.5 6a2.5 2.5 0 0 0 2.48 2.5h.02A2.5 2.5 0 0 0 7.5 6 2.5 2.5 0 0 0 5 3.5zM3 9.5h4v11H3zm7 0h3.8v1.6h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0 4.75 2.64 4.75 6.08V20.5h-4v-4.77c0-1.14-.02-2.61-1.59-2.61-1.59 0-1.83 1.24-1.83 2.53v4.85h-4z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/explainitlikeim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink/90 hover:text-brand-yellow"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@explainitnormal.co.uk"
                    className="inline-flex items-center gap-2 text-ink/90 hover:text-brand-yellow"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
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
          <p className="hand text-lg text-brand-blue">Explain it like I&apos;m normal.</p>
        </div>
      </div>
    </footer>
  );
}
