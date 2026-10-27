"use client";

import { useState } from "react";
import Section from "../_components/Section";
import CodeBlock from "../../../components/ui/CodeBlock";
import { SECTIONS } from "../_data/sections";
import Button from "../../../components/ui/Button";

const meta = SECTIONS.find((s) => s.id === "motion")!;

const DURATIONS = [
  { token: "--motion-duration-fast", label: "fast — 200ms", ms: 200 },
  { token: "--motion-duration-base", label: "base — 400ms", ms: 400 },
  { token: "--motion-duration-slow", label: "slow — 600ms", ms: 600 },
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
      lede="Motion adds personality, but it also has a job: showing what changed and making interactions feel responsive."
      description="Fast transitions handle lightweight interactions like hover states. Slower, more expressive motion is saved for larger changes, while shared durations and easing curves keep everything feeling related. When someone prefers less movement, the system quiets itself automatically."
    >
      <div className="motion-section-block">
        <div className='mb-6'>
          <h3 className="sedge-subheading">Durations</h3>
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
          <h3 className="sedge-subheading">Easings</h3>
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
      </div>


      <div className="motion-section-block">
        <div>
          <h3 className="sedge-subheading">Live demo</h3>
          <Button onClick={() => setPlay((n) => n + 1)}>
            Replay all
          </Button>

          <div className="motion-demo-group">
            <div>
              <h4 className="motion-demo-title">Durations</h4>
              <p className="motion-demo-note">Same easing and distance; only the duration changes.</p>
            </div>
            <div className="motion-demo-rows">
              {DURATIONS.map(({ token, label }) => (
                <div className="motion-demo-row" key={token}>
                  <code>{label}</code>
                  <div className="motion-demo-track">
                    <div
                      key={`${play}-${token}`}
                      className="motion-demo-runner"
                      style={{
                        animation: play
                          ? `motion-demo var(${token}) var(--motion-ease-standard) both`
                          : "none",
                      }}
                    >
                      <span className="motion-demo-box" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="motion-demo-group">
            <div>
              <h4 className="motion-demo-title">Easings</h4>
              <p className="motion-demo-note">Same duration and distance; only the easing curve changes.</p>
            </div>
            <div className="motion-demo-rows">
              {EASINGS.map(({ token, label }) => (
                <div className="motion-demo-row" key={token}>
                  <code>{label}</code>
                  <div className="motion-demo-track">
                    <div
                      key={`${play}-${token}`}
                      className="motion-demo-runner"
                      style={{
                        animation: play
                          ? `motion-demo 1000ms var(${token}) both`
                          : "none",
                      }}
                    >
                      <span className="motion-demo-box" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="motion-section-block">
        <div>
          <h3 className="sedge-subheading">Cursor</h3>
          <p className='mb-8' style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            The cursor stays a compact dot at rest, expands into a small, hollow ring
            over interactive elements, and remains a dot over selectable text.
            Form controls retain their useful native cursors. On dark surfaces,
            the custom cursor shifts to soft iris to maintain contrast.
          </p>
          <div className='mb-8' style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 112,
                  height: 64,
                  border: "1px dashed var(--iris-soft)",
                  borderRadius: "var(--radius-md)",
                }}
              />
              <p style={{ marginTop: 8, fontSize: 12, color: "var(--text-muted)" }}>
                Default — 7px dot
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <Button>
                Hover Me
              </Button>
              <p style={{ marginTop: 8, fontSize: 12, color: "var(--text-muted)" }}>
                Interactive — 16px ring
              </p>
            </div>
          </div>
          <p className='mb-6' style={{ color: "var(--text-secondary)", fontSize: 14 }}>
            The transition uses <code>--motion-hover-duration</code> (200ms).
            Form controls, editable content, disabled controls, and explicitly
            opted-out regions retain their native cursor:
          </p>
          <h3 className="sedge-subheading">Usage</h3>
          <CodeBlock
            code={`<div data-cursor-native>\n  {/* Use the native cursor throughout this region. */}\n</div>`}
          />
        </div>
      </div>

      <style>{`
        .motion-section-block {
          display: flex;
          flex-direction: column;
        }

        .motion-demo-group {
          display: grid;
          gap: 10px;
          margin-top: 20px;
          max-width: 520px;
        }

        .motion-demo-title {
          margin: 0;
          font-size: var(--text-sm);
          font-weight: var(--font-semibold);
        }

        .motion-demo-note {
          margin: 2px 0 0;
          color: var(--text-muted);
          font-size: var(--text-xs);
        }

        .motion-demo-rows {
          display: grid;
          gap: 8px;
        }

        .motion-demo-row {
          display: grid;
          grid-template-columns: 8rem minmax(8rem, 1fr);
          align-items: center;
          gap: 12px;
        }

        .motion-demo-row code {
          color: var(--text-secondary);
          font-size: var(--text-xs);
        }

        .motion-demo-track {
          height: 18px;
          overflow: hidden;
          border-radius: var(--radius-pill);
          background: color-mix(in srgb, var(--iris-soft) 30%, transparent);
        }

        .motion-demo-runner {
          width: calc(100% - 18px);
          height: 18px;
        }

        .motion-demo-box {
          display: block;
          width: 18px;
          height: 18px;
          border-radius: var(--radius-xs);
          background: var(--iris-bold);
        }

        @keyframes motion-demo {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }

        @media (width < 40rem) {
          .motion-demo-row {
            grid-template-columns: 6.5rem minmax(7rem, 1fr);
            gap: 8px;
          }
        }
      `}</style>
    </Section>
  );
}
