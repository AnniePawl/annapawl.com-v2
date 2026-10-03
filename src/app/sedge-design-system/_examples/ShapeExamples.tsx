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
  { variant: "blob", color: "var(--indigo-soft)" },
  { variant: "burst", color: "var(--indigo-soft)" },
  { variant: "scallop", color: "var(--indigo-soft)" },
  { variant: "peanut", color: "var(--indigo-soft)" },
  // Simplified to four single-lobe petals (one smooth rounded tip
  // each, tapering to a point at center) meeting tip-to-tip with deep
  // V gaps between them -- same CLOVER_LEAF_PATHS geometry the
  // interactive nav logo uses (see HeroNav.tsx and the comment on
  // `clover` in Shape.tsx).
  { variant: "clover", color: "var(--indigo-soft)" },
  // Added for the Sedge hero cluster refinement -- two more reusable
  // accent variants, same currentColor API as the rest.
  { variant: "circle", color: "var(--indigo-soft)" },
  { variant: "ring", color: "var(--indigo-soft)" },
  // Added for the "soft four-leaf clover" pass -- six evenly-spaced
  // rounded petals, solid silhouette, no center dot.
  { variant: "flower", color: "var(--indigo-soft)" },
];

const USAGE = `
import Shape from "@/components/ui/Shape";

// Decorative only — not a button, not clickable. Color follows
// currentColor, same as lucide-react icons.
<Shape variant="blob" className="h-16 w-16" style={{ color: "var(--pink-bold)" }} />
`;

export default function ShapeExamples() {
  return (
    <section>
      <h3 className='type-eyebrow' style={{ marginBottom: 24 }}>Corner radius</h3>
      <div
        className='flex w-full md:justify-between flex-wrap gap-5'
        style={{ maxWidth: 720 }}
      >
        {RADIUS_SCALE.map(({ token, label }) => (
          <div key={token} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div
              style={{
                height: 64,
                width: 64,
                background: "var(--indigo-soft)",
                borderRadius: `var(${token})`,
              }}
            />
            <code style={{ fontSize: 11, color: "var(--text-muted)" }}>{token}</code>
            <span style={{ fontSize: 11, color: "var(--text-secondary)" }}>{label}</span>
          </div>
        ))}
      </div>
       <hr className="poster-divider mt-4 mb-0" />

      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Accent shapes</h3>
      <p style={{ marginBottom: 16, fontSize: 14, color: "var(--text-secondary)" }}>
       Accent shapes are decorative by design — used for image crops, avatar masks, and background details rather than interactive controls. Their irregularity works best as a visual accent, where it can add personality without changing how something is expected to behave.
      </p>

      <div
        className='flex w-full flex-wrap gap-5 mb-10'
        style={{ maxWidth: 720 }}
      >
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
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} className="mb-6" />
    </section>
  );
}
