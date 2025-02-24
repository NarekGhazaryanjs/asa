import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Code, Monitor, Eye, ChevronRight, Star, ArrowRight, Github } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const [hoveredId, setHoveredId] = useState(null);
    const [visibleCards, setVisibleCards] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
    const sectionRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "Black Fly",
            description: "Black Fly Ընկերությունը, հանդիսանալով մեր լավագույն գործընկերներից, մեզ է դիմել իր կայքի գեղեցիկ դիզայնը ստանալու և կայքը ստեղծելու հարցում",
            link: "https://example.com/shop",
            github: "https://github.com/example/black-fly",
            image: "./teamImages/narek.jpg",
            tags: ["React", "Redux", "Node.js", "MongoDB"],
            featured: true,
            category: "web",
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
            github: "https://github.com/example/lusamut",
            image: "./teamImages/narek.jpg",
            tags: ["React", "Firebase", "Socket.io"],
            featured: true,
            category: "mobile",
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
            github: "https://github.com/example/task-manager",
            image: "./teamImages/narek.jpg",
            tags: ["React", "TypeScript", "Express"],
            category: "desktop",
            stats: {
                views: "3.2K",
                stars: "156"
            }
        }
    ];

    const categories = [
        { id: 'all', label: 'Բոլորը' },
        { id: 'web', label: 'Վեբ նախագծեր' },
        { id: 'mobile', label: 'Բջջային հավելվածներ' },
        { id: 'desktop', label: 'Դեսքթոփ ծրագրեր' }
    ];

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    useEffect(() => {
        setVisibleCards([]);
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setVisibleCards(prev => [...prev, Number(entry.target.dataset.id)]);
                        }, Number(entry.target.dataset.id) * 150); // Cascade effect
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, [activeFilter]);

    return (
        <div className="portfolio-container" ref={sectionRef}>
            <div className="portfolio-bg-gradient"></div>
            <div className="portfolio-wrapper">
                <div className="portfolio-header">
                    <h1 className="portfolio-title">
                        Մեր պրոյեկտները
                        <div className="title-underline"></div>
                    </h1>
                    <p className="portfolio-subtitle">
                        Բացահայտեք մեր վերջին նախագծերը և տեխնոլոգիական լուծումները
                    </p>
                    
                    <div className="portfolio-filters">
                        {categories.map(category => (
                            <button 
                                key={category.id}
                                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            data-id={project.id}
                            className={`project-card ${visibleCards.includes(project.id) ? 'visible' : ''}`}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
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
                                            <Star className="featured-icon" />
                                            Featured
                                        </div>
                                    )}
                                    <div className="image-overlay"></div>
                                </div>
                                
                                <div className="project-overlay">
                                    <div className="project-buttons">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="view-project-btn primary-btn"
                                        >
                                            <Eye className="btn-icon" />
                                            <span>Դիտել</span>
                                        </a>
                                        
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="view-project-btn secondary-btn"
                                        >
                                            <Github className="btn-icon" />
                                            <span>Կոդը</span>
                                        </a>
                                    </div>
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
                                
                                <div className="project-footer">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="details-link"
                                    >
                                        <span>Մանրամասն</span>
                                        <ArrowRight className="arrow-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {filteredProjects.length === 0 && (
                    <div className="no-projects">
                        <p>Այս կատեգորիայում նախագծեր չկան</p>
                    </div>
                )}
                
                <div className="view-all-container">
                    <a href="/projects" className="view-all-btn">
                        <span>Տեսնել բոլորը</span>
                        <ChevronRight className="view-all-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;