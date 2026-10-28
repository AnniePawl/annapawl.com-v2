import Card, { CardBody, CardTitle } from "../../../components/ui/Card";
import CodeBlock from "../../../components/ui/CodeBlock";
import "./CardExamples.css";

const USAGE = `
import Card, { CardBody, CardTitle } from "@/components/ui/Card";

<Card>
  <CardTitle>Color</CardTitle>
  <CardBody>An expansive, intentional palette for a more expressive web.</CardBody>
</Card>

// The marker follows the page accent. Pass a tone to change it.
<Card tone="green">…</Card>
`;

export default function CardExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <h3 className="sedge-subheading">Examples</h3>
      <div className="card-demo-grid">
        <Card tone="green-bold">
          <CardTitle>Color</CardTitle>
          <CardBody>
            An expansive, intentional palette for a more expressive web.
          </CardBody>
        </Card>
        <Card tone="green-bold">
          <CardTitle>Building blocks</CardTitle>
          <CardBody>Flexible, accessible, and ready to make your own.</CardBody>
        </Card>
      </div>
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone='green' code={USAGE} className="mb-8" />
    </section>
  );
}
