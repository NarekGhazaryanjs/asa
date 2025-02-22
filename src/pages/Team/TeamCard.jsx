import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name, role, image, bio, skills, social }) => {
  return (
    <div className="team-card">
      <div className="card-content">
        <div className="image-container">
          <img src={image} alt={name} className="member-image" />
        </div>
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-bio">{bio}</p>
        
        {skills && (
          <div className="member-skills">
             <span style={{width: '100%'}}> Հիմնական հմտություններ </span>
             <br />
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        )}

        {social && (
          <div className="social-links">
            {social.linkedin && (
              <a href={social.linkedin} className="social-link" aria-label="LinkedIn">
                <span>in</span>
              </a>
            )}
            {social.github && (
              <a href={social.github} className="social-link" aria-label="GitHub">
                <span>git</span>
              </a>
            )}
            {social.email && (
              <a href={`mailto:${social.email}`} className="social-link" aria-label="Email">
                <span>✉</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;