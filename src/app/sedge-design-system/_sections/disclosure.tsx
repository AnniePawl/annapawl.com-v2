import CodeBlock from "../../../components/ui/CodeBlock";
import Disclosure from "../../../components/ui/Disclosure";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";

const meta = SECTIONS.find((section) => section.id === "disclosure")!;

const SAMPLE = `.circle {
  width: 200px;
  aspect-ratio: 1;
  border-radius: 50%;
}`;

const USAGE = `import Disclosure from "@/components/ui/Disclosure";

<Disclosure label="Show the CSS" openLabel="Hide the CSS">
  <CodeBlock code={css} />
</Disclosure>`;

export default function DisclosureSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="A little toggle for content that can wait."
      description="Tucks away something long, like a full code block, behind a single line. It's outlined at rest and fills with ink on hover, like the primary button, and the plus turns into a minus when open. Built on the native details element, so it works with a keyboard and screen readers with no JavaScript, and find-in-page still finds what's inside. For a group where one opens at a time, use the Accordion."
    >
      <div style={{ display: "flex", gap: "var(--space-6)", marginBottom: "var(--space-3)" }}>
        <Disclosure label="Show the CSS">{null}</Disclosure>
        <Disclosure label="Show the CSS" data-state="hover">
          {null}
        </Disclosure>
      </div>
      <Disclosure label="Show the CSS" openLabel="Hide the CSS" defaultOpen>
        <CodeBlock tone="green" code={SAMPLE} />
      </Disclosure>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone="green" code={USAGE} />
    </Section>
  );
}
