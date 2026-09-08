import Badge, { type BadgeTone } from "../../../components/ui/Badge";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Badge from "@/components/ui/Badge";

<Badge>Neutral</Badge>
<Badge variant="accent">Accent</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>

// Tone — bold outlined pill, for category/tag labels
<Badge tone="pink">Design</Badge>
`;

const TONE_EXAMPLES: { label: string; tone: BadgeTone }[] = [
  { label: "Design", tone: "pink" },
  { label: "Code", tone: "orange" },
  { label: "Books", tone: "yellow" },
  { label: "Embroidery", tone: "green" },
  { label: "Random", tone: "mint" },
  { label: "Recs", tone: "sky" },
  { label: "Ideas", tone: "blue" },
  { label: "Media", tone: "indigo" },
  { label: "Play", tone: "violet" },
];

export default function BadgeExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
        Semantic
      </p>
      <div className="badge-demo-row mb-8">
        <Badge>Neutral</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
        Tones — category / tag labels
      </p>
      <div className="badge-demo-row">
        {TONE_EXAMPLES.map(({ label, tone }) => (
          <Badge key={tone} tone={tone}>
            {label}
          </Badge>
        ))}
      </div>
    </section>
  );
}
