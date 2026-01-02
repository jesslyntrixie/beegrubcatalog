import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Brian Juniarta Darmadi',
      nim: '2702279363',
      role: 'CEO',
      photo: '/images/team/brian-ceo.jpg'
    },
    {
      name: 'Jesslyn Trixie Edvilie',
      nim: '2702260514',
      role: 'COO',
      photo: '/images/team/jesslyn-coo.jpg'
    },
    {
      name: 'Nico Wijaya Hariyanto',
      nim: '2702223260',
      role: 'CTO',
      photo: '/images/team/nico-cto.jpg'
    },
    {
      name: 'Mirekel Tjoa',
      nim: '2702328831',
      role: 'CMO',
      photo: '/images/team/mirekel-cmo.jpg'
    },
    {
      name: 'Mochammad Aqsa Sandhy Pradipta',
      nim: '2702302744',
      role: 'CFO',
      photo: '/images/team/aqsa-cfo.jpg'
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Team</span>
          <h2 className="section-title">BeeGrub <span className="gradient-text">Founding Team</span></h2>
          <p className="section-subtitle">
            Five BINUS students building a smoother, stress-free campus dining experience.
          </p>
        </div>

        <div className="team-group">
          <div className="team-group-image">
            <img
              src="/images/team/group.jpeg"
              alt="BeeGrub team with our Business Ideation lecturer at BINUS Anggrek"
            />
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-photo">
                <img src={member.photo} alt={member.name} />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-meta">{member.role} - {member.nim}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
