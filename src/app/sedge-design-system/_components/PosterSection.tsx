import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { colorForSection, darkAccentForSection } from "../_data/sectionColor";
import "./poster.css";

/**
 * The "poster" section container — an alternative to Section.tsx for
 * sections that want a bolder, more custom-illustrated feel. Shares the
 * same per-section background cycling (colorForSection) and the same
 * icon + .h-display heading treatment as Section, so every section still
 * reads as one family at a glance — no border, no shadow, same corner
 * radius, same header pattern. Everything past the header is intentionally
 * open (`children`) so each section's body can be bespoke: that's the
 * "crafted, not generic" half of the balance, built from shared doodle
 * primitives (Squiggle, DoodleArrow, NumberBadge, Note in ./Doodle.tsx)
 * rather than a rigid template.
 */
export default function PosterSection({
  id,
  heading,
  icon: Icon,
  children,
}: {
  id: string;
  heading: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  const bgToken = colorForSection(id);
  const darkAccentToken = darkAccentForSection(id);
  // See theme.css's ".doc-section, .poster-section" rule -- same
  // pattern as Section.tsx, kept identical so the two container
  // components can never drift apart.
  const sectionThemeVars = {
    "--section-bg-light": `var(${bgToken})`,
    "--section-bg-dark": `color-mix(in srgb, var(${darkAccentToken}) 20%, var(--bark))`,
  } as CSSProperties;

  return (
    <section
      id={id}
      className="poster-section scroll-mt-24"
      style={sectionThemeVars}
    >
      <h1 className="h-display text-[length:var(--type-h1-size)] tracking-[var(--type-h1-tracking)] poster-heading">
        <Icon className="poster-heading-icon" aria-hidden="true" />
        {heading}
      </h1>

      <div className="poster-body">{children}</div>
    </section>
  );
}
