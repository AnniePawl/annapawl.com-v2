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

// Same 5 items/copy as before — see _data/sections.ts for why this lives
// here instead of a standalone Overview section. Styling changed (see
// below) but the words didn't.
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

// Soft badge color per "At a glance" item — the soft/bold pairing this
// site already uses everywhere (soft = functional UI fill, bold =
// expressive accent) is what keeps these icon badges legible next to the
// bold decorative cluster on the right, rather than competing with it.
const BADGE_COLORS = [
  "var(--pink-soft)",
  "var(--mint-soft)",
  "var(--sky-soft)",
  "var(--yellow-soft)",
  "var(--violet-soft)",
];

/**
 * The page's hero — sits above the sidebar/docs app and fills the entire
 * first screen: `min-h-[calc(100dvh-4.5rem)]` (4.5rem being HeroNav's own
 * height) plus `flex flex-col justify-center` means the content block is
 * vertically centered in whatever's left of the viewport below the sticky
 * nav.
 *
 * Layout: a two-track `lg:grid-cols-[3fr_1.5fr]` template — left column
 * (eyebrow, title, the original copy in full, CTA, then "At a glance" as
 * a row of soft-badged icons) gets 3fr, the decorative shape cluster on
 * the right gets 1.5fr — roughly 33% of the row now, widened from an
 * even 1-of-4-columns (25%) split because the shapes felt cramped in
 * that narrower rail after the "way bigger" round. Plain shapes only on
 * the right, no doodle arrows or hand-written notes layered on top of
 * them. Using an explicit two-value grid template (rather than
 * `grid-cols-N` + `col-span-*`) means each child's column is just its
 * position in source order — no span classes needed on either child.
 *
 * Typography hierarchy (per Anna's reference screenshot): eyebrow stays
 * small/tracked, "Sedge" itself is the single dominant element — no
 * second "Design System" line underneath it anymore (that already lives
 * in the eyebrow above), sized way up and set to the heaviest weight
 * Tailwind exposes (`font-black`/900) with tight negative tracking so it
 * reads as a bold wordmark rather than a heading. Note: Space Grotesk's
 * variable-font weight axis on Google Fonts tops out at 700 (see
 * layout.tsx's comment), so 900 clamps to that same 700 instance under
 * the hood — the extra visual weight actually comes from the much larger
 * size + tightened tracking, not from a heavier face that doesn't exist.
 * First paragraph is bumped from text-sm to text-base (slightly bigger
 * than the second paragraph) to step the hierarchy down gradually rather
 * than both paragraphs reading as one undifferentiated block.
 */
export default function Hero({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-7xl flex-col justify-center overflow-hidden px-6 py-10">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[3fr_1.5fr]">
        <div className="pt-5">
          <span className="poster-label text-stone-400">A Living Design System · EST 2026</span>
          <h1 className="h-display mt-3  text-[clamp(4rem,9vw,8rem)] font-black leading-[0.85] tracking-[0em]">
            Sedge
          </h1>
          <p className="mt-10 max-w-2xl !text-xl leading-normal text-[var(--text-secondary)]">
            A living record of the UI decisions
            behind my digital garden and a playground for developing a
            visual language that feels distinctly <b>me</b>.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-normal text-stone-500">
          As a frontend developer with a deep love of design, I’ve become increasingly curious — and sometimes obsessive — about how things look, feel, and respond. Sedge gives structure to that curiosity, with plenty of room for color, weird little details, and moments of delight. Like any garden, it’s meant to be tended to and grown over time — a place to experiment, break a few rules, and evolve as I learn, noodle, and refine my taste. 🌱
          </p>
         

          <button
            type="button"
            onClick={onExplore}
            className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-indigo-soft px-6 py-3 text-xs font-bold tracking-wide text-[var(--text-primary)] uppercase transition hover:brightness-95"
          >
            Explore the system
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {AT_A_GLANCE.map(({ icon: Icon, title, caption }, i) => (
              <div key={title} className="flex flex-col items-start gap-2">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ background: BADGE_COLORS[i % BADGE_COLORS.length] }}
                >
                  <Icon
                    className="h-5 w-5 text-[var(--text-primary)]"
                    aria-hidden="true"
                  />
                </span>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {title}
                </div>
                <div className="text-xs text-[var(--text-secondary)]">
                  {caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative cluster — bold-toned shapes only, no arrows/notes,
            each with a slow ambient float (see poster.css's
            .hero-float-* classes / @keyframes hero-float-*). Sizes/positions are
            absolute within a fixed-height container, so this is an
            approximation rather than a pixel match to any reference;
            easiest lever to adjust later is the h-[*] values below.
            Sized deliberately larger than the 1-of-4-columns rail itself
            (~300px at max-w-7xl) per Anna's "way large" ask — shapes are
            meant to bleed past the rail's own edges into the gap/page
            margin; the section's own `overflow-hidden` (see the
            <section> above) is what stops them from spilling past the
            hero itself. */}
        <div
          className="relative hidden h-[600px] lg:block"
          aria-hidden="true"
        >
          <span
            className="hero-float-sm absolute top-16 -left-6 h-24 w-24 rounded-full bg-orange-soft"
            style={{ animationDuration: "6s", animationDelay: "0s" }}
          />

          <Shape
            variant="scallop"
            className="hero-float-lg absolute -top-8 -right-10 h-80 w-80 text-lime-soft"
            style={{ animationDuration: "7.5s", animationDelay: "0.4s" }}
          />

          <Shape
            variant="scallop"
            className="hero-float-md absolute top-40 -left-8 h-72 w-72 text-pink-soft"
            style={{ animationDuration: "6.5s", animationDelay: "1.1s" }}
          />

          <span
            className="hero-float-sm absolute top-72 -right-10 h-36 w-36 bg-violet-soft"
            style={{
              borderRadius: "100% 0 0 0",
              animationDuration: "5.5s",
              animationDelay: "0.7s",
            }}
          />

          <Shape
            variant="clover"
            className="hero-float-md absolute right-0 bottom-20 h-52 w-52 text-blue-soft"
            style={{ animationDuration: "6.8s", animationDelay: "1.6s" }}
          />

          <span
            className="hero-float-rotated absolute bottom-4 -left-4 h-56 w-20 rounded-2xl bg-yellow-soft"
            style={{ animationDuration: "5s", animationDelay: "0.3s" }}
          />

          <Shape
            variant="burst"
            className="hero-float-sm absolute bottom-0 left-28 h-32 w-32 text-red-soft"
            style={{ animationDuration: "4.8s", animationDelay: "1.2s" }}
          />
        </div>
      </div>
    </section>
  );
}
