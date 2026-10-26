import {
  ArrowUpRight,
  BookOpen,
  Bug,
  Clock,
  Heart,
  Puzzle,
  TrafficCone,
} from "lucide-react";
import CodeBlock from "../../../components/ui/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./icons.css";

const meta = SECTIONS.find((section) => section.id === "icons")!;

const SIZES = [
  { className: "icon-sm", label: "Small", value: "16px", Icon: Puzzle },
  { className: "icon-md", label: "Medium", value: "20px", Icon: TrafficCone },
  { className: "icon-lg", label: "Large", value: "24px", Icon: Bug },
];

const USAGE = `import { BookOpen } from "lucide-react";

{/* Decorative or paired with visible text */}
<BookOpen className="icon-md" aria-hidden="true" />

{/* Icon-only control */}
<button aria-label="Open library">
  <BookOpen className="icon-md" aria-hidden="true" />
</button>`;

export default function IconsSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="Icons come from Lucide: simple, friendly, and consistent without asking me to draw hundreds of tiny pictures."
      description="They inherit the color around them and use three shared sizes to stay aligned across labels, buttons, and controls."
    >
      <h3 className="sedge-subheading">Sizes</h3>
      <div className="icon-table">
        {SIZES.map(({ className, label, value, Icon }) => (
          <div className="icon-table-cell" key={className}>
            <div className="icon-size-preview">
              <Icon className={className} aria-hidden="true" />
            </div>
            <span className="icon-table-label">{label}</span>
            <code className="icon-table-code">
              {className} · {value}
            </code>
          </div>
        ))}
      </div>
      <a
        className="icon-library-link type-meta"
        href="https://lucide.dev/icons/"
        target="_blank"
        rel="noreferrer"
      >
        Browse all icons at lucide.dev
        <ArrowUpRight className="icon-sm" aria-hidden="true" />
      </a>

      <h3 className="sedge-subheading">In context</h3>
      <div className="icon-table">
        <div className="icon-table-cell">
          <div className="icon-context-preview">
            <span className="icon-context-pair icon-context-pair--nav">
              <BookOpen className="icon-sm" aria-hidden="true" />
              Bookshelf
            </span>
          </div>
          <span className="icon-table-label">With labels</span>
          <span className="icon-table-note">Small · beside 14px nav text</span>
        </div>

        <div className="icon-table-cell">
          <div className="icon-context-preview">
            <span className="icon-context-pair icon-context-pair--meta">
              <Clock className="icon-sm" aria-hidden="true" />
              5 min read
            </span>
          </div>
          <span className="icon-table-label">With meta</span>
          <span className="icon-table-note">Small · beside 12px details</span>
        </div>

        <div className="icon-table-cell">
          <div className="icon-context-preview icon-context-preview--colors">
            <Heart className="icon-md" aria-hidden="true" />
            <Heart className="icon-md icon-context-tone" aria-hidden="true" />
            <span className="icon-context-dark">
              <Heart className="icon-md" aria-hidden="true" />
            </span>
          </div>
          <span className="icon-table-label">Color</span>
          <span className="icon-table-note">Inherits currentColor</span>
        </div>
      </div>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
