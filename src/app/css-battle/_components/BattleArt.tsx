import { divClass, scopeCss, type Challenge } from "../_data/challenges";
import "../css-battle.css";

type BattleArtProps = {
  challenge: Challenge;
  /** "framed" (default) sits on a soft panel at full size. "tile" fills its
   *  box edge to edge and scales to fit, for the cover grid. */
  variant?: "framed" | "tile";
};

/** One solution, drawn for real: a stage standing in for the battle's body, and the single div. */
export default function BattleArt({ challenge, variant = "framed" }: BattleArtProps) {
  return (
    <div className={variant === "tile" ? "cb-tile" : "cb-frame"}>
      <style dangerouslySetInnerHTML={{ __html: scopeCss(challenge) }} />
      <div className={`cb-stage cb-stage--${challenge.key}`} role="img" aria-label={challenge.title}>
        <div className={divClass(challenge)} />
      </div>
    </div>
  );
}
