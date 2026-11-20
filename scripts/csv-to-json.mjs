// Rejected Vanity Plate Data

import { readFileSync, writeFileSync } from "node:fs";

const folder = "src/app/rejected-vanity-plates/_data";

// Read the CSV as one long string of text
const csv = readFileSync(`${folder}/rejected-plates.csv`, "utf8");

const plates = csv
  .trim()                 // drop the blank line at the end
  .split("\n")            // one line per plate
  .slice(1)               // skip the "date,plate" header
  .map((line) => {
    const [date, plate] = line.split(",");   // "2010-10-02,00DADDY" → two parts
    return { date, plate };
  });

// Save it as JSON (the 2 adds indentation so it's readable)
writeFileSync(`${folder}/rejected-plates.json`, JSON.stringify(plates, null, 2));

console.log(`Saved ${plates.length} plates`);