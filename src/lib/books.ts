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
  amazonUsUrl?: string;
  badge?: string;
};

export const AUTHOR = {
  name: "Clinton Wesley Ivins",
  series: "Explain It Like I'm Normal",
  // Browse series via a live title; prefer homepage CTAs for organic push.
  amazonAuthorUrl: "https://www.amazon.co.uk/dp/B0HJJV1L3H",
};

export const books: Book[] = [
  {
    slug: "infrastructure-as-code-explain-it-like-im-normal",
    title: "Infrastructure as Code: Explain It Like I'm Normal",
    series: "Explain It Like I'm Normal",
    cover: "/books/infrastructure-as-code.jpg",
    tagline:
      "What Terraform actually does, how it talks to the cloud, and how people usually break it — without a DevOps degree.",
    description:
      "A plain-English guide to infrastructure as code and Terraform: what it is, how it works with the cloud, and the mistakes that burn teams — without the jargon wall.",
    highlights: [
      "Terraform in plain English",
      "How IaC talks to the cloud",
      "Common ways people break it",
    ],
    accent: "yellow",
    amazonUrl: "https://www.amazon.co.uk/dp/B0HJJV1L3H",
    amazonUsUrl: "https://www.amazon.com/dp/B0HJJV1L3H",
    badge: "New release",
  },
  {
    slug: "ai-explain-it-like-im-normal",
    title: "AI: Explain It Like I'm Normal",
    series: "Explain It Like I'm Normal",
    cover: "/books/ai.png",
    tagline: "Your everyday AI assistant — without the geek speak.",
    description:
      "Plain-English AI for normal people — what it is, what it isn’t, and how to use it without the hype.",
    highlights: [
      "Practical examples you can use today",
      "100 copy-and-paste AI prompts",
      "No experience needed",
    ],
    accent: "blue",
    amazonUrl: "https://www.amazon.co.uk/dp/B0HGRS1713",
    amazonUsUrl: "https://www.amazon.com/dp/B0HGRS1713",
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
    amazonUrl: "https://www.amazon.co.uk/dp/B0H38TGKMT",
    amazonUsUrl: "https://www.amazon.com/dp/B0H38TGKMT",
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
    amazonUrl: "https://www.amazon.co.uk/dp/B0HGRN9BQD",
    amazonUsUrl: "https://www.amazon.com/dp/B0HGRN9BQD",
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
    amazonUrl: "https://www.amazon.co.uk/dp/B0HGRTR2VS",
    amazonUsUrl: "https://www.amazon.com/dp/B0HGRTR2VS",
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
    amazonUsUrl: "https://www.amazon.com/dp/B0HH7SXSFT",
  },
  {
    slug: "your-data-explain-it-like-im-normal",
    title: "Your Data: Explain It Like I'm Normal",
    series: "Explain It Like I'm Normal",
    cover: "/books/data.png",
    tagline: "What phones, apps and smart speakers actually collect — and how to take back control.",
    description:
      "What phones, apps and smart speakers actually collect — and how to take back control.",
    highlights: [
      "What phones and apps collect",
      "Smart speakers and speakers data",
      "Practical ways to take back control",
    ],
    accent: "blue",
    amazonUrl: "https://www.amazon.co.uk/dp/B0HJB3PN87",
    amazonUsUrl: "https://www.amazon.com/dp/B0HJB3PN87",
  },
];
