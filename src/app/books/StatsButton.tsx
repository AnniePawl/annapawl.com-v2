"use client";

import { useState } from "react";
import { ChartColumn } from "lucide-react";
import Modal from "../../components/ui/Modal";
import type { ReadingStats } from "./stats";

interface StatsButtonProps {
  stats: ReadingStats;
}

/**
 * Trigger + modal for reading stats. Split out as its own client
 * component because BooksPage (page.tsx) is an async server component —
 * open/close state has to live somewhere that can use useState. The
 * numbers themselves are computed server-side in page.tsx (see stats.ts)
 * and just passed in as a prop.
 */
export default function StatsButton({ stats }: StatsButtonProps) {
  const [open, setOpen] = useState(false);
  const missingPageData = stats.totalBooks - stats.booksWithPageData;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-full)] bg-[var(--accent-soft)] text-[var(--text-secondary)] transition-colors duration-[var(--motion-hover-duration)] ease-[var(--motion-hover-ease)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
        aria-label="View reading stats"
      >
        <ChartColumn className="h-4 w-4" />
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title="Reading Stats" size="lg">
        <div className="grid grid-cols-3 gap-4">
          <StatTile label="Books read" value={stats.totalBooks} />
          <StatTile label="Pages read" value={stats.totalPages.toLocaleString()} />
          <StatTile label="Authors read" value={stats.totalAuthors} />
        </div>

        {(stats.longest || stats.shortest) && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {stats.longest && (
              <BookStatRow
                label="Longest book"
                title={stats.longest.title}
                detail={`${stats.longest.pages.toLocaleString()} pages`}
              />
            )}
            {stats.shortest && (
              <BookStatRow
                label="Shortest book"
                title={stats.shortest.title}
                detail={`${stats.shortest.pages.toLocaleString()} pages`}
              />
            )}
          </div>
        )}

        {missingPageData > 0 && (
          <p className="mt-6 text-xs text-[var(--text-muted)]">
            Google doesn&rsquo;t have a page count on file for {missingPageData}{" "}
            {missingPageData === 1 ? "book" : "books"} on your shelf, so pages
            read (and longest/shortest) only reflect the rest.
          </p>
        )}
      </Modal>
    </>
  );
}

function StatTile({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-[var(--bg-subtle)] p-4 text-center">
      <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--text-primary)]">
        {value}
      </p>
      <p className="mt-1 text-xs text-[var(--text-muted)]">{label}</p>
    </div>
  );
}

function BookStatRow({
  label,
  title,
  detail,
}: {
  label: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] p-4">
      <p className="text-xs text-[var(--text-muted)]">{label}</p>
      <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">{title}</p>
      <p className="text-xs text-[var(--text-muted)]">{detail}</p>
    </div>
  );
}
