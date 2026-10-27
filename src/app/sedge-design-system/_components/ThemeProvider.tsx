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
 * - Starts at "light" 
 * - Never writes to localStorage 
 * - Lives here, in the *layout* (see sedge-design-system/layout.tsx),
 *   not in page.tsx 
 * - Color values live in theme.css, scoped to the
 * [data-sedge-theme="dark"] attribute 
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
