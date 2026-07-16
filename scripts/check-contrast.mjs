#!/usr/bin/env node
/**
 * WCAG 2.1 contrast checker for the Vibe System palette.
 *
 * No dependencies — the contrast math is simple enough to implement
 * directly (relative luminance + contrast ratio, per the spec) rather
 * than pulling in a package for it. Values below are copied from
 * src/styles/foundations/color.css — if you change a token there,
 * update it here too (this is a script, not a CSS parser).
 *
 * Run: npm run check-contrast
 */

// ---- Tokens (mirrors foundations/color.css) ----
const NEUTRAL = {
  "neutral-0": "#ffffff",
  "neutral-50": "#fafafa",
  "neutral-100": "#f4f4f5",
  "neutral-200": "#e4e4e7",
  "neutral-500": "#71717a",
  "neutral-700": "#3f3f46",
  "neutral-900": "#171719",
  "neutral-1000": "#09090b",
};

const BRAND = {
  "pink-soft": "#ffd7ea",
  "pink-bold": "#ff63b1",
  "red-soft": "#ff8e8e",
  "red-bold": "#ff5252",
  "orange-soft": "#ffcb9e",
  "orange-bold": "#ff9645",
  "yellow-soft": "#fffb89",
  "yellow-bold": "#ffe570",
  "lime-soft": "#d9ffa7",
  "lime-bold": "#a5ef36",
  "mint-soft": "#b8ffda",
  "mint-bold": "#17db9a",
  "green-soft": "#95f6a0",
  "green-bold": "#3cd675",
  "sky-soft": "#caecff",
  "sky-bold": "#54c9ff",
  "blue-soft": "#afd2ff",
  "blue-bold": "#4c81f4",
  "indigo-soft": "#bcc2ff",
  "indigo-bold": "#8983ff",
  "violet-soft": "#dac5ff",
  "violet-bold": "#996dff",
};

const SEMANTIC = {
  "bg-default": NEUTRAL["neutral-0"],
  "bg-subtle": NEUTRAL["neutral-50"],
  "text-primary": NEUTRAL["neutral-900"],
  "text-secondary": NEUTRAL["neutral-700"],
  "text-inverse": NEUTRAL["neutral-0"],
  "text-muted": NEUTRAL["neutral-500"],
  surface: BRAND["lime-bold"],
};

// ---- WCAG 2.1 contrast math ----
function hexToRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function relativeLuminance({ r, g, b }) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hexA, hexB) {
  const La = relativeLuminance(hexToRgb(hexA));
  const Lb = relativeLuminance(hexToRgb(hexB));
  const [lighter, darker] = La > Lb ? [La, Lb] : [Lb, La];
  return (lighter + 0.05) / (darker + 0.05);
}

// ---- Pairs actually used in the codebase ----
// context: "normal" text needs 4.5:1 for AA, "large" text/UI needs 3:1.
const pairs = [];

for (const [name, soft] of Object.entries(BRAND).filter(([n]) => n.endsWith("-soft"))) {
  pairs.push({
    label: `Section heading (text-primary) on ${name}`,
    fg: SEMANTIC["text-primary"],
    bg: soft,
    context: "large", // h-display/h1-h4 rendered on section cards
  });
  pairs.push({
    label: `Section body text (text-secondary) on ${name}`,
    fg: SEMANTIC["text-secondary"],
    bg: soft,
    context: "normal", // Section.tsx description/body copy
  });
}

for (const [name, bold] of Object.entries(BRAND).filter(([n]) => n.endsWith("-bold"))) {
  pairs.push({
    label: `Button/Badge text (text-inverse) on ${name}`,
    fg: SEMANTIC["text-inverse"],
    bg: bold,
    context: "normal", // Button primary variant, badge fills, checked states
  });
}

pairs.push(
  { label: "Card text (text-primary) on --surface", fg: SEMANTIC["text-primary"], bg: SEMANTIC.surface, context: "normal" },
  { label: "text-primary on bg-default", fg: SEMANTIC["text-primary"], bg: SEMANTIC["bg-default"], context: "normal" },
  { label: "text-secondary on bg-default", fg: SEMANTIC["text-secondary"], bg: SEMANTIC["bg-default"], context: "normal" },
  { label: "text-muted on bg-default", fg: SEMANTIC["text-muted"], bg: SEMANTIC["bg-default"], context: "normal" },
  { label: "text-primary on bg-subtle", fg: SEMANTIC["text-primary"], bg: SEMANTIC["bg-subtle"], context: "normal" },
  { label: "text-muted on bg-subtle", fg: SEMANTIC["text-muted"], bg: SEMANTIC["bg-subtle"], context: "normal" }
);

// ---- Run ----
const THRESHOLD = { normal: 4.5, large: 3.0 };
const RESET = "\x1b[0m";
const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const DIM = "\x1b[2m";

let failCount = 0;

console.log(`\nWCAG contrast check — ${pairs.length} pairs\n`);

for (const { label, fg, bg, context } of pairs) {
  const ratio = contrastRatio(fg, bg);
  const required = THRESHOLD[context];
  const pass = ratio >= required;
  if (!pass) failCount += 1;

  const ratioStr = ratio.toFixed(2).padStart(5);
  const status = pass ? `${GREEN}PASS${RESET}` : `${RED}FAIL${RESET}`;
  const contextStr = `${DIM}(${context}, needs ${required}:1)${RESET}`;

  console.log(`${status}  ${ratioStr}:1  ${label} ${contextStr}`);
}

console.log(
  `\n${failCount === 0 ? GREEN : RED}${pairs.length - failCount}/${pairs.length} pairs pass${RESET}\n`
);

if (failCount > 0) {
  console.log(
    `${failCount} pair(s) fall below AA. This only checks the raw palette —\n` +
      `it does not know which pairs your components actually put together,\n` +
      `so treat failures as "worth a manual look," not necessarily broken UI.\n`
  );
  process.exit(1);
}
