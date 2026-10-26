import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cx } from "../../../lib/cx";
import SectionHeading from "./SectionHeading";
import { SECTIONS } from "../_data/sections";
import "./section.css";

/** Shared section structure; individual sections own their content + layouts. */
export default function Section({
  id, heading, icon, lede, description, children, className,
}: {
  id: string;
  heading: string;
  icon: LucideIcon;
  /** A sentence or two set large under the heading, like the PageHeader lede. */
  lede?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cx("sedge-section scroll-mt-24", className)}
      data-group={SECTIONS.find((s) => s.id === id)?.group}
    >
      <SectionHeading id={id} heading={heading} icon={icon} />
      {lede && <p className="sedge-section-lede">{lede}</p>}
      {description && <p className="sedge-section-description">{description}</p>}
      <div className="sedge-section-content">{children}</div>
    </section>
  );
}
