import { profile, roles, stats, marquee } from "../data.js";
import { PinIcon, DownloadIcon } from "./Icons.jsx";
import Typing from "./Typing.jsx";
import Counter from "./Counter.jsx";
import Orbit from "./Orbit.jsx";
import portrait from "../../bhushan.png";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <div className="dots" />
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <img
              className="hero-portrait"
              src={portrait}
              alt={profile.name}
              width={140}
              height={140}
              fetchPriority="high"
            />
            <div className="hero-heading">
              <h1>
                <span className="hello">Hi, I'm</span>
                <span className="grad">{profile.name}</span>
              </h1>
              <span className="pill">
                <span className="live-dot" /> Available for early-stage teams
              </span>
            </div>
          </div>
          <p className="role">{profile.headline}</p>
          <p className="typing-line">
            I build <Typing words={roles} />
          </p>
          <p className="lede">
            Full stack engineer who owns the whole product — from requirements and data model to a
            React UI and a live Azure deployment.
          </p>

          <div className="actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a className="btn btn-outline" href="#delivery">
              View my work
            </a>
            {profile.resumeUrl && (
              <a className="btn btn-ghost" href={profile.resumeUrl} download>
                <DownloadIcon width={16} height={16} /> Resume
              </a>
            )}
            {profile.linkedin && (
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
            {profile.github && (
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>

          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>
                  <Counter to={s.value} />
                </strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="loc">
            <PinIcon width={15} height={15} /> {profile.location}
          </p>
        </div>

        <div className="hero-visual">
          <Orbit initials={profile.initials} />
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((t, i) => (
            <span className="chip" key={i}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
