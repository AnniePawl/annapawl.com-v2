import Link from "next/link";
import type { NavSection, SectionGroup } from "../_data/sections";
import { cx } from "../../../lib/cx";
import { CLOVER_LEAF_PATHS } from "../../../components/ui/Shape";
import ThemeToggle from "./ThemeToggle";
import "./logo.css";


const NAV_GROUPS: SectionGroup[] = ["Intro", "Foundations", "Components"];

type HeroNavProps = {
  sections: NavSection[];
  activeId: string;
  onSelect: (id: string) => void;
  onScrollToTop: () => void;
};

export default function HeroNav({
  sections,
  activeId,
  onSelect,
  onScrollToTop,
}: HeroNavProps) {
  const activeGroup = sections.find((s) => s.id === activeId)?.group;

  return (
    <header className="sticky top-0 z-20 border-b border-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] bg-[var(--bg-default)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 sm:gap-6">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="sedge-logo-link focus-ring"
          >
            <svg
              viewBox="0 0 200 200"
              className="sedge-logo-mark h-8 w-8"
              aria-hidden="true"
            >
              {(["NE", "SE", "SW", "NW"] as const).map((leaf) => (
                <path
                  key={leaf}
                  className={
                    leaf === "NE"
                      ? "sedge-logo-leaf sedge-logo-leaf--ne"
                      : "sedge-logo-leaf"
                  }
                  d={CLOVER_LEAF_PATHS[leaf]}
                />
              ))}
            </svg>
             </Link>
             <a href="#top"
             onClick = {(e) => {
              e.preventDefault();
              onScrollToTop();
             }}             >
            <span className="flex items-baseline gap-2">
              <span className="text-xl">Sedge</span>
              <span aria-hidden="true" className="text-[var(--border-subtle)]">
                |
              </span>
              <span className="text-sm text-[var(--text-secondary)]">
                Design System
              </span>
            </span>
            </a>
         
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <nav
            aria-label="Section groups"
            className="hidden items-center gap-1 md:flex"
          >
            {NAV_GROUPS.map((group) => {
              const target = sections.find((s) => s.group === group);
              const isActive = activeGroup === group;

              return (
                <button
                  key={group}
                  type="button"
                  onClick={() => target && onSelect(target.id)}
                  className={cx(
                
                    "rounded-[var(--radius-pill)] px-4 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-indigo-soft text-[var(--charcoal)]"
                      : "text-[var(--text-secondary)] hover:bg-indigo-soft/30 hover:text-[var(--text-primary)]"
                  )}
                >
                  {group}
                </button>
              );
            })}
          </nav>

          <span
            aria-hidden="true"
            className="theme-toggle-divider hidden md:block"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
