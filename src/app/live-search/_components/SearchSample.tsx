"use client";
import { useId, useState } from "react";
import Input from "../../../components/ui/Input";
import { FieldHint, FieldLabel } from "../../../components/ui/FormField";
import "./search-sample.css";

const COLORS = [
  "turquoise",
  "gold",
  "hotpink",
  "dodgerblue",
  "deeppink",
  "springgreen",
  "deepskyblue",
  "orangered",
  "darkorange",
  "blueviolet",
  "chartreuse",
  "magenta",
];

export default function SearchSample() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchId = useId();

  const filteredColors = COLORS.filter((color) => color.includes(searchTerm));
  const count = filteredColors.length;

  return (
    <div className="ls-demo">
      <FieldLabel htmlFor={searchId} className="sr-only">
        Search colors
      </FieldLabel>
      <Input
        id={searchId}
        variant="search"
        placeholder="Search colors"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FieldHint className="ls-count" aria-live="polite">
        {count} {count === 1 ? "color" : "colors"}
      </FieldHint>
      {count > 0 ? (
        <ul className="ls-list">
          {filteredColors.map((color) => (
            <li key={color} className="ls-item">
              <span className="ls-swatch" style={{ background: color }} aria-hidden="true" />
              {color}
            </li>
          ))}
        </ul>
      ) : (
        <FieldHint className="ls-empty">No colors called “{searchTerm}”… yet.</FieldHint>
      )}
    </div>
  );
}
