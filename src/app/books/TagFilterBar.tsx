"use client";

import { useState } from "react";
import Badge from "../../components/ui/Badge";
import type { BadgeTone } from "../../components/ui/Badge";
import Modal from "../../components/ui/Modal";
import BookTile, { type ShelfEntry } from "./BookTile";

interface TagFilterBarProps {
  allTags: string[];
  entries: ShelfEntry[];
}

const TAG_TONES: Record<string, BadgeTone> = {
  Adventure: { background: "sky-soft", foreground: "cherry-bold" },
  "Book Club": { background: "cherry-bold", foreground: "pink-soft" },
  Dystopian: { background: "cream", foreground: "cherry-soft" },
  Fantasy: { background: "sky-soft", foreground: "chocolate-bold" },
  Favorites: { background: "cream", foreground: "mauve-bold" },
  "Historical Fiction": {
    background: "mauve-bold",
    foreground: "pink-soft",
  },
  History: { background: "pink-soft", foreground: "cherry-bold" },
  "LGBTQ+": { background: "sky-soft", foreground: "cherry-bold" },
  "Literary Fiction": {
    background: "mauve-soft",
    foreground: "chocolate-bold",
  },
  "Made me cry": { background: "cherry-bold", foreground: "sky-soft" },
  Romance: { background: "pink-soft", foreground: "cherry-bold" },
  "Science Fiction": { background: "mauve-soft", foreground: "cherry-bold" },
};

const DEFAULT_TAG_TONE: BadgeTone = {
  background: "cream",
  foreground: "charcoal",
};

export default function TagFilterBar({ allTags, entries }: TagFilterBarProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const matches = selected
    ? entries.filter((entry) => entry.lookup.tags?.includes(selected))
    : [];

  if (allTags.length === 0) return null;

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
        {allTags.map((tag) => {
          const active = tag === selected;

          return (
            <button
              key={tag}
              type="button"
              aria-pressed={active}
              className="bookshelf-tag-filter focus-ring"
              onClick={() =>
                setSelected((current) => (current === tag ? null : tag))
              }
            >
              <Badge
                tone={
                  active
                    ? { background: "charcoal", foreground: "cream" }
                    : (TAG_TONES[tag] ?? DEFAULT_TAG_TONE)
                }
              >
                {tag}
              </Badge>
            </button>
          );
        })}
      </div>

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        eyebrow="Browse by tag"
        title={selected ?? "Books"}
        description={`${matches.length} ${matches.length === 1 ? "book" : "books"} found on the shelf.`}
        colorway="pink-emerald"
        size="lg"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {matches.map(({ lookup, info }) => (
            <BookTile
              key={`${lookup.title}-${lookup.author ?? ""}`}
              lookup={lookup}
              info={info}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}
