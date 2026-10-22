import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";

export interface EditorialHeaderColors {
  barText?: string;
  railBackground?: string;
  railText?: string;
  headingBackground?: string;
  prefixText?: string;
  titleText?: string;
  descriptionBackground?: string;
  descriptionText?: string;
}

export interface EditorialHeaderProps {
  collectionLabel?: string;
  barEnd?: string;
  railLabel?: string;
  eyebrow?: ReactNode;
  titlePrefix?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  colors?: EditorialHeaderColors;
  headingLevel?: 1 | 2 | 3;
  className?: string;
}

export default function EditorialHeader({
  collectionLabel = "Digital garden",
  barEnd = "Garden archive",
  railLabel = "Garden archive",
  eyebrow,
  titlePrefix,
  title,
  description,
  meta,
  colors = {},
  headingLevel = 1,
  className,
}: EditorialHeaderProps) {
  const Heading = headingLevel === 2 ? "h2" : headingLevel === 3 ? "h3" : "h1";
  const style = {
    "--editorial-header-bar-text": colors.barText ?? "var(--charcoal)",
    "--editorial-header-rail-bg": colors.railBackground ?? "var(--sky-soft)",
    "--editorial-header-rail-text": colors.railText ?? "var(--charcoal)",
    "--editorial-header-heading-bg": colors.headingBackground ?? "var(--cherry-bold)",
    "--editorial-header-prefix-text": colors.prefixText ?? "var(--sky-soft)",
    "--editorial-header-title-text": colors.titleText ?? "var(--mauve-soft)",
    "--editorial-header-description-bg":
      colors.descriptionBackground ?? "var(--mauve-soft)",
    "--editorial-header-description-text":
      colors.descriptionText ?? "var(--cherry-bold)",
  } as CSSProperties;

  return (
    <header className={cx("editorial-page-header", className)} style={style}>
      <div className="editorial-page-header-bar">
        <span className="type-eyebrow editorial-page-header-bar-label">{collectionLabel}</span>
        <span className="editorial-page-header-rule" aria-hidden="true" />
        <span className="type-eyebrow editorial-page-header-bar-label">{barEnd}</span>
      </div>

      <div className="editorial-page-header-layout">
        <div className="editorial-page-header-rail">
          <span className="type-eyebrow">{railLabel}</span>
        </div>

        <div className="editorial-page-header-stage">
          {eyebrow ? (
            <span className="type-eyebrow editorial-page-header-eyebrow">{eyebrow}</span>
          ) : null}
          <Heading className="editorial-page-header-title">
            {titlePrefix ? (
              <span className="editorial-page-header-prefix">{titlePrefix}</span>
            ) : null}
            <span className="editorial-page-header-title-text">{title}</span>
          </Heading>
        </div>

        <div className="editorial-page-header-description">
          {description ? <p className="type-supporting">{description}</p> : null}
          {meta ? <div className="editorial-page-header-meta">{meta}</div> : null}
        </div>
      </div>
    </header>
  );
}
