import React from 'react';
import './Exhibition.css';

const Exhibition = () => {
  const bifestPhotos = [
    { id: 1, url: '/images/bifest/1.jpg', caption: 'BIFEST photo 1' },
    { id: 2, url: '/images/bifest/2.jpg', caption: 'BIFEST photo 2' },
    { id: 3, url: '/images/bifest/3.jpg', caption: 'BIFEST photo 3' },
    { id: 4, url: '/images/bifest/4.jpg', caption: 'BIFEST photo 4' },
    { id: 5, url: '/images/bifest/5.jpg', caption: 'BIFEST photo 5' },
    { id: 6, url: '/images/bifest/6.jpg', caption: 'BIFEST photo 6' },
    { id: 7, url: '/images/bifest/7.jpg', caption: 'BIFEST photo 7' },
    { id: 8, url: '/images/bifest/8.jpg', caption: 'BIFEST photo 8' }

  ];

  const entrePhotos = [
    { id: 1, url: '/images/entrepreneur-corner/1.jpg', caption: 'Entrepreneur Corner photo 1' },
    { id: 2, url: '/images/entrepreneur-corner/2.jpg', caption: 'Entrepreneur Corner photo 2' },
    { id: 3, url: '/images/entrepreneur-corner/3.jpg', caption: 'Entrepreneur Corner photo 3' },
    { id: 4, url: '/images/entrepreneur-corner/4.jpg', caption: 'Entrepreneur Corner photo 4' },
    { id: 5, url: '/images/entrepreneur-corner/5.jpg', caption: 'Entrepreneur Corner photo 5' },
    { id: 6, url: '/images/entrepreneur-corner/6.jpg', caption: 'Entrepreneur Corner photo 6' },
    { id: 7, url: '/images/entrepreneur-corner/7.jpg', caption: 'Entrepreneur Corner photo 7' },
    { id: 8, url: '/images/entrepreneur-corner/8.jpg', caption: 'Entrepreneur Corner photo 8' }
  ];

  return (
    <section id="exhibition" className="exhibition-section">
      <div className="container">
        <div className="section-header">
          {/* <span className="section-badge">Market Validation</span> */}
          <h2 className="section-title">
            BIFEST & <span className="gradient-text">EntreCorner</span> Photos
          </h2>
          <p className="section-subtitle">
            Photo documentation of our market validation activities at BINUS Festival 2025 and Entrepreneur Corner.
          </p>
        </div>

        {/* BIFEST Section */}
        <div className="event-section">
          <div className="event-header">
            <h3 className="event-title">🎪 BINUS Festival</h3>
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
              </div>
            ))}
          </div>
        </div>

        {/* Entrepreneur Corner Section */}
        <div className="event-section">
          <div className="event-header">
            <h3 className="event-title">🏪 Entrepreneurship Corner</h3>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exhibition;
