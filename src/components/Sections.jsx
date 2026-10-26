import {
  profile,
  about,
  strengths,
  experience,
  delivery,
  projects,
  skills,
  education,
  certifications,
  languages,
} from "../data.js";
import Reveal from "./Reveal.jsx";
import Section from "./Section.jsx";
import Flow from "./Flow.jsx";
import { GlobeIcon, GooglePlayIcon, GitHubIcon } from "./Icons.jsx";

export function About() {
  const [lead, ...rest] = about;
  const latest = experience[0];
  return (
    <Section id="about" eyebrow="About" title="One engineer. The whole product.">
      <div className="about-grid">
        <Reveal className="about-text">
          <p className="lead">{lead}</p>
          {rest.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </Reveal>

        <Reveal className="glance" delay={120}>
          <h3>At a glance</h3>
          <dl>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>
                {latest.role} at {latest.company}
              </dd>
            </div>
            <div>
              <dt>Core stack</dt>
              <dd>C# / .NET, Python, React, MS SQL Server, Azure</dd>
            </div>
            <div>
              <dt>Languages</dt>
              <dd>{languages.join(" · ")}</dd>
            </div>
          </dl>
        </Reveal>
      </div>

      <Reveal>
        <h3 className="sub-head">What I bring to an early-stage team</h3>
        <ul className="strength-grid">
          {strengths.map((s, i) => (
            <li key={s.title} style={{ "--i": i }}>
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <strong>{s.title}</strong>
              <span className="txt">{s.text}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I work" tone="alt">
      <Reveal className="timeline">
        {experience.map((job) => (
          <div className="tl-item" key={job.company + job.period}>
            <span className="tl-dot" />
            <div className="tl-card">
              <div className="tl-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={b} style={{ "--i": i }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function Delivery() {
  return (
    <Section id="delivery" eyebrow="Independent work" title="From one-line idea to live app">
      <Reveal>
        <p className="lede-lg">{delivery.intro}</p>
      </Reveal>
      <Reveal className="panel" delay={100}>
        <Flow />
      </Reveal>
    </Section>
  );
}

export function Projects() {
  if (!projects.length) return null;
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've shipped">
      <Reveal className="project-grid">
        {projects.map((p) => (
          <article className="project" key={p.name}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            {p.stack && (
              <div className="chips">
                {p.stack.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            )}
            <div className="project-links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" aria-label={`Visit ${p.name} website (opens in a new tab)`} title="Visit website">
                  <GlobeIcon width={24} height={24} />
                </a>
              )}
              {p.playStore && (
                <a href={p.playStore} target="_blank" rel="noreferrer" aria-label={`Get ${p.name} on Google Play (opens in a new tab)`} title="Get it on Google Play">
                  <GooglePlayIcon width={24} height={24} />
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`View ${p.name} source code (opens in a new tab)`} title="View source code">
                  <GitHubIcon width={24} height={24} />
                </a>
              )}
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}

export function Skills() {
  let n = 0;
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills" tone="alt">
      <Reveal className="skills-grid">
        {skills.map((g) => (
          <div className="skill-box" key={g.group}>
            <h3>{g.group}</h3>
            <div className="chips">
              {g.items.map((i) => {
                const idx = n++;
                return (
                  <span className="chip" key={i} style={{ "--i": idx }}>
                    {i}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education & certifications">
      <Reveal className="edu-grid">
        {education.map((e) => (
          <div className="edu-card" key={e.school}>
            <span className="period">{e.period}</span>
            <h3>{e.school}</h3>
            <p>{e.degree}</p>
            {e.note && <p className="note">{e.note}</p>}
          </div>
        ))}
      </Reveal>
      <Reveal className="cert-row" delay={100}>
        {certifications.map((c) => (
          <span className="cert" key={c}>
            ✓ {c}
          </span>
        ))}
      </Reveal>
    </Section>
  );
}
