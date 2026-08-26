import type { BookInfo, BookLookup } from "../../lib/googleBooks";

export interface BookStatEntry {
  lookup: BookLookup;
  info: BookInfo | null;
}

export interface ReadingStats {
  totalBooks: number;
  totalPages: number;
  /** How many of totalBooks actually had a page count to add up — Google
   *  doesn't have one on file for every edition, so totalPages can be an
   *  undercount. Surfaced so the UI can be honest about that. */
  booksWithPageData: number;
  totalAuthors: number;
  longest: { title: string; pages: number } | null;
  shortest: { title: string; pages: number } | null;
}

/** Resolves the same title/author display logic used on the book tiles,
 *  so stats and the grid never disagree about what a book is called. */
function resolveDisplay(entry: BookStatEntry) {
  const { lookup, info } = entry;
  return {
    title: info?.title ?? lookup.title,
    author: info?.authors?.join(", ") || lookup.author || "Unknown author",
    pages: info?.pageCount ?? null,
  };
}

export function computeStats(entries: BookStatEntry[]): ReadingStats {
  const books = entries.map(resolveDisplay);

  const withPages = books.filter(
    (b): b is typeof b & { pages: number } => b.pages != null && b.pages > 0
  );

  const totalPages = withPages.reduce((sum, b) => sum + b.pages, 0);

  // Dedupe authors by display string, so a writer who shows up on
  // multiple books (three N. K. Jemisin novels, say) counts once.
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
  };
}
