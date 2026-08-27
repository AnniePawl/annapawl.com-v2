"use client";

import { useState } from "react";
import Section from "../_components/Section";
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
