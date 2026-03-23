import { useEffect, useRef } from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import obanga from "../assets/obanga.jpg";
import styled from "styled-components";

function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <HeroSection>
      <div className="fade-up" ref={ref}>
        <div className="hero-inner">
          <div className="hero-text">
            <span className="greeting">Hi, I'm</span>
            <h1>Hadj Abdallah Said</h1>
            <p className="tagline">
              Computer Science Engineer · Cloud &amp; DevOps · Full-Stack Developer
            </p>
            <p className="bio">
              Detail-oriented CS graduate with solid cloud engineering skills, eager to leverage
              technical expertise and internship experience in software development to pursue a
              challenging role in the tech industry.
            </p>
            <div className="hero-actions">
              <a href="mailto:Said.HadjAbdallah@esprit.tn" className="btn-primary">
                Get in touch
              </a>
              <a href="https://github.com/Ha-Said" target="_blank" rel="noreferrer" className="btn-ghost">
                GitHub
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Ha-Said" target="_blank" rel="noreferrer" aria-label="GitHub">
                <img src={github} alt="GitHub" className="logo" />
              </a>
              <a href="https://www.linkedin.com/in/hajabdallah-said/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <img src={linkedin} alt="LinkedIn" className="logo" />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={obanga} alt="Hadj Abdallah Said" />
          </div>
        </div>
        <div className="hero-meta">
          <span>📍 Tunis, Tunisia</span>
          <span>📞 +216 95 728 177</span>
          <span>✉️ Said.HadjAbdallah@esprit.tn</span>
        </div>
      </div>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;

  .hero-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  .hero-text {
    flex: 1;
  }

  .greeting {
    font-family: var(--mono);
    font-size: 0.9rem;
    color: var(--accent);
    display: block;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 0.75rem;
    background: linear-gradient(135deg, #fff 40%, var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .tagline {
    font-family: var(--mono);
    font-size: 0.85rem;
    color: var(--accent2);
    margin-bottom: 1.25rem;
    letter-spacing: 0.05em;
  }

  .bio {
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 520px;
    margin-bottom: 2rem;
    line-height: 1.7;
  }

  .hero-actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .btn-primary {
    padding: 0.65rem 1.5rem;
    background: var(--accent);
    color: #fff;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: opacity 0.2s, transform 0.2s;
  }

  .btn-primary:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }

  .btn-ghost {
    padding: 0.65rem 1.5rem;
    border: 1px solid var(--border);
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--text-muted);
    transition: border-color 0.2s, color 0.2s;
  }

  .btn-ghost:hover {
    border-color: var(--accent);
    color: var(--text);
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .hero-image img {
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid var(--border);
    box-shadow: 0 0 40px rgba(108, 99, 255, 0.2);
  }

  .hero-meta {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    font-size: 0.8rem;
    color: var(--text-muted);
    font-family: var(--mono);
  }

  @media (max-width: 700px) {
    .hero-inner { flex-direction: column-reverse; text-align: center; }
    .hero-actions { justify-content: center; }
    .social-links { justify-content: center; }
    .hero-meta { justify-content: center; }
    .hero-image img { width: 150px; height: 150px; }
  }
`;

export default Hero;
