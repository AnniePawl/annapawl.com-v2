import {
  ArrowRight,
  Heart,
  Palette,
  SlidersHorizontal,
  Target,
  Wand2,
} from "lucide-react";
import Shape from "../../../components/ui/Shape";
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

const BADGE_COLORS = [
  "var(--pink-soft)",
  "var(--mint-soft)",
  "var(--sky-soft)",
  "var(--lemon-soft)",
  "var(--lilac-soft)",
];

export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section id='top' className="pt-8 relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-7xl flex-col justify-center overflow-hidden px-6 py-6">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_1.5fr]">
        <div className="pt-5">
          <h1 className="h-display sedge-hero-title">
            Sedge
          </h1>

          <p className="mt-8 max-w-2xl text-[22px] leading-snug text-[var(--text-primary)] md:text-2xl">
            A living record of the UI decisions behind my digital garden and
            a playground for developing a visual language that feels
            distinctly <b>me</b>.
          </p>

          <p className="mt-5 max-w-xl text-base leading-normal text-[var(--text-secondary)]">
            As a frontend developer with a deep love of design, I&apos;m always exploring the space
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
          >
            Explore the system
          </Button>
        </div>

        {/* Animated Shape Cluster(desktop only) */}
        <div
          className="relative hidden h-[420px] lg:block"
          aria-hidden="true"
        >
          <Shape
            variant="circle"
            className="hero-float-sm absolute top-4 -left-11 h-28 w-28 text-coral-bold"
            style={{ animationDuration: "6s", animationDelay: "0s" }}
          />
          <Shape
            variant="scallop"
            className="hero-float-lg absolute top-2 right-2 h-80 w-80 text-lime-soft"
            style={{ animationDuration: "7.5s", animationDelay: "0.4s" }}
          />
          <Shape
            variant="flower"
            className="hero-float-md absolute top-24 -left-14 h-60 w-60 text-indigo-soft"
            style={{ animationDuration: "6.5s", animationDelay: "1.1s" }}
          />

          <span
            className="hero-float-sm absolute top-56 right-2 h-40 w-40 bg-violet-soft"
            style={{
              borderRadius: "100% 0 0 0",
              animationDuration: "5.5s",
              animationDelay: "0.7s",
            }}
          />
          <Shape
            variant="clover"
            className="hero-float-md absolute right-6 bottom-2 h-52 w-52 text-blue-soft"
            style={{ animationDuration: "6.8s", animationDelay: "1.6s" }}
          />
          <Shape
            variant="arch"
            preserveAspectRatio="none"
            className="hero-float-rotated absolute bottom-0 -left-10 h-56 w-20 text-lemon-bold"
            style={{ animationDuration: "5s", animationDelay: "0.3s" }}
          />
          <Shape
            variant="burst"
            className="hero-float-sm absolute bottom-6 left-40 h-24 w-24 text-cherry-soft"
            style={{ animationDuration: "4.8s", animationDelay: "1.2s" }}
          />
          <Shape
            variant="ring"
            className="hero-float-sm absolute top-7 left-24 h-14 w-14"
            style={{
              color: "var(--lilac-soft)",
              animationDuration: "5.2s",
              animationDelay: "0.9s",
            }}
          />
          <Shape
            variant="flower"
            className="hero-float-sm absolute top-[78px] left-[164px] h-10 w-10 text-emerald-bold"
            style={{ animationDuration: "4.5s", animationDelay: "0.2s" }}
          />
          <Shape
            variant="circle"
            className="hero-float-sm absolute top-[360px] left-20 h-10 w-10 text-pink-bold"
            style={{ animationDuration: "5.8s", animationDelay: "1.4s" }}
          />
        </div>
      </div>
      {/* At a glance section */}
      <div className="">
        <hr className="poster-divider my-4" />
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          {/* <span className="md:hidden text-lg  font-semibold text-[var(--text-muted)]">At a glance</span> */}
          {AT_A_GLANCE.map(({ icon: Icon, title, caption }, i) => (
            <div
              key={title}
              className="flex flex-row items-center gap-3 lg:flex-col lg:gap-2"
            >
              <span
                className="flex h-10 w-24 shrink-0 items-center justify-center rounded-full"
                style={{ background: BADGE_COLORS[i % BADGE_COLORS.length] }}
              >
                <Icon
                  className="h-6 w-6 text-[var(--charcoal)]"
                  aria-hidden="true"
                />
              </span>
              <div className="flex flex-col md:items-center">
                <div className="text-sm font-semibold text-[var(--text-primary)]">
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
