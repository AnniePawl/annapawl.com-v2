"use client";

// Ported from src/components/css-items/digitalClock/DigitalClock.js.
// Computes the time once, on mount, exactly like the source (it never
// ticked in v1 either -- no setInterval) -- kept as-is rather than
// "fixed" into a live clock, since that would be a behavior change, not
// a port. "use client" + useEffect keeps this SSR-safe: `new Date()`
// only ever runs in the browser, after hydration, never during render,
// and stays accurate at each real page load even if this route is
// statically prerendered at build time (a plain server-computed string
// would instead freeze at whatever time the build ran).
import { useEffect, useState } from "react";

export default function DigitalClock({ cn }: { cn?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date();
    let hr = date.getHours();
    const min = date.getMinutes();
    const amPm = hr < 12 ? "AM" : "PM";
    if (hr > 12) hr -= 12;
    const paddedHr = String(hr).padStart(2, "0");
    const paddedMin = String(min).padStart(2, "0");
    // This is a one-shot read of the current time at mount, not a
    // React-state sync loop -- there's no external subscription to set
    // up, so there's nothing to move into a callback. Suppressed rather
    // than restructured into a lazy-initial-state (which would run
    // during the server render and immediately mismatch the client).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(`${paddedHr}:${paddedMin} ${amPm}`);
  }, []);

  return (
    <div className={`${cn ?? ""} clock`} aria-hidden="true">
      <p>{time}</p>
    </div>
  );
}
