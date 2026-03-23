import { useEffect, useRef } from "react";
import styled from "styled-components";

const projects = [
  {
    title: "Coworking Space Management Platform",
    description:
      "Full-stack MERN application for managing coworking spaces — booking, user management, and real-time availability. Built as graduation project.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ha-Said",
    color: "#6c63ff",
  },
  {
    title: "Fullstack Relationship Assessment App",
    description:
      "Full-stack web app with a MySQL database and Flask backend for relationship assessment and data tracking.",
    tags: ["Flask", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ha-Said/FullStackProject",
    color: "#00d4aa",
  },
  {
    title: "Calorie Counter React App",
    description:
      "A clean, user-friendly React app to track daily calorie intake with a simple and intuitive interface.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Ha-Said",
    color: "#ff9f43",
  },
  {
    title: "This Portfolio",
    description:
      "Personal portfolio built from scratch with React, Vite, and styled-components. Fully responsive with smooth animations.",
    tags: ["React", "Vite", "styled-components"],
    github: "https://github.com/Ha-Said/ReactPortfolio",
    color: "#fd79a8",
  },
];

function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="fade-up" ref={ref}>
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Projects</h2>
        <Grid>
          {projects.map((p) => (
            <ProjectCard key={p.title} color={p.color}>
              <div className="card-top">
                <span className="dot" />
                <a href={p.github} target="_blank" rel="noreferrer" className="gh-link" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </ProjectCard>
          ))}
        </Grid>
      </div>
    </section>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
`;

const ProjectCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${(p) => p.color}55;
    transform: translateY(-3px);
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(p) => p.color};
    box-shadow: 0 0 8px ${(p) => p.color}88;
  }

  .gh-link {
    color: var(--text-muted);
    transition: color 0.2s;
  }

  .gh-link:hover { color: var(--text); }

  h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text);
  }

  p {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.6;
    flex: 1;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: auto;
  }

  .tags span {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: ${(p) => p.color};
    background: ${(p) => p.color}15;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
  }
`;

export default Projects;
