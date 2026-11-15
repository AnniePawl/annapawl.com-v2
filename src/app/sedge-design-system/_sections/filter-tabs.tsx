import CodeBlock from "../../../components/ui/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import FilterTabsDemo from "../_examples/FilterTabsDemo";

const meta = SECTIONS.find((section) => section.id === "filter-tabs")!;

const USAGE = `import FilterTabs from "@/components/ui/FilterTabs";

<FilterTabs
  label="Filter by topic"
  value={topic}
  onChange={setTopic}
  items={[
    { value: "all", label: "All" },
    { value: "css", label: "CSS", marker: "var(--green-bold)" },
  ]}
/>`;

export default function FilterTabsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="A quiet row for narrowing down a long list."
      description="Filters sit along a hairline rule, echoing the details bar. The active filter gets a 2px bar in its marker color; hover adds a faint underline to keep the states distinct. They look like tabs but use toggle buttons with aria-pressed: they filter one list rather than switch panels. On narrow screens, the row scrolls sideways with a soft edge fade and brings the active filter into view. Used on Field Notes, where it also sticks to the top on phones."
    >
      <FilterTabsDemo />

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone="green" code={USAGE} />
    </Section>
  );
}
