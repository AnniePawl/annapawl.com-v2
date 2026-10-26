// The teacup build-along's CSS, one string per step. The post shows
// these in its code blocks, and TeacupDemo draws from the same strings,
// so editing a value here updates both.

export const TEACUP_CUP = `.teacup {
  --cup: #B8B5FF;
  --cup-dark: #8B87F5;
  --saucer: #D7BAFF;
  --outline: #8884f4ff;

  position: relative;
  width: 110px;
  height: 100px;
  border: 3px solid var(--outline);
  border-radius: 0 0 40px 40px;
  background: var(--cup);
}`;

export const TEACUP_HANDLE = `.teacup::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 85px;
  z-index: -1;
  width: 40px;
  height: 40px;
  border: 10px solid var(--cup);
  border-radius: 50%;
  box-shadow:
    0 0 0 3px var(--outline),
    inset 0 0 0 3px var(--outline);
}`;

export const TEACUP_SAUCER = `.teacup::after {
  content: "";
  position: absolute;
  bottom: -16px;
  left: -26px;
  width: 164px;
  height: 10px;
  border: 3px solid var(--outline);
  border-radius: 12px;
  background: var(--saucer);
}`;
