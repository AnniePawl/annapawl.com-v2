import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import { CardBody, CardHeading } from "../../../components/ui/Card";

const meta = SECTIONS.find((s) => s.id === "approach")!;

const PRINCIPLES = [
  {
    title: "Playful, with purpose",
    body: "Moments of delight should feel intentional. Interaction, motion, color, and unexpected details should support the experience rather than compete with it.",
  },
  {
    title: "Crafted, not generic",
    body: "Reusable doesn’t have to mean generic. I want the system to have a point of view, with thoughtful details that make the things I build feel distincly my own.",
  },
  {
    title: "Systematic underneath",
    body: "The fun stuff works because the foundation is solid. Consist spacing, typography, responsive behavior, and component structure creates a reliable structure to build and experiment on.",
  },
  {
    title: "Designed to evolve",
    body: "Nothing here is too precious to change. Patterns can be questioned, tested, refined, and replaced as I grow, learn, and discover new things to try! #WorkInProgress",
  },
];

export default function ApproachSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <p> I’m drawn to the balance between personality and precision — work that feels expressive and human, while still considered in every detail. I love playfulness, color, and unexpected moments that give an interface a sense of character and charm. </p>

<p> I don’t think of a design system as a set of rules to follow perfectly. I see it as a foundation: enough structure to create consistency, but enough flexibility to experiment, try something funky, or break a rule when it makes the experience better. The goal isn’t to smooth out every irregularity, but to create a system where personality and precision can coexist. </p>
      <div style={{ marginTop: 8 }}>
        <h4 style={{ marginBottom: 16, fontSize: 14, fontWeight: 600 }}>
          Principles
        </h4>
        {/* Fixed 2-column grid instead of auto-fit — with exactly 4 items,
            auto-fit was fitting 3 per row at common widths and stranding the
            4th alone on its own line. This guarantees a clean 2x2 (desktop)
            or single column (mobile). Trying the yellow-bold tile background
            — text colors below (secondary/primary, not muted) are picked
            deliberately for contrast against that yellow, not just to match
            the rest of the system. */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {PRINCIPLES.map(({ title, body }, i) => (
            <div
              key={title}
              style={{
                boxShadow: "var(--shadow-card)",
                borderRadius: "var(--radius-card)",
                padding: "var(--space-5)",
              }}
            >
              <span
                style={{
                  display: "block",
                  marginBottom: 8,
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "var(--text-secondary)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <CardHeading>{title}</CardHeading>
              <CardBody>{body}</CardBody>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
