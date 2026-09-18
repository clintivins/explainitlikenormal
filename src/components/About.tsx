const credentials = [
  "CISSP — Certified Information Systems Security Professional",
  "CCSP — Certified Cloud Security Professional",
  "Microsoft Certified: Cybersecurity Architect (SC-100)",
  "AWS Certified AI Practitioner",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-navy-900 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="md:sticky md:top-24">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-blue">
            About the author
          </span>
          <h2 className="display mt-3 text-4xl text-ink sm:text-5xl">
            Clinton
            <br />
            <span className="text-brand-yellow">Wesley Ivins</span>
          </h2>
          <p className="hand mt-3 text-3xl text-brand-blue">
            Plain English for people who live with tech, not in it.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 bg-navy-800/60 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
              Credentials
            </h3>
            <ul className="mt-4 space-y-3">
              {credentials.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-ink/90">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-yellow" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Clinton has spent over 20 years helping organisations understand,
            secure and use technology in practical ways. He writes the
            <span className="font-semibold text-ink"> “Explain It Like I&apos;m Normal”</span>
            {" "}series for readers who want clear answers without technical noise.
            Based in the United Kingdom, his focus is simple: explain what matters,
            skip what doesn&apos;t, and help people make confident decisions.
          </p>

          <details className="group rounded-2xl border border-white/10 bg-navy-800/50 p-5">
            <summary className="cursor-pointer list-none text-sm font-semibold uppercase tracking-widest text-brand-yellow">
              <span className="group-open:hidden">Read more</span>
              <span className="hidden group-open:inline">Show less</span>
            </summary>

            <div className="mt-4 space-y-5">
          <p>
            Born in Durban, South Africa, Clinton developed an early passion
            for information technology, not only learning how it worked, but
            finding simple ways to understand and explain the ideas behind it.
            That curiosity grew into a career spanning more than 20 years,
            during which he worked with large organisations to develop and
            secure the technology solutions they rely on every day.
          </p>
          <p>
            After moving to the United Kingdom in 2023, Clinton continued
            applying his experience across information technology,
            cybersecurity, cloud services and digital innovation. Along the
            way, he became increasingly aware of a growing problem: as
            technology advances, the language used to explain it often becomes
            more complicated. Subjects such as artificial intelligence and
            cryptocurrency can leave everyday people wondering what matters,
            what doesn&apos;t and where they should begin.
          </p>
          <p>
            That realisation inspired the{" "}
            <span className="font-semibold text-ink">
              “Explain It Like I&apos;m Normal”
            </span>{" "}
            series, with practical books created for curious readers who do not
            have a technical background.
          </p>
          <p>
            Based in the United Kingdom, Clinton writes to simplify the
            message, remove unnecessary jargon and help readers understand what
            they genuinely need to know. His guiding principle is simple:
            technology should feel useful and accessible, not confusing or
            intimidating.
          </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
