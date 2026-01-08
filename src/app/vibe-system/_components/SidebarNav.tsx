import type { NavSection } from "../_data/sections";
import { cx } from "./cx";

export default function SidebarNav({
  sections,
  activeId,
  onSelect,
}: {
  sections: NavSection[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav className="h-full">
      <ul className="space-y-1 md:space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <li key={section.id}>
              <button
                onClick={() => onSelect(section.id)}
                className={cx(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs md:text-sm transition",
                  activeId === section.id
                    ? "bg-violet-200 font-medium text-zinc-900"
                    : "text-zinc-900 hover:bg-violet-100 hover:text-zinc-900"
                )}
              >
                <Icon
                  className={cx(
                    "h-4 w-4",
                    activeId === section.id ? "text-violet-600" : "text-lime-600"
                  )}
                />
                <span>{section.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
