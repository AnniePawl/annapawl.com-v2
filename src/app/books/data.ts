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
    { title: "Open Throat", author: "Henry Hoke", genres:["Literary Fiction", "LGBTQ+"] },
    { title: "Martyr", author: "Kaveh Akbar", genres:["Literary Fiction"] },
    { title: "Betty", author: "Tiffany McDaniel", favorite: true, tags: ["Made me cry"], genres: ["Literary Fiction", "Historical Fiction"] },
    { title: "Klara and the Sun", author: "Kazuo Ishiguro", genres:["Science Fiction", "Literary Fiction", "Dystopian"] },
    { title: "Piranesi", author: "Susanna Clarke", genres:["Fantasy", "Literary Fiction"] },
    { title: "Ready Player One", author: "Ernest Cline", genres:["Science Fiction", "Dystopian Fiction"] },
    { title: "The Lost City of Z", author: "David Grann", volumeId: "QPih33JBeMwC", genres:["Adventure", "Biography", "History"] },
    { title: "The Great Believers", author: "Rebecca Makkai", genres:["Literary Fiction", "Historical Fiction", "LGBTQ+"] },
    { title: "Project Hail Mary", author: "Andy Weir", genres:["Science Fiction", "Adventure"] },
    { title: "Endurance", author: "Alfred Lansing", volumeId: "WOEZAwAAQBAJ", genres:["Adventure", "History"] },
    { title: "Fourth Wing", author: "Rebecca Yarros", genres: ["Fantasy", "Romance"]  },
    { title: "Blindness", author: "José Saramago", volumeId: "8xYxfORkYE0C", genres: ["Literary Fiction", "Dystopian"] },
    { title: "The Fifth Season", author: "N. K. Jemisin", volumeId: "J0tIAgAAQBAJ", favorite: true, genres: ["Fantasy", "Science Fiction", "Dystopian"] },
    { title: "The Obelisk Gate", author: "N. K. Jemisin", volumeId: "2PQlCwAAQBAJ", genres: ["Fantasy", "Science Fiction", "Dystopian"] },
    { title: "The Stone Sky", author: "N. K. Jemisin", volumeId: "cmWnDQAAQBAJ", genres: ["Fantasy", "Science Fiction", "Dystopian"] },
  ],
};
