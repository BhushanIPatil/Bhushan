import { useEffect, useState } from "react";
import { profile, projects } from "../data.js";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "delivery", label: "Work" },
  { id: "architecture", label: "Architecture" },
  ...(projects.length ? [{ id: "projects", label: "Projects" }] : []),
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    [...links.map((l) => l.id), "top", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Home">
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="mobile-cta" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>

        <a href="#contact" className="btn btn-primary nav-cta">
          Let's talk
        </a>
        <button
          type="button"
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
