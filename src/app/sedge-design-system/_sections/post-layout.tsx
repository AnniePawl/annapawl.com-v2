import PostLayout, {
  PostSection,
} from "../../../components/layout/PostLayout/PostLayout";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "post-layout")!;

const USAGE = `<PostLayout
  descriptionTitle="The Bookshelf"
  backLabel="← All notes"
  eyebrow="Notes, CSS art"
  title="Drawing with Code"
  description="A record of what I’ve read and what stayed with me."
  publishedDate="Oct 3, 2026"
  readingTime="4 min read"
  postTags="CSS, Illustration, Front-end"
  accent="var(--indigo-bold)"
  contents={[
    { id: "what-is-it", label: "What is drawing with code?", tone: "red-bold" },
    { id: "the-div", label: "It’s all about the <div>", tone: "indigo-bold" },
  ]}
>
  <p>CSS art lies at the intersection of vector illustration and front-end development.</p>
  <PostSection id="what-is-it" title="What is drawing with code?">
    <p>Post copy...</p>
  </PostSection>
</PostLayout>`;

export default function PostLayoutSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="The complete structure for long-form posts."
      description="It keeps the post header, publishing details, contents rail, reading column, and colored section markers together so they cannot be assembled in mismatched combinations."
    >
      <div className="pattern-preview pattern-preview--post">
        <PostLayout
          descriptionTitle="The Bookshelf"
          backLabel="← All notes"
          eyebrow="Notes, CSS art"
          title="Drawing with Code"
          description="A record of what I’ve read, what stayed with me, and what I’d happily press into someone else’s hands."
          publishedDate="Oct 3, 2026"
          readingTime="4 min read"
          postTags="CSS, Illustration, Front-end"
          accent="var(--indigo-bold)"
          headingLevel={3}
          contents={[
            {
              id: "what-is-it",
              label: "What is drawing with code?",
              tone: "red-bold",
            },
            {
              id: "the-div",
              label: "It’s all about the <div>",
              tone: "indigo-bold",
            },
            {
              id: "recap",
              label: "CSS, a little recap",
              tone: "lilac-soft",
            },
            {
              id: "toolkit",
              label: "Beginner’s CSS toolkit",
              tone: "emerald-bold",
            },
            { id: "try-it", label: "Try it out", tone: "amber-bold" },
          ]}
        >
          <p>
            CSS art lies at the intersection of vector illustration and
            front-end development. It involves manipulating &lt;div&gt; HTML
            elements with CSS to render shapes in the browser.
          </p>
          <PostSection
            id="what-is-it"
            title="What is drawing with code?"
          >
            <p>
              These shapes are customized by assigning values to properties
              like height, border-radius, box-shadow, and background-color.
            </p>
          </PostSection>
          <PostSection
            id="the-div"
            title="It’s all about the <div>"
          >
            <p>
              The &lt;div&gt; element is the building block of every pure CSS
              composition. A div is simply an empty container used to house
              other elements and create structure on a web page.
            </p>
          </PostSection>
        </PostLayout>
      </div>

      <h3 className="sedge-subheading">
        Usage
      </h3>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
