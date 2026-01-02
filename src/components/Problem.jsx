import React from 'react';
import './Problem.css';

const Problem = () => {
  const problems = [
    {
      icon: '⏰',
      title: 'Short Break, Long Process',
      description:
        'BINUS Anggrek students only have a few minutes between classes, but the current process of walking to the canteen, queueing, and waiting for food can easily take 30–35 minutes.',
    },
    {
      icon: '😰',
      title: 'Stress Instead of Rest',
      description:
        'Lunch breaks become a source of anxiety—students rush to secure food and seats, worry about being late, and often eat in a hurry or while standing.',
    },
    {
      icon: '🍽️',
      title: 'Skipped or Late Meals',
      description:
        'Under academic pressure, students frequently postpone or skip meals, which hurts concentration, health, and overall campus well‑being.',
    },
    {
      icon: '🏢',
      title: 'Vertical Congestion on Campus',
      description:
        'Crowded lifts, crowded canteens, and limited seating create "vertical congestion"—students waste precious time moving between floors just to get food.',
    },
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">😤 The Problem</span>
          <h2 className="section-title">Why BINUS Anggrek Needs BeeGrub</h2>
          <p className="section-subtitle">
            BeeGrub addresses a simple but critical issue: students are losing time, energy, and focus just to get lunch on a crowded vertical campus.
          </p>
        </div>

        <div className="problems-grid">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
