import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.css';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function App() {
    return (
        <Router basename="/Portfolio">
            <ScrollToTop />
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* 404 fallback */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

function NotFound() {
    return (
        <div className="page-wrapper container" style={{ paddingTop: '8rem', textAlign: 'center' }}>
            <p className="section-label">404</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', marginBottom: '1rem' }}>
                Page not found
            </h1>
            <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text2)', marginBottom: '2rem' }}>
                The page you're looking for doesn't exist.
            </p>
            <a href="/Portfolio/" className="btn btn-primary">← Back Home</a>
        </div>
    );
}

export default App;
