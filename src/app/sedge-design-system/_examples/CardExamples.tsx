import Card, { CardBody, CardHeading } from "../../../components/ui/Card";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Card, { CardHeading, CardBody } from "@/components/ui/Card";

<Card>
  <CardHeading>Title</CardHeading>
  <CardBody>Supporting copy goes here.</CardBody>
</Card>

<Card variant="soft">...</Card>
<Card interactive onClick={handleClick}>...</Card>
<Card accent="blob">...</Card>
<Card tone="pink">...</Card>
`;

export default function CardExamples() {
  return (
    <section style={{ maxWidth: 960 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <h3 style={{ marginBottom: 16 }}>Variants</h3>

      <div className="card-demo-grid card-demo-grid--variants">
        <Card>
          <CardHeading>Default</CardHeading>
          <CardBody>
            Standard surface for grouping content — profile cards, list
            items, feature blocks.
          </CardBody>
        </Card>

        <Card variant="soft">
          <CardHeading>Soft</CardHeading>
          <CardBody>
            Quieter surface for nested or secondary content inside a
            default card.
          </CardBody>
        </Card>

        <Card interactive>
          <CardHeading>Interactive</CardHeading>
          <CardBody>
            Lifts on hover and press — use when the whole card is a
            clickable target.
          </CardBody>
        </Card>

        <Card accent="blob">
          <CardHeading>Accent</CardHeading>
          <CardBody>
            Optional decorative Shape in the corner — opt in per card, not
            automatic.
          </CardBody>
        </Card>
      </div>

      <h3 style={{ margin: "32px 0 16px" }}>Tones</h3>
      <p style={{ marginBottom: 16, fontSize: 14, color: "var(--text-secondary)" }}>
        Any card — default or soft — can take a colored background via the{" "}
        <code style={{ fontSize: 13 }}>tone</code> prop, pulled from the
        brand palette&rsquo;s soft tones.
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
          <Card interactive>
            <CardHeading>Card</CardHeading>
            <CardBody>Resting state.</CardBody>
          </Card>
        </State>

        <State label="Hover">
          <Card interactive data-state="hover">
            <CardHeading>Card</CardHeading>
            <CardBody>Hover state.</CardBody>
          </Card>
        </State>

        <State label="Pressed">
          <Card interactive data-state="pressed">
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
