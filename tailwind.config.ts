import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kept in the same family order as src/styles/foundations/color.css
        // (Warm -> Greens -> Blues+Purple -> Earth) so the two stay easy to
        // eyeball against each other. Every family below has a matching
        // --{name}-soft/--{name}-bold pair defined there.
        "pink-soft": "var(--pink-soft)",
        "pink-bold": "var(--pink-bold)",
        "red-soft": "var(--red-soft)",
        "red-bold": "var(--red-bold)",
        "coral-soft": "var(--coral-soft)",
        "coral-bold": "var(--coral-bold)",
        "orange-soft": "var(--orange-soft)",
        "orange-bold": "var(--orange-bold)",
        // NOTE: "yellow" has no --yellow-soft/--yellow-bold in color.css --
        // this mapping is a dangling reference (see badge.css, Doodle.tsx,
        // sectionColor.ts, embroidery/data.ts for other places it's used
        // the same way). Left as-is rather than guessed at; flagged
        // separately rather than silently repointed to lemon/amber.
        "yellow-soft": "var(--yellow-soft)",
        "yellow-bold": "var(--yellow-bold)",
        "lemon-soft": "var(--lemon-soft)",
        "lemon-bold": "var(--lemon-bold)",
        "amber-soft": "var(--amber-soft)",
        "amber-bold": "var(--amber-bold)",
        "lime-soft": "var(--lime-soft)",
        "lime-bold": "var(--lime-bold)",
        "sage-soft": "var(--sage-soft)",
        "sage-bold": "var(--sage-bold)",
        "mint-soft": "var(--mint-soft)",
        "mint-bold": "var(--mint-bold)",
        // NOTE: same dangling-reference issue as "yellow" above -- no
        // --green-soft/--green-bold defined in color.css.
        "green-soft": "var(--green-soft)",
        "green-bold": "var(--green-bold)",
        "emerald-soft": "var(--emerald-soft)",
        "emerald-bold": "var(--emerald-bold)",
        "sky-soft": "var(--sky-soft)",
        "sky-bold": "var(--sky-bold)",
        "blue-soft": "var(--blue-soft)",
        "blue-bold": "var(--blue-bold)",
        "steel-soft": "var(--steel-soft)",
        "steel-bold": "var(--steel-bold)",
        "lilac-soft": "var(--lilac-soft)",
        "lilac-bold": "var(--lilac-bold)",
        "indigo-soft": "var(--indigo-soft)",
        "indigo-bold": "var(--indigo-bold)",
        // NOTE: same dangling-reference issue as "yellow"/"green" above --
        // no --violet-soft/--violet-bold defined in color.css.
        "violet-soft": "var(--violet-soft)",
        "violet-bold": "var(--violet-bold)",
        "plum-soft": "var(--plum-soft)",
        "plum-bold": "var(--plum-bold)",
        "sand-soft": "var(--sand-soft)",
        "sand-bold": "var(--sand-bold)",
        "clay-soft": "var(--clay-soft)",
        "clay-bold": "var(--clay-bold)",
        "taupe-soft": "var(--taupe-soft)",
        "taupe-bold": "var(--taupe-bold)",
        // Earth Colors — Extended (see color.css) -- sedge-design-system
        // dark theme's accent palette.
        "moss-soft": "var(--moss-soft)",
        "moss-bold": "var(--moss-bold)",
        "ochre-soft": "var(--ochre-soft)",
        "ochre-bold": "var(--ochre-bold)",
        "mauve-soft": "var(--mauve-soft)",
        "mauve-bold": "var(--mauve-bold)",
        peat: "var(--peat)",
        bark: "var(--bark)",
        "bark-soft": "var(--bark-soft)",
        ivory: "var(--ivory)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;