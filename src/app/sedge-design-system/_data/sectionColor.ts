import { SECTIONS } from "./sections";

// Cycles through the "soft" half of the brand palette so every section
// card gets a distinct, pastel-light background — light enough that dark
// text stays readable on all of them. Shared by every section-container
// component (Section, PosterSection) so they can never drift apart.
export const SOFT_COLORS = [
  // "--indigo-soft",
  "--lemon-soft",
  "--mint-soft",
  "--orange-soft",
  "--pink-soft",
  "--lime-soft",
  "--mint-soft",
  "--green-soft",
  "--sky-soft",
  "--blue-soft",
  "--violet-soft",
];

export function colorForSection(id: string) {
  const index = SECTIONS.findIndex((s) => s.id === id);
  const safeIndex = index === -1 ? 0 : index;
  // `return` was accidentally dropped here at some point (this function was
  // silently returning `undefined` for every section, which is why every
  // section's colored background disappeared -- Section.tsx/PosterSection.tsx
  // both do `style={{ background: \`var(${bgToken})\` }}`, and `var(undefined)`
  // is invalid CSS, so it just rendered as no background at all).
  return SOFT_COLORS[safeIndex % SOFT_COLORS.length];
}
