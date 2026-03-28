import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useLang } from "../LangContext";

const skillGroups = [
  {
    category: "Cloud & DevOps",
    color: "#f59e0b",
    icon: "☁️",
    skills: ["AWS Cloud Practitioner (In Progress)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Programming",
    color: "#7c6fff",
    icon: "⌨️",
    skills: ["JavaScript", "Node.js", "Python", "Bash", "SQL", "C/C++"],
  },
  {
    category: "Web Development",
    color: "#00e5b8",
    icon: "🌐",
    skills: ["React.js", "HTML5", "CSS3", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"],
  },
  {
    category: "Networking & Systems",
    color: "#f472b6",
    icon: "🔌",
    skills: ["OSPF", "NAT", "DHCP", "VPN", "VLSM", "GNS3", "Cisco Packet Tracer", "Linux"],
  },
  {
    category: "Tools & Version Control",
    color: "#60a5fa",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    category: "Languages",
    color: "#a78bfa",
    icon: "💬",
    skills: ["Arabic (Native)", "English (C1-C2)", "French (B2)"],
  },
];

function Skills() {
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
    <SkillsSection id="skills">
      <div className="fade-up" ref={ref}>
        <p className="section-label">{t.skills.label}</p>
        <h2 className="section-title">{t.skills.title}</h2>
        <SkillsGrid>
          {skillGroups.map((group) => (
            <SkillCard key={group.category} color={group.color}>
              <div className="card-header">
                <span className="icon">{group.icon}</span>
                <h3>{group.category}</h3>
              </div>
              <div className="tags">
                {group.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </SkillsSection>
  );
}

const SkillsSection = styled.section``;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  box-shadow: var(--shadow-card);

  &:hover {
    border-color: ${(p) => p.color}40;
    transform: translateY(-3px);
    box-shadow: 0 8px 28px ${(p) => p.color}12;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.1rem;
  }

  .icon {
    font-size: 1rem;
    line-height: 1;
  }

  h3 {
    font-size: 0.75rem;
    font-family: var(--mono);
    color: ${(p) => p.color};
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }

  .tag {
    background: ${(p) => p.color}0d;
    border: 1px solid ${(p) => p.color}22;
    color: var(--text-muted);
    padding: 0.22rem 0.6rem;
    border-radius: 20px;
    font-size: 0.76rem;
    font-weight: 500;
    transition: color 0.2s, border-color 0.2s, background 0.2s;
  }

  &:hover .tag {
    color: var(--text);
    border-color: ${(p) => p.color}44;
    background: ${(p) => p.color}15;
  }
`;

export default Skills;
