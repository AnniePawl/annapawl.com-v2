import type { PaletteHue } from "../../../components/ui/colorTokens";

/**
 * Field Notes content. To add a note, add an object to NOTES.
 * Keep each one quick. Cards in a group share the tallest card's height,
 * so these limits keep every card the same size:
 *   - model and note: about 150 characters each
 *   - example: 4 lines (longer code scrolls inside the card)
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
  { name: "JavaScript", hue: "marigold", groups: ["Strings", "Regex", "Arrays", "Functions", "Async"] },
  {
    name: "DOM",
    hue: "pink",
    groups: ["Finding elements", "Changing elements", "Adding & removing", "Events"],
  },
  { name: "React", hue: "sky", groups: ["Hooks"] },
  {
    name: "CSS",
    hue: "green",
    groups: [
      "Selectors",
      "Layout",
      "Box model",
      "Sizing & units",
      "Custom properties",
      "Motion",
      "Stacking",
      "Handy one-liners",
    ],
  },
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
    note: "Older versions: parent.removeChild(el) and parent.replaceChild(new, old). Note the new-then-old order. A removed element still lives in your variable.",
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
    name: "Event bubbling",
    group: "Events",
    model:
      "An event fires on the element you clicked, then travels up through each parent. That’s why delegation works.",
    example: `list.addEventListener("click", () => log("list"));
item.addEventListener("click", () => log("item"));
// click item → "item", then "list"`,
    note: "Not every event bubbles. focus and blur don’t, but focusin and focusout do.",
  },
  {
    topic: "DOM",
    name: "stopPropagation()",
    group: "Events",
    model: "Stops the event from traveling any further up to parent elements.",
    example: `menu.addEventListener("click", (event) => {
  event.stopPropagation(); // the page never hears it
});`,
    note: "Not the same as preventDefault(). Use it sparingly, since it breaks delegation and click-outside-to-close listeners higher up.",
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
    topic: "DOM",
    name: "CustomEvent + dispatchEvent",
    group: "Events",
    model: "Make your own named event, send data with it, and listen for it like a click.",
    example: `card.dispatchEvent(new CustomEvent("card:saved", {
  bubbles: true, detail: { id: 7 },
}));
list.addEventListener("card:saved", (e) => e.detail.id);`,
    note: "Custom events don’t bubble by default, so add bubbles: true. Data always goes in detail.",
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
    topic: "JavaScript",
    name: "Arrow vs regular function",
    group: "Functions",
    model:
      "Same job, shorter syntax. Arrows can skip the braces and return on their own, and they borrow this from where they’re written.",
    example: `function add(a, b) { return a + b; }
const add2 = (a, b) => a + b;   // implicit return
const make = (id) => ({ id });  // object? wrap in ( )`,
    note: "Regular functions are hoisted, so you can call them before they’re written. Arrows aren’t. Object methods that need this: use a regular function.",
  },
  {
    topic: "JavaScript",
    name: "this: arrow vs regular",
    group: "Functions",
    model:
      "A regular function’s this is whatever called it, like the button in a listener. An arrow has no this of its own, so it uses the one outside it.",
    example: `btn.addEventListener("click", function () {
  this.textContent = "Hi!"; // this = the button
});
btn.addEventListener("click", () => this); // not the button`,
    note: "In an arrow listener, reach for event.currentTarget instead. It works in both kinds and says what it means.",
  },
  {
    topic: "JavaScript",
    name: "Callbacks",
    group: "Functions",
    model:
      "A function you hand to another function so it can call it later, when it’s ready. Pass the function itself, don’t call it.",
    example: `function greet(name, done) { done("Hi, " + name); }
greet("Anna", (msg) => console.log(msg));
btn.addEventListener("click", handleClick); // no ()`,
    note: "handleClick() with parentheses runs it right away and passes its result. Leave them off to pass the function.",
  },
  {
    topic: "JavaScript",
    name: "setTimeout()",
    group: "Async",
    model:
      "Runs a callback once after a delay in milliseconds. It returns an id you can use to cancel it.",
    example: `const id = setTimeout(() => save(), 500);
clearTimeout(id); // cancel before it runs
setInterval(tick, 1000); // repeats until clearInterval`,
    note: "The delay is a minimum, not a promise. Even setTimeout(fn, 0) waits until the current code finishes.",
  },
  {
    topic: "JavaScript",
    name: "Promises",
    group: "Async",
    model:
      "A placeholder for a value that arrives later. It starts pending, then settles once: fulfilled with resolve, or rejected with reject.",
    example: `const wait = (ms) => new Promise((resolve, reject) => {
  ms >= 0 ? setTimeout(resolve, ms) : reject("Bad delay");
});
wait(500).then(() => save()).catch(console.error);`,
    note: "It settles only once, so any later resolve or reject is ignored. End a chain with .catch() or errors slip by.",
  },
  {
    topic: "JavaScript",
    name: "async / await",
    group: "Async",
    model:
      "A nicer way to use promises. await pauses the async function until the promise settles, so the code reads top to bottom.",
    example: `async function autosave() {
  try { await wait(500); save(); }
  catch (error) { console.error(error); }
}`,
    note: "await only works inside an async function (or at a module’s top level). An async function always returns a promise.",
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

  // ---- CSS: Selectors ----
  {
    topic: "CSS",
    name: "::before / ::after",
    group: "Selectors",
    model:
      "Adds a decorative box as the first or last child of an element, styled entirely from CSS.",
    example: `.tag::before {
  content: "";
  width: 6px; height: 12px;
}`,
    note: "Nothing shows without content, even an empty one. No luck on <img> or <input> either, since they can’t hold children.",
  },
  {
    topic: "CSS",
    name: ":is() vs :where()",
    group: "Selectors",
    model:
      "Both match anything in their list. :where() adds zero specificity, so anything can override it.",
    example: `:is(h1, h2, h3) { margin: 0; }
:where(ul, ol) { padding: 0; }`,
    note: ":is() takes the specificity of its most specific selector. Reach for :where() in resets.",
  },
  {
    topic: "CSS",
    name: ":focus-visible",
    group: "Selectors",
    model:
      "Shows focus styles when the browser thinks they’re needed, like keyboard use, but not on a mouse click.",
    example: `button:focus-visible {
  outline: 2px solid var(--charcoal);
  outline-offset: 2px;
}`,
    note: "Never just remove outlines. Swap :focus for :focus-visible instead.",
  },
  {
    topic: "CSS",
    name: ":not()",
    group: "Selectors",
    model: "Matches everything except what’s in the parentheses.",
    example: `li:not(:last-child) {
  border-bottom: 1px solid;
}`,
    note: "Dividers between items, with no extra one hanging off the end.",
  },
  {
    topic: "CSS",
    name: ":nth-child()",
    group: "Selectors",
    model: "Picks children by position. Takes a number, odd or even, or a formula like 3n.",
    example: `tr:nth-child(odd) { background: var(--cream); }
li:nth-child(3n) { color: red; }  /* 3, 6, 9… */
li:nth-child(-n + 3) { font-weight: 600; } /* first 3 */`,
    note: "It counts every sibling, not just matching ones. :nth-child(2 of .item) counts only .item.",
  },

  // ---- CSS: Layout ----
  {
    topic: "CSS",
    name: "Flex axes",
    group: "Layout",
    model:
      "justify-content works along the main axis (the flex-direction). align-items works across it.",
    example: `.row { display: flex;
  justify-content: space-between; /* ↔ */
  align-items: center;            /* ↕ */
}`,
    note: "With flex-direction: column the axes swap, so justify-content goes vertical.",
  },
  {
    topic: "CSS",
    name: "flex: 1",
    group: "Layout",
    model: "Lets an item grow to fill the leftover space. Items with flex: 1 split it evenly.",
    example: `.sidebar { flex: 0 0 16rem; } /* fixed */
