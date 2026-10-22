"use client";

import { useState } from "react";
import Badge from "../../components/ui/Badge";
import { TAG_TONES, DEFAULT_TAG_TONE } from "./tagTones";
import Modal from "../../components/ui/Modal";
import BookTile, { type ShelfEntry } from "./BookTile";

interface TagFilterBarProps {
  allTags: string[];
  entries: ShelfEntry[];
}

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
                tone={active ? "charcoal" : (TAG_TONES[tag] ?? DEFAULT_TAG_TONE)}
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
