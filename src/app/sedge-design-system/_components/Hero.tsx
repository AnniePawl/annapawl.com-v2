import {
  ArrowRight,
  Heart,
  Palette,
  SlidersHorizontal,
  Target,
  Wand2,
} from "lucide-react";
import Shape from "../../../components/ui/Shape";
import "./poster.css";

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

/**
 * Latest refinement pass, per Anna's own "latest mockup" screenshots
 * (no eyebrow, bigger overlapping shape cluster, pill-shaped icon
 * badges, no "At a Glance" label): eyebrow line removed entirely —
 * "Sedge" is the first element in the column now, no top margin needed
 * beyond the column's own `pt-5`. Shape cluster grown substantially
 * (container `h-[360px]` -> `h-[420px]`, every shape bigger and
 * repositioned to overlap its neighbors more) so it reads as one
 * cohesive cluster with visual weight closer to the text column, rather
 * than several small floating pieces — still the same 7 shapes/colors/
 * variants/float animations as every round before this one, nothing
 * added. "At a Glance" eyebrow label is gone too (per Anna's explicit
 * "do not restore" — an earlier round had added it, this one drops it
 * for good), and the icon badges are now horizontal pills (`w-24 h-10`,
 * `rounded-full` on a wider-than-tall box) instead of plain circles.
 */
