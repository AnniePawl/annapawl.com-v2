import Link from "next/link";
import type { NavSection, SectionGroup } from "../_data/sections";
import { cx } from "../../../lib/cx";
import { CLOVER_LEAF_PATHS } from "../../../components/ui/Shape";
import "./logo.css";

// Top nav for the hero — the reference this was built from uses its own
// nav bar (logo + Intro/Foundations/Components pills) instead of a
// sidebar, sitting above the docs app. The pills below map onto the same
// three groups the sidebar/GroupHeading already use, so clicking one
// jumps to that group's first section exactly like a sidebar item would.
const NAV_GROUPS: SectionGroup[] = ["Intro", "Foundations", "Components", "Resources"];

export default function HeroNav({
  sections,
  activeId,
  onSelect,
}: {
  sections: NavSection[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const activeGroup = sections.find((s) => s.id === activeId)?.group;

  return (
    <header className="sticky top-0 z-20 border-b border-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] bg-[#fffcf8] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        {/* Logo — links home (no prior href existed on this mark; "/"
            is the standard logo-to-home convention). Interactive: on
            hover/keyboard-focus the mark rotates ~8deg + scales to
            1.04 and the upper-right (NE) petal swaps from emerald to
            lilac, everything else stays put -- see logo.css for the
            transition/reduced-motion rules. Renders the four petal
            paths individually (CLOVER_LEAF_PATHS, shared with
            Shape.tsx's `clover` variant) instead of via <Shape>,
            since each petal needs its own class to be recolored
            independently; decorative clover instances elsewhere
            (Hero.tsx, ShapeExamples.tsx) keep using
            <Shape variant="clover" /> untouched and stay
            noninteractive. `.focus-ring` gives it the same visible
            keyboard-focus indicator as the rest of the site. */}
        <Link
          href="/"
          className="sedge-logo-link focus-ring flex items-center gap-3"
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
          <span className="flex items-baseline gap-2">
            <span className="text-xl">Sedge</span>
            <span aria-hidden="true" className="text-[var(--border-subtle)]">
              |
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              Design System
            </span>
          </span>
        </Link>

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
                  // Hover is a soft-purple pill (--violet-soft), distinct
                  // from the active pill's --indigo-soft — was a generic
                  // neutral --bg-subtle gray, which is what read as
                  // "weird" here (the pill shape itself was already
                  // right). Kept text on --text-primary on hover too, to
                  // match the readable contrast active already has,
                  // rather than leaving the lighter --text-secondary.
                  "rounded-[var(--radius-pill)] px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-indigo-soft text-[var(--text-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-indigo-soft/30 hover:text-[var(--text-primary)]"
                )}
              >
                {group}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
