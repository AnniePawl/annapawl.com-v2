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
      lede="I’m still learning, and I’m building that learning into Sedge as it grows so its more playful ideas can work for more people."
      description="These foundations are a starting point for making the playful parts of the interface work for more people."
    >
      <div style={{ maxWidth: 640 }}>
        <div>
          <h3 className="sedge-subheading">Focus ring</h3>
          <p style={{ marginBottom: 12, color: "var(--text-secondary)", fontSize: 14 }}>
            Interactive elements share a consistent <code>.focus-ring</code> utility
            (foundations/focus.css) so keyboard navigation stays visible throughout the site. Tab the button below to see it in action.
          </p>
          <Button data-state="focus">Focus me</Button>
        </div>

        <div>
          <h3 className="sedge-subheading">Reduced motion</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            Motion adds personality to the site, but it shouldn’t be required to use it. When reduced motion is preferred, smooth scrolling and decorative animations are disabled, while motion-token durations collapse to remove unnecessary movement. The animated shelf on the landing page follows the same rule: every piece holds still when reduced motion is on.
          </p>
        </div>

        <div>
          <h3 className="sedge-subheading">Color & Contrast</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            With such an expansive palette, contrast is something I’m especially mindful of. I’m working on a contrast-checking script to evaluate core color combinations against WCAG AA guidelines, while continuing to review colors in context as they’re introduced throughout the system.
          </p>
        </div>

        <div>
          <h3 className="sedge-subheading">Semantics</h3>
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
