import { TEACUP_CUP, TEACUP_HANDLE, TEACUP_SAUCER } from "./teacup";

const STEPS = [TEACUP_CUP, TEACUP_HANDLE, TEACUP_SAUCER];

/**
 * Draws the teacup up to a given step from the exact CSS shown in the
 * post, scoped to this demo so the steps don't affect each other.
 */
export default function TeacupDemo({ step }: { step: 1 | 2 | 3 }) {
  const scope = `[data-teacup-step="${step}"]`;
  const css = [
    // The site uses border-box; readers' pages default to content-box.
    `${scope} .teacup, ${scope} .teacup::before, ${scope} .teacup::after { box-sizing: content-box; }`,
    ...STEPS.slice(0, step),
  ]
    .join("\n")
    .replaceAll(".teacup", `${scope} .teacup`)
    .replaceAll(`${scope} ${scope}`, scope);

  return (
    <div className="dwc-demo-stage dwc-demo-stage--teacup" data-teacup-step={step}>
      <style>{css}</style>
      <div className="teacup" />
    </div>
  );
}
