import { BookOpen } from "lucide-react";
import PageShell from "../../components/layout/PageShell";
import BookshelfHeader from "./BookshelfHeader";
import TagFilterBar from "./TagFilterBar";
import BookTile, { type ShelfEntry } from "./BookTile";
import { booksByYear } from "./data";
import { getBooksInfo } from "../../lib/googleBooks";
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
  const yearSections = await Promise.all(
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

  const allEntries = yearSections.flatMap((section) => section.books);

  // Every distinct tag in use across the whole shelf (genres + special
  // ones like Favorites), alphabetized — the options TagFilterBar
  // renders as clickable chips.
  const allTags = Array.from(
    new Set(allEntries.flatMap((entry) => entry.lookup.tags ?? []))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <PageShell>
      <BookshelfHeader />

      <div className="bookshelf-content">
        <TagFilterBar allTags={allTags} entries={allEntries} />

        {yearSections.map(({ year, books }) => (
          <section key={year}>
            <div className="bookshelf-year-heading">
              <h2 className="h2">
                {year}<span className="bookshelf-year-dot">.</span>
              </h2>
              <span className="bookshelf-year-meta">
                <BookOpen aria-hidden="true" />
                {books.length} {books.length === 1 ? "book" : "books"}
              </span>
            </div>

            <div className="mt-[var(--space-5)] grid grid-cols-2 gap-x-[var(--space-4)] gap-y-[var(--space-6)] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {books.map(({ lookup, info }) => (
                <BookTile
                  key={`${lookup.title}-${lookup.author ?? ""}`}
                  lookup={lookup}
                  info={info}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
