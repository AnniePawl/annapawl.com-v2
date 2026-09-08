import type { NavSection, SectionGroup } from "../_data/sections";
import { cx } from "../../../lib/cx";
import Shape from "../../../components/ui/Shape";

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
    <header className="sticky top-0 z-20 border-b border-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] bg-[#fffcf7]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Logo mark — a single orange "bloom," swapped in for the
              old Rubik's-cube-style 3x3 facelet grid. First pass used
              `scallop`, but that reads more like a rounded cog/cloud
              than an actual flower — swapped to `bloom`, a new Shape
              variant (see Shape.tsx) built specifically as a 6-petal
              flower silhouette, so it actually reads as a bloom rather
              than a generic soft shape. Reusing a Shape primitive here
              (rather than a one-off SVG) keeps the logo in the same
              visual language as the hero's own shape cluster. Solid
              `-bold` orange, not `-soft`, so it reads as a mark rather
              than a soft UI fill at this small a size. Sized a touch
              bigger than the old grid mark (h-7 → h-8) since 6 petals
              need a little more room to read clearly at logo scale. */}
          <Shape
            variant="bloom"
            className="h-8 w-8 text-orange-bold"
            aria-hidden="true"
          />
          <span className="flex items-baseline gap-2">
            <span className="h-display text-xl">Sedge</span>
            <span aria-hidden="true" className="text-[var(--border-subtle)]">
              |
            </span>
            <span className="text-sm text-[var(--text-secondary)]">
              Design System
            </span>
          </span>
        </div>

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
                    : "text-[var(--text-secondary)] hover:bg-indigo-soft hover:text-[var(--text-primary)]"
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