.main    { flex: 1; }          /* fills */`,
    note: "Long text won’t shrink? Add min-width: 0. Flex items default to min-width: auto.",
  },
  {
    topic: "CSS",
    name: "flex-wrap",
    group: "Layout",
    model: "Lets flex items move onto a new line when they run out of room.",
    example: `.tags {
  display: flex;
  flex-wrap: wrap;
}`,
    note: "Without it, items squish onto one line, then overflow.",
  },
  {
    topic: "CSS",
    name: "gap",
    group: "Layout",
    model: "Space between flex or grid items, never on the outside edges.",
    example: `.stack {
  display: flex; flex-direction: column;
  gap: 1rem;
}`,
    note: "Retires the old margin-on-every-child-but-the-last trick.",
  },
  {
    topic: "CSS",
    name: "auto-fit + minmax()",
    group: "Layout",
    model:
      "Fits as many columns as there’s room for, each at least a minimum width. No media queries needed.",
    example: `.cards {
  grid-template-columns:
    repeat(auto-fit, minmax(min(100%, 14rem), 1fr));
}`,
    note: "auto-fill keeps empty columns, auto-fit stretches items into them. min(100%, …) stops overflow on small screens.",
  },
  {
    topic: "CSS",
    name: "grid-template-areas",
    group: "Layout",
    model: "Names areas of the grid, then places items by name. The layout reads like a little map.",
    example: `.page { grid-template-areas:
  "head head"
  "side main"; }
