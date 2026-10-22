import type { PaletteColor } from "../../components/ui/colorTokens";

/**
 * One palette tone per tag. Drives the small square marker beside each tag
 * in the bookshelf rail (and anywhere else a tag needs a color, e.g. the
 * stats modal). Tags without an entry fall back to DEFAULT_TAG_TONE.
 */
export const TAG_TONES: Record<string, PaletteColor> = {
  Adventure: "orange-bold",
  "Book Club": "cherry-bold",
  Dystopian: "steel-bold",
  Fantasy: "indigo-bold",
  Favorites: "red-bold",
  "Historical Fiction": "ochre-bold",
  History: "taupe-bold",
  "LGBTQ+": "pink-bold",
  "Literary Fiction": "emerald-bold",
  "Made me cry": "sky-bold",
  Memoir: "clay-bold",
  Nonfiction: "sage-bold",
  Romance: "plum-soft",
  "Science Fiction": "blue-bold",
  Survival: "moss-bold",
};

export const DEFAULT_TAG_TONE: PaletteColor = "taupe-soft";

export function tagTone(tag: string) {
  return `var(--${TAG_TONES[tag] ?? DEFAULT_TAG_TONE})`;
}
