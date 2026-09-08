import { ReactNode } from "react";

// Small hand-drawn-style marginalia — arrows, squiggle underlines, sticky
// notes, numbered badges. The recurring "voice" shared across poster
// sections. Decorative marks are aria-hidden; text stays real Inter,
// just italicized/rotated to read as a quick handwritten note rather than
// switching in a second typeface.

export function DoodleArrow({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 40 36"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M4 4 C 4 22 14 28 30 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M22 30 L30 26 L27 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squiggle({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M0,4 Q5,0 10,4 T20,4 T30,4 T40,4 T50,4 T60,4 T70,4 T80,4 T90,4 T100,4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/**
 * A rotated hand-drawn-feel note with an arrow pointing at whatever it's
 * annotating. `style` positions/rotates it — every use is different, so
 * that's left to the caller rather than baked in as variants.
 */
export function PosterNote({
  children,
  flipArrow = false,
  style,
}: {
  children: ReactNode;
  flipArrow?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <span className="poster-note" style={style}>
      {children}
      <DoodleArrow
        style={{
          transform: flipArrow ? "scaleX(-1)" : undefined,
        }}
      />
    </span>
  );
}

export function StickyNote({
  children,
  style,
}: {
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className="poster-sticky" style={style}>
      {children}
    </div>
  );
}

const BADGE_COLORS = [
  "var(--pink-soft)",
  "var(--orange-soft)",
  "var(--mint-soft)",
  "var(--violet-soft)",
  "var(--sky-soft)",
  "var(--yellow-soft)",
];

export function NumberBadge({ index }: { index: number }) {
  return (
    <span
      className="poster-badge"
      style={{ background: BADGE_COLORS[index % BADGE_COLORS.length] }}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}
