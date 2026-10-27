import PageShell from "../../components/layout/PageShell";
import SiteFooter from "../../components/layout/SiteFooter/SiteFooter";
import PageHeader from "../../components/layout/PageHeader";
import HomeLogo from "../../components/ui/HomeLogo";
import BookshelfBrowser, { type TagCount, type YearSection } from "./BookshelfBrowser";
import StatsButton from "./StatsButton";
import type { ShelfEntry } from "./BookTile";
import { booksByYear } from "./data";
import { computeStats } from "./stats";
import { FAVORITE_TAG, getBooksInfo } from "../../lib/googleBooks";
import "./books.css";

export const metadata = {
  title: "The Bookshelf — Anna Pawl",
  description: "A running list of what I've read, by year.",
};

// Newest year first.
const years = Object.keys(booksByYear)
  .map(Number)
  .sort((a, b) => b - a);

export default async function BooksPage() {
  const sections: YearSection[] = await Promise.all(
    years.map(async (year) => {
      const lookups = booksByYear[year];
      const infos = await getBooksInfo(lookups);
      const books: ShelfEntry[] = lookups.map((lookup, i) => ({
        lookup,
        info: infos[i],
      }));
      return { year, books };
    })
  );

  const allEntries = sections.flatMap((section) => section.books);
  const stats = computeStats(allEntries);

  // Distinct tags in use, alphabetized with how many books in it.
  // Rail shows the count beside each tag.
  const tags: TagCount[] = Array.from(
    new Set(allEntries.flatMap((entry) => entry.lookup.tags ?? []))
  )
    .sort((a, b) => a.localeCompare(b))
    .map((name) => ({
      name,
      count: allEntries.filter((entry) => entry.lookup.tags?.includes(name)).length,
    }));

  const favorites = tags.find((tag) => tag.name === FAVORITE_TAG)?.count ?? 0;

  return (
    <>
      <PageShell className="bookshelf-page">
        <PageHeader
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
              I love looking through other people’s bookshelves — they show what
              someone is curious about, drawn to, or trying to understand.{" "}
              <span className="post-header-lede-muted">This is mine.</span>
            </>
          }
          detailsStart="Ongoing collection · Since Jan 2026"
          postTags={
            <span className="bookshelf-details-end">
              <span>
                {stats.totalBooks} books · {stats.totalAuthors} authors · {favorites}{" "}
                favorites
              </span>
              <StatsButton stats={stats} tags={tags} />
            </span>
          }
        />

        <BookshelfBrowser sections={sections} tags={tags} />
      </PageShell>
      <SiteFooter accent="var(--blue-bold)" />
    </>
  );
}
