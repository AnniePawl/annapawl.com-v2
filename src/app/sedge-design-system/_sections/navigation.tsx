import type { CSSProperties } from "react";
import Link from "next/link";
import PostEnd from "../../../components/layout/PostLayout/PostEnd";
import CodeBlock from "../../../components/ui/CodeBlock";
import PhoneContentsSnapshot from "../_components/PhoneContentsSnapshot";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "navigation")!;

const CONTENTS = [
  { label: "What is drawing with code?", tone: "red-bold" },
  { label: "It’s all about the <div>", tone: "sky-bold" },
  { label: "CSS, a little recap", tone: "pink-bold" },
  { label: "Beginner’s CSS toolkit", tone: "teal-bold" },
  { label: "Let’s build a teacup", tone: "iris-bold" },
];

const USAGE = `// Posts: all of it comes from PostLayout.
<PostLayout
  contents={[{ id: "the-div", label: "It’s all about the <div>", tone: "sky-bold" }, …]}
  next={{ href: "/css-shapes", label: "CSS Shapes" }}
>
  <PostSection id="the-div" …>…</PostSection>
</PostLayout>

// Breadcrumbs: an ordered list of TextLinks inside a labeled nav.
<nav aria-label="Breadcrumb">
  <ol className="link-breadcrumbs">
    <li><TextLink href="/">Home</TextLink></li>
    <li className="link-breadcrumb-separator" aria-hidden="true">/</li>
    <li><span className="link-breadcrumb-current" aria-current="page">Links</span></li>
  </ol>
</nav>`;

export default function NavigationSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="How readers find their way around a long page."
      description="Long pages get the same few wayfinding tools, and each one uses the colored markers of the sections it points to. Posts get all of them automatically from Post Layout, and this design system uses the same mobile bar with its group colors."
    >
      <h3 className="sedge-subheading">Contents</h3>
      <p className="sedge-section-description nav-doc-note">
        On wider screens, a list of sections sits beside the post and stays
        put as you scroll. Each entry has its section&rsquo;s marker color,
        matching the square beside that section&rsquo;s heading.
      </p>
      <div className="nav-doc-contents">
        <nav className="post-contents" aria-label="Contents example">
          <span className="post-contents-label type-note-label">Contents</span>
          <ol>
            {CONTENTS.map((item) => (
              <li
                key={item.label}
                style={
                  { "--post-section-tone": `var(--${item.tone})` } as CSSProperties
                }
              >
                <a href="#navigation">
                  <span aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <h3 className="sedge-subheading">Mobile contents bar</h3>
      <p className="sedge-section-description nav-doc-note">
        On phones, once the Contents list scrolls out of view, a strip of
        section colors pins to the top. Each segment is as long as its
        section: finished sections are filled, the current one fills as you
        scroll, and what&rsquo;s ahead is faded. The label under it names the
        current section, and tapping it opens the list so you can jump
        anywhere. It&rsquo;s announced as &ldquo;Contents&rdquo; with an
        expanded or collapsed state, closes with Escape, and appears without
        sliding when reduced motion is on. This design system uses the same
        bar, with each section in its group&rsquo;s color.
      </p>
      <div className="post-phone-grid">
        <figure className="post-phone">
          <PhoneContentsSnapshot />
          <figcaption className="type-note">While reading</figcaption>
        </figure>
        <figure className="post-phone">
          <PhoneContentsSnapshot open />
          <figcaption className="type-note">Tapped open</figcaption>
        </figure>
      </div>

      <h3 className="sedge-subheading">Back to top and next</h3>
      <p className="sedge-section-description nav-doc-note">
        Every post ends with a row in the same voice as the homepage&rsquo;s
        &ldquo;General nerdery&rdquo; link. Back to top glides up (or jumps,
        with reduced motion) and moves focus to the title. The optional next
        link points to a related post.
      </p>
      <div className="nav-doc-end">
        <PostEnd next={{ href: "/css-shapes", label: "CSS Shapes" }} />
      </div>

      <h3 className="sedge-subheading">Breadcrumbs</h3>
      <p className="sedge-section-description nav-doc-note">
        For pages nested inside another, a trail of links back up, ending
        with the current page.
      </p>
      <nav aria-label="Breadcrumb" className="nav-doc-breadcrumbs">
        <ol className="link-breadcrumbs">
          <li>
            <Link className="text-link focus-ring" href="/" data-state="default">
              Home
            </Link>
          </li>
          <li className="link-breadcrumb-separator" aria-hidden="true">
            /
          </li>
          <li>
            <Link
              className="text-link focus-ring"
              href="/sedge-design-system"
              data-state="default"
            >
              Design system
            </Link>
          </li>
          <li className="link-breadcrumb-separator" aria-hidden="true">
            /
          </li>
          <li>
            <span className="link-breadcrumb-current" aria-current="page">
              Navigation
            </span>
          </li>
        </ol>
      </nav>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} className="mb-8" />
    </Section>
  );
}
