import React from 'react';
import { FaRegLightbulb, FaHandshake, FaRecycle, FaUsers } from 'react-icons/fa';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-header">
        <h1>Our Vision</h1>
        <p>We are committed to revolutionizing the industry with innovative solutions. Join us as we pave the way for a brighter future.</p>
      </section>

      <div className="about-section">
        <div className="about-story">
          <h2>Our Story</h2>
          <p>Founded with the purpose of combining technology with social responsibility, we’ve created a platform to inspire change. Our founders, driven by a shared passion, have united their skills to build something that matters. Together, we aim to break barriers and reshape industries for good.</p>
        </div>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>We aim to create a world where innovation meets impact. Our mission is to build sustainable solutions that enhance lives, foster growth, and drive lasting change. Through our work, we strive to inspire future generations to think creatively and act responsibly.</p>
        </div>
      </div>

      <div className="values-container">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaRegLightbulb size={40} color="#3498db" />
            <h3>Innovation</h3>
            <p>We embrace new ideas and challenges, constantly evolving to create groundbreaking solutions.</p>
          </div>
          <div className="value-card">
            <FaHandshake size={40} color="#3498db" />
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and partnerships to achieve mutual success and growth.</p>
          </div>
          <div className="value-card">
            <FaRecycle size={40} color="#3498db" />
            <h3>Sustainability</h3>
            <p>We prioritize long-term environmental and social impacts in everything we do.</p>
          </div>
          <div className="value-card">
            <FaUsers size={40} color="#3498db" />
            <h3>Community</h3>
            <p>We put people first, building strong communities that thrive through cooperation and mutual respect.</p>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have questions or want to join the movement? Reach out to us and let’s work together for a better future.</p>
        <button className="contact-button">Get In Touch</button>
      </div>
    </div>
  );
};

export default AboutPage;
