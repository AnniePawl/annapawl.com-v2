import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* Font family */
      fontFamily: {
        sans: "var(--font-sans)",
      },

      /* Font weights */
      fontWeight: {
        regular: "var(--font-regular)",
        medium: "var(--font-medium)",
        semibold: "var(--font-semibold)",
        bold: "var(--font-bold)",
      },

      /* Font sizes */
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
      },

      /* Line heights */
      lineHeight: {
        tight: "var(--leading-tight)",
        normal: "var(--leading-normal)",
        relaxed: "var(--leading-relaxed)",
      },
    },
  },
  plugins: [],
};

export default config;
