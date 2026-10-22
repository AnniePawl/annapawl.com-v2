import { CircleHelp } from "lucide-react";
import Tooltip from "../../../components/ui/Tooltip";
import CodeBlock from "../_components/CodeBlock";
import "./TooltipExamples.css";

const USAGE = `
import { CircleHelp } from "lucide-react";
import Tooltip from "@/components/ui/Tooltip";

<Tooltip
  label="Counts finished books only"
  side="top"
  tone={{
    background: "sky-soft",
    foreground: "cherry-bold",
  }}
>
  <span className="label-with-info">
    Reading goal
    <CircleHelp aria-hidden="true" />
  </span>
</Tooltip>

<Tooltip
  label="The Left Hand of Darkness — Ursula K. Le Guin"
  side="bottom"
  tone={{
    background: "sky-soft",
    foreground: "cherry-bold",
  }}
>
  <span className="truncated-title">The Left Hand of Darkness…</span>
</Tooltip>
`;

export default function TooltipExamples() {
  return (
    <section style={{ maxWidth: 960 }}>
      <h3 className="sedge-subheading tooltip-examples-heading">Examples</h3>

      <div className="tooltip-demo-row">
        <div className="tooltip-demo-cell">
          <Tooltip
            label="Counts finished books only"
            side="top"
            tone={{
              background: "sky-soft",
              foreground: "cherry-bold",
            }}
            className="tooltip-wrapper--static"
          >
            <span className="tooltip-info-trigger">
              Reading goal
              <CircleHelp aria-hidden="true" />
            </span>
          </Tooltip>
        </div>

        <div className="tooltip-demo-cell">
          <Tooltip
            label="The Left Hand of Darkness — Ursula K. Le Guin"
            side="bottom"
            tone={{
              background: "sky-soft",
              foreground: "cherry-bold",
            }}
            className="tooltip-wrapper--static"
          >
            <span className="tooltip-truncated-trigger">
              The Left Hand of Darkness…
            </span>
          </Tooltip>
        </div>
      </div>
      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />

    </section>
  );
}
