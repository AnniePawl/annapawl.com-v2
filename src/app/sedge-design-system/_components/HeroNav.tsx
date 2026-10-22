import type { NavSection, SectionGroup } from "../_data/sections";
import { cx } from "../../../lib/cx";
import HomeLogo from "../../../components/ui/HomeLogo";
import ThemeToggle from "./ThemeToggle";
import "./logo.css";


const NAV_GROUPS: SectionGroup[] = ["Intro", "Foundations", "Components", "Patterns"];

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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 md:px-6 py-3 md:py-4 sm:gap-6">
        <div className="flex items-center gap-3">
          {/* Logo-->Home */}
          <HomeLogo
            colors={{
              northeast: "var(--cherry-bold)",
              southeast: "var(--sky-bold)",
              southwest: "var(--sky-bold)",
              northwest: "var(--sky-bold)",
              hoverAccent: "var(--sky-bold)",
            }} />
          {/* Copy-->Top of page */}
          <a
            href="#top"
            className="sedge-wordmark-link focus-ring"
            onClick={(e) => {
              e.preventDefault();
              onScrollToTop();
            }}
          >
            <span className="flex items-baseline gap-2">
              <span className="sedge-wordmark-title">Sedge</span>
              <span aria-hidden="true" className="text-[var(--border-subtle)]">
                |
              </span>
              <span className="sedge-wordmark-subtitle">
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
                    "sedge-group-nav-link type-nav focus-ring",
                    isActive
                      ? "sedge-group-nav-link--active"
                      : "sedge-group-nav-link--inactive"
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
