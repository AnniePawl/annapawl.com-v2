import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-soft": "var(--pink-soft)",
        "pink-bold": "var(--pink-bold)",
        "red-soft": "var(--red-soft)",
        "red-bold": "var(--red-bold)",
        "orange-soft": "var(--orange-soft)",
        "orange-bold": "var(--orange-bold)",
        "yellow-soft": "var(--yellow-soft)",
        "yellow-bold": "var(--yellow-bold)",
        "lime-soft": "var(--lime-soft)",
        "lime-bold": "var(--lime-bold)",
        "mint-soft": "var(--mint-soft)",
        "mint-bold": "var(--mint-bold)",
        "green-soft": "var(--green-soft)",
        "green-bold": "var(--green-bold)",
        "sky-soft": "var(--sky-soft)",
        "sky-bold": "var(--sky-bold)",
        "blue-soft": "var(--blue-soft)",
        "blue-bold": "var(--blue-bold)",
        "indigo-soft": "var(--indigo-soft)",
        "indigo-bold": "var(--indigo-bold)",
        "violet-soft": "var(--violet-soft)",
        "violet-bold": "var(--violet-bold)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;