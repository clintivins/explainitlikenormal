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
            I don't just answer questions. I get stuff done.
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
            Clinton is a senior cybersecurity and technology leader with more
            than{" "}
            <span className="font-semibold text-ink">
              20 years of experience
            </span>{" "}
            spanning identity &amp; access management, cloud architecture and
            enterprise security. He has led delivery for global organisations
            across banking, professional services and financial services, and
            holds some of the industry's most respected certifications.
          </p>
          <p>
            But his day job comes with a frustration he couldn't shake: the
            technology that's reshaping everyone's life is almost always
            explained in a language only insiders understand. Friends, family
            and colleagues kept asking the same honest questions —{" "}
            <span className="italic text-ink/90">
              “What actually is AI? Is crypto a scam? Where do I even start?”
            </span>
          </p>
          <p>
            So he started writing the books he wished existed: clear, practical,
            hype-free guides that respect your time and your intelligence. The{" "}
            <span className="font-semibold text-ink">
              “Explain It Like I'm Normal”
            </span>{" "}
            series takes the subjects everyone's talking about — artificial
            intelligence, AI agents, cryptocurrency and building income with AI —
            and makes them genuinely usable for people who don't have a tech
            degree and don't want one.
          </p>
          <p>
            Based in the United Kingdom, Clinton writes with one rule in mind: if
            your neighbour couldn't follow it, it doesn't belong in the book.
          </p>

          <blockquote className="mt-8 rounded-2xl border-l-4 border-brand-yellow bg-navy-800/60 p-6 text-ink">
            <p className="text-xl font-medium">
              “Chatbots answer questions. I want to help you actually get things
              done — without the geek speak.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
