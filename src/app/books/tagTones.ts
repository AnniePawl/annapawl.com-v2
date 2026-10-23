import type { PaletteColor } from "../../components/ui/colorTokens";

/**
 * One palette tone per tag. Drives the small square marker beside each tag
 * in the bookshelf rail (and anywhere else a tag needs a color, e.g. the
 * stats modal). Tags without an entry fall back to DEFAULT_TAG_TONE.
 */
export const TAG_TONES: Record<string, PaletteColor> = {
  // Genre
  "Literary Fiction": "emerald-bold",
  "Historical Fiction": "marigold-bold",
  "Science Fiction": "blue-bold",
  Fantasy: "iris-bold",
  Romance: "plum-soft",
  Nonfiction: "sage-bold",
  // Theme
  Dystopian: "slate-bold",
  Adventure: "orange-bold",
  Survival: "moss-bold",
  "LGBTQ+": "pink-bold",
  // Personal
  Favorites: "red-bold",
  "Made Me Cry": "sky-bold",
  "Book Club": "cherry-bold",
};

export const DEFAULT_TAG_TONE: PaletteColor = "taupe-soft";

export function tagTone(tag: string) {
  return `var(--${TAG_TONES[tag] ?? DEFAULT_TAG_TONE})`;
}
