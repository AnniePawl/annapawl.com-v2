import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import FormExamples from "../_examples/FormExamples";
import CodeBlock from "../../../components/ui/CodeBlock";
import Input from "../../../components/ui/Input";
import { FormField, FieldLabel } from "../../../components/ui/FormField";

const SEARCH_USAGE = `<FormField>
  <FieldLabel htmlFor="search-notes">Search notes</FieldLabel>
  <Input id="search-notes" variant="search" placeholder="Search…" />
</FormField>`;

const meta = SECTIONS.find((s) => s.id === "forms")!;

export default function FormsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Forms should feel clear and familiar."
      description="Fields are drawn as ruled lines rather than boxes, like writing on a ruled page (search is the one exception); the textarea becomes a few lines of ruled paper. Labels use spaced caps. Focus thickens the line to 2px in the page accent, and checked radios and checkboxes use the same accent. Red is reserved for errors, shown on the line and in a message with the small marker."
    >
      <h3 className="sedge-subheading">Example</h3>
      <FormExamples />

      <h3 className="sedge-subheading">Search</h3>
      <p>
        The one field that keeps its box. A search should look searchable at a
        glance, so it gets a hairline box with 4px corners and a search icon.
        Focus thickens the border to 2px in the page accent, like the line on
        other fields. Used on Field Notes and in the Live Search post.
      </p>
      <div style={{ maxWidth: "22rem", margin: "var(--space-5) 0" }}>
        <FormField>
          <FieldLabel htmlFor="docs-search">Search notes</FieldLabel>
          <Input id="docs-search" variant="search" placeholder="Search…" />
        </FormField>
      </div>
      <CodeBlock code={SEARCH_USAGE} />
    </Section>
  );
}
