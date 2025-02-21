import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Այստեղ կարող եք ավելացնել ձեր ֆորմայի ուղարկման տրամաբանությունը
    alert('Շնորհակալություն, ձեր հաղորդագրությունը ուղարկված է');
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Կապ մեզ հետ</h1>
        <p>Կապվեք մեզ հետ ցանկացած հարցով</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <h3>Հասցե</h3>
            <p>Երևան, Հայաստան</p>
            <p>Աբովյան 22/5</p>
          </div>
          
          <div className="info-card">
            <h3>Հեռախոս</h3>
            <p>+374 99 123456</p>
            <p>+374 10 123456</p>
          </div>
          
          <div className="info-card">
            <h3>Էլ. փոստ</h3>
            <p>info@yourcompany.am</p>
            <p>support@yourcompany.am</p>
          </div>
          
          <div className="info-card">
            <h3>Աշխատանքային ժամեր</h3>
            <p>Երկ-Ուրբ: 09:00 - 18:00</p>
            <p>Շաբ: 10:00 - 15:00</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Անուն" required />
            </div>
            
            <div className="form-group">
              <input type="email" placeholder="Էլ. փոստ" required />
            </div>
            
            <div className="form-group">
              <input type="tel" placeholder="Հեռախոսահամար" />
            </div>
            
            <div className="form-group">
              <textarea placeholder="Հաղորդագրություն" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Ուղարկել
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4604493844435!2d44.51145731570702!3d40.17671037939307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abce2e8ef89a7%3A0x5e9a2d3c92f2c8f9!2sAbovyan%20St%2C%20Yerevan!5e0!3m2!1sen!2sam!4v1624443391629!5m2!1sen!2sam" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy">
        </iframe>
      </div>
    </div>
  );
};

export default Contact;