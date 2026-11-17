import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import CodeBlock from "@/src/components/ui/CodeBlock";
import Callout from "../../components/ui/Callout";
import SearchSample from "./_components/SearchSample";
import SearchAnatomy from "./_components/SearchAnatomy";

const DATA = `const COLORS = [
  "turquoise",
  "blueviolet",
  "hotpink",
  "darkorange",
  "deepskyblue",
  "deeppink",
  "dodgerblue",
  "chartreuse",
  "gold",
  "orangered",
  "magenta",
  "springgreen",
];`

const STATE = `const [searchTerm, setSearchTerm] = useState("");

<input
  type="search"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>`;

const RESULTS = `const filteredColors = COLORS.filter((color) =>
  color.includes(searchTerm)
);`;

const LOOSE = `const query = searchTerm.trim().toLowerCase();

const filteredColors = COLORS.filter((color) =>
  color.includes(query)
);`;

const LIST = `<ul>
  {filteredColors.map((color) => (
    <li key={color}>
      <span className="swatch" style={{ background: color }} />
      {color}
    </li>
  ))}
</ul>`;

const TOGETHER = `import { useState } from "react";

export default function ColorSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const query = searchTerm.trim().toLowerCase();
  const filteredColors = COLORS.filter((color) => color.includes(query));

  return (
    <>
      <input
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredColors.map((color) => (
          <li key={color}>
            <span className="swatch" style={{ background: color }} />
            {color}
          </li>
        ))}
      </ul>
    </>
  );
}`;

export const metadata = {
  title: "Building a live search in React — Anna Pawl",
  description:
    "How a simple live search in React works, from filtering as you type to the small touches that make it accessible.",
};

