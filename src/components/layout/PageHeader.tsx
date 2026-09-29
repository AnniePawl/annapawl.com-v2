import type { ReactNode } from "react";
import { cx } from "../../lib/cx";

export default function PageHeader({
  eyebrow,
  title,
  description,
  meta,
  headingLevel = 1,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  headingLevel?: 1 | 2 | 3;
  className?: string;
}) {
  const Heading = headingLevel === 2 ? "h2" : headingLevel === 3 ? "h3" : "h1";

  return (
    <header className={cx("page-header", className)}>
      {eyebrow ? (
        <span className="page-header-eyebrow type-eyebrow">{eyebrow}</span>
      ) : null}
      <Heading className="page-header-title">{title}</Heading>
      {description ? (
        <p className="page-header-description">{description}</p>
      ) : null}
      {meta ? <div className="page-header-meta">{meta}</div> : null}
    </header>
  );
}
