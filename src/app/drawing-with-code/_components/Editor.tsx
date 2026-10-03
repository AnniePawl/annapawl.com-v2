"use client";

import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

/**
 * One editor pane. The old page's Editor.js wrapped `react-codemirror2` —
 * a CodeMirror 5 binding that's gone unmaintained for years — with a dark
 * "material" theme bolted on. Swapped for `@uiw/react-codemirror`
 * (CodeMirror 6, actively maintained, React 19-compatible) and CodeMirror's
 * own built-in light theme instead, so the editor panes read as part of
 * this page rather than a dropped-in dark widget.
 */

type Language = "html" | "css";

const LANGUAGE_EXTENSIONS = {
  html: [html()],
  css: [css()],
};

export default function Editor({
  title,
  language,
  value,
  onChange,
}: {
  title: string;
  language: Language;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="dwc-editor">
      <div className="dwc-editor-title">{title}</div>
      <CodeMirror
        value={value}
        onChange={onChange}
        extensions={LANGUAGE_EXTENSIONS[language]}
        theme="light"
        height="220px"
        className="dwc-editor-codemirror"
        basicSetup={{
          foldGutter: false,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
      />
    </div>
  );
}
