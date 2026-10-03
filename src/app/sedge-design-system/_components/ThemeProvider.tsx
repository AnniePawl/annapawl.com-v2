"use client";

import { createContext, useContext, useState } from "react";

export type SedgeTheme = "light" | "dark";

type ThemeContextValue = {
  theme: SedgeTheme;
  toggleTheme: (next: SedgeTheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Scopes a light/dark theme to the sedge-design-system route only.
 *
 * Deliberately minimal, per the brief:
 * - Starts at "light" every time -- no `prefers-color-scheme` read, no
 *   localStorage read. A fresh load (or a fresh visit) is always light.
 * - Never writes to localStorage either, so the choice doesn't survive
 *   a reload or a later visit -- it's in-memory React state only.
 * - Lives here, in the *layout* (see sedge-design-system/layout.tsx),
 *   not in page.tsx -- Next.js keeps a layout's component state across
 *   client-side navigations within it, which is what makes "retain the
 *   selection while navigating within the design system" work for
 *   free. Leaving the route unmounts this provider entirely, so there
 *   is nothing left to "carry onto the rest of the site" -- no global
 *   class, no document-level attribute, nothing outside this
 *   component's own subtree.
 *
 * The actual color values live in theme.css, scoped to the
 * [data-sedge-theme="dark"] attribute this sets on its wrapper <div>;
 * this component only owns the on/off state, not any of the colors.
 */
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<SedgeTheme>("light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: setTheme }}>
      <div data-sedge-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useSedgeTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useSedgeTheme must be used within ThemeProvider");
  }

  return ctx;
}
