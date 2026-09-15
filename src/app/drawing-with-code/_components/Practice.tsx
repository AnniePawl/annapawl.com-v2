"use client";

import { useEffect, useState } from "react";
import Editor from "./Editor";

/**
 * Live HTML/CSS playground — same shape as the old page's Practice.js
 * (two editor panes + a debounced iframe preview), rebuilt on the
 * modernized Editor below. Same rainbow-ring default example, since it's
 * a nice one to land on and doubles as a mini demo of border-radius +
 * box-shadow the "Beginner's CSS toolkit" section above talks about.
 */

const DEFAULT_HTML = `<div class="rainbow"></div>`;

const DEFAULT_CSS = `body {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #fffcf7;
}

.rainbow {
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  background-color: #fffcf7;
  box-shadow:
    0 0 0 1.5em #dac5ff,
    0 0 0 3.5em #bcc2ff,
    0 0 0 5.5em #caecff,
    0 0 0 7.5em #d9ffa7,
    0 0 0 9.5em #fffb89,
    0 0 0 11.5em #ffd190,
    0 0 0 13.5em #ff8e8e;
}`;

export default function Practice() {
  const [html, setHtml] = useState(DEFAULT_HTML);
  const [css, setCss] = useState(DEFAULT_CSS);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html><body>${html}</body><style>${css}</style></html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css]);

  return (
    <div className="dwc-practice">
      <div className="dwc-practice-panes">
        <Editor title="HTML" language="html" value={html} onChange={setHtml} />
        <Editor title="CSS" language="css" value={css} onChange={setCss} />
      </div>
      <iframe
        className="dwc-practice-preview"
        srcDoc={srcDoc}
        title="Live output"
        sandbox="allow-scripts"
      />
    </div>
  );
}
