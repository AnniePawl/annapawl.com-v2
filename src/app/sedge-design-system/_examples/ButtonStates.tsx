import type { CSSProperties } from "react";
import { ArrowRight, ChartColumn, Copy } from "lucide-react";
import Button from "../../../components/ui/Button";
import CodeBlock from "../_components/CodeBlock";
import "./ButtonStates.css";

const USAGE = `
import Button from "@/components/ui/Button";

// Color comes from the page — no color props needed.
<Button>View all books</Button>                                // primary (default): outline + dot
<Button startIcon={<ChartColumn />}>Reading stats</Button>      // icon replaces the dot
<Button variant="secondary" startIcon={<Copy />}>Copy token</Button>
<Button variant="quiet">Show all</Button>

// A standalone call to action gets the pill.
<Button variant="secondary" shape="pill" size="lg" endIcon={<ArrowRight />}>
  Explore the system
</Button>

// Set a page's accent once, on its wrapper:
.my-page {
  --page-accent: var(--cherry-bold);   /* bold fill, icons */
  --page-accent-tint: color-mix(in srgb, var(--cherry-bold) 12%, var(--cream));
  --page-accent-ink: var(--cream);      /* text on the bold fill */
}
`;

const ROLES = [
  { variant: "primary", label: "Primary", note: "Hairline outline + accent dot, or an icon in its place. Fills with ink on hover. The default." },
  { variant: "secondary", label: "Secondary", note: "Soft accent tint with a bold accent icon." },
  { variant: "quiet", label: "Quiet", note: "Underlined text. Low-stakes actions." },
] as const;

const STATES = [
  { state: undefined, label: "Rest" },
  { state: "hover", label: "Hover" },
  { state: "focus", label: "Focus" },
  { state: "pressed", label: "Pressed" },
] as const;

const PAGES: { name: string; style: CSSProperties }[] = [
  {
    name: "Bookshelf · cherry + rose",
    style: {
      "--page-accent": "var(--cherry-bold)",
      "--page-accent-tint": "color-mix(in srgb, var(--cherry-bold) 12%, var(--cream))",
      "--page-accent-ink": "var(--cream)",
    } as CSSProperties,
  },
  {
    name: "Sedge · sky + cherry",
    style: {
      "--page-accent": "var(--cherry-bold)",
      "--page-accent-tint": "var(--sky-soft)",
      "--page-accent-ink": "var(--cream)",
    } as CSSProperties,
  },
  {
    name: "Drawing with Code · red",
    style: {
      "--page-accent": "var(--red-bold)",
      "--page-accent-tint": "color-mix(in srgb, var(--red-soft) 55%, var(--cream))",
      "--page-accent-ink": "var(--charcoal)",
    } as CSSProperties,
  },
];

export default function ButtonStates() {
  return (
    <>
      {/* Roles × states */}
      <h3 className="sedge-subheading">Roles</h3>
      <div className="btn-doc-table">
        <div className="btn-doc-row btn-doc-row--head">
          <span />
          {STATES.map(({ label }) => (
            <span className="btn-doc-head" key={label}>
              {label}
            </span>
          ))}
        </div>
        {ROLES.map(({ variant, label, note }) => (
          <div className="btn-doc-row" key={variant}>
            <span className="btn-doc-info">
              <span className="btn-doc-label">{label}</span>
              <span className="btn-doc-note">{note}</span>
            </span>
            {STATES.map(({ state, label: stateLabel }) => (
              <span className="btn-doc-cell" key={stateLabel}>
                <Button
                  variant={variant}
                  data-state={state}
                  startIcon={variant === "quiet" ? undefined : <ChartColumn />}
                >
                  {variant === "quiet" ? "Show all" : "Reading stats"}
                </Button>
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Shape */}
      <h3 className="sedge-subheading">Shape</h3>
      <div className="btn-doc-shapes">
        <figure className="btn-doc-figure">
          <div className="btn-doc-plate">
            <Button startIcon={<ChartColumn />}>Reading stats</Button>
          </div>
          <figcaption>
            <span className="btn-doc-label">Soft · 4px — the default</span>
            <span className="btn-doc-note">
              Buttons that sit inside content: details bars, drawers, forms,
              toolbars.
            </span>
          </figcaption>
        </figure>
        <figure className="btn-doc-figure">
          <div className="btn-doc-plate">
            <Button variant="secondary" shape="pill" size="lg" endIcon={<ArrowRight />}>
              Explore the system
            </Button>
          </div>
          <figcaption>
            <span className="btn-doc-label">Pill — standalone calls to action</span>
            <span className="btn-doc-note">
              The main thing to do on a page, alone with room around it.
              Never mix shapes within one group.
            </span>
          </figcaption>
        </figure>
      </div>

      {/* Page colors */}
      <h3 className="sedge-subheading">Color follows the page</h3>
      <p>
        Buttons never pick a color. Each page sets its accent once, and every
        button on it follows — so the same markup is cherry and rose on the
        Bookshelf, sky and cherry here, and red in Drawing with Code. Every color
        change eases over 250ms rather than snapping.
      </p>
      <div className="btn-doc-pages">
        {PAGES.map(({ name, style }) => (
          <div className="btn-doc-page" style={style} key={name}>
            <span className="btn-doc-note">{name}</span>
            <div className="btn-doc-page-buttons">
              <Button>Primary</Button>
              <Button startIcon={<ChartColumn />}>With icon</Button>
              <Button variant="secondary" startIcon={<Copy />}>Secondary</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Sizes */}
      <h3 className="sedge-subheading">Sizes</h3>
      <div className="btn-doc-sizes">
        <span className="btn-doc-size">
          <Button size="sm">Small</Button>
          <span className="btn-doc-note">sm · 32px · details bars</span>
        </span>
        <span className="btn-doc-size">
          <Button size="md">Medium</Button>
          <span className="btn-doc-note">md · 36px · default</span>
        </span>
        <span className="btn-doc-size">
          <Button size="lg">Large</Button>
          <span className="btn-doc-note">lg · 44px · calls to action</span>
        </span>
        <span className="btn-doc-size">
          <Button disabled>Disabled</Button>
          <span className="btn-doc-note">disabled</span>
        </span>
      </div>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} />
    </>
  );
}
