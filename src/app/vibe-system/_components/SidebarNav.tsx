import type { NavSection } from "../_data/sections";
import { cx } from "../../../lib/cx";

export default function SidebarNav({
  sections,
  activeId,
  onSelect,
}: {
  sections: NavSection[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  // SECTIONS is already declared in Intro/Foundations/Components order
  // (see _data/sections.ts) — group consecutive items by their `group`
  // rather than re-sorting, so this stays correct even if that order
  // ever changes.
  const groups: { name: string; items: NavSection[] }[] = [];
  for (const section of sections) {
    const current = groups[groups.length - 1];
    if (current && current.name === section.group) {
      current.items.push(section);
    } else {
      groups.push({ name: section.group, items: [section] });
    }
  }

  return (
    <nav className="h-full">
      <ul className="space-y-5">
        {groups.map((group) => (
          <li key={group.name}>
            <p className="mb-2 border-b border-[color-mix(in_srgb,var(--text-primary)_20%,transparent)] px-3 pb-2 text-[11px] font-bold tracking-wide text-[var(--text-primary)] uppercase">
              {group.name}
            </p>
            <ul className="space-y-1 md:space-y-2">
              {group.items.map((section) => {
                const Icon = section.icon;

                return (
                  <li key={section.id}>
                    <button
                      onClick={() => onSelect(section.id)}
                      className={cx(
                        "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs md:text-sm transition",
                        activeId === section.id
                          ? "bg-indigo-soft font-medium text-zinc-900"
                          : "text-zinc-900 hover:bg-indigo-soft hover:text-zinc-900"
                      )}
                    >
                      <Icon
                        className={cx(
                          "h-4 w-4",
                          activeId === section.id
                            ? "text-violet-600"
                            : "text-lime-600"
                        )}
                      />
                      <span>{section.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
