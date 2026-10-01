import PageShell from "../../../components/layout/PageShell";
import CodeBlock from "../_components/CodeBlock";
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
      description="The page shell is invisible layout scaffolding: no border, radius, or background. It keeps content centered inside a shared maximum width, adds responsive side gutters, and provides equal spacing at the top and bottom of the page."
    >
      <PageShell>
        <span className="type-eyebrow">Inside the page shell</span>
        <p className="page-shell-example-copy">
          The side gutters adjust with the screen while the content stays
          centered inside a consistent maximum width.
        </p>
      </PageShell>

      <hr className="poster-divider" />
      <span className="poster-label type-eyebrow">Usage</span>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
