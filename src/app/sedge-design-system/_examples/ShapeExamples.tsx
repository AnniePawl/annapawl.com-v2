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
  // Simplified to four single-lobe petals (one smooth rounded tip
  // each, tapering to a point at center) meeting tip-to-tip with deep
  // V gaps between them -- same CLOVER_LEAF_PATHS geometry the
  // interactive nav logo uses (see HeroNav.tsx and the comment on
  // `clover` in Shape.tsx).
  { variant: "clover", color: "var(--mint-bold)" },
  // Added for the Sedge hero cluster refinement -- two more reusable
  // accent variants, same currentColor API as the rest.
  { variant: "circle", color: "var(--lilac-bold)" },
  { variant: "ring", color: "var(--coral-bold)" },
  // Added for the "soft four-leaf clover" pass -- six evenly-spaced
  // rounded petals, solid silhouette, no center dot.
  { variant: "flower", color: "var(--plum-bold)" },
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
       Accent shapes are decorative by design — used for image crops, avatar masks, and background details rather than interactive controls. Their irregularity works best as a visual accent, where it can add personality without changing how something is expected to behave.
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
