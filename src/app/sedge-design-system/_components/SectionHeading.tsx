import type { LucideIcon } from "lucide-react";
import { SECTIONS } from "../_data/sections";

/**
 * Section heading: big title + a solid block in its group's color (the same
 * title mark PageHeader uses across the site), and on the right the
 * section's sidebar icon + group label. Group colors live in section.css
 * (keyed by data-group) so every section in a group shares one tone.
 */
export default function SectionHeading({
  id,
  heading,
  icon: Icon,
}: {
  id: string;
  heading: string;
  icon: LucideIcon;
}) {
  const group = SECTIONS.find((s) => s.id === id)?.group;

  return (
    <div className="sedge-section-heading" data-group={group}>
      <h2 className="sedge-section-heading-title">
        {heading}
        <span className="sedge-section-heading-mark" aria-hidden="true" />
      </h2>
      <span className="sedge-section-heading-group">
        <Icon className="sedge-section-heading-icon" aria-hidden="true" />
        {group}
      </span>
    </div>
  );
}
