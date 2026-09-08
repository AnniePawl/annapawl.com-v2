export type ColorSwatch = {
  varName: string;
  hex: string;
};

export type ColorPair = {
  family: string;
  soft: ColorSwatch;
  bold: ColorSwatch;
};

// Hex values mirror foundations/color.css. Text color isn't stored per
// swatch anymore — computed contrast (relative luminance against black
// #171719 vs white #ffffff) came back black for all 22, no exceptions,
// so the component just uses --text-primary uniformly instead of a
// hand-picked-per-swatch guess (the old data had blue-bold set to white,
// which was actually the lower-contrast choice).
export const COLOR_PAIRS: ColorPair[] = [
  {
    family: "Pink",
    soft: { varName: "--pink-soft", hex: "#ffd7ea" },
    bold: { varName: "--pink-bold", hex: "#ff63b1" },
  },
  {
    family: "Red",
    soft: { varName: "--red-soft", hex: "#ff8e8e" },
    bold: { varName: "--red-bold", hex: "#ff5252" },
  },
  {
    family: "Orange",
    soft: { varName: "--orange-soft", hex: "#ffcb9e" },
    bold: { varName: "--orange-bold", hex: "#ff9645" },
  },
  {
    family: "Yellow",
    soft: { varName: "--yellow-soft", hex: "#fffb89" },
    bold: { varName: "--yellow-bold", hex: "#ffe570" },
  },
  {
    family: "Lime",
    soft: { varName: "--lime-soft", hex: "#d9ffa7" },
    bold: { varName: "--lime-bold", hex: "#a5ef36" },
  },
  {
    family: "Mint",
    soft: { varName: "--mint-soft", hex: "#b8ffda" },
    bold: { varName: "--mint-bold", hex: "#17db9a" },
  },
  {
    family: "Green",
    soft: { varName: "--green-soft", hex: "#95f6a0" },
    bold: { varName: "--green-bold", hex: "#3cd675" },
  },
  {
    family: "Sky",
    soft: { varName: "--sky-soft", hex: "#caecff" },
    bold: { varName: "--sky-bold", hex: "#54c9ff" },
  },
  {
    family: "Blue",
    soft: { varName: "--blue-soft", hex: "#afd2ff" },
    bold: { varName: "--blue-bold", hex: "#4c81f4" },
  },
  {
    family: "Indigo",
    soft: { varName: "--indigo-soft", hex: "#bcc2ff" },
    bold: { varName: "--indigo-bold", hex: "#8983ff" },
  },
  {
    family: "Violet",
    soft: { varName: "--violet-soft", hex: "#dac5ff" },
    bold: { varName: "--violet-bold", hex: "#996dff" },
  },
];
