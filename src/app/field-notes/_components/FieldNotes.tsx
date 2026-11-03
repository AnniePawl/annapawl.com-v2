"use client";

import { useId, useState, type CSSProperties } from "react";
import CodeBlock from "../../../components/ui/CodeBlock";
import { NOTES, TOPICS, noteId, type Topic } from "../_data/notes";

type Filter = Topic | "All";

const HUE = Object.fromEntries(TOPICS.map((t) => [t.name, t.hue])) as Record<
  Topic,
  (typeof TOPICS)[number]["hue"]
>;

const TOPIC_ORDER = TOPICS.map((t) => t.name);

function topicStyle(topic: Topic): CSSProperties {
  const hue = HUE[topic];
  return {
    "--fn-marker": `var(--${hue}-bold)`,
    "--fn-soft": `var(--${hue}-soft)`,
  } as CSSProperties;
}

export default function FieldNotes() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const searchId = useId();

  const q = query.trim().toLowerCase();
  // Cards follow the topic order in TOPICS; within a topic, the order in NOTES.
  const visible = [...NOTES]
    .sort((a, b) => TOPIC_ORDER.indexOf(a.topic) - TOPIC_ORDER.indexOf(b.topic))
    .filter((note) => filter === "All" || note.topic === filter).filter(
    (note) =>
      !q ||
      [note.name, note.model, note.example, note.note ?? ""].join(" ").toLowerCase().includes(q)
  );

  const filters: Filter[] = ["All", ...TOPICS.map((t) => t.name)];

  return (
    <div className="field-notes">
      <div className="fn-toolbar">
        <div className="fn-search">
          <label htmlFor={searchId}>Search notes</label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="closest, hidden, :has…"
            className="focus-ring"
          />
        </div>
        <div role="group" aria-label="Filter by topic" className="fn-filters">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              className="fn-chip focus-ring"
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
              style={name === "All" ? undefined : topicStyle(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <p className="fn-count" aria-live="polite">
        {visible.length === 1 ? "1 note" : `${visible.length} notes`}
      </p>

      {visible.length > 0 ? (
        <div className="fn-grid">
          {visible.map((note) => (
            <article
              key={note.name}
              id={noteId(note.name)}
              className="fn-card"
              style={topicStyle(note.topic)}
            >
              <span className="fn-topic">{note.topic}</span>
              <h2 className="fn-name">{note.name}</h2>
              <p className="fn-model">{note.model}</p>
              <CodeBlock code={note.example} tone={HUE[note.topic]} copyable={false} />
              {note.note && (
                <div className="fn-note">
                  <strong>Note to self</strong>
                  <p>{note.note}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="fn-empty">
          Nothing matches that yet. Sounds like something to look up, then write down.
        </p>
      )}
    </div>
  );
}
