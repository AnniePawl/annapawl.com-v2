import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import CodeBlock from "@/src/components/ui/CodeBlock";
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

export const metadata = {
  title: "Building a live search in React — Anna Pawl",
  description:
    "A behind-the-scenes look at a simple live search in React: how it filters as you type, plus a few small touches that make it accessible.",
};

export default function LiveSearchTutorial() {
  return (
    <main>
      <PostLayout
        descriptionTitle="Frontend fundamentals"
        description="A behind-the-scenes look at a simple live search in React: how it filters as you type, plus a few small touches that make it accessible."
        shortDescription="A behind-the-scenes look at a simple live search in React."
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
          { id: "anatomy", label: "The anatomy", tone: "coral-bold" },
          { id: "build-it", label: "Build it in React", tone: "sky-bold" },
          { id: "make-it-accessible", label: "Make it accessible", tone: "lilac-bold" },
          { id: "test-it", label: "Test it", tone: "marigold-bold" },
          { id: "keep-going", label: "Keep going", tone: "plum-bold" },
        ]}
      >
        <PostSection id="what-is-live-search" title="What is a live search?">
          <p>
            A live search updates the results as you type, without waiting for you to hit submit. Try the super simple, interactive example below, then we’ll build it piece by piece so you can see what’s happening behind the scenes. Understanding these fundamentals is a great starting point for fancier features, like highlighting the matching text and keyboard-friendly suggestions.
          </p>
          <SearchSample />
          <p className="ls-hint">Try typing “blue” or “orange”.</p>
        </PostSection>

        <PostSection id="anatomy" title="The anatomy">
          <p>
            The filter itself is just an input and a list. A few small details
            help people know what to search, what changed, and when nothing
            matches.
          </p>
          <SearchAnatomy />
        </PostSection>

        <PostSection id="build-it" title="Build it in React">
          <PostSubsection title="Start with the data">
            <p>TODO: a small list to search through.</p>
            <CodeBlock code={DATA} />
          </PostSubsection>

          <PostSubsection title="Keep the query in state">
            <p>TODO: a controlled input. The query lives in state.</p>
          </PostSubsection>

          <PostSubsection title="Work out the results">
            <p>
              TODO: filter during render instead of storing the results in
              their own state.
            </p>
          </PostSubsection>

          <PostSubsection title="Match loosely">
            <p>TODO: lowercase both sides, trim, and pick which fields count.</p>
          </PostSubsection>

          <PostSubsection title="Render the list">
            <p>TODO: map() with a stable key.</p>
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
