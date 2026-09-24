"use client";

import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, CodepenIcon } from "./icons";
import styles from "./contact.module.css";

const EMAIL = "annampawl@gmail.com";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "copying" | "copied" | "error">("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(false);
  const copyingRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async () => {
    if (copyingRef.current) return;
    copyingRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setStatus("copying");
    try {
      await navigator.clipboard.writeText(EMAIL);
      if (!mountedRef.current) return;
      setStatus("copied");
      timeoutRef.current = setTimeout(() => setStatus("idle"), 2500);
    } catch {
      if (mountedRef.current) setStatus("error");
    } finally {
      copyingRef.current = false;
    }
  };

  return (
    <div className={styles.contact}>
      <div className={styles.controls}>
        <a
          className={`${styles.control} focus-ring`}
          href="https://github.com/AnniePawl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <GitHubIcon />
        </a>
        <a
          className={`${styles.control} focus-ring`}
          href="https://codepen.io/annampawl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="CodePen"
          title="CodePen"
        >
          <CodepenIcon />
        </a>
        <button
          type="button"
          className={`${styles.control} focus-ring`}
          onClick={handleCopy}
          disabled={status === "copying"}
          aria-label="Copy email address"
          title="Copy email address"
        >
          <Mail aria-hidden="true" strokeWidth={1.8} />
        </button>
      </div>
      <span className={styles.feedback} role="status" aria-live="polite" aria-atomic="true">
        {status === "copying" ? "Copying…" : status === "copied" ? "Email copied!" : status === "error" ? `Couldn’t copy. Email: ${EMAIL}` : ""}
      </span>
    </div>
  );
}
