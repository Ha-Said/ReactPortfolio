import { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useLang } from "../LangContext";

function TimelineBlock({ items }) {
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
    <div className="fade-up visible" ref={ref}>
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

TimelineBlock.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function Timeline() {
  const { t } = useLang();

  const education = [
    {
      period: "Sep 2025 – Jun 2028 (Expected)",
      title: t.timeline.items.esprit.title,
      subtitle: t.timeline.items.esprit.subtitle,
      org: "ESPRIT – École Supérieure Privée d'Ingénierie et de Technologies",
      location: "Tunis, Tunisia",
      details: t.timeline.items.esprit.details,
      color: "#6c63ff",
    },
    {
      period: "Graduated 2025",
      title: t.timeline.items.fsm.title,
      subtitle: "",
      org: "Faculté des Sciences de Monastir (FSM)",
      location: "Monastir, Tunisia",
      details: t.timeline.items.fsm.details,
      color: "#00d4aa",
    },
  ];

  const experience = [
    {
      period: "Jan 2025 – Jun 2025",
      title: t.timeline.items.beecoders.title,
      org: "BeeCoders",
      details: t.timeline.items.beecoders.details,
      color: "#6c63ff",
    },
  ];

  const certifications = [
    {
      date: "2024",
      title: t.timeline.items.cert9antra.title,
      org: "9antra – The Bridge",
      details: t.timeline.items.cert9antra.details,
      color: "#00d4aa",
    },
  ];

  return (
    <section id="experience">
      <p className="section-label">{t.timeline.label}</p>
      <h2 className="section-title">{t.timeline.title}</h2>

      <TwoCol>
        <div>
          <ColLabel>{t.timeline.workExp}</ColLabel>
          <TimelineBlock items={experience} />
        </div>
        <div>
          <ColLabel>{t.timeline.education}</ColLabel>
          <TimelineBlock items={education} />
          <ColLabel style={{ marginTop: "2.5rem" }}>{t.timeline.certifications}</ColLabel>
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

