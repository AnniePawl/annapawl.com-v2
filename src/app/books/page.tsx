import Badge from "../../components/ui/Badge";
import StatsButton from "./StatsButton";
import TagFilterBar from "./TagFilterBar";
import BookTile, { type ShelfEntry } from "./BookTile";
import { computeStats } from "./stats";
import { booksByYear } from "./data";
import { getBooksInfo } from "../../lib/googleBooks";

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

  // Stats are computed across every year combined (an all-time total,
  // not per-year) from the same fetched data the grid already renders —
  // no extra API calls.
  const allEntries = yearSections.flatMap((section) => section.books);
  const stats = computeStats(allEntries);

  // Every distinct tag in use across the whole shelf (genres + special
  // ones like Favorites), alphabetized — the options TagFilterBar
  // renders as clickable chips.
  const allTags = Array.from(
    new Set(allEntries.flatMap((entry) => entry.lookup.tags ?? []))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-start justify-between gap-4">
        <h1 className="h1">The Bookshelf</h1>
        <StatsButton stats={stats} />
      </div>
      <p className="p-display mt-4 max-w-[var(--measure-md)]">
        Ok I&rsquo;ve always loved looking through other people&rsquo;s
        bookshelves. They&rsquo;re a small window into someone&rsquo;s
        interests, obsessions, and the things that have shaped them. A small
        archive of my reading life — part record, part recommendation list,
        part reflection. Some books stayed with me, some changed the way I
        think, and some I simply enjoyed spending time with. This is a place
        to keep track of all of them.
      </p>

      <TagFilterBar allTags={allTags} entries={allEntries} />

      {yearSections.map(({ year, books }) => (
        <section key={year} className="mt-16">
          <div className="flex items-center gap-3">
            <h2 className="h2">{year}</h2>
            <Badge variant="accent">
              {books.length} {books.length === 1 ? "book" : "books"}
            </Badge>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {books.map(({ lookup, info }) => (
              <BookTile key={`${lookup.title}-${lookup.author ?? ""}`} lookup={lookup} info={info} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
