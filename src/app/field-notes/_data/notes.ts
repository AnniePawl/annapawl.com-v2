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
  { name: "JavaScript", hue: "marigold", groups: ["Strings", "Regex", "Arrays", "Functions", "Operators", "Async", "APIs"] },
  {
    name: "DOM",
    hue: "pink",
    groups: ["Finding elements", "Changing elements", "Adding & removing", "Events", "Forms"],
  },
  { name: "React", hue: "sky", groups: ["Components", "JSX", "Hooks"] },
  {
    name: "CSS",
    hue: "green",
    groups: [
      "Selectors",
      "Layout",
      "Box model",
      "Sizing & units",
      "Variables & color",
      "Motion",
      "Stacking",
      "Handy one-liners",
    ],
  },
  {
    name: "Accessibility",
    hue: "lilac",
    groups: ["Choosing the right element", "Names & labels", "Keyboard", "Color", "Structure", "ARIA", "Hiding content"],
  },
];

/** Shorter names for the label on each card, for groups whose heading is
 *  too long to fit there. The grid heading still shows the full name. */
export const GROUP_CARD_LABELS: Record<string, string> = {
  "Choosing the right element": "Right element",
};

export const NOTES: FieldNote[] = [
  {
    topic: "DOM",
    name: "querySelector",
    group: "Finding elements",
    model:
      "Grabs the first element matching a CSS selector. querySelectorAll grabs all of them.",
    example: `document.querySelector(".ingredient");    // first match
document.querySelectorAll(".ingredient"); // all matches`,
    note: "No matches? querySelector returns null. querySelectorAll returns an empty NodeList. forEach works on a NodeList, but map and filter need an array.",
  },
  {
    topic: "DOM",
    name: "getElementById",
    group: "Finding elements",
    model:
      "Finds the one element with that id. Ids are unique on a page, so there’s no “all” version.",
    example: `document.getElementById("emergency-snack"); // no #
document.querySelector("#emergency-snack"); // needs #
// both find id="emergency-snack"`,
    note: "No # needed, just the id name. Returns null if nothing matches. IDs should be unique, even if I have several emergency snacks.",
  },
  {
    topic: "DOM",
    name: "Searching within an element",
    group: "Finding elements",
    model:
      "Call querySelector or querySelectorAll on an element instead of document to search only inside it.",
    example: `const recipe = document.querySelector(".recipe");
recipe.querySelectorAll(".ingredient"); // ingredients in this recipe
recipe.querySelector(":scope > h2");     // first h2 directly inside it`,
    note: 'recipe.querySelector only searches inside recipe. Use ":scope > h2" to find a heading directly inside it, rather than one nested deeper.',
  },
  {
    topic: "DOM",
    name: "closest()",
    group: "Finding elements",
    model:
      "Checks the element itself, then walks up through its parents until it finds a match. “Which recipe do I belong to?”",
    example: `ingredient.closest(".recipe"); // nearest matching recipe, or null`,
    note: "Handy when I click an icon inside a button but need the button itself. With event.target, check instanceof Element before calling closest().",
  },
  {
    topic: "DOM",
    name: "matches()",
    group: "Finding elements",
    model: "Asks “does this element match this CSS selector?” and answers true or false.",
    example: `ingredient.matches(".optional"); // is it optional?
ingredient.matches("li");        // is it an <li>?
button.matches("button, [role=button]"); // matches either selector`,
    note: "Only checks the element itself, not its parents. If the click might land on an icon inside the button, use closest().",
  },
  {
    topic: "DOM",
    name: "Moving around the DOM",
    group: "Finding elements",
    model:
      "Move up to a parent, down to its children, or sideways to the next or previous sibling.",
    example: `ingredient.parentElement;          // parent
recipe.children;                  // child elements
ingredient.nextElementSibling;    // next ingredient
ingredient.previousElementSibling; // previous ingredient`,
    note: "The Element versions skip text nodes including whitespace between tags. children gives an HTMLCollection. childNodes includes text and comments too.",
  },
  {
    topic: "DOM",
    name: "textContent",
    group: "Changing elements",
    model:
      "Sets plain text. Anything that looks like HTML appears as literal text, tags and all.",
    example: `title.textContent = "<em>Emergency snacks</em>";
// shows: <em>Emergency snacks</em>`,
    note: "My go-to for text someone typed. Remember that tags are treated as text, so they cannot create HTML elements. React renders text with {value}.",
  },
  {
    topic: "DOM",
    name: "innerHTML",
    group: "Changing elements",
    model:
      "Reads the string as HTML and builds elements from it. Tags become markup instead of showing as text.",
    example: `title.innerHTML = "<strong>Snackage</strong>"; // bold text
list.innerHTML = "<li>Cheese</li>";    // list now has only Cheese
list.innerHTML += "<li>Crackers</li>"; // list now has Cheese + Crackers
list.innerHTML = "";                  // list is now empty`,
    note: "+= rebuilds all the HTML inside, including existing elements, so their event listeners can be lost. Use append when I want to keep them.",
  },
  {
    topic: "DOM",
    name: "Attributes and dataset",
    group: "Changing elements",
    model:
      "An attribute is extra info on HTML tag, like id, class, or aria-expanded. data-* attributes are ones you create to store your own info. dataset is a shortcut for accessing those.",
    example: `button.getAttribute("aria-expanded");         // "false"
button.setAttribute("aria-expanded", "true"); // change it
button.dataset.snackId;                      // "7"
button.dataset.snackId = "8";                // updates data-snack-id`,
    note: "data-snack-id becomes dataset.snackId: drop data- and switch to camelCase. Values are strings, so that 7 comes back as text.",
  },
  {
    topic: "DOM",
    name: "classList.toggle()",
    group: "Changing elements",
    model:
      "Adds a class if it’s missing, removes it if it’s there. A second argument forces it on or off.",
    example: `snackDrawer.classList.toggle("is-open");        // flip on/off
snackDrawer.classList.toggle("is-open", true);  // add the class
snackDrawer.classList.toggle("is-open", false); // remove the class`,
    note: "A class doesn’t update ARIA. Keep aria-expanded in sync, or style straight from it. 	In React, choose className from state instead of toggling classes manually.",
  },
  {
    topic: "DOM",
    name: "Styles in JavaScript",
    group: "Changing elements",
    model:
      "Changes an element’s inline styles from JavaScript. Regular properties use camelCase; custom properties use setProperty.",
    example: `cup.style.backgroundColor = "pink";          // one inline style
cup.style.setProperty("--ceramic", "plum");  // custom property
cup.style.removeProperty("--ceramic");       // back to the CSS value`,
    note: "Handy for interactive colors and sizes. Use classes for whole visual states and custom properties for single values.",
  },
  {
    topic: "DOM",
    name: "createElement()",
    group: "Adding & removing",
    model:
      "Makes a new HTML element. Add text, classes, or attributes before putting it on the page.",
    example: `const snack = document.createElement("li");
snack.textContent = "Emotional support cheese";
snack.className = "snack";
snack.dataset.flavor = "brie";`,
    note: "It won’t appear until you add it somewhere. Pass just the tag name: \"li\", not \"<li>\".",
  },
  {
    topic: "DOM",
    name: "append() and prepend()",
    group: "Adding & removing",
    model:
      "append adds to the end of an element, prepend to the start.",
    example: `snackList.append(snack);       // snack becomes the last child
snackList.prepend(snack);      // same snack moves to the start
snackList.append("More brie"); // can add plain text too`,
    note: "Moves existing elements rather than copying them. Both accept several items at once. appendChild accepts just one node. In React, update state and let JSX describe what appears.",
  },
  {
    topic: "DOM",
    name: "remove() and replaceWith()",
    group: "Adding & removing",
    model:
      "Take an element off the page, or swap it for another. No need to go through its parent anymore.",
    example: `sadSnack.remove();                  // take it off the page
sadSnack = document.createElement("li");
sadSnack.textContent = "Rice cake";
snackList.append(sadSnack);
sadSnack.replaceWith(emotionalSupportCheese); // cheese takes its place`,
    note: "Removing an element doesn’t erase my variable—it still points to that element. I can append it again later.",
  },
  {
    topic: "DOM",
    name: "addEventListener",
    group: "Events",
    model:
      "Runs a function when something happens, like a click or a key press. Hand it the function, don’t call it.",
    example: `function revealCheese() {
  snackDrawer.classList.toggle("is-open");
}
button.addEventListener("click", revealCheese);`,
    note: "Pass revealCheese, not revealCheese() so it doesn't run right away. Add { once: true } as the third argument if it should run just once. 	In React, usually pass onClick or onChange in JSX.",
  },
  {
    topic: "DOM",
    name: "Removing listeners",
    group: "Events",
    model:
      "Stops a function from responding to an event. Pass the same function I used when adding the listener",
    example: `button.addEventListener("click", revealCheese);
button.removeEventListener("click", revealCheese);
// future clicks won’t call revealCheese`,
    note: "An inline arrow can’t be removed since there’s nothing to pass back. In React, this is what a useEffect cleanup is for. In React, listeners added manually in useEffect need cleanup. JSX event handlers don’t.",
  },
  {
    topic: "DOM",
    name: "target vs currentTarget",
    group: "Events",
    model:
      "target is where the event started, like the icon I clicked. currentTarget is the element the listener is attached to.",
    example: `// <button><span>🧀</span> Get cheese</button>
button.addEventListener("click", (event) => {
  event.target;        // span if I click the cheese
  event.currentTarget; // always the button
});`,
    note: "target can be a child of what you meant, like an icon inside a button. closest() fixes that.",
  },
  {
    topic: "DOM",
    name: "Event bubbling",
    group: "Events",
    model:
      "A click starts on the element I clicked, then travels up through its parents. Listeners along the way can respond to that same click.",
    example: `// <div id="drawer"><button>Get cheese</button></div>
button.addEventListener("click", () => console.log("button"));
drawer.addEventListener("click", () => console.log("drawer"));
// click button → logs "button", then "drawer"`,
    note: "The drawer hears clicks from inside it too. target stays where the event started; currentTarget changes to whichever element’s listener is running.",
  },
  {
    topic: "DOM",
    name: "stopPropagation()",
    group: "Events",
    model: "Stops the event from traveling any further up to parent elements.",
    example: `favoriteButton.addEventListener("click", (event) => {
  event.stopPropagation();
  saveFavorite();
});`,
    note: "Use sparingly b/c parent listeners may need that click too. Handy when a button inside a clickable card should act without triggering the card",
  },
  {
    topic: "DOM",
    name: "Event delegation",
    group: "Events",
    model:
      "One listener on a parent handles clicks for all its children. Their clicks bubble up, so I don’t need a listener on every button.",
    example: `snackList.addEventListener("click", (e) => {
  if (!(e.target instanceof Element)) return;
  e.target.closest(".remove-snack")?.closest("li")?.remove();
});`,
    note: "Works for children added later too.",
  },
  {
    topic: "DOM",
    name: "preventDefault()",
    group: "Events",
    model:
      "Stops the browser’s default action, like following a link or submitting a form, so I can handle it myself.",
    example: `form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the form navigating away
  saveSnackOrder();
});`,
    note: "Easy to mix up with stopPropagation(), which stops the event from bubbling up to parent elements. This stops the browser’s action.",
  },
  {
    topic: "DOM",
    name: "submit event",
    group: "Forms",
    model:
      "Fires when a form is submitted, whether I click its submit button or press Enter in a field.",
    example: `snackForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveSnackOrder();
});`,
    note: "Without preventDefault() the page reloads and your JavaScript starts over. Listen on the form, not the button, so keyboard submission works too. Note - React uses onSubmit on the form.",
  },
  {
    topic: "DOM",
    name: "Button types",
    group: "Forms",
    model:
      "Inside a form, a button with no type submits it. Use type=\"button\" for anything that isn’t sending the form.",
    example: `<form id="snack-form">
  <button type="button">Add another snack</button>
  <button type="submit">Place order</button>
</form>`,
    note: "Always set the type inside forms. Adding another snack shouldn’t accidentally place my order.",
  },
  {
    topic: "DOM",
    name: "Reading one field",
    group: "Forms",
    model: "Grab the input, then read .value. It’s always a string, even from a number input.",
    example: `const input = snackForm.querySelector('[name="quantity"]');
const quantity = Number(input.value); // "3" → 3
// For type="number": input.valueAsNumber also works`,
    note: "Read .value inside the event handler to get the latest input, or you get whatever it said on page load.",
  },
  {
    topic: "DOM",
    name: "input vs change",
    group: "Forms",
    model:
      "input responds as I edit. change waits until I finish: leaving a text field, ticking a checkbox, or choosing a dropdown option.",
    example: `snackInput.addEventListener("input", previewFeast);    // typing or pasting
snackInput.addEventListener("change", saveSnackDream); // leave after editing
cheeseCheckbox.addEventListener("change", addCheese); // tick or untick`,
    note: "input for live search and previews, change for saving or anything slow. Setting .value in code fires neither. In React, onChange responds as I type, like the native input event.",
  },
  {
    topic: "DOM",
    name: "form.elements",
    group: "Forms",
    model: "Gets a form’s fields directly by name without writing a selector for each one.",
    example: `snackForm.elements["snack"].value;       // "Brie"
snackForm.elements["quantity"].value;    // "3", still a string
Number(snackForm.elements["quantity"].value); // 3
snackForm.elements["size"].value;        // checked radio’s value`,
    note: "Use the field’s name, not its label text. Reading .value gives its current input. A missing field returns null from namedItem.",
  },
  {
    topic: "DOM",
    name: "Checkboxes and radios",
    group: "Forms",
    model:
      "Checkboxes use .checked (true or false). For radios, find the one that’s checked, then read its value.",
    example: `snackForm.elements["extraCheese"].checked; // true or false
snackForm.elements["size"].value;         // e.g. "large"
// Radio buttons share name="size", with different values`,
    note: "A checkbox’s .value doesn’t change when you tick it. Check .checked instead. A radio group’s value is an empty string if nothing is selected.",
  },
  {
    topic: "DOM",
    name: "FormData",
    group: "Forms",
    model: "Collects a form’s current values together, so I don’t have to read each field separately.",
    example: `const order = new FormData(snackForm);
order.get("snack");       // "Emergency brie"
order.get("quantity");    // "3", still a string
order.getAll("toppings"); // ["honey", "fig jam"]`,
    note: "Fields need a name. Disabled fields and unchecked boxes are skipped. get reads the first value; getAll collects all values with the same name.",
  },
  {
    topic: "DOM",
    name: "Form validation attributes",
    group: "Forms",
    model:
      "Built-in rules the browser checks before submitting: required, input type, text length, and number limits.",
    example: `<input name="email" type="email" required>
<input name="snackNickname" minlength="2" maxlength="30">
<input name="cheeseWheels" type="number" min="1" max="10">`,
    note: "A field can be empty unless I add required. Put instructions beside the field so people know the rules before submitting.",
  },
  {
    topic: "Accessibility",
    name: "Buttons vs links",
    group: "Choosing the right element",
    model:
      "Links take me somewhere. Buttons do something, like opening a drawer, saving a favorite, or submitting a form.",
    example: `<a href="/bookshelf">Visit my bookshelf</a>
<button type="button">Reveal emergency snacks</button>`,
    note: "Choose by behavior, not appearance. A link can look like a button and still be a link.",
  },
  {
    topic: "Accessibility",
    name: "HTML before ARIA",
    group: "Choosing the right element",
    model:
      "Start with an HTML element that already does the job. ARIA describes what something is, it doesn’t add behavior. A real button already comes with keyboard support.",
    example: `<button type="button">More cheese, please</button>
<!-- Built-in focus and Enter/Space activation -->`,
    note: "My modal uses a native dialog for built-in keyboard behavior, with aria-labelledby pointing to its heading for a name.",
  },
  {
    topic: "Accessibility",
    name: "Accessible names",
    group: "Names & labels",
    model:
      "An element’s name for assistive technology. Usually comes from visible text, a form label, or image alt text.",
    example: `<button>Save snack</button>          <!-- name: Save snack -->
<button aria-label="Close">×</button> <!-- name: Close -->
<img src="cat.jpg" alt="Sleepy cat">  <!-- name: Sleepy cat -->`,
    note: "aria-label overrides a button’s text as its name. Keep visible wording in the name. You can check the result in DevTools Accessibility pane.",
  },
  {
    topic: "Accessibility",
    name: "Form labels",
    group: "Names & labels",
    model:
      "Connects a field to its name. Clicking the label focuses the input, and screen readers use it to identify the field.",
    example: `<label for="cheese">Favorite cheese</label>
<input id="cheese" aria-describedby="cheese-hint">
<p id="cheese-hint">Soft cheeses count.</p>`,
    note: "'for' matches the input’s id. A placeholder isn’t a label and vanishes as I type. aria-describedby points to hint text by its id. In React, use 'htmlFor' instead.",
  },
  {
    topic: "Accessibility",
    name: "Form errors",
    group: "Names & labels",
    model:
      "Say what went wrong and how to fix it, tie the message to its field, and mark the field as invalid.",
    example: `<label for="qty">Cheese wheels</label>
<input id="qty" type="number" aria-invalid="true"
  aria-describedby="qty-error">
<p id="qty-error">Choose 1–10 wheels. Leave some for everyone else.</p>`,
    note: "aria-invalid marks the field as having an error; aria-describedby points to the explanation. Clear the error state and message once it’s fixed.",
  },
  {
    topic: "Accessibility",
    name: "Icon buttons",
    group: "Names & labels",
    model:
      "A button with only an icon has no name, so a screen reader just says “button.” Add aria-label so screen readers can announce what it does.",
    example: `<button type="button" aria-label="Delete snack">
  <svg aria-hidden="true">…</svg>
</button>`,
    note: "aria-hidden on the icon keeps it from being read too. Name the action (“Delete snack”), not the picture (“trash can”).",
  },
  {
    topic: "Accessibility",
    name: "Alt text",
    group: "Names & labels",
    model:
      "Describes an image for anyone who can’t see it. Say what it shows or why it’s there. Skip “image of.”",
    example: `<img src="brie.jpg" alt="A wedge of brie on a board">
<img src="squiggle.svg" alt="">  <!-- decoration -->`,
    note: "alt=\"\" means decorative, so it’s skipped. Missing alt may get the filename read aloud. If an image is the only content in a link, describe where the link goes.",
  },
  {
    topic: "Accessibility",
    name: "Tab order and tabindex",
    group: "Keyboard",
    model:
      "Tab moves focus through links, buttons, and fields, usually in HTML order. tabindex controls whether other elements join that order.",
    example: `<<div tabindex="0">Tab can reach me</div>
<div tabindex="-1">JavaScript can focus me</div>
<button>Already keyboard-ready</button>`,
    note: "0 joins the normal Tab order, -1 stays out but allows focus with JS. Avoid positive nums bc they jump the queue and scramble the order. If the order feels wrong, fix the HTML order instead.",
  },
  {
    topic: "Accessibility",
    name: "Visible focus",
    group: "Keyboard",
    model:
      "Keyboard users need to see where they are. Don't remove the focus outline without adding a style back.",
    example: `button:focus-visible {
  outline: 2px solid var(--plum);
  outline-offset: 2px;
}`,
    note: ":focus-visible shows the ring for keyboard users but usually not mouse clicks. You can check links, buttons, and fields by tabbing through the page.",
  },
  {
    topic: "Accessibility",
    name: "Color contrast",
    group: "Color",
    model:
      "Text should have enough contrast against its background. At least 4.5:1 for normal text and 3:1 for large text.",
    example: `/* Both on a white background */
.readable { color: #767676; } /* about 4.54:1: passes */
.too-faint { color: #aaaaaa; } /* about 2.32:1: fails */`,
    note: "WIP for me... odd color combos have my heart. Using DevTools more often to check constrast instead of just trusting my eyes... ",
  },
  {
    topic: "Accessibility",
    name: "Don’t rely on color alone",
    group: "Color",
    model:
      "Color can be fun + reinforce meaning, but shouldn’t be the only clue. Add words, icons, or shapes so the message survives without it.",
    example: `<p class="error">Out of brie. Choose another cheese.</p>
<button aria-pressed="true">✓ Extra cheese selected</button>`,
    note: "A reminder for my color-loving brain! My bookshelf marks favorites with a heart, not just color, plus hidden Favorite text for screen readers.",
  },
  {
    topic: "Accessibility",
    name: "Headings",
    group: "Structure",
    model:
      "Headings give a page an outline and creen reader users can jump between them to find the section they want.",
    example: `<h1>Snack Reviews</h1>
  <h2>Cheeses</h2>
    <h3>Brie</h3>
  <h2>Crackers</h2>`,
    note: "Choose heading levels by structure, not font size. One h1 per page, h2 for main sections and h3 for sections inside them. Don't skip levels (h2->h4).",
  },
  {
    topic: "Accessibility",
    name: "Landmarks",
    group: "Structure",
    model:
      "Landmarks mark the main regions of a page, like nav, footer, etc. This helps screen reader users jump straight to there.",
    example: `<<header>My little corner of the internet</header>
<nav aria-label="Main">…</nav>
<main>…</main>
<footer>Made with excessive CSS</footer>`,
    note: "One main per page. If there’s more than one nav, give each an aria-label, like “Main” and “Footer”.",
  },
  {
    topic: "Accessibility",
    name: "hidden vs inert",
    group: "Hiding content",
    model:
      "hidden hides an element. inert leaves its appearance alone but prevents clicks, keyboard focus, and screen reader access.",
    example: `<div hidden>Secret snack stash</div>
<div inert>Visible, but no snacking yet</div>`,
    note: "inert doesn’t change how something looks so if a panel is unavailable, you should make that clear visually too.",
  },
  {
    topic: "Accessibility",
    name: "aria-expanded",
    group: "ARIA",
    model:
      "Tells screen readers whether a button’s panel is open or closed. Put it on the button that controls the panel. Also a handy hook for CSS and JS.",
    example: `c<button aria-expanded="false" aria-controls="snacks">
  Emergency snacks
</button>
<div id="snacks" hidden>Brie lives here</div>`,
    note: "aria-expanded describes the state but it doesn’t actually open anything. Update it when showing or hiding the panel.",
  },
  {
    topic: "JavaScript",
    name: "map / filter / find",
    group: "Arrays",
    model:
      "map turns each item into something, filter keeps some, find returns the first match. The original array stays the same.",
    example: `books.map((book) => book.title);          // all the titles
books.filter((book) => book.favorite);    // favorite books
books.find((book) => book.title === "Piranesi"); // first match`,
    note: "filter powers the tag buttons on my bookshelf and hides empty year sections afterward. Map and filter return new array. find returns one item, or undefined.",
  },
  {
    topic: "JavaScript",
    name: "forEach()",
    group: "Arrays",
    model:
      "Kind of like map. Runs a function for each item but doesn’t return a new array",
    example: `const books = ["Piranesi", "Betty", "Martyr!"];
books.forEach((title) => console.log(title))
numbers.forEach((n) => n * 2); // undefined;
`,
    note: "Easy to mix up with map. forEach returns undefined. If I want to keep the results in a new array, use map.",
  },
  {
    topic: "JavaScript",
    name: "reduce()",
    group: "Arrays",
    model:
      "Boils an array down to one value, carrying a running result from one item to the next.",
    example: `const books = [{ pages: 200 }, { pages: 300 }];

books.reduce((total, book) => total + book.pages, 0);
// 500`,
    note: "Remember to give it a starting value. Starting at 0 means an empty bookshelf totals 0 instead of throwing an error.",
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
    note: "Whatever is inside ${} runs first and then becomes text. If value is missing, 'undefined' will wander into the sentence.",
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
    note: "Dodge escaped quotes by mixing quote styles: 'She said \"absolutely not\"'. For one actual backslash, write two: \\\\.",
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
      "slice copies a piece out of an array. splice edits the original: remove items, insert new ones, or swap them out.",
    example: `const books = ["Piranesi", "Betty", "Martyr!"];
books.slice(0, 2);  // ["Piranesi", "Betty"]; books unchanged
books.splice(1, 1); // removes "Betty"; books is now ["Piranesi", "Martyr!"]`,
    note: "Second num trips me up: slice(start, end) stops before end. splice(start, count) removes that many items. slice works on strings too. splice is arrays only.",
  },
  {
    topic: "JavaScript",
    name: "...spread",
    group: "Arrays",
    model:
      "Unpacks the contents of an array or object. Handy for adding another book to the pile, or copying an object with a few changes.",
    example: `const nextBooks = [...books, newBook];
const favorite = { ...book, favorite: true };`,
    note: "Order matters. If the same key appears twice, the last value wins. Spread only copies the outside layer, so nested objects are still shared.",
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
    example: `"moss".repeat(3); // "mossmossmoss"
"✿".repeat(5);    // "✿✿✿✿✿"`,
    note: "repeat(0) makes an empty string. A negative number throws an error. No un-repeating allowed.",
  },
  {
    topic: "JavaScript",
    name: "test() and the pattern",
    group: "Regex",
    model:
      "A regex is a pattern between slashes. test() checks whether a string matches it and gives back true or false.",
    example: `/moss/.test("mossy");   // true: contains "moss"
/moss$/.test("mossy");  // false: $ doesn't end with "moss"
/moss/.test("MOSS");    // false: capitalization matters
/moss/i.test("MOSS");   // true: i ignores capitalization`,
    note: "Without ^ and $, it only checks the pattern appears somewhere, not that the whole string matches.",
  },
  {
    topic: "JavaScript",
    name: "Regex symbols",
    group: "Regex",
    model:
      "The handful I actually use: \\d digit, \\w letter, number or _, \\s space, . any character, + one or more, * zero or more, ? optional, ^ start, $ end.",
    example: `/\d{3}/.test("123");       // true: three digits
/^✨+$/.test("✨✨");       // true: one or more sparkles
/colou?r/.test("color");   // true: the u is optional
/\.png$/.test("doggo.png"); // true: ends with literal ".png"`,
    note: "+, *, and ? apply to the thing immediately before them. Escape punctuation when you mean the actual character: \\. means a dot.",
  },
  {
    topic: "JavaScript",
    name: "Replacing with regex",
    group: "Regex",
    model:
      "Pass a regex to replace() to match a pattern instead of exact text. Add the g flag to change every match.",
    example: `"oops oops".replace(/oops/, "whoops");  // "whoops oops"
"oops oops".replace(/oops/g, "whoops"); // "whoops whoops"
"moss   &   fern".replace(/\s+/g, " "); // "moss & fern"`,
    note: "g = global: replace every match. The original string stays unchanged, so save the result. Using a regex with replaceAll()? It still needs g, or it throws.",
  },
  {
    topic: "JavaScript",
    name: "Arrow vs regular function",
    group: "Functions",
    model:
      "Same job, shorter syntax. No function keyword, and without curly braces, the result returns automatically.",
    example: `function double(n) { return n * 2; }
const double = (n) => n * 2; // same result`,
    note: "Function declarations can be called before they’re written but const arrows can’t. For object methods that need this, use a regular function.",
  },
  {
    topic: "JavaScript",
    name: "this: arrow vs regular",
    group: "Functions",
    model:
      "A regular function’s this is whatever called it, like the button in a listener. An arrow has no this of its own, so it uses the one outside it.",
    example: `btn.addEventListener("click", function () {
  this.textContent = "Omg, hi!"; // this = the button
});
btn.addEventListener("click", () => this); // not the button`,
    note: "Use event.currentTarget to get the element the listener is attached to. It works in both arrow and regular functions.",
  },
  {
    topic: "JavaScript",
    name: "Callbacks",
    group: "Functions",
    model:
      "A function I hand to another function to run when needed, like what to do when a button gets clicked.",
    example: `function celebrate() { console.log("Oh happy day!"); }
button.addEventListener("click", celebrate);`,
    note: "Pass celebrate, not celebrate(). Parentheses run it right away but without them, I’m handing over the function to run when needed.",
  },
  {
    topic: "JavaScript",
    name: "...rest",
    group: "Functions",
    model:
      "Gathers the remaining items into an array, or leftover properties into an object. Same dots as spread but opposite job.",
    example: `function pack(...books) { return books; }
pack("Piranesi", "Betty"); // ["Piranesi", "Betty"]

const { title, ...details } = book; // everything except title`,
    note: "Spread unpacks. Rest gathers. Rest always goes last: (first, ...others), never (...others, first).",
  },
  {
    topic: "JavaScript",
    name: "Ternary ? :",
    group: "Operators",
    model:
      "A little if/else that picks a value: condition ? thisIfTrue : thisIfFalse.",
    example: `const label = count === 1 ? "book" : "books";
const buttonText = isSaved ? "Saved!" : "Save for later";`,
    note: "Perfect for picking between two things. But if I’m nesting ternaries inside ternaries, it’s probably time for an if/else.",
  },
  {
    topic: "JavaScript",
    name: "setTimeout()",
    group: "Async",
    model:
      "Kind of like an alarm. Sets a timer to run a function later. The rest of my code keeps going while it waits.",
    example: `cconsole.log("Put the kettle on");
setTimeout(() => console.log("Tea time!"), 2000);
console.log("Find my favorite mug");
// kettle → mug → tea (after at least 2 seconds)`,
    note:
      "The delay is in milliseconds. 1000 = 1 second. Even 0 waits until the current code finishes so it doesn’t run immediately.",
  },
  {
    topic: "JavaScript",
    name: "setInterval()",
    group: "Async",
    model:
      "Runs a function repeatedly, with a delay between calls. Keeps going until I stop it with clearInterval.",
    example: `const StetchTimer = setInterval(() => {
  console.log("Time for a little stretch");
}, 60000); // every minute
clearInterval(timer); // stop when I’m done`,
    note:
      "Save the id or you can’t stop it. In React, clear it in useEffect’s cleanup so old timers don’t pile up.",
  },
  {
    topic: "JavaScript",
    name: "Promises",
    group: "Async",
    model:
      "A placeholder for a result. Starts pending and then either fulfills with a value or rejects with an error. The rest of my code keeps going.",
    example: `const tea = new Promise((resolve) => {
  setTimeout(() => resolve("Tea’s ready!"), 2000);
});
tea.then((message) => console.log(message));`,
    note:
      "I only need new Promise when creating one myself. Functions like fetch already return a promise, ready for then/catch or await.",
  },
  {
    topic: "JavaScript",
    name: "async / await",
    group: "Async",
    model:
      "Like a bookmark: JavaScript marks this function’s place, leaves it for now, and returns when the Promise settles.",
    example: `async function grow() {
  await wait(500);
  console.log("sprouted");
}`,
    note:
      "async always returns a promise. If an awaited promise rejects, await throws an error. Handle it with try/catch.",
  },
  {
    topic: "JavaScript",
    name: "JSON.stringify / parse",
    group: "APIs",
    model:
      "stringify turns data into JSON text for saving or sending. parse turns that text back into data.",
    example: `const text = JSON.stringify({ yarn: "mohair" }); // send or save {"yarn":"mohair"}
const skein = JSON.parse(text) // back to an object;
skein.yarn; // "mohair"`,
    note: "Good for saving objects in localStorage, which only stores strings. Invalid JSON makes parse throw so wrap it in try/catch if I’m unsure.",
  },
  {
    topic: "JavaScript",
    name: "fetch()",
    group: "APIs",
    model:
      "Asks a server for data and gives back a promise. Two waits: one for the response, then another to read its data.",
    example: `async function loadYarns() {
  const response = await fetch("/api/yarns");
  if (!response.ok) throw new Error("Couldn’t load yarns");
  return await response.json();
}`,
    note: "A 404 or 500 still counts as a response, so check response.ok. The second await reads the body: response.json() turns JSON text into usable data.",
  },
  {
    topic: "JavaScript",
    name: "API error handling",
    group: "APIs",
    model:
      "The network can fail (fetch rejects), the server says no (response.ok is false), or the response can be unreadable. You can catch all in one place. ",
    example: `try {
  const response = await fetch("/api/yarns");
  if (!response.ok) throw new Error("Status " + response.status);
  const yarns = await response.json();
} catch (error) { console.error("Yarn stash trouble:", error); }`,
    note: "Don’t forget await otherwise I’m checking a promise, not the response. Also good to show helpful message to site user.",
  },
  {
    topic: "JavaScript",
    name: "HTTP methods",
    group: "APIs",
    model:
      "The request’s verb: GET reads, POST usually creates, PUT replaces, PATCH updates part, and DELETE removes.",
    example: `fetch("/api/yarns"); // GET by default
fetch("/api/yarns", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ yarn: "mohair", color: "moss" }),
});`,
    note: "Adding a skein? POST. Changing just its color? PATCH. PUT sends the full replacement. Check the API’s docs for what it expects.",
  },
  {
    topic: "React",
    name: "Props",
    group: "Components",
    model:
      "Props pass info from parent component to child. The child reads them to decide what to display + shouldn’t change its props directly.",
    example: `function Snack({ name = "Mystery cheese" }) {
  return <p>Today’s emotional support snack: {name}</p>;
}
<Snack name="Brie" />`,
    note: "Strings go in quotes, JS values go in curly braces. A parameter default handles a missing or undefined prop.",
  },
  {
    topic: "React",
    name: "Passing functions as props",
    group: "Components",
    model:
      "A parent passes a function to a child. The child calls it when something happens. The parent decides what to do, like update state.",
    example: `// Parent passes the function
<SnackButton onSnack={revealCheese} />
// Child connects it to a click:
function SnackButton({ onSnack }) {
  return <button onClick={onSnack}>Emergency cheese</button>;
}`,
    note: "Pass revealCheese, not revealCheese() so function isn't called immediatly. Event props start with on and handler functions start with handle.",
  },
  {
    topic: "React",
    name: "useState",
    group: "Hooks",
    model:
      "Gives a component a value it remembers between renders, plus a setter to update it and refresh what’s displayed.",
    example: `const [isCozy, setIsCozy] = useState(false);
<button onClick={() => setIsCozy((prev) => !prev)}>
  {isCozy ? "Cozy mode on" : "Activate cozy mode"}
</button>`,
    note: "Gotta import {useState} first. Use the setter to change state and when the next value depends on the previous one, use prev => ",
  },
  {
    topic: "React",
    name: "useId",
    group: "Hooks",
    model:
      "Makes a unique ID for connecting elements, like a label and input. Each copy of the component gets its own ID.",
    example: `const id = useId();
<label htmlFor={id}>Current craft obsession</label>
<input id={id} />`,
    note: "Gotta import useId first. Handy for reusable form fields. List keys should come from the data instead.",
  },
  {
    topic: "React",
    name: "Conditional styles",
    group: "JSX",
    model:
      "A ternary picks a class or style based on a condition. Use && when there’s no “else”: show it or skip it.",
    example: `<div className={isSelected ? "swatch selected" : "swatch"} />
<div style={{ backgroundColor: isSelected ? "plum" : "linen" }} />
{isSelected && <span>Selected!</span>}`,
    note: "Keep the base class either way and add extra classes when needed. Use && to show something only when a condition is true.",
  },
  {
    topic: "React",
    name: "Update state with spread",
    group: "Hooks",
    model:
      "React re-renders when state is a new object. Spread lets me update objects and arrays without changing the originals.",
    example: `project.finished = true; // changes the object, but won’t trigger a render
setProject((prev) => ({ ...prev, finished: true }));
// makes a new object and tells React to update the screen`,
    note: "Use setProject so React knows to update the screen. Spread keeps the existing properties while letting me change the ones I need.",
  },

  // ---- CSS: Selectors ----
  {
    topic: "CSS",
    name: "::before / ::after",
    group: "Selectors",
    model:
      "A freebie element before or after an element’s contents! You can add text, symbols, images, or an empty box to style into a shape.",
    example: `.snack-label::before {
  content: "🧀 ";
}
.snack-label::after {
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  background: gold;
}`,
    note: 'One of my faves! I use these ALL the time, especially in my CSS art. Remember content! Even a shape needs content: "" to appear.',
  },
    {
    topic: "CSS",
    name: "Combinators",
    group: "Selectors",
    model:
      "Describes how two elements are related. Just a space between them: anywhere inside. >: directly inside. +: right after. ~: anywhere after.",
    example: `.basket .snack {}   /* in the basket, even inside a lunchbox */
.basket > .snack {} /* loose in the basket, not in a lunchbox */
.apple + .snack {}  /* the one snack right after the apple */
.apple ~ .snack {}  /* every snack after the apple */`,
    note: "The element on the right is the one that gets styled. + and ~ only match siblings that come after it in the HTML, never before.",
  },
  {
    topic: "CSS",
    name: "Attribute selectors",
    group: "Selectors",
    model:
      "Selects elements by their HTML attributes. Use [attribute] to check it exists, or [attribute=\"value\"] to match a specific value.",
    example: `/* Any element with a snack label */
[data-snack] { border: 1px solid plum; }

/* Only the brie */
[data-snack="brie"] { background: lemonchiffon; }`,
    note: "I use data-state in my design system to preview hover styles. Styling straight from aria-expanded keeps the look and what screen readers hear in sync. ",
  },
  {
    topic: "CSS",
    name: ":has()",
    group: "Selectors",
    model:
      "Styles an element when something inside it matches a selector.",
    example: `/* Recipe with a warning gets a red border */
.recipe:has(.allergy-warning) {
  border: 2px solid red;
}`,
    note: ":has(.allergy-warning) finds a warning anywhere inside the recipe. :has(> .allergy-warning) only finds one directly inside it, not inside another wrapper.",
  },
    {
    topic: "CSS",
    name: ":not()",
    group: "Selectors",
    model: "Matches everything except what’s in the parentheses.",
    example: `/* Dividers between snacks, but none after the last one */
.snack-list li:not(:last-child) {
  border-bottom: 1px solid plum;
}`,
    note: "The part before :not says what to style; the part inside says what to leave out. Here, every list item except the last gets a divider.",
  },
    {
    topic: "CSS",
    name: ":nth-child()",
    group: "Selectors",
    model: "Picks elements by their position among siblings. Use a number, odd or even, or a pattern like 3n.",
    example: `/* Shade every other row in my yarn inventory */
.yarn-table tbody tr:nth-child(even) {
  background: lavender;
} }

li:nth-child(3n) { color: red; }  /* 3, 6, 9… */
li:nth-child(-n + 3) { font-weight: 600; } /* first 3 */`,
    note: "Counting starts at 1, not 0. -n + 3 selects the first 3 items: the formula counts down through 3, 2, 1, then stops matching.",
  },

  {
    topic: "CSS",
    name: ":focus vs :focus-visible",
    group: "Selectors",
    model:
      ":focus matches any focused element. :focus-visible matches when the browser thinks focus needs a visible indicator, usually during keyboard use.",
    example: `button:focus-visible { /* usually keyboard focus */
  outline: 2px solid deeppink;
}
input:focus { /* click or Tab into the field */
  outline: 3px solid darkorchid;
}`,
    note: "Text inputs can match focus-visible even when clicked. I use outline for a little drama without the layout shift a thicker border can cause.",
  },
    {
    topic: "CSS",
    name: ":is() vs :where()",
    group: "Selectors",
    model:
      "Groups selectors to style several things at once. :is uses the strongest selector’s specificity. :where counts as zero, so other rules can override it more easily.",
    example: `:is(.cheese, .crackers) {
  padding: 1rem;
}
:where(ul, ol) {
  padding: 0; /* easy-to-override default */
}`,
    note: "Haven’t reached for these much yet... Curious to try.",
  },


  // ---- CSS: Layout ----
  {
    topic: "CSS",
    name: "Flex vs Grid",
    group: "Layout",
    model:
      "Flex lays things out in one direction and lets each item size itself. Grid lines things up in rows and columns at once.",
    example: `.craft-tags { display: flex; }     /* one row, sized by content */
.tiny-masterpieces { display: grid; }  /* rows and columns line up */`,
    note: "Tags can flow wherever they fit; gallery columns should line up. I can use both: Grid for the collection, Flex for the bits inside each card.",
  },
  {
    topic: "CSS",
    name: "Flex axes",
    group: "Layout",
    model:
      "justify-content arranges items along the main axis; align-items works across it. If you change flex-direction and the axes change too.",
    example: `.craft-supplies { display: flex;
  justify-content: space-between; /* ↔ */
  align-items: center;            /* ↕ */
}`,
    note: "I still have to picture the axes. Row: justify goes sideways, align goes vertically. Column: swap them.",
  },
  {
    topic: "CSS",
    name: "flex: 1",
    group: "Layout",
    model: "Lets an item grow to fill the leftover space. Useful when one part should take whatever room is left.",
    example: `.project-row { display: flex; gap: 1rem; }
.tiny-masterpiece { flex: 0 0 5rem; } /* fixed pic */
.desc { flex: 1; min-width: 0; } /* remaining room */`,
    note: "flex: 1 means grow and shrink from a zero basis. If text refusing to fit, min-width: 0 lets the item shrink below its content’s default minimum.",
  },
  {
    topic: "CSS",
    name: "flex-wrap",
    group: "Layout",
    model: "Lets flex items move onto a new line when they run out of room.",
    example: `.craft-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}`,
    note: "The default is nowrap so w/o it, items squish onto one line, then overflow. I use Grid if I want columns to line up across rows.",
  },
  {
    topic: "CSS",
    name: "Grid basics",
    group: "Layout",
    model:
      "Define columns on a grid container and its children fill them in order. fr shares the available space + repeat saves me typing the same size again.",
    example: `.tiny-museum {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* three equal columns */
  gap: 1rem;
}`,
    note: "repeat(3, 1fr) means 1fr 1fr 1fr. With 2fr 1fr, the first column gets twice the space. Extra items start another row.",
  },
  {
    topic: "CSS",
    name: "gap",
    group: "Layout",
    model: "Adds breathing room between flex or grid items w/o adding space around the outside.",
    example: `.tiny-treasures {
  display: grid;
  gap: 1rem 2rem; /* between rows, then columns */
}`,
    note: "One value spaces both directions. Two values mean row gap, then column gap.",
  },
  {
    topic: "CSS",
    name: "place-items: center",
    group: "Layout",
    model: "Shorthand for align-items and justify-items. On a grid, it centers children both ways.",
    example: `.display-case {
  display: grid;
  place-items: center;
}`,
    note: "The shortest way to center a thing in CSS.",
  },
  {
    topic: "CSS",
    name: "auto-fit + minmax()",
    group: "Layout",
    model:
      "Fits as many columns as there’s room for, each at least a min width. No media queries needed.",
    example: `.tiny-museum {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
}`,
    note: "	No breakpoint math! Use min(100%, 14rem) for narrow containers. auto-fit collapses empty columns so items stretch.",
  },
  {
    topic: "CSS",
    name: "grid-template-areas",
    group: "Layout",
    model: "Names parts of a grid so I can arrange the layout like a little floor plan. Each element goes in its matching area.",
    example: `.room { display: grid;
  grid-template-areas: "shelf shelf" "yarn .";
}
.shelf { grid-area: shelf; }
.yarn  { grid-area: yarn; }`,
    note: "Each quoted string is a row. Repeating shelf spans both columns. Dot leaves an empty cell beside yarn. grid-area connects each element to its named spot.",
  },
  {
    topic: "CSS",
    name: "Positioning",
    group: "Layout",
    model:
      "relative keeps an element’s place and becomes the anchor for absolute children. absolute leaves the normal layout. fixed sticks to screen.",
    example: `.face  { position: relative; } /* the anchor */
.eye   { position: absolute; top: 30%; left: 20%; }
.toast { position: fixed; bottom: 1rem; right: 1rem; }`,
    note: "My CSS art runs on relative parents and absolute little pieces. Without a positioned ancestor, an absolute piece may anchor somewhere weird.",
  },
  {
    topic: "CSS",
    name: "position: sticky",
    group: "Layout",
    model:
      "Scrolls normally until it reaches its offset, then sticks there while its parent is on screen.",
    example: `.craft-instructions {
  position: sticky;
  top: 1rem; /* stay a little below the screen’s top */
}`,
    note: "Remember the offset! My bookshelf’s tag rail uses sticky to keep its filters visible. If it misbehaves, check whether a parent has overflow set.",
  },
  {
    topic: "CSS",
    name: "Media queries",
    group: "Layout",
    model:
      "Apply styles only when the screen is a certain size. Start with mobile styles, then use min-width queries to adapt for larger screens.",
    example: `.gallery { grid-template-columns: 1fr; }
@media (width >= 40rem) {
  .gallery { grid-template-columns: repeat(3, 1fr); }
}`,
    note: "min-width means this size and up; max-width means this size and down. I add a breakpoint when the layout starts feeling cramped, not because it’s a particular device.",
  },
  {
    topic: "CSS",
    name: "Container queries",
    group: "Layout",
    model:
      "Like a media query, but responds to the size of a parent container instead of the window.",
    example: `.project-slot { container-type: inline-size; }
.project-card { display: flex; flex-direction: column; }

@container (min-width: 30rem) {
  .project-card { flex-direction: row; }
}`,
    note: "	Put container-type on a wrapper. The card responds to its available space, not the whole window.",
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
    note: "One of my set-it-and-forget-it defaults, especially for my CSS art where every pixel counts. Padding and borders stay inside the width + margins still sit outside.",
  },
  {
    topic: "CSS",
    name: "Margin collapse",
    group: "Box model",
    model: "Vertical margins between blocks overlap instead of adding up. The bigger one wins.",
    example: `.title { margin-bottom: 2rem; }
.desc { margin-top: 1rem; }
/* Between these neighboring blocks: 2rem, not 3rem */`,
    note: "When spacing math feels sus, check for collapsing margins. Doesn’t happen in flex or grid. One more reason to space with gap.",
  },
  {
    topic: "CSS",
    name: "inset",
    group: "Box model",
    model: "Shorthand for top, right, bottom and left, in the same order as margin.",
    example: `.crystal-ball { position: relative; }
.mystical-glow {
  position: absolute;
  inset: 0; /* reach all four edges */
}`,
    note: "The parent needs a position (usually relative) to be the anchor.",
  },
  {
    topic: "CSS",
    name: "Logical properties",
    group: "Box model",
    model:
      "Sides named by text flow instead of left of right. Inline runs the reading direction, block runs top to bottom.",
    example: `.spellbook {
  margin-inline: auto; /* center horizontally */
  padding-block: 1rem; /* top and bottom */
  border-inline-start: 2px solid darkorchid;
}`,
    note: "They flip on their own for right-to-left languages like Arabic.",
  },

  // ---- CSS: Sizing & units ----
  {
    topic: "CSS",
    name: "rem vs em",
    group: "Sizing & units",
    model: "rem is relative to the root font size. em is relative to the element’s own font size.",
    example: `.spellbook { font-size: 20px; }
.spellbook p {
  padding: 1em; /* 20px, using its inherited font size */
  margin: 1rem; /* 16px if the root font size is 16px */
}`,
    note: "rem for consistent sizing and em when spacing should grow with the text. Nested font-size vals in em can multiply so 1.5em inside 1.5em becomes 2.25×.",
  },
  {
    topic: "CSS",
    name: "calc()",
    group: "Sizing & units",
    model:
      "Does math on sizes, even mixing units like % and rem. Great for sizing one piece off another.",
    example: `.sidebar { width: calc(100% - 2rem); }
.eye { width: calc(var(--face) * 0.2); } /* scales with the face */`,
    note: "Remember spaces around + and -! I use calc to keep my CSS art’s little pieces in proportion. min, max, and clamp can do math inside them too.",
  },
  {
    topic: "CSS",
    name: "min() / max()",
    group: "Sizing & units",
    model: "min() picks the smallest of its values, max() the largest. Caps without a media query.",
    example: `.spellbook { width: min(100%, 40rem); } /* never wider than either */
.potion-label { padding: max(0.5rem, 1vw); } /* at least 0.5rem */`,
    note: "I use these a lot, but the names still feel backwards... min can cap a width, while max can set a minimum. Think about which value wins.",
  },
  {
    topic: "CSS",
    name: "clamp()",
    group: "Sizing & units",
    model: "Lets a value grow with the screen. (min, preferred, max).",
    example: `.spellbook-title {
  font-size: clamp(2rem, 1rem + 4vw, 4rem);
}`,
    note: "Mix rem into the middle value so text still grows when someone zooms.",
  },
  {
    topic: "CSS",
    name: "dvh",
    group: "Sizing & units",
    model: "Dynamic viewport height. It adjusts as mobile browser bars show and hide.",
    example: `.cookie-shop {
  min-height: 100vh; /* fallback */
  min-height: 100dvh;
}`,
    note: "Haven’t needed this much yet. Worth trying when a full-height mobile layout hides behind browser bars.",
  },
  {
    topic: "CSS",
    name: "aspect-ratio",
    group: "Sizing & units",
    model: "Keeps a box at a set width-to-height ratio as it resizes. Good for consistently shaped images and cards.",
    example: `.tarot-card {
  width: 12rem;
  aspect-ratio: 2 / 3;
  object-fit: cover; /* crop the image to fit */
}`,
    note: "Set the width and let the ratio work out the height, or vice versa. For images, cover crops to fit; contain keeps the whole image visible.",
  },

  // ---- CSS: Variables & color ----
  {
    topic: "CSS",
    name: "var()",
    group: "Variables & color",
    model: "Variables you define once and reuse. Change one value to update every part that uses it.",
    example: `.teacup { background: var(--ceramic); }
.handle { border: 6px solid var(--ceramic); }`,
    note: "I use this ALL the time in my CSS art. One line recolors the cup and handle so I don't need to hunt thru every little piece.",
  },
  {
    topic: "CSS",
    name: "Inline styles",
    group: "Variables & color",
    model:
      "Styles written directly on an element. HTML uses a string. React uses an object with camelCase property names.",
    example: `<div style="background-color: lightpink">Teacup</div> //HTML
<div style={{ backgroundColor: "lightpink" }}>Teacup</div> //React`,
    note: "Best for one-off dynamic values, like a color handed to a custom property. Inline beats stylesheets on specificity.",
  },
  {
    topic: "CSS",
    name: "currentColor",
    group: "Variables & color",
    model: "Uses the element’s text color for other properties, so borders, shapes, and icons can follow along.",
    example: `.magic-wand {
  color: darkorchid;
  border: 2px solid currentColor;
}`,
    note: "Helpful shorhand. Change color on the parent and everything using currentColor updates with it.",
  },
  {
    topic: "CSS",
    name: "color-mix()",
    group: "Variables & color",
    model: "Blends two colors by percentage. Tints and transparency from a single token.",
    example: `.teacup {
  background: color-mix(in srgb, pink 30%, white);
  border: 2px solid color-mix(in srgb, purple 25%, transparent);
}`,
    note: "I use this a lot for softer variations without adding more color tokens. Mixing with white lightens, mixing with transparent makes it see-through.",
  },
  {
    topic: "CSS",
    name: "light-dark()",
    group: "Variables & color",
    model: "Picks the first color in light mode and the second in dark mode based on the element’s color-scheme.",
    example: `:root { color-scheme: light dark; }
.spellbook {
  background: light-dark(linen, midnightblue);
  color: light-dark(midnightblue, linen);
}`,
    note: "Still learning about themeing. Does nothing without color-scheme set, it won’t create a theme toggle by itself. Colors only, not whole sets of styles.",
  },

  // ---- CSS: Motion ----
  {
    topic: "CSS",
    name: "transition",
    group: "Motion",
    model: "Smooths change between two states instead of snapping. Tell it which property to animate, how long, and how the speed should feel.",
    example: `.mushroom {
  transition: background-color 150ms ease;
}`,
    note: "Put transition on the base element, not :hover, to animate both ways. On :hover alone it eases in, then snaps back.",
  },
  {
    topic: "CSS",
    name: "Timing functions",
    group: "Motion",
    model:
      "How speed changes over a transition. ease is the default. ease-in starts slow, ease-out ends slow, ease-in-out does both, linear stays steady.",
    example: `transition: opacity 200ms ease-out; /* appearing */
transition: opacity 150ms ease-in;  /* leaving */
transition: rotate 1s linear;       /* spinners */
transition: scale 300ms cubic-bezier(.3, 1.5, .6, 1); /* bounce */`,
    note: "Anything custom is cubic-bezier(), which you can drag around in DevTools.",
  },
  {
    topic: "CSS",
    name: "transform",
    group: "Motion",
    model: "Moves, scales or rotates an element visually without shifting the layout around it. You can combine several changes in one transform.",
    example: `.teacup-handle {
  transform: translateX(4px) rotate(-15deg) scale(0.9);
}`,
    note: "I use this constantly in my CSS art. Order matters: rotate then translate moves along the rotated axes.",
  },
  {
    topic: "CSS",
    name: "translate, rotate, scale",
    group: "Motion",
    model:
      "Standalone versions of the transform functions.",
    example: `/* Still applies translate → rotate → scale, regardless of line order */
.little.-leaf {
  scale: 0.9;
  rotate: -15deg;
  translate: 4px -2px;
}
`,
    note: "They always apply in the order translate, rotate, scale (then transform), no matter how you write them.",
  },
  {
    topic: "CSS",
    name: "@keyframes",
    group: "Motion",
    model: "Set how something looks at different points, then play those steps with animation.",
    example: `@keyframes float {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -6px; }
}
.cloud { animation: float 3s ease-in-out infinite; }`,
    note: "Percentages mark moments in time, not distance. Here, the cloud reaches its highest point halfway through, then drifts back.",
  },
  {
    topic: "CSS",
    name: "animation",
    group: "Motion",
    model:
      "Plays a set of keyframes. Controls the duration, timing, delay, repeats, direction, and whether styles stay afterward.",
    example: `/* Uses the float keyframes from the previous card */
.cloud {
  animation: float 3s ease-in-out infinite alternate;
}`,
    note: "infinite keeps it looping, alternate plays each repeat backward, then forward. Float e.g already goes up/down so alternate isn’t needed. Use it for one-way keyframes.",
  },
  {
    topic: "CSS",
    name: "prefers-reduced-motion",
    group: "Motion",
    model: "A media query for people who’ve asked their device for less motion. Keep playful movement optional.",
    example: `@media (prefers-reduced-motion: no-preference) {
  .cloud { animation: float 3s ease-in-out infinite; }
}`,
    note: "My love of wiggly little things isn’t universal... My CSS knick knacks become still when reduced motion is requested.",
  },
  {
    topic: "CSS",
    name: "@starting-style",
    group: "Motion",
    model:
      "Sets the starting styles for an element’s entrance transition, like fading in something newly added to the page.",
    example: `.cloud { transition: opacity 300ms; }
@starting-style {
  .cloud { opacity: 0; }
}`,
    note: "New to me. I haven’t used this yet! Curious to try it for entrance effects.",
  },

  // ---- CSS: Stacking ----
  {
    topic: "CSS",
    name: "z-index",
    group: "Stacking",
    model:
      "Controls which overlapping element sits in front. Higher numbers win within the same stacking context.",
    example: `.mushroom { position: relative; }
.stem { position: absolute; z-index: 1; }
.cap  { position: absolute; z-index: 2; }`,
    note: "Works on positioned elements and flex/grid items. If 9999 won’t help, check the parents before adding another nine.",
  },
  {
    topic: "CSS",
    name: "Stacking context",
    group: "Stacking",
    model:
      "A group whose layers stay together. Children can move in front of each other, but can’t escape their group’s position behind another group.",
    example: `.back-group  { position: relative; z-index: 1; }
.front-group { position: relative; z-index: 2; }
.back-group .mushroom { position: absolute; z-index: 9999; }
/* Mushroom still sits behind front-group */`,
    note: "Think of two folders of layers. You can rearrange layers inside each folder, but if folder A sits behind folder B, everything inside A stays behind B.",
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
