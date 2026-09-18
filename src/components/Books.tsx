import Image from "next/image";
import { books } from "@/lib/books";
import { asset } from "@/lib/config";

export default function Books() {
  return (
    <section id="books" className="scroll-mt-20 bg-navy-950 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
            The library
          </span>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
            {books.length} books in this series. <span className="text-brand-yellow">Zero jargon.</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Each guide takes one big, intimidating topic and breaks it down into
            plain language, real examples, and steps you can follow today.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.slug}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-800/60 p-5 transition-colors hover:border-brand-yellow/50 sm:p-6"
            >
              <div className="mx-auto w-full max-w-[230px]">
                <div className="relative aspect-[2/3]">
                  <Image
                    src={asset(book.cover)}
                    alt={`${book.title} cover`}
                    fill
                    sizes="(max-width: 640px) 60vw, (max-width: 1280px) 30vw, 20vw"
                    className="rounded-lg object-cover shadow-xl shadow-black/50 ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-1 flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                    {book.series}
                  </span>
                  {book.badge && (
                    <span className="rounded-full border border-brand-yellow/60 bg-brand-yellow/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-brand-yellow">
                      {book.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-2 font-display text-2xl uppercase leading-tight text-ink">
                  {book.title}
                </h3>

                <p className="mt-2 hand text-2xl text-brand-blue">{book.tagline}</p>
                <p className="mt-3 text-muted">{book.description}</p>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-sm font-bold text-navy-950 transition-transform hover:-translate-y-0.5"
                  >
                    Buy on Kindle
                    <span aria-hidden="true">→</span>
                  </a>
                  {book.amazonUsUrl && (
                    <a
                      href={book.amazonUsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-white/5"
                    >
                      US store
                    </a>
                  )}
                </div>
                <p className="mt-2 text-xs text-muted">Opens Amazon in a new tab.</p>
                <div className="mt-4 border-t border-white/10 pt-3">
                  <p className="text-xs uppercase tracking-wider text-muted">Kindle and paperback available</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
