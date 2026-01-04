import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⏰',
      title: 'Scheduled Pre‑Order',
      description:
        'Students can place food orders in advance and assign an exact pickup time that matches their class schedule.',
    },
    {
      icon: '📍',
      title: 'Smart Pickup Points',
      description:
        'BeeGrub provides predefined pickup locations across BINUS Anggrek that are linked directly to each order.',
    },
    {
      icon: '📡',
      title: 'Live Order Status',
      description:
        'The app shows real‑time preparation status and sends in‑app notifications when an order is ready.',
    },
    {
      icon: '🏫',
      title: 'Campus‑Verified Vendors',
      description:
        'Only officially registered BINUS canteen partners and nearby vendors are onboarded into the BeeGrub system.',
    },
    {
      icon: '💳',
      title: 'Cashless Central Payments',
      description:
        'All transactions are processed through integrated QRIS and e‑wallet payment channels inside the app.',
    },
    {
      icon: '🎓',
      title: 'Student‑Only Access',
      description:
        'User accounts are authenticated using official BINUS credentials to keep the platform exclusive to the campus community.',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <span className="section-badge">Product Features and Benefits</span>
          <h2 className="section-title">
            <span className="gradient-text">BeeGrub's</span> Main Features
          </h2>
          <p className="section-subtitle">
            A campus‑only pre‑order and delivery platform designed to protect the one resource BINUS students value most:
            time.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
