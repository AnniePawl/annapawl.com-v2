"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { divClass, scopeCss, stageBackground, type Challenge } from "../_data/challenges";
import "../css-battle.css";

type BattleArtProps = {
  challenge: Challenge;
  variant?: "framed" | "tile";
};

export default function BattleArt({ challenge, variant = "framed" }: BattleArtProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Scales the 400px-wide drawing to fit its box (CSS uses --cb-scale where it scales).
  useEffect(() => {
    const box = ref.current;
    if (!box) return;
    const update = () => box.style.setProperty("--cb-scale", String(box.clientWidth / 400));
    const observer = new ResizeObserver(update);
    observer.observe(box);
    update();
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={variant === "tile" ? "cb-tile" : "cb-frame"}
      style={{ "--cb-bg": stageBackground(challenge) } as CSSProperties}
    >
      <style dangerouslySetInnerHTML={{ __html: scopeCss(challenge) }} />
      <div className={`cb-stage cb-stage--${challenge.key}`} role="img" aria-label={challenge.title}>
        <div className={divClass(challenge)} />
      </div>
    </div>
  );
}
