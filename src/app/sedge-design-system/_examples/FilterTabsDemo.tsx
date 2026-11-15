"use client";

import { useState } from "react";
import FilterTabs from "../../../components/ui/FilterTabs";

const ITEMS = [
  { value: "all", label: "All" },
  { value: "cheese", label: "Cheese", marker: "var(--marigold-bold)" },
  { value: "yarn", label: "Yarn", marker: "var(--pink-bold)" },
  { value: "plants", label: "Plants", marker: "var(--green-bold)" },
  { value: "books", label: "Books", marker: "var(--lilac-bold)" },
];

export default function FilterTabsDemo() {
  const [value, setValue] = useState("plants");
  return (
    <div style={{ display: "grid", gap: "var(--space-6)", marginBottom: "var(--space-3)" }}>
      <FilterTabs items={ITEMS} value={value} onChange={setValue} label="Filter by topic" />
      <FilterTabs items={ITEMS} value="plants" onChange={() => {}} label="Hover state example" data-state="hover" />
    </div>
  );
}
