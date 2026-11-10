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
  /** Body copy under the lede. Pass an array for several paragraphs;
   *  items can include links (any ReactNode). */
  description?: ReactNode | ReactNode[];
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
      {description &&
        (Array.isArray(description) ? description : [description]).map((paragraph, i) => (
          <p key={i} className="sedge-section-description">
            {paragraph}
          </p>
        ))}
      <div className="sedge-section-content">{children}</div>
    </section>
  );
}
