"use client";

import { useEffect, useState } from "react";
import Editor from "./Editor";

/**
 * Live HTML/CSS playground 
 * (two editor panes + a debounced iframe preview)
 */

const DEFAULT_HTML = `<div class="rainbow"></div>`;

const DEFAULT_CSS = `body {
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 130px 0 0 0;
  background-color: #D1E3FF;
}

.rainbow {
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  background-color: var(--periwinkle-soft);
  box-shadow:
    0 0 0 1.5em #B985EB,
    0 0 0 3.5em #8B87F5,
    0 0 0 5.5em #67CAF8,
    0 0 0 7.5em #D3F392,
    0 0 0 9.5em #FFE669,
    0 0 0 11.5em #ff9f4cff,
    0 0 0 13.5em #FF6358;
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
