export type ColorSwatch = {
  varName: string;
  hex: string;
};

export type ColorPair = {
  family: string;
  soft: ColorSwatch;
  bold: ColorSwatch;
};

// Hex values mirror foundations/color.css.
// Keep this list in the same order as the palette.
export const COLOR_PAIRS: ColorPair[] = [
  // Warm colors
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
    family: "Lemon",
    soft: { varName: "--lemon-soft", hex: "#FFF0A2" },
    bold: { varName: "--lemon-bold", hex: "#FFE669" },
  },
  {
    family: "Amber",
    soft: { varName: "--amber-soft", hex: "#FFDF8E" },
    bold: { varName: "--amber-bold", hex: "#F3C144" },
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
    family: "Mint",
    soft: { varName: "--mint-soft", hex: "#B5FFDB" },
    bold: { varName: "--mint-bold", hex: "#5CE1B1" },
  },
  {
    family: "Emerald",
    soft: { varName: "--emerald-soft", hex: "#479C6D" },
    bold: { varName: "--emerald-bold", hex: "#2D6144" },
  },

  // Blues + purple
  {
    family: "Sky",
    soft: { varName: "--sky-soft", hex: "#AFE3FF" },
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

  // Earth colors
  {
    family: "Sand",
    soft: { varName: "--sand-soft", hex: "#F4DFC6" },
    bold: { varName: "--sand-bold", hex: "#D6B894" },
  },
  {
    family: "Clay",
    soft: { varName: "--clay-soft", hex: "#F2BAA2" },
    bold: { varName: "--clay-bold", hex: "#D5764D" },
  },
  {
    family: "Taupe",
    soft: { varName: "--taupe-soft", hex: "#C3B6AD" },
    bold: { varName: "--taupe-bold", hex: "#9D8C81" },
  },

  // Earth colors — extended (sedge-design-system dark theme accents)
  {
    family: "Moss",
    soft: { varName: "--moss-soft", hex: "#B7C98A" },
    bold: { varName: "--moss-bold", hex: "#7A8F4E" },
  },
  {
    family: "Ochre",
    soft: { varName: "--ochre-soft", hex: "#E8C077" },
    bold: { varName: "--ochre-bold", hex: "#C6871E" },
  },
  {
    family: "Mauve",
    soft: { varName: "--mauve-soft", hex: "#D8B4C4" },
    bold: { varName: "--mauve-bold", hex: "#9C6B85" },
  },
];

export const NEUTRAL_SWATCHES: ColorSwatch[] = [
  { varName: "--neutral-0", hex: "#FFFFFF" },
  { varName: "--neutral-50", hex: "#FAFAFA" },
  { varName: "--neutral-100", hex: "#F4F4F5" },
  { varName: "--neutral-200", hex: "#E4E4E7" },
  { varName: "--neutral-500", hex: "#71717A" },
  { varName: "--neutral-700", hex: "#3F3F46" },
  { varName: "--neutral-900", hex: "#2A2A2E" },
  { varName: "--neutral-1000", hex: "#09090B" },
];

export const PAGE_SWATCHES: ColorSwatch[] = [
  { varName: "--cream", hex: "#FFFCF8" },
  { varName: "--charcoal", hex: "#2A2A2E" },
  // Dark-mode siblings of cream/charcoal -- warmer than a plain gray
  // dark theme. See sedge-design-system/theme.css for where these get
  // used as the dark theme's --bg-default/--text-primary.
  { varName: "--peat", hex: "#211A14" },
  { varName: "--bark", hex: "#3A2E24" },
  { varName: "--ivory", hex: "#F2E9D8" },
];