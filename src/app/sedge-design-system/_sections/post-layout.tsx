import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../../components/layout/PostLayout/PostLayout";
import CodeBlock from "../../../components/ui/CodeBlock";
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
  accent="var(--iris-bold)"
  next={{ href: "/css-shapes", label: "CSS Shapes" }}
  contents={[
    { id: "what-is-it", label: "What is drawing with code?", tone: "red-bold" },
    { id: "the-div", label: "It’s all about the <div>", tone: "iris-bold" },
  ]}
>
  <PostSection id="what-is-it" title="What is drawing with code?">
    <p>Post copy...</p>

    {/* Subsections take the section's color. "label" (default) is a small
        heading with a marker; "code" keeps code headings lowercase + mono. */}
    <PostSubsection title="Parent <div>">
      <p>Every CSS composition starts with a parent div.</p>
    </PostSubsection>
    <PostSubsection title="border-radius" variant="code">
      <p>This rounds your element’s corners.</p>
    </PostSubsection>
  </PostSection>
</PostLayout>`;

export default function PostLayoutSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="The complete structure for long-form posts."
      description="One component for every long-form post: the header, publishing details, contents rail and reading column all come together, so every post is built the same way. Each section gets a color, and that color flows through everything: its marker in the contents list, the square beside its heading, its subheading markers, and even the text in its code blocks (in the soft version). Change a section’s color once and the whole section follows. Every post ends with a “Back to top” link, an optional link to the next post, and the site footer."
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
          accent="var(--iris-bold)"
          headingLevel={3}
          footer={false}
          contents={[
            {
              id: "what-is-it",
              label: "What is drawing with code?",
              tone: "red-bold",
            },
            {
              id: "the-div",
              label: "It’s all about the <div>",
              tone: "iris-bold",
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
            { id: "try-it", label: "Try it out", tone: "marigold-bold" },
          ]}
        >
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
            <PostSubsection title="Parent <div>">
              <p>
                Every CSS composition starts with a parent div. Think of it as
                your canvas.
              </p>
            </PostSubsection>
            <PostSubsection title="border-radius" variant="code">
              <p>
                This rounds your element&rsquo;s corners. One value rounds all
                four, and 50% turns a square into a circle.
              </p>
            </PostSubsection>
          </PostSection>
        </PostLayout>
      </div>

      <p className="sedge-section-description post-phone-note">
        Navigation comes built in: the Contents list, a color strip on
        phones, and Back to top at the end. See Navigation for details.
      </p>

      <h3 className="sedge-subheading">
        Usage
      </h3>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
