import type { CSSProperties } from "react";
import { SHAPES } from "../shapes";
import { LESSONS } from "../lessons";
import type { ShapeVariant } from "./GeometricShape";
import CodeBlock from "../../../components/ui/CodeBlock";
import "./shape-demos.css";
import "./shape-lesson.css";

/**
 * Lesson part: step-by-step frames, anatomy
 * panel for the trickier shapes, finished CSS. Content comes from
 * lessons.ts; colors from shapes.ts. Paragraph goes above it in
 * page.tsx.
 */
export default function ShapeLesson({ shape }: { shape: ShapeVariant }) {
  const lesson = LESSONS[shape];
  const colors = SHAPES.find((s) => s.id === shape)!;
  const style = {
    "--demo-fill": `var(--${colors.fill})`,
    "--demo-bg": `var(--${colors.tile})`,
  } as CSSProperties;

  return (
    <div className="shape-lesson" style={style}>
      <div className="shape-lesson-block">
        <span className="shape-lesson-label">Step by step</span>
        <ol className="shape-steps">
          {lesson.steps.map((step, i) => (
            <li key={step.demo}>
              <div className="shape-frame">
                <div className={`demo demo--${step.demo}`} aria-hidden="true" />
              </div>
              <span className="shape-step-number">{i + 1}</span>
              <span className="shape-step-caption">{step.caption}</span>
              <code>{step.property}</code>
            </li>
          ))}
        </ol>
      </div>

      {lesson.anatomy ? (
        <div className="shape-lesson-block">
          <span className="shape-lesson-label">Anatomy</span>
          <div className="shape-anatomy">
            <div className="shape-frame">
              <div className={`demo demo--${lesson.anatomy.demo}`} aria-hidden="true" />
            </div>
            <ul className="shape-anatomy-key">
              {lesson.anatomy.key.map((item) => (
                <li key={item.label}>
                  <span
                    className="shape-anatomy-swatch"
                    style={{
                      background: `var(--${item.color === "fill" ? colors.fill : item.color})`,
                    }}
                    aria-hidden="true"
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="shape-lesson-block">
        <span className="shape-lesson-label">The CSS</span>
        <CodeBlock code={lesson.code} />
      </div>
    </div>
  );
}
