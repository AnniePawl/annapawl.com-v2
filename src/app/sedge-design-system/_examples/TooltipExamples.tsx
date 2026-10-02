import Button from "../../../components/ui/Button";
import Tooltip from "../../../components/ui/Tooltip";
import CodeBlock from "../_components/CodeBlock";
import "./TooltipExamples.css";

const USAGE = `
import Tooltip from "@/components/ui/Tooltip";

<Tooltip
  label="A little extra context"
  side="top"
  tone={{
    background: "sky-soft",
    foreground: "cherry-bold",
  }}
>
  <Button variant="secondary">Top placement</Button>
</Tooltip>

<Tooltip
  label="Psst... down here"
  side="bottom"
  tone={{
    background: "cherry-bold",
    foreground: "sky-soft",
  }}
>
  <Button variant="secondary">Bottom placement</Button>
</Tooltip>
`;

export default function TooltipExamples() {
  return (
    <section style={{ maxWidth: 960 }}>
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />

      <div className="tooltip-panel">
        <span className="tooltip-panel-label">Placement</span>
        <p className="tooltip-panel-desc">
          Tooltips can appear above or below the trigger.
        </p>

        <div className="tooltip-demo-row">
          <div className="tooltip-demo-cell">
            <Tooltip
              label="A little extra context"
              side="top"
              tone={{
                background: "sky-soft",
                foreground: "cherry-bold",
              }}
              className="tooltip-wrapper--static"
            >
              <Button variant="secondary">Top placement</Button>
            </Tooltip>
          </div>

          <div className="tooltip-demo-cell">
            <Tooltip
              label="Psst... down here"
              side="bottom"
              tone={{
                background: "cherry-bold",
                foreground: "sky-soft",
              }}
              className="tooltip-wrapper--static"
            >
              <Button variant="secondary">Bottom placement</Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
