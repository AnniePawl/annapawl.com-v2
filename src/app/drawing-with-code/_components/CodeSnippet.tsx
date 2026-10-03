/**
 * Static code figure for the explainer copy below. The old page used two
 * screenshots (circle-snippet.jpeg, css-rule.jpeg) of code shown in its
 * own dark editor theme — replaced with real formatted text here instead
 * of porting stale images that would've clashed with the restyled page
 * (and would've meant shipping two more raster images for what's really
 * just a few lines of text).
 */
export default function CodeSnippet({ code }: { code: string }) {
  return (
    <div className="dwc-code-figure">
      <pre>
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}
