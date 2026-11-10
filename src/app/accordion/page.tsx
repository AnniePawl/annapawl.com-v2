import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import AccordionAnatomy from "./_components/anatomy/AccordionAnatomy";
import CodeBlock from "@/src/components/ui/CodeBlock";
import Callout from "../../components/ui/Callout";

// ---- Vanilla JS snippets ----

const VANILLA_MARKUP = `<div class="accordion">
  <div class="accordion-item">
    <h3>
      <button
        type="button"
        class="accordion-button"
        aria-expanded="true"
        aria-controls="panel-1"
      >
        Are squirrels secretly tiny gardeners?
      </button>
    </h3>
    <div id="panel-1">
      <p>Yes! Squirrels sometimes forget where they buried their nuts…</p>
    </div>
  </div>

  <div class="accordion-item">
    <h3>
      <button
        type="button"
        class="accordion-button"
        aria-expanded="false"
        aria-controls="panel-2"
      >
        Why do squirrels flick their tails so dramatically?
      </button>
    </h3>
    <div id="panel-2" hidden>
      <p>Tail flicking helps squirrels communicate…</p>
    </div>
  </div>
</div>`;

const VANILLA_CSS = `.accordion-button {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  border: 0;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

/* The icon reads aria-expanded, so it can never disagree with the state.
   The "/ ''" hides the symbol from screen readers. The state is already announced. */
.accordion-button::after {
  content: "+" / "";
}

.accordion-button[aria-expanded="true"]::after {
  content: "−" / "";
}`;

const VANILLA_JS = `// Select: find each accordion, then only the buttons inside it
document.querySelectorAll(".accordion").forEach((accordion) => {
  const buttons = accordion.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    // Listen: run this when the button is clicked
    button.addEventListener("click", () => {
      // Locate panel: aria-controls holds the panel's id
      const panel = document.getElementById(button.getAttribute("aria-controls"));

      // Read state: attributes are text, so compare with "true"
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Update both: set the opposite state, and hide or show the panel to match
      button.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });
});`;

const VANILLA_SINGLE_OPEN = `function setOpen(button, open) {
  button.setAttribute("aria-expanded", String(open));
  document.getElementById(button.getAttribute("aria-controls")).hidden = !open;
}

document.querySelectorAll(".accordion").forEach((accordion) => {
  const buttons = accordion.querySelectorAll(".accordion-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";

      // Close every other item in this accordion first
      buttons.forEach((other) => {
        if (other !== button) setOpen(other, false);
      });

      // Then open or close the one that was clicked
      setOpen(button, !isOpen);
    });
  });
});`;

// ---- Keyboard and focus snippets ----

const KEYBOARD_JS = `document.querySelectorAll(".accordion").forEach((accordion) => {
  // One listener per accordion handles every header inside it
  accordion.addEventListener("keydown", (event) => {
    const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;

    const buttons = [...accordion.querySelectorAll(".accordion-button")];
    const index = buttons.indexOf(document.activeElement);
    if (index === -1) return; // focus isn't on a header button

    const last = buttons.length - 1;
    let next;
    if (event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    event.preventDefault(); // stop the page from scrolling
    buttons[next].focus();
  });
});`;

const FOCUS_CSS = `.accordion-button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}`;

const ANIMATED_MARKUP = `<!-- A closed panel: inert instead of hidden -->
<div id="panel-2" class="accordion-panel" inert>
  <div>
    <p>Tail flicking helps squirrels communicate…</p>
  </div>
</div>`;

const ANIMATED_CSS = `.accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.accordion-panel > * {
  min-height: 0;
  overflow: hidden;
}

/* Open when its button says so */
.accordion-item:has([aria-expanded="true"]) .accordion-panel {
  grid-template-rows: 1fr;
}

@media (prefers-reduced-motion: reduce) {
  .accordion-panel {
    transition: none;
  }
}`;

// ---- React snippets (plain JSX) ----

const REACT_DATA = `const items = [
  {
    id: "gardeners",
    question: "Are squirrels secretly tiny gardeners?",
    answer: "Yes! Squirrels sometimes forget where they buried their nuts…",
  },
  {
    id: "tails",
    question: "Why do squirrels flick their tails so dramatically?",
    answer: "Tail flicking helps squirrels communicate…",
  },
];`;

const REACT_STATE = `const [openId, setOpenId] = useState(null);

function toggle(id) {
  // Clicking the open item closes it; any other item opens instead
  setOpenId((current) => (current === id ? null : id));
}`;

