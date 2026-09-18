import { AUTHOR } from "@/lib/books";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-navy-950 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
          Get in touch
        </span>
        <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
          Contact <span className="text-brand-yellow">Info</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Questions, press, or a hello — email is the best way to reach Clint.
        </p>
        <a
          href={`mailto:${AUTHOR.email}`}
          className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-ink/90 hover:text-brand-yellow"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
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
          {AUTHOR.email}
        </a>
      </div>
    </section>
  );
}
