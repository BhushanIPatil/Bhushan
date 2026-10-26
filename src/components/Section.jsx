import Reveal from "./Reveal.jsx";

// Full-width portfolio section: eyebrow label, big heading, then content.
export default function Section({ id, eyebrow, title, tone = "", children }) {
  return (
    <section id={id} className={`sec ${tone}`}>
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
