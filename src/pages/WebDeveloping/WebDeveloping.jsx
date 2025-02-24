import React from 'react';
import './webDeveloping.css';

const WebDeveloping = () => {
  return (
    <div className="web-dev-container">
      <section className="heroS">
        <div className="heroS-content">
          <h2>Մասնագիտական Վեբ Լուծումներ</h2>
          <p>Մենք կառուցում ենք գեղեցիկ և ֆունկցիոնալ կայքեր ձեր բիզնեսի համար</p>
          <a href="#contact" className="cta-button">Կապվել Մեզ Հետ</a>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-header">
          <h2>Մեր Ծառայությունները</h2>
          <p>Մենք իրականացնում ենք վեբ ծրագրավորման պատվերներ և առաջարկում լուծումներ</p>
        </div>
        
        <div className="service-boxes">
          <div className="service-box">
            <div className="icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3>Վեբ Կայքերի Ստեղծում</h3>
            <p>Ստեղծում ենք արդիական, արագ և մոբայլ հարմարեցված կայքեր, որոնք համապատասխանում են ձեր բրենդին:</p>
          </div>
          
          <div className="service-box">
            <div className="icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3>Արձագանքող Դիզայն</h3>
            <p>Մեր բոլոր կայքերը հարմարեցված են բոլոր սարքերի համար՝ հեռախոսներից մինչև համակարգիչներ:</p>
          </div>
          
          <div className="service-box">
            <div className="icon">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h3>Էլեկտրոնային Առևտուր</h3>
            <p>Ստեղծում ենք առցանց խանութներ՝ հարմար և անվտանգ վճարումների համակարգով:</p>
          </div>
          
          <div className="service-box">
            <div className="icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>SEO Օպտիմիզացիա</h3>
            <p>Օպտիմիզացնում ենք ձեր կայքը որոնողական համակարգերի համար՝ ավելի լավ տեսանելիության համար:</p>
          </div>
        </div>
      </section>

      <section id="courses" className="courses">
        <div className="section-header">
          <h2>Դասընթացներ</h2>
          <p>Մենք անցկացնում ենք վեբ ծրագրավորման դասընթացներ սկսնակների և պրոֆեսիոնալների համար</p>
        </div>
        
        <div className="course-boxes">
          <div className="course-box">
            
            <div className="course-content">
              <h3>HTML և CSS հիմունքներ</h3>
              <p>Սկսնակների համար նախատեսված դասընթաց, որը կսովորեցնի վեբ էջեր ստեղծելու հիմունքները:</p>
              <ul className="course-details">
                <li><i className="fas fa-clock"></i> 6 շաբաթ</li>
                <li><i className="fas fa-user-graduate"></i> Սկսնակներ</li>
              </ul>
              <button className="course-button">Գրանցվել</button>
            </div>
          </div>
          
          <div className="course-box">
           
            <div className="course-content">
              <h3>JavaScript ծրագրավորում</h3>
              <p>Սովորեք JavaScript՝ ինտերակտիվ վեբ կայքեր ստեղծելու համար:</p>
              <ul className="course-details">
                <li><i className="fas fa-clock"></i> 8 շաբաթ</li>
                <li><i className="fas fa-user-graduate"></i> Միջին մակարդակ</li>
              </ul>
              <button className="course-button">Գրանցվել</button>
            </div>
          </div>
          
          <div className="course-box">
           
            <div className="course-content">
              <h3>React Framework</h3>
              <p>Ժամանակակից վեբ հավելվածներ ստեղծելու դասընթաց React-ի միջոցով:</p>
              <ul className="course-details">
                <li><i className="fas fa-clock"></i> 10 շաբաթ</li>
                <li><i className="fas fa-user-graduate"></i> Առաջադեմ</li>
              </ul>
              <button className="course-button">Գրանցվել</button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-header">
          <h2>Կապվեք Մեզ Հետ</h2>
          <p>Ունե՞ք հարցեր կամ նախագիծ: Կապվեք մեզ հետ:</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Երևան, Հայաստան</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+374 10 123456</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>info@webdev.am</p>
            </div>
          </div>
          
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Ձեր անունը" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Ձեր էլ. հասցեն" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Թեմա" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Ձեր հաղորդագրությունը" required></textarea>
              </div>
              <button type="submit" className="submit-button">Ուղարկել</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>WebDev</h2>
            <p>Մասնագիտական վեբ լուծումներ</p>
          </div>
          <div className="footer-info">
            <p>Մենք իրականացնում ենք ոեբ ծրագրավորման պատվերներ, կառուցում ենք գեղեցիկ կայքեր, ինչպես նաև անցկացնում ենք ոեբ ծրագրավորման դասընթացներ:</p>
          </div>
          <div className="footer-social">
            <h3>Սոցիալական ցանցեր</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 WebDev. Բոլոր իրավունքները պաշտպանված են:</p>
        </div>
      </footer>
    </div>
  );
};

export default WebDeveloping;