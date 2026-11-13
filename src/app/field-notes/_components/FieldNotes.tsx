"use client";

import { useId, useState, type CSSProperties } from "react";
import CodeBlock from "../../../components/ui/CodeBlock";
import TextLink from "../../../components/ui/TextLink";
import { GROUP_CARD_LABELS, NOTES, TOPICS, noteId, type FieldNote, type Topic } from "../_data/notes";

type Filter = Topic | "All";

const HUE = Object.fromEntries(TOPICS.map((t) => [t.name, t.hue])) as Record<
  Topic,
  (typeof TOPICS)[number]["hue"]
>;

function topicStyle(topic: Topic): CSSProperties {
  const hue = HUE[topic];
  return {
    "--fn-marker": `var(--${hue}-bold)`,
    "--fn-soft": `var(--${hue}-soft)`,
  } as CSSProperties;
}

type Group = { name: string | null; notes: FieldNote[] };
type Section = { topic: Topic; groups: Group[] };

/**
 * Sorts notes into topics (in TOPICS order) and, inside each topic, into
 * groups: the ones TOPICS lists first, in that order, then any others in
 * the order they appear. Notes without a group come first.
 */
function organize(notes: FieldNote[]): Section[] {
  return TOPICS.map(({ name: topic, groups: order = [] }) => {
    const inTopic = notes.filter((note) => note.topic === topic);
    const names = [...new Set(inTopic.map((note) => note.group ?? null))].sort((a, b) => {
      if (a === null) return -1;
      if (b === null) return 1;
      const ia = order.indexOf(a);
      const ib = order.indexOf(b);
      return (ia === -1 ? Infinity : ia) - (ib === -1 ? Infinity : ib);
    });
    return {
      topic,
      groups: names.map((name) => ({
        name,
        notes: inTopic.filter((note) => (note.group ?? null) === name),
      })),
    };
  }).filter((section) => section.groups.length > 0);
}

function countLabel(count: number) {
  return count === 1 ? "1 note" : `${count} notes`;
}

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function NoteCard({ note }: { note: FieldNote }) {
  return (
    <article id={noteId(note.name)} className="fn-card" style={topicStyle(note.topic)}>
      <span className="fn-topic">
        {note.topic}
        {note.group && (
          <span className="fn-topic-group">· {GROUP_CARD_LABELS[note.group] ?? note.group}</span>
        )}
      </span>
      <h4 className="fn-name">{note.name}</h4>
      <p className="fn-model">{note.model}</p>
      <CodeBlock code={note.example} tone={HUE[note.topic]} copyable={false} />
      {note.note && (
        <div className="fn-note">
          <strong>Note to self</strong>
          <p>{note.note}</p>
        </div>
      )}
    </article>
  );
}

export default function FieldNotes() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const searchId = useId();

  const q = query.trim().toLowerCase();
  const visible = NOTES.filter((note) => filter === "All" || note.topic === filter).filter(
    (note) =>
      !q ||
      [note.name, note.topic, note.group ?? "", note.model, note.example, note.note ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q)
  );
  const sections = organize(visible);

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
            placeholder="closest, strings, :has…"
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

      {/* The visible counts sit beside each topic heading; this one is
          only for screen readers, announcing results as filters change. */}
      <p className="sr-only" aria-live="polite">
        {countLabel(visible.length)}
      </p>

      {sections.length > 0 ? (
        <div className="fn-sections">
          {sections.map((section) => (
            <section
              key={section.topic}
              aria-labelledby={`topic-${slug(section.topic)}`}
              className="fn-section"
              style={topicStyle(section.topic)}
            >
              <div className="fn-section-head">
                <h2 id={`topic-${slug(section.topic)}`} className="fn-section-title">
                  {section.topic}
                  <span className="fn-section-mark" aria-hidden="true" />
                </h2>
                <span className="fn-section-count">
                  {countLabel(section.groups.reduce((sum, group) => sum + group.notes.length, 0))}
                </span>
              </div>
              {section.groups.map((group) => (
                <div key={group.name ?? "ungrouped"} className="fn-group">
                  {group.name && <h3 className="fn-group-title">{group.name}</h3>}
                  <div className="fn-grid">
                    {group.notes.map((note) => (
                      <NoteCard key={note.name} note={note} />
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </div>
      ) : (
        <p className="fn-empty">
          Nothing matches that yet. Sounds like something to look up, then write down.
        </p>
      )}

      {/* General references for the whole page. Cards don't cite
          individually: they're my own notes, in my own words. */}
      <footer className="fn-sources">
        <h2 className="fn-sources-label">Where I learn</h2>
        <p>
          These are my own notes, written my way, but the knowledge comes
          from lots of generous places. The ones I lean on most are the
          official <TextLink href="https://react.dev">React docs</TextLink>{" "}
          and <TextLink href="https://developer.mozilla.org">MDN Web Docs</TextLink>.
        </p>
      </footer>
    </div>
  );
}
