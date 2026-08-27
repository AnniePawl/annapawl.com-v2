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
      description="Accessibility is something I’m continuing to learn about and build into the system. These foundations are a starting point for making the playful parts of the interface work for more people."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 640 }}>
        <div>
          <h4 style={{ marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Focus ring</h4>
          <p style={{ marginBottom: 12, color: "var(--text-secondary)", fontSize: 14 }}>
            Interactive elements share a consistent <code>.focus-ring</code> utility
            (foundations/focus.css) so keyboard navigation stays visible throughout the site. Tab the button below to see it in action.
          </p>
          <Button data-state="focus">Focus me</Button>
        </div>

        <div>
          <h4 style={{ marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Reduced motion</h4>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            Motion adds a lot of personality to the site, but it shouldn’t be required to use it. Animations and transitions respect prefers-reduced-motion, reducing movement for people who have that preference enabled.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: 8, fontSize: 14, fontWeight: 600 }}>Color & Contrast</h4>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            With such an expansive palette, contrast is something I’m especially mindful of. Core text and background combinations are checked for WCAG AA contrast, while the broader palette is continuing to be tested as colors find their way into different contexts.
          </p>
        </div>

        <div>
          <h4 style={{ marginBottom: 8, fontSize: 14, fontWeight: 600 }}>
            Semantics
          </h4>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            I use semantic HTML and native elements wherever possible, with clear
            heading structure and meaningful labels so the interface makes sense
            beyond what’s visible on the screen.
          </p>
        </div>
      </div>
    </Section>
  );
}
