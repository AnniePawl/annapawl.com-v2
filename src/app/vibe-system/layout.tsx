import type { Metadata } from "next";

// Nested layouts in the App Router must NOT render <html>/<body> — only the
// root layout (src/app/layout.tsx) does that, and it already loads Inter
// (--font-inter) plus globals.css. Inter is the only typeface in the
// system now — --font-display (used for h1/h2/display type) is just an
// alias for --font-sans, not a separate face.
export const metadata: Metadata = {
  title: "Vibe System — Anna Pawl",
  description:
    "Design tokens, components, and the reasoning behind annapawl.com.",
};

export default function VibeSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
