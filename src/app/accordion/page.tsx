import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";

export const metadata = {
  title: "Building an accessible accordion — Anna Pawl",
  description:
    "How to build an accordion everyone can use, first in vanilla JavaScript, then in React with my own design system component as the example.",
};

// Draft scaffold. Each section lists what it will cover; replace the
// notes with real copy, code blocks and demos as the tutorial comes together.
export default function AccordionTutorial() {
  return (
    <main>
      <PostLayout
        descriptionTitle="Frontend fundamentals"
        description="How to build an accordion everyone can use, first in vanilla JavaScript, then in React with my own design system component as the example."
        shortDescription="Building an accordion that works for everyone."
        eyebrow="Building Blocks"
        title="Accessible Accordion"
        publishedDate="Draft"
        readingTime="TBD"
        postTags="Accessibility, JavaScript, React"
        utilityStart={
          <HomeLogo
            colors={{
              northeast: "var(--marigold-bold)",
              southeast: "var(--teal-bold)",
              southwest: "var(--teal-bold)",
              northwest: "var(--teal-bold)",
              hoverAccent: "var(--marigold-bold)",
            }}
            size="1.75rem"
          />
        }
        accent="var(--teal-bold)"
        contents={[
          { id: "what-is-an-accordion", label: "What is an accordion?", tone: "teal-bold" },
          { id: "anatomy", label: "The anatomy", tone: "sky-bold" },
          { id: "vanilla-js", label: "Build it in vanilla JavaScript", tone: "marigold-bold" },
          { id: "keyboard-and-focus", label: "Keyboard and focus", tone: "coral-bold" },
          { id: "react", label: "Rebuild it in React", tone: "iris-bold" },
          { id: "my-accordion", label: "My Sedge accordion", tone: "green-bold" },
          { id: "test-it", label: "Test it", tone: "pink-bold" },
          { id: "keep-going", label: "Keep going", tone: "plum-bold" },
        ]}
      >
        <PostSection id="what-is-an-accordion" title="What is an accordion?">
          <p>
            Draft notes: what an accordion is (stacked headings that show or hide
            their content), when it helps (FAQs, long reference pages, settings),
            and when it doesn&rsquo;t (content most people need to read, or only
            two or three short sections). Mention that it comes up a lot in
            frontend interviews.
          </p>
        </PostSection>

        <PostSection id="anatomy" title="The anatomy">
          <p>
            Draft notes: break one item into its parts before writing any code.
          </p>
          <PostSubsection title="Heading and button">
            <p>Draft notes: why the trigger is a real button, and why it sits inside a heading.</p>
          </PostSubsection>
          <PostSubsection title="aria-expanded" variant="code">
            <p>Draft notes: how it tells screen readers whether a section is open.</p>
          </PostSubsection>
          <PostSubsection title="aria-controls" variant="code">
            <p>Draft notes: connecting each button to its panel, and keeping ids unique.</p>
          </PostSubsection>
          <PostSubsection title="The panel">
            <p>Draft notes: hiding closed content so it can&rsquo;t be read or tabbed into.</p>
          </PostSubsection>
        </PostSection>

        <PostSection id="vanilla-js" title="Build it in vanilla JavaScript">
          <p>
            Draft notes: build the basics with no framework, step by step.
          </p>
          <PostSubsection title="Start with the markup">
            <p>Draft notes: the HTML for one item, then the full list.</p>
          </PostSubsection>
          <PostSubsection title="Toggle a section">
            <p>Draft notes: one click listener (event delegation) that flips the state.</p>
          </PostSubsection>
          <PostSubsection title="Keep ARIA in sync">
            <p>Draft notes: update aria-expanded and the panel together, every time.</p>
          </PostSubsection>
        </PostSection>

        <PostSection id="keyboard-and-focus" title="Keyboard and focus">
          <p>
            Draft notes: what you get for free from a button (Tab, Enter, Space),
            the optional arrow keys plus Home and End, and making sure links inside
            a closed section can&rsquo;t be reached with Tab.
          </p>
        </PostSection>

        <PostSection id="react" title="Rebuild it in React">
          <p>
            Draft notes: the same accordion as a component.
          </p>
          <PostSubsection title="Choosing the state">
            <p>Draft notes: a set of open ids vs a single id, and why the choice matters for follow-ups.</p>
          </PostSubsection>
          <PostSubsection title="Unique ids">
            <p>Draft notes: useId, so two accordions on one page never clash.</p>
          </PostSubsection>
          <PostSubsection title="Single or multiple open">
            <p>Draft notes: adding a prop without a rewrite.</p>
          </PostSubsection>
        </PostSection>

        <PostSection id="my-accordion" title="My Sedge accordion">
          <p>
            Draft notes: walk through the accordion in my design system, the
            design choices (markers, hairline rules, the plus/minus), what I
            changed after rebuilding it under interview conditions, and a live demo.
          </p>
        </PostSection>

        <PostSection id="test-it" title="Test it">
          <p>
            Draft notes: a quick checklist. Keyboard only, VoiceOver, zoom to 200%,
            reduced motion, and two accordions on the same page.
          </p>
        </PostSection>

        <PostSection id="keep-going" title="Keep going">
          <p>
            Draft notes: further reading, starting with the{" "}
            <TextLink href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/">
              WAI-ARIA accordion pattern
            </TextLink>
            , plus the other interview components coming next.
          </p>
        </PostSection>
      </PostLayout>
    </main>
  );
}
