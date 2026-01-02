import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-logo">BeeGrub</h3>
            <p className="footer-tagline">
              Calmer lunch breaks, more predictable campus dining.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com/beegrub.binus" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
              <a href="https://tiktok.com/@beegrub" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
              <a href="mailto:beegrub.binus@gmail.com" aria-label="Email">📧</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#products">App Screens</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>About</h4>
            <ul>
              <li><a href="#team">Team</a></li>
              <li><a href="#bmc">Business Model</a></li>
              <li><a href="#reflections">Reflections</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Evidence</h4>
            <ul>
              <li><a href="#problem">Problem</a></li>
              <li><a href="#feedback">Feedback</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BeeGrub Team. Market validation e-catalog for academic use.</p>
          <p className="footer-note">Business Ideation Project · BINUS University Anggrek · Semester 5</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
