"use client";

import { useEffect, useState } from "react";
import "./digital-clock.css";

export function DigitalClock({ cn }: { cn?: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date();
    let hr = date.getHours();
    const min = date.getMinutes();
    const amPm = hr < 12 ? "AM" : "PM";
    if (hr > 12) hr -= 12;
    const paddedHr = String(hr).padStart(2, "0");
    const paddedMin = String(min).padStart(2, "0");
    setTime(`${paddedHr}:${paddedMin} ${amPm}`);
  }, []);

  return (
    <div className={`${cn ?? ""} clock`} aria-hidden="true">
      <p>{time}</p>
    </div>
  );
}
