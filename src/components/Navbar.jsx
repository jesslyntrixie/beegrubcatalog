import React, { useState } from 'react';
import { COLORS } from '../constants/theme';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">BeeGrub</span>
        </div>
        
        <button 
          className="navbar-hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('problem')}>Problem</a></li>
          <li><a onClick={() => scrollToSection('products')}>Products</a></li>
          <li><a onClick={() => scrollToSection('demo-video')}>Demo Video</a></li>
          <li><a onClick={() => scrollToSection('team')}>Team</a></li>
          <li><a onClick={() => scrollToSection('exhibition')}>Exhibition</a></li>
          <li><a onClick={() => scrollToSection('social-media')}>Social Media</a></li>
          <li><a onClick={() => scrollToSection('bmc')}>BMC</a></li>
          <li><a onClick={() => scrollToSection('feedback')}>Feedback</a></li>
          <li><a onClick={() => scrollToSection('reflections')}>Reflections</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <a
          href="https://github.com/jesslyntrixie/beegrub/releases/tag/v0.1.0"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          Download App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
