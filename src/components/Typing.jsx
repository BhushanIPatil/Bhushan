import { useEffect, useState } from "react";

const reduceMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Typing({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduceMotion()) return;
    const word = words[index % words.length];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === "") {
      t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => i + 1);
      }, 250);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? 30 : 65
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  if (reduceMotion()) return <span className="typing">{words[0]}</span>;

  return (
    <span className="typing">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
