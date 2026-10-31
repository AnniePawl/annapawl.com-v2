import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../components/layout/PostLayout/PostLayout";
import HomeLogo from "../../components/ui/HomeLogo";
import TextLink from "../../components/ui/TextLink";
import AccordionAnatomy from "./_components/anatomy/AccordionAnatomy";

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
        description="How to build an accordion everyone can use, first in vanilla JavaScript, then in React with my own design system component as the example."
        shortDescription="Building an accordion that works for everyone."
        eyebrow="Building Blocks"
        title="Accordion"
        publishedDate="Updated Oct 2026"
        readingTime="TBD"
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
          { id: "what-is-an-accordion", label: "What is an accordion?", tone: "sky-bold" },
          { id: "anatomy", label: "The anatomy", tone: "coral-bold" },
          { id: "vanilla-js", label: "Build it in vanilla JavaScript", tone: "teal-bold" },
          { id: "keyboard-and-focus", label: "Keyboard and focus", tone: "marigold-bold" },
          { id: "react", label: "Rebuild it in React", tone: "iris-bold" },
          { id: "my-accordion", label: "My Sedge accordion", tone: "green-bold" },
          { id: "test-it", label: "Test it", tone: "pink-bold" },
          { id: "keep-going", label: "Keep going", tone: "plum-bold" },
        ]}
      >
        <PostSection id="what-is-an-accordion" title="What is an accordion?">
          <p>
            An accordion is a stack of clickable headers that expand and collapse to show or hide the content underneath. I think of it as a set of drawers: you only open the ones you need, and the rest stay tucked away until you’re curious. It’s a tidy way to keep a page calm while still letting people dig into the details they care about.
          </p>
          <p>
            You’ve probably seen them most in FAQs, but they’re also handy for settings panels, product specs, filters in a sidebar, step-by-step instructions, or anywhere a page might otherwise turn into a wall of text. The trade-off is that hidden content is easy to miss, so accordions work best when people already know what they’re looking for.
          </p>
          <p>
            Under the hood, each header is a real <code>button</code>, which does a lot of quiet accessibiity work for free. We’ll dig into what that means, and how to make the accordion work just as well with a keyboard or screen reader, in the Keyboard & focus section below.
          </p>
          <p>
            Now that we know what it does, let’s look at the pieces that make it work.
          </p>
        </PostSection>

        <PostSection id="anatomy" title="The anatomy">
          <p>
            An accordion begins with a container and an optional title. Inside, each item pairs a clickable header with a content panel. The header can include a number, label, and visual indicator, such as a plus, minus, or chevron, that communicates whether the item is open or closed. In this design, a colored divider adds visual separation when the panel opens. Behind the scenes, unique IDs and ARIA attributes connect each button to the panel it controls.
          </p>
          <AccordionAnatomy />
          <p>
            Draft notes: break one item into its parts before writing any code.
          </p>
          <PostSubsection title="aria-expanded" variant="code">
            <p>Draft notes: how it tells screen readers whether a section is open.</p>
          </PostSubsection>
          <PostSubsection title="aria-controls" variant="code">
            <p>Draft notes: connecting each button to its panel, and keeping ids unique.</p>
          </PostSubsection>
          <PostSubsection title="aria-labelledby" variant="code">
            <p>Draft notes: pointing each panel back at its button, so screen readers announce which question the panel answers.</p>
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
