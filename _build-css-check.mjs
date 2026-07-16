import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";
import fs from "fs";

const css = fs.readFileSync("src/app/globals.css", "utf8");

postcss([tailwind({ base: process.cwd() })])
  .process(css, { from: "src/app/globals.css", to: "/tmp/out.css" })
  .then((result) => {
    fs.writeFileSync("/tmp/out.css", result.css);
    console.log("BUILD_OK, output bytes:", result.css.length);
    const out = result.css;
    console.log("has @layer statement:", out.includes("@layer"));
    console.log("has .text-xs rule:", /\.text-xs\b/.test(out));
  })
  .catch((err) => {
    console.error("BUILD_ERROR:", err.message);
    process.exit(1);
  });
