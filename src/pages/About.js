import React from 'react';
import './About.css';

const About = () => {
  const timeline = [
    {
      year: '2024 – Present',
      title: 'Bachelor of Computer Science',
      org: 'Sheridan College',
      desc: 'Data Structures & Algorithms, Systems Analysis, OOP, SDLC, Database Design, Machine Learning.',
      accent: true,
    },
    {
      year: '2024 – 2025',
      title: 'Sales Associate, Footwear',
      org: 'SVP Sports',
      desc: 'Queried inventory and warehouse databases to surface real-time product data. Built practical comfort with structured data systems.',
    },
    {
      year: '2024',
      title: 'MIT IDSS Data Science & ML Program',
      org: 'MIT Institute for Data, Systems, and Society',
      desc: 'Completed applied ML projects covering supervised/unsupervised learning, neural networks, feature engineering, and model evaluation.',
      accent: true,
    },
    {
      year: 'Mar – May 2023',
      title: 'Full-Stack Development Intern',
      org: 'Business Web Solutions Inc.',
      desc: 'End-to-end feature development across JavaScript frontend and C# backend. Code reviews, documentation, and defect resolution.',
      accent: true,
    },
    {
      year: '2021 – 2023',
      title: 'Computer Programming',
      org: 'University of Delhi',
      desc: 'Foundations in programming, computer science fundamentals, and algorithmic thinking.',
    },
    {
      year: '2022 – 2023',
      title: 'Competitive Programming Member',
      org: 'Curieux — CS Society',
      desc: 'Solved advanced algorithmic challenges on CodeChef and Codeforces.',
    },
  ];

  return (
    <div className="page-wrapper about-page">
      <div className="container">
        <header className="about-header fade-up">
          <p className="section-label">About Me</p>
          <h1 className="about-title">Building at the intersection<br />of systems and intelligence.</h1>
        </header>

        <div className="about-layout">
          {/* Bio */}
          <section className="about-bio fade-up delay-2">
            <p>
              I'm a Computer Science student at Sheridan College with a focus on machine learning,
              full-stack web development, and game systems. I completed the MIT IDSS Data Science
              and Machine Learning program, where I worked hands-on with deep learning pipelines,
              computer vision, and model evaluation on real-world datasets.
            </p>
            <p>
              My work spans multiple layers of the stack — from building a custom 3D rendering engine
              in OpenGL/C++ to shipping REST APIs in ASP.NET to prototyping combat systems in Unreal
              Engine. I care about purposeful, production-ready software that solves real problems.
            </p>
            <p>
              I'm currently seeking a <strong>Summer 2026 co-op</strong> in ML engineering, full-stack
              development, or game development. Based in Brampton, ON — open to hybrid and remote roles.
            </p>

            <div className="about-links">
              <a
                href="https://linkedin.com/in/gurvansh-singh-makkar"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/LVaizel"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                GitHub ↗
              </a>
              <a
                href="https://mygreatlearning.com/eportfolio/gurvansh-singh-makkar"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                ML Portfolio ↗
              </a>
            </div>
          </section>

          {/* Quick facts */}
          <aside className="about-aside fade-up delay-3">
            <div className="facts-card">
              <p className="section-label">Quick Facts</p>
              {[
                ['📍', 'Brampton, Ontario, Canada'],
                ['🎓', 'Sheridan College, BSc CS (2027)'],
                ['🧪', 'MIT IDSS ML Certificate'],
                ['💻', 'Python · C++ · C# · Java · JS'],
                ['🎮', 'Unity · Unreal Engine · OpenGL'],
                ['📬', 'makkgurv@sheridancollege.ca'],
              ].map(([icon, text]) => (
                <div className="fact-row" key={text}>
                  <span className="fact-icon">{icon}</span>
                  <span className="fact-text">{text}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Timeline */}
        <section className="timeline-section fade-up delay-2">
          <p className="section-label">Experience & Education</p>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>Timeline</h2>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`timeline-item fade-up delay-${(i % 3) + 1} ${item.accent ? 'timeline-accent' : ''}`}
              >
                <div className="tl-year">{item.year}</div>
                <div className="tl-dot" />
                <div className="tl-content">
                  <div className="tl-org">{item.org}</div>
                  <h3 className="tl-title">{item.title}</h3>
                  <p className="tl-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
