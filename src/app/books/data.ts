import type { BookLookup } from "../../lib/googleBooks";

/**
 * Your reading list, grouped by year. Google Books can usually find a book
 * from title + author alone — only add `isbn` if a search picks the wrong
 * edition or comes back empty.
 *
 * Years render newest-first automatically (src/app/books/page.tsx sorts
 * the keys), so just add a new year object here whenever one starts.
 */
export const booksByYear: Record<number, BookLookup[]> = {
  2026: [
    // TODO(anna): swap these for your real 2026 list.
    { title: "Open Throat", volumeId:"SZyDEAAAQBAJ", author:"Henry Hoke", tags: ["Literary Fiction", "LGBTQ+", "Book Club"] },
    { title: "Martyr", volumeId:"uRC7EAAAQBAJ", author: "Kaveh Akbar", tags: ["Literary Fiction", "LGBTQ+", "Book Club"] },
    { title: "Betty", author: "Tiffany McDaniel", volumeId:"hOO3DwAAQBAJ", tags: ["Favorites", "Literary Fiction", "Made me cry",  "Historical Fiction", "Book Club"] },
    { title: "Klara and the Sun", author: "Kazuo Ishiguro", volumeId:"S7jrDwAAQBAJ", tags: ["Science Fiction", "Literary Fiction", "Dystopian"] },
    { title: "Piranesi", volumeId:"MUMIEAAAQBAJ", author: "Susanna Clarke", tags: ["Favorites", "Fantasy", "Literary Fiction", "Book Club"] },
    { title: "Ready Player One", author: "Ernest Cline", tags: ["Science Fiction", "Dystopian"] },
    { title: "The Lost City of Z", author: "David Grann", volumeId: "QPih33JBeMwC", tags: ["Adventure", "History", "Nonfiction"] },
    { title: "Into Thin Air", author: "Jon Krakauer", volumeId:"3FONDQAAQBAJ", tags: ["Adventure", "Survival", "Memoir", "Nonfiction"] },
    { title: "The Great Believers", author: "Rebecca Makkai", tags: ["Favorites", "Literary Fiction", "Historical Fiction", "LGBTQ+"] },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      volumeId: "nxyOEAAAQBAJ",
      coverUrl:
        "https://play.google.com/books/content/images/frontcover/nxyOEAAAQBAJ?fife=w480-h690",
      tags: ["Favorites", "Science Fiction", "Adventure"],
    },
    { title: "Endurance", author: "Alfred Lansing", volumeId: "WOEZAwAAQBAJ", tags: ["Adventure", "Nonfiction", "Survival", "History"] },
    { title: "Fourth Wing", author: "Rebecca Yarros", volumeId:"E-OLEAAAQBAJ", tags: ["Fantasy", "Romance"] },
    { title: "Iron Flame", author: "Rebecca Yarros", volumeId:"xIS9EAAAQBAJ", tags: ["Fantasy", "Romance"] },
    {
      title: "Blindness",
      author: "José Saramago",
      volumeId: "WT1nA87biBoC",
      coverUrl:
        "https://play.google.com/books/content/images/frontcover/WT1nA87biBoC?fife=w240-h345",
      tags: ["Literary Fiction", "Dystopian", "Book Club"],
    },
    { title: "The Fifth Season", author: "N. K. Jemisin", volumeId: "J0tIAgAAQBAJ", tags: ["Favorites", "Fantasy", "Science Fiction", "Dystopian"] },
    { title: "The Obelisk Gate", author: "N. K. Jemisin", volumeId: "2PQlCwAAQBAJ", tags: ["Fantasy", "Science Fiction", "Dystopian"] },
    { title: "The Stone Sky", author: "N. K. Jemisin", volumeId: "cmWnDQAAQBAJ", tags: ["Fantasy", "Science Fiction", "Dystopian"] },
    { title: "Perfection", author: "Vincenzo Latronico", volumeId: "x6YyEQAAQBAJ", tags: ["Literary Fiction"] },
  ],
};


// Tags that have been applied to books so far (for my reference):
// - Favorites
// - Made me cry
// - Book Club
// - Literary Fiction
// - Historical Fiction
// - Science Fiction
// - Fantasy
// - Dystopian
// - Adventure
// - Biography
// - History
// - Romance
