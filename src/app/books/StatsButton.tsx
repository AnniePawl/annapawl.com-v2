"use client";

import { useState, type CSSProperties } from "react";
import { ChartColumn } from "lucide-react";
import Button from "../../components/ui/Button";
import Drawer from "../../components/ui/Drawer";
import type { TagCount } from "./BookshelfBrowser";
import type { ReadingStats } from "./stats";
import { tagTone } from "./tagTones";

interface StatsButtonProps {
  stats: ReadingStats;
  tags: TagCount[];
}

/**
 * Trigger + side drawer for reading stats. A client component because
 * BooksPage (page.tsx) is an async server component; the numbers are
 * computed server-side (stats.ts) and passed in.
 */
export default function StatsButton({ stats, tags }: StatsButtonProps) {
  const [open, setOpen] = useState(false);
  const missingPageData = stats.totalBooks - stats.booksWithPageData;

  // Most-read tags first; bars are scaled to the biggest count.
  const byCount = [...tags].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  const max = byCount[0]?.count ?? 1;

  return (
    <>
      <Button size="sm" startIcon={<ChartColumn />} onClick={() => setOpen(true)}>
        Reading stats
      </Button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        eyebrow="Reading archive"
        title="Reading stats"
        accent="var(--cherry-bold)"
      >
        <dl className="drawer-list">
          <div>
            <dt>Books read</dt>
            <dd>{stats.totalBooks}</dd>
          </div>
          <div>
            <dt>Pages turned</dt>
            <dd>{stats.totalPages.toLocaleString()}</dd>
          </div>
          <div>
            <dt>Authors</dt>
            <dd>{stats.totalAuthors}</dd>
          </div>
          {stats.longest ? (
            <div>
              <dt>Longest</dt>
              <dd>
                {stats.longest.title} · {stats.longest.pages.toLocaleString()}
              </dd>
            </div>
          ) : null}
          {stats.shortest ? (
            <div>
              <dt>Shortest</dt>
              <dd>
                {stats.shortest.title} · {stats.shortest.pages.toLocaleString()}
              </dd>
            </div>
          ) : null}
        </dl>

        {stats.fiction + stats.nonfiction > 0 ? (
          <>
            <span className="drawer-section-label">Fiction vs. nonfiction</span>
            <div
              className="bookshelf-split"
              role="img"
              aria-label={`${stats.fiction} fiction, ${stats.nonfiction} nonfiction`}
            >
              <span
                className="bookshelf-split-fiction"
                style={{ flexGrow: stats.fiction }}
              />
              <span
                className="bookshelf-split-nonfiction"
                style={{ flexGrow: stats.nonfiction }}
              />
            </div>
            <div className="bookshelf-split-legend">
              <span>
                <span className="bookshelf-split-key bookshelf-split-fiction" aria-hidden="true" />
                Fiction · {stats.fiction}
              </span>
              <span>
                <span className="bookshelf-split-key bookshelf-split-nonfiction" aria-hidden="true" />
                Nonfiction · {stats.nonfiction}
              </span>
            </div>
          </>
        ) : null}

        {stats.oldest && stats.newest && stats.newest.year > stats.oldest.year ? (
          <>
            <span className="drawer-section-label">Time traveled</span>
            <p className="bookshelf-stat-sentence">
              From <em>{stats.oldest.title}</em> ({stats.oldest.year}) to{" "}
              <em>{stats.newest.title}</em> ({stats.newest.year}) —{" "}
              {stats.newest.year - stats.oldest.year} years of books.
            </p>
          </>
        ) : null}

        {stats.repeatAuthors.length > 0 ? (
          <>
            <span className="drawer-section-label">Authors you came back to</span>
            <dl className="drawer-list drawer-list--tight">
              {stats.repeatAuthors.map(({ author, count }) => (
                <div key={author}>
                  <dt>{author}</dt>
                  <dd>{count} books</dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}

        {byCount.length > 0 ? (
          <>
            <span className="drawer-section-label">By tag</span>
            <ul className="bookshelf-tag-bars">
              {byCount.map(({ name, count }) => (
                <li
                  key={name}
                  style={
                    {
                      "--tag-tone": tagTone(name),
                      "--tag-share": `${(count / max) * 100}%`,
                    } as CSSProperties
                  }
                >
                  <span className="bookshelf-tag-bars-name">{name}</span>
                  <span className="bookshelf-tag-bars-track" aria-hidden="true">
                    <span />
                  </span>
                  <span className="bookshelf-tag-bars-count">{count}</span>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        {missingPageData > 0 ? (
          <p className="drawer-note">
            Page counts come from Google Books, which has none on file for{" "}
            {missingPageData} {missingPageData === 1 ? "book" : "books"} here, so
            pages turned (and longest/shortest) reflect the rest.
          </p>
        ) : null}
      </Drawer>
    </>
  );
}
