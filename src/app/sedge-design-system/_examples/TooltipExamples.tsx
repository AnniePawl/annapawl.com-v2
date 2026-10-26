import { CircleHelp } from "lucide-react";
import Tooltip from "../../../components/ui/Tooltip";
import CodeBlock from "../../../components/ui/CodeBlock";
import "./TooltipExamples.css";

const USAGE = `
import { CircleHelp } from "lucide-react";
import Tooltip from "@/components/ui/Tooltip";

// Plain (default): cream box, page-accent marker
<Tooltip label="Counts finished books only">
  <span className="label-with-info">
    Reading goal
    <CircleHelp aria-hidden="true" />
  </span>
</Tooltip>

// Tinted: soft page tint + page accent
<Tooltip label="The Left Hand of Darkness — Ursula K. Le Guin" variant="tinted">
  <span className="truncated-title">The Left Hand of Darkness…</span>
</Tooltip>

// Make your own: any palette colors
<Tooltip
  label="Every book I’ve rated five stars"
  tone={{ background: "pink-soft", marker: "emerald-bold" }}
>
  <span>Favorites</span>
</Tooltip>
`;

export default function TooltipExamples() {
  return (
    <section style={{ maxWidth: 960 }}>
      <h3 className="sedge-subheading">Examples</h3>

      <div className="tooltip-demo-row">
        <div className="tooltip-demo-cell">
          <Tooltip
            label="Counts finished books only"
            className="tooltip-wrapper--static"
          >
            <span className="tooltip-info-trigger">
              Reading goal
              <CircleHelp aria-hidden="true" />
            </span>
          </Tooltip>
          <span className="tooltip-demo-label">Plain</span>
        </div>

        <div className="tooltip-demo-cell">
          <Tooltip
            label="The Left Hand of Darkness — Ursula K. Le Guin"
            variant="tinted"
            className="tooltip-wrapper--static"
          >
            <span className="tooltip-truncated-trigger">
              The Left Hand of Darkness…
            </span>
          </Tooltip>
          <span className="tooltip-demo-label">Tinted</span>
        </div>

        <div className="tooltip-demo-cell">
          <Tooltip
            label="Every book I’ve rated five stars"
            tone={{ background: "pink-soft", marker: "emerald-bold" }}
            className="tooltip-wrapper--static"
          >
            <span className="tooltip-info-trigger">Favorites</span>
          </Tooltip>
          <span className="tooltip-demo-label">Custom tone</span>
        </div>
      </div>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
    </section>
  );
}
