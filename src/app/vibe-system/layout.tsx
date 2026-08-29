import type { Metadata } from "next";

// Nested layouts in the App Router must NOT render <html>/<body> — only the
// root layout (src/app/layout.tsx) does that, and it already loads Inter
// (--font-inter) and Roboto (--font-heading) plus globals.css.
// Display/H1/H2 reference --font-heading; H3, H4, and body copy stay on
// --font-sans (Inter).
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
