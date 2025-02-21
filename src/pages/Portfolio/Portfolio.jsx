import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [hoveredId, setHoveredId] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Black Fly",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/shop",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
            tags: ["React", "Redux", "Node.js", "MongoDB"]
        },
        {
            id: 2,
            title: "Lusamut",
            description: "Lusamut Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/social",
            image: "./TeamImages/narek.jpg",
            tags: ["React", "Firebase", "Socket.io"]
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/tasks",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
            tags: ["React", "TypeScript", "Express"]
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/tasks",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
            tags: ["React", "TypeScript", "Express"]
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/tasks",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
            tags: ["React", "TypeScript", "Express"]
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/tasks",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
            tags: ["React", "TypeScript", "Express"]
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/tasks",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
            tags: ["React", "TypeScript", "Express"]
        }
    ];

    return (
        <div className="portfolio-container">
            <h1 className="portfolio-title">Մեր պրոյեկտները</h1>
            
            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`project-card ${hoveredId === project.id ? 'hovered' : ''}`}
                        onMouseEnter={() => setHoveredId(project.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                                    Դիտել պրոյեկտը
                                </a>
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <p className="technologies-title">Տեխնոլոգիաներ</p>
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;