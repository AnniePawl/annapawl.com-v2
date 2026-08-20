import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "approach")!;

const PRINCIPLES = [
  {
    title: "Playful, not arbitrary",
    body: "Moments of delight should feel intentional. Interaction, motion, color, and unexpected details should support the experience rather than compete with it.",
  },
  {
    title: "Crafted, not generic",
    body: "The system should retain a sense of authorship. Components can be reusable and systematic without feeling like they came from a generic UI library.",
  },
  {
    title: "Systematic underneath",
    body: "Consistency in spacing, typography, accessibility, responsive behavior, and component structure creates the foundation that allows expressive moments to stand out.",
  },
  {
    title: "Designed to evolve",
    body: "The system is intentionally a work in progress. Patterns can be questioned, tested, refined, and replaced as the portfolio — and my own practice — evolves.",
  },
];

export default function ApproachSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <p>
        My approach is rooted in a tension I’m continually drawn to: handmade
        personality × engineered precision.
      </p>
      <p>
        I want interfaces to feel human, expressive, and a little unexpected,
        while still being built on thoughtful systems. Underneath the playful
        details is a deliberate foundation of typography, spacing, color,
        accessibility, responsive behavior, and reusable components.
      </p>
      <p>
        Rather than treating a design system as a set of rigid rules, I see
        it as a framework that creates consistency while leaving room for
        experimentation. The goal isn’t to eliminate irregularity or
        personality, but to give those moments enough structure that they
        feel intentional.
      </p>

      <div style={{ marginTop: 8 }}>
        <h4 style={{ marginBottom: 16, fontSize: 14, fontWeight: 600 }}>
          Principles
        </h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {PRINCIPLES.map(({ title, body }) => (
            <div key={title}
             >
              <h5
                style={{
                  marginBottom: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {title}
              </h5>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
