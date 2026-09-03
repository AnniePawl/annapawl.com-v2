import { Heart, Palette, SlidersHorizontal, Target, Wand2 } from "lucide-react";
import PosterSection from "../_components/PosterSection";
import { StickyNote } from "../_components/Doodle";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((s) => s.id === "overview")!;

const AT_A_GLANCE = [
  {
    icon: Target,
    title: "Thoughtful + precise",
    caption: "details with intention",
  },
  {
    icon: Palette,
    title: "Colorful by design",
    caption: "expansive on purpose",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible foundation",
    caption: "built to adapt + evolve",
  },
  {
    icon: Wand2,
    title: "Room to play",
    caption: "experiment, noodle, learn",
  },
  {
    icon: Heart,
    title: "Delight in the details",
    caption: "function meets personality",
  },
];

export default function OverviewSection() {
  return (
    <PosterSection id={meta.id} heading={meta.title} icon={meta.icon}>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_245px]">
        <div>
          <p>
            This design system is a living record of the UI decisions
            behind my digital garden and a playground for developing a
            visual language that feels distinctly ✴me✴.
          </p>
          <p>
            As a frontend developer with a deep love of design,
            I&rsquo;ve become increasingly curious, intentional, and
            sometimes obsessive about how things look, feel, and respond.
            This system gives structure to that curiosity and my own
            visual instincts: thoughtful and precise at its core, with
            plenty of room for color, weird little details, and moments
            of delight.
          </p>
          <p>
            It&rsquo;s a space to experiment, break a few rules, and
            occastionally change my mind entirely. Nothing here is too
            precious to change or ever really finished. Like any garden,
            it&rsquo;s meant to be tended to and grown over time —
            evolving as I learn, noodle, refine my taste, and sometimes
            fall victim to a design trend. 🌱
          </p>
        </div>

        <div className="poster-aside-card">
          <span className="poster-label">At a glance</span>
          <ul>
            {AT_A_GLANCE.map(({ icon: Icon, title, caption }) => (
              <li className="poster-aside-item" key={title}>
                <Icon aria-hidden="true" />
                <div>
                  <div className="poster-aside-item-title">{title}</div>
                  <div className="poster-aside-item-caption">{caption}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PosterSection>
  );
}
