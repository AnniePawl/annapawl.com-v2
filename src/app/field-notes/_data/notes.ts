import type { PaletteHue } from "../../../components/ui/colorTokens";

/**
 * Field Notes content. To add a note, add an object to NOTES.
 * Keep each one quick: a sentence or two, a few lines of code, and an
 * optional note to self. Every card grows to match the tallest one, so a
 * long note makes the whole grid taller (a nudge to keep them short).
 */

export type Topic = "DOM" | "JavaScript" | "Accessibility" | "React" | "CSS";

export type FieldNote = {
  topic: Topic;
  /** Shown in mono as the card title, e.g. "closest()". */
  name: string;
  /** The mental model, in my own words. */
  model: string;
  /** A short code example: two or three lines is plenty. */
  example: string;
  /** The mistake I made or the thing I forget. Optional. */
  note?: string;
  /** A smaller group inside the topic, e.g. "Strings". Shown on the
   *  card label and as a heading in the grid. Optional: notes without
   *  one sit at the top of their topic. */
  group?: string;
};

/** Topic order (filters and cards follow it), colors, and the order of
 *  each topic's groups (groups not listed come after, in note order). Each hue's bold shade is the marker,
 *  its soft shade the code text and note tint. */
export const TOPICS: { name: Topic; hue: PaletteHue; groups?: string[] }[] = [
  { name: "JavaScript", hue: "marigold", groups: ["Strings", "Regex", "Arrays"] },
  {
    name: "DOM",
    hue: "pink",
    groups: ["Finding elements", "Changing elements", "Adding & removing", "Events"],
  },
  { name: "React", hue: "sky", groups: ["Hooks"] },
  { name: "CSS", hue: "green", groups: ["Selectors"] },
  { name: "Accessibility", hue: "lilac", groups: ["ARIA", "Hiding content"] },
];

