import { SECTIONS } from "./sections";

// Cycles through the "soft" half of the brand palette so every section
// card gets a distinct, pastel-light background — light enough that dark
// text stays readable on all of them. Shared by every section-container
// component (Section, PosterSection) so they can never drift apart.
export const SOFT_COLORS = [
  "--indigo-soft",
  "--yellow-soft",
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
  return SOFT_COLORS[safeIndex % SOFT_COLORS.length];
}
