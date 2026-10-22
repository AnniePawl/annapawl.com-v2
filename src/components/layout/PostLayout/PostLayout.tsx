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
import PostHeader, { type PostHeaderProps } from "./PostHeader";

export type PostContentsItem = {
  id: string;
  label: string;
  tone?: PaletteColor;
};

export type PostLayoutProps = PostHeaderProps & {
  contents?: PostContentsItem[];
  contentsLabel?: string;
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
  contents = [],
  contentsLabel = "Contents",
  children,
  className,
  ...headerProps
}: PostLayoutProps) {
  const contentsTones = new Map(
    contents.map((item) => [item.id, item.tone ?? "indigo-bold"]),
  );
  const tonedChildren = Children.map(children, (child) => {
    if (!isValidElement<PostSectionProps>(child) || child.type !== PostSection) {
      return child;
    }

    const tone = contentsTones.get(child.props.id);
    return tone ? cloneElement(child, { tone }) : child;
  });

  return (
    <PageShell width="wide" className={cx("post-layout", className)}>
      <PostHeader {...headerProps} />
      <div className="post-layout-grid">
        {contents.length ? (
          <nav className="post-contents" aria-label={contentsLabel}>
            <span className="post-contents-label">{contentsLabel}</span>
            <ol>
              {contents.map((item) => (
                <li
                  key={item.id}
                  style={
                    {
                      "--post-section-tone": `var(--${item.tone ?? "indigo-bold"})`,
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
        <div className="post-body">{tonedChildren}</div>
      </div>
    </PageShell>
  );
}

export function PostSection({
  id,
  title,
  tone = "indigo-bold",
  children,
  className,
}: PostSectionProps) {
  const style = {
    "--post-section-tone": `var(--${tone})`,
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
