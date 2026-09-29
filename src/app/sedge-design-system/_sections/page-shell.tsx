import PageShell from "../../../components/layout/PageShell";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "page-shell")!;

const USAGE = `import PageShell from "@/src/components/layout/PageShell";

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
      description="The page shell keeps content centered and gives every page the same responsive outer spacing. It uses the shared page gutter, section gap, and maximum width, so individual pages don’t have to rebuild the frame."
    >
      <div className="pattern-preview">
        <PageShell>
          <div className="pattern-preview-content">
            <span className="type-eyebrow">Inside the page shell</span>
            <p>
              The outer gutter adjusts with the screen while the content stays
              centered inside a consistent maximum width.
            </p>
          </div>
        </PageShell>
      </div>

      <hr className="poster-divider" />
      <span className="poster-label type-eyebrow">Usage</span>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
