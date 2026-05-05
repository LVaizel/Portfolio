import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="page-wrapper projects-page">
      <div className="container">
        <header className="projects-header fade-up">
          <p className="section-label">Portfolio</p>
          <h1 className="projects-title">All Projects</h1>
          <p className="projects-subtitle">
            A collection of ML, full-stack, game dev, and systems projects.
            Click any project to see screenshots, videos, and details.
          </p>
        </header>

        {/* Filter */}
        <div className="filter-bar fade-up delay-2">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-btn ${activeCategory === id ? 'active' : ''}`}
              onClick={() => setActiveCategory(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filtered.map((project, i) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className={`project-card fade-up delay-${(i % 4) + 1}`}
            >
              {/* Media preview area */}
              <div className="pc-preview">
                {project.screenshots.length > 0 ? (
                  <img
                    src={project.screenshots[0].src}
                    alt={project.screenshots[0].caption}
                    className="pc-preview-img"
                  />
                ) : (
                  <div className="pc-preview-placeholder">
                    <span className="pc-preview-icon">{getCategoryIcon(project.category)}</span>
                  </div>
                )}
                {project.featured && (
                  <span className="pc-badge">Featured</span>
                )}
              </div>

              <div className="pc-body">
                <div className="pc-meta">
                  <span className="pc-category">{project.category}</span>
                  {project.videoUrl && <span className="pc-has-video">▶ Video</span>}
                  {project.screenshots.length > 0 && (
                    <span className="pc-has-screenshots">📷 {project.screenshots.length} screenshots</span>
                  )}
                </div>
                <h3 className="pc-title">{project.title}</h3>
                <p className="pc-subtitle">{project.subtitle}</p>
                <p className="pc-desc">{project.description.slice(0, 110)}...</p>
                <div className="pc-tags">
                  {project.tags.slice(0, 5).map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="no-results">
            <p className="section-label">No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

function getCategoryIcon(cat) {
  const map = {
    ml: '🧠',
    fullstack: '🌐',
    gamedev: '🎮',
    systems: '⚙️',
  };
  return map[cat] || '📁';
}

export default Projects;
