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
    <nav className="h-full text-left">
      <ul className="space-y-5">
        {groups.map((group) => (
          <li key={group.name} data-group={group.name}>
            {/* Same anatomy as .sedge-subheading inside sections: spaced
                caps, a marker in the group's tone, a hairline below. */}
            <p className="sedge-nav-heading">{group.name}</p>
            <ul className="space-y-1 md:space-y-1" data-group={group.name}>
              {group.items.map((section) => {
                const Icon = section.icon;

                return (
                  <li key={section.id}>
                    <button
                      onClick={() => onSelect(section.id)}
                      // Hover/active fills are a faded wash of the group's
                      // tone (.sedge-nav-item in theme.css).
                      className={cx(
                        "sedge-nav-item flex w-full items-center justify-start gap-2 rounded-lg px-3 py-2 text-left text-xs md:text-sm transition",
                        activeId === section.id && "is-active font-medium"
                      )}
                    >
                      <Icon
                        className="h-4 w-4 shrink-0 sedge-sidebar-icon"
                        aria-hidden="true"
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
