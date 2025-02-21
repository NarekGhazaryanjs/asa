import React, { useState } from 'react';
import './Smm.css';

const SMM = () => {
    const [activeTab, setActiveTab] = useState('service');

    const clients = [
        {
            id: 1,
            name: "Black Fly",
            image: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=800",
            description: "Սոցիալական ցանցերի մարքեթինգի ամբողջական կառավարում",
            platforms: ["Instagram", "Facebook", "LinkedIn"]
        },
        {
            id: 2,
            name: "Lusamut",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
            description: "Instagram էջի կառավարում և գովազդային արշավներ",
            platforms: ["Instagram", "Facebook"]
        },
        {
            id: 3,
            name: "Art Studio",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800",
            description: "Սոցիալական մեդիայի ռազմավարության մշակում և իրականացում",
            platforms: ["Instagram", "Facebook", "TikTok"]
        }
    ];

    const services = [
        {
            title: "Էջի կառավարում",
            description: "Սոցիալական ցանցերի էջերի ամբողջական կառավարում՝ բովանդակության ստեղծումից մինչև հետադարձ կապի ապահովում",
            icon: "📱"
        },
        {
            title: "Գովազդային արշավներ",
            description: "Թիրախավորված գովազդային արշավների պլանավորում և իրականացում",
            icon: "🎯"
        },
        {
            title: "Բովանդակության ստեղծում",
            description: "Գրավիչ և արդյունավետ բովանդակության ստեղծում՝ ձեր բրենդի ուղերձը փոխանցելու համար",
            icon: "✍️"
        },
        {
            title: "Վերլուծություն",
            description: "Մանրակրկիտ վերլուծություն և հաշվետվություններ՝ արդյունքները գնահատելու համար",
            icon: "📊"
        }
    ];

    return (
        <div className="smm-container">
            <section className="hero-section">
                <h1>SMM Ծառայություններ</h1>
                <p className="hero-text">
                    Մենք օգնում ենք ձեր բիզնեսին աճել սոցիալական մեդիայում՝ 
                    առաջարկելով մասնագիտական SMM ծառայությունների ամբողջական փաթեթ
                </p>
            </section>

            <section className="services-section">
                <h2>Մեր ծառայությունները</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="courses-section">
                <div className="courses-content">
                    <h2>SMM Դասընթացներ</h2>
                    <p>Սովորեք SMM-ի հիմունքները և դարձեք պահանջված մասնագետ</p>
                    <div className="course-features">
                        <div className="feature">
                            <span className="feature-icon">📚</span>
                            <span>Պրակտիկ դասընթացներ</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">👨‍🏫</span>
                            <span>Փորձառու դասախոսներ</span>
                        </div>
                        <div className="feature">
                            <span className="feature-icon">🎓</span>
                            <span>Սերտիֆիկատ</span>
                        </div>
                    </div>
                    <button className="learn-more-btn">Իմանալ ավելին</button>
                </div>
            </section>

            <section className="clients-section">
                <h2>Մեր հաճախորդները</h2>
                <div className="clients-grid">
                    {clients.map((client) => (
                        <div key={client.id} className="client-card">
                            <div className="client-image">
                                <img src={client.image} alt={client.name} />
                            </div>
                            <div className="client-content">
                                <h3>{client.name}</h3>
                                <p>{client.description}</p>
                                <div className="platform-tags">
                                    {client.platforms.map((platform, index) => (
                                        <span key={index} className="platform-tag">
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="contact-section">
                <h2>Սկսեք ձեր SMM ճանապարհը մեզ հետ</h2>
                <p>Կապվեք մեզ հետ անվճար խորհրդատվության համար</p>
                <button className="contact-btn">Կապվել մեզ հետ</button>
            </section>
        </div>
    );
};

export default SMM;