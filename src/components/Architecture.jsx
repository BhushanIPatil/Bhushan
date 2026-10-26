import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";

const nodes = [
  { x: 20, y: 110, w: 130, h: 70, t: "React UI", s: "Vite · HTML / CSS" },
  { x: 250, y: 110, w: 150, h: 70, t: "API", s: "Python · C# / .NET" },
  { x: 590, y: 110, w: 150, h: 70, t: "Azure SQL", s: "MS SQL Server" },
  { x: 20, y: 230, w: 130, h: 60, t: "Event Hubs", s: "events in" },
  { x: 250, y: 230, w: 150, h: 60, t: "Function Apps", s: "event-driven" },
  { x: 590, y: 230, w: 150, h: 60, t: "Logic Apps", s: "workflows" },
];

// dir: "fwd" (blue) or "back" (green). Each lane carries two staggered packets.
const lanes = [
  { id: "l1", d: "M150,139 H250", dir: "fwd" },
  { id: "l2", d: "M250,151 H150", dir: "back" },
  { id: "l3", d: "M400,139 H590", dir: "fwd" },
  { id: "l4", d: "M590,151 H400", dir: "back" },
  { id: "l5", d: "M150,260 H250", dir: "fwd" },
  { id: "l6", d: "M400,260 H590", dir: "fwd" },
  { id: "l7", d: "M325,230 V180", dir: "fwd" },
  { id: "l8", d: "M665,230 V180", dir: "fwd" },
];

export default function Architecture() {
  return (
    <Section id="architecture" eyebrow="Architecture" title="Systems I build on Azure" tone="dark">
      <Reveal>
        <p className="lede-lg">
          Requests flow from the React UI through the API to Azure SQL, while events move through
          Event Hubs, Function Apps and Logic Apps to automate business processes.
        </p>
      </Reveal>

      <Reveal className="arch-scroll" delay={100}>
        <svg
          className="arch"
          viewBox="0 0 760 310"
          role="img"
          aria-label="Architecture diagram: React UI to API to Azure SQL, and Event Hubs to Function Apps to Logic Apps"
        >
          <text x="20" y="62" className="cap">REQUEST FLOW</text>
          <text x="20" y="212" className="cap">EVENT-DRIVEN FLOW</text>

          <rect className="group" x="238" y="98" width="174" height="94" rx="10" />
          <text x="325" y="90" textAnchor="middle" className="group-label">Azure App Service</text>

          {lanes.map((l) => (
            <path key={l.id} id={l.id} d={l.d} className={`lane ${l.dir}`} />
          ))}

          {nodes.map((n) => (
            <g className="a-node" key={n.t}>
              <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="10" />
              <text x={n.x + n.w / 2} y={n.y + n.h / 2 - 2} textAnchor="middle" className="t">
                {n.t}
              </text>
              <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 16} textAnchor="middle" className="s">
                {n.s}
              </text>
            </g>
          ))}

          {lanes.map((l) =>
            [0, 1].map((k) => (
              <circle key={`${l.id}-${k}`} r="3.8" className={`packet ${l.dir}`} style={{ opacity: 0 }}>
                <set attributeName="opacity" to="1" begin={`${k * 1.2}s`} />
                <animateMotion dur="2.4s" begin={`${k * 1.2}s`} repeatCount="indefinite">
                  <mpath href={`#${l.id}`} />
                </animateMotion>
              </circle>
            ))
          )}
        </svg>
      </Reveal>

      <p className="legend">
        <span className="dot dot-blue" /> requests and events <span className="dot dot-green" /> responses
      </p>
    </Section>
  );
}
