import { ArrowUpRight } from "lucide-react";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
<a className="text-link focus-ring" href="/books">
  Browse books
</a>

<a
  className="text-link text-link--standalone text-link--external focus-ring"
  href="https://lucide.dev/icons/"
  target="_blank"
  rel="noreferrer"
>
  Browse Lucide icons
  <ArrowUpRight className="text-link-icon" aria-hidden="true" />
</a>
`;

export default function LinkExamples() {
  return (
    <div>
      <CodeBlock code={USAGE} className="mb-8" />

      <span className="poster-label type-eyebrow">Examples</span>
      <div className="link-state-grid">
        <LinkState label="Default">
          <a
            className="text-link text-link--standalone focus-ring"
            href="#article-layout"
            data-state="default"
          >
            Read the full article
          </a>
        </LinkState>

        <LinkState label="Hover">
          <a
            className="text-link text-link--standalone focus-ring"
            href="#article-layout-hover"
            data-state="hover"
          >
            Read the full article
          </a>
        </LinkState>

        <LinkState label="Clicked">
          <a
            className="text-link text-link--standalone focus-ring"
            href="#article-layout-clicked"
            data-state="visited"
          >
            Read the full article
          </a>
        </LinkState>
      </div>

      <hr className="poster-divider" />

      <div className="link-example-list">
        <span className="link-state-label">External</span>

        <a
          className="text-link text-link--standalone text-link--external focus-ring"
          href="https://lucide.dev/icons/"
          target="_blank"
          rel="noreferrer"
        >
          Browse Lucide icons
          <ArrowUpRight className="text-link-icon" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function LinkState({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="link-state-cell">
      <span className="link-state-label">{label}</span>
      {children}
    </div>
  );
}
