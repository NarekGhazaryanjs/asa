import React from 'react';
import TeamCard from './TeamCard';
import './TeamPage.css';

const TeamPage = () => {
    const teamMembers = [
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg", // Փոխարինեք իրական նկարի հղումով
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն"
        },
        {
            name: "Տաթև Հախվերդյան",
            role: "UI/UX Designer",
            image: "/teamImages/narek.jpg", // Փոխարինեք իրական նկարի հղումով
            bio: "Creative մտածելակերպով դիզայներ Figma-ի փորձառությամբ"
        },
        {
            name: "Լիլիթ Պողոսյան",
            role: "Back-end Developer",
            image: "/teamImages/narek.jpg", // Փոխարինեք իրական նկարի հղումով
            bio: "Node.js և Python փորձառու մասնագետ"
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg", // Փոխարինեք իրական նկարի հղումով
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն"
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg", // Փոխարինեք իրական նկարի հղումով
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն"
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg", // Փոխարինեք իրական նկարի հղումով
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն"
        },
        {
            name: "Նարեկ Ղազարյան",
            role: "Senior Front-end Developer",
            image: "/teamImages/narek.jpg", // Փոխարինեք իրական նկարի հղումով
            bio: "N2G BRAINS ընկերության հիմնադիր տնօրեն"
        },
    ];

    return (
        <div className="team-page">
            <div className="team-container">
                <h1 className="team-title">Մեր Թիմը</h1>
                <p className="team-subtitle">Ծանոթացեք մեր տաղանդավոր մասնագետների հետ</p>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <TeamCard
                            key={index}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            bio={member.bio}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamPage;