"use client";

import { Sun, Moon } from "lucide-react";
import { useSedgeTheme } from "./ThemeProvider";

/**
 * Sun / Moon theme selector for HeroNav -- two icon-only buttons and a
 * "/" between them, no pill background/fill/shadow. Active icon reads
 * --text-primary with a thin underline; inactive reads the quieter
 * --text-muted (see theme.css's .theme-toggle-* rules for all of the
 * actual styling -- this component is just markup + state).
 *
 * Real toggle buttons, not radio inputs: `aria-pressed` exposes which
 * one is selected, each has its own accessible name ("Light theme" /
 * "Dark theme"), `.focus-ring` gives both a visible keyboard-focus
 * indicator, and the 40px box (set in CSS) gives each a comfortable
 * touch target well past the visually small 17px icon.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useSedgeTheme();

  return (
    <div className="theme-toggle">
      <button
        type="button"
        className="theme-toggle-btn focus-ring"
        aria-pressed={theme === "light"}
        aria-label="Light theme"
        onClick={() => toggleTheme("light")}
      >
        <Sun size={17} strokeWidth={1.5} aria-hidden="true" />
      </button>

      <span aria-hidden="true" className="theme-toggle-slash">
        /
      </span>

      <button
        type="button"
        className="theme-toggle-btn focus-ring"
        aria-pressed={theme === "dark"}
        aria-label="Dark theme"
        onClick={() => toggleTheme("dark")}
      >
        <Moon size={17} strokeWidth={1.5} aria-hidden="true" />
      </button>
    </div>
  );
}
