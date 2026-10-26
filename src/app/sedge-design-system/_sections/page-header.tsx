import PageHeader from "../../../components/layout/PageHeader";
import PageShell from "../../../components/layout/PageShell";
import HomeLogo from "../../../components/ui/HomeLogo";
import CodeBlock from "../_components/CodeBlock";
import Section from "../_components/Section";
import { SECTIONS } from "../_data/sections";
import "./patterns.css";

const meta = SECTIONS.find((section) => section.id === "page-header")!;

const ANATOMY = [
  { n: 1, part: "Home logo", note: "Top left, petals colored per page (utilityStart)." },
  { n: 2, part: "Description", note: "A short title and one italic line, top right (descriptionTitle, description)." },
  { n: 3, part: "Eyebrow", note: "A small label with a marker, like “Digital garden” or “Creative Coding”." },
  { n: 4, part: "Title", note: "Big, with the page’s accent square (title, accent)." },
  { n: 5, part: "Lede", note: "Optional intro line under the title, like Bookshelf’s." },
  { n: 6, part: "Details, left", note: "Date · reading time for posts, or custom text (detailsStart)." },
  { n: 7, part: "Details, right", note: "Tags, or anything custom like a stats button (postTags)." },
];

const USAGE = `// An article: PostLayout includes the header
<PostLayout
  eyebrow="Creative Coding"
  title="Drawing with Code"
  publishedDate="Oct 3, 2026"
  readingTime="8 min read"
  postTags="CSS, Illustration"
  contents={[…]}
>
  <PostSection …>…</PostSection>
</PostLayout>

// A collection page: the header on its own, your layout below
<PageShell>
  <PageHeader
    utilityStart={<HomeLogo … />}
    descriptionTitle="Reading archive"
    description="Book club picks, Little Library finds…"
    eyebrow="Digital garden"
    title="Bookshelf"
    accent="var(--blue-bold)"
    lede={<>I love looking through other people’s bookshelves…</>}
    detailsStart="Ongoing collection · Since Jan 2026"
    postTags={<StatsButton />}
  />
  <BookshelfBrowser … />
</PageShell>`;

export default function PageHeaderSection() {
  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      lede="The header every page shares."
      description="Articles get it through Post Layout, along with the contents rail and reading column. Pages that aren’t articles, like Bookshelf and Fiber Arts, use the page header on its own and build their own layout underneath. Every part except the title is optional, so the same header works for a dated post or an ongoing collection."
    >
      <h3 className="sedge-subheading">Anatomy</h3>
      <div className="pattern-preview pattern-preview--post page-header-anatomy">
        <PageShell>
          <PageHeader
            headingLevel={3}
            utilityStart={
              <HomeLogo
                colors={{
                  northeast: "var(--marigold-bold)",
                  southeast: "var(--blue-bold)",
                  southwest: "var(--blue-bold)",
                  northwest: "var(--blue-bold)",
                  hoverAccent: "var(--marigold-bold)",
                }}
                size="1.75rem"
              />
            }
            descriptionTitle="Reading archive"
            description="Book club picks, Little Library finds, and the occasional summer indulgence."
            eyebrow="Digital garden"
            title="Bookshelf"
            accent="var(--blue-bold)"
            lede={
              <>
                I love looking through other people’s bookshelves.{" "}
                <span className="post-header-lede-muted">This is mine.</span>
              </>
            }
            detailsStart="Ongoing collection · Since Jan 2026"
            postTags="64 books · 12 favorites"
          />
        </PageShell>
      </div>

      <ol className="page-header-key">
        {ANATOMY.map(({ n, part, note }) => (
          <li key={n}>
            <span className="page-header-key-n" aria-hidden="true">
              {n}
            </span>
            <span>
              <strong>{part}</strong> <span className="type-meta">{note}</span>
            </span>
          </li>
        ))}
      </ol>

      <h3 className="sedge-subheading">Usage</h3>
      <CodeBlock code={USAGE} />
    </Section>
  );
}
