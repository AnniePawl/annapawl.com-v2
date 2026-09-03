import type { LucideIcon } from "lucide-react";
import { cx } from "../../../lib/cx";
import { colorForSection } from "../_data/sectionColor";

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

  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-xl p-8"
      style={{ background: `var(${bgToken})` }}
    >
      <div className="flex flex-col">
        <h1
          className="h-display uppercase flex items-center gap-3 pb-5"
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
