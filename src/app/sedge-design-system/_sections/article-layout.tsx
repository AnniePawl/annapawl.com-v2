import ArticleLayout from "../../../components/layout/ArticleLayout";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "article-layout")!;

const USAGE = `<ArticleLayout
  eyebrow="Book notes"
  title="Braiding Sweetgrass"
  description="Notes on reciprocity, attention, and the living world."
  meta="Robin Wall Kimmerer · Read in 2026"
>
  <p>My notes begin here...</p>
</ArticleLayout>`;

export default function ArticleLayoutSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="The article layout combines the page shell and a quieter article header with a comfortable reading width and steady vertical rhythm. It’s the starting point for blog posts, notes, and other long-form garden paths."
    >
      <div className="pattern-preview">
        <ArticleLayout
          eyebrow="From the garden"
          title="On collecting tiny ideas"
          description="A small note about leaving room for thoughts to grow."
          meta="September 29, 2026 · 4 minute read"
          headingLevel={3}
        >
          <p>
            Not every idea arrives fully formed. Some start as a sentence, a
            question, or a link worth keeping close.
          </p>
          <h4>Plant first, organize later</h4>
          <p>
            The layout stays out of the way so the writing has room to become
            whatever it needs to be.
          </p>
        </ArticleLayout>
      </div>

      <hr className="poster-divider" />
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
