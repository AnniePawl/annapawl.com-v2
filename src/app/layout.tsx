import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // Optional: Inter supports variable weights without listing all.
  // If you prefer explicit, you can keep your weight array.
});

// Heading typeface — display/h1/h2 only. Body text, h3/h4, and everything
// else stays on Inter (--font-sans). Roboto ships as a variable font (like
// Inter), so no explicit weight list needed here.
const heading = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Anna Pawl",
  description: "Anna Pawl Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${heading.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
