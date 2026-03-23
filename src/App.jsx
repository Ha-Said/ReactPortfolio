import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <nav>
        <span className="nav-name">ha-said.dev</span>
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
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
