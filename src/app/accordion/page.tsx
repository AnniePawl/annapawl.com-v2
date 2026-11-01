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

const VANILLA_JS = `// Select: find every accordion button
const buttons = document.querySelectorAll(".accordion-button");

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
});`;

const VANILLA_SINGLE_OPEN = `const buttons = document.querySelectorAll(".accordion-button");

function setOpen(button, open) {
  button.setAttribute("aria-expanded", String(open));
  document.getElementById(button.getAttribute("aria-controls")).hidden = !open;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    // Close every other item first
    buttons.forEach((other) => {
      if (other !== button) setOpen(other, false);
    });

    // Then open or close the one that was clicked
    setOpen(button, !isOpen);
  });
});`;

// ---- Keyboard and focus snippets ----

const KEYBOARD_JS = `const accordion = document.querySelector(".accordion");

// One listener on the whole accordion handles every header
accordion.addEventListener("keydown", (event) => {
  const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
  if (!keys.includes(event.key)) return;

  const buttons = [...accordion.querySelectorAll(".accordion-button")];
  const index = buttons.indexOf(document.activeElement);
  if (index === -1) return; // focus isn't on a header

  const last = buttons.length - 1;
  let next;
  if (event.key === "ArrowDown") next = index === last ? 0 : index + 1;
  if (event.key === "ArrowUp") next = index === 0 ? last : index - 1;
  if (event.key === "Home") next = 0;
  if (event.key === "End") next = last;

  event.preventDefault(); // stop the page from scrolling
  buttons[next].focus();
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
  setOpenId(openId === id ? null : id);
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
    setOpenId(openId === id ? null : id);
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
  setOpenIds(
    openIds.includes(id)
      ? openIds.filter((openId) => openId !== id) // close it
      : [...openIds, id] // open it, leave the others alone
  );
}

// Inside .map():
const isOpen = openIds.includes(item.id);`;

export const metadata = {
  title: "Building an accessible accordion — Anna Pawl",
  description:
    "How to build an accordion everyone can use, first in vanilla JavaScript, then in React with my own design system component as the example.",
};

