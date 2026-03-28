import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useLang } from "../LangContext";

const projects = [
  {
    title: "NOVA – Learning Management Platform",
    description:
      "Comprehensive full-stack LMS built for the PIDEV 3rd Year Engineering Program at Esprit (2025–2026). Combines course management with gamification, AI-powered recommendations, study session tracking, forum collaboration, and productivity tools.",
    tags: ["Full-Stack", "AI", "Gamification", "LMS", "PIDEV"],
    github: "https://github.com/Nouha11/Esprit-PIDEV-3A56--2026-Nova-Learning-Management-Platform",
    color: "#7c6fff",
    featured: true,
  },
  {
    title: "PI Réseau – Multiservice Network Infrastructure",
    description:
      "Deployed a full enterprise network for TechSolutions SARL using GNS3. Hierarchical OSPF backbone across 4 departments, VLSM subnetting on 192.168.0.0/17, DHCP, NAT, site-to-site VPN, and department VMs running Web, DB, NFS, and Monitoring services.",
    tags: ["OSPF", "VLSM", "DHCP", "NAT", "VPN", "GNS3", "Linux", "Networking"],
    github: null,
    color: "#a78bfa",
  },
  {
    title: "Coworking Space Management Platform",
    description:
      "Full-stack MERN application for managing coworking spaces — booking, user management, and real-time availability. Built as graduation project at FSM.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Ha-Said",
    color: "#00e5b8",
  },
  {
    title: "Fullstack Relationship Assessment App",
    description:
      "Full-stack web app with a MySQL database and Flask backend for relationship assessment and data tracking.",
    tags: ["Flask", "MySQL", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ha-Said/FullStackProject",
    color: "#f59e0b",
  },
  {
    title: "Calorie Counter React App",
    description:
      "A clean, user-friendly React app to track daily calorie intake with a simple and intuitive interface.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Ha-Said",
    color: "#f472b6",
  },
  {
    title: "This Portfolio",
    description:
      "Personal portfolio built from scratch with React, Vite, and styled-components. Fully responsive with smooth animations.",
    tags: ["React", "Vite", "styled-components"],
    github: "https://github.com/Ha-Said/ReactPortfolio",
    color: "#60a5fa",
  },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

function Projects() {
  const ref = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="fade-up" ref={ref}>
        <p className="section-label">{t.projects.label}</p>
        <h2 className="section-title">{t.projects.title}</h2>
        <Grid>
          {projects.map((p) => (
            <ProjectCard key={p.title} color={p.color} featured={p.featured}>
              <div className="card-top">
                <div className="card-top-left">
                  <span className="dot" />
                  {p.featured && <span className="featured-badge">{t.projects.featured}</span>}
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="gh-link" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                )}
              </div>
              <h3>{p.title}</h3>
              <p className="desc">{p.description}</p>
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
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 1rem;
`;

const ProjectCard = styled.div`
  background: var(--bg-card);
  border: 1px solid ${(p) => p.featured ? `${p.color}40` : `var(--border)`};
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  box-shadow: ${(p) => p.featured ? `0 0 40px ${p.color}18` : `var(--shadow-card)`};
  ${(p) => p.featured ? `grid-column: 1 / -1;` : ""}

  &:hover {
    border-color: ${(p) => p.color}60;
    transform: translateY(-3px);
    box-shadow: 0 10px 32px ${(p) => p.color}18;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-top-left {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${(p) => p.color};
    box-shadow: 0 0 8px ${(p) => p.color}99;
    flex-shrink: 0;
  }

  .gh-link {
    color: var(--text-muted);
    transition: color 0.2s, transform 0.2s;
    display: flex;
    align-items: center;
  }

  .gh-link:hover {
    color: var(--text);
    transform: scale(1.1);
  }

  .featured-badge {
    font-family: var(--mono);
    font-size: 0.62rem;
    color: ${(p) => p.color};
    background: ${(p) => p.color}18;
    border: 1px solid ${(p) => p.color}35;
    padding: 0.12rem 0.5rem;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 600;
  }

  h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  .desc {
    font-size: 0.83rem;
    color: var(--text-muted);
    line-height: 1.65;
    flex: 1;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: auto;
    padding-top: 0.25rem;
  }

  .tags span {
    font-family: var(--mono);
    font-size: 0.68rem;
    color: ${(p) => p.color};
    background: ${(p) => p.color}12;
    border: 1px solid ${(p) => p.color}25;
    padding: 0.18rem 0.5rem;
    border-radius: 4px;
    font-weight: 500;
  }
`;

export default Projects;
