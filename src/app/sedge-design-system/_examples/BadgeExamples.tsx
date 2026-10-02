import Badge, { type BadgeTone } from "../../../components/ui/Badge";
import CodeBlock from "../_components/CodeBlock";
import "./BadgeExamples.css";

const USAGE = `
import Badge from "@/components/ui/Badge";

<Badge>Field note</Badge>
<Badge tone="moss">Currently reading</Badge>
<Badge tone={{ background: "pink-soft", foreground: "emerald-bold" }}>
  Tiny obsession
</Badge>
`;

const TONE_EXAMPLES: { label: string; tone: BadgeTone }[] = [
  {
    label: "Favorites",
    tone: { background: "moss-soft", foreground: "cherry-bold" },
  },
  {
    label: "Tiny obsession",
    tone: { background: "pink-soft", foreground: "emerald-bold" },
  },
  {
    label: "Worth a detour",
    tone: { background: "sky-soft", foreground: "cherry-bold" },
  },
];

export default function BadgeExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />

      <div className="badge-demo-row">
        <Badge>Field note</Badge>
        {TONE_EXAMPLES.map(({ label, tone }) => (
          <Badge key={label} tone={tone}>
            {label}
          </Badge>
        ))}
      </div>
    </section>
  );
}
