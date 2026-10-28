"use client";

import { useState } from "react";
import Section from "../_components/Section";
import CodeBlock from "../../../components/ui/CodeBlock";
import { SECTIONS } from "../_data/sections";
import Button from "../../../components/ui/Button";
import "./motion.css";

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
      lede="Personality in motion."
      description="It shows what changed and makes interactions feel responsive. Fast transitions handle lightweight interactions like hover states. Slower, more expressive motion is saved for larger changes, while shared durations and easing curves keep everything feeling related. When someone prefers less movement, the system quiets itself automatically."
    >
      <div className="motion-section-block">
        <div className="motion-token-group">
          <h3 className="sedge-subheading">Durations</h3>
          <div className="motion-token-list">
            {DURATIONS.map(({ token, label }) => (
              <div key={token} className="motion-token-row">
                <code className="motion-token-name">{token}</code>
                <span className="motion-token-value">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="sedge-subheading">Easings</h3>
          <div className="motion-token-list">
            {EASINGS.map(({ token, label }) => (
              <div key={token} className="motion-token-row">
                <code className="motion-token-name">{token}</code>
                <span className="motion-token-value">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="motion-section-block">
        <div>
          <h3 className="sedge-subheading">Live demo</h3>
          <Button tone='pink' onClick={() => setPlay((n) => n + 1)}>
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
          <p className="motion-cursor-copy">
            The cursor stays a compact dot at rest, expands into a small, hollow ring
            over interactive elements, and remains a dot over selectable text.
            Form controls retain their useful native cursors. On dark surfaces,
            the custom cursor shifts to soft iris to maintain contrast.
          </p>
          <div className="motion-cursor-examples">
            <div className="motion-cursor-example">
              <div className="motion-cursor-area" />
              <p className="motion-cursor-caption">Default — 7px dot</p>
            </div>
            <div className="motion-cursor-example">
              <Button tone='pink'>Hover Me</Button>
              <p className="motion-cursor-caption">Interactive — 16px ring</p>
            </div>
          </div>
          <p className="motion-cursor-copy">
            The transition uses <code>--motion-hover-duration</code> (200ms).
            Form controls, editable content, disabled controls, and explicitly
            opted-out regions retain their native cursor:
          </p>
          <h3 className="sedge-subheading">Usage</h3>
          <CodeBlock 
            tone='pink'
            code={`<div data-cursor-native>\n  {/* Use the native cursor throughout this region. */}\n</div>`}
          />
        </div>
      </div>

    </Section>
  );
}
