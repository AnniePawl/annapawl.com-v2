import { Fragment } from "react";
import type { NavSection } from "../_data/sections";
import { cx } from "../../../lib/cx";

// The real sidebar is `hidden lg:block` — below that breakpoint there's
// currently no way to jump between sections at all. This is the mobile
// equivalent: a horizontally-scrolling strip of section chips, sticky to
// the top of the scrolling <main> so it stays reachable while you read.
export default function MobileNav({
  sections,
  activeId,
  onSelect,
}: {
  sections: NavSection[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav
      aria-label="Section navigation"
      className="no-scrollbar sticky top-0 z-10 -mx-2 mb-6 flex items-center gap-2 overflow-x-auto bg-[#fffcf7]/95 px-2 py-3 backdrop-blur-sm lg:hidden"
    >
      {sections.map((section, index) => {
        const Icon = section.icon;
        const isActive = activeId === section.id;
        // A thin divider ahead of the first chip of a new group (Intro /
        // Foundations / Components) — same grouping as the sidebar and
        // the in-page headings, just a lighter touch since there's no
        // room for a text label in a horizontal chip strip.
        const isNewGroup =
          index > 0 && sections[index - 1].group !== section.group;

        return (
          <Fragment key={section.id}>
            {isNewGroup ? (
              <span
                aria-hidden="true"
                className="mx-1 h-6 w-px shrink-0 bg-zinc-300"
              />
            ) : null}
            <button
              type="button"
              onClick={() => onSelect(section.id)}
              className={cx(
                "focus-ring flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium whitespace-nowrap transition",
                isActive
                  ? "border-transparent bg-indigo-soft text-zinc-900"
                  : "border-zinc-200 bg-white text-zinc-700"
              )}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {section.title}
            </button>
          </Fragment>
        );
      })}
    </nav>
  );
}
