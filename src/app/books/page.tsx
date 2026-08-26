import Image from "next/image";
import Badge from "../../components/ui/Badge";
import Shape from "../../components/ui/Shape";
import StatsButton from "./StatsButton";
import { computeStats } from "./stats";
import { booksByYear } from "./data";
import { getBooksInfo, type BookInfo, type BookLookup } from "../../lib/googleBooks";

export const metadata = {
  title: "The Bookshelf — Anna Pawl",
  description: "A running list of what I've read, by year.",
};

interface ShelfEntry {
  lookup: BookLookup;
  info: BookInfo | null;
}

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
  const stats = computeStats(yearSections.flatMap((section) => section.books));

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

function BookTile({ lookup, info }: ShelfEntry) {
  const title = info?.title ?? lookup.title;
  const author = info?.authors?.join(", ") || lookup.author || "Unknown author";
  // A manual coverUrl in data.ts always wins over whatever Google Books
  // returned — see the field's doc comment in lib/googleBooks.ts.
  const thumbnail = lookup.coverUrl ?? info?.thumbnail ?? null;

  const cover = (
    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--bg-subtle)] shadow-[var(--shadow-card)] transition-transform duration-[var(--motion-hover-duration)] ease-[var(--motion-hover-ease)] group-hover:-translate-y-1">
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={`Cover of ${title}`}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 25vw, 33vw"
          // object-contain (not object-cover) so covers are never
          // cropped — Google's thumbnails don't all come back at a
          // clean 2:3 ratio, and cover art (unlike a photo) reads badly
          // with the top/bottom or a corner sliced off. Any mismatch
          // just letterboxes against the container's --bg-subtle.
          className="object-contain"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-3 text-center text-sm text-[var(--text-muted)]">
          {title}
        </div>
      )}

      {lookup.favorite && (
        <div
          className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-[var(--radius-full)] bg-black shadow-[var(--shadow-sm)]"
          title="Favorite"
        >
          <Shape variant="star" className="h-4 w-4 text-yellow-bold" />
        </div>
      )}
    </div>
  );

  const meta = (
    <div className="mt-2">
      <p className="truncate text-sm font-medium text-[var(--text-primary)]">{title}</p>
      <p className="truncate text-xs text-[var(--text-muted)]">{author}</p>
      {lookup.tags && lookup.tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1">
          {/* {lookup.tags.map((tag) => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))} */}
        </div>
      )}
    </div>
  );

  if (info?.infoLink) {
    return (
      <a
        href={info.infoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group focus-ring block rounded-[var(--radius-md)]"
      >
        {cover}
        {meta}
      </a>
    );
  }

  return (
    <div className="group">
      {cover}
      {meta}
    </div>
  );
}
