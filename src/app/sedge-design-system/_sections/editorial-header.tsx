// Not shown in the design system right now (no page uses EditorialHeader).
// Kept so it can be restored: import it in page.tsx and add an
// "editorial-header" entry back to _data/sections.ts.
import EditorialHeader from "../../../components/layout/EditorialHeader";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "editorial-header")!;

const USAGE = `<EditorialHeader
  collectionLabel="Digital garden"
  barEnd="Reading archive"
  railLabel="Reading archive"
  eyebrow="Ongoing collection"
  titlePrefix="The"
  title="Bookshelf"
  description="A personal archive of books I’ve read..."
  colors={{
    barText: "var(--charcoal)",
    railBackground: "var(--periwinkle-soft)",
    railText: "var(--charcoal)",
    headingBackground: "var(--cherry-bold)",
    prefixText: "var(--periwinkle-soft)",
    titleText: "var(--mauve-soft)",
    descriptionBackground: "var(--mauve-soft)",
    descriptionText: "var(--cherry-bold)",
  }}
/>`;

export default function EditorialHeaderSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="A bold, customizable header for collection and archive pages across the digital garden."
      description="Its colors can change by page while its editorial structure keeps the experience cohesive."
    >
      <span className="sedge-subheading">Examples</span>
      <div className="editorial-header-examples">
        <div className="pattern-preview pattern-preview--editorial-header">
          <EditorialHeader
            collectionLabel="Digital garden"
            barEnd="Reading archive"
            railLabel="Reading archive"
            eyebrow="Ongoing collection"
            titlePrefix="The"
            title="Bookshelf"
            description="A personal archive of books I’ve read. Mine includes unexpected interests, recommendations, book club picks, Little Library finds, and the occasional light summer indulgence."
            headingLevel={3}
          />
        </div>

        <div className="pattern-preview pattern-preview--editorial-header">
          <EditorialHeader
            collectionLabel="Digital garden"
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
              titleText: "var(--iris-soft)",
              descriptionBackground: "var(--iris-soft)",
              descriptionText: "var(--emerald-bold)",
            }}
            headingLevel={3}
          />
        </div>
      </div>

      <h3 className="sedge-subheading">
        Usage
      </h3>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
