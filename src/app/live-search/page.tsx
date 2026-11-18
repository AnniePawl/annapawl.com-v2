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

const LABEL_SIMPLE = `<label htmlFor="color-search">Search colors</label>
<input id="color-search" type="search" />`;

const LABEL = `const searchId = useId();

<label htmlFor={searchId}>Search colors</label>
<input
  id={searchId}
  type="search"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>`;

const ANNOUNCE = `const count = filteredColors.length;

<p aria-live="polite">
  {count} {count === 1 ? "color" : "colors"}
</p>`;

const EMPTY_STATE = `{count > 0 ? (
  <ul>{/* the list from before */}</ul>
) : (
  <p>No colors called “{searchTerm}”… yet.</p>
)}`;

const ACCESSIBLE = `import { useId, useState } from "react";

export default function ColorSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchId = useId();

  const query = searchTerm.trim().toLowerCase();
  const filteredColors = COLORS.filter((color) => color.includes(query));
  const count = filteredColors.length;

  return (
    <>
      <label htmlFor={searchId}>Search colors</label>
      <input
        id={searchId}
        type="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p aria-live="polite">
        {count} {count === 1 ? "color" : "colors"}
      </p>
      {count > 0 ? (
        <ul>
          {filteredColors.map((color) => (
            <li key={color}>
              <span className="swatch" style={{ background: color }} />
              {color}
            </li>
          ))}
        </ul>
      ) : (
        <p>No colors called “{searchTerm}”… yet.</p>
      )}
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
        title={
          <>
            Live <br className="ls-phone-break" />
            Search
          </>
        }
        lede={
          <>
            One input, one list. <br className="ls-phone-break" />
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
            <p>
              <code>filter()</code> goes through the list and keeps only the
              colors where the check returns true. Here, the check is{" "}
              <code>includes()</code>, which asks: does this color name contain
              what was typed?
            </p>
            <p>
              New to these? My Field Notes have quick refreshers on{" "}
              <TextLink href="/field-notes#map-filter-find">map / filter / find</TextLink>{" "}
              and <TextLink href="/field-notes#includes">includes()</TextLink>.
            </p>
            <Callout eyebrow="Good to know" tone="marigold" className="my-6 max-w-none">
              When the input is empty, <code>includes(&quot;&quot;)</code> is
              true for every color! So clearing the input brings the whole list
              back. No extra code needed.
            </Callout>
          </PostSubsection>

          <PostSubsection title="Match loosely">
            <p>
              Right now, “Blue” finds nothing. Neither does “ blue” because of
              the sneaky space in front. That’s because <code>includes()</code>{" "}
              matches characters exactly: a capital “B” isn’t the same as a
              lowercase “b”, and no color name has a space in it.
            </p>
            <p>
              As someone whose typing could use a little grace, let’s return the
              favor. Trimming the spaces from either end and converting the
              query to lowercase makes the search more forgiving.
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
          <p>
            Our search works! Let’s fill in a few gaps to make sure it’s more
            accessible: give the input a label, announce the results, and show
            a helpful message when nothing matches. None of these take much code, but each makes it easier to
            understand what to search, what changed, and what to try next.
          </p>

          <PostSubsection title="Give it a label">
            <p>
              Let’s tell people what they’re searching. A proper{" "}
              <code>&lt;label&gt;</code> stays put while you type, and it gives
              the input a name that screen readers can announce. A placeholder
              can offer a hint, but it disappears as soon as you start typing,
              so it can’t do the label’s job.
            </p>
            <p>
              The label and input need to be connected, so the browser knows
              they belong together. The label’s <code>htmlFor</code> points to
              the input’s <code>id</code>:
            </p>
            <CodeBlock code={LABEL_SIMPLE} highlight={['htmlFor="color-search"', 'id="color-search"']} />
            <p>
              Now screen readers announce “Search colors” when the input is
              focused, and clicking the label focuses the input too.{" "}
              <code>htmlFor</code> is React’s name for HTML’s <code>for</code>{" "}
              attribute, since <code>for</code> already means something in
              JavaScript.
            </p>
            <p>
              One catch: an <code>id</code> has to be unique on the page. If
              this search ever shows up twice, both inputs would get{" "}
              <code>color-search</code>, and each label could end up pointing
              at the wrong one. React’s <code>useId()</code> fixes that by
              making a unique ID for every copy of the component:
            </p>
            <CodeBlock code={LABEL} highlight={["useId()", "htmlFor={searchId}", "id={searchId}"]} />
            <p>
              Just remember to import <code>useId</code> from{" "}
              <code>&quot;react&quot;</code>, like <code>useState</code>. More
              on it in my{" "}
              <TextLink href="/field-notes#useid">useId field note</TextLink>.
            </p>
            <p>
              A visible label is usually best, but if you want to tuck it away,
              an{" "}
              <TextLink href="/field-notes#sr-only"><code>sr-only</code></TextLink>{" "}
              (screen reader only) class hides it
              visually while keeping it available to screen readers. That’s
              what my demo at the top does; the anatomy example leaves it
              visible.
            </p>
          </PostSubsection>

          <PostSubsection title='Use type="search"'>
            <p>
              You may have noticed <code>type=&quot;search&quot;</code> in the
              input from the start. It’s a tiny change that comes with a few
              freebies: some browsers add a clear button, Escape clears the
              field, and phones show a search key on the keyboard. Screen
              readers also announce it as a search field.
            </p>
          </PostSubsection>

          <PostSubsection title="Announce the results">
            <p>
              When you type, the list shrinks right away. That’s obvious if you
              can see it, but a screen reader user hears nothing. A{" "}
              <b>live region</b> gives them a little heads-up: as the number of
              matches changes, screen readers can announce the updated count.
            </p>
            <CodeBlock code={ANNOUNCE} highlight={['aria-live="polite"']} />
            <p>
              <code>polite</code> tells the screen reader to wait its turn. As
              you type, it’s already reading back each letter, so it finishes
              that first and then announces the count. The count helps everyone
              else too, as a quick “how many are left?”
            </p>
          </PostSubsection>

          <PostSubsection title="Say when nothing matches">
            <p>
              Search for “blurple” and the list just disappears. Is it broken?
              Still loading? An empty state answers that, and nudges people to
              try something else.
            </p>
            <CodeBlock code={EMPTY_STATE} highlight={["count > 0"]} />
            <p>
              Screen reader users already hear “0 colors” from the live region,
              so this one is mostly for sighted users. Using their search term
              in the message shows the search worked, there just wasn’t a match.
            </p>
          </PostSubsection>

          <PostSubsection title="Put it all together">
            <p>
              Here’s the finished search: a label, a live count, and an empty
              state, on top of the search we built before. It’s the same one
              as the demo at the top, minus my styling.
            </p>
            <CodeBlock code={ACCESSIBLE} />
          </PostSubsection>
        </PostSection>

        <PostSection id="test-it" title="Test it">
          <p>
            Let’s check how our search behaves beyond the mouse. The exact
            wording you hear will vary by browser and screen reader, but the
            gist should match.
          </p>

          <PostSubsection title="With a keyboard">
            <ol className="my-4 grid list-decimal gap-3 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
              <li>
                Press <kbd>Tab</kbd> to move into the search.
              </li>
              <li>
                Type a search. The results should update while the cursor stays
                put.
              </li>
              <li>
                Press <kbd>Esc</kbd> to clear it, and the whole list comes back.
              </li>
            </ol>
          </PostSubsection>

          <PostSubsection title="With a screen reader">
            <p>
              On a Mac, turn on VoiceOver with <kbd>⌘</kbd> + <kbd>F5</kbd> (you
              may also need <kbd>Fn</kbd>).
            </p>
            <ol className="my-4 grid list-decimal gap-3 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
              <li>
                <kbd>Tab</kbd> to the search. You should hear its label,
                “Search colors”.
              </li>
              <li>
                Type <code>blue</code>. Listen for the updated count.
              </li>
              <li>
                Try <code>blurple</code>. You should hear zero results, and see
                the empty message on screen.
              </li>
            </ol>
          </PostSubsection>
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>
            One input, one bit of state, and a list that follows along. Add a label, a results count, and a helpful empty message, and we’ve got a little search to build on.
          </p>
          <p>A few ideas to build on next (some of these are coming in a follow-up post):</p>
          <ul className="my-4 grid list-disc gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
            <li>
              <b>Highlight the match.</b> Wrap the matching part of each name in
              a <code>&lt;mark&gt;</code> so it’s easy to spot.
            </li>
            <li>
              <b>Search more fields.</b> Try a list of products and match against names, categories, or tags.
            </li>
            <li>
              <b>Keyboard-friendly suggestions.</b> A dropdown of suggestions
              under the input, with arrow keys to move through them. That’s a
              combobox, and it’s a bigger build.
            </li>
          </ul>
          <p>Want to go deeper? These are the references I lean on:</p>
          <ul className="my-4 grid list-disc gap-2 pl-5 text-[length:var(--text-md)] leading-[var(--leading-relaxed)]">
            <li>
              <TextLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions">
                ARIA live regions on MDN
              </TextLink>
              , for how and when screen readers announce changes.
            </li>
            <li>
              <TextLink href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/search">
                input type=&quot;search&quot; on MDN
              </TextLink>
              , for everything the search field gives you for free.
            </li>
            <li>
              <TextLink href="https://react.dev/reference/react/useId">useId in the React docs</TextLink>
              , for connecting labels and inputs.
            </li>
          </ul>
          <p>
           Check out the Forms
            section of my{" "}
            <TextLink href="/sedge-design-system#forms">Sedge design system</TextLink>.
          </p>
          <p>More Building Blocks are on the way. 🌱</p>
        </PostSection>
      </PostLayout>
    </main>
  );
}
