import Badge from "../../../components/ui/Badge";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Badge from "@/components/ui/Badge";

<Badge>Neutral</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
`;

export default function BadgeExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <div className="badge-demo-row">
        <Badge>Neutral</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>
    </section>
  );
}
