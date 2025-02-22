import React, { useState, useEffect } from 'react';
import { ExternalLink, Code, Monitor, Eye, ChevronRight, Star } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const [visibleCards, setVisibleCards] = useState([]);

    const projects = [
        {
            id: 1,
            title: "Black Fly",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/shop",
            image: "./teamImages/narek.jpg",
            tags: ["React", "Redux", "Node.js", "MongoDB"],
            featured: true,
            stats: {
                views: "2.5K",
                stars: "124"
            }
        },
        {
            id: 2,
            title: "Lusamut",
            description: "Lusamut Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/social",
            image: "./teamImages/narek.jpg",
            tags: ["React", "Firebase", "Socket.io"],
            featured: true,
            stats: {
                views: "1.8K",
                stars: "98"
            }
        },
        {
            id: 3,
            title: "Task Manager",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/tasks",
            image: "./teamImages/narek.jpg",
            tags: ["React", "TypeScript", "Express"],
            stats: {
                views: "3.2K",
                stars: "156"
            }
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setVisibleCards(prev => [...prev, Number(entry.target.dataset.id)]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="portfolio-container">
            <div className="portfolio-wrapper">
                <div className="portfolio-header">
                    <h1 className="portfolio-title">
                        Մեր պրոյեկտները
                        <div className="title-underline"></div>
                    </h1>
                    <p className="portfolio-subtitle">
                        Բացահայտեք մեր վերջին նախագծերը և տեխնոլոգիական լուծումները
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            data-id={project.id}
                            className={`project-card ${visibleCards.includes(project.id) ? 'visible' : ''}`}
                        >
                            <div className="project-image-container">
                                <div className="project-image-wrapper">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="project-image"
                                    />
                                    {project.featured && (
                                        <div className="featured-badge">
                                            Featured
                                        </div>
                                    )}
                                    <div className="image-overlay"></div>
                                </div>
                                
                                <div className="project-overlay">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="view-project-btn"
                                    >
                                        <Eye className="btn-icon" />
                                        <span>Դիտել պրոյեկտը</span>
                                        <ChevronRight className="btn-icon" />
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-stats">
                                        <div className="stat-item">
                                            <Eye className="stat-icon" />
                                            <span>{project.stats.views}</span>
                                        </div>
                                        <div className="stat-item">
                                            <Star className="stat-icon" />
                                            <span>{project.stats.stars}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    <h4 className="technologies-title">
                                        <Code className="tech-icon" />
                                        Տեխնոլոգիաներ
                                    </h4>
                                    <div className="project-tags">
                                        {project.tags.map((tag, index) => (
                                            <span key={index} className="tag">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;