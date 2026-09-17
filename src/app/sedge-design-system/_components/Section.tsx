import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { cx } from "../../../lib/cx";
import { colorForSection, darkAccentForSection } from "../_data/sectionColor";
import "./poster.css";

export default function Section({
  id,
  heading,
  subheading,
  icon: Icon,
  description,
  children,
}: {
  id: string;
  heading: string;
  subheading?: string;
  icon: LucideIcon;
  description?: string;
  children: React.ReactNode;
}) {
  const bgToken = colorForSection(id);
  const darkAccentToken = darkAccentForSection(id);
  // See theme.css's ".doc-section, .poster-section" rule -- it reads
  // these two custom properties and picks whichever one applies
  // (light by default, dark under [data-sedge-theme="dark"]) rather
  // than this component setting `background` directly, which an inline
  // style can't be overridden by a scoped stylesheet rule.
  const sectionThemeVars = {
    "--section-bg-light": `var(${bgToken})`,
    "--section-bg-dark": `color-mix(in srgb, var(${darkAccentToken}) 20%, var(--bark))`,
  } as CSSProperties;

  return (
    <section
      id={id}
      className="doc-section scroll-mt-24 rounded-xl p-8"
      style={sectionThemeVars}
    >
      <div className="flex flex-col">
        <h1
          className="h-display text-[length:var(--type-h1-size)] tracking-[var(--type-h1-tracking)] flex items-center gap-3 pb-5"
        >
          {/* No color class — inherits currentColor from .h-display's own
              color: var(--text-primary), so the icon always matches the
              heading text exactly instead of drifting to its own gray. */}
          <Icon className="h-10 w-10" aria-hidden="true" />
          {heading}
        </h1>
        {subheading ? (
          <h2 className="mb-5">{subheading}</h2>
        ) : null}
      </div>

      <div
        className={cx(
          "pl-0",
          "[&_p]:max-w-4xl",
          "[&_p]:text-base",
          "[&_p]:leading-relaxed",
          "[&_p]:mb-4",
          "[&_p:last-child]:mb-0"
        )}
      >
        {description && <p>{description}</p>}
        {children}
      </div>
    </section>
  );
}
