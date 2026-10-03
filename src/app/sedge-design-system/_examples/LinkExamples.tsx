import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CodeBlock from "../_components/CodeBlock";
import "./LinkExamples.css";

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
  <span className="sr-only"> (opens in a new tab)</span>
</a>
`;

export default function LinkExamples() {
  return (
    <div>
      <div className="link-state-grid">
        <LinkState label="Default">
          <a
            className="text-link text-link--standalone focus-ring"
            href="#article-layout"
            data-state="default"
          >
            Learn more
          </a>
        </LinkState>

        <LinkState label="Hover">
          <a
            className="text-link text-link--standalone focus-ring"
            href="#article-layout-hover"
            data-state="hover"
          >
            Learn more
          </a>
        </LinkState>

        <LinkState label="Visited">
          <a
            className="text-link text-link--standalone focus-ring"
            href="#article-layout-clicked"
            data-state="visited"
          >
            Learn more
          </a>
        </LinkState>

        <LinkState label="External">
          <a
            className="text-link text-link--standalone text-link--external focus-ring"
            href="https://lucide.dev/icons/"
            target="_blank"
            rel="noreferrer"
            data-state="default"
          >
            Learn more
            <ArrowUpRight className="text-link-icon" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </LinkState>
      </div>

      <hr className="poster-divider mt-4 mb-0" />
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Breadcrumbs</h3>

      <nav aria-label="Breadcrumb">
        <ol className="link-breadcrumbs">
          <li>
            <Link
              className="text-link focus-ring"
              href="/"
              data-state="default"
            >
              Home
            </Link>
          </li>
          <li className="link-breadcrumb-separator" aria-hidden="true">
            /
          </li>
          <li>
            <Link
              className="text-link focus-ring"
              href="/sedge-design-system"
              data-state="default"
            >
              Design system
            </Link>
          </li>
          <li className="link-breadcrumb-separator" aria-hidden="true">
            /
          </li>
          <li>
            <span className="link-breadcrumb-current" aria-current="page">
              Links
            </span>
          </li>
        </ol>
      </nav>

      <hr className="poster-divider mt-4 mb-0" />
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
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
      {children}
      <span className="link-state-label">{label}</span>
    </div>
  );
}
