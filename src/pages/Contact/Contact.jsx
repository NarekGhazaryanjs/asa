import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Շնորհակալություն, ձեր հաղորդագրությունը ուղարկված է');
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Linkedin, label: 'Linkedin', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' }
  ];

  return (
    <div className="contact-page">
      <div className="hero-section-box">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Կապ մեզ հետ</h1>
          <p className="hero-description">
            Մենք միշտ պատրաստ ենք օգնել Ձեզ: Կապվեք մեզ հետ ցանկացած հարցով
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Ավարտած ուսանողներ</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Գործընկերներ</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Աջակցություն</span>
            </div>
           
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="contact-info-cards">
          <div className="info-card">
            <div className="info-icon">
              <MapPin size={24} />
            </div>
            <h3>Հասցե</h3>
            <p>Երևան, Հայաստան</p>
            <p>Վաղարշյան 21</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Phone size={24} />
            </div>
            <h3>Հեռախոս</h3>
            <p>+374 41 260 706</p>
            <p>+374 96 691 949</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Mail size={24} />
            </div>
            <h3>Էլ. փոստ</h3>
            <p>n2gbrains2024@gmail.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <Clock size={24} />
            </div>
            <h3>Աշխատանքային ժամեր</h3>
            <p>Երկ-Ուրբ: 09:00 - 22:00</p>
            <p>Շաբ: 10:00 - 18:00</p>
          </div>
        </div>

        <div className="contact-content">
          <div className="form-container">
            <h2>Ուղարկել հաղորդագրություն</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Անուն *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ձեր անունը"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Էլ. փոստ *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ձեր էլ. փոստը"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Հեռախոս</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ձեր հեռախոսահամարը"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Թեմա *</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Հաղորդագրության թեման"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Հաղորդագրություն *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Գրեք Ձեր հաղորդագրությունը..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Ուղարկվում է...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Ուղարկել</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="social-section">
            <h3>Հետևեք մեզ</h3>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="map-section">
        <iframe
          title="Մեր գրասենյակի հասցեն"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2038251190893!2d44.49464277483339!3d40.204528768529265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd43e716b10f%3A0x75286de87f89fab6!2s21%20Vagharsh%20Vagharshyan%20St%2C%20Yerevan%200012!5e0!3m2!1sru!2sam!4v1740160037660!5m2!1sru!2sam"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Contact;