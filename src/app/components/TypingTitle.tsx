"use client";
import { useEffect, useState } from "react";

type Props = {
  items: string[];
  typingSpeed?: number;   // ms per character while typing
  deletingSpeed?: number; // ms per character while deleting
  pause?: number;         // ms to pause when word is complete
};

export default function TypingTitle({
  items,
  typingSpeed = 90,
  deletingSpeed = 50,
  pause = 900,
}: Props) {
  const [idx, setIdx] = useState(0);          // which word
  const [text, setText] = useState("");       // visible substring
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = items[idx % items.length];

    // choose speed based on state
    const speed = deleting ? deletingSpeed : typingSpeed;

    const tick = setTimeout(() => {
      if (!deleting) {
        // typing forward
        const next = full.slice(0, text.length + 1);
        setText(next);
        if (next === full) {
          // pause at full word, then start deleting
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        // deleting backward
        const next = full.slice(0, text.length - 1);
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % items.length);
        }
      }
    }, speed);

    return () => clearTimeout(tick);
  }, [text, deleting, idx, items, typingSpeed, deletingSpeed, pause]);

  return (
    <span aria-live="polite" className="inline-flex items-center">
      {text}
      {/* caret */}
      <span className="ml-1 h-[1em] w-[0.12em] bg-current animate-[blink_1s_steps(2)_infinite]"></span>
    </span>
  );
}
