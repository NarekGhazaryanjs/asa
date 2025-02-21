import React, { useState } from 'react';
import './Contact.css';
import Footer from '../../ui/Footer/Footer';

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

  return (
<div className="contact-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Կապ մեզ հետ</h1>
          <p>
            Մենք միշտ պատրաստ ենք օգնել Ձեզ: Կապվեք մեզ հետ ցանկացած հարցով
          </p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-grid">
              <div className="info-card">
                <div className="icon-circle">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3>Հասցե</h3>
                <p>Երևան, Հայաստան</p>
                <p>Վաղարշյան 21</p>
              </div>

              <div className="info-card">
                <div className="icon-circle">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3>Հեռախոս</h3>
                <p>+374 41 260 706</p>
                <p>+374 96 691 949</p>
              </div>

              <div className="info-card">
                <div className="icon-circle">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>Էլ. փոստ</h3>
                <p>n2gbrains2024@gmail.com</p>
              </div>

              <div className="info-card">
                <div className="icon-circle">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Աշխատանքային ժամեր</h3>
                <p>Երկ-Ուրբ: 09:00 - 22:00</p>
                <p>Շաբ: 10:00 - 18:00</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Ուղարկել հաղորդագրություն</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Անուն *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>
                    Էլ. փոստ *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  Հեռախոս
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Թեմա *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>
                  Հաղորդագրություն *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={isSubmitting ? 'submitting' : ''}
              >
                {isSubmitting ? 'Ուղարկվում է...' : 'Ուղարկել'}
              </button>
            </form>
          </div>
        </div>

        <div className="map-container">
          <iframe
            title='title'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2038251190893!2d44.49464277483339!3d40.204528768529265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd43e716b10f%3A0x75286de87f89fab6!2s21%20Vagharsh%20Vagharshyan%20St%2C%20Yerevan%200012!5e0!3m2!1sru!2sam!4v1740160037660!5m2!1sru!2sam"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;