import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import Button from "../../../components/ui/Button";

const meta = SECTIONS.find((s) => s.id === "accessibility")!;

export default function AccessibilitySection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Baseline accessibility patterns built into the foundations, not bolted on per-component."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 640 }}>
        <div>
          <h4 style={{ marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Focus ring</h4>
          <p style={{ marginBottom: 12, color: "var(--text-secondary)", fontSize: 14 }}>
            Every interactive element shares one <code>.focus-ring</code> utility
            (foundations/focus.css) so keyboard focus is always visible and
            consistent. Tab to the button below to see it.
          </p>
          <Button data-state="focus">Focus me</Button>
        </div>

        <div>
          <h4 style={{ marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Reduced motion</h4>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            Animation durations (modal, hover, UI transitions) collapse to
            0ms under <code>prefers-reduced-motion: reduce</code>, defined
            once in foundations/motion.css so every component inherits it
            automatically.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Contrast</h4>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            Text tokens (<code>--text-primary</code>, <code>--text-secondary</code>,{" "}
            <code>--text-muted</code>) are checked against{" "}
            <code>--bg-default</code>/<code>--bg-subtle</code> for AA contrast.
            Still need to audit the brand palette soft/bold pairs used as
            backgrounds for badges and swatches.
          </p>
        </div>
      </div>
    </Section>
  );
}
