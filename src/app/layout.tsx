import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Anna Pawl",
  description: "Design system + portfolio",
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
