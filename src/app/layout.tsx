import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Sitewide typeface — every level (Display, H1-H4, body) renders in
// Inter. Bodoni Moda was tried for the Display level specifically, then
// reverted back to Inter per Anna's "update display text back to
// original inter display font" -- see typography.css's FONT FAMILIES
// comment for the full history. Inter is a variable font on Google Fonts
// with a full 100–900 weight axis, so next/font pulls the whole range
// without an explicit weight array.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