export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section id='top' className="pt-12 relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-7xl flex-col justify-center overflow-hidden px-6 py-6">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_1.5fr]">
        <div className="pt-5">
          <h1 className="h-display text-[clamp(3.75rem,8vw,7rem)] font-[680] leading-[0.9] tracking-[-0.02em]">
            Sedge
          </h1>

          <p className="mt-8 max-w-2xl text-[22px] leading-snug text-[var(--text-primary)] md:text-2xl">
            A living record of the UI decisions behind my digital garden and
            a playground for developing a visual language that feels
            distinctly <b>me</b>.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
            As a frontend developer with a deep love of design, I'm always exploring the space 
            between structure and experimentation. Sedge is where those ideas take shape - thoughtful at its core, playful around the
            edges, and designed to evolve as I do. 
          </p>

          <button
            type="button"
            onClick={onExplore}
            // bg-indigo-soft is a base palette token (stays the same
            // light pastel in both themes, see theme.css's top comment),
            // so the label needs a fixed dark color rather than
            // --text-primary, which turns near-white in dark mode and
            // would go invisible against this pill.
            className="group mt-8 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-indigo-soft px-6 py-3 text-xs font-bold tracking-wide text-[var(--charcoal)] uppercase transition hover:brightness-95"
          >
            Explore the system
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out
      group-hover:translate-x-1.5" aria-hidden="true" />
          </button>
        </div>

        {/* Decorative cluster — refinement pass: pulled the whole
            composition down and inward toward the text column (it was
            bleeding ~40px above this container and ~56px past the
            column's own right edge, which read as "too high, too far
            right"). Each shape's inset was retuned individually rather
            than wrapping the group in one transform, so a few pieces
            could also get their own optical correction:
             - the lime scallop (now the one clearly dominant shape)
               sits inset from the container's own top/right edges
               instead of overflowing past them, so it stays inside the
               page's content column instead of spilling past it;
             - the pink scallop shrank 288px -> 240px so it reads as a
               clear *supporting* shape rather than a second dominant
               one, and moved further down/left with the rest of the
               cluster;
             - the violet quarter-round and blue clover shrank slightly
               too, so the cluster reads as dominant / two supporting /
               smaller accents instead of several same-weight pieces;
             - the coral burst moved right, clear of the pink scallop's
               bounding box — the two were almost-touching by only a
               few px before.
            Three new small accents (all existing soft-color tokens,
            kept small so the cluster stays airy) fill in the gaps that
            opened up: a ring bridging the lime/pink seam, a small dot
            near that same seam, and a larger dot alone in the open
            pocket toward the lower-left of the cluster, for asymmetric
            balance. Same 7 original shapes/colors/variants otherwise —
            nothing removed, nothing recolored. Still noninteractive and
            hidden from assistive tech (aria-hidden here, and on every
            Shape itself), and only rendered at lg+ (hidden below),
            same as before, so there's nothing new to collide with text
            or overflow on smaller layouts. */}
        <div
          className="relative hidden h-[420px] lg:block"
          aria-hidden="true"
        >
          <Shape
            variant="circle"
            className="hero-float-sm absolute top-4 -left-11 h-28 w-28 text-orange-soft"
            style={{ animationDuration: "6s", animationDelay: "0s" }}
          />

          {/* Dominant shape — inset from the container's own top/right
              edges (rather than overflowing them) so it reads as
              anchored to the column instead of spilling past the
              page's content boundary. */}
          <Shape
            variant="scallop"
            className="hero-float-lg absolute top-2 right-2 h-80 w-80 text-lime-soft"
            style={{ animationDuration: "7.5s", animationDelay: "0.4s" }}
          />

          {/* Supporting shape #1 — shrunk from 288px so it's clearly
              secondary to the lime scallop, and moved down/left with
              the rest of the cluster. */}
          <Shape
            variant="scallop"
            className="hero-float-md absolute top-24 -left-14 h-60 w-60 text-pink-soft"
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

          {/* Supporting shape #2 — paired weight with the pink scallop,
              both a clear step down from the dominant lime scallop. */}
          <Shape
            variant="clover"
            className="hero-float-md absolute right-6 bottom-2 h-52 w-52 text-blue-soft"
            style={{ animationDuration: "6.8s", animationDelay: "1.6s" }}
          />

          <span
            className="hero-float-rotated absolute bottom-0 -left-10 h-56 w-20 rounded-2xl bg-lemon-soft"
            style={{ animationDuration: "5s", animationDelay: "0.3s" }}
          />

          {/* Moved right, clear of the pink scallop's bounding box —
              was almost-touching it by only a few px. */}
          <Shape
            variant="burst"
            className="hero-float-sm absolute bottom-6 left-40 h-24 w-24 text-red-soft"
            style={{ animationDuration: "4.8s", animationDelay: "1.2s" }}
          />

          {/* New: small ring + two differently-sized dots, added to
              bridge the lime/pink seam and balance the open pocket
              lower-left of the cluster. Kept small, on existing soft
              color tokens (lilac wasn't in Hero's palette yet but is
              part of the same token set) so the composition stays
              airy rather than busier. */}
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
            variant="circle"
            className="hero-float-sm absolute top-[78px] left-[164px] h-6 w-6 text-steel-soft"
            style={{ animationDuration: "4.5s", animationDelay: "0.2s" }}
          />

          <Shape
            variant="circle"
            className="hero-float-sm absolute top-[360px] left-20 h-10 w-10 text-sky-soft"
            style={{ animationDuration: "5.8s", animationDelay: "1.4s" }}
          />
        </div>
      </div>

      {/* "At a glance" — full-width closing row, no eyebrow label (per
          Anna's explicit "do not restore the At a Glance heading"),
          divider sitting close to the row above it rather than a big
          empty gap. */}
      <div className="">
        <hr className="poster-divider my-4" />

        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
          <span className="md:hidden text-lg uppercase font-soft text-[var(--text-muted)]">At a glance</span>
          {AT_A_GLANCE.map(({ icon: Icon, title, caption }, i) => (
            <div
              key={title}
              className="flex flex-row items-center gap-3 lg:flex-col lg:gap-2"
            >
              <span
                className="flex h-10 w-24 shrink-0 items-center justify-center rounded-full"
                style={{ background: BADGE_COLORS[i % BADGE_COLORS.length] }}
              >
                {/* BADGE_COLORS are base palette -soft tokens, always a
                    light pastel in both themes -- fixed --charcoal here
                    for the same reason as the button above, not the
                    themed --text-primary. */}
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
