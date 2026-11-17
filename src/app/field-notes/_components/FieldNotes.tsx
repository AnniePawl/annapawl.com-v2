"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import { Search } from "lucide-react";
import CodeBlock from "../../../components/ui/CodeBlock";
import FilterTabs from "../../../components/ui/FilterTabs";
import Input from "../../../components/ui/Input";
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
 * Sorts notes into topics and inside each topic, 
 * into sub-groups
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

function groupId(topic: Topic, group: string) {
  return `${slug(topic)}-${slug(group)}`;
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

  const tabs = [
    { value: "All" as Filter, label: "All" },
    ...TOPICS.map((t) => ({ value: t.name as Filter, label: t.name, marker: `var(--${t.hue}-bold)` })),
  ];

  // On phones the tab row sticks to the top. Once it has, a search
  // button takes you back up to the search field.
  const sentinel = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) =>
      setStuck(!entry.isIntersecting && entry.boundingClientRect.top < 0)
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Switching topics while the bar is stuck starts the new topic at
  // the top, right under the bar.
  const jumpOnChange = useRef(false);

  function changeFilter(next: Filter) {
    jumpOnChange.current = stuck;
    setFilter(next);
  }

  useEffect(() => {
    if (!jumpOnChange.current || !sentinel.current) return;
    jumpOnChange.current = false;
    const top = sentinel.current.getBoundingClientRect().top + window.scrollY + 1;
    window.scrollTo({ top, behavior: "instant" });
  }, [filter]);

  function goToSearch() {
    searchInput.current?.scrollIntoView({ block: "center", behavior: "instant" });
    searchInput.current?.focus({ preventScroll: true });
  }

  const current = filter === "All" ? null : sections.find((s) => s.topic === filter);
  const jumpGroups = current?.groups.filter((g) => g.name) ?? [];

  const search = (
    <div className="fn-search">
      <label htmlFor={searchId} className="sr-only">
        Search notes
      </label>
      <Input
        ref={searchInput}
        id={searchId}
        variant="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search notes"
      />
    </div>
  );

  return (
    <div className="field-notes">
      <div className="fn-controls">
        {search}
        <div ref={sentinel} className="fn-sentinel" aria-hidden="true" />
        <div className="fn-nav" data-stuck={stuck || undefined}>
          <FilterTabs items={tabs} value={filter} onChange={changeFilter} label="Filter by topic" />
          <button
            type="button"
            className="fn-search-jump focus-ring"
            onClick={goToSearch}
            tabIndex={stuck ? 0 : -1}
            aria-hidden={!stuck}
          >
            <Search aria-hidden="true" />
            <span className="sr-only">Search notes</span>
          </button>
        </div>
      </div>

      {current && jumpGroups.length > 1 && (
        <nav aria-label={`${current.topic} groups`} className="fn-jump" style={topicStyle(current.topic)}>
          <span className="fn-jump-label" aria-hidden="true">
            Jump to
          </span>
          <ul>
            {jumpGroups.map((g) => (
              <li key={g.name}>
                <a href={`#${groupId(current.topic, g.name!)}`} className="focus-ring">
                  {g.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* The visible counts sit beside each topic heading. 
          For screen readers, results announced as filters change. */}
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
                  {group.name && (
                    <h3 id={groupId(section.topic, group.name)} className="fn-group-title">
                      {group.name}
                    </h3>
                  )}
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
          individually b/c its general knowledge and they're my own version. */}
      <footer id="where-i-learn" className="fn-sources">
        <h2 className="fn-sources-label">Where I learn</h2>
        <p>
          These wee notes bring together what I learn from building, experimenting, and reading
          the docs—a quick reference I come back to often. The knowledge comes from lots of
          generous places, with frequent visits to{" "}
          <TextLink tone="pink-bold" href="https://developer.mozilla.org">MDN Web Docs</TextLink> and the
          official <TextLink tone="pink-bold" href="https://react.dev">React docs</TextLink>.
        </p>
      </footer>
    </div>
  );
}
