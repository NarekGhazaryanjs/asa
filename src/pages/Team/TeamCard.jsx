import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name, role, image, bio }) => {
  return (
    <div className="team-card">
      <div className="card-content">
        <div className="image-container">
          <img src={image} alt={name} className="member-image" />
        </div>
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;