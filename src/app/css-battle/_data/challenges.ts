import type { PaletteColor } from "../../../components/ui/colorTokens";

export type Challenge = {
  key: string;
  title: string;
  tone: PaletteColor;
  target: string;
  html?: string;
  css: string;
  cover?: boolean;
};

export const CHALLENGES: Challenge[] = [
  {
    key: "battle-4",
    cover: true,
    title: "Battle #4",
    tone: "pink-bold",
    target: "4",
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
    cover: true,
    title: "Daily target, Nov 1 2024",
    tone: "teal-bold",
    target: "qDnn5lLE6fVaXW37g0Tc",
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
    cover: true,
    title: "Battle #188",
    tone: "lilac-bold",
    target: "188",
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
    cover: true,
    title: "Battle #15",
    tone: "sky-bold",
    target: "15",
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
  {
    key: "daily-2024-11-11",
    title: "Daily target, Nov 11 2024",
    tone: "coral-bold",
    target: "uW5AdLWTjGniqNWjsfOP",
    html: "<div class='frame'></div>",
    css: `body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
body div {
  display: flex;
  justify-content: center;
  position: relative;
  height: 300px;
  width: 400px;
  background: #328FC1;
  overflow: hidden;
}
body div::before {
  content: "";
  position: absolute;
  transform: translateY(-30px);
  width: 110px;
  height: 40px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow: 0px 40px #ffffff, 0px 80px #ffffff, 0px 120px #ffffff, 0px 160px #ffffff, 0px 200px #ffffff, 0px 240px #ffffff, 0px 280px #ffffff, 0px 320px #ffffff, 0px 360px #ffffff;
}`,
  },
  {
    key: "battle-9",
    title: "Battle #9",
    tone: "marigold-bold",
    target: "9",
    css: `body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
body::before {
  content: "";
  position: absolute;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #393E46;
  z-index: 4;
}
body::after {
  content: "";
  position: absolute;
  height: 150px;
  width: 400px;
  background: #4CAAB3;
}
body div {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 400px;
  background: #222730;
}
body div::before {
  content: "";
  position: absolute;
  background: #4CAAB3;
  height: 150px;
  width: 150px;
  z-index: 3;
  transform: rotate(45deg);
}
body div::after {
  content: "";
  position: absolute;
  background: #222730;
  height: 250px;
  width: 250px;
  z-index: 2;
  transform: rotate(45deg);
}`,
  },
  {
    key: "battle-7",
    title: "Battle #7",
    tone: "emerald-bold",
    target: "7",
    html: "<div class='frame'></div>",
    css: `body{
  height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  background:white;
  .frame{
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    height:300px;
    width:400px;
    background:#0B2429;
    &::before {
      content:"";
      position:absolute;
      height:145px;
      width:145px;
      border-radius:65% 0;
      background:#998235;
      box-shadow: -60px 0px #1A4341;
    }
    &::after {
      content:"";
      position:absolute;
      height:145px;
      width:145px;
      border-radius:65% 0;
      background:#F3AC3C;
      transform:translate(60px);
    }
  }
}`,
  },
  {
    key: "battle-6",
    title: "Battle #6",
    tone: "red-bold",
    target: "6",
    css: `body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
body div {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 400px;
  background: #E3516E;
}
body div::before {
  content: "";
  position: absolute;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-image: conic-gradient(#FADE8B 25%, transparent 25% 50%, #F7F3D7 50% 75%, #51B5A9 75% 100%);
}`,
  },
  {
    key: "battle-5",
    title: "Battle #5",
    tone: "orange-bold",
    target: "5",
    css: `body {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
body div {
  z-index: 1;
  position: relative;
  height: 300px;
  width: 400px;
  background: #0B2429;
}
body div::before, body div::after {
  top: 50%;
  right: 50%;
  content: "";
  position: absolute;
  height: 120px;
  width: 120px;
  background: #F3AC3C;
}
body div::before {
  border-radius: 50% 0% 50% 50%;
  box-shadow: 60px -60px #998235;
}
body div::after {
  border-radius: 50%;
  z-index: -1;
  transform: translate(120px, -120px);
}`,
  },
  {
    key: "battle-3",
    title: "Battle #3",
    tone: "blue-bold",
    target: "3",
    css: `body {
  margin: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
body div {
  height: 300px;
  width: 400px;
  background: #6592CF;
  display: flex;
  align-items: center;
  justify-content: center;
}
body div::after {
  content: "";
  height: 150px;
  width: 300px;
  background-image: radial-gradient(circle, #EEB850 0px 25px, #243D83 25px 75px, transparent 75px 125px, #243D83 125px 100px);
}`,
  },
  {
    key: "battle-2",
    title: "Battle #2",
    tone: "cherry-bold",
    target: "2",
    css: `body {
  margin: 0;
  height: 100vh;
  width: 100vw;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
body div {
  height: 300px;
  width: 400px;
  background: #62374e;
}
body div::after {
  content: "";
  position: absolute;
  transform: translateY(50px) translateX(50px);
  width: 50px;
  height: 50px;
  background-color: #fdc57b;
  box-shadow: 0 150px #fdc57b, 250px 0 #fdc57b, 250px 150px #fdc57b;
}`,
  },
];

/** Points the battle's body / body div selectors at this solution's stage. */
export function scopeCss({ key, css }: Challenge): string {
  const stage = `.cb-stage--${key}`;
  return css
    .replace(/(height:\s*100vh|width:\s*100vw);\s*/g, "")
    .replace(/\bbody div\b/g, `${stage} > div`)
    .replace(/\bbody\b/g, stage);
}

export function divClass({ html }: Challenge): string | undefined {
  return html?.match(/class=['"]([^'"]+)['"]/)?.[1];
}

export function stageBackground({ css }: Challenge): string | undefined {
  return css.match(/(?:body div|\.frame)\s*\{[^}]*?background(?:-color)?:\s*(#[0-9a-f]{3,6})/i)?.[1];
}

const TECHNIQUES: [string, RegExp][] = [
  ["box-shadow", /box-shadow/],
  ["border-radius", /border-radius/],
  ["linear-gradient", /linear-gradient/],
  ["radial-gradient", /radial-gradient/],
  ["conic-gradient", /conic-gradient/],
  ["transform", /transform/],
];

/** The notable CSS a solution uses, read from its code. Every one uses ::before/::after. */
export function techniques({ css }: Challenge): string[] {
  return TECHNIQUES.filter(([, pattern]) => pattern.test(css)).map(([name]) => name);
}