.side { grid-area: side; }`,
    note: "Every row needs the same number of cells. A . marks an empty one.",
  },
  {
    topic: "CSS",
    name: "place-items: center",
    group: "Layout",
    model: "Shorthand for align-items and justify-items. On a grid, it centers children both ways.",
    example: `.center {
  display: grid;
  place-items: center;
}`,
    note: "The shortest way to center a thing in CSS.",
  },
  {
    topic: "CSS",
    name: "position: sticky",
    group: "Layout",
    model:
      "Scrolls normally until it reaches its offset, then sticks there while its parent is on screen.",
    example: `.toolbar {
  position: sticky;
  top: 0;
}`,
    note: "Not sticking? It needs top (or bottom), and any ancestor with overflow: hidden breaks it.",
  },
  {
    topic: "CSS",
    name: "Container queries",
    group: "Layout",
    model:
      "Like a media query, but responds to the size of a parent container instead of the window.",
    example: `.card-wrap { container-type: inline-size; }
@container (width > 30rem) {
  .card { flex-direction: row; }
}`,
    note: "An element can’t query itself. Put container-type on a wrapper.",
  },

  // ---- CSS: Box model ----
  {
    topic: "CSS",
    name: "box-sizing",
    group: "Box model",
    model: "border-box makes width include padding and border, so a 200px box stays 200px.",
    example: `*, *::before, *::after {
  box-sizing: border-box;
}`,
    note: "The default, content-box, adds padding on top of the width. That’s the mystery overflow.",
  },
  {
    topic: "CSS",
    name: "Margin collapse",
    group: "Box model",
    model: "Vertical margins between blocks overlap instead of adding up. The bigger one wins.",
    example: `h2 { margin-bottom: 2rem; }
p  { margin-top: 1rem; }
/* space between them: 2rem, not 3rem */`,
    note: "Doesn’t happen in flex or grid. One more reason to space with gap.",
  },
  {
    topic: "CSS",
    name: "inset",
    group: "Box model",
    model: "Shorthand for top, right, bottom and left, in the same order as margin.",
    example: `.overlay {
  position: absolute;
  inset: 0; /* fills the parent */
}`,
    note: "The parent needs a position (usually relative) to be the anchor.",
  },
  {
    topic: "CSS",
    name: "Logical properties",
    group: "Box model",
    model:
      "Sides named by text flow. Inline runs the reading direction, block runs top to bottom.",
    example: `margin-inline: auto;  /* left + right */
