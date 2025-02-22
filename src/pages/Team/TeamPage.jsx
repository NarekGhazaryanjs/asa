import React from 'react';
import TeamCard from './TeamCard';
import './TeamPage.css';

const TeamPage = () => {
    const teamMembers = [
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg",
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն",
            skills: ["React", "TypeScript", "Node.js"],
            social: {
                linkedin: "#",
                github: "#",
                email: "narek@example.com"
            }
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg",
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն",
            skills: ["React", "TypeScript", "Node.js"],
            social: {
                linkedin: "#",
                github: "#",
                email: "narek@example.com"
            }
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg",
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն",
            skills: ["React", "TypeScript", "Node.js"],
            social: {
                linkedin: "#",
                github: "#",
                email: "narek@example.com"
            }
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg",
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն",
            skills: ["React", "TypeScript", "Node.js"],
            social: {
                linkedin: "#",
                github: "#",
                email: "narek@example.com"
            }
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg",
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն",
            skills: ["React", "TypeScript", "Node.js"],
            social: {
                linkedin: "#",
                github: "#",
                email: "narek@example.com"
            }
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg",
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն",
            skills: ["React", "TypeScript", "Node.js"],
            social: {
                linkedin: "#",
                github: "#",
                email: "narek@example.com"
            }
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg",
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն",
            skills: ["React", "TypeScript", "Node.js"],
            social: {
                linkedin: "#",
                github: "#",
                email: "narek@example.com"
            }
        },
        // ... մնացած թիմի անդամները
    ];

    const stats = [
        { number: "10+", label: "Տարիների փորձ" },
        { number: "50+", label: "Հաջողված նախագծեր" },
        { number: "100%", label: "Գոհ հաճախորդներ" }
    ];

    const values = [
        {
            icon: "🎯",
            title: "Որակ",
            description: "Մենք առաջնորդվում ենք բարձր որակի չափանիշներով"
        },
        {
            icon: "💡",
            title: "Ինովացիա",
            description: "Միշտ քայլում ենք տեխնոլոգիաների առաջին շարքերում"
        },
        {
            icon: "🤝",
            title: "Թիմային աշխատանք",
            description: "Հաջողության հասնում ենք միասին"
        }
    ];

    return (
        <div className="team-page">
            <div className="team-container">
                <div className="team-header">
                    <h1 className="team-title">Մեր Թիմը</h1>
                    <p className="team-subtitle">
                        Մեր փորձառու մասնագետները պատրաստ են իրականություն դարձնել ձեր թվային երազանքները
                    </p>
                    
                    <div className="team-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            {...member}
                        />
                    ))}
                </div>

                <div className="team-values">
                    <h2 className="section-title">Մեր արժեքները</h2>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;