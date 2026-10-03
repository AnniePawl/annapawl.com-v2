export const EMBROIDERY_IMAGES = Array.from(
  { length: 36 },
  (_, i) => `sew${i + 1}.png`
);

// Cycles through the design system's brand palette — soft tones only, per
// Anna's request — instead of the old page's one-off Tailwind colors.
export const TILE_COLORS = [
  "bg-pink-soft",
  "bg-red-soft",
  "bg-orange-soft",
  "bg-yellow-soft",
  "bg-lime-soft",
  "bg-mint-soft",
  "bg-green-soft",
  "bg-sky-soft",
  "bg-blue-soft",
  "bg-indigo-soft",
  "bg-violet-soft",
] as const;

function rotate<T>(arr: readonly T[], offset: number): T[] {
  const n = arr.length;
  const shift = ((offset % n) + n) % n;
  return [...arr.slice(shift), ...arr.slice(0, shift)];
}

// Each row gets a different rotation of the same 36 images, so the rows
// don't line up and feel hand-arranged rather than repeated.
export function rowImages(offset: number): string[] {
  return rotate(EMBROIDERY_IMAGES, offset);
}
