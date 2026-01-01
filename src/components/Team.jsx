import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Brian Juniarta Darmadi',
      nim: '2702279363',
      role: 'CEO',
      photo: 'https://via.placeholder.com/200x200/4CAF50/FFFFFF?text=Brian'
    },
    {
      name: 'Jesslyn Trixie Edvilie',
      nim: '2702260514',
      role: 'COO',
      photo: 'https://via.placeholder.com/200x200/4CAF50/FFFFFF?text=Jesslyn'
    },
    {
      name: 'Nico Wijaya Hariyanto',
      nim: '2702223260',
      role: 'CTO',
      photo: 'https://via.placeholder.com/200x200/4CAF50/FFFFFF?text=Nico'
    },
    {
      name: 'Mirekel Tjoa',
      nim: '2702328831',
      role: 'CMO',
      photo: 'https://via.placeholder.com/200x200/4CAF50/FFFFFF?text=Mirekel'
    },
    {
      name: 'Mochammad Aqsa Sandhy Pradipta',
      nim: '2702302744',
      role: 'CFO',
      photo: 'https://via.placeholder.com/200x200/4CAF50/FFFFFF?text=Aqsa'
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Our Team</span>
          <h2 className="section-title">Tim <span className="gradient-text">BeeGrub</span></h2>
          <p className="section-subtitle">
            Lima mahasiswa BINUS yang bersemangat mengubah pengalaman makan di kampus
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-photo">
                <img src={member.photo} alt={member.name} />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-nim">NIM: {member.nim}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