const REACT_RENDER = `{items.map((item) => {
  const isOpen = openId === item.id;

  return (
    <div className="accordion-item" key={item.id}>
      <h3>
        <button
          type="button"
          className="accordion-button"
          aria-expanded={isOpen}
          aria-controls={\`panel-\${item.id}\`}
          onClick={() => toggle(item.id)}
        >
          {item.question}
        </button>
      </h3>
      <div id={\`panel-\${item.id}\`} hidden={!isOpen}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
})}`;

const REACT_IDS = `const baseId = useId(); // unique to this accordion

// Inside .map():
const panelId = \`\${baseId}-panel-\${item.id}\`;`;

const REACT_FULL = `import { useId, useState } from "react";

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);
  const baseId = useId();

  function toggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = \`\${baseId}-panel-\${item.id}\`;

        return (
          <div className="accordion-item" key={item.id}>
            {/* Use the heading level that fits your page */}
            <h3>
              <button
                type="button"
                className="accordion-button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                {item.question}
              </button>
            </h3>
            <div id={panelId} hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Use it anywhere:
<Accordion items={items} />`;

const REACT_MULTIPLE = `const [openIds, setOpenIds] = useState([]);

function toggle(id) {
  setOpenIds((current) =>
    current.includes(id)
      ? current.filter((openId) => openId !== id) // close it
      : [...current, id] // open it, leave the others alone
  );
}

// Inside .map():
const isOpen = openIds.includes(item.id);`;

export const metadata = {
  title: "Building an accessible accordion — Anna Pawl",
  description:
    "How to build an accordion that works with a mouse, keyboard or screen reader, first in vanilla JavaScript, then in React with my design system component as the example.",
};

