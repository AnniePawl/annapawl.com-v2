import type { Metadata } from "next";

// Nested layouts in the App Router must NOT render <html>/<body> — only the
// root layout (src/app/layout.tsx) does that, and it already loads both
// Inter (--font-inter) and Space Grotesk (--font-space) plus globals.css.
// This file previously duplicated a second <html>/<body> shell with only
// Inter loaded, which meant --font-display silently fell back to Inter
// on every /vibe-system page instead of using Space Grotesk.
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
