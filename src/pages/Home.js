import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './Home.css';

// Animated terminal typing effect
const TypedText = ({ text, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let i = 0;
    el.textContent = '';
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        el.textContent = text.slice(0, i + 1);
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 45);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span ref={ref} />;
};

const Home = () => {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero container">
        <div className="hero-content fade-up delay-1">
          <div className="hero-prompt">
            <span className="prompt-prefix">~/portfolio $</span>
            <span className="prompt-cursor" />
          </div>
          <h1 className="hero-name fade-up delay-2">
            Gurvansh<br />Singh Makkar
          </h1>
          <div className="hero-roles fade-up delay-3">
            <span className="role-tag">ML Engineer</span>
            <span className="role-sep">/</span>
            <span className="role-tag">Full-Stack Dev</span>
            <span className="role-sep">/</span>
            <span className="role-tag">Game Dev</span>
          </div>
          <p className="hero-desc fade-up delay-4">
            Computer Science student @ Sheridan College.<br />
            MIT IDSS ML Program graduate. Building purposeful,
            production-ready AI systems and interactive experiences.
          </p>
          <div className="hero-actions fade-up delay-5">
            <Link to="/projects" className="btn btn-primary">View Projects →</Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </div>

        <div className="hero-terminal fade-up delay-3">
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="terminal-title">gurvansh.sh</span>
            </div>
            <div className="terminal-body">
              <div className="t-line">
                <span className="t-green">$ </span>
                <TypedText text="whoami" delay={400} />
              </div>
              <div className="t-line t-out">gurvansh_singh_makkar</div>
              <div className="t-line">
                <span className="t-green">$ </span>
                <TypedText text="cat skills.txt" delay={1100} />
              </div>
              <div className="t-line t-out">Python · TensorFlow · PyTorch · YOLO</div>
              <div className="t-line t-out">C++ · C# · Java · JavaScript</div>
              <div className="t-line t-out">ASP.NET · React · Spring Boot</div>
              <div className="t-line t-out">Unity · Unreal Engine · OpenGL</div>
              <div className="t-line">
                <span className="t-green">$ </span>
                <TypedText text="cat status.txt" delay={2400} />
              </div>
              <div className="t-line t-out t-accent">Seeking Summer 2026 Co-op ✓</div>
              <div className="t-line">
                <span className="t-green">$ </span>
                <span className="t-cursor">_</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar fade-up delay-3">
        <div className="container stats-inner">
          {[
            { value: '10+', label: 'Projects Shipped' },
            { value: 'MIT', label: 'IDSS ML Certificate' },
            { value: '5+', label: 'Languages' },
            { value: '2027', label: 'Graduating (Expected)' },
          ].map(({ value, label }) => (
            <div className="stat" key={label}>
              <span className="stat-value">{value}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-section container">
        <p className="section-label fade-up">Featured Work</p>
        <h2 className="section-title fade-up">Selected Projects</h2>
        <div className="featured-grid">
          {featured.map((project, i) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className={`featured-card fade-up delay-${(i % 3) + 1}`}
            >
              <div className="fc-category">{project.category}</div>
              <h3 className="fc-title">{project.title}</h3>
              <p className="fc-subtitle">{project.subtitle}</p>
              <p className="fc-desc">{project.description.slice(0, 120)}...</p>
              <div className="fc-tags">
                {project.tags.slice(0, 4).map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <span className="fc-arrow">→</span>
            </Link>
          ))}
        </div>
        <div className="featured-footer fade-up">
          <Link to="/projects" className="btn btn-outline">View All Projects →</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section container fade-up">
        <div className="cta-box">
          <p className="section-label">Open to Opportunities</p>
          <h2>Seeking Summer 2026 Co-op</h2>
          <p className="cta-desc">
            Looking for roles in ML engineering, full-stack development, or game development.
            Based in Brampton, ON — open to hybrid and remote.
          </p>
          <Link to="/contact" className="btn btn-primary">Let's Connect →</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
