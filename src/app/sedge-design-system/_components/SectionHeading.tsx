import type { LucideIcon } from "lucide-react";
import { SECTIONS } from "../_data/sections";

// Editorial section heading: the extra-bold title on the left (ending in
// a bold-indigo period), the section's icon + sidebar group ("Foundations"
// / "Components") as a small label on the right, and a rule underneath. The
// group comes from _data/sections.ts by id, so it always matches the
// sidebar. Styles live in poster.css (light) and theme.css (dark label).
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
    <div className="sedge-section-heading">
      <h2 className="sedge-section-heading-title">
        {heading}
        <span className="sedge-section-heading-dot" aria-hidden="true">
          .
        </span>
      </h2>
      <span className="sedge-section-heading-group">
        <Icon className="sedge-section-heading-icon" aria-hidden="true" />
        {group}
      </span>
    </div>
  );
}
