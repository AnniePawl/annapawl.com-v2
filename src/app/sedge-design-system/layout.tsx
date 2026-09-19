import type { Metadata } from "next";
import ThemeProvider from "./_components/ThemeProvider";
import SmoothScrollProvider from "./_components/SmoothScrollProvider";
import "./theme.css";
import "./smooth-scroll.css";

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

// ThemeProvider (+ theme.css, imported once here for the whole route)
// scopes the light/dark toggle to this layout's subtree only -- see
// ThemeProvider.tsx for why it lives at this level rather than in
// page.tsx, and theme.css's top comment for why nothing here can leak
// onto the rest of the site.
export default function SedgeDesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // SmoothScrollProvider wraps ThemeProvider (order doesn't matter --
  // they don't interact) and, like it, lives only at this route's
  // layout level: mounted when someone enters the design system,
  // torn down the moment they leave it, so no other page on the site
  // ever picks up the smooth-scroll behavior.
  return (
    <SmoothScrollProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SmoothScrollProvider>
  );
}