export default function LiveSearchTutorial() {
  return (
    <main>
      <PostLayout
        descriptionTitle="Frontend fundamentals"
        description="How a simple live search in React works, from filtering as you type to the small touches that make it accessible."
        shortDescription="How a simple live search in React works."
        eyebrow="Building Blocks"
        title="Live Search"
        lede={
          <>
            One input, one list.{" "}
            <span className="post-header-lede-muted">
              A little search to build on.
            </span>
          </>
        }
        publishedDate="Updated Nov 2026"
        readingTime="TODO min read"
        postTags="Components, React, Accessibility"
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--marigold-bold)",
              southeast: "var(--sky-bold)",
              southwest: "var(--sky-bold)",
              northwest: "var(--sky-bold)",
              hoverAccent: "var(--sky-bold)",
            }}
            size="1.75rem"
          />
        }
        accent="var(--sky-bold)"
        contents={[
          { id: "what-is-live-search", label: "What is a live search?", tone: "pink-bold" },
          { id: "anatomy", label: "The anatomy", tone: "sky-bold" },
          { id: "build-it", label: "Build it in React", tone: "marigold-bold" },
          { id: "make-it-accessible", label: "Make it accessible", tone: "lilac-bold" },
          { id: "test-it", label: "Test it", tone: "green-bold" },
          { id: "keep-going", label: "Keep going", tone: "red-bold" },
        ]}
      >
        <PostSection id="what-is-live-search" title="What is a live search?">
          <p>
            A live search updates the results as you type, without waiting for you to hit submit. Try the super simple, interactive example below, then we’ll build it piece by piece so you can see what’s happening behind the UI. Understanding these fundamentals is a great starting point for fancier features, like highlighting the matching text and keyboard-friendly suggestions.
          </p>
          <SearchSample />
          <p className="ls-hint">Try typing “blue” or “orange”.</p>
        </PostSection>

        <PostSection id="anatomy" title="The anatomy">
          <p>
            At its simplest, live search is an input and a list that updates as you type. A label, a results count, and a helpful empty state make it clear what to search, how many matches remain, and when to try something else.
          </p>
          <SearchAnatomy />
        </PostSection>

        <PostSection id="build-it" title="Build it in React">
          <p>
            Let’s start with the bare bones: a list, an input, and a filter. We’ll build it up one small piece at a time, then add the accessibility touches once the search is working.
          </p>

          <PostSubsection title="Start with the data">
            <p>
              Every search needs something to search through. In a real app,
              this might be products, contacts, or notes, probably fetched from
              somewhere and stored as objects with an id, a name, and more.
              Here, we’ll keep it simple with an array of strings: a few of
              CSS’s built-in named colors.
            </p>
            <CodeBlock code={DATA} />
          </PostSubsection>

          <PostSubsection title="Keep the query in state">
            <p>
              The only thing React needs to remember is what you’ve typed into the search field. That
              goes in <b>state</b>: a value React remembers between renders,
              where changing it redraws the component. The search term starts
              as an empty string.
            </p>
            <CodeBlock code={STATE} highlight={["value={searchTerm}", "setSearchTerm(e.target.value)"]} />
            <p>
              This is a <b>controlled input</b>: <code>value</code> tells the
              input what to show, and <code>onChange</code> updates state with
              every keystroke. <code>e.target.value</code> is whatever’s in the
              input right now.
            </p>
            <p>
              Each keystroke updates <code>searchTerm</code> and re-renders the
              component, so the list can update right away. That re-render is
              what makes the search feel live.
            </p>
            <p>
              New to <code>useState</code> or controlled inputs? I keep quick
              refreshers in my Field Notes:{" "}
              <TextLink href="/field-notes#usestate">useState</TextLink> and{" "}
              <TextLink href="/field-notes#controlled-inputs">controlled inputs</TextLink>.
            </p>
          </PostSubsection>

          <PostSubsection title="Work out the results">
            <p>
              Next we need to filter the color list using what’s been typed into the input. We don’t need to store the results in state because we can work them out from{" "}
              <code>searchTerm</code> on every render with <code>filter()</code>.
            </p>
            <CodeBlock code={RESULTS} highlight={["color.includes(searchTerm)"]} />
            <Callout eyebrow="Good to know" tone="marigold" className="my-6 max-w-none">
              When the input is empty, <code>includes(&quot;&quot;)</code> is
              true for every color! So clearing the input brings the whole list
              back. No extra code needed.
            </Callout>
          </PostSubsection>

          <PostSubsection title="Match loosely">
            <p>
              Right now, “Blue” finds nothing. Neither does “ blue” because of the sneaky space in front. As someone whose typing could use a little grace, let’s return the favor. Trim the spaces from either end and convert the query to lowercase to make the search more forgiving.
            </p>
            <p>
              My color names are already lowercase, so I only need to tidy up
              the query. With mixed-case data, like product names, you’d
              lowercase both sides: <code>name.toLowerCase().includes(query)</code>.
            </p>
            <CodeBlock code={LOOSE} highlight={["searchTerm.trim().toLowerCase()"]} />

          </PostSubsection>

          <PostSubsection title="Show the results">
            <p>
              Last step! We’ve narrowed down the list with <code>filter()</code>,
              and now <code>map()</code> turns those matches into list items.
              Each item needs a <code>key</code> so React can keep track of it
              as the list shrinks and grows. Our color names are unique, so they
              make perfect keys. For something like products or contacts, we’d
              usually use each item’s ID.
            </p>
            <CodeBlock code={LIST} highlight={["key={color}", "style={{ background: color }}"]} />
            <p>
              I also added little color swatches to jazz things up. They’re a
              fun freebie: each name is already a valid CSS color, so it can
              paint its own little square.
            </p>
          </PostSubsection>

          <PostSubsection title="Put it together">
            <p>
              Here’s the whole thing. It works! You can type, and the list
              filters as you go. But it’s not quite finished: there’s no label,
              nothing tells screen reader users that the results changed, and
              searching for “blurple” leaves an awkward empty space. Let’s fix
              those next.
            </p>
            <CodeBlock code={TOGETHER} />
          </PostSubsection>
        </PostSection>

        <PostSection id="make-it-accessible" title="Make it accessible">
          <PostSubsection title="Give it a real label">
            <p>TODO: label + htmlFor (useId), and why a placeholder isn’t enough.</p>
          </PostSubsection>

          <PostSubsection title='Use type="search"'>
            <p>TODO: the clear button, Escape to clear, and the search key on phones.</p>
          </PostSubsection>

          <PostSubsection title="Announce the results">
            <p>TODO: a polite live region with the results count.</p>
          </PostSubsection>

          <PostSubsection title="Say when nothing matches">
            <p>TODO: a friendly empty state.</p>
          </PostSubsection>

          <PostSubsection title="Leave focus alone">
            <p>TODO: focus stays in the input while the list updates.</p>
          </PostSubsection>
        </PostSection>

        <PostSection id="test-it" title="Test it">
          <p>TODO: try it with a keyboard and a screen reader.</p>
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>
            TODO: ideas to build on. Highlight the matching text, wait until
            typing pauses (debounce), save the query in the URL, or turn it into
            a suggestions dropdown (combobox).
          </p>
          <ul>
            <li>
              <TextLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions">
                ARIA live regions on MDN
              </TextLink>
              , TODO: one-line note.
            </li>
          </ul>
          <p>More Building Blocks are on the way. 🌱</p>
        </PostSection>
      </PostLayout>
    </main>
  );
}
