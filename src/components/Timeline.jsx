import { useEffect, useRef } from "react";
import styled from "styled-components";

const education = [
  {
    period: "Sep 2025 – Jun 2028 (Expected)",
    title: "Engineering Degree in Computer Science",
    subtitle: "Cloud Engineering Track",
    org: "ESPRIT – École Supérieure Privée d'Ingénierie et de Technologies",
    location: "Tunis, Tunisia",
    details: "Currently completing orientation year with focus on cloud computing specialization. Relevant coursework: Network Infrastructure, System Administration, DevOps Fundamentals.",
    color: "#6c63ff",
  },
  {
    period: "Graduated 2025",
    title: "Bachelor's Degree in Computer Science",
    subtitle: "",
    org: "Faculté des Sciences de Monastir (FSM)",
    location: "Monastir, Tunisia",
    details: "Comprehensive curriculum in software development, algorithms, and computer systems. Graduation project: Coworking Space Management Platform using MERN stack.",
    color: "#00d4aa",
  },
];

const experience = [
  {
    period: "Jan 2025 – Jun 2025",
    title: "Software Development Intern",
    org: "BeeCoders",
    details: "Assisted in developing cloud-based applications. Collaborated with teams to enhance software functionality.",
    color: "#6c63ff",
  },
];

const certifications = [
  {
    date: "2024",
    title: "Full-Stack MERN Certificate",
    org: "9antra – The Bridge",
    details: "Completed intensive full-stack training covering MongoDB, Express.js, React, and Node.js with hands-on project work.",
    color: "#00d4aa",
  },
];

function TimelineBlock({ items, type }) {
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
    <div className="fade-up" ref={ref}>
      <TimelineList>
        {items.map((item, i) => (
          <TimelineItem key={i} color={item.color}>
            <div className="dot" />
            <div className="content">
              <time>{item.period || item.date}</time>
              <h3>{item.title}</h3>
              {item.subtitle && <span className="subtitle">{item.subtitle}</span>}
              <p className="org">{item.org}{item.location ? ` · ${item.location}` : ""}</p>
              <p className="details">{item.details}</p>
            </div>
          </TimelineItem>
        ))}
      </TimelineList>
    </div>
  );
}

function Timeline() {
  return (
    <section id="experience">
      <p className="section-label">Background</p>
      <h2 className="section-title">Experience &amp; Education</h2>

      <TwoCol>
        <div>
          <ColLabel>Work Experience</ColLabel>
          <TimelineBlock items={experience} />
        </div>
        <div>
          <ColLabel>Education</ColLabel>
          <TimelineBlock items={education} />
          <ColLabel style={{ marginTop: "2.5rem" }}>Certifications</ColLabel>
          <TimelineBlock items={certifications} />
        </div>
      </TwoCol>
    </section>
  );
}

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColLabel = styled.p`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 1.5rem;
`;

const TimelineList = styled.ol`
  list-style: none;
  border-left: 1px solid var(--border);
  padding-left: 1.5rem;
`;

const TimelineItem = styled.li`
  position: relative;
  margin-bottom: 2rem;

  .dot {
    position: absolute;
    left: -1.85rem;
    top: 6px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(p) => p.color};
    box-shadow: 0 0 8px ${(p) => p.color}88;
  }

  time {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: ${(p) => p.color};
    display: block;
    margin-bottom: 0.25rem;
  }

  h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.15rem;
  }

  .subtitle {
    font-size: 0.8rem;
    color: var(--accent2);
    font-family: var(--mono);
    display: block;
    margin-bottom: 0.2rem;
  }

  .org {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-bottom: 0.4rem;
  }

  .details {
    font-size: 0.85rem;
    color: var(--text-muted);
    line-height: 1.6;
  }
`;

export default Timeline;
