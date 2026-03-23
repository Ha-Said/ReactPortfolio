import { useState, useEffect } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <nav>
        <div className="nav-inner">
          <span className="nav-name">ha-said.dev</span>
          <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      <main>
        <Hero />
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
