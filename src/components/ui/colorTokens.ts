export type PaletteHue =
  | "pink"
  | "red"
  | "cherry"
  | "coral"
  | "orange"
  | "clay"
  | "marigold"
  | "lemon"
  | "lime"
  | "sage"
  | "moss"
  | "mint"
  | "green"
  | "emerald"
  | "teal"
  | "sky"
  | "blue"
  | "periwinkle"
  | "slate"
  | "lilac"
  | "iris"
  | "plum"
  | "mauve"
  | "sand"
  | "taupe"
  | "cocoa";

export type PaletteColor =
  | "cream"
  | "charcoal"
  | "ivory"
  | "espresso"
  | `${PaletteHue}-${"soft" | "bold"}`;

const NEUTRALS: string[] = ["cream", "charcoal", "ivory", "espresso"];

/** Bold and soft shades for a tone. A neutral ("charcoal") is used for both. */
export function toneShades(tone: PaletteHue | PaletteColor): {
  bold: PaletteColor;
  soft: PaletteColor;
} {
  if (NEUTRALS.includes(tone)) {
    return { bold: tone as PaletteColor, soft: tone as PaletteColor };
  }
  const hue = tone.replace(/-(soft|bold)$/, "");
  return { bold: `${hue}-bold` as PaletteColor, soft: `${hue}-soft` as PaletteColor };
}

/**
 * A marker color as CSS. A bare hue ("green") adapts: bold on light pages,
 * soft wherever the page uses a dark color scheme (Sedge's dark mode).
 * A full token ("green-bold", "green-soft") or a neutral is used as is,
 * in both themes.
 */
export function markerColor(tone: PaletteHue | PaletteColor): string {
  if (NEUTRALS.includes(tone) || /-(soft|bold)$/.test(tone)) return `var(--${tone})`;
  return `light-dark(var(--${tone}-bold), var(--${tone}-soft))`;
}
