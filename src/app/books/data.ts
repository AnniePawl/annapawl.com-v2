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
    { title: "Open Throat", author: "Henry Hoke" },
    { title: "Martyr", author: "Kaveh Akbar" },
    { title: "Betty", author: "Tiffany McDaniel" },
    { title: "Klara and the Sun", author: "Kazuo Ishiguro" },
    { title: "Piranesi", author: "Susanna Clarke" },
    { title: "Ready Player One", author: "Ernest Cline"},
    { title: "The Lost City of Z", author: "David Grann", volumeId: "QPih33JBeMwC" },
    { title: "The Great Believers", author: "Rebecca Makkai" },
    { title: "Project Hail Mary", author: "Andy Weir" },
    { title: "Endurance", author: "Alfred Lansing", volumeId: "WOEZAwAAQBAJ" },
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "Blindness", author: "José Saramago", volumeId: "8xYxfORkYE0C" },
    { title: "The Fifth Season", author: "N. K. Jemisin", volumeId: "J0tIAgAAQBAJ" },
    { title: "The Obelisk Gate", author: "N. K. Jemisin", volumeId: "2PQlCwAAQBAJ" },
    { title: "The Stone Sky", author: "N. K. Jemisin", volumeId: "cmWnDQAAQBAJ" },
  ],
};
