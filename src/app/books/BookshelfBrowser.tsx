"use client";

import { useState, type CSSProperties } from "react";
import BookTile, { type ShelfEntry } from "./BookTile";
import { tagTone } from "./tagTones";

export interface YearSection {
  year: number;
  books: ShelfEntry[];
}

export interface TagCount {
  name: string;
  count: number;
}

interface BookshelfBrowserProps {
  sections: YearSection[];
  tags: TagCount[];
}

export default function BookshelfBrowser({ sections, tags }: BookshelfBrowserProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const total = sections.reduce((sum, section) => sum + section.books.length, 0);
  const visible = sections
    .map((section) => ({
      year: section.year,
      yearTotal: section.books.length,
      books: selected
        ? section.books.filter((entry) => entry.lookup.tags?.includes(selected))
        : section.books,
    }))
    .filter((section) => section.books.length > 0);

  const [first, ...rest] = visible;

  const toggle = (tag: string) =>
    setSelected((current) => (current === tag ? null : tag));

  const countLabel = (books: number, yearTotal: number) => {
    const noun = (n: number) => (n === 1 ? "book" : "books");
    return selected
      ? `${selected} · ${books} of ${yearTotal} ${noun(yearTotal)}`
      : `${books} ${noun(books)}`;
  };

  return (
    <div className="bookshelf-browser" data-filtered={selected ? "true" : undefined}>
      <div className="bookshelf-rail-label">
        <span className="type-note-label">Filter by tag</span>
        {selected ? (
          <button
            type="button"
            className="bookshelf-text-button focus-ring"
            onClick={() => setSelected(null)}
          >
            Show all
          </button>
        ) : null}
      </div>

      {first ? (
        <YearHeading year={first.year} meta={countLabel(first.books.length, first.yearTotal)} />
      ) : null}

      <nav className="bookshelf-rail" aria-label="Filter books by tag">
        <button
          type="button"
          className="bookshelf-rail-all focus-ring"
          aria-pressed={!selected}
          onClick={() => setSelected(null)}
        >
          <span className="bookshelf-rail-name">All</span>
          <span className="bookshelf-rail-count">{total}</span>
        </button>
        {tags.map(({ name, count }) => (
          <button
            key={name}
            type="button"
            className="bookshelf-rail-tag focus-ring"
            aria-pressed={selected === name}
            style={{ "--tag-tone": tagTone(name) } as CSSProperties}
            onClick={() => toggle(name)}
          >
            <span className="bookshelf-rail-mark" aria-hidden="true" />
            <span className="bookshelf-rail-name">{name}</span>
            <span className="bookshelf-rail-count">{count}</span>
          </button>
        ))}
      </nav>

      <div className="bookshelf-main">
        {first ? <BookGrid books={first.books} /> : null}
        {rest.map((section) => (
          <section key={section.year} className="bookshelf-year">
            <YearHeading
              year={section.year}
              meta={countLabel(section.books.length, section.yearTotal)}
            />
            <BookGrid books={section.books} />
          </section>
        ))}
      </div>
    </div>
  );
}

function YearHeading({ year, meta }: { year: number; meta: string }) {
  return (
    <div className="bookshelf-year-heading">
      <h2 className="bookshelf-year-title">
        {year}
        <span aria-hidden="true" />
      </h2>
      <span className="bookshelf-year-meta">{meta}</span>
    </div>
  );
}

function BookGrid({ books }: { books: ShelfEntry[] }) {
  return (
    <div className="bookshelf-grid">
      {books.map(({ lookup, info }) => (
        <BookTile key={`${lookup.title}-${lookup.author ?? ""}`} lookup={lookup} info={info} />
      ))}
    </div>
  );
}
