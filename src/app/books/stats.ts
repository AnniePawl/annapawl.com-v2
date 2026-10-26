import type { BookInfo, BookLookup } from "../../lib/googleBooks";

export interface BookStatEntry {
  lookup: BookLookup;
  info: BookInfo | null;
}

export interface ReadingStats {
  totalBooks: number;
  totalPages: number;
  // Total pages can be an undercount based on Google Books data
  booksWithPageData: number;
  totalAuthors: number;
  longest: { title: string; pages: number } | null;
  shortest: { title: string; pages: number } | null;
  /** Oldest + newest books by first-publication year. */
  oldest: { title: string; year: number } | null;
  newest: { title: string; year: number } | null;
  /** Authors with more than one book on the shelf, most-read first. */
  repeatAuthors: { author: string; count: number }[];
  fiction: number;
  nonfiction: number;
}

/** Resolves the same title/author display logic used on the book tiles,
 *  so stats and the grid never disagree about what a book is called. */
function resolveDisplay(entry: BookStatEntry) {
  const { lookup, info } = entry;
  return {
    title: lookup.title,
    author: info?.authors?.join(", ") || lookup.author || "Unknown author",
    pages: info?.pageCount ?? null,
  };
}

/** First-publication year:  manual override wins, else Google's date. */
function publishedYear({ lookup, info }: BookStatEntry): number | null {
  if (lookup.firstPublished) return lookup.firstPublished;
  const match = info?.publishedDate?.match(/^\d{4}/);
  return match ? Number(match[0]) : null;
}

export function computeStats(entries: BookStatEntry[]): ReadingStats {
  const books = entries.map(resolveDisplay);

  // Time traveled — uses the short title from data.ts, since Google's
  // titles can carry marketing subtitles ("…: A GMA Book Club Pick").
  const dated = entries
    .map((entry) => ({ title: entry.lookup.title, year: publishedYear(entry) }))
    .filter((b): b is { title: string; year: number } => b.year != null);
  const oldest = dated.length
    ? dated.reduce((min, b) => (b.year < min.year ? b : min))
    : null;
  const newest = dated.length
    ? dated.reduce((max, b) => (b.year > max.year ? b : max))
    : null;

  // Authors I came back to — grouped by the author written in data.ts.
  const authorCounts = new Map<string, number>();
  for (const { lookup, info } of entries) {
    const name = lookup.author ?? info?.authors?.[0];
    if (name) authorCounts.set(name, (authorCounts.get(name) ?? 0) + 1);
  }
  const repeatAuthors = [...authorCounts.entries()]
    .filter(([, count]) => count > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([author, count]) => ({ author, count }));

  const nonfiction = entries.filter((e) => e.lookup.tags?.includes("Nonfiction")).length;

  const withPages = books.filter(
    (b): b is typeof b & { pages: number } => b.pages != null && b.pages > 0
  );

  const totalPages = withPages.reduce((sum, b) => sum + b.pages, 0);

  // Dedupe authors by display string so a writer who shows up on
  // multiple books (3 N. K. Jemisin novels, say) counts once.
  const authorSet = new Set(books.map((b) => b.author));

  const longest =
    withPages.length > 0
      ? withPages.reduce((max, b) => (b.pages > max.pages ? b : max))
      : null;
  const shortest =
    withPages.length > 0
      ? withPages.reduce((min, b) => (b.pages < min.pages ? b : min))
      : null;

  return {
    totalBooks: books.length,
    totalPages,
    booksWithPageData: withPages.length,
    totalAuthors: authorSet.size,
    longest: longest ? { title: longest.title, pages: longest.pages } : null,
    shortest: shortest ? { title: shortest.title, pages: shortest.pages } : null,
    oldest,
    newest,
    repeatAuthors,
    fiction: entries.length - nonfiction,
    nonfiction,
  };
}
