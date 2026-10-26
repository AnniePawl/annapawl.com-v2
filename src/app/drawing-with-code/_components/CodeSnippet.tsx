import type { CSSProperties } from "react";
import type { PaletteColor } from "../../../components/ui/colorTokens";

/** Code text uses the soft version of the section's color; pass `tone` to override it. */
export default function CodeSnippet({
  code,
  tone,
}: {
  code: string;
  tone?: PaletteColor;
}) {
  const style = tone
    ? ({ "--code-tone": `var(--${tone})` } as CSSProperties)
    : undefined;

  return (
    <div className="dwc-code-figure" style={style}>
      <pre>
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
