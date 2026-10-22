import Badge, { type BadgeTone } from "../../../components/ui/Badge";
import CodeBlock from "../_components/CodeBlock";
import "./BadgeExamples.css";

const USAGE = `
import Badge from "@/components/ui/Badge";

<Badge>Field note</Badge>
<Badge tone="emerald-bold">Literary Fiction</Badge>
`;

// Same tag/color pairs as the bookshelf.
const TONE_EXAMPLES: { label: string; tone: BadgeTone }[] = [
  { label: "Literary Fiction", tone: "emerald-bold" },
  { label: "Fantasy", tone: "indigo-bold" },
  { label: "Made Me Cry", tone: "sky-bold" },
  { label: "Favorites", tone: "red-bold" },
];

export default function BadgeExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <h3 className="sedge-subheading">Examples</h3>
      <div className="badge-demo-row">
        <Badge>Field note</Badge>
        {TONE_EXAMPLES.map(({ label, tone }) => (
          <Badge key={label} tone={tone}>
            {label}
          </Badge>
        ))}
      </div>
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
    </section>
  );
}
