import { useState, useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const NAV_SECTIONS = ["about", "skills", "experience", "projects", "contact"];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll progress
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active nav section
  useEffect(() => {
    const observers = [];
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} aria-hidden="true" />

      <nav>
        <div className="nav-inner">
          <span className="nav-name">ha-said.dev</span>
          <ul>
            {NAV_SECTIONS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={activeSection === id ? "active" : ""}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>

      <footer>
        <span>Built with React &amp; Vite · Hadj Abdallah Said © 2025</span>
      </footer>
    </>
  );
}

export default App;
