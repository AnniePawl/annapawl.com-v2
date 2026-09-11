import Card, {
  CardAction,
  CardBody,
  CardEyebrow,
  CardHeading,
} from "../../../components/ui/Card";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Card, { CardEyebrow, CardHeading, CardBody, CardAction } from "@/components/ui/Card";

<Card tone="pink">
  <CardEyebrow>Foundations</CardEyebrow>
  <CardHeading>Color</CardHeading>
  <CardBody>An expansive, intentional palette for a more expressive web.</CardBody>
  <CardAction>Explore</CardAction>
</Card>

<Card variant="soft">...</Card>
<Card interactive onClick={handleClick}>...</Card>
`;

export default function CardExamples() {
  return (
    <section style={{ maxWidth: 960 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      {/* ---- Examples ----
          tone drives --card-accent/--card-accent-soft — both currently
          the hue's `-soft` token (see Card.tsx). The card's own
          background is always white now; the soft tone is the border
          color instead (Anna: "bg white instead, soft palette as
          border"). CardAction is a single consistent pill style for
          every card now — no more separate bare-text vs. outlined-pill
          variant. */}
      <h3 style={{ marginBottom: 16 }}>Examples</h3>

      <div className="card-demo-grid card-demo-grid--examples">
        <Card tone="pink" interactive>
          <CardEyebrow>Foundations</CardEyebrow>
          <CardHeading>Color</CardHeading>
          <CardBody>
            An expansive, intentional palette for a more expressive web.
          </CardBody>
          <CardAction>Explore</CardAction>
        </Card>

        <Card tone="mint" interactive>
          <CardEyebrow>Components</CardEyebrow>
          <CardHeading>Building Blocks</CardHeading>
          <CardBody>Flexible, accessible, and ready to make your own.</CardBody>
          <CardAction>View components</CardAction>
        </Card>

        <Card tone="yellow" interactive>
          <CardEyebrow>Guides</CardEyebrow>
          <CardHeading>Design Principles</CardHeading>
          <CardBody>
            The values that guide every decision, from pixels to
            personality.
          </CardBody>
          <CardAction showArrow />
        </Card>
      </div>

      <div className="card-demo-grid card-demo-grid--examples-wide">
        <Card tone="sky" interactive>
          <CardEyebrow>Patterns</CardEyebrow>
          <CardHeading>Page Layout</CardHeading>
          <CardBody>Guidelines for structure, flexibility, and flow.</CardBody>
          <CardAction>Explore</CardAction>
        </Card>

        <Card tone="violet" interactive>
          <CardEyebrow>Resources</CardEyebrow>
          <CardHeading>Tools I Love</CardHeading>
          <CardBody>
            A growing list of things that inspire, support, and make the
            work more fun.
          </CardBody>
          <CardAction>Read the list</CardAction>
        </Card>
      </div>

      <h3 style={{ margin: "32px 0 16px" }}>Variants</h3>

      <div className="card-demo-grid card-demo-grid--variants">
        <Card>
          <CardHeading>Default</CardHeading>
          <CardBody>
            White surface, neutral border — the untoned baseline.
          </CardBody>
        </Card>

        <Card variant="soft">
          <CardHeading>Soft</CardHeading>
          <CardBody>
            A quiet tinted wash for nested or secondary content — Default
            above is plain white.
          </CardBody>
        </Card>

        <Card interactive>
          <CardHeading>Interactive</CardHeading>
          <CardBody>
            Lifts on hover and press, background/border both pick up a
            touch of tone — use when the whole card is a clickable
            target.
          </CardBody>
        </Card>

        <Card tone="lime" variant="soft">
          <CardHeading>Soft + Tone</CardHeading>
          <CardBody>
            <code style={{ fontSize: 12 }}>variant</code> and{" "}
            <code style={{ fontSize: 12 }}>tone</code> combine freely.
          </CardBody>
        </Card>
      </div>

      <h3 style={{ margin: "32px 0 16px" }}>Tones</h3>
      <p style={{ marginBottom: 16, fontSize: 14, color: "var(--text-secondary)" }}>
        <code style={{ fontSize: 13 }}>tone</code> sets{" "}
        <code style={{ fontSize: 13 }}>--card-accent</code> and{" "}
        <code style={{ fontSize: 13 }}>--card-accent-soft</code> — the
        card stays white, and that color becomes the border (and the
        CardAction pill&apos;s border/text).
      </p>

      <div className="card-demo-grid card-demo-grid--variants">
        <Card tone="pink">
          <CardHeading>Pink</CardHeading>
          <CardBody>tone=&quot;pink&quot;</CardBody>
        </Card>

        <Card tone="sky">
          <CardHeading>Sky</CardHeading>
          <CardBody>tone=&quot;sky&quot;</CardBody>
        </Card>

        <Card tone="mint">
          <CardHeading>Mint</CardHeading>
          <CardBody>tone=&quot;mint&quot;</CardBody>
        </Card>

        <Card tone="violet">
          <CardHeading>Violet</CardHeading>
          <CardBody>tone=&quot;violet&quot;</CardBody>
        </Card>
      </div>

      <h3 style={{ margin: "32px 0 16px" }}>Interactive States</h3>

      <div className="card-demo-grid">
        <State label="Enabled">
          <Card interactive tone="lime">
            <CardHeading>Card</CardHeading>
            <CardBody>Resting state.</CardBody>
          </Card>
        </State>

        <State label="Hover">
          <Card interactive tone="lime" data-state="hover">
            <CardHeading>Card</CardHeading>
            <CardBody>Background and border both pick up a touch more tone.</CardBody>
          </Card>
        </State>

        <State label="Pressed">
          <Card interactive tone="lime" data-state="pressed">
            <CardHeading>Card</CardHeading>
            <CardBody>Pressed state.</CardBody>
          </Card>
        </State>
      </div>
    </section>
  );
}

function State({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="state-cell">
      <span className="state-label">{label}</span>
      {children}
    </div>
  );
}
