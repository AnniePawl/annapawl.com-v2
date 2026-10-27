import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cx } from "../../../lib/cx";
import type { PaletteColor } from "../../ui/colorTokens";
import PageShell from "../PageShell";
import PageHeader, { type PageHeaderProps } from "../PageHeader";
import SiteFooter from "../SiteFooter/SiteFooter";
import PostEnd, { type PostNext } from "./PostEnd";
import MobileContents from "./MobileContents";

export type PostContentsItem = {
  id: string;
  label: string;
  tone?: PaletteColor;
};

export type PostLayoutProps = PageHeaderProps & {
  /** Optional full-width feature under the header, before the contents
      and body (e.g. the CSS Shapes grid). */
  cover?: ReactNode;
  contents?: PostContentsItem[];
  contentsLabel?: string;
  /** Optional link to another post, shown beside "Back to top". */
  next?: PostNext;
  /** The site footer under the post (default true). */
  footer?: boolean;
  children: ReactNode;
  className?: string;
};

export type PostSubsectionProps = {
  title: ReactNode;
  /** label: sentence-case heading with a marker in the section color (default).
   *  code: lowercase monospace, for headings that are code (property names). */
  variant?: "label" | "code";
  children: ReactNode;
  className?: string;
};

export type PostSectionProps = {
  id: string;
  title: string;
  tone?: PaletteColor;
  children: ReactNode;
  className?: string;
};

export default function PostLayout({
  cover,
  contents = [],
  contentsLabel = "Contents",
  children,
  className,
  next,
  footer = true,
  ...headerProps
}: PostLayoutProps) {
  const contentsTones = new Map(
    contents.map((item) => [item.id, item.tone ?? "iris-bold"]),
  );
  const tonedChildren = Children.map(children, (child) => {
    if (!isValidElement<PostSectionProps>(child) || child.type !== PostSection) {
      return child;
    }

    const tone = contentsTones.get(child.props.id);
    return tone ? cloneElement(child, { tone }) : child;
  });

  return (
    <PageShell
      width="wide"
      accent={headerProps.accent}
      className={cx("post-layout", className)}
    >
      <PageHeader {...headerProps} />
      {cover}
      <div className="post-layout-grid">
        {contents.length ? (
          <nav className="post-contents" aria-label={contentsLabel}>
            <span className="post-contents-label type-note-label">{contentsLabel}</span>
            <ol>
              {contents.map((item) => (
                <li
                  key={item.id}
                  style={
                    {
                      "--post-section-tone": `var(--${item.tone ?? "iris-bold"})`,
                    } as CSSProperties
                  }
                >
                  <a href={`#${item.id}`}>
                    <span aria-hidden="true" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {contents.length ? (
          <MobileContents items={contents} label={contentsLabel} />
        ) : null}
        <div className="post-body">
          {tonedChildren}
          <PostEnd next={next} />
        </div>
      </div>
      {footer ? <SiteFooter /> : null}
    </PageShell>
  );
}

// These soft colors are too dark to read on a charcoal code block, so
// their section soft tone is lightened toward cream.
const DARK_SOFT_HUES = ["cherry", "emerald", "cocoa"];

function softTone(tone: PaletteColor) {
  const soft = `var(--${tone.replace(/-bold$/, "-soft")})`;
  const hue = tone.replace(/-(bold|soft)$/, "");
  return DARK_SOFT_HUES.includes(hue)
    ? `color-mix(in srgb, ${soft} 55%, var(--cream))`
    : soft;
}

export function PostSection({
  id,
  title,
  tone = "iris-bold",
  children,
  className,
}: PostSectionProps) {
  const style = {
    "--post-section-tone": `var(--${tone})`,
    "--post-section-tone-soft": softTone(tone),
  } as CSSProperties;

  return (
    <section id={id} className={cx("post-section", className)} style={style}>
      <h2>
        {title}
        <span aria-hidden="true" />
      </h2>
      {children}
    </section>
  );
}

/** A titled block inside a PostSection. Takes the section's color. */
export function PostSubsection({
  title,
  variant = "label",
  children,
  className,
}: PostSubsectionProps) {
  return (
    <div className={cx("post-subsection", `post-subsection--${variant}`, className)}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
