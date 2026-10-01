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
    soft: { varName: "--pink-soft", hex: "#FFD0EA" },
    bold: { varName: "--pink-bold", hex: "#F472B6" },
  },
  {
    family: "Red",
    soft: { varName: "--red-soft", hex: "#FF9999" },
    bold: { varName: "--red-bold", hex: "#F05454" },
  },
  {
    family: "Cherry",
    soft: { varName: "--cherry-soft", hex: "#A83B59" },
    bold: { varName: "--cherry-bold", hex: "#5A1226" },
  },
  {
    family: "Coral",
    soft: { varName: "--coral-soft", hex: "#FFBFA6" },
    bold: { varName: "--coral-bold", hex: "#FF7954" },
  },
  {
    family: "Orange",
    soft: { varName: "--orange-soft", hex: "#FFC88E" },
    bold: { varName: "--orange-bold", hex: "#FFA34D" },
  },
  {
    family: "Clay",
    soft: { varName: "--clay-soft", hex: "#F2BAA2" },
    bold: { varName: "--clay-bold", hex: "#D5764D" },
  },
  {
    family: "Ochre",
    soft: { varName: "--ochre-soft", hex: "#E8C077" },
    bold: { varName: "--ochre-bold", hex: "#C6871E" },
  },
  {
    family: "Amber",
    soft: { varName: "--amber-soft", hex: "#FFDF8E" },
    bold: { varName: "--amber-bold", hex: "#F3C144" },
  },
  {
    family: "Lemon",
    soft: { varName: "--lemon-soft", hex: "#FFF0A2" },
    bold: { varName: "--lemon-bold", hex: "#FFE669" },
  },

  // Greens
  {
    family: "Lime",
    soft: { varName: "--lime-soft", hex: "#E1FFA4" },
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
    family: "Emerald",
    soft: { varName: "--emerald-soft", hex: "#479C6D" },
    bold: { varName: "--emerald-bold", hex: "#2D6144" },
  },

  // Blues + Purples
  {
    family: "Sky",
    soft: { varName: "--sky-soft", hex: "#D1E3FF" },
    bold: { varName: "--sky-bold", hex: "#67CAF8" },
  },
  {
    family: "Blue",
    soft: { varName: "--blue-soft", hex: "#98C7FD" },
    bold: { varName: "--blue-bold", hex: "#5088EA" },
  },
  {
    family: "Steel",
    soft: { varName: "--steel-soft", hex: "#9DADCB" },
    bold: { varName: "--steel-bold", hex: "#5C77AA" },
  },
  {
    family: "Lilac",
    soft: { varName: "--lilac-soft", hex: "#D7BAFF" },
    bold: { varName: "--lilac-bold", hex: "#BB73FF" },
  },
  {
    family: "Indigo",
    soft: { varName: "--indigo-soft", hex: "#B8B5FF" },
    bold: { varName: "--indigo-bold", hex: "#8B87F5" },
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
    family: "Chocolate",
    soft: { varName: "--chocolate-soft", hex: "#A47F68" },
    bold: { varName: "--chocolate-bold", hex: "#231F1C" },
  },
];

export const PAGE_SWATCHES: ColorSwatch[] = [
  { varName: "--cream", hex: "#FFFCF8" },
  { varName: "--charcoal", hex: "#2A2A2E" },
];
