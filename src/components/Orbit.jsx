const rings = [
  { cls: "r1", tags: ["React", "Python", ".NET"], offset: 0 },
  { cls: "r2", tags: ["Azure", "SQL Server", "Git"], offset: 60 },
];

// Decorative hero visual: tech tags orbiting the initials.
export default function Orbit({ initials }) {
  return (
    <div className="orbit" aria-hidden="true">
      <span className="glow" />
      {rings.map((r) => (
        <div className={`ring ${r.cls}`} key={r.cls}>
          {r.tags.map((t, i) => (
            <div
              className="arm"
              key={t}
              style={{ "--a": `${r.offset + i * (360 / r.tags.length)}deg` }}
            >
              <span className="otag">{t}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="core">
        <span>{initials}</span>
      </div>
    </div>
  );
}
