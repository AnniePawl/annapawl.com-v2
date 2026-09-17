import type { Metadata } from "next";

// Nested layouts in the App Router must NOT render <html>/<body> — only the
// root layout (src/app/layout.tsx) does that, and it already loads Inter
// (--font-inter) plus globals.css. --font-heading is aliased to Inter
// (see typography.css) — H1/H2/H3/H4, body copy, and .h-display (Display
// level, including the Hero page's own big "Sedge" title, section
// headings, and HeroNav's small nav-bar "Sedge" wordmark) all render
// that. A Bodoni Moda detour for just the Display level was tried and
// then reverted back to Inter — see typography.css's FONT FAMILIES
// comment for the history.
export const metadata: Metadata = {
  title: "Sedge Design System — Anna Pawl",
  description:
    "Design tokens, components, and the reasoning behind annapawl.com.",
};

export default function SedgeDesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
