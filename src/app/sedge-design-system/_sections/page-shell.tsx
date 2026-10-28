import PageShell from "../../../components/layout/PageShell";
import CodeBlock from "../../../components/ui/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "page-shell")!;

const USAGE = `import PageShell from "@/components/layout/PageShell";

export default function BooksPage() {
  return (
    <main>
      <PageShell>
        {/* Page content */}
      </PageShell>
    </main>
  );
}`;

export default function PageShellSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Invisible layout scaffolding."
      description="It has no border, radius, or background. It keeps content centered inside a shared maximum width, adds responsive side gutters, and provides equal spacing at the top and bottom of the page."
    >
      <PageShell>
        <span className="type-eyebrow page-shell-example-label">Inside the page shell</span>
        <p className="page-shell-example-copy">
          The side gutters adjust with the screen while the content stays
          centered inside a consistent maximum width.
        </p>
      </PageShell>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock tone="coral" code={USAGE} />
    </Section>
  );
}