padding-block: 1rem;  /* top + bottom */
border-inline-start: 2px solid;`,
    note: "They flip on their own for right-to-left languages.",
  },

  // ---- CSS: Sizing & units ----
  {
    topic: "CSS",
    name: "clamp()",
    group: "Sizing & units",
    model: "A value that scales between a floor and a ceiling: clamp(min, preferred, max).",
    example: `h1 {
  font-size: clamp(2rem, 1rem + 4vw, 4rem);
}`,
    note: "Mix rem into the middle value so text still grows when someone zooms.",
  },
  {
    topic: "CSS",
    name: "rem vs em",
    group: "Sizing & units",
    model: "rem is relative to the root font size. em is relative to the element’s own font size.",
    example: `.card   { font-size: 1.25rem; } /* 20px */
.card p { padding: 1em; }       /* 20px */
.card p { margin: 1rem; }       /* 16px */`,
    note: "em compounds when nested. rem for font sizes, em for spacing that should scale with its text.",
  },
  {
    topic: "CSS",
    name: "dvh",
    group: "Sizing & units",
    model: "Dynamic viewport height. It adjusts as mobile browser bars show and hide.",
    example: `.hero {
  min-height: 100vh; /* fallback */
  min-height: 100dvh;
}`,
    note: "100vh is taller than the visible screen on mobile, so content hides under the URL bar.",
  },
  {
    topic: "CSS",
    name: "min() / max()",
    group: "Sizing & units",
    model: "min() picks the smallest of its values, max() the largest. Caps without a media query.",
    example: `.prose { width: min(100%, 65ch); }
