import PageHeader from "../../../components/layout/PageHeader";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "page-header")!;

const USAGE = `<PageHeader
  barStart="Digital garden"
  barEnd="Reading archive"
  railLabel="Reading archive"
  eyebrow="Ongoing collection"
  titlePrefix="The"
  title="Bookshelf"
  description="A personal archive of books I’ve read..."
  colors={{
    barText: "var(--charcoal)",
    railBackground: "var(--sky-soft)",
    railText: "var(--charcoal)",
    headingBackground: "var(--cherry-bold)",
    prefixText: "var(--sky-soft)",
    titleText: "var(--mauve-soft)",
    descriptionBackground: "var(--mauve-soft)",
    descriptionText: "var(--cherry-bold)",
  }}
/>`;

const PUBLICATION_USAGE = `<PageHeader
  variant="publication"
  barStart="The Bookshelf"
  barEnd="← All notes"
  eyebrow="Notes, CSS art"
  title="Drawing with Code"
  description="A record of what I’ve read, what stayed with me, and what I’d happily press into someone else’s hands."
  meta="Oct 3, 2026 · 4 min read"
  metaCenter="Filed under: CSS, Illustration, Front-end"
  metaEnd="Share"
  colors={{ accent: "var(--red-bold)" }}
/>`;

export default function PageHeaderSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="A bold, highly customizable header I designed for pages across my digital garden. It pairs an editorial structure with plenty of personality, and each element can be recolored using design-system tokens—giving every page its own look while keeping the overall experience cohesive."
    >
      <span className="poster-label type-eyebrow">Examples</span>
      <div className="page-header-examples">
        <div className="pattern-preview pattern-preview--page-header">
          <PageHeader
            barStart="Digital garden"
            barEnd="Reading archive"
            railLabel="Reading archive"
            eyebrow="Ongoing collection"
            titlePrefix="The"
            title="Bookshelf"
            description="A personal archive of books I’ve read. Mine includes unexpected interests, recommendations, book club picks, Little Library finds, and the occasional light summer indulgence."
            headingLevel={3}
          />
        </div>

        <div className="pattern-preview pattern-preview--page-header">
          <PageHeader
            barStart="Digital garden"
            barEnd="Field notes"
            railLabel="Field notes"
            eyebrow="Still growing"
            titlePrefix="The"
            title="Notebook"
            description="Ideas, questions, and small discoveries gathered before they become something more finished."
            colors={{
              barText: "var(--charcoal)",
              railBackground: "var(--lemon-soft)",
              railText: "var(--charcoal)",
              headingBackground: "var(--emerald-bold)",
              prefixText: "var(--lemon-soft)",
              titleText: "var(--indigo-soft)",
              descriptionBackground: "var(--indigo-soft)",
              descriptionText: "var(--emerald-bold)",
            }}
            headingLevel={3}
          />
        </div>

        <div className="pattern-preview pattern-preview--publication-header">
          <PageHeader
            variant="publication"
            barStart="The Bookshelf"
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
        </div>
      </div>

      <hr className="poster-divider" />
      <h3 className='type-eyebrow' style={{ margin: "32px 0 16px" }}>Usage</h3>
      <CodeBlock code={`${USAGE}\n\n${PUBLICATION_USAGE}`} />
    </Section>
  );
}
