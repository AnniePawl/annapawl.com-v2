import PageHeader from "../../../components/layout/PageHeader";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "page-header")!;

const USAGE = `<PageHeader
  eyebrow="From the shelves"
  title="Books"
  description="Things I’ve read, loved, or fully intend to finish someday."
/>`;

export default function PageHeaderSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="A shared page header gives posts and pages the same opening rhythm: an optional eyebrow, one clear title, a short description, and room for useful metadata when it’s needed."
    >
      <div className="pattern-preview">
        <PageHeader
          eyebrow="Field notes"
          title="A squirrel with a plan"
          description="Small paws, strong opinions, and a suspicious amount of confidence."
          meta="5 minute read"
          headingLevel={3}
        />
      </div>

      <hr className="poster-divider" />
      <span className="poster-label type-eyebrow">Usage</span>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
