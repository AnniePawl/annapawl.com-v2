import { ArrowRight, ChartColumn, Copy } from "lucide-react";
import Button, { ButtonLink } from "../../../components/ui/Button";
import CodeBlock from "../../../components/ui/CodeBlock";
import "./ButtonStates.css";

const USAGE = `import Button, { ButtonLink } from "@/components/ui/Button";

<Button>Reading stats</Button>                      // primary, soft, md
<Button shape="pill" size="sm">Reading stats</Button>
<ButtonLink href="/bookshelf">Bookshelf</ButtonLink>  // internal: dot
<ButtonLink href="https://cssbattle.dev" shape="pill" size="sm">
  View target
</ButtonLink>                                        // external: arrow, new tab

<Button variant="secondary" startIcon={<Copy />}>Copy token</Button>
<Button variant="quiet">Show all</Button>
<Button tone="pink">One-off color</Button>`;

const SHAPES = [
  { shape: "soft", label: "Soft", note: "Inside content" },
  { shape: "pill", label: "Pill", note: "Standalone actions and links" },
] as const;

const SIZES = [
  { size: "sm", label: "sm · 32px" },
  { size: "md", label: "md · 36px" },
  { size: "lg", label: "lg · 44px" },
] as const;

export default function ButtonStates() {
  return (
    <>
      {/* ---- Primary: the button the site actually uses ---- */}
      <h3 className="sedge-subheading">Primary</h3>
      <p className="btn-doc-lede">
        Hairline outline with an accent dot. Fills with ink on hover. The default, and the one
        to reach for first.
      </p>

      <div className="btn-doc-grid" role="table" aria-label="Primary button shapes and sizes">
        <div className="btn-doc-grid-row" role="row">
          <span role="columnheader" />
          {SIZES.map(({ label }) => (
            <span className="btn-doc-head" role="columnheader" key={label}>
              {label}
            </span>
          ))}
        </div>
        {SHAPES.map(({ shape, label, note }) => (
          <div className="btn-doc-grid-row" role="row" key={shape}>
            <span className="btn-doc-info" role="rowheader">
              <span className="btn-doc-label">{label}</span>
              <span className="btn-doc-note">{note}</span>
            </span>
            {SIZES.map(({ size }) => (
              <span role="cell" key={size}>
                <Button tone="green" shape={shape} size={size}>
                  Reading stats
                </Button>
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="btn-doc-pairs">
        <figure className="btn-doc-pair">
          <div className="btn-doc-pair-buttons">
            <Button tone="green" shape="pill" size="sm">
              Rest
            </Button>
            <Button tone="green" shape="pill" size="sm" data-state="hover">
              Hover
            </Button>
          </div>
          <figcaption className="btn-doc-note">Fills with ink on hover. Focus uses the site-wide ring.</figcaption>
        </figure>
        <figure className="btn-doc-pair">
          <div className="btn-doc-pair-buttons">
            <ButtonLink tone="green" shape="pill" size="sm" href="/bookshelf">
              Bookshelf
            </ButtonLink>
            <ButtonLink tone="green" shape="pill" size="sm" href="https://cssbattle.dev/">
              View target
            </ButtonLink>
          </div>
          <figcaption className="btn-doc-note">
            As a link: internal links keep the dot; external links get an arrow and open in a new
            tab.
          </figcaption>
        </figure>
      </div>

      {/* ---- Everything else, smaller ---- */}
      <h3 className="sedge-subheading">More options</h3>
      <dl className="btn-doc-more">
        <div>
          <dt>Secondary</dt>
          <dd>
            <Button variant="secondary" tone="green" size="sm" startIcon={<Copy />}>
              Copy token
            </Button>
            <Button variant="secondary" tone="green" size="sm" startIcon={<Copy />} data-state="hover">
              Copy token
            </Button>
            <span className="btn-doc-note">Soft tint, bold icon. Deepens to the bold accent.</span>
          </dd>
        </div>
        <div>
          <dt>Quiet</dt>
          <dd>
            <Button variant="quiet" tone="green">
              Show all
            </Button>
            <span className="btn-doc-note">Underlined text for low-stakes actions. Dims when pressed.</span>
          </dd>
        </div>
        <div>
          <dt>Icons</dt>
          <dd>
            <Button tone="green" size="sm" startIcon={<ChartColumn />}>
              Reading stats
            </Button>
            <Button tone="green" size="sm" endIcon={<ArrowRight />}>
              Next
            </Button>
            <span className="btn-doc-note">A start icon replaces the dot. End icons nudge on hover.</span>
          </dd>
        </div>
        <div>
          <dt>Color</dt>
          <dd>
            <Button size="sm">Page accent</Button>
            <Button size="sm" tone="pink">
              tone=&quot;pink&quot;
            </Button>
            <span className="btn-doc-note">
              Each page sets an accent once; <code>tone</code> overrides it for a one-off. An
              object (bg, text, icon, hoverBg, hoverText) gives full control.
            </span>
          </dd>
        </div>
        <div>
          <dt>Disabled</dt>
          <dd>
            <Button tone="green" size="sm" disabled>
              Reading stats
            </Button>
          </dd>
        </div>
      </dl>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone="green" code={USAGE} />
    </>
  );
}
