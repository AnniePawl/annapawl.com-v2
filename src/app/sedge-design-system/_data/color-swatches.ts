export type ColorSwatch = {
  varName: string;
  hex: string;
};

// Each sample dispayed as a soft/bold pair
export type ColorPair = {
  family: string;
  soft: ColorSwatch;
  bold: ColorSwatch;
};

// Hex values mirror foundations/color.css.
// Keep this list in the same order as the palette.
export const COLOR_PAIRS: ColorPair[] = [
  // Pinks/Reds
  {
    family: "Pink",
    soft: { varName: "--pink-soft", hex: "#FFC6E6" },
    bold: { varName: "--pink-bold", hex: "#F472B6" },
  },
  {
    family: "Red",
    soft: { varName: "--red-soft", hex: "#FF6358" },
    bold: { varName: "--red-bold", hex: "#D91F1F" },
  },
  {
    family: "Cherry",
    soft: { varName: "--cherry-soft", hex: "#AA3857" },
    bold: { varName: "--cherry-bold", hex: "#6F1B31" },
  },
  {
    family: "Coral",
    soft: { varName: "--coral-soft", hex: "#FFA985" },
    bold: { varName: "--coral-bold", hex: "#FE7043" },
  },
  {
    family: "Orange",
    soft: { varName: "--orange-soft", hex: "#FFCB8C" },
    bold: { varName: "--orange-bold", hex: "#F28A1B" },
  },
  {
    family: "Clay",
    soft: { varName: "--clay-soft", hex: "#F2BAA2" },
    bold: { varName: "--clay-bold", hex: "#D5764D" },
  },
  {
    family: "Marigold",
    soft: { varName: "--marigold-soft", hex: "#FFDF90" },
    bold: { varName: "--marigold-bold", hex: "#F5BF46" },
  },
  {
    family: "Lemon",
    soft: { varName: "--lemon-soft", hex: "#FFF89E" },
    bold: { varName: "--lemon-bold", hex: "#FFE669" },
  },

  // Greens
  {
    family: "Lime",
    soft: { varName: "--lime-soft", hex: "#D3F392" },
    bold: { varName: "--lime-bold", hex: "#B0D964" },
  },
  {
    family: "Sage",
    soft: { varName: "--sage-soft", hex: "#ABD3AE" },
    bold: { varName: "--sage-bold", hex: "#6EA472" },
  },
  {
    family: "Moss",
    soft: { varName: "--moss-soft", hex: "#B7C98A" },
    bold: { varName: "--moss-bold", hex: "#7A8F4E" },
  },
  {
    family: "Mint",
    soft: { varName: "--mint-soft", hex: "#B5FFDB" },
    bold: { varName: "--mint-bold", hex: "#5CE1B1" },
  },
  {
    family: "Green",
    soft: { varName: "--green-soft", hex: "#C4EBD7" },
    bold: { varName: "--green-bold", hex: "#57BC92" },
  },
  {
    family: "Emerald",
    soft: { varName: "--emerald-soft", hex: "#479C6D" },
    bold: { varName: "--emerald-bold", hex: "#2D6144" },
  },
  {
    family: "Teal",
    soft: { varName: "--teal-soft", hex: "#9FE3DF" },
    bold: { varName: "--teal-bold", hex: "#2BA3A0" },
  },

  // Blues + Purples
  {
    family: "Sky",
    soft: { varName: "--sky-soft", hex: "#B1E3FC" },
    bold: { varName: "--sky-bold", hex: "#67CAF8" },
  },
  {
    family: "Blue",
    soft: { varName: "--blue-soft", hex: "#98C7FD" },
    bold: { varName: "--blue-bold", hex: "#5088EA" },
  },
  {
    family: "Periwinkle",
    soft: { varName: "--periwinkle-soft", hex: "#D1E3FF" },
    bold: { varName: "--periwinkle-bold", hex: "#7F9BE6" },
  },
  {
    family: "Slate",
    soft: { varName: "--slate-soft", hex: "#9DADCB" },
    bold: { varName: "--slate-bold", hex: "#5C77AA" },
  },
  {
    family: "Lilac",
    soft: { varName: "--lilac-soft", hex: "#D7BAFF" },
    bold: { varName: "--lilac-bold", hex: "#B985EB" },
  },
  {
    family: "Iris",
    soft: { varName: "--iris-soft", hex: "#B8B5FF" },
    bold: { varName: "--iris-bold", hex: "#8B87F5" },
  },
  {
    family: "Plum",
    soft: { varName: "--plum-soft", hex: "#D89FD7" },
    bold: { varName: "--plum-bold", hex: "#A855A7" },
  },
  {
    family: "Mauve",
    soft: { varName: "--mauve-soft", hex: "#D8B4C4" },
    bold: { varName: "--mauve-bold", hex: "#9C6B85" },
  },
  // Browns
  {
    family: "Sand",
    soft: { varName: "--sand-soft", hex: "#F4DFC6" },
    bold: { varName: "--sand-bold", hex: "#D6B894" },
  },

  {
    family: "Taupe",
    soft: { varName: "--taupe-soft", hex: "#C3B6AD" },
    bold: { varName: "--taupe-bold", hex: "#9D8C81" },
  },
  {
    family: "Cocoa",
    soft: { varName: "--cocoa-soft", hex: "#A47F68" },
    bold: { varName: "--cocoa-bold", hex: "#644A3D" },
  },
];

// The colors that hold every page together: the ground everything sits on
// and the ink everything is written in, plus their dark-mode partners.
export const PAGE_SWATCHES: (ColorSwatch & { label: string })[] = [
  { label: "Cream — ground", varName: "--cream", hex: "#FEFDFB" },
  { label: "Ivory", varName: "--ivory", hex: "#F2E9D8" },
  { label: "Charcoal — ink", varName: "--charcoal", hex: "#2A2A2E" },
  { label: "Espresso — dark mode ground", varName: "--espresso", hex: "#1D1814" },
];
