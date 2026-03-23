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
    period: "June 2025 – Present",
    title: "Software Development Intern",
    org: "BeeCoders",
    details: "Assisted in developing cloud-based applications. Collaborated with teams to enhance software functionality.",
    color: "#6c63ff",
  },
  {
    period: "Aug 2024 – Jun 2025",
    title: "IT Support Intern",
    org: "Tech Solutions",
    details: "Provided technical support to clients via phone and email. Managed system updates and software installations efficiently.",
    color: "#ff9f43",
  },
  {
    period: "May 2023 – Jul 2023",
    title: "Intern",
    org: "Code Academy",
    details: "Developed a web application as part of a team project. Conducted user testing to improve application usability.",
    color: "#00d4aa",
  },
];

const certifications = [
  {
    date: "March 2025",
    title: "AWS Certified Solutions Architect – Associate",
    org: "Amazon Web Services",
    details: "Validated knowledge of cloud architecture and deployment.",
    color: "#ff9f43",
  },
  {
    date: "January 2025",
    title: "Google Cloud Fundamentals",
    org: "Google Cloud",
    details: "Gained foundational knowledge of Google Cloud services.",
    color: "#74b9ff",
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
