"use client";

import { CSSProperties, useState } from "react";
import Button from "../../../components/ui/Button";
import Tooltip, { TooltipTone } from "../../../components/ui/Tooltip";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import Tooltip from "@/components/ui/Tooltip";

<Tooltip label="Tooltip on top" side="top">
  <Button variant="secondary">Hover me</Button>
</Tooltip>

<Tooltip label="Tinted tooltip" tone="violet">
  <Button variant="secondary">Hover me</Button>
</Tooltip>
`;

// Same 11-hue set as Card's/Badge's own tone pickers.
const TONES: TooltipTone[] = [
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "mint",
  "green",
  "sky",
  "blue",
  "indigo",
  "violet",
];

export default function TooltipExamples() {
  const [tone, setTone] = useState<TooltipTone>("mint");

  return (
    <section style={{ maxWidth: 960 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      {/* Two plain, locally-styled panels — not the Card component. Anna:
          "update UI for tooltip... dont add 'cards' but make sections." */}
      <div className="tooltip-panels">
        <div className="tooltip-panel">
          <span className="tooltip-panel-label">Placement</span>
          <p className="tooltip-panel-desc">
            Tooltips can appear above or below the trigger.
          </p>

          {/* Anna: "instead of having to see tooltips on hover- simply
              show it by default and remove hover funtionality bc its
              just an example." These two are illustration only, so the
              bubble is forced open (tooltip-wrapper--static) instead of
              needing a real hover/focus. */}
          <div className="tooltip-demo-row">
            <div className="tooltip-demo-cell">
              <Tooltip
                label="You found the tooltip!"
                side="top"
                className="tooltip-wrapper--static"
              >
                <Button variant="secondary">Top Example</Button>
              </Tooltip>
            </div>

            <div className="tooltip-demo-cell">
              <Tooltip
                label="Psst... down here."
                side="bottom"
                className="tooltip-wrapper--static"
              >
                <Button variant="secondary">Bottom Example</Button>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="tooltip-panel">
          <span className="tooltip-panel-label">Try a tone</span>
          <p className="tooltip-panel-desc">
            Same tooltip, different color. Pick a tone to preview it live.
          </p>

          <div className="tooltip-demo-row">
            <Tooltip label={`This is ${tone}`} tone={tone}>
              <Button variant="secondary">Hover me</Button>
            </Tooltip>
          </div>

          <hr className="tooltip-panel-divider" />

          <span className="tooltip-panel-sublabel">Tone</span>
          <div
            className="tooltip-tone-picker"
            role="radiogroup"
            aria-label="Tooltip tone"
          >
            {TONES.map((t) => (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={tone === t}
                aria-label={t}
                className={
                  "tooltip-tone-swatch" +
                  (tone === t ? " tooltip-tone-swatch--selected" : "")
                }
                style={
                  { "--swatch-color": `var(--${t}-bold)` } as CSSProperties
                }
                onClick={() => setTone(t)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
