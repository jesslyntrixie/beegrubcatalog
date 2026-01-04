import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      tag: 'Students',
      title: 'Stress‑Free Lunch Breaks',
      description:
        'No more "canteen dance" or elevator chaos. Students get a guaranteed meal, shorter walking time, and a calm break to actually eat and recharge.',
    },
    {
      id: 2,
      tag: 'Vendors',
      title: 'Predictable, Higher‑Quality Orders',
      description:
        'Pre‑orders give canteen vendors a clear prep schedule, reduce food waste, and provide digital reports of daily sales and peak hours.',
    },
    {
      id: 3,
      tag: 'Campus',
      title: 'Smarter Campus Logistics',
      description:
        'Distributed pickup points and digital queues help reduce overcrowding in canteens and lifts, supporting a healthier, more focused learning environment.',
    },
  ];

  return (
    <section id="benefits" className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <span className="section-badge">Product Features and Benefits</span>
          <h2 className="section-title">
            Who <span className="gradient-text">BeeGrub</span> Helps
          </h2>
          <p className="section-subtitle">
            BeeGrub is not just a food app; it is a campus logistics solution that brings value to students, vendors, and BINUS as a whole.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((item) => (
            <div key={item.id} className="benefit-card">
              <div className="benefit-tag">{item.tag}</div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
