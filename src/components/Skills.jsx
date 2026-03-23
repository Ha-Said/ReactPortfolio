import { useEffect, useRef } from "react";
import styled from "styled-components";

const skillGroups = [
  {
    category: "Cloud & DevOps",
    color: "#ff9f43",
    skills: ["AWS (In Progress)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"],
  },
  {
    category: "Programming",
    color: "#6c63ff",
    skills: ["JavaScript", "Node.js", "Python", "Bash", "SQL", "C/C++"],
  },
  {
    category: "Web Development",
    color: "#00d4aa",
    skills: ["React.js", "HTML5", "CSS3", "Express.js", "MongoDB", "PostgreSQL", "RESTful APIs"],
  },
  {
    category: "Networking & Systems",
    color: "#fd79a8",
    skills: ["OSPF", "NAT", "DHCP", "VPN", "VLSM", "GNS3", "Cisco Packet Tracer", "Linux"],
  },
  {
    category: "Tools & Version Control",
    color: "#74b9ff",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    category: "Languages",
    color: "#a29bfe",
    skills: ["Arabic (Native)", "English (C1-C2)", "French (B2)"],
  },
];

function Skills() {
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
    <SkillsSection id="skills">
      <div className="fade-up" ref={ref}>
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills</h2>
        <SkillsGrid>
          {skillGroups.map((group) => (
            <SkillCard key={group.category} color={group.color}>
              <h3>{group.category}</h3>
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
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
`;

const SkillCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${(p) => p.color}55;
    transform: translateY(-2px);
  }

  h3 {
    font-size: 0.8rem;
    font-family: var(--mono);
    color: ${(p) => p.color};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tag {
    background: rgba(255,255,255,0.05);
    border: 1px solid var(--border);
    color: var(--text-muted);
    padding: 0.25rem 0.65rem;
    border-radius: 20px;
    font-size: 0.78rem;
    font-weight: 500;
    transition: color 0.2s, border-color 0.2s;
  }

  &:hover .tag {
    color: var(--text);
    border-color: ${(p) => p.color}44;
  }
`;

export default Skills;
