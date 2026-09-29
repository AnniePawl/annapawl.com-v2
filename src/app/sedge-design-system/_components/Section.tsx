import SectionHeading from "./SectionHeading";
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
    "--section-bg-dark": `color-mix(in srgb, var(${darkAccentToken}) 20%, var(--chocolate))`,
  } as CSSProperties;

  return (
    <section
      id={id}
      className="doc-section scroll-mt-24 rounded-xl p-8"
      style={sectionThemeVars}
    >
      <div className="flex flex-col">
        <SectionHeading id={id} heading={heading} icon={Icon} />
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
