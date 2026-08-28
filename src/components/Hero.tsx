import Image from "next/image";
import { books } from "@/lib/books";
import { asset } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative overflow-hidden border-b border-white/10 bg-navy-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950/60" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/40 bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue">
            The “Explain It Like I'm Normal” series
          </span>

          <h1 className="display mt-6 text-5xl text-ink sm:text-6xl lg:text-7xl">
            Big tech ideas,
            <br />
            <span className="text-brand-yellow">explained like</span>
            <br />
            <span className="brush-underline">you're normal.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I'm{" "}
            <span className="font-semibold text-ink">Clinton Wesley Ivins</span>
            . I write plain-English books that turn confusing subjects — AI,
            crypto, automation — into something anyone can actually use. No
            jargon. No hype. Just answers that make sense.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#books"
              className="rounded-full bg-brand-yellow px-6 py-3 font-bold text-navy-950 shadow-lg shadow-brand-yellow/20 transition-transform hover:-translate-y-0.5"
            >
              Browse the books
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-ink transition-colors hover:bg-white/5"
            >
              Meet the author
            </a>
          </div>

          <dl className="mt-10 flex gap-8">
            <div>
              <dt className="text-3xl font-black text-brand-yellow">4</dt>
              <dd className="text-sm text-muted">Books in the series</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-brand-yellow">20+</dt>
              <dd className="text-sm text-muted">Years in tech</dd>
            </div>
            <div>
              <dt className="text-3xl font-black text-brand-yellow">0</dt>
              <dd className="text-sm text-muted">Jargon required</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-blue/10 blur-2xl" />
          <div className="relative animate-float">
            <Image
              src={asset(books[0].cover)}
              alt={books[0].title}
              width={480}
              height={720}
              priority
              className="mx-auto w-[78%] rounded-lg shadow-2xl shadow-black/50 ring-1 ring-white/10"
            />
            <Image
              src={asset(books[3].cover)}
              alt={books[3].title}
              width={300}
              height={450}
              className="absolute -bottom-6 -left-2 w-[40%] rotate-[-8deg] rounded-md shadow-2xl shadow-black/60 ring-1 ring-white/10"
            />
            <Image
              src={asset(books[2].cover)}
              alt={books[2].title}
              width={300}
              height={450}
              className="absolute -right-2 -top-4 w-[38%] rotate-[9deg] rounded-md shadow-2xl shadow-black/60 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
