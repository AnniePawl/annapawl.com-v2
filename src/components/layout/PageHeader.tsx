/**
 * The header every page shares: home logo, description, eyebrow, title,
 * optional lede, and a details rule. Articles get it through PostLayout;
 * collection pages (Bookshelf, Fiber Arts) use it on its own.
 * Styles live in PostLayout/post-layout.css (.post-header-*).
 */
import type { CSSProperties, ReactNode } from "react";

export type PageHeaderProps = {
  descriptionTitle?: string;
  backLabel?: string;
  eyebrow?: ReactNode;
  title: string;
  description?: string;
  publishedDate?: string;
  readingTime?: string;
  postTags?: ReactNode;
  /** Replaces the date · reading-time text on the left of the details rule. */
  detailsStart?: ReactNode;
  /** Large intro line set under the title, inside the header stage. */
  lede?: ReactNode;
  utilityStart?: ReactNode;
  accent?: string;
  headingLevel?: 1 | 2 | 3;
};

export default function PageHeader({
  descriptionTitle = "Digital garden",
  backLabel = "Garden archive",
  eyebrow,
  title,
  description,
  publishedDate,
  readingTime,
  postTags,
  detailsStart,
  lede,
  utilityStart,
  accent = "var(--red-bold)",
  headingLevel = 1,
}: PageHeaderProps) {
  const Heading = headingLevel === 2 ? "h2" : headingLevel === 3 ? "h3" : "h1";
  const style = { "--post-accent": accent } as CSSProperties;

  return (
    <header className="post-header" style={style}>
      <div className="post-header-utility">
        {utilityStart ? (
          <>
            <div className="post-header-utility-start">{utilityStart}</div>
            <div className="post-header-utility-end">
              <span className="post-header-description-title">{descriptionTitle}</span>
              {description ? <p className="post-header-description type-note">{description}</p> : null}
            </div>
          </>
        ) : (
          <>
            <div>
              <span className="post-header-description-title">{descriptionTitle}</span>
              {description ? <p className="post-header-description type-note">{description}</p> : null}
            </div>
            <span className="post-header-back">{backLabel}</span>
          </>
        )}
      </div>

      <div className="post-header-stage">
        {eyebrow ? (
          <span className="post-header-eyebrow">
            <span className="post-header-eyebrow-mark" aria-hidden="true" />
            {eyebrow}
          </span>
        ) : null}
        <Heading className="post-header-title">
          {title}
          <span className="post-header-title-mark" aria-hidden="true" />
        </Heading>
        {lede ? <p className="post-header-lede">{lede}</p> : null}
      </div>

      <div className="post-header-details">
        <span className="post-header-publishing-details">
          {detailsStart ?? (
            <>
              {publishedDate ? <time>{publishedDate}</time> : null}
              {publishedDate && readingTime ? " · " : null}
              {readingTime}
            </>
          )}
        </span>
        <span className="post-header-tags">{postTags}</span>
      </div>
    </header>
  );
}
