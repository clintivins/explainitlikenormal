import type { Metadata } from "next";
import { Anton, Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clintonwesleyivins.com"),
  title: "Clinton Wesley Ivins — Explain It Like I'm Normal",
  description:
    "Author of the 'Explain It Like I'm Normal' series. Plain-English books on AI, crypto, and making technology actually work for everyday people.",
  openGraph: {
    title: "Clinton Wesley Ivins — Explain It Like I'm Normal",
    description:
      "Plain-English books on AI, crypto, and making technology actually work for everyday people.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy-900 text-ink">
        {children}
      </body>
    </html>
  );
}
