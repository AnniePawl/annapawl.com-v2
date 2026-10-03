import type { CSSProperties, ReactNode } from "react";
import { cx } from "../../lib/cx";
import type { PaletteColor } from "../ui/colorTokens";
import ArticleHeader from "./ArticleHeader";
import PageShell from "./PageShell";

export type PublicationContentsItem = {
  id: string;
  label: string;
  tone?: PaletteColor;
};

type DefaultArticleLayoutProps = {
  variant?: "default";
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  children: ReactNode;
  headingLevel?: 1 | 2 | 3;
  className?: string;
};

type PublicationArticleLayoutProps = {
  variant: "publication";
  header: ReactNode;
  contents?: PublicationContentsItem[];
  contentsLabel?: string;
  children: ReactNode;
  footerStart?: ReactNode;
  footerCenter?: ReactNode;
  footerEnd?: ReactNode;
  className?: string;
};

export type ArticleLayoutProps =
  | DefaultArticleLayoutProps
  | PublicationArticleLayoutProps;

export default function ArticleLayout(props: ArticleLayoutProps) {
  if (props.variant === "publication") {
    const {
      header,
      contents = [],
      contentsLabel = "Contents",
      children,
      footerStart,
      footerCenter,
      footerEnd,
      className,
    } = props;

    return (
      <PageShell width="wide" className={cx("publication-article-layout", className)}>
        {header}
        <div className="publication-article-grid">
          {contents.length ? (
            <nav className="publication-article-contents" aria-label={contentsLabel}>
              <span className="publication-article-contents-label">{contentsLabel}</span>
              <ol>
                {contents.map((item) => (
                  <li
                    key={item.id}
                    style={
                      {
                        "--publication-section-tone": `var(--${item.tone ?? "indigo-bold"})`,
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
          <div className="publication-article-body">{children}</div>
        </div>
        <footer className="publication-article-footer">
          <span>{footerStart}</span>
          <span>{footerCenter}</span>
          <span>{footerEnd}</span>
        </footer>
      </PageShell>
    );
  }

  const {
    eyebrow,
    title,
    description,
    meta,
    children,
    headingLevel = 1,
    className,
  } = props;

  return (
    <PageShell width="reading" className={cx("article-layout", className)}>
      <ArticleHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        meta={meta}
        headingLevel={headingLevel}
      />
      <div className="article-layout-body">{children}</div>
    </PageShell>
  );
}

export function ArticleSection({
  id,
  title,
  tone = "indigo-bold",
  children,
  className,
}: {
  id: string;
  title: string;
  tone?: PaletteColor;
  children: ReactNode;
  className?: string;
}) {
  const style = {
    "--publication-section-tone": `var(--${tone})`,
  } as CSSProperties;

  return (
    <section
      id={id}
      className={cx("publication-article-section", className)}
      style={style}
    >
      <h2>
        {title}
        <span aria-hidden="true" />
      </h2>
      {children}
    </section>
  );
}
