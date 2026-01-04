import React from 'react';
import './DemoVideo.css';

const DemoVideo = () => {
  return (
    <section id="demo-video" className="demo-section">
      <div className="demo-container">
        <div className="demo-text">
          {/* <span className="section-badge">Product Demo</span> */}
          <h2 className="section-title">
            <span className="gradient-text">BeeGrub</span> Demo Video
          </h2>
          <p className="section-subtitle">
            Walkthrough of the BeeGrub prototype app from <span >3 roles: student, vendor and admin.</span>
          </p>
        </div>
        <div className="demo-video-wrapper">
          <div className="demo-video-frame">
            <iframe
              src="https://www.youtube.com/embed/6XKFu8rFc9k"
              title="BeeGrub App Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
