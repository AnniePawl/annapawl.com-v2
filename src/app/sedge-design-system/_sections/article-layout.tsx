import ArticleLayout, {
  ArticleSection,
} from "../../../components/layout/ArticleLayout";
import PageHeader from "../../../components/layout/PageHeader";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "article-layout")!;

const USAGE = `<ArticleLayout
  variant="publication"
  header={
    <PageHeader
      variant="publication"
      collectionLabel="The Bookshelf"
      barEnd="← All notes"
      eyebrow="Notes, CSS art"
      title="Drawing with Code"
      description="A record of what I’ve read and what stayed with me."
      meta="Oct 3, 2026 · 4 min read"
      metaCenter="Filed under: CSS, Illustration, Front-end"
      metaEnd="Share"
      colors={{ accent: "var(--red-bold)" }}
    />
  }
  contents={[
    { id: "what-is-it", label: "What is drawing with code?", tone: "red-bold" },
    { id: "the-div", label: "It’s all about the <div>", tone: "indigo-bold" },
  ]}
  footerStart="About"
  footerCenter="Shelves: Fiction, Essays, Poetry, Memoir, Notes"
  footerEnd="Search"
>
  <p>CSS art lies at the intersection of vector illustration and front-end development.</p>
  <ArticleSection id="what-is-it" title="What is drawing with code?" tone="red-bold">
    <p>Article copy...</p>
  </ArticleSection>
</ArticleLayout>`;

export default function ArticleLayoutSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Article layouts provide different reading structures for different kinds of stories. The publication variant pairs a framed page header with a contents rail, generous reading column, colored section markers, and a quiet utility footer."
    >
      <div className="pattern-preview pattern-preview--publication">
        <ArticleLayout
          variant="publication"
          header={
            <PageHeader
              variant="publication"
              collectionLabel="The Bookshelf"
              barEnd="← All notes"
              eyebrow="Notes, CSS art"
              title="Drawing with Code"
              description="A record of what I’ve read, what stayed with me, and what I’d happily press into someone else’s hands."
              meta="Oct 3, 2026 · 4 min read"
              metaCenter="Filed under: CSS, Illustration, Front-end"
              metaEnd="Share"
              colors={{ accent: "var(--red-bold)" }}
              headingLevel={3}
            />
          }
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
          footerStart="About"
          footerCenter="Shelves: Fiction, Essays, Poetry, Memoir, Notes"
          footerEnd="Search"
        >
          <p>
            CSS art lies at the intersection of vector illustration and
            front-end development. It involves manipulating &lt;div&gt; HTML
            elements with CSS to render shapes in the browser.
          </p>
          <ArticleSection
            id="what-is-it"
            title="What is drawing with code?"
            tone="red-bold"
          >
            <p>
              These shapes are customized by assigning values to properties
              like height, border-radius, box-shadow, and background-color.
            </p>
          </ArticleSection>
          <ArticleSection
            id="the-div"
            title="It’s all about the <div>"
            tone="indigo-bold"
          >
            <p>
              The &lt;div&gt; element is the building block of every pure CSS
              composition. A div is simply an empty container used to house
              other elements and create structure on a web page.
            </p>
          </ArticleSection>
        </ArticleLayout>
      </div>

      <hr className="poster-divider" />
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
