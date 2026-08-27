"use client";

import { useState } from "react";
import Modal from "../../components/ui/Modal";
import TagChip from "../../components/ui/TagChip";
import BookTile, { type ShelfEntry } from "./BookTile";

interface TagFilterBarProps {
  allTags: string[];
  entries: ShelfEntry[];
}

/**
 * Client component (needs useState for which tag is selected — Server
 * Components can't hand down onClick). Renders the row of tag chips and,
 * when one is selected, a modal listing every book with that tag,
 * reusing the same BookTile as the main shelf grid.
 *
 * v1: one tag at a time, not combined filters ("Favorites" OR "Fantasy",
 * not yet "Favorites" AND "Fantasy"). Clicking the active tag again
 * closes the modal.
 */
export default function TagFilterBar({ allTags, entries }: TagFilterBarProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const matches = selected
    ? entries.filter((entry) => entry.lookup.tags?.includes(selected))
    : [];

  if (allTags.length === 0) return null;

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <TagChip
            key={tag}
            active={tag === selected}
            onClick={() => setSelected((current) => (current === tag ? null : tag))}
          >
            {tag}
          </TagChip>
        ))}
      </div>

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected ?? undefined}
        size="lg"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {matches.map(({ lookup, info }) => (
            <BookTile key={`${lookup.title}-${lookup.author ?? ""}`} lookup={lookup} info={info} />
          ))}
        </div>
      </Modal>
    </>
  );
}