export default function AccordionTutorial() {
  return (
    <main>
      <PostLayout
        descriptionTitle="Frontend fundamentals"
        description="How to build an accordion that works with a mouse, keyboard or screen reader, first in vanilla JavaScript, then in React with my design system component as the example."
        shortDescription="Building an accordion that works with a keyboard and screen reader."
        eyebrow="Building Blocks"
        title="Accordion"
        publishedDate="Updated Oct 2026"
        readingTime="12 min read"
        postTags="Components, JavaScript, React, Accessibility"
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--coral-bold)",
              southeast: "var(--teal-bold)",
              southwest: "var(--teal-bold)",
              northwest: "var(--teal-bold)",
              hoverAccent: "var(--teal-bold)",
            }}
            size="1.75rem"
          />
        }
        accent="var(--teal-bold)"
        contents={[
          { id: "what-is-an-accordion", label: "What is an accordion?", tone: "pink-bold" },
          { id: "anatomy", label: "The anatomy", tone: "coral-bold" },
          { id: "behind-the-buttons", label: "Behind the Buttons", tone: "lilac-bold" },
          { id: "vanilla-js", label: "Build it in vanilla JavaScript", tone: "teal-bold" },
          { id: "keyboard-and-focus", label: "Keyboard and focus", tone: "marigold-bold" },
          { id: "react", label: "Rebuild it in React", tone: "iris-bold" },
          { id: "test-it", label: "Test it", tone: "sky-bold" },
          { id: "keep-going", label: "Keep going", tone: "plum-bold" },
        ]}
      >
        <PostSection id="what-is-an-accordion" title="What is an accordion?">
          <p>
            I think of an accordion as a set of drawers. Each heading gives you a glimpse of what’s tucked underneath. You open the ones you need and leave the rest closed until you want to dig into the details. That’s handy when you’re looking up one question in an FAQ or jumping to a step in a guide.
          </p>
          <p>
            I wrote this to slow down and really understand what happens in a single click. How does the button know which panel to open? What makes the plus turn into a minus? How does a screen reader know the panel is open? Let’s take one apart and see how those pieces fit together.
          </p>

        </PostSection>

        <PostSection id="anatomy" title="The anatomy">
          <p>
            Each accordion item pairs a question with the panel it opens. The heading gives the question a place in the page’s outline and the real <code>button</code> inside it does a lot quiet work for us. You can Tab to it and press Enter or Space to open the panel.
          </p>
          <p>
            Try highlighting <b>Button</b> and then <b>Panel</b> below. You can see which pieces go together. In the code, an ID and an ARIA attribute connect them. In the Behind the Buttons section, we’ll look at how the button points to its panel and tells a screen reader whether it’s open.
          </p>
          <AccordionAnatomy />
        </PostSection>

        <PostSection id="behind-the-buttons" title="Behind the Buttons">
          <p>
            An accordion has an invisible layer of structure. Let’s look at the HTML for the squirrel question. The button has two little bits of information tucked into it. They’re called ARIA attributes. One tells a screen reader whether the panel is open and the other points to the panel this button controls. JavaScript does the opening and closing, and the attributes describe what’s going on.
          </p>
          <CodeBlock code={`<div class="accordion-item">
  <h3>
    <button type="button" aria-expanded="true" aria-controls="panel-1">
      Are squirrels secretly tiny gardeners?
    </button>
  </h3>
  <div id="panel-1">
    <p>Yes! Squirrels sometimes forget where they buried their nuts…</p>
  </div>
</div>`}
            highlight={[
              'aria-expanded="true"',
              'aria-controls="panel-1"',
            ]}
          />
          <PostSubsection title="aria-expanded" variant="code">
            <p>
              <b>Is it open?</b> Here, <code>aria-expanded=&quot;true&quot;</code> tells
              a screen reader the button is expanded. You might hear something
              like &ldquo;Are squirrels secretly tiny gardeners? Button,
              expanded.&rdquo; When we close the panel, JavaScript changes the
              value to <code>false</code>. The plus and minus give you a visual
              clue, and <code>aria-expanded</code> makes that same information
              available to a screen reader.
            </p>
          </PostSubsection>
          <PostSubsection title="aria-controls" variant="code">
            <p>
              <b>Which panel goes with this button?</b> Follow{" "}
              <code>aria-controls=&quot;panel-1&quot;</code> down a few lines and
              you&rsquo;ll find <code>id=&quot;panel-1&quot;</code> on the panel.
              Those values have to match. In the next section, we&rsquo;ll use
              that same ID to find the panel in JavaScript.
            </p>
          </PostSubsection>
          <PostSubsection title="aria-labelledby" variant="code" tag="Optional">
            <p>
              Sometimes a panel has enough content that it helps to make it a
              landmark people can jump to with a screen reader. If you give the
              panel <code>role=&quot;region&quot;</code>, use{" "}
              <code>aria-labelledby</code> to point back to the button&rsquo;s{" "}
              <code>id</code>. That way the region gets its name from the
              question. For a short answer about squirrels, I&rsquo;d skip both.
            </p>
          </PostSubsection>
        </PostSection>

        <PostSection id="vanilla-js" title="Build it in vanilla JavaScript">
          <p>
            We’ve seen how a button points to its panel. Now let’s give it something to do. I’m starting with plain HTML, CSS, and JavaScript so we can follow one click all the way through before we rebuild it in React.
          </p>
          <Callout eyebrow="Mental model" className="mt-6">
            <ul className="m-0 grid list-none gap-2 p-0">
              <li>
                <strong className="mr-2">Visual structure</strong>Item &rarr; (Heading &rarr; Button) + Panel
              </li>
              <li>
                <strong className="mr-2">Button</strong>State &middot; Target{" "}
                <span className="type-meta">
                  (<code>aria-expanded</code>, <code>aria-controls</code>)
                </span>
              </li>
              <li>
                <strong className="mr-2">Panel</strong>Identity &middot; Visibility{" "}
                <span className="type-meta">
                  (<code>id</code>, <code>hidden</code>)
                </span>
              </li>
              <li>
                <strong className="mr-2">Connection</strong>The button&rsquo;s{" "}
                <code>aria-controls</code> matches the panel&rsquo;s <code>id</code>
              </li>
              <li>
                <strong className="mr-2">JavaScript</strong>Select &rarr; Listen &rarr; Locate panel &rarr; Read state &rarr; Update both{" "}
                <span className="type-meta">
                  (<code>aria-expanded</code>, <code>hidden</code>)
                </span>
              </li>
            </ul>
          </Callout>

          <PostSubsection title="Start with the markup">
            <p>
              The first squirrel question starts open. The second one starts closed. Look at what&rsquo;s different
              in the HTML. The second button has{" "}
              <code>aria-expanded=&quot;false&quot;</code>, and its panel has{" "}
              <code>hidden</code>. One describes the state of the button, and
              the other keeps the panel out of view.
            </p>
            <CodeBlock
              code={VANILLA_MARKUP}
              highlight={[
                'aria-expanded="true"',
                'aria-expanded="false"',
                'aria-controls="panel-1"',
                'aria-controls="panel-2"',
                "hidden",
              ]}
            />
          </PostSubsection>

          <PostSubsection title="Add a little CSS">
            <p>
              Just enough CSS to look like an accordion. The bits to watch here are the plus and minus icons, which come from the button’s <code>aria-expanded</code> attribute. When it’s true, the CSS swaps the plus for a minus. Since the JavaScript already updates that attribute, the icon always matches the real state, with no extra code.
            </p>
            <CodeBlock code={VANILLA_CSS} highlight={['[aria-expanded="true"]']} />
          </PostSubsection>

          <PostSubsection title="Wire it up with JavaScript">
            <p>The script follows the mental model above, step by step. The first two steps set up the buttons. The last three happen every time you click one.</p>
            <ol className="my-4 grid list-decimal gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
              <li>
                <strong>Select:</strong> the buttons inside each accordion.
              </li>
              <li>
                <strong>Listen:</strong> for a click on each button.
              </li>
              <li>
                <strong>Locate panel:</strong> by matching the button&rsquo;s{" "}
                <code>aria-controls</code> to the panel&rsquo;s <code>id</code>.
              </li>
              <li>
                <strong>Read state:</strong> by comparing <code>aria-expanded</code> to
                the string <code>&quot;true&quot;</code>.
              </li>
              <li>
                <strong>Update both:</strong> the button’s <code>aria-expanded</code> and the panel’s <code>hidden</code> property.
              </li>
            </ol>
            <p>That&rsquo;s the whole script:</p>
            <CodeBlock code={VANILLA_JS} highlight={['accordion.querySelectorAll(".accordion-button")']} />
            <p>
              That last step is worth reading slowly. If the second panel starts closed, <code>isOpen</code> is <code>false</code>. After the click, the button gets <code>aria-expanded=&quot;true&quot;</code> and the panel gets <code>hidden = false</code>. Both lines are working from what was true before the click.
            </p>
          </PostSubsection>

          <PostSubsection title="Keep the button + panel sync">
            <p>
              <code>aria-expanded</code> is the single source of truth. The
              JavaScript checks it to decide whether to open or close an item,
              and the CSS uses it to show the plus or minus. It also tells screen
              readers whether the item is open. Since everything reads from the
              same place, what people see and what screen readers announce
              always match.
            </p>
          </PostSubsection>

          <PostSubsection title="Make it single-open">
            <p>
              In the example above, several items can be open at once. If you want opening one to close the other, a little <code>setOpen</code> helper lets you update a button and its panel together. Use it to close the other items first, then toggle the one you clicked. Click an open question again and you can close them all.
            </p>
            <CodeBlock code={VANILLA_SINGLE_OPEN} highlight={["setOpen(other, false)"]} />
          </PostSubsection>
        </PostSection>

        <PostSection id="keyboard-and-focus" title="Keyboard and focus">
          <p>
            Because each header holds a real <code>&lt;button&gt;</code>, Tab,
            Enter and Space already work, with no extra code (see{" "}
            <TextLink href="#behind-the-buttons">Behind the Buttons</TextLink>).
            This section covers what happens next: moving between headers,
            seeing where you are, and making sure focus never lands somewhere
            it shouldn&rsquo;t.
          </p>

          <PostSubsection title="Make focus visible">
            <p>
              When you Tab to a question, can you tell which one you’re on? That’s what the focus ring is for. I’m using <code>:focus-visible</code> to give the button a clear outline when the browser decides focus should be visible, like when you Tab to it.
            </p>
            <CodeBlock code={FOCUS_CSS} highlight={[":focus-visible"]} />
          </PostSubsection>

          <PostSubsection title="Leave focus on the button">
            <p>
              After someone opens an item, keep focus on its button. It can be
              tempting to move focus into the panel, but that pulls keyboard and
              screen-reader users somewhere they didn&rsquo;t ask to go. From
              the button, they can keep reading into the panel when they&rsquo;re
              ready, or close it again with Enter or Space.
            </p>
          </PostSubsection>

          <PostSubsection title="Keep hidden content out of reach">
            <p>
              <code>hidden</code> does a lot for free: a closed panel is
              invisible, silent to screen readers and skipped by Tab. The catch
              comes when you animate it. Animations need the panel to stay in
              the page while it shrinks, so instead of <code>hidden</code>, the
              panel is collapsed with CSS. Now it only <em>looks</em> closed,
              and any link inside can still be reached with Tab, landing focus
              somewhere nobody can see.
            </p>
            <p>
              The fix is <code>inert</code>. It keeps a closed panel out of the
              Tab order and away from screen readers, while CSS handles the
              animation. Like <code>hidden</code>, it also keeps a closed
              panel&rsquo;s text out of the browser&rsquo;s find-in-page
              (Cmd+F) and stops it from being selected, which is worth knowing
              for long, reference-style panels. Switching takes three changes:
            </p>
            <ol className="my-4 grid list-decimal gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
              <li>
                <strong>Markup:</strong> on closed panels, replace{" "}
                <code>hidden</code> with <code>inert</code>. A panel that keeps{" "}
                <code>hidden</code> stays <code>display: none</code>, so the CSS
                can never open it. Give each panel a class and one inner wrapper
                for the animation to work on.
              </li>
              <li>
                <strong>JavaScript:</strong> in the first script, swap{" "}
                <code>panel.hidden = isOpen</code> for{" "}
                <code>panel.inert = isOpen</code>. In the single-open
                version&rsquo;s <code>setOpen</code> helper, swap{" "}
                <code>.hidden = !open</code> for <code>.inert = !open</code>.
              </li>
              <li>
                <strong>CSS:</strong> open the panel whenever its button says{" "}
                <code>aria-expanded=&quot;true&quot;</code>.
              </li>
            </ol>
            <CodeBlock code={ANIMATED_MARKUP} highlight={["inert"]} />
            <CodeBlock code={ANIMATED_CSS} highlight={[':has([aria-expanded="true"])']} />
          </PostSubsection>

          <PostSubsection title="Arrow keys, Home and End" tag="Optional">
            <p>
              For longer accordions, you can add a few shortcuts on top of
              Tab: Up and Down move between headers, and Home and End jump to
              the first and last. They aren&rsquo;t part of the current
              WAI-ARIA accordion pattern, but they&rsquo;re a nice touch. A
              single listener on each accordion handles them, so it works for
              any number of items.
            </p>
            <CodeBlock code={KEYBOARD_JS} highlight={["event.preventDefault()", "buttons[next].focus()"]} />
            <p>
              <code>preventDefault()</code> matters here because without it, the arrow
              keys would also scroll the page.
            </p>
          </PostSubsection>

        </PostSection>

        <PostSection id="react" title="Rebuild it in React">
          <p>
            Same accordion, same mental model, now as a React component. The
            big change is where the source of truth lives. In the vanilla version, the
            script read <code>aria-expanded</code> from the button to figure out what was open. In React, the open item lives in state, and the
            attributes are drawn from that state every time the component
            renders. You never call <code>setAttribute</code>, and both
            attributes come from the same <code>isOpen</code> value.
          </p>
          <Callout eyebrow="Vanilla to React" tone="iris-bold" className="mt-6">
            <ul className="m-0 grid list-none gap-2 p-0">
              <li>
                <strong className="mr-2">Select</strong>
                <code>items.map()</code> renders every button
              </li>
              <li>
                <strong className="mr-2">Listen</strong>
                Each button gets an <code>onClick</code> handler
              </li>
              <li>
                <strong className="mr-2">Locate panel</strong>
                the panel&rsquo;s id is built from the item
              </li>
              <li>
                <strong className="mr-2">Read state</strong>
                <code>Compare openId === item.id</code>
              </li>
              <li>
                <strong className="mr-2">Update both</strong>
                Call <code>setOpenId()</code>, and React updates the button and panel from the new state.
              </li>
            </ul>
          </Callout>

          <PostSubsection title="Start with the data">
            <p>
              Instead of writing each item by hand, keep the questions and
              answers in an array. Each item gets a short
              <code>id</code>, which React uses to tell items apart and which
              we&rsquo;ll use to connect each button to its panel.
            </p>
            <CodeBlock code={REACT_DATA} />
          </PostSubsection>

          <PostSubsection title="Choosing the state">
            <p>
              What does the accordion actually need to remember? Here, it’s just which question is open. So we store <code>openId</code> or <code>null</code> when
              everything is closed. Storing a single id also gives us
              single-open behavior for free, because only one id fits. Passing
              a function to <code>setOpenId</code> hands you the current value,
              so the toggle always works from the latest state.
            </p>
            <CodeBlock code={REACT_STATE} highlight={["setOpenId((current) => (current === id ? null : id))"]} />
          </PostSubsection>

          <PostSubsection title="Render ARIA from state">
            <p>
              For each item, work out <code>isOpen</code>, then let it drive
              everything: <code>aria-expanded</code>, <code>hidden</code>, and
              which way the toggle goes. React turns{" "}
              <code>aria-expanded=&#123;true&#125;</code> into the text{" "}
              <code>&quot;true&quot;</code> for you.
            </p>
            <CodeBlock
              code={REACT_RENDER}
              highlight={["aria-expanded={isOpen}", "hidden={!isOpen}"]}
            />
          </PostSubsection>

          <PostSubsection title="Give each panel a unique ID">
            <p>
              Ids like <code>panel-gardeners</code> work until two accordions
              share a page and both use the same item ids. Then{" "}
              <code>aria-controls</code> points at the wrong panel. React&rsquo;s{" "}
              <code>useId</code> gives each accordion its own prefix, so every
              id is unique.
            </p>
            <CodeBlock code={REACT_IDS} highlight={["useId()"]} />
          </PostSubsection>

          <PostSubsection title="Put it together">
            <p>
              Here&rsquo;s the whole component. Pass it your items and
              it handles the rest. Keyboard shortcuts work the same way as in{" "}
              <TextLink href="#keyboard-and-focus">Keyboard and focus</TextLink>,
              if you want to add them.
            </p>
            <CodeBlock code={REACT_FULL} />
          </PostSubsection>

          <PostSubsection title="Let several open at once" tag="Optional">
            <p>
              To let more than one item stay open, store a list of open ids
              instead of one. Clicking adds an id to the list or removes it, and
              each item checks whether its id is in the list. Nothing else in
              the component changes.
            </p>
            <CodeBlock code={REACT_MULTIPLE} highlight={["openIds.includes(item.id)"]} />
          </PostSubsection>
        </PostSection>

        <PostSection id="test-it" title="Test it">
          <p>
            You don&rsquo;t need special tools to check your accordion. A Mac
            and a browser cover the essentials, so run through these to see if the accordion behaves the way we expect.
          </p>
          <ol className="my-4 grid list-decimal gap-3 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
            <li>
              <strong>Use only the keyboard.</strong> Click the address bar,
              then press Tab to move through the page. Every header should be
              reachable, and Enter or Space should open and close it. In Safari,
              first turn on Settings &rarr; Advanced &rarr; &ldquo;Press Tab to
              highlight each item on a webpage.&rdquo;
            </li>
            <li>
              <strong>Watch the focus.</strong> While you tab, you should always
              be able to see which header you&rsquo;re on. Closed answers should
              be skipped completely, so focus never lands somewhere invisible.
            </li>
            <li>
              <strong>Listen with a screen reader.</strong> Press Cmd+F5 to turn
              on VoiceOver, then Tab to a header. You should hear its question,
              that it&rsquo;s a button, and that it&rsquo;s collapsed. Press Space and it should tell you it&rsquo;s now
              expanded. Press Ctrl+Option+U to open the
              rotor, and your questions should appear in its Headings list. Press
              Cmd+F5 again to turn it off.
            </li>
            <li>
              <strong>Zoom to 200%.</strong> Press Cmd and + until the browser
              shows 200%. Nothing should overlap, get cut off or need sideways
              scrolling. Cmd+0 resets it.
            </li>
            <li>
              <strong>Try on reduced motion.</strong> In System Settings
              &rarr; Accessibility &rarr; Display, switch on Reduce motion. Items
              should open and close without animating.
            </li>
            <li>
              <strong>Run an automated check.</strong> Lighthouse’s Accessibility audit can flag things you might miss, like low contrast. I’d still start with the keyboard. That’s how you find out what happens when you actually try to use the accordion.
            </li>
          </ol>
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>
            An accordion looks simple, but most of it is invisible. What helped me was taking one question and following it all the way through. Which panel opens? What changes on the button? Where does focus stay? Once I could answer those, I knew where to look if something felt off.
          </p>
          <p>Want to go deeper? These are the references I lean on most:</p>
          <ul className="my-4 grid list-disc gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
            <li>
              <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">
                WAI-ARIA accordion pattern
              </TextLink>
              , the reference pattern, including keyboard support.
            </li>
            <li>
              <TextLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded">
                aria-expanded on MDN
              </TextLink>
              , with notes on where it does and doesn&rsquo;t belong.
            </li>
            <li>
              <TextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert">
                inert on MDN
              </TextLink>
              , for keeping hidden content out of reach.
            </li>
          </ul>
          <p>
            Want to see the finished version? My accordion, with its title,
            markers and open-and-close animation, lives in my{" "}
            <TextLink href="/sedge-design-system#accordion">Sedge design system</TextLink>.
          </p>
          <p>More Building Blocks are on the way. 🌱</p>
        </PostSection>
      </PostLayout>
    </main>
  );
}
