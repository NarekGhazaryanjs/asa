import React from 'react';
import { 
  FaRegLightbulb, 
  FaHandshake, 
  FaRecycle, 
  FaUsers, 
  FaRocket, 
  FaChartLine 
} from 'react-icons/fa';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="animate-fade-in">Մեր տեսլականը</h1>
          <p className="animate-fade-in-delay">
            Մենք նվիրված ենք ոլորտը հեղափոխելու նորարարական լուծումներով: 
            Միացեք մեզ, մինչ մենք ճանապարհ ենք հարթում դեպի ավելի պայծառ ապագա:
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <FaRocket className="stat-icon" />
          <div className="stat-number">30+</div>
          <div className="stat-label">Հաջողված ծրագրեր</div>
        </div>
        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <div className="stat-number">60+</div>
          <div className="stat-label">աշխատող ուսանողներ</div>
        </div>
        <div className="stat-item">
          <FaChartLine className="stat-icon" />
          <div className="stat-number">82%</div>
          <div className="stat-label">Աճի տեմպ</div>
        </div>
      </section>

      {/* About Sections */}
      <div className="about-sections">
        <div className="about-section story">
          <div className="section-content">
            <h2>Մեր պատմությունը</h2>
            <p>
              Հիմնադրված տեխնոլոգիաները սոցիալական պատասխանատվության հետ համատեղելու 
              նպատակով, մենք ստեղծել ենք մի հարթակ՝ փոփոխություններ ոգեշնչելու համար: 
              Մեր հիմնադիրները, առաջնորդվելով ընդհանուր կրքով, միավորել են իրենց 
              հմտությունները՝ կառուցելու մի բան, որն իսկապես նշանակություն ունի:
            </p>
          </div>
        </div>

        <div className="about-section mission">
          <div className="section-content">
            <h2>Մեր առաքելությունը</h2>
            <p>
              Մենք ձգտում ենք ստեղծել մի աշխարհ, որտեղ նորարարությունը հանդիպում է 
              ազդեցությանը: Մեր առաքելությունն է կառուցել կայուն լուծումներ, որոնք 
              բարելավում են կյանքը, խթանում աճը և առաջացնում տևական փոփոխություններ:
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-container">
        <h2>Մեր հիմնական արժեքները</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaRegLightbulb className="value-icon" />
            <h3>Նորարարություն</h3>
            <p>Մենք ընդունում ենք նոր գաղափարներ և մարտահրավերներ՝ մշտապես զարգանալով:</p>
          </div>
          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h3>Համագործակցություն</h3>
            <p>Մենք հավատում ենք թիմային աշխատանքի և գործընկերության ուժին:</p>
          </div>
          <div className="value-card">
            <FaRecycle className="value-icon" />
            <h3>Կայունություն</h3>
            <p>Մենք առաջնահերթություն ենք տալիս երկարաժամկետ ազդեցություններին:</p>
          </div>
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Համայնք</h3>
            <p>Մենք առաջնահերթություն ենք տալիս մարդկանց, կառուցում ենք ուժեղ համայնքներ:</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        <div className="contact-content">
          <h2>Կապ մեզ հետ</h2>
          <p>
            Հարցե՞ր ունեք կամ ցանկանում եք միանալ շարժմանը: 
            Կապվեք մեզ հետ և եկեք միասին աշխատենք ավելի լավ ապագայի համար:
          </p>
          <button className="contact-button">Կապվել մեզ հետ</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;