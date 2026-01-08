import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // Optional: Inter supports variable weights without listing all.
  // If you prefer explicit, you can keep your weight array.
});

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
  // Space Grotesk supports variable weights too.
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
    <html lang="en" className={`${inter.variable} ${space.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
