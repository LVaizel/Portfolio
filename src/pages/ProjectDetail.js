import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import './ProjectDetail.css';

// ── Notebooks section ────────────────────────────────────────────────────────
const NotebooksSection = ({ notebooks }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);

    return (
        <section className="pd-section fade-up delay-2">
            <p className="section-label">Jupyter Notebooks</p>

            {notebooks.length > 1 && (
                <div className="nb-tabs">
                    {notebooks.map((nb, i) => (
                        <button
                            key={i}
                            className={`nb-tab ${i === activeIdx ? 'active' : ''}`}
                            onClick={() => setActiveIdx(i)}
                        >
                            <span className="nb-tab-icon">📓</span>
                            {nb.title}
                        </button>
                    ))}
                </div>
            )}

            {notebooks[activeIdx].description && (
                <p className="nb-desc">{notebooks[activeIdx].description}</p>
            )}

            <div className={`nb-frame-wrapper ${fullscreen ? 'nb-fullscreen' : ''}`}>
                <div className="nb-toolbar">
                    <span className="nb-toolbar-title">
                        📓 {notebooks[activeIdx].title}
                    </span>
                    <div className="nb-toolbar-actions">
                        <a
                            href={notebooks[activeIdx].url}
                            target="_blank"
                            rel="noreferrer"
                            className="nb-action-btn"
                        >
                            Open in new tab
                        </a>
                    </div>
                </div>
                <iframe
                    key={notebooks[activeIdx].url}
                    src={notebooks[activeIdx].url}
                    title={notebooks[activeIdx].title}
                    className="nb-iframe"
                    sandbox="allow-scripts allow-same-origin"
                />
            </div>
        </section>
    );
};

// ── Main component ────────────────────────────────────────────────────────────
const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);
    const [activeScreenshot, setActiveScreenshot] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    if (!project) return <Navigate to="/projects" replace />;

    const otherProjects = projects
        .filter((p) => p.id !== project.id && p.category === project.category)
        .slice(0, 3);

    return (
        <div className="page-wrapper project-detail">
            <div className="container">
                {/* Breadcrumb */}
                <nav className="breadcrumb fade-up">
                    <Link to="/projects">← Back to Projects</Link>
                    <span>/</span>
                    <span>{project.title}</span>
                </nav>

                {/* Header */}
                <header className="pd-header fade-up delay-1">
                    <div className="pd-meta">
                        <span className="pd-category">{project.category}</span>
                        {project.tags.map((t) => (
                            <span key={t} className="tag">{t}</span>
                        ))}
                    </div>
                    <h1 className="pd-title">{project.title}</h1>
                    <p className="pd-subtitle">{project.subtitle}</p>
                    <div className="pd-links">
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                                GitHub ↗
                            </a>
                        )}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                                Live Demo ↗
                            </a>
                        )}
                    </div>
                </header>

                <div className="pd-layout">
                    <main className="pd-main">

                        {/* ── VIDEO ── */}
                        {project.videoUrl && (
                            <section className="pd-section fade-up delay-2">
                                <p className="section-label">Demo Video</p>
                                <div className="video-wrapper">
                                    <iframe
                                        src={project.videoUrl}
                                        title={`${project.title} demo video`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </section>
                        )}

                        {/* ── SCREENSHOTS ── */}
                        {project.screenshots && project.screenshots.length > 0 ? (
                            <section className="pd-section fade-up delay-2">
                                <p className="section-label">Screenshots</p>
                                <div
                                    className="screenshot-main"
                                    onClick={() => setLightboxOpen(true)}
                                    title="Click to enlarge"
                                >
                                    <img
                                        src={project.screenshots[activeScreenshot].src}
                                        alt={project.screenshots[activeScreenshot].caption}
                                    />
                                    <div className="screenshot-caption">
                                        {project.screenshots[activeScreenshot].caption}
                                    </div>
                                    <div className="screenshot-expand">⛶ Enlarge</div>
                                </div>
                                {project.screenshots.length > 1 && (
                                    <div className="screenshot-thumbs">
                                        {project.screenshots.map((s, i) => (
                                            <button
                                                key={i}
                                                className={`thumb-btn ${i === activeScreenshot ? 'active' : ''}`}
                                                onClick={() => setActiveScreenshot(i)}
                                            >
                                                <img src={s.src} alt={s.caption} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </section>
                        ) : (
                            <section className="pd-section fade-up delay-2">
                                <div className="no-media-box">
                                    <p className="section-label">Screenshots / Demo</p>
                                    <p className="no-media-text">
                                        No screenshots added yet. Add images to{' '}
                                        <code>/public/media/{project.slug}/</code> and update{' '}
                                        <code>src/data/projects.js</code> to display them here.
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* ── NOTEBOOKS ── */}
                        {project.notebooks && project.notebooks.length > 0 && (
                            <NotebooksSection notebooks={project.notebooks} />
                        )}

                        {/* ── DESCRIPTION ── */}
                        <section className="pd-section fade-up delay-3">
                            <p className="section-label">About this project</p>
                            <p className="pd-description">{project.description}</p>
                        </section>

                        {/* ── HIGHLIGHTS ── */}
                        <section className="pd-section fade-up delay-3">
                            <p className="section-label">Key Features</p>
                            <ul className="pd-highlights">
                                {project.highlights.map((h, i) => (
                                    <li key={i}>
                                        <span className="highlight-bullet">▸</span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </main>

                    {/* Sidebar */}
                    <aside className="pd-sidebar fade-up delay-2">
                        <div className="sidebar-card">
                            <p className="section-label">Tech Stack</p>
                            <div className="sidebar-tags">
                                {project.tags.map((t) => (
                                    <span key={t} className="tag tag-accent">{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="sidebar-card">
                            <p className="section-label">Category</p>
                            <p className="sidebar-text">{project.category}</p>
                        </div>

                        {project.notebooks && project.notebooks.length > 0 && (
                            <div className="sidebar-card">
                                <p className="section-label">Notebooks</p>
                                <div className="related-projects">
                                    {project.notebooks.map((nb, i) => (
                                        <a
                                            key={i}
                                            href={nb.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="related-item"
                                        >
                                            <span className="related-title">📓 {nb.title}</span>
                                            <span className="related-arrow">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}

                        {otherProjects.length > 0 && (
                            <div className="sidebar-card">
                                <p className="section-label">Related Projects</p>
                                <div className="related-projects">
                                    {otherProjects.map((p) => (
                                        <Link key={p.id} to={`/projects/${p.slug}`} className="related-item">
                                            <span className="related-title">{p.title}</span>
                                            <span className="related-arrow">→</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && project.screenshots && project.screenshots.length > 0 && (
                <div className="lightbox" onClick={() => setLightboxOpen(false)}>
                    <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>✕</button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="lightbox-nav prev"
                            onClick={() =>
                                setActiveScreenshot((prev) =>
                                    prev === 0 ? project.screenshots.length - 1 : prev - 1
                                )
                            }
                        >‹</button>
                        <img
                            src={project.screenshots[activeScreenshot].src}
                            alt={project.screenshots[activeScreenshot].caption}
                        />
                        <button
                            className="lightbox-nav next"
                            onClick={() =>
                                setActiveScreenshot((prev) =>
                                    prev === project.screenshots.length - 1 ? 0 : prev + 1
                                )
                            }
                        >›</button>
                    </div>
                    <p className="lightbox-caption">
                        {project.screenshots[activeScreenshot].caption} ({activeScreenshot + 1}/{project.screenshots.length})
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProjectDetail;