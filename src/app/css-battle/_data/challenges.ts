import type { PaletteColor } from "../../../components/ui/colorTokens";

/**
 * My CSS Battle solutions, copied as I wrote them for the battle: one div,
 * styled through body and body div. scopeCss() turns them into page-safe
 * CSS so they can sit side by side here.
 */
export type Challenge = {
  /** Used for the section id and the class that scopes the CSS. */
  key: string;
  title: string;
  tone: PaletteColor;
  /** The CodePen pen, codepen.io/annampawl/pen/<slug>. */
  slug: string;
  css: string;
};

export const CHALLENGES: Challenge[] = [
  {
    key: "battle-4",
    title: "Battle #4",
    tone: "pink-bold",
    slug: "zYgLqXY",
    css: `body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
body div {
  display: flex;
  position: relative;
  height: 300px;
  width: 400px;
  background: #62306D;
}
body div::before, body div::after {
  left: 50%;
  top: 50%;
  margin-left: -150px;
  content: "";
  position: absolute;
  background: #F7EC7D;
  height: 100px;
  width: 100px;
}
body div::before {
  border-radius: 0 0 50% 50%;
  box-shadow: 200px 0px #F7EC7D;
}
body div::after {
  transform: translateY(-100px) translateX(100px);
  border-radius: 50% 50% 0 0;
}`,
  },
  {
    key: "daily-2024-11-01",
    title: "Daily target, Nov 1 2024",
    tone: "teal-bold",
    slug: "abejNNx",
    css: `body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
body div {
  height: 300px;
  width: 400px;
  position: relative;
  background: #515697;
}
body div:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -162px;
  height: 275px;
  width: 324px;
  background: #E38F66;
  z-index: 1;
  border-radius: 50% 50% 0 0;
}
body div:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -162px;
  height: 100px;
  width: 324px;
  background-image: linear-gradient(to right, #E38F66 0 10%, #515697 10% 20%, #E38F66 20% 30%, #515697 30% 40%, #E38F66 40% 60%, #515697 60% 70%, #E38F66 70% 80%, #515697 80% 90%, #E38F66 90% 100%);
  z-index: 5;
}`,
  },
  {
    key: "battle-188",
    title: "Battle #188",
    tone: "lilac-bold",
    slug: "ExqMRLN",
    css: `body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  position: relative;
}
body div {
  z-index: -4;
  display: flex;
  height: 300px;
  width: 400px;
  background: #FFFD9B;
  display: flex;
  align-items: center;
  justify-content: center;
}
body div::before {
  z-index: -1;
  position: absolute;
  content: "";
  width: 20px;
  height: 240px;
  border-radius: 20px;
  box-shadow: -80px 0px #969610, 80px 0px #969610;
}
body div::after {
  z-index: -1;
  position: absolute;
  content: "";
  width: 20px;
  height: 340px;
  border-radius: 20px;
  background: #646521;
  transform: rotate(90deg);
  box-shadow: -80px 0px #969610, 80px 0px #969610;
}

body::before {
  z-index: -1;
  content: "";
  z-index: 100;
  position: absolute;
  width: 20px;
  height: 240px;
  border-radius: 20px;
  background: #646521;
}`,
  },
  {
    key: "battle-15",
    title: "Battle #15",
    tone: "sky-bold",
    slug: "ZEgPbaa",
    css: `body {
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
body div {
  height: 300px;
  width: 400px;
  background: #09042A;
}
body div::before {
  content: "";
  position: absolute;
  height: 150px;
  width: 150px;
  transform: translateX(75px) translateY(75px);
  border-radius: 50%;
  background: #7B3F61;
  box-shadow: 100px 0 #E78481;
}
body div::after {
  content: "";
  position: absolute;
  height: 76px;
  width: 82px;
  background: #09042A;
  border-radius: 0 82px;
  transform: translateX(159px) translateY(112px) rotate(47deg);
}`,
  },
];

/**
 * Rewrites a solution so it only styles its own stage: "body" becomes the
 * stage and "body div" the div inside it. The stage plays the part of the
 * battle's body, so the original layout tricks still work, and its height
 * is fixed at 300px instead of 100vh.
 */
export function scopeCss({ key, css }: Challenge): string {
  const stage = `.cb-stage--${key}`;
  return css
    .replace(/height:\s*100vh;\s*/g, "")
    .replace(/\bbody div\b/g, `${stage} > div`)
    .replace(/\bbody\b/g, stage);
}
