import type { Challenge } from "../_data/challenges";
import BattleArt from "./BattleArt";
import "./battle-cover.css";

/** All the finished results up top, edge to edge. Each one links down to its CSS. */
export default function BattleCover({ challenges }: { challenges: Challenge[] }) {
  return (
    <div className="battle-cover">
      {challenges.map((c) => (
        <a
          key={c.key}
          href={`#${c.key}`}
          className="battle-tile focus-ring"
          aria-label={`${c.title}: see the CSS`}
        >
          <BattleArt challenge={c} variant="tile" />
        </a>
      ))}
    </div>
  );
}
