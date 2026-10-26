import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import CodeBlock from "../../../components/ui/CodeBlock";
import TextLink from "../../../components/ui/TextLink";
import "./LinkExamples.css";

const USAGE = `
// TextLink component (preferred) — internal links use next/link,
// http(s) links open in a new tab and announce it
<TextLink href="/books">book club picks</TextLink>
<TextLink href="https://getbem.com/naming/" tone="sky-bold">BEM</TextLink>
<TextLink href="https://books.google.com" variant="quiet">Google Books</TextLink>

// Or the classes directly
// Default — links in body and article text
<a className="text-link focus-ring" href="/books">book club picks</a>

// Standalone, with an arrow
<a className="text-link text-link--standalone focus-ring" href="/books">
  Browse all books
  <ArrowRight className="text-link-icon" aria-hidden="true" />
</a>

// External
<a
  className="text-link text-link--standalone text-link--external focus-ring"
  href="https://lucide.dev/icons/"
  target="_blank"
  rel="noreferrer"
>
  lucide.dev
  <ArrowUpRight className="text-link-icon" aria-hidden="true" />
  <span className="sr-only"> (opens in a new tab)</span>
</a>

// Quiet — meta and captions
<a className="text-link text-link--quiet focus-ring" href="https://books.google.com">Google Books</a>
`;

export default function LinkExamples() {
  return (
    <div>
      <h3 className="sedge-subheading">Default</h3>
      <p className="link-sample">
        I love looking through other people’s bookshelves — mine has{" "}
        <a className="text-link focus-ring" href="#links" data-state="default">
          book club picks
        </a>
        , finds from the{" "}
        <a className="text-link focus-ring" href="#links" data-state="default">
          Little Library
        </a>
        , and a few too many fantasy trilogies.
      </p>
      <div className="link-state-grid">
        <LinkState label="Standalone">
          <a
            className="text-link text-link--standalone focus-ring"
            href="#links"
            data-state="default"
          >
            Browse all books
            <ArrowRight className="text-link-icon" aria-hidden="true" />
          </a>
        </LinkState>
        <LinkState label="Hover">
          <a className="text-link focus-ring" href="#links" data-state="hover">
            Little Library
          </a>
        </LinkState>
        <LinkState label="Visited">
          <a className="text-link focus-ring" href="#links" data-state="visited">
            Book club picks
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
            lucide.dev
            <ArrowUpRight className="text-link-icon" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </LinkState>
      </div>

      <h3 className="sedge-subheading">Quiet</h3>
      <p className="link-sample link-sample--small">
        Covers and page counts come from{" "}
        <a
          className="text-link text-link--quiet focus-ring"
          href="https://books.google.com"
          target="_blank"
          rel="noreferrer"
          data-state="default"
        >
          Google Books
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        . Small, low-stakes links — meta and captions — use a dotted
        line that goes solid on hover.
      </p>
      <div className="link-state-grid">
        <LinkState label="Default">
          <a className="text-link text-link--quiet focus-ring" href="#links" data-state="default">
            Google Books
          </a>
        </LinkState>
        <LinkState label="Hover">
          <a className="text-link text-link--quiet focus-ring" href="#links" data-state="hover">
            Google Books
          </a>
        </LinkState>
        <LinkState label="Visited">
          <a className="text-link text-link--quiet focus-ring" href="#links" data-state="visited">
            Google Books
          </a>
        </LinkState>
      </div>

      <h3 className="sedge-subheading">Tones</h3>
      <p className="link-sample">
        Links follow their post section&rsquo;s color, or the page accent outside a post. Pass a <code>tone</code>{" "}
        when a section has its own color, like{" "}
        <TextLink href="#links" tone="sky-bold" data-state="default">
          sky
        </TextLink>
        ,{" "}
        <TextLink href="#links" tone="plum-bold" data-state="default">
          plum
        </TextLink>{" "}
        or{" "}
        <TextLink href="#links" tone="marigold-bold" data-state="default">
          marigold
        </TextLink>
        .
      </p>

      <h3 className="sedge-subheading">Breadcrumbs</h3>

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

      <h3 className="sedge-subheading">Usage</h3>
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
