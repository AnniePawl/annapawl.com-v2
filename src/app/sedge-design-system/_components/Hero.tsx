import {
  ArrowRight,
  Heart,
  Palette,
  SlidersHorizontal,
  Target,
  Wand2,
} from "lucide-react";
import MarkerWeave from "./MarkerWeave";
import Button from "../../../components/ui/Button";
import "./section.css";

const AT_A_GLANCE = [
  {
    icon: Target,
    title: "Thoughtful + precise",
    caption: "Details with intention",
  },
  {
    icon: Palette,
    title: "Colorful by design",
    caption: "Expansive on purpose",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible foundation",
    caption: "Built to adapt + evolve",
  },
  {
    icon: Wand2,
    title: "Room to play",
    caption: "Experiment, noodle, learn",
  },
  {
    icon: Heart,
    title: "Delight in the details",
    caption: "Function meets personality",
  },
];

// Each principle's icon color (the bold of its old pill color).
const ICON_COLORS = [
  "var(--sky-bold)",
  "var(--cherry-soft)",
  "var(--marigold-bold)",
  "var(--iris-bold)",
  "var(--lime-bold)",
];

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section id='top' className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-7xl flex-col justify-center overflow-hidden px-6 py-6">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_2.6fr]">
        <div className="">
          <h1 className="pt-2 h-display sedge-hero-title">
            Sedge
          </h1>

          <p className="mt-8 max-w-xl text-[22px] leading-snug text-[var(--text-primary)] md:text-2xl">
            A living record of the UI decisions behind my digital garden and
            a playground for shaping a visual language that feels
            distinctly <b>me</b>.
          </p>

          <p className="mt-5 max-w-xl text-base leading-normal text-[var(--text-secondary)]">
            As a frontend developer with a soft spot for design, I&apos;m always exploring the space
            between structure and experimentation. Sedge is where those ideas take shape - thoughtful at its core, playful around the
            edges, and designed to evolve as I do.
          </p>

          <Button
            onClick={onExplore}
            className="mt-8"
            variant="secondary"
            shape="pill"
            size="lg"
            endIcon={<ArrowRight />}
             tone={{ tint: "cherry-bold", text: "cream", accent: "sky-soft", ink: "charcoal" }}
          >
            Explore the system
          </Button>
        </div>

        {/* Animated marker weave (desktop only) */}
        <div className="relative hidden items-center lg:flex lg:min-h-[420px]">
          <MarkerWeave />
        </div>
      </div>
      {/* At a glance section */}
      <div className="pt-4">
        <hr className="poster-divider my-4" />
        <div className="sedge-glance grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-y-0">
          {AT_A_GLANCE.map(({ icon: Icon, title, caption }, i) => (
            <div key={title} className="sedge-glance-item">
              <Icon
                className="sedge-glance-icon"
                style={{ color: ICON_COLORS[i % ICON_COLORS.length] }}
                aria-hidden="true"
              />
              <div className="flex flex-col lg:items-center">
                <div className="text-sm font-medium text-[var(--text-primary)]">
                  {title}
                </div>
                <div className="text-xs text-[var(--text-secondary)]">{caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
