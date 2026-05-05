import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    label: 'ML & AI',
    color: '#00ff88',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TensorFlow / Keras', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'YOLO (Keypoint Detection)', level: 75 },
      { name: 'Computer Vision', level: 78 },
      { name: 'NumPy / Pandas', level: 88 },
      { name: 'Feature Engineering', level: 82 },
    ],
  },
  {
    label: 'Languages',
    color: '#7b5ea7',
    skills: [
      { name: 'C#', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'Python', level: 95 },
      { name: 'Java', level: 80 },
      { name: 'JavaScript', level: 78 },
      { name: 'HTML / CSS', level: 82 },
      { name: 'C', level: 70 },
      { name: 'Swift (Basic)', level: 40 },
    ],
  },
  {
    label: 'Frameworks & Tools',
    color: '#ff6b35',
    skills: [
      { name: 'ASP.NET MVC / Web API', level: 88 },
      { name: 'React.js', level: 75 },
      { name: 'Spring Boot', level: 72 },
      { name: '.NET MAUI', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'Docker', level: 65 },
      { name: 'Git / GitHub', level: 92 },
    ],
  },
  {
    label: 'Game Dev & Graphics',
    color: '#00c8ff',
    skills: [
      { name: 'Unity (C#)', level: 85 },
      { name: 'Unreal Engine (C++ + Blueprints)', level: 78 },
      { name: 'OpenGL (C++)', level: 75 },
      { name: 'MonoGame', level: 70 },
      { name: 'SDL', level: 68 },
      { name: 'pybind11', level: 72 },
    ],
  },
  {
    label: 'DevOps & Deployment',
    color: '#ffd700',
    skills: [
      { name: 'Docker', level: 65 },
      { name: 'AWS / GCP / Azure (Familiarity)', level: 55 },
      { name: 'CI/CD Pipelines', level: 60 },
      { name: 'GitHub Actions', level: 62 },
      { name: 'Jira / Agile', level: 85 },
    ],
  },
];

const certifications = [
  {
    name: 'MIT IDSS Data Science & Machine Learning',
    issuer: 'MIT Institute for Data, Systems, and Society',
    year: '2024',
    url: 'https://mygreatlearning.com/eportfolio/gurvansh-singh-makkar',
  },
];

const Skills = () => (
  <div className="page-wrapper skills-page">
    <div className="container">
      <header className="skills-header fade-up">
        <p className="section-label">Technical Proficiency</p>
        <h1 className="skills-title">Skills & Certifications</h1>
        <p className="skills-subtitle">
          Proficiency levels are self-assessed. Bars show relative experience across areas.
        </p>
      </header>

      <div className="skills-grid">
        {skillGroups.map((group, gi) => (
          <section
            key={group.label}
            className={`skill-group fade-up delay-${(gi % 3) + 1}`}
          >
            <h3 className="sg-label" style={{ '--group-color': group.color }}>
              {group.label}
            </h3>
            <div className="sg-skills">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-row">
                  <div className="skill-name-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{
                        '--fill': `${skill.level}%`,
                        '--color': group.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Certifications */}
      <section className="certs-section fade-up delay-2">
        <p className="section-label">Certifications</p>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Credentials</h2>
        <div className="certs-list">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <div className="cert-icon">🎓</div>
              <div className="cert-body">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer} · {cert.year}</div>
              </div>
              <span className="cert-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Soft skills */}
      <section className="soft-section fade-up delay-3">
        <p className="section-label">Practices & Methods</p>
        <div className="soft-tags">
          {[
            'Agile / Scrum', 'Code Reviews', 'Technical Documentation',
            'Version Control', 'Test-Driven Development', 'Clean Architecture',
            'REST API Design', 'Data Modeling', 'Model Evaluation', 'Cross-functional Collaboration',
          ].map((t) => (
            <span key={t} className="soft-tag">{t}</span>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Skills;
