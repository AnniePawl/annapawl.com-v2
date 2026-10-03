export default function BookshelfHeader() {
  return (
    <header className="bookshelf-header">
      <div className="bookshelf-header-archive-bar">
        <span className="type-eyebrow bookshelf-header-bar-label">
          Digital garden
        </span>
        <span className="bookshelf-header-archive-rule" aria-hidden="true" />
        <span className="type-eyebrow bookshelf-header-bar-label">
          Reading archive
        </span>
      </div>

      <div className="bookshelf-header-layout">
        <div className="bookshelf-header-rail">
          <span className="type-eyebrow">Reading archive</span>
        </div>

        <div className="bookshelf-header-stage">
          <span className="type-eyebrow bookshelf-header-index">
            Ongoing Collection
          </span>
          <h1 className="bookshelf-header-title">
            <span className="bookshelf-header-the">The</span>
            <span className="bookshelf-header-book">Bookshelf</span>
          </h1>
        </div>

        <div className="bookshelf-header-description-row">
          <p className="type-supporting">
           A personal archive of books I’ve read. I love looking through other people’s bookshelves—they reveal what someone is curious about, drawn to, or trying to understand. Mine includes unexpected interests, recommendations, book club picks, finds from my local Little Library, and the occasional light summer indulgence.
          </p>
        </div>
      </div>
    </header>
  );
}