.btn   { padding: max(0.5rem, 1vw); }`,
    note: "min() is how you set a max width. Feels backwards, but it picks the smaller value.",
  },
  {
    topic: "CSS",
    name: "aspect-ratio",
    group: "Sizing & units",
    model: "Keeps a box at a set width-to-height ratio as it resizes.",
    example: `img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`,
    note: "Pair with object-fit: cover so images crop instead of squish.",
  },

  // ---- CSS: Custom properties ----
  {
    topic: "CSS",
    name: "var()",
    group: "Custom properties",
    model: "Variables you define once and reuse. They cascade and inherit like any other property.",
    example: `:root { --accent: #67caf8; }
.btn  { color: var(--accent); }
.link { color: var(--brand, blue); } /* fallback */`,
    note: "The fallback only kicks in when the variable isn’t defined, not when its value is invalid.",
  },
  {
    topic: "CSS",
    name: "Inline styles",
    group: "Custom properties",
    model:
      "In HTML, style is a string. In React it’s an object with camelCase names, and custom properties keep their dashes.",
    example: `<p style="color: red">       <!-- HTML -->
<p style={{ color: "red" }}> {/* React */}
<p style={{ "--accent": c } as
  React.CSSProperties}>`,
    note: "Inline beats stylesheets on specificity. Best for one-off dynamic values, like a color handed to a custom property.",
  },
  {
    topic: "CSS",
    name: "currentColor",
    group: "Custom properties",
    model: "Whatever the element’s text color is. Icons and borders can follow it automatically.",
    example: `.icon {
  fill: currentColor;
  border: 1px solid currentColor;
}`,
    note: "Change color on the parent and everything using currentColor updates with it.",
  },
  {
    topic: "CSS",
    name: "color-mix()",
    group: "Custom properties",
    model: "Blends two colors by percentage. Tints and transparency from a single token.",
    example: `border-color: color-mix(
  in srgb, var(--charcoal) 25%, transparent
);`,
    note: "Mixing with transparent gives an alpha version of a token, no new variable needed.",
  },
  {
    topic: "CSS",
    name: "light-dark()",
    group: "Custom properties",
    model: "Picks the first color in light mode and the second in dark mode.",
    example: `:root { color-scheme: light dark; }
body {
  background: light-dark(#fff, #222);
}`,
    note: "Does nothing without color-scheme set. Colors only, not other values.",
  },

  // ---- CSS: Motion ----
  {
    topic: "CSS",
    name: "transition",
    group: "Motion",
    model: "Animates between two states, like a hover, instead of snapping.",
    example: `.btn {
  transition: background-color 150ms ease;
}`,
    note: "List the properties instead of all, which can animate things you didn’t mean to.",
  },
  {
    topic: "CSS",
    name: "transform",
    group: "Motion",
    model: "Moves, scales or rotates an element visually without shifting the layout around it.",
    example: `.card:hover {
  transform: translateY(-4px) scale(1.02);
}`,
    note: "Order matters: rotate then translate moves along the rotated axis. Cheap to animate, unlike top or width.",
  },
  {
    topic: "CSS",
    name: "@keyframes",
    group: "Motion",
    model: "Named steps of an animation, played with the animation property.",
    example: `@keyframes pop { from { scale: 0.8; } }
.badge {
  animation: pop 300ms ease-out both;
}`,
    note: "Leave out from or to and that end uses the element’s normal styles.",
  },
  {
    topic: "CSS",
    name: "prefers-reduced-motion",
    group: "Motion",
    model: "A media query for people who’ve asked their device for less motion.",
    example: `@media (prefers-reduced-motion: no-preference) {
  .card { transition: transform 200ms; }
}`,
    note: "Opting in with no-preference is safer than switching motion off later. Reduce means less, not always none.",
  },
  {
    topic: "CSS",
    name: "@starting-style",
    group: "Motion",
    model:
      "Sets where an element animates from when it first appears, even coming out of display: none.",
    example: `.toast { transition: opacity 200ms; }
@starting-style {
  .toast { opacity: 0; }
}`,
    note: "Animating out of display: none also needs transition-behavior: allow-discrete.",
  },

  // ---- CSS: Stacking ----
  {
    topic: "CSS",
    name: "z-index",
    group: "Stacking",
    model:
      "Sets which element sits on top, but only for positioned elements and flex or grid children.",
    example: `.modal {
  position: relative;
  z-index: 10;
}`,
    note: "No position, no effect. Still stuck? Look for a stacking context above it.",
  },
  {
    topic: "CSS",
    name: "Stacking context",
    group: "Stacking",
    model:
      "A layer that contains its children’s z-index. A child can’t rise above its context’s siblings.",
    example: `.card { isolation: isolate; } /* new context */
/* also made by: transform, opacity < 1,
   filter, z-index on a positioned box */`,
    note: "z-index: 9999 not working? An ancestor with a transform probably trapped it.",
  },

  // ---- CSS: Handy one-liners ----
  {
    topic: "CSS",
    name: "scroll-margin-top",
    group: "Handy one-liners",
    model: "Space left above an element when an anchor link jumps to it.",
    example: `h2[id] {
  scroll-margin-top: 5rem;
}`,
    note: "Fixes headings hiding under a sticky header after clicking a #link.",
  },
  {
    topic: "CSS",
    name: "text-wrap",
    group: "Handy one-liners",
    model:
      "balance evens out line lengths in headings. pretty avoids a lonely last word in paragraphs.",
    example: `h1, h2 { text-wrap: balance; }
p      { text-wrap: pretty; }`,
    note: "balance only works on short blocks (about six lines), so save it for headings.",
  },
  {
    topic: "CSS",
    name: "Line clamp",
    group: "Handy one-liners",
    model: "Cuts text off after a set number of lines and adds an ellipsis.",
    example: `.excerpt {
  display: -webkit-box; -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; overflow: hidden;
}`,
    note: "Prefixed, but works everywhere. Needs all four declarations or nothing clamps.",
  },
  {
    topic: "CSS",
    name: "accent-color",
    group: "Handy one-liners",
    model: "Recolors native checkboxes, radios, range sliders and progress bars in one line.",
    example: `input { accent-color: var(--pink-bold); }`,
    note: "The browser picks the checkmark color for contrast, so it stays readable.",
  },
  {
    topic: "CSS",
    name: "forced-colors",
    group: "Handy one-liners",
    model:
      "A media query for high contrast modes, like Windows Contrast Themes, where the system picks the colors.",
    example: `@media (forced-colors: active) {
  .chip[aria-pressed="true"] { border: 2px solid; }
}`,
    note: "Backgrounds and shadows can vanish. Borders and outlines stay, so show state with those.",
  },
];

/** A URL-safe id for a note, so each card can be linked to (#closest). */
export function noteId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
