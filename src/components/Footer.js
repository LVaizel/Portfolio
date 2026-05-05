import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-left">
        <span className="footer-mono">// Gurvansh Singh Makkar © {new Date().getFullYear()}</span>
      </div>
      <div className="footer-links">
        <a href="https://github.com/LVaizel" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/gurvansh-singh-makkar" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://mygreatlearning.com/eportfolio/gurvansh-singh-makkar" target="_blank" rel="noreferrer">ML Portfolio</a>
        <a href="mailto:makkgurv@sheridancollege.ca">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
