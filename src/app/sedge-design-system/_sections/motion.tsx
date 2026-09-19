"use client";

import { useState } from "react";
import Section from "../_components/Section";
import CodeBlock from "../_components/CodeBlock";
import { SECTIONS } from "../_data/sections";
import Button from "../../../components/ui/Button";

const meta = SECTIONS.find((s) => s.id === "motion")!;

const DURATIONS = [
  { token: "--motion-duration-fast", label: "fast — 150ms", ms: 150 },
  { token: "--motion-duration-base", label: "base — 250ms", ms: 250 },
  { token: "--motion-duration-slow", label: "slow — 400ms", ms: 400 },
];

const EASINGS = [
  { token: "--motion-ease-standard", label: "standard" },
  { token: "--motion-ease-emphasized", label: "emphasized" },
  { token: "--motion-ease-decelerate", label: "decelerate" },
  { token: "--motion-ease-accelerate", label: "accelerate" },
];

export default function MotionSection() {
  const [play, setPlay] = useState(0);

  return (
    <Section
      id={meta.id}
      heading={meta.title}
      icon={meta.icon}
      description="Motion adds personality and helps make interactions feel responsive and intuitive. A small set of durations and easing curves keeps motion consistent across the system. Faster transitions handle lightweight interactions like hover states, while slower, more expressive motion is reserved for larger UI changes. Motion is reduced automatically when a user prefers less movement."
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 640 }}>
        <div>
          <h4 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Durations</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {DURATIONS.map(({ token, label }) => (
              <div key={token} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <code style={{ width: 190, fontSize: 12, color: "var(--text-muted)" }}>
                  {token}
                </code>
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Easings</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {EASINGS.map(({ token, label }) => (
              <div key={token} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <code style={{ width: 190, fontSize: 12, color: "var(--text-muted)" }}>
                  {token}
                </code>
                <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Live demo</h4>
          <Button variant="secondary" onClick={() => setPlay((n) => n + 1)}>
            Replay
          </Button>
          <div
            key={play}
            style={{
              marginTop: 16,
              width: 48,
              height: 48,
              borderRadius: "var(--radius-md)",
              background: "var(--accent)",
              animation: `motion-demo var(--motion-modal-duration) var(--motion-modal-ease)`,
            }}
          />
        </div>

        <div>
          <h4 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Cursor</h4>
          <p style={{ marginBottom: 16, color: "var(--text-secondary)", fontSize: 14 }}>
            A reusable &ldquo;tiny dot&rdquo; cursor (<code>components/ui/CustomCursor.tsx</code>),
            mounted once in the root layout and active site-wide. Hover each
            example below to see its live behavior.
          </p>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 16 }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 140,
                  height: 88,
                  border: "1px dashed var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                }}
              />
              <p style={{ marginTop: 8, fontSize: 12, color: "var(--text-muted)" }}>
                Default — 7px dot
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button variant="secondary" style={{ minWidth: 140 }}>
                Hover me
              </Button>
              <p style={{ marginTop: 8, fontSize: 12, color: "var(--text-muted)" }}>
                Interactive — 22px ring
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 140,
                  height: 88,
                  border: "1px dashed var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 8,
                }}
              >
                <span style={{ fontSize: 13 }}>Selectable text</span>
              </div>
              <p style={{ marginTop: 8, fontSize: 12, color: "var(--text-muted)" }}>
                Native — text keeps its I-beam
              </p>
            </div>
          </div>
          <p style={{ marginBottom: 12, color: "var(--text-secondary)", fontSize: 14 }}>
            Transitions over <code>--motion-hover-duration</code> (150ms), and also
            defers to native cursors over form controls, editable content, and
            disabled controls. Opt a region or page out entirely:
          </p>
          <CodeBlock
            code={`<div data-cursor-native>\n  {/* this region always keeps the native cursor */}\n</div>`}
          />
        </div>
      </div>

      <style>{`
        @keyframes motion-demo {
          from { opacity: 0; transform: translateY(-8px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </Section>
  );
}
