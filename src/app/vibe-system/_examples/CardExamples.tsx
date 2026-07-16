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
`;

export default function CardExamples() {
  return (
    <section style={{ maxWidth: 960 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <h3 style={{ marginBottom: 16 }}>Variants</h3>

      <div className="card-demo-grid">
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
