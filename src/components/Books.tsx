import Image from "next/image";
import { books } from "@/lib/books";

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Books() {
  return (
    <section id="books" className="scroll-mt-20 bg-navy-950 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
            The library
          </span>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
            Four books. <span className="text-brand-yellow">Zero jargon.</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Each guide takes one big, intimidating topic and breaks it down into
            plain language, real examples, and steps you can follow today.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          {books.map((book, i) => (
            <article
              key={book.slug}
              className="group grid gap-6 rounded-2xl border border-white/10 bg-navy-800/60 p-6 transition-colors hover:border-brand-blue/40 sm:grid-cols-[180px_1fr] sm:gap-8 sm:p-8"
            >
              <div className="mx-auto w-40 sm:mx-0">
                <div className="relative">
                  <div
                    className={`absolute -inset-3 -z-10 rounded-xl blur-xl ${
                      book.accent === "yellow"
                        ? "bg-brand-yellow/15"
                        : "bg-brand-blue/15"
                    }`}
                  />
                  <Image
                    src={book.cover}
                    alt={`${book.title} cover`}
                    width={320}
                    height={480}
                    className="w-full rounded-lg shadow-xl shadow-black/50 ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Book {i + 1} · {book.series}
                </span>
                <h3 className="mt-2 font-display text-2xl uppercase leading-tight text-ink">
                  {book.title}
                </h3>
                <p
                  className={`mt-1 hand text-2xl ${
                    book.accent === "yellow"
                      ? "text-brand-yellow"
                      : "text-brand-blue"
                  }`}
                >
                  {book.tagline}
                </p>
                <p className="mt-3 max-w-2xl text-muted">{book.description}</p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {book.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-ink/90">
                      <CheckIcon />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-navy-950 transition-transform hover:-translate-y-0.5"
                  >
                    View on Amazon
                    <span aria-hidden="true">→</span>
                  </a>
                  <span className="text-xs text-muted">
                    Available in paperback &amp; Kindle
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
