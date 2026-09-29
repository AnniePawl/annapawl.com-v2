import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cx } from "../../../lib/cx";
import SectionHeading from "./SectionHeading";
import "./section.css";

/** Shared section structure; individual sections own their content + layouts. */
export default function Section({
  id, heading, icon, description, children, className,
}: {
  id: string;
  heading: string;
  icon: LucideIcon;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cx("sedge-section scroll-mt-24", className)}>
      <SectionHeading id={id} heading={heading} icon={icon} />
      {description && <p className="sedge-section-description">{description}</p>}
      <div className="sedge-section-content">{children}</div>
    </section>
  );
}
