import { useEffect, useRef } from "react";
import styled from "styled-components";

function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ContactSection id="contact">
      <div className="fade-up" ref={ref}>
        <p className="section-label">Let's connect</p>
        <h2 className="section-title">Get in Touch</h2>
        <ContactCard>
          <p>
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is always open.
          </p>
          <div className="links">
            <a href="mailto:Said.HadjAbdallah@esprit.tn" className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Said.HadjAbdallah@esprit.tn
            </a>
            <a href="tel:+21695728177" className="contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +216 95 728 177
            </a>
            <a href="https://www.linkedin.com/in/hajabdallah-said/" target="_blank" rel="noreferrer" className="contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              linkedin.com/in/hajabdallah-said
            </a>
          </div>
          <a href="mailto:Said.HadjAbdallah@esprit.tn" className="cta-btn">
            Say Hello
          </a>
        </ContactCard>
      </div>
    </ContactSection>
  );
}

const ContactSection = styled.section``;

const ContactCard = styled.div`
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 600px;

  > p {
    color: var(--text-muted);
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-muted);
    font-size: 0.9rem;
    font-family: var(--mono);
    transition: color 0.2s;
  }

  .contact-item:hover { color: var(--accent); }

  .cta-btn {
    display: inline-block;
    padding: 0.7rem 2rem;
    background: var(--accent);
    color: #fff;
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
    transition: opacity 0.2s, transform 0.2s;
  }

  .cta-btn:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

export default Contact;
