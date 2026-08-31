export type Book = {
  slug: string;
  title: string;
  series: string;
  cover: string;
  tagline: string;
  description: string;
  highlights: string[];
  accent: "yellow" | "blue";
  amazonUrl: string;
};

const amazonSearch = (query: string) =>
  `https://www.amazon.co.uk/s?k=${encodeURIComponent(
    `${query} Clinton Wesley Ivins`,
  )}&i=stripbooks`;

export const AUTHOR = {
  name: "Clinton Wesley Ivins",
  series: "Explain It Like I'm Normal",
  // Provided by the author. Also acts as the "browse everything" entry point.
  amazonAuthorUrl: "https://www.amazon.co.uk/dp/B0H38TGKMT",
};

export const books: Book[] = [
  {
    slug: "ai-explain-it-like-im-normal",
    title: "AI: Explain It Like I'm Normal",
    series: "Explain It Like I'm Normal",
    cover: "/books/ai.png",
    tagline: "Your everyday AI assistant — without the geek speak.",
    description:
      "How to use artificial intelligence to save time, get more done, and make everyday life easier. No jargon, no coding — just AI that actually makes sense.",
    highlights: [
      "Practical examples you can use today",
      "100 copy-and-paste AI prompts",
      "No experience needed",
    ],
    accent: "blue",
    amazonUrl: amazonSearch("AI Explain It Like I'm Normal"),
  },
  {
    slug: "ai-agents-explain-it-like-im-normal",
    title: "AI Agents: Explain It Like I'm Normal",
    series: "Explain It Like I'm Normal",
    cover: "/books/ai-agents.png",
    tagline: "Chatbots answer questions. AI agents get things done.",
    description:
      "How to build your own AI assistants, automate the boring stuff, and get AI to actually do things — with step-by-step projects you can use today.",
    highlights: [
      "Build real AI agents without coding",
      "Step-by-step projects you can use today",
      "Tools, templates and examples included",
    ],
    accent: "yellow",
    amazonUrl: amazonSearch("AI Agents Explain It Like I'm Normal"),
  },
  {
    slug: "bitcoin-crypto-explain-it-like-im-normal",
    title: "Bitcoin & Crypto: Explain It Like I'm Normal",
    series: "Explain It Like I'm Normal",
    cover: "/books/bitcoin-crypto.png",
    tagline: "Don't just hear about crypto. Understand it.",
    description:
      "The plain-English guide to Bitcoin, cryptocurrency, blockchain and Web3 — without the jargon or hype. Buy, store and send safely, and avoid the scams.",
    highlights: [
      "No tech degree required",
      "Wallets, exchanges and security",
      "Avoid scams, rug pulls and costly mistakes",
    ],
    accent: "yellow",
    amazonUrl: amazonSearch("Bitcoin Crypto Explain It Like I'm Normal"),
  },
  {
    slug: "making-money-with-ai",
    title: "Making Money with AI: Explain It Like I'm Normal",
    series: "Explain It Like I'm Normal",
    cover: "/books/making-money-with-ai.png",
    tagline: "AI isn't an ATM. It's leverage.",
    description:
      "Practical ways to use AI to start a side hustle, build a business and create new income streams. No hype, no Lamborghini promises — just what works.",
    highlights: [
      "10 complete AI business blueprints",
      "75+ copy-and-use prompts",
      "Pricing, marketing and delivery guides",
    ],
    accent: "blue",
    amazonUrl: amazonSearch("Making Money with AI Explain It Like I'm Normal"),
  },
  {
    slug: "scams-explain-it-like-im-normal",
    title: "Scams: Explain It Like I'm Normal",
    series: "Explain It Like I'm Normal",
    cover: "/books/scams.png",
    tagline: "Pause. Check. Verify.",
    description:
      "How AI voice clones, fake invoices, romance scams and fake investments actually work — and what you can do to protect yourself.",
    highlights: [
      "Spot the red flags",
      "Verify before you trust",
      "Protect your money",
    ],
    accent: "yellow",
    amazonUrl: "https://www.amazon.co.uk/dp/B0HH7SXSFT",
  },
];
