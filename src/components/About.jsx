import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useLang } from "../LangContext";

const languages = [
  { lang: "Arabic", level: "Native", pct: 100, color: "#7c6fff" },
  { lang: "English", level: "C1–C2 · Fluent", pct: 92, color: "#00e5b8" },
  { lang: "French", level: "B2 · Professional", pct: 72, color: "#f59e0b" },
];

const learning = [
  { label: "AWS Cloud Practitioner", color: "#f59e0b" },
  { label: "Kubernetes", color: "#60a5fa" },
  { label: "Terraform", color: "#a78bfa" },
  { label: "Docker", color: "#00e5b8" },
];

function About() {
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
    <AboutSection id="about">
      <div className="fade-up" ref={ref}>
        <p className="section-label">{t.about.label}</p>
        <h2 className="section-title">{t.about.title}</h2>

        <Grid>
          <AboutCard>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>

            <div className="currently-learning">
              <span className="cl-label">{t.about.currentlyLearning}</span>
              <div className="cl-tags">
                {learning.map((item) => (
                  <LearningBadge key={item.label} color={item.color}>
                    <span className="pulse" />
                    {item.label}
                  </LearningBadge>
                ))}
              </div>
            </div>
          </AboutCard>

          <SideCol>
            <LangCard>
              <h3>Languages</h3>
              {languages.map((l) => (
                <div key={l.lang} className="lang-row">
                  <div className="lang-info">
                    <span className="lang-name">{l.lang}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                  <ProgressBar pct={l.pct} color={l.color}>
                    <div className="fill" />
                  </ProgressBar>
                </div>
              ))}
            </LangCard>

            <LocationCard>
              <span className="loc-icon">📍</span>
              <div>
                <p className="loc-city">Tunis, Tunisia</p>
                <p className="loc-sub">{t.about.openTo}</p>
              </div>
            </LocationCard>
          </SideCol>
        </Grid>
      </div>
    </AboutSection>
  );
}

const AboutSection = styled.section``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 1.5rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const AboutCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 2rem;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: var(--text-muted);
    font-size: 0.92rem;
    line-height: 1.75;
  }

  .currently-learning {
    margin-top: 0.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--border);
  }

  .cl-label {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    display: block;
    margin-bottom: 0.75rem;
  }

  .cl-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const LearningBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.75rem;
  color: ${(p) => p.color};
  background: ${(p) => p.color}15;
  border: 1px solid ${(p) => p.color}35;
  padding: 0.25rem 0.65rem;
  border-radius: 20px;
  font-weight: 500;

  .pulse {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(p) => p.color};
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.7); }
  }
`;

const SideCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LangCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
  box-shadow: var(--shadow-card);

  h3 {
    font-family: var(--mono);
    font-size: 0.7rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 1.25rem;
  }

  .lang-row {
    margin-bottom: 1rem;
  }

  .lang-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.35rem;
  }

  .lang-name {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text);
  }

  .lang-level {
    font-family: var(--mono);
    font-size: 0.72rem;
    color: var(--text-muted);
  }
`;

const ProgressBar = styled.div`
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;

  .fill {
    height: 100%;
    width: ${(p) => p.pct}%;
    background: ${(p) => p.color};
    border-radius: 2px;
    transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

const LocationCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  box-shadow: var(--shadow-card);
  display: flex;
  align-items: center;
  gap: 1rem;

  .loc-icon { font-size: 1.5rem; }

  .loc-city {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text);
  }

  .loc-sub {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-family: var(--mono);
    margin-top: 0.15rem;
  }
`;

export default About;
