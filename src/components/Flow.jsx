import { Fragment, useEffect, useState } from "react";
import { flow } from "../data.js";

const icons = {
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  cloud: <path d="M7 18a4 4 0 0 1-.5-7.97A5.5 5.5 0 0 1 17 8.5a4.5 4.5 0 0 1 .5 9.5H7Z" />,
};

// Auto-advancing pipeline: the active step lights up, finished links fill in,
// and a pulse travels along the link that leads to the next step.
export default function Flow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % flow.length), 2800);
    return () => clearInterval(id);
  }, [paused]);

  const step = flow[active];

  return (
    <div
      className="flow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flow-track">
        {flow.map((s, i) => (
          <Fragment key={s.title}>
            <button
              type="button"
              className={`node ${i === active ? "active" : ""} ${i < active ? "done" : ""}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <span className="node-icon">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {icons[s.icon]}
                </svg>
              </span>
              <span className="node-label">{s.title}</span>
            </button>
            {i < flow.length - 1 && (
              <span
                className={`link ${i < active ? "done" : ""} ${i === active ? "live" : ""}`}
                aria-hidden="true"
              />
            )}
          </Fragment>
        ))}
      </div>

      <div className="flow-detail" key={active} aria-live="polite">
        <span className="step-tag">
          Step {active + 1} of {flow.length}
        </span>
        <h3>{step.title}</h3>
        <p className="body">{step.text}</p>
        <p className="muted">{step.tools}</p>
      </div>

      <div className="ai-bar">AI-assisted at every step with Cursor and GitHub Copilot</div>
    </div>
  );
}
