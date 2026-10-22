"use client";

import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";


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
        theme="dark"
        height="250px"
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
