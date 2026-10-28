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
    title: "Built to customize",
    body: "Reusable doesn’t have to mean repetitive. Shared structure keeps things consistent, while flexible color props let components mix, match, and shift with the mood of each page. Lots of choose your own adventure moments!",
  },
  {
    title: "Systematic underneath",
    body: "The fun stuff works because the foundation is solid. Consistent spacing, typography, responsive behavior, and component structure create a reliable foundation to build and experiment on.",
  },
  {
    title: "Designed to evolve",
    body: "Nothing here is too precious to change. Patterns can be questioned, tested, refined, and replaced as I grow, learn, change my mind, and discover new things to try!",
  },
];

export default function ApproachSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="A balance of personality and precision."
    >
      <div className="sedge-section-intro">
        <p>
          I like interfaces with personality—the kind that feel expressive and human without losing sight of the details. My design system is a foundation, not a rulebook. It creates enough consistency to hold things together, with room to experiment, try something funky, or break a rule when the experience calls for it.
        </p>
      </div>
      <div className="approach-principles">
        <h3 className="approach-label sedge-subheading">Four guiding principles</h3>
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
