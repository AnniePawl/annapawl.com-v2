import type { CSSProperties } from "react";
import { ArrowRight, ChartColumn, Copy, Sprout } from "lucide-react";
import Button from "../../../components/ui/Button";
import CodeBlock from "../../../components/ui/CodeBlock";
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

// One-off color: the hue's bold for the dot and icons, its soft for
// the secondary background.
<Button tone="pink-bold">Replay all</Button>
<Button variant="secondary" tone="pink">Copy token</Button>

// Full control: palette names or any CSS color. Here bold teal that
// flips to soft teal on hover.
<Button
  variant="secondary"
  tone={{ bg: "teal-bold", text: "teal-soft", icon: "teal-soft", hoverBg: "teal-soft", hoverText: "teal-bold" }}
  startIcon={<Sprout />}
>
  …
</Button>

// Set a page's accent once, on its wrapper:
.my-page {
  --page-accent: var(--cherry-bold);   /* bold fill, icons */
  --page-accent-tint: color-mix(in srgb, var(--cherry-bold) 12%, var(--cream));
  --page-accent-ink: var(--cream);      /* text on the bold fill */
}
`;

// Teal text on light pages; charcoal in dark mode, where teal-bold reads too dark.
const TEAL_TEXT = "light-dark(var(--teal-bold), var(--charcoal))";

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
    name: "Soft sky + dark cherry",
    style: {
      "--page-accent": "light-dark(var(--cherry-bold), var(--cherry-soft))",
      "--page-accent-tint": "var(--sky-soft)",
      "--page-accent-ink": "var(--cream)",
    } as CSSProperties,
  },
  {
    name: "Soft lilac + plum",
    style: {
      "--page-accent": "light-dark(var(--plum-bold), var(--plum-soft))",
      "--page-accent-tint": "var(--lilac-soft)",
      "--page-accent-ink": "var(--cream)",
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
                {state === "pressed" && variant !== "quiet" ? (
                  <span className="btn-doc-note">No pressed state</span>
                ) : (
                <Button
                  variant={variant}
                  tone="green"
                  data-state={state}
                  startIcon={variant === "quiet" ? undefined : <ChartColumn />}
                >
                  {variant === "quiet" ? "Show all" : "Reading stats"}
                </Button>
                )}
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
            <Button tone="green" startIcon={<ChartColumn />}>Reading stats</Button>
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
            <Button variant="secondary" tone="green" shape="pill" size="lg" endIcon={<ArrowRight />}>
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
      <h3 className="sedge-subheading">Color and custom tones</h3>
      <p>
        By default, buttons take the page&rsquo;s accent color. Each page sets
        it once and every button follows, so the same markup can be soft sky
        and dark cherry on one page, or soft lilac and plum on another. Pages
        that don&rsquo;t set one fall back to cherry. For a one-off moment,
        pass a tone, or full colors if you want complete control. Every color
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
        <div className="btn-doc-page">
          <span className="btn-doc-note">Fully custom · teal, inverted on hover</span>
          <div className="btn-doc-page-buttons">
            <Button
              variant="secondary"
              tone={{ bg: "lime-soft", text: TEAL_TEXT, icon: TEAL_TEXT, hoverBg: "teal-soft", hoverText: TEAL_TEXT }}
              startIcon={<Sprout />}
            >
              Secondary
            </Button>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <h3 className="sedge-subheading">Sizes</h3>
      <div className="btn-doc-sizes">
        <span className="btn-doc-size">
          <Button tone='green' size="sm">Small</Button>
          <span className="btn-doc-note">sm · 32px · details bars</span>
        </span>
        <span className="btn-doc-size">
          <Button tone='green' size="md">Medium</Button>
          <span className="btn-doc-note">md · 36px · default</span>
        </span>
        <span className="btn-doc-size">
          <Button tone='green' size="lg">Large</Button>
          <span className="btn-doc-note">lg · 44px · calls to action</span>
        </span>
        <span className="btn-doc-size">
          <Button tone='green' disabled>Disabled</Button>
          <span className="btn-doc-note">disabled</span>
        </span>
      </div>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone='green' code={USAGE} />
    </>
  );
}
