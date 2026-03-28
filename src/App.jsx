import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useLang } from "./LangContext";

const SECTION_IDS = ["about", "skills", "experience", "projects", "contact"];

function App() {
  const { lang, t, toggle: toggleLang } = useLang();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [scrollPct, setScrollPct] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];
    SECTION_IDS.forEach((id) => {
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

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const navLabels = {
    about: t.nav.about,
    skills: t.nav.skills,
    experience: t.nav.experience,
    projects: t.nav.projects,
    contact: t.nav.contact,
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} aria-hidden="true" />

      <nav>
        <div className="nav-inner">
          <span className="nav-name">ha-said.dev</span>
          <ul>
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={activeSection === id ? "active" : ""}>
                  {navLabels[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
              {lang === "en" ? "FR" : "EN"}
            </button>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
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
        <span>{t.footer}</span>
      </footer>
    </>
  );
}

export default App;
