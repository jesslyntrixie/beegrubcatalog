import React from 'react';
import './Exhibition.css';

const Exhibition = () => {
  const bifestPhotos = [
    { id: 1, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=BIFEST+1', caption: 'BeeGrub Booth at BIFEST 2025' },
    { id: 2, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=BIFEST+2', caption: 'Student Engagement' },
    { id: 3, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=BIFEST+3', caption: 'Product Demo' },
    { id: 4, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=BIFEST+4', caption: 'Team Presentation' },
    { id: 5, url: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=BIFEST+5', caption: 'Crowd at Our Booth' }
  ];

  const entrePhotos = [
    { id: 1, url: 'https://via.placeholder.com/400x300/34C759/FFFFFF?text=ENTRE+1', caption: 'Entrepreneur Corner Setup' },
    { id: 2, url: 'https://via.placeholder.com/400x300/34C759/FFFFFF?text=ENTRE+2', caption: 'Live Demonstration' },
    { id: 3, url: 'https://via.placeholder.com/400x300/34C759/FFFFFF?text=ENTRE+3', caption: 'Customer Interaction' },
    { id: 4, url: 'https://via.placeholder.com/400x300/34C759/FFFFFF?text=ENTRE+4', caption: 'Feedback Collection' },
    { id: 5, url: 'https://via.placeholder.com/400x300/34C759/FFFFFF?text=ENTRE+5', caption: 'Team Collaboration' }
  ];

  return (
    <section id="exhibition" className="exhibition-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Market Validation</span>
          <h2 className="section-title">
            Pameran & <span className="gradient-text">Event</span>
          </h2>
          <p className="section-subtitle">
            Dokumentasi kegiatan market validation kami di BIFEST 2025 dan Entrepreneur Corner
          </p>
        </div>

        {/* BIFEST Section */}
        <div className="event-section">
          <div className="event-header">
            <h3 className="event-title">🎪 BINUS Festival (BIFEST) 2025</h3>
            <div className="event-links">
              <a href="https://youtu.be/DuUieRARxfc" target="_blank" rel="noopener noreferrer" className="link-btn youtube">
                📹 YouTube Video
              </a>
              <a href="https://www.instagram.com/reel/DRbNTNjksyB/" target="_blank" rel="noopener noreferrer" className="link-btn instagram">
                📸 Instagram Reel
              </a>
            </div>
          </div>
          <div className="photos-grid">
            {bifestPhotos.map((photo) => (
              <div key={photo.id} className="photo-card">
                <img src={photo.url} alt={photo.caption} />
                <p className="photo-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Entrepreneur Corner Section */}
        <div className="event-section">
          <div className="event-header">
            <h3 className="event-title">🏪 Entrepreneur Corner</h3>
            <div className="event-links">
              <a href="https://youtu.be/4VwCfLvzOOA" target="_blank" rel="noopener noreferrer" className="link-btn youtube">
                📹 YouTube Video
              </a>
              <a href="https://www.instagram.com/reel/DSUwjBEkmEW/" target="_blank" rel="noopener noreferrer" className="link-btn instagram">
                📸 Instagram Reel
              </a>
            </div>
          </div>
          <div className="photos-grid">
            {entrePhotos.map((photo) => (
              <div key={photo.id} className="photo-card">
                <img src={photo.url} alt={photo.caption} />
                <p className="photo-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exhibition;
