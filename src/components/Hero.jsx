import { useEffect, useRef } from "react";
import obanga from "../assets/obanga.jpg";
import styled from "styled-components";
import { useLang } from "../LangContext";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

function Hero() {
  const ref = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => el.classList.add("visible"), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <HeroSection>
      {/* ambient glow blobs */}
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />

      <div className="fade-up" ref={ref}>
        <div className="hero-inner">
          <div className="hero-text">
            <span className="greeting">{t.hero.greeting}</span>
            <h1>Hadj Abdallah<br />Said</h1>
            <p className="tagline">
              <span>{t.hero.tagline[0]}</span>
              <span className="sep">·</span>
              <span>{t.hero.tagline[1]}</span>
              <span className="sep">·</span>
              <span>{t.hero.tagline[2]}</span>
            </p>
            <p className="bio">{t.hero.bio}</p>
            <div className="hero-actions">
              <a href="mailto:Said.HadjAbdallah@esprit.tn" className="btn-primary">
                {t.hero.getInTouch}
              </a>
              <a href="https://github.com/Ha-Said" target="_blank" rel="noreferrer" className="btn-ghost">
                {t.hero.viewGithub}
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/Ha-Said" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/hajabdallah-said/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="img-ring" />
            <img src={obanga} alt="Hadj Abdallah Said" />
          </div>
        </div>

        <div className="hero-meta">
          <span>📍 Tunis, Tunisia</span>
          <span>📞 +216 95 728 177</span>
          <span>✉️ Said.HadjAbdallah@esprit.tn</span>
          <span>🔗 linkedin.com/in/hajabdallah-said</span>
        </div>
      </div>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  min-height: 92vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: 0;
  }

  .blob-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(124,111,255,0.12) 0%, transparent 70%);
    top: -100px;
    right: -100px;
  }

  .blob-2 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0,229,184,0.07) 0%, transparent 70%);
    bottom: 0;
    left: -80px;
  }

  [data-theme="light"] .blob-1 {
    background: radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%);
  }

  [data-theme="light"] .blob-2 {
    background: radial-gradient(circle, rgba(8,145,178,0.06) 0%, transparent 70%);
  }

  > div:last-child {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  .hero-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }

  .hero-text { flex: 1; }

  .greeting {
    font-family: var(--mono);
    font-size: 0.82rem;
    color: var(--accent);
    display: block;
    margin-bottom: 1rem;
    opacity: 0.85;
  }

  h1 {
    font-size: clamp(2.6rem, 6vw, 4rem);
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 1.25rem;
    letter-spacing: -0.03em;
    background: linear-gradient(135deg, var(--text) 50%, var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .tagline {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    font-family: var(--mono);
    font-size: 0.8rem;
    color: var(--accent2);
    margin-bottom: 1.5rem;
    letter-spacing: 0.04em;
  }

  .sep { color: var(--text-muted); opacity: 0.4; }

  .bio {
    color: var(--text-muted);
    font-size: 0.97rem;
    max-width: 500px;
    margin-bottom: 2.25rem;
    line-height: 1.75;
  }

  .hero-actions {
    display: flex;
    gap: 0.85rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .btn-primary {
    padding: 0.65rem 1.6rem;
    background: var(--accent);
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.875rem;
    transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 16px var(--glow);
  }

  .btn-primary:hover {
    opacity: 0.88;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--glow);
  }

  .btn-ghost {
    padding: 0.65rem 1.6rem;
    border: 1px solid var(--border-hover);
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--text-muted);
    transition: border-color 0.2s, color 0.2s, background 0.2s;
  }

  .btn-ghost:hover {
    border-color: var(--accent);
    color: var(--text);
    background: var(--glow);
  }

  .social-links {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .social-links a {
    color: var(--text-muted);
    display: flex;
    align-items: center;
    transition: color 0.2s, transform 0.2s;
  }

  .social-links a:hover {
    color: var(--text);
    transform: translateY(-2px);
  }

  .hero-image {
    position: relative;
    flex-shrink: 0;
  }

  .hero-image {
    position: relative;
    flex-shrink: 0;
    width: 220px;
    height: 220px;
  }

  .img-ring {
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--accent), var(--accent2), var(--accent));
    opacity: 0.35;
    animation: spin 8s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .hero-image img {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    border-radius: 50%;
    border: 3px solid var(--bg);
    display: block;
    flex-shrink: 0;
  }

  .hero-meta {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-top: 3.5rem;
    padding-top: 2rem;
    border-top: 1px solid var(--border);
    font-size: 0.75rem;
    color: var(--text-muted);
    font-family: var(--mono);
    letter-spacing: 0.03em;
  }

  @media (max-width: 720px) {
    .hero-inner { flex-direction: column-reverse; text-align: center; gap: 2rem; }
    .tagline { justify-content: center; }
    .hero-actions { justify-content: center; }
    .social-links { justify-content: center; }
    .hero-meta { justify-content: center; gap: 1rem; }
    .hero-image { width: 160px; height: 160px; }
    .img-ring { inset: -4px; }
    .bio { margin-left: auto; margin-right: auto; }
  }
`;

export default Hero;
