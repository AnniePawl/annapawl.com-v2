import Image from "next/image";
import { FAVORITE_TAG, type BookInfo, type BookLookup } from "../../lib/googleBooks";

export interface ShelfEntry {
  lookup: BookLookup;
  info: BookInfo | null;
}

/**
 * A single book cover tile — used both in the main year-by-year grid
 * (page.tsx) and inside the tag-filter modal (TagFilterBar.tsx), so the
 * filtered view looks and behaves identically to the shelf itself.
 */
export default function BookTile({ lookup, info }: ShelfEntry) {
  const title = info?.title ?? lookup.title;
  const author = info?.authors?.join(", ") || lookup.author || "Unknown author";
  // A manual coverUrl in data.ts always wins over whatever Google Books
  // returned — see the field's doc comment in lib/googleBooks.ts.
  const thumbnail = lookup.coverUrl ?? info?.thumbnail ?? null;

  const cover = (
    <div className="bookshelf-cover relative aspect-[2/3] w-full overflow-hidden transition-transform duration-[var(--motion-hover-duration)] ease-[var(--motion-hover-ease)] group-hover:-translate-y-1">
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

      {lookup.tags?.includes(FAVORITE_TAG) && (
        // Favorites get a small ribbon tab in the page accent.
        <span className="bookshelf-ribbon" title="Favorite">
          <span className="sr-only">Favorite</span>
        </span>
      )}
    </div>
  );

  const meta = (
    <div className="bookshelf-tile-meta">
      <p className="bookshelf-tile-title">{title}</p>
      <p className="bookshelf-tile-author">{author}</p>
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