export const NOTES: FieldNote[] = [
  {
    topic: "DOM",
    name: "querySelector",
    group: "Finding elements",
    model:
      "Grabs the first element that matches a CSS selector. querySelectorAll grabs all of them.",
    example: `document.querySelector(".card");
document.querySelectorAll(".card");`,
    note: "querySelectorAll gives a NodeList, not an array. forEach is fine, but spread it ([...list]) before map or filter.",
  },
  {
    topic: "DOM",
    name: "closest()",
    group: "Finding elements",
    model:
      "Walks up from an element to the nearest ancestor (or itself) that matches. “Which drawer am I in?”",
    example: `button.closest(".accordion-item");`,
    note: "Only elements have it. event.target can be window, so check target instanceof Element first. (This one crashed my color playground.)",
  },
  {
    topic: "DOM",
    name: "Moving around the DOM",
    group: "Finding elements",
    model:
      "parentElement, children, nextElementSibling and previousElementSibling. The “Element” versions skip text and whitespace.",
    example: `item.parentElement;
list.children;          // HTMLCollection
item.nextElementSibling;`,
    note: "childNodes and nextSibling include whitespace text nodes. Reach for the Element versions.",
  },
  {
    topic: "DOM",
    name: "textContent vs innerHTML",
    group: "Changing elements",
    model:
      "textContent sets plain text. innerHTML reads the string as HTML and builds elements from it.",
    example: `title.textContent = "Squirrel Secrets";
list.innerHTML = "<li>Acorns</li>";`,
    note: "innerHTML runs whatever HTML it’s given, so never feed it text people typed. Plain text goes in textContent.",
  },
  {
    topic: "DOM",
    name: "Attributes and dataset",
    group: "Changing elements",
    model:
      "getAttribute and setAttribute read and write any attribute. data-* attributes also show up on dataset.",
    example: `// <button data-squirrel-id="7">
button.dataset.squirrelId;       // "7"
button.setAttribute("aria-expanded", "true");`,
    note: "data-squirrel-id becomes dataset.squirrelId (kebab-case to camelCase), and the value is always a string.",
  },
  {
    topic: "DOM",
    name: "classList.toggle()",
    group: "Changing elements",
    model:
      "Adds a class if it’s missing, removes it if it’s there. A second argument forces it on or off.",
    example: `card.classList.toggle("is-open", isOpen);`,
    note: "A class doesn’t update ARIA. Keep aria-expanded in sync, or style straight from it.",
  },
  {
    topic: "DOM",
    name: "createElement + append",
    group: "Adding & removing",
    model:
      "Make an element, fill it in, then add it to the page. Nothing shows up until you append it.",
    example: `const li = document.createElement("li");
li.textContent = "Acorn";
list.append(li);`,
    note: "append takes several things at once, text included. appendChild takes one node. prepend adds to the start.",
  },
  {
    topic: "DOM",
    name: "remove() and replaceWith()",
    group: "Adding & removing",
    model:
      "Take an element off the page, or swap it for another. No need to go through its parent anymore.",
    example: `card.remove();
oldCard.replaceWith(newCard);`,
    note: "A removed element still lives in your variable, so you can add it back later.",
  },
  {
    topic: "DOM",
    name: "addEventListener",
    group: "Events",
    model:
      "Runs a function when something happens, like a click or a key press. Hand it the function; don’t call it.",
    example: `button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick, { once: true });`,
    note: "handleClick, not handleClick(). With the parentheses it runs right away and passes its result instead.",
  },
  {
    topic: "DOM",
    name: "target vs currentTarget",
    group: "Events",
    model:
      "target is what was actually clicked. currentTarget is the element the listener lives on.",
    example: `list.addEventListener("click", (event) => {
  event.target;        // maybe a <span> inside a button
  event.currentTarget; // always the list
});`,
    note: "target can be a child of what you meant, like an icon inside a button. closest() fixes that.",
  },
  {
    topic: "DOM",
    name: "Event delegation",
    group: "Events",
    model:
      "One listener on a parent handles clicks for all its children, even ones added later.",
    example: `list.addEventListener("click", (event) => {
  const button = event.target.closest(".remove");
  if (button) button.closest("li").remove();
});`,
    note: "matches() only checks the element itself. closest() checks it and walks up, which is usually what you want.",
  },
  {
    topic: "DOM",
    name: "preventDefault()",
    group: "Events",
    model:
      "Stops the browser’s built-in behavior, like a form reloading the page or a link navigating away.",
    example: `form.addEventListener("submit", (event) => {
  event.preventDefault();
});`,
    note: "Easy to mix up with stopPropagation(), which stops the event from bubbling up to parent elements.",
  },
  {
    topic: "Accessibility",
    name: "hidden vs inert",
    group: "Hiding content",
    model:
      "hidden: gone for everyone. inert: still on screen, but no clicks, no Tab, silent to screen readers.",
    example: `<div hidden>Gone</div>
<div inert>Out of reach</div>`,
    note: "Animating a panel? Use inert. hidden is display: none, so there’s nothing to transition.",
  },
  {
    topic: "Accessibility",
    name: "aria-expanded",
    group: "ARIA",
    model:
      "Tells screen readers whether the thing a button controls is open. Also a great hook for CSS and JS.",
    example: `const isOpen = btn.getAttribute("aria-expanded") === "true";`,
    note: "Attributes are strings, and \"false\" is truthy. Always compare with === \"true\".",
  },
  {
    topic: "JavaScript",
    name: "map / filter / find",
    group: "Arrays",
    model:
      "map changes every item, filter keeps some, find returns the first match. The original array stays the same.",
    example: `books.map((b) => b.title);
books.filter((b) => b.favorite);
books.find((b) => b.year === 2026);`,
    note: "find gives undefined when nothing matches. Check before using it.",
  },
  {
    topic: "JavaScript",
    name: "Template literals",
    group: "Strings",
    model:
      "Backticks and ${} let you drop values or expressions right into the text instead of stitching everything together with +",
    example: `const name = "Nutasha";
\`Hi \${name}, you have \${3 + 1} acorns\`;
// "Hi Nutasha, you have 4 acorns"`,
    note: "Whatever is inside ${} runs first and then becomes text. If value is missing, 'undefined' will wander into sentence.",
  },
  {
    topic: "JavaScript",
    name: "Escaping characters",
    group: "Strings",
    model:
      "Backslash tells JS to read the next char differently.",
    example: `"She said \\"huh\\"";    // She said "huh"
"Line one\\nLine two"; // Line one
                      // Line two
"C:\\\\Users";          // C:\\Users`,
    note: "I dodge escaped quotes by mixing quote styles: 'She said \"absolutely not\"'. For one actual backslash, write two: \\\\.",
  },
  {
    topic: "JavaScript",
    name: "includes()",
    group: "Strings",
    model:
      "Checks whether a string (or array) contains something. Gives back true or false.",
    example: `"Puppet Show".includes("Puppet");  // true
"Puppet Show".includes("show");  // false
["baby", "kitten"].includes("baby"); // true
["baby", "kitten"].includes("b"); // false`,
    note: "Capitalization counts, so \"party\" won’t match \"Party\". Arrays also look for a whole item, not a partial match.",
  },
  {
    topic: "JavaScript",
    name: "indexOf() / lastIndexOf()",
    group: "Strings",
    model:
      "Finds where something first or last appears. Counting starts at 0, and -1 means it wasn’t found.",
    example: `"banana".indexOf("a");     // 1
"banana".lastIndexOf("a"); // 5
"banana".indexOf("z");     // -1`,
    note: "indexOf() gives a position, not a boolean. JS treats 0 as false and -1 as true, so don't drop it straight into an if. Compare it with -1, or use includes().",
  },
  {
    topic: "JavaScript",
    name: "startsWith() / endsWith()",
    group: "Strings",
    model:
      "Quick yes-or-no checks for the beginning or end of a string. Handy for prefixes, file names, and URLs.",
    example: `"pretty-princess".startsWith("pretty"); // true
"doggo.png".endsWith(".png");      // true`,
    note: "Exact means exact. \"Doggo.PNG\" and \"doggo.png?tiny=true\" won’t end with \".png\".",
  },
  {
    topic: "JavaScript",
    name: "slice() vs splice()",
    group: "Arrays",
    model:
      "slice copies a piece and leaves the original alone. splice cuts items out of an array and changes it.",
    example: `const nuts = ["acorn", "pecan", "walnut"];
nuts.slice(0, 2);  // ["acorn", "pecan"], nuts unchanged
nuts.splice(1, 1); // removes "pecan" from nuts`,
    note: "slice works on strings and arrays; splice is arrays only. slice’s end index isn’t included.",
  },
  {
    topic: "JavaScript",
    name: "replace() vs replaceAll()",
    group: "Strings",
    model:
      "Swaps text for other text and gives back a new string. replace changes the first match, replaceAll every match.",
    example: `"a-b-c".replace("-", " ");    // "a b-c"
"a-b-c".replaceAll("-", " "); // "a b c"`,
    note: "Save the result, or the replacement disappears into the void.",
  },
  {
    topic: "JavaScript",
    name: "charAt() / [] / at()",
    group: "Strings",
    model:
      "Gets a single character by position. at() also counts from the end with negative numbers.",
    example: `"Seattle".charAt(0); // "S"
"Seattle"[0];        // "S"
"Seattle".at(-1);    // "e"`,
    note: 'They disagree when nothing is there: charAt() returns "", while [] and at() return undefined. For the last character, at(-1) is the nicest.',
  },
  {
    topic: "JavaScript",
    name: "split() and join()",
    group: "Strings",
    model:
      "split breaks a string into an array. join glues an array back into a string.",
    example: `"moss,fern,clover".split(",");  // ["moss", "fern", "clover"]
["moss", "fern"].join(" & "); // "moss & fern"`,
    note: 'join() uses commas by default: "moss,fern".\nPass "" to join with nothing between: "mossfern". split("") breaks it into individual characters.',
  },
  {
    topic: "JavaScript",
    name: "trim()",
    group: "Strings",
    model:
      "Removes spaces (and tabs and line breaks) from both ends. trimStart and trimEnd do one side.",
    example: `"  doodad  ".trim();      // "doodad"
"  doodad  ".trimStart(); // "doodad  "
"  doodad  ".trimEnd();   // "  doodad"`,
    note: "Handy on form input before checking it’s empty: if (!input.value.trim()).",
  },
  {
    topic: "JavaScript",
    name: "padStart() / padEnd()",
    group: "Strings",
    model:
      "Pads a string until it reaches a certain length. padStart adds to the front, padEnd to the back.",
    example: `String(7).padStart(2, "0"); // "07"
"5".padStart(3, "0");      // "005"
"Hi".padEnd(5, ".");       // "Hi..."`,
    note: "Numbers don’t have padStart. Turn them into strings first with String(n). (It’s how my accordion numbers its items).",
  },
  {
    topic: "JavaScript",
    name: "length",
    group: "Strings",
    model:
      "How many characters a string has. It’s a property, not a method, so no parentheses.",
    example: `"bambi".length;   // 5
"".length;        // 0
name.length > 20; // too long?`,
    note: "Plot twist: some emoji count as 2. \"🐙\".length is 2, not 1. Emoji are complicated little creatures.",
  },
  {
    topic: "JavaScript",
    name: "repeat()",
    group: "Strings",
    model:
      "Makes a new string by repeating the original string a certain number of times.",
    example:`"moss".repeat(3); // "mossmossmoss"
"✿".repeat(5);    // "✿✿✿✿✿"`,
    note: "repeat(0) makes an empty string. A negative number throws an error. No un-repeating allowed.",
  },
  {
    topic: "JavaScript",
    name: "test() and the pattern",
    group: "Regex",
    model:
      "A regex is a pattern between slashes. test() checks whether a string matches it and gives back true or false.",
    example: `/^\\d+$/.test("123");    // true
/^\\d+$/.test("12a");    // false
/acorn/i.test("ACORN"); // true (i = ignore case)`,
    note: "Without ^ and $, it only checks the pattern appears somewhere, not that the whole string matches.",
  },
  {
    topic: "JavaScript",
    name: "Regex symbols",
    group: "Regex",
    model:
      "The handful I actually use: \\d digit, \\w letter, number or _, \\s space, . any character, + one or more, * zero or more, ? optional, ^ start, $ end.",
    example: `/\\d{3}/    // three digits in a row
/^\\w+$/    // only letters, numbers or _
/colou?r/  // color or colour
/\\.png$/   // ends in .png`,
    note: "To match a real . or ? or +, escape it with a backslash: \\. matches an actual dot.",
  },
  {
    topic: "JavaScript",
    name: "Replacing with regex",
    group: "Regex",
    model:
      "Pass a regex to replace() to match a pattern instead of exact text. Add the g flag to change every match.",
    example: `"a  b   c".replace(/\\s+/g, " ");  // "a b c"
"2026-11-03".replace(/-/g, "/");  // "2026/11/03"
"hello".match(/l/g);              // ["l", "l"]`,
    note: "replaceAll() with a regex needs the g flag, or it throws an error.",
  },
  {
    topic: "React",
    name: "useId",
    group: "Hooks",
    model:
      "An id that’s unique to each component and matches on the server and in the browser.",
    example: `const id = useId();
<div id={\`\${id}-panel\`} />`,
    note: "Not for list keys. Keys come from the data.",
  },
  {
    topic: "CSS",
    name: ":has()",
    group: "Selectors",
    model:
      "Styles an element based on what’s inside it. The parent selector CSS finally has.",
    example: `.item:has([aria-expanded="true"]) {
  background: var(--cream);
}`,
    note: "Keep it narrow. A broad body:has(…) makes the browser re-check more of the page.",
  },
];

/** A URL-safe id for a note, so each card can be linked to (#closest). */
export function noteId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
