import { profile, roles, stats, marquee } from "../data.js";
import { PinIcon, DownloadIcon } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";
import Typing from "./Typing.jsx";
import Counter from "./Counter.jsx";

export default function ProfileCard() {
  return (
    <Reveal as="section" className="card profile" id="top">
      <div className="banner">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
        <div className="grid-lines" />
      </div>

      <div className="profile-body">
        <div className="avatar-wrap">
          <div className="avatar" aria-hidden="true">
            {profile.initials}
          </div>
          <span className="ring" />
        </div>

        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <p className="typing-line">
          I build <Typing words={roles} />
        </p>
        <p className="muted loc">
          <PinIcon width={15} height={15} /> {profile.location}
        </p>

        <div className="actions">
          <a className="btn btn-primary" href="#contact">
            Get in touch
          </a>
          {profile.resumeUrl && (
            <a className="btn btn-outline" href={profile.resumeUrl} download>
              <DownloadIcon width={16} height={16} /> Resume
            </a>
          )}
          {profile.linkedin && (
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer">
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
              <span className="muted">{s.label}</span>
            </div>
          ))}
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
    </Reveal>
  );
}
