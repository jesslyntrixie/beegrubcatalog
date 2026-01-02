import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">🐝 BINUS Anggrek Campus</div>
          <h1 className="hero-title">
            Fast Bites, No Lines,<br />
            <span className="gradient-text">More Time to Shine</span>
          </h1>
          <p className="hero-subtitle">
            BeeGrub is a campus-only pre-order app for BINUS Anggrek studentshelping you turn chaotic lunch breaks into calm, predictable meal times.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">20min</div>
              <div className="stat-label">Saved per lunch</div>
            </div>
            <div className="stat">
              <div className="stat-number">0</div>
              <div className="stat-label">Queue waiting</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Happy eating</div>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#products" className="btn-primary">
              View App Screens
            </a>
          </div>
          <p className="hero-availability">
            Available on <span>iOS</span> and <span>Android</span>!
          </p>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-preview">
                <div className="preview-header">
                  <span className="preview-time">9:41</span>
                  <div className="preview-status"></div>
                </div>
                <div className="preview-content">
                  <h3>BeeGrub</h3>
                  <p>Choose your favorite canteen</p>
                  <div className="vendor-cards">
                    <div className="vendor-card">
                      <div className="vendor-icon">🍜</div>
                      <div className="vendor-info">
                        <div className="vendor-name">Nasi Goreng Express</div>
                        <div className="vendor-location">Building A</div>
                      </div>
                    </div>
                    <div className="vendor-card">
                      <div className="vendor-icon">🍔</div>
                      <div className="vendor-info">
                        <div className="vendor-name">Burger Station</div>
                        <div className="vendor-location">Building B</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual appeal */}
      <div className="floating-element element-1">🍕</div>
      <div className="floating-element element-2">🍔</div>
      <div className="floating-element element-3">🍜</div>
    </section>
  );
};

export default Hero;
