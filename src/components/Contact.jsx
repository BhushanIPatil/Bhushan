import { useState } from "react";
import { profile } from "../data.js";
import { MailIcon, PhoneIcon, PinIcon, LinkedInIcon, GitHubIcon } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

const empty = { name: "", email: "", message: "", "bot-field": "" };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(empty);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Let's build something together.</h2>
          <p className="contact-lede">
            Have a product idea, or an early-stage team that needs one accountable engineer from
            requirements to a live deployment? Send me a message.
          </p>
          <ul className="contact-links">
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
        </Reveal>

        <Reveal className="form-card" delay={120}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hp">
              <label>
                Don't fill this out:{" "}
                <input name="bot-field" value={form["bot-field"]} onChange={onChange} />
              </label>
            </p>
            <label className="field">
              <span>Name</span>
              <input name="name" required value={form.name} onChange={onChange} autoComplete="name" />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={onChange}
                autoComplete="email"
              />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" rows="5" required value={form.message} onChange={onChange} />
            </label>
            <button className="btn btn-primary btn-block" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && <p className="notice ok">Thanks! Your message was sent.</p>}
            {status === "error" && (
              <p className="notice err">
                Something went wrong. Please email me directly at {profile.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
