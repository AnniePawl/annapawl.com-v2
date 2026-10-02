import type { ReactNode } from "react";
import { cx } from "../../lib/cx";
import ArticleHeader from "./ArticleHeader";
import PageShell from "./PageShell";

export default function ArticleLayout({
  eyebrow,
  title,
  description,
  meta,
  children,
  headingLevel = 1,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  children: ReactNode;
  headingLevel?: 1 | 2 | 3;
  className?: string;
}) {
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
