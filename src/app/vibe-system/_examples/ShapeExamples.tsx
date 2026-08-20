import Shape, { type ShapeVariant } from "../../../components/ui/Shape";
import CodeBlock from "../_components/CodeBlock";

const RADIUS_SCALE = [
  { token: "--radius-xs", label: "4px" },
  { token: "--radius-sm", label: "8px" },
  { token: "--radius-md", label: "12px" },
  { token: "--radius-lg", label: "16px" },
  { token: "--radius-xl", label: "20px" },
  { token: "--radius-2xl", label: "24px" },
  { token: "--radius-pill", label: "9999px" },
];

const ACCENT_SHAPES: { variant: ShapeVariant; color: string }[] = [
  { variant: "blob", color: "var(--pink-bold)" },
  { variant: "burst", color: "var(--yellow-bold)" },
  { variant: "scallop", color: "var(--sky-bold)" },
  { variant: "clover", color: "var(--mint-bold)" },
];

const USAGE = `
import Shape from "@/components/ui/Shape";

// Decorative only — not a button, not clickable. Color follows
// currentColor, same as lucide-react icons.
<Shape variant="blob" className="h-16 w-16" style={{ color: "var(--pink-bold)" }} />
`;

export default function ShapeExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <h3 style={{ marginBottom: 16 }}>Corner radius</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {RADIUS_SCALE.map(({ token, label }) => (
          <div key={token} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                height: 64,
                width: 64,
                background: "var(--accent-soft)",
                borderRadius: `var(${token})`,
              }}
            />
            <code style={{ fontSize: 11, color: "var(--text-muted)" }}>{token}</code>
            <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{label}</span>
          </div>
        ))}
      </div>

      <h3 style={{ margin: "32px 0 16px" }}>Accent shapes</h3>
      <p style={{ marginBottom: 16, fontSize: 14, color: "var(--text-secondary)" }}>
        Decorative only — image crops, avatar masks, background accents.
        Never used for buttons or anything clickable: irregular shapes work
        here specifically because they aren&rsquo;t trying to signal
        interactivity.
      </p>
      <CodeBlock code={USAGE} className="mb-6" />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
        {ACCENT_SHAPES.map(({ variant, color }) => (
          <div key={variant} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Shape
              variant={variant}
              style={{ color, height: 88, width: 88 }}
            />
            <code style={{ fontSize: 11, color: "var(--text-muted)" }}>{variant}</code>
          </div>
        ))}
      </div>
    </section>
  );
}
