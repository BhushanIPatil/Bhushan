import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Contact from "./components/Contact.jsx";
import Architecture from "./components/Architecture.jsx";
import { About, Experience, Delivery, Projects, Skills, Education } from "./components/Sections.jsx";
import { profile } from "./data.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Delivery />
        <Architecture />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
