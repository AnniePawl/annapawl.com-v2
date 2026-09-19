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

// Dark-theme counterpart to SOFT_COLORS above, same cycling-by-index
// idea but landing on the earth-tone accents (theme.css's dark scope)
// instead of the light palette's pastels -- a flat pastel card reads as
// a light-mode island once the page itself goes dark, so dark mode
// tints toward --chocolate instead of using these -bold tokens at full
// strength (see darkAccentForSection). Only 5 unique accents (moss /
// sage / clay / ochre / mauve, per the brief) rather than SOFT_COLORS'
// 9 slots -- cycling 5 through 9 sections still keeps neighboring
// sections visually distinct without needing a 1:1 mapping to the
// light array (and sidesteps SOFT_COLORS' own dangling --green-soft/
// --violet-soft slots, which don't need a dark counterpart to "fix").
export const DARK_ACCENT_COLORS = [
  "--moss-bold",
  "--sage-bold",
  "--clay-bold",
  "--ochre-bold",
  "--mauve-bold",
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

// Same per-section determinism as colorForSection, independent cycle
// length (see DARK_ACCENT_COLORS above).
export function darkAccentForSection(id: string) {
  const index = SECTIONS.findIndex((s) => s.id === id);
  const safeIndex = index === -1 ? 0 : index;
  return DARK_ACCENT_COLORS[safeIndex % DARK_ACCENT_COLORS.length];
}
