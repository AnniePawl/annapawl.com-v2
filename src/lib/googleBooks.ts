/**
 * Thin client for the public Google Books "volumes" search endpoint.
 *
 * Important: this is NOT tied to your Google account or any personal
 * "shelves" you may have in Google Play Books — it's just a catalog
 * lookup. You give it a title/author (or ISBN), it gives back cover art
 * and metadata for the closest match. The list of what you've actually
 * read lives in `src/app/books/data.ts`, maintained by hand.
 *
 * Docs: https://developers.google.com/books/docs/v1/using#WorkingVolumes
 */

/**
 * The one special tag that also drives the star accent on a cover (see
 * BookTile in app/books/page.tsx). Exported as a constant, rather than
 * repeating the literal string "Favorites" in both data.ts and page.tsx,
 * so a typo in one place can't silently desync the star from the tag.
 */
export const FAVORITE_TAG = "Favorites";

export interface BookLookup {
  title: string;
  author?: string;
  /** Use when title/author search picks the wrong edition. */
  isbn?: string;
  /**
   * Pins an exact Google Books edition, skipping search entirely — the
   * most reliable option when title/author search misses or matches the
   * wrong (coverless) edition. Grab it from a google.com/books/edition
   * URL: https://www.google.com/books/edition/Endurance/CzQFE2Vat9AC
   * -> volumeId is "CzQFE2Vat9AC" (the segment right after the title).
   */
  volumeId?: string;
  /**
   * Last resort: a direct image URL to use as the cover instead of
   * whatever Google Books returns. Google's API image (a physical-scan
   * pipeline) sometimes shows the wrong page or a worse crop than what
   * Play Books displays for the same volume — if that happens, right-
   * click the cover on the book's Google Play Books page -> "Copy image
   * address" and paste it here. Title/author metadata still comes from
   * the Google Books lookup as normal; only the image is overridden.
   * Remember to check next.config.ts `images.remotePatterns` allows
   * whatever host this URL is on.
   */
  coverUrl?: string;
  /**
   * Your own categories for this book — genres (e.g. "Fantasy",
   * "Literary Fiction"), and special ones like FAVORITE_TAG
   * ("Favorites"), "Made me cry", "My Book Club". One flat list rather
   * than separate genre/tag fields, since the eventual filter UI treats
   * all of these the same way — pick whichever category chips a book
   * belongs to. Keep spelling/capitalization consistent across books
   * (e.g. always "Literary Fiction", never "literary fiction" on one
   * book and "Lit Fiction" on another) since filtering will match on
   * the exact string.
   */
  tags?: string[];
}

export interface BookInfo {
  title: string;
  authors: string[];
  /** https URL, ~128px wide, or null if Google has no cover on file. */
  thumbnail: string | null;
  description: string | null;
  publishedDate: string | null;
  /** Link to the book's page on Google Books, for optional linking out. */
  infoLink: string | null;
  /** Null if Google doesn't have a page count on file for this edition. */
  pageCount: number | null;
}

const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";

// One day: your reading list changes rarely, and this keeps us from
// re-hitting Google on every request/rebuild once a lookup has succeeded.
const REVALIDATE_SECONDS = 60 * 60 * 24;

function buildQuery({ title, author, isbn }: BookLookup): string {
  if (isbn) return `isbn:${isbn}`;
  const parts = [`intitle:${title}`];
  if (author) parts.push(`inauthor:${author}`);
  return parts.join("+");
}

/**
 * Google serves cover images over plain http, and at a fairly small
 * default zoom. Upgrade to https (avoids mixed-content issues) and bump
 * the zoom a notch for a slightly larger image.
 */
function improveThumbnail(url: string): string {
  return url.replace(/^http:/, "https:").replace(/zoom=1/, "zoom=2");
}

/**
 * Looks up a single book. Never throws — a failed or missing lookup
 * resolves to `null` so a page rendering a whole shelf can fall back to
 * showing the title/author you typed in `data.ts` instead of breaking the
 * whole grid over one bad match.
 */
export async function getBookInfo(
  lookup: BookLookup
): Promise<BookInfo | null> {
  // Required in practice: Google currently gives the shared anonymous
  // consumer a 0/day quota, so keyless requests fail immediately with a
  // 429. Add GOOGLE_BOOKS_API_KEY to .env.local (see .env.local.example).
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  // volumeId fetches a single known volume directly (no search ranking
  // involved); everything else goes through the search endpoint.
  const url = lookup.volumeId
    ? `${GOOGLE_BOOKS_API}/${encodeURIComponent(lookup.volumeId)}${
        apiKey ? `?key=${apiKey}` : ""
      }`
    : (() => {
        const params = new URLSearchParams({
          q: buildQuery(lookup),
          maxResults: "1",
        });
        if (apiKey) params.set("key", apiKey);
        return `${GOOGLE_BOOKS_API}?${params.toString()}`;
      })();

  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!res.ok) {
      console.warn(
        `[googleBooks] lookup failed for "${lookup.title}": HTTP ${res.status}`
      );
      return null;
    }

    const data = await res.json();
    // Direct volume fetch returns the volume itself; search returns
    // { items: [volume, ...] }.
    const item = lookup.volumeId ? data : data.items?.[0];
    if (!item) {
      console.warn(`[googleBooks] no match for "${lookup.title}"`);
      return null;
    }

    const info = item.volumeInfo ?? {};
    const rawThumbnail =
      info.imageLinks?.thumbnail ?? info.imageLinks?.smallThumbnail ?? null;

    if (!rawThumbnail) {
      // Google found a matching book, but this particular edition has no
      // cover art on file — different from a "no match" miss. Worth
      // knowing when debugging a blank tile: try adding an isbn in
      // data.ts to pin a different (illustrated) edition.
      console.warn(
        `[googleBooks] matched "${lookup.title}" (${info.title ?? "?"}) but it has no cover image`
      );
    }

    return {
      title: info.title ?? lookup.title,
      authors: info.authors ?? (lookup.author ? [lookup.author] : []),
      thumbnail: rawThumbnail ? improveThumbnail(rawThumbnail) : null,
      description: info.description ?? null,
      publishedDate: info.publishedDate ?? null,
      infoLink: info.infoLink ?? null,
      pageCount: typeof info.pageCount === "number" ? info.pageCount : null,
    };
  } catch (err) {
    console.warn(`[googleBooks] lookup errored for "${lookup.title}":`, err);
    return null;
  }
}

/** Looks up a batch of books in parallel, preserving input order. */
export async function getBooksInfo(
  lookups: BookLookup[]
): Promise<(BookInfo | null)[]> {
  return Promise.all(lookups.map(getBookInfo));
}
