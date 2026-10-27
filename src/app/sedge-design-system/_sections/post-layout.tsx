import PostLayout, {
  PostSection,
  PostSubsection,
} from "../../../components/layout/PostLayout/PostLayout";
import CodeBlock from "../../../components/ui/CodeBlock";
import HomeLogo from "../../../components/ui/HomeLogo";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "post-layout")!;

const USAGE = `<PostLayout
  utilityStart={<HomeLogo colors={…} size="1.75rem" />}
  descriptionTitle="CSS Art"
  description="An introduction to drawing with code…"
  shortDescription="How I draw little illustrations with nothing but HTML and CSS."
  eyebrow="Creative Coding"
  title="Drawing with Code"
  publishedDate="Updated Oct 2026"
  readingTime="10 min read"
  postTags="CSS, Illustration, Creative Coding"
  accent="var(--red-bold)"
  next={{ href: "/css-shapes", label: "CSS Shapes" }}
  contents={[
    { id: "what-is-drawing-with-code", label: "What is drawing with code?", tone: "red-bold" },
    { id: "the-div", label: "It’s all about the <div>", tone: "sky-bold" },
    …
  ]}
>
  <PostSection id="the-div" title="It’s all about the <div>">
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
      description="Post Layout brings the header, publishing details, contents rail, reading column, and footer into one repeatable structure. Each section sets one color that flows through its navigation marker, heading, subheadings, and code blocks—change it once and the whole section follows. Every post ends with a Back to top link and can point readers toward what comes next."
    >
      <div className="pattern-preview pattern-preview--post">
        <PostLayout
          utilityStart={
            <HomeLogo
              colors={{
                northeast: "var(--sky-bold)",
                southeast: "var(--red-bold)",
                southwest: "var(--red-bold)",
                northwest: "var(--red-bold)",
                hoverAccent: "var(--iris-bold)",
              }}
              size="1.75rem"
            />
          }
          descriptionTitle="CSS Art"
          description="An introduction to drawing with code—using HTML elements and CSS properties to turn simple shapes into illustrations in the browser."
          shortDescription="How I draw little illustrations with nothing but HTML and CSS."
          eyebrow="Creative Coding"
          title="Drawing with Code"
          publishedDate="Updated Oct 2026"
          readingTime="10 min read"
          postTags="CSS, Illustration, Creative Coding"
          accent="var(--red-bold)"
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
              tone: "sky-bold",
            },
            { id: "recap", label: "CSS, a little recap", tone: "plum-bold" },
            {
              id: "toolkit",
              label: "Beginner’s CSS toolkit",
              tone: "teal-bold",
            },
            {
              id: "teacup",
              label: "Let’s build a teacup",
              tone: "iris-bold",
            },
            {
              id: "tips",
              label: "Tips from trial and error",
              tone: "coral-bold",
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
