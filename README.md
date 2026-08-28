# Clinton Wesley Ivins — Author Website

A clean, professional promotional website for **Clinton Wesley Ivins** and the
_"Explain It Like I'm Normal"_ book series. Built to match the bold navy /
yellow / blue theme of the book covers.

## What's inside

- **Hero** — series intro, author positioning, and a stacked display of covers.
- **Books** — all four titles with taglines, descriptions, key highlights, and
  Amazon buy links.
- **About** — professional bio (drawn from the author's public background in
  cybersecurity and technology) plus credentials.
- **Footer / Contact** — call-to-action, Amazon and LinkedIn links.

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- `next/font` (Anton for display, Inter for body, Caveat for handwritten accents)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:43127](http://localhost:43127).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build (port 43127)
npm run lint    # eslint
```

## Editing content

Everything book-related lives in one file:

```
src/lib/books.ts
```

- `books[]` — title, tagline, description, highlights, cover, and `amazonUrl`
  for each book.
- `AUTHOR` — name, series, and the Amazon entry point (`amazonAuthorUrl`).

### Amazon links

Individual "View on Amazon" buttons currently point to Amazon.co.uk **search**
URLs for each exact title + author, which reliably land on the right product.
To pin them to exact product pages, replace each book's `amazonUrl` with its
`https://www.amazon.co.uk/dp/<ASIN>` link.

### Book covers

Cover images live in `public/books/`. Replace those files (keeping the same
names) to update artwork.

### Bio

The author bio and credentials are in `src/components/About.tsx`.
