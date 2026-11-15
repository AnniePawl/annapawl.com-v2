"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export type FilterTabItem<T extends string> = {
  value: T;
  label: string;
  /** Marker and active-bar color, e.g. "var(--green-bold)". */
  marker?: string;
};

type FilterTabsProps<T extends string> = {
  items: FilterTabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  /** Sits at the end of the row, e.g. a search field. */
  end?: ReactNode;
  className?: string;
  "data-state"?: "hover";
};

/*
 * Filter tabs look like tabs but act as toggle buttons (aria-pressed),
 * since they filter one list rather than switch between panels.
 */
export default function FilterTabs<T extends string>({
  items,
  value,
  onChange,
  label,
  end,
  className,
  ...rest
}: FilterTabsProps<T>) {
  const scroller = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState(false);

  // Keeps the active tab clear of the fade at the scroller's edge.
  const reveal = useCallback((behavior: ScrollBehavior) => {
    const el = scroller.current;
    const active = el?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!el || !active) return;
    const box = el.getBoundingClientRect();
    const tab = active.getBoundingClientRect();
    if (tab.left < box.left) el.scrollBy({ left: tab.left - box.left - 16, behavior });
    else if (tab.right > box.right - 48) el.scrollBy({ left: tab.right - box.right + 48, behavior });
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => setFade(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    update();
    const ro = new ResizeObserver(() => {
      reveal("auto");
      update();
    });
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, [reveal]);

  useEffect(() => reveal("smooth"), [value, reveal]);

  return (
    <div className={["filter-tabs", className].filter(Boolean).join(" ")} data-state={rest["data-state"]}>
      <div ref={scroller} className="filter-tabs-scroller" data-fade={fade || undefined}>
        <div role="group" aria-label={label} className="filter-tabs-list">
          {items.map((item) => (
            <button
              key={item.value}
              type="button"
              className="filter-tab focus-ring"
              aria-pressed={item.value === value}
              onClick={() => onChange(item.value)}
              style={item.marker ? ({ "--filter-tab-marker": item.marker } as CSSProperties) : undefined}
              data-marker={item.marker ? "" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {end && <div className="filter-tabs-end">{end}</div>}
    </div>
  );
}
