import SiteFooter from "../../../components/layout/SiteFooter/SiteFooter";
import CodeBlock from "../../../components/ui/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "site-footer")!;

const USAGE = `import SiteFooter from "@/components/layout/SiteFooter/SiteFooter";

// Posts get it automatically from PostLayout (footer={false} to hide it).
// Anywhere else, add it at the end of the page:
<SiteFooter />`;

export default function SiteFooterSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="The same footer closes every page."
      description="A woven strip of palette colors marks the end of the page, followed by the colophon: where else to find me, how to get in touch, and what the site is built with. Its markers and link hovers take the page accent, so it matches whichever page it ends."
    >
      <div className="pattern-preview pattern-preview--footer">
        <SiteFooter />
      </div>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
    </Section>
  );
}
