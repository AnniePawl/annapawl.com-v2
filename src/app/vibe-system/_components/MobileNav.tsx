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
      className="no-scrollbar sticky top-0 z-10 -mx-2 mb-6 flex gap-2 overflow-x-auto bg-[#fffcf7]/95 px-2 py-3 backdrop-blur-sm lg:hidden"
    >
      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeId === section.id;

        return (
          <button
            key={section.id}
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
        );
      })}
    </nav>
  );
}
