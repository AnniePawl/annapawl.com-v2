import Section from "../_components/Section";
import "./approach.css";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "approach")!;

const PRINCIPLES = [
  {
    title: "Playful, with purpose",
    body: "Moments of delight should feel intentional. Interaction, motion, color, and unexpected details should support the experience rather than compete with it.",
  },
  {
    title: "Crafted, not generic",
    body: "Reusable doesn’t have to mean generic. I want the system to have a point of view, with thoughtful details that make the things I build feel distinctly my own.",
  },
  {
    title: "Systematic underneath",
    body: "The fun stuff works because the foundation is solid. Consistent spacing, typography, responsive behavior, and component structure create a reliable foundation to build and experiment on.",
  },
  {
    title: "Designed to evolve",
    body: "Nothing here is too precious to change. Patterns can be questioned, tested, refined, and replaced as I grow, learn, and discover new things to try!",
  },
];

export default function ApproachSection() {
  return (
    <Section id={meta.id} heading={meta.title} icon={meta.icon}>
      <div className="sedge-section-intro">
        <p>
       I’m drawn to the balance between personality and precision — work that feels expressive and human, while still considered in every detail. I love playfulness, color, and unexpected moments that give an interface a sense of character and charm.
        </p>
        <p>
      For this project, my design system is a foundation rather than a strict set of rules: structured enough to create consistency, but flexible enough to experiment, try something funky, or break a rule when it makes the experience better. The goal isn’t to smooth out every irregularity, but to create a system where personality and precision can comfortably coexist.
        </p>

      </div>
      <div className="approach-principles">
        <h3 className="approach-label type-eyebrow">Four guiding principles</h3>
        <ol className="approach-list">
          {PRINCIPLES.map(({ title, body }, i) => (
            <li className="approach-principle" key={title}>
              <span className="approach-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="h4">{title}</h4>
              <p className="type-supporting">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