export default function AccordionTutorial() {
  return (
    <main>
      <PostLayout
        descriptionTitle="Frontend fundamentals"
        description="How to build an accordion everyone can use, first in vanilla JavaScript, then in React with my design system component as the example."
        shortDescription="Building an accordion that works for everyone."
        eyebrow="Building Blocks"
        title="Accordion"
        publishedDate="Updated Oct 2026"
        readingTime="12 min read"
        postTags="Components, JavaScript, React, Accessibility,"
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
            An accordion is a stack of clickable headers that expand and collapse to show or hide the content underneath. I think of it as a set of drawers: you only open the ones you need, and the rest stay tucked away until you’re curious. It’s a tidy way to keep a page calm while still letting people dig into the details they care about.
          </p>
          <p>
            You’ve probably seen them most in FAQs, but they’re also handy for settings panels, product specs, filters in a sidebar, step-by-step instructions, or anywhere a page might turn into a wall of text. The trade-off is that hidden content is easy to miss, so accordions work best when people already know what they’re looking for.
          </p>
          <p>
            Under the hood, each header is a real <code>button</code>, which does a lot of quiet accessibiity work for free. We’ll dig into what that means, and how to make the accordion work just as well with a keyboard or screen reader, in the <TextLink href='#keyboard-and-focus'>Keyboard & focus</TextLink> section below.
          </p>
          <p>
            Now that we know what it does, let’s look at the pieces that make it work.
          </p>
        </PostSection>

        <PostSection id="anatomy" title="The anatomy">
          <p>
            An accordion begins with a container and an optional title. Inside, each item pairs a clickable header with a content panel. The header can include a number, label, and visual indicator, like a plus, minus, or chevron, that communicates whether the item is open or closed. Behind the scenes, unique IDs and ARIA attributes connect each button to the panel it controls.
          </p>
          <AccordionAnatomy />
        </PostSection>

        <PostSection id="behind-the-buttons" title="Behind the Buttons">
          <p>
            An accordion has an invisible layer of structure. Unique IDs and ARIA
            attributes connect each button/header to its panel and communicates whether the
            content is open or closed. These attributes do not create the interaction themselves. JavaScript still handles opening and closing the panel, while the ARIA values keep its state understandable to assistive technology.
          </p>
          <CodeBlock code={`<div class="accordion-item">
  <h3>
    <button aria-expanded="true" aria-controls="panel-1">
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
              <code>aria-expanded</code> sits on the button and tells assistive
              technology whether its panel is open. <code>false</code> means
              closed, <code>true</code> means open. A screen reader may announce
              something like &ldquo;Are squirrels secretly tiny gardeners?,
              button, collapsed,&rdquo; though the exact wording and order vary
              between screen readers and browsers. JavaScript updates the value every time
              the panel opens or closes. The plus-and-minus icon is only a visual
              cue; <code>aria-expanded</code> is what carries the state.
            </p>
          </PostSubsection>
          <PostSubsection title="aria-controls" variant="code">
            <p>
              <code>aria-controls</code> also sits on the button, and points to
              the panel it opens. Its value must exactly match the panel&rsquo;s{" "}
              <code>id</code>. It&rsquo;s a programmatic link more than an
              announced one, since support varies and most screen readers say
              nothing about it, but it&rsquo;s part of the recommended pattern
              and costs nothing to include.
            </p>
          </PostSubsection>
          <PostSubsection title="aria-labelledby" variant="code" tag="Optional">
            <p>
              <code>aria-labelledby</code> sits on the panel and points back to
              the button&rsquo;s <code>id</code>, so the panel takes the question
              as its name. It only works paired with{" "}
              <code>role=&quot;region&quot;</code>, which turns the open panel
              into a landmark screen-reader users can jump to. That helps with
              long panels but for short answers like these, you can skip both.
            </p>
          </PostSubsection>
        </PostSection>

        <PostSection id="vanilla-js" title="Build it in vanilla JavaScript">
          <p>
            Before any framework, here&rsquo;s the accordion in plain HTML,
            a little CSS and a few lines of JS. This little mental model/ cheat sheet helps me remember its structure and how each piece fits together.
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
              Here&rsquo;s an accordion with two items. Every button carries
              its state and target (<code>aria-expanded</code>,{" "}
              <code>aria-controls</code>), and every panel carries its identity
              and visibility (<code>id</code>, <code>hidden</code>). The button
              doesn&rsquo;t need an <code>id</code> of its own: it only needs one
              when something points back to it, like{" "}
              <code>aria-labelledby</code>. The one new piece is{" "}
              <code>hidden</code>, which hides a closed panel with no CSS needed.
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
              Just enough CSS to look like an accordion. The plus and minus come from the button’s <code>aria-expanded</code> attribute. When it’s true, the CSS swaps the plus for a minus. Since the JavaScript already updates that attribute, the icon always matches the real state, with no extra code.
            </p>
            <CodeBlock code={VANILLA_CSS} highlight={['[aria-expanded="true"]']} />
          </PostSubsection>

          <PostSubsection title="Wire it up with JavaScript">
            <p>The script follows the mental model/cheat sheet step by step:</p>
            <ol className="my-4 grid list-decimal gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
              <li>
                <strong>Select:</strong> find every accordion button on the page.
              </li>
              <li>
                <strong>Listen:</strong> run some code whenever one is clicked.
              </li>
              <li>
                <strong>Locate panel:</strong> read the button&rsquo;s{" "}
                <code>aria-controls</code> to find the panel it opens.
              </li>
              <li>
                <strong>Read state:</strong> check <code>aria-expanded</code> to
                see whether it&rsquo;s open right now. Attributes are always
                text, so we compare against the string <code>&quot;true&quot;</code>.
              </li>
              <li>
                <strong>Update both:</strong> set <code>aria-expanded</code> to the
                opposite, and hide or show the panel to match. If it was open,{" "}
                <code>hidden</code> becomes <code>true</code>. If it was closed,{" "}
                <code>hidden</code> becomes <code>false</code>.
              </li>
            </ol>
            <p>That&rsquo;s the whole script:</p>
            <CodeBlock code={VANILLA_JS} />
          </PostSubsection>

          <PostSubsection title="Keep ARIA in sync">
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
              In the example above, several items can be open at once. Many
              accordions, especially FAQs, keep just one open at a time instead,
              so the page stays short and focused. To do that, close all the
              others first, then open or close the one that was clicked. A small{" "}
              <code>setOpen</code> helper updates a button and its panel
              together, so they always change as a pair.
            </p>
            <CodeBlock code={VANILLA_SINGLE_OPEN} highlight={["setOpen(other, false)"]} />
          </PostSubsection>
        </PostSection>

        <PostSection id="keyboard-and-focus" title="Keyboard and focus">
          <p>
            Because each header is a real <code>&lt;button&gt;</code>, Tab,
            Enter and Space already work, with no extra code (see{" "}
            <TextLink href="#behind-the-buttons">Behind the Buttons</TextLink>).
            This section covers what happens next: moving between headers,
            seeing where you are, and making sure focus never lands somewhere
            it shouldn&rsquo;t.
          </p>

          <PostSubsection title="Arrow keys, Home and End" tag="Optional">
            <p>
              The WAI-ARIA accordion pattern suggests a few shortcuts on top of
              Tab: Up and Down move between headers, and Home and End jump to
              the first and last. They&rsquo;re a nice touch for long
              accordions. A single listener on the whole accordion handles
              them, so it works for any number of items.
            </p>
            <CodeBlock code={KEYBOARD_JS} highlight={["event.preventDefault()", "buttons[next].focus()"]} />
            <p>
              <code>preventDefault()</code> matters here because without it, the arrow
              keys would also scroll the page.
            </p>
          </PostSubsection>

          <PostSubsection title="Make focus visible">
            <p>
              The CSS earlier resets the button&rsquo;s border and background.
              It&rsquo;s tempting to remove the outline too, but that&rsquo;s
              how keyboard users see where they are. Style it instead.{" "}
              <code>:focus-visible</code> shows the outline when someone
              tabs to a button, but not when they click it with a mouse.
            </p>
            <CodeBlock code={FOCUS_CSS} highlight={[":focus-visible"]} />
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
              animation. Switching takes three changes:
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
                <strong>Script:</strong> swap <code>panel.hidden = isOpen</code>{" "}
                for <code>panel.inert = isOpen</code>.
              </li>
              <li>
                <strong>CSS:</strong> open the panel whenever its button says{" "}
                <code>aria-expanded=&quot;true&quot;</code>.
              </li>
            </ol>
            <CodeBlock code={ANIMATED_MARKUP} highlight={["inert"]} />
            <CodeBlock code={ANIMATED_CSS} highlight={[':has([aria-expanded="true"])']} />
          </PostSubsection>

          <PostSubsection title="Leave focus where it is">
            <p>
              After someone opens an item, keep focus on its button. It can be
              tempting to move focus into the panel, but that pulls keyboard and
              screen-reader users somewhere they didn&rsquo;t ask to go. From
              the button, they can keep reading into the panel when they&rsquo;re
              ready, or close it again with Enter or Space.
            </p>
          </PostSubsection>
        </PostSection>

        <PostSection id="react" title="Rebuild it in React">
          <p>
            Same accordion, same mental model, now as a React component. The
            big change is where the truth lives. In the vanilla version, the
            script read <code>aria-expanded</code> straight from the page and
            wrote it back. In React, the open item lives in state, and the
            attributes are drawn from that state every time the component
            renders. You never call <code>setAttribute</code>, and ARIA
            can&rsquo;t fall out of sync.
          </p>
          <Callout eyebrow="Vanilla to React" className="mt-6">
            <ul className="m-0 grid list-none gap-2 p-0">
              <li>
                <strong className="mr-2">Select</strong>
                <code>items.map()</code> renders every button
              </li>
              <li>
                <strong className="mr-2">Listen</strong>
                <code>onClick</code> on each button
              </li>
              <li>
                <strong className="mr-2">Locate panel</strong>
                the panel&rsquo;s id is built from the item
              </li>
              <li>
                <strong className="mr-2">Read state</strong>
                <code>openId === item.id</code>
              </li>
              <li>
                <strong className="mr-2">Update both</strong>
                <code>setOpenId()</code>, and React redraws the attributes
              </li>
            </ul>
          </Callout>

          <PostSubsection title="Start with the data">
            <p>
              Instead of writing each item by hand, keep the questions and
              answers in an array. Each item gets a short, stable{" "}
              <code>id</code>, which React uses to tell items apart and which
              we&rsquo;ll use to connect each button to its panel.
            </p>
            <CodeBlock code={REACT_DATA} />
          </PostSubsection>

          <PostSubsection title="Choosing the state">
            <p>
              The only thing that changes is which item is open, so that&rsquo;s
              all we store: one <code>openId</code>, or <code>null</code> when
              everything is closed. Storing a single id also gives us
              single-open behavior for free, because only one id fits.
            </p>
            <CodeBlock code={REACT_STATE} highlight={["setOpenId(openId === id ? null : id)"]} />
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

          <PostSubsection title="Unique ids">
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
            and a browser cover all of it. Run through these once you&rsquo;ve
            built it:
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
              that it&rsquo;s a button, and that it&rsquo;s collapsed (the exact
              wording varies). Press Space and it should tell you it&rsquo;s now
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
              <strong>Turn on reduced motion.</strong> In System Settings
              &rarr; Accessibility &rarr; Display, switch on Reduce motion. Items
              should open and close without animating.
            </li>
            <li>
              <strong>Run an automated check.</strong> In Chrome, open DevTools,
              go to the Lighthouse tab and run an Accessibility audit, or try the
              free axe DevTools extension. They catch missing labels and low
              contrast in seconds, but not whether it feels right to use, so do
              the manual checks too.
            </li>
          </ol>
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>
            An accordion looks simple, but most of it is invisible: a real
            button inside a heading, one attribute that keeps everything in
            sync, and panels that stay out of reach until they&rsquo;re open.
            Get those right and it works for everyone, whether they use a mouse,
            a keyboard or a screen reader.
          </p>
          <p>Want to go deeper? These are the references I lean on most:</p>
          <ul className="my-4 grid list-disc gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
            <li>
              <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">
                WAI-ARIA accordion pattern
              </TextLink>
              , the full spec, including keyboard support.
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
            More Building Blocks are on the way. 🌱
          </p>
        </PostSection>
      </PostLayout>
    </main>
  );
}
