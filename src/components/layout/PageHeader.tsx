import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";

export interface PageHeaderColors {
  barText?: string;
  railBackground?: string;
  railText?: string;
  headingBackground?: string;
  prefixText?: string;
  titleText?: string;
  descriptionBackground?: string;
  descriptionText?: string;
  accent?: string;
}

export interface PageHeaderProps {
  variant?: "editorial" | "publication";
  barStart?: string;
  barEnd?: string;
  railLabel?: string;
  eyebrow?: ReactNode;
  titlePrefix?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  metaCenter?: ReactNode;
  metaEnd?: ReactNode;
  colors?: PageHeaderColors;
  headingLevel?: 1 | 2 | 3;
  className?: string;
}

export default function PageHeader({
  variant = "editorial",
  barStart = "Digital garden",
  barEnd = "Garden archive",
  railLabel = "Garden archive",
  eyebrow,
  titlePrefix,
  title,
  description,
  meta,
  metaCenter,
  metaEnd,
  colors = {},
  headingLevel = 1,
  className,
}: PageHeaderProps) {
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
    "--publication-header-accent": colors.accent ?? "var(--red-bold)",
  } as CSSProperties;

  if (variant === "publication") {
    return (
      <header className={cx("publication-page-header", className)} style={style}>
        <div className="publication-page-header-utility">
          <div>
            <span className="publication-page-header-collection">{barStart}</span>
            {description ? (
              <p className="publication-page-header-description">{description}</p>
            ) : null}
          </div>
          <span className="publication-page-header-back">{barEnd}</span>
        </div>

        <div className="publication-page-header-stage">
          {eyebrow ? (
            <span className="publication-page-header-eyebrow">
              <span className="publication-page-header-eyebrow-mark" aria-hidden="true" />
              {eyebrow}
            </span>
          ) : null}
          <Heading className="publication-page-header-title">
            {title}
            <span className="publication-page-header-title-mark" aria-hidden="true" />
          </Heading>
        </div>

        <div className="publication-page-header-meta">
          <span>{meta}</span>
          <span>{metaCenter}</span>
          <span>{metaEnd}</span>
        </div>
      </header>
    );
  }

  return (
    <header className={cx("editorial-page-header", className)} style={style}>
      <div className="editorial-page-header-bar">
        <span className="type-eyebrow editorial-page-header-bar-label">{barStart}</span>
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
