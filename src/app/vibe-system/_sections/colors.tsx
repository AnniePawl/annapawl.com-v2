import PosterSection from "../_components/PosterSection";
import { PosterNote } from "../_components/Doodle";
import ColorSwatchesGrid from "../_components/ColorSwatchesGrid";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "colors")!;

export default function ColorsSection() {
  return (
    <PosterSection id={meta.id} heading={meta.title} icon={meta.icon}>
      <div style={{ position: "relative" }}>
        <p>
          These are the colors that make me happy. Yes, I realize there
          are probably more than a traditional design system would
          recommend, but that&rsquo;s kind of the point — I&rsquo;m making
          the rules here. The palette is intentionally expansive: less
          about limiting what I can use and more about giving me a whole
          world of color to pull from. Bold and soft variations let the
          mood shift from moment to moment while keeping everything part
          of the same visual world.
        </p>

        <PosterNote
          style={{ top: "-1.75rem", left: "min(46ch, 100%)", transform: "rotate(-4deg)" }}
        >
          yes, I know there are a lot
        </PosterNote>
      </div>

      <div style={{ marginTop: "var(--space-6)" }}>
        <ColorSwatchesGrid />
      </div>
    </PosterSection>
  );
}
