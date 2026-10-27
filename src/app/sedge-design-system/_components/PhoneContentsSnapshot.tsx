import type { CSSProperties } from "react";

// A snapshot of the phone contents bar, using its real styles.
const PHONE_SECTIONS = [
  { label: "What is drawing with code?", tone: "red-bold", weight: 2, fill: 100 },
  { label: "It’s all about the <div>", tone: "sky-bold", weight: 5, fill: 100 },
  { label: "CSS, a little recap", tone: "pink-bold", weight: 4, fill: 100 },
  { label: "Beginner’s CSS toolkit", tone: "teal-bold", weight: 9, fill: 40 },
  { label: "Let’s build a teacup", tone: "iris-bold", weight: 6, fill: 0 },
  { label: "Tips from trial and error", tone: "coral-bold", weight: 4, fill: 0 },
  { label: "Try it out", tone: "marigold-bold", weight: 3, fill: 0 },
  { label: "Keep going", tone: "plum-bold", weight: 2, fill: 0 },
];
const CURRENT = 3;

export default function PhoneContentsSnapshot({ open = false }: { open?: boolean }) {
  return (
    <div className="mobile-contents mobile-contents--snapshot" aria-hidden="true">
      <div className="mobile-contents-strip">
        {PHONE_SECTIONS.map((s) => (
          <span
            key={s.label}
            style={
              {
                flexGrow: s.weight,
                "--seg-color": `var(--${s.tone})`,
                "--seg-fill": `${s.fill}%`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="mobile-contents-toggle">
        <span
          className="mobile-contents-mark"
          style={{ background: `var(--${PHONE_SECTIONS[CURRENT].tone})` }}
        />
        <span className="mobile-contents-current">
          {PHONE_SECTIONS[CURRENT].label}
        </span>
        <span className="mobile-contents-caret">{open ? "▴" : "▾"}</span>
      </div>
      {open ? (
        <div className="mobile-contents-panel">
          <ol>
            {PHONE_SECTIONS.map((s, i) => (
              <li key={s.label}>
                <a aria-current={i === CURRENT ? "location" : undefined}>
                  <span style={{ background: `var(--${s.tone})` }} />
                  {s.label}
                  {i === CURRENT ? (
                    <em className="mobile-contents-here">You&rsquo;re here</em>
                  ) : null}
                </a>
              </li>
            ))}
          </ol>
        </div>
      ) : null}
    </div>
  );
}

