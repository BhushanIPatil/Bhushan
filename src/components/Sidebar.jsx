import { profile, languages } from "../data.js";
import { MailIcon, PhoneIcon, PinIcon, LinkedInIcon, GitHubIcon } from "./Icons.jsx";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="card side-card">
        <h2>Contact info</h2>
        <ul className="side-list">
          <li>
            <MailIcon />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <PhoneIcon />
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </li>
          <li>
            <PinIcon />
            <span>{profile.location}</span>
          </li>
          {profile.linkedin && (
            <li>
              <LinkedInIcon />
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          )}
          {profile.github && (
            <li>
              <GitHubIcon />
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          )}
        </ul>
      </section>

      <section className="card side-card">
        <h2>Languages</h2>
        <ul className="plain">
          {languages.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </section>

      <section className="card side-card">
        <h2>Open to</h2>
        <p className="body">
          Early-stage teams that need a one-person product team: full stack builds, Azure deployments, and AI-accelerated delivery.
        </p>
      </section>
    </aside>
  );
}
