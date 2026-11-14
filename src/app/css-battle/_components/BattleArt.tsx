import type { CSSProperties } from "react";
import { divClass, scopeCss, stageBackground, type Challenge } from "../_data/challenges";
import "../css-battle.css";

type BattleArtProps = {
  challenge: Challenge;
  variant?: "framed" | "tile";
};

export default function BattleArt({ challenge, variant = "framed" }: BattleArtProps) {
  return (
    <div
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
