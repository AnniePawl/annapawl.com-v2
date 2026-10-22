import Card, { CardBody, CardTitle } from "../../../components/ui/Card";
import CodeBlock from "../_components/CodeBlock";
import "./CardExamples.css";

const USAGE = `
import Card, { CardBody, CardTitle } from "@/components/ui/Card";

<Card tone={{ border: "cherry-bold", foreground: "cherry-bold" }}>
  <CardTitle>Color</CardTitle>
  <CardBody>An expansive, intentional palette for a more expressive web.</CardBody>
</Card>

<Card
  variant="filled"
  tone={{ background: "emerald-bold", foreground: "pink-soft" }}
>
  <CardTitle>Building blocks</CardTitle>
  <CardBody>Flexible, accessible, and ready to make your own.</CardBody>
</Card>
`;

export default function CardExamples() {
  return (
    <section style={{ maxWidth: 720 }}>

      <h3 className="sedge-subheading">Examples</h3>
      <div className="card-demo-grid">
        <div className="card-demo-item">
          <Card tone={{ border: "indigo-bold", foreground: "charcoal" }}>
            <CardTitle>Color</CardTitle>
            <CardBody>
              An expansive, intentional palette for a more expressive web.
            </CardBody>
          </Card>
          <span className="card-demo-label">Default</span>
        </div>

        <div className="card-demo-item">
          <Card
            variant="filled"
            tone={{ background: "emerald-bold", foreground: "indigo-soft" }}
          >
            <CardTitle>Building blocks</CardTitle>
            <CardBody>
              Flexible, accessible, and ready to make your own.
            </CardBody>
          </Card>
          <span className="card-demo-label">Variant: filled</span>
        </div>
      </div>
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />

    </section>
  );
}
