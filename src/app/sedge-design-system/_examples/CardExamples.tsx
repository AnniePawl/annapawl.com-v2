import Card, {
  CardAction,
  CardBody,
  CardEyebrow,
  CardHeading,
} from "../../../components/ui/Card";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Card, { CardEyebrow, CardHeading, CardBody, CardAction } from "@/components/ui/Card";

<Card>
  <CardEyebrow>Foundations</CardEyebrow>
  <CardHeading>Color</CardHeading>
  <CardBody>An expansive, intentional palette for a more expressive web.</CardBody>
  <CardAction>Explore</CardAction>
</Card>

<Card variant="soft">...</Card>
`;

export default function CardExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <h3 style={{ marginBottom: 16 }}>Examples</h3>

      <div className="card-demo-grid">
        <Card>
          <CardEyebrow>Foundations</CardEyebrow>
          <CardHeading>Color</CardHeading>
          <CardBody>
            An expansive, intentional palette for a more expressive web.
          </CardBody>
          <CardAction>Explore</CardAction>
        </Card>

        <Card variant="soft">
          <CardEyebrow>Components</CardEyebrow>
          <CardHeading>Building Blocks</CardHeading>
          <CardBody>
            Flexible, accessible, and ready to make your own.
          </CardBody>
          <CardAction>View components</CardAction>
        </Card>
      </div>
    </section>
  );
}
