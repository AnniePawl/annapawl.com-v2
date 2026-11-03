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
};

/** Topic order (filters and cards follow it) and colors. Each hue's bold shade is the marker,
 *  its soft shade the code text and note tint. */
export const TOPICS: { name: Topic; hue: PaletteHue }[] = [
  { name: "JavaScript", hue: "marigold" },
  { name: "DOM", hue: "pink" },
  { name: "React", hue: "sky" },
  { name: "CSS", hue: "green" },
  { name: "Accessibility", hue: "lilac" },
];

export const NOTES: FieldNote[] = [
  {
    topic: "DOM",
    name: "querySelector",
    model:
      "Grabs the first element that matches a CSS selector. querySelectorAll grabs all of them.",
    example: `document.querySelector(".card");
document.querySelectorAll(".card");`,
    note: "querySelectorAll gives a NodeList, not an array. forEach is fine, but spread it ([...list]) before map or filter.",
  },
  {
    topic: "DOM",
    name: "closest()",
    model:
      "Walks up from an element to the nearest ancestor (or itself) that matches. “Which drawer am I in?”",
    example: `button.closest(".accordion-item");`,
    note: "Only elements have it. event.target can be window, so check target instanceof Element first. (This one crashed my color playground.)",
  },
  {
    topic: "DOM",
    name: "Moving around the DOM",
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
    model:
      "textContent sets plain text. innerHTML reads the string as HTML and builds elements from it.",
    example: `title.textContent = "Squirrel Secrets";
list.innerHTML = "<li>Acorns</li>";`,
    note: "innerHTML runs whatever HTML it’s given, so never feed it text people typed. Plain text goes in textContent.",
  },
  {
    topic: "DOM",
    name: "Attributes and dataset",
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
    model:
      "Adds a class if it’s missing, removes it if it’s there. A second argument forces it on or off.",
    example: `card.classList.toggle("is-open", isOpen);`,
    note: "A class doesn’t update ARIA. Keep aria-expanded in sync, or style straight from it.",
  },
  {
    topic: "DOM",
    name: "createElement + append",
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
    model:
      "Take an element off the page, or swap it for another. No need to go through its parent anymore.",
    example: `card.remove();
oldCard.replaceWith(newCard);`,
    note: "A removed element still lives in your variable, so you can add it back later.",
  },
  {
    topic: "DOM",
    name: "addEventListener",
    model:
      "Runs a function when something happens, like a click or a key press. Hand it the function; don’t call it.",
    example: `button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick, { once: true });`,
    note: "handleClick, not handleClick(). With the parentheses it runs right away and passes its result instead.",
  },
  {
    topic: "DOM",
    name: "target vs currentTarget",
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
    model:
      "hidden: gone for everyone. inert: still on screen, but no clicks, no Tab, silent to screen readers.",
    example: `<div hidden>Gone</div>
<div inert>Out of reach</div>`,
    note: "Animating a panel? Use inert. hidden is display: none, so there’s nothing to transition.",
  },
  {
    topic: "Accessibility",
    name: "aria-expanded",
    model:
      "Tells screen readers whether the thing a button controls is open. Also a great hook for CSS and JS.",
    example: `const isOpen = btn.getAttribute("aria-expanded") === "true";`,
    note: "Attributes are strings, and \"false\" is truthy. Always compare with === \"true\".",
  },
  {
    topic: "JavaScript",
    name: "map / filter / find",
    model:
      "map changes every item, filter keeps some, find returns the first match. The original array stays the same.",
    example: `books.map((b) => b.title);
books.filter((b) => b.favorite);
books.find((b) => b.year === 2026);`,
    note: "find gives undefined when nothing matches. Check before using it.",
  },
  {
    topic: "JavaScript",
    name: "includes()",
    model:
      "Checks whether a string (or array) contains something. Gives back true or false.",
    example: `"Acorn Party".includes("Party");  // true
["oak", "pine"].includes("oak"); // true`,
    note: "Case-sensitive: \"party\" won’t match \"Party\". Lowercase both sides first if case shouldn’t matter.",
  },
  {
    topic: "JavaScript",
    name: "indexOf() / lastIndexOf()",
    model:
      "Finds where something is. indexOf gives the first position, lastIndexOf the last, and -1 means not found.",
    example: `"banana".indexOf("a");     // 1
"banana".lastIndexOf("a"); // 5
"banana".indexOf("z");     // -1`,
    note: "0 is a real match (the very start), so if (s.indexOf(x)) is a bug. Check !== -1, or just use includes().",
  },
  {
    topic: "JavaScript",
    name: "startsWith() / endsWith()",
    model:
      "Checks how a string begins or ends. Great for file types, prefixes and URLs.",
    example: `"field-notes".startsWith("field"); // true
"photo.png".endsWith(".png");      // true`,
    note: "Case-sensitive too: \"Photo.PNG\" won’t end with \".png\".",
  },
  {
    topic: "JavaScript",
    name: "slice() vs splice()",
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
    model:
      "Swaps text for other text and gives back a new string. replace changes the first match, replaceAll every match.",
    example: `"a-b-c".replace("-", " ");    // "a b-c"
"a-b-c".replaceAll("-", " "); // "a b c"`,
    note: "replace() with a plain string only changes the first one. Reach for replaceAll().",
  },
  {
    topic: "JavaScript",
    name: "charAt() and at()",
    model:
      "Gets a single character by position. at() also counts from the end with negative numbers.",
    example: `"Acorn".charAt(0); // "A"
"Acorn"[0];        // "A"
"Acorn".at(-1);    // "n"`,
    note: "Past the end, charAt() gives \"\" but [i] gives undefined. at(-1) is the easy way to get the last one.",
  },
  {
    topic: "JavaScript",
    name: "split() and join()",
    model:
      "split breaks a string into an array. join glues an array back into a string.",
    example: `"oak,pine,elm".split(",");   // ["oak", "pine", "elm"]
["oak", "pine"].join(" & "); // "oak & pine"`,
    note: "join() with nothing in it uses commas: \"oak,pine\". Pass \"\" to glue with nothing.",
  },
  {
    topic: "JavaScript",
    name: "trim()",
    model:
      "Removes spaces (and tabs and line breaks) from both ends. trimStart and trimEnd do one side.",
    example: `"  acorn  ".trim();      // "acorn"
"  acorn  ".trimStart(); // "acorn  "
"  acorn  ".trimEnd();   // "  acorn"`,
    note: "Handy on form input before checking it’s empty: if (!input.value.trim()).",
  },
  {
    topic: "React",
    name: "useId",
    model:
      "An id that’s unique to each component and matches on the server and in the browser.",
    example: `const id = useId();
<div id={\`\${id}-panel\`} />`,
    note: "Not for list keys. Keys come from the data.",
  },
  {
    topic: "CSS",
    name: ":has()",
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
