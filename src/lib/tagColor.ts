/**
 * Deterministic tag -> brand hue mapping, so a given tag always gets the
 * same color dot everywhere it appears, without hand-curating a color
 * per tag (or that mapping drifting out of sync as tags get added in
 * data.ts). Matches the brand palette's hue names (foundations/color.css)
 * — same convention as Card's/Badge's `tone` prop.
 */
export type BrandHue =
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "mint"
  | "green"
  | "sky"
  | "blue"
  | "indigo"
  | "violet";

const HUES: BrandHue[] = [
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "mint",
  "green",
  "sky",
  "blue",
  "indigo",
  "violet",
];

/**
 * djb2 string hash. Doesn't need to be cryptographically anything —
 * just stable across renders/reloads and reasonably spread across the
 * 11 hues. Two tags can land on the same hue (11 hues, more than 11
 * possible tags eventually) — that's fine, this is a scannable accent,
 * not a legend that promises uniqueness.
 */
function hashString(value: string): number {
  let hash = 5381;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 33) ^ value.charCodeAt(i);
  }
  return Math.abs(hash);
}

export function hueForTag(tag: string): BrandHue {
  return HUES[hashString(tag) % HUES.length];
}
