import PosterSection from "../_components/PosterSection";
import { NumberBadge, PosterNote, Squiggle } from "../_components/Doodle";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "approach")!;

const UNDERLINE_COLORS = [
  "var(--pink-bold)",
  "var(--orange-bold)",
  "var(--green-bold)",
  "var(--blue-bold)",
];

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
    <PosterSection id={meta.id} heading={meta.title} icon={meta.icon}>
      <div style={{ position: "relative" }}>
        <p>
          I&rsquo;m drawn to the balance between personality and precision
          — work that feels expressive and human, while still considered
          in every detail. I love playfulness, color, and unexpected
          moments that give an interface a sense of character and charm.
        </p>
        <p>
          I don&rsquo;t think of a design system as a set of rules to
          follow perfectly. I see it as a foundation: enough structure to
          create consistency, but enough flexibility to experiment, try
          something funky, or break a rule when it makes the experience
          better. The goal isn&rsquo;t to smooth out every irregularity,
          but to create a system where personality and precision can
          coexist.
        </p>

      </div>

      <div style={{ display: "flex", gap: "var(--space-5)", marginTop: "var(--space-6)" }}>
        <span
          className="poster-rail-label"
          style={{ alignSelf: "stretch", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          Principles
        </span>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" style={{ flex: 1 }}>
          {PRINCIPLES.map(({ title, body }, i) => (
            <div key={title}>
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginBottom: "var(--space-2)" }}>
                <NumberBadge index={i} />
                <span style={{ fontSize: "var(--text-lg)", fontWeight: "var(--font-bold)" }}>
                  {title}
                </span>
              </div>
              <Squiggle
                style={{
                  width: 64,
                  height: 8,
                  marginLeft: "calc(1.75rem + var(--space-3))",
                  marginBottom: "var(--space-3)",
                  color: UNDERLINE_COLORS[i % UNDERLINE_COLORS.length],
                }}
              />
              <p
                style={{
                  margin: 0,
                  marginLeft: "calc(1.75rem + var(--space-3))",
                  fontSize: "var(--text-sm)",
                  lineHeight: "var(--leading-relaxed)",
                  color: "var(--text-secondary)",
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PosterSection>
  );
}
