import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('makkgurv@sheridancollege.ca');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-wrapper contact-page">
      <div className="container">
        <header className="contact-header fade-up">
          <p className="section-label">Get In Touch</p>
          <h1 className="contact-title">Let's Work Together</h1>
          <p className="contact-subtitle">
            Seeking Summer 2026 co-op in ML, full-stack, or game development.
            Based in Brampton, ON — open to hybrid and remote.
          </p>
        </header>

        <div className="contact-layout">
          {/* Links */}
          <section className="contact-links fade-up delay-1">
            <a
              href="mailto:makkgurv@sheridancollege.ca"
              className="contact-card"
            >
              <span className="cc-icon">✉</span>
              <div className="cc-body">
                <div className="cc-label">Email</div>
                <div className="cc-value">makkgurv@sheridancollege.ca</div>
              </div>
              <span className="cc-arrow">→</span>
            </a>

            <a
              href="https://linkedin.com/in/gurvansh-singh-makkar"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="cc-icon">in</span>
              <div className="cc-body">
                <div className="cc-label">LinkedIn</div>
                <div className="cc-value">gurvansh-singh-makkar</div>
              </div>
              <span className="cc-arrow">↗</span>
            </a>

            <a
              href="https://github.com/LVaizel"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="cc-icon">⌥</span>
              <div className="cc-body">
                <div className="cc-label">GitHub</div>
                <div className="cc-value">github.com/LVaizel</div>
              </div>
              <span className="cc-arrow">↗</span>
            </a>

            <a
              href="https://mygreatlearning.com/eportfolio/gurvansh-singh-makkar"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="cc-icon">🧪</span>
              <div className="cc-body">
                <div className="cc-label">MIT IDSS ML Portfolio</div>
                <div className="cc-value">mygreatlearning.com/eportfolio</div>
              </div>
              <span className="cc-arrow">↗</span>
            </a>

            <button className="contact-card copy-card" onClick={copyEmail}>
              <span className="cc-icon">{copied ? '✓' : '⎘'}</span>
              <div className="cc-body">
                <div className="cc-label">Copy Email</div>
                <div className="cc-value">{copied ? 'Copied!' : 'makkgurv@sheridancollege.ca'}</div>
              </div>
            </button>
          </section>

          {/* Info card */}
          <aside className="contact-aside fade-up delay-2">
            <div className="info-card">
              <p className="section-label">Looking For</p>
              {[
                '🧠 ML Engineering Co-op',
                '🌐 Full-Stack Dev Co-op',
                '🎮 Game Development Co-op',
                '📍 Brampton, ON (Hybrid / Remote)',
                '🗓 Summer 2026 (May – August)',
              ].map((item) => (
                <div key={item} className="info-row">{item}</div>
              ))}
            </div>

            <div className="info-card">
              <p className="section-label">Response Time</p>
              <p className="info-text">I typically respond within 24–48 hours.</p>
            </div>
          </aside>
        </div>

        {/* Terminal prompt */}
        <div className="contact-terminal fade-up delay-3">
          <div className="ct-prompt">
            <span className="ct-green">$</span>
            <span className="ct-cmd"> echo "Let's build something great together."</span>
          </div>
          <div className="ct-output">Let's build something great together.</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
