import type { BookLookup } from "../../lib/googleBooks";

//  Reading list grouped by year. Google Books can usually find book from title + author but sometimes isbn needed.
// Years render newest-first (src/app/books/page.tsx sorts
// the keys). Just add new year object when needed

export const booksByYear: Record<number, BookLookup[]> = {
  2026: [
    { title: "Open Throat", volumeId: "SZyDEAAAQBAJ", author: "Henry Hoke", tags: ["Literary Fiction", "LGBTQ+", "Book Club"], firstPublished: 2023 },
    { title: "Martyr", volumeId: "uRC7EAAAQBAJ", author: "Kaveh Akbar", tags: ["Literary Fiction", "LGBTQ+", "Book Club"], firstPublished: 2024 },
    { title: "Betty", author: "Tiffany McDaniel", volumeId: "hOO3DwAAQBAJ", tags: ["Historical Fiction", "Favorites", "Made Me Cry", "Book Club"], firstPublished: 2020 },
    { title: "Klara and the Sun", author: "Kazuo Ishiguro", volumeId: "S7jrDwAAQBAJ", tags: ["Science Fiction", "Literary Fiction"], firstPublished: 2021 },
    { title: "Piranesi", volumeId: "MUMIEAAAQBAJ", author: "Susanna Clarke", tags: ["Fantasy", "Literary Fiction", "Favorites", "Book Club"], firstPublished: 2020 },
    { title: "Ready Player One", author: "Ernest Cline", tags: ["Science Fiction", "Dystopian", "Adventure"], firstPublished: 2011 },
    { title: "The Lost City of Z", author: "David Grann", volumeId: "QPih33JBeMwC", tags: ["Nonfiction", "Adventure"], firstPublished: 2009 },
    {
      title: "Blindness",
      author: "José Saramago",
      volumeId: "WT1nA87biBoC",
      coverUrl:
        "https://play.google.com/books/content/images/frontcover/WT1nA87biBoC?fife=w240-h345",
      tags: ["Literary Fiction", "Dystopian", "Survival", "Book Club"], firstPublished: 1995,
    },
    { title: "Endurance", author: "Alfred Lansing", volumeId: "WOEZAwAAQBAJ", tags: ["Nonfiction", "Adventure", "Survival"], firstPublished: 1959 },
    { title: "The Great Believers", author: "Rebecca Makkai", tags: ["Historical Fiction", "LGBTQ+", "Favorites", "Made Me Cry"], firstPublished: 2018 },
    { title: "Into Thin Air", author: "Jon Krakauer", volumeId: "3FONDQAAQBAJ", tags: ["Nonfiction", "Adventure", "Survival"], firstPublished: 1997 },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      volumeId: "nxyOEAAAQBAJ",
      coverUrl:
        "https://play.google.com/books/content/images/frontcover/nxyOEAAAQBAJ?fife=w480-h690",
      tags: ["Science Fiction", "Adventure", "Survival", "Favorites"], firstPublished: 2021,
    },
    { title: "The Fifth Season", author: "N. K. Jemisin", volumeId: "J0tIAgAAQBAJ", tags: ["Fantasy", "Dystopian", "Favorites"], firstPublished: 2015 },
    { title: "The Obelisk Gate", author: "N. K. Jemisin", volumeId: "2PQlCwAAQBAJ", tags: ["Fantasy", "Dystopian"], firstPublished: 2016 },
    { title: "The Stone Sky", author: "N. K. Jemisin", volumeId: "cmWnDQAAQBAJ", tags: ["Fantasy", "Dystopian"], firstPublished: 2017 },
    { title: "Fourth Wing", author: "Rebecca Yarros", volumeId: "E-OLEAAAQBAJ", tags: ["Fantasy", "Romance", "Adventure"], firstPublished: 2023 },
    { title: "Iron Flame", author: "Rebecca Yarros", volumeId: "xIS9EAAAQBAJ", tags: ["Fantasy", "Romance", "Adventure"], firstPublished: 2023 },
    { title: "Perfection", author: "Vincenzo Latronico", volumeId: "x6YyEQAAQBAJ", tags: ["Literary Fiction"], firstPublished: 2022 },
  ],
};



// Genre: Literary Fiction, Historical Fiction, Science Fiction, Fantasy, Romance, Nonfiction
// Theme: Dystopian, Adventure, Survival, LGBTQ+
// Personal: Favorites, Made Me Cry, Book Club
