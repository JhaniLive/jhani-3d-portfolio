import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import "./Works.scss";

const getComplexityIcon = (complexity) => {
  switch (complexity) {
    case "high": return "🔥";
    case "medium": return "⚡";
    case "low": return "✨";
    default: return "💡";
  }
};

const getTypeIcon = (type) => {
  const icons = {
    "web-app": "🌐",
    "ecommerce": "🛒", 
    "social": "👥",
    "healthcare": "🏥",
    "education": "🎓",
    "enterprise": "🏢",
    "entertainment": "🎵",
    "transport": "🚛",
    "industrial": "⚙️"
  };
  return icons[type] || "💻";
};

const ProjectCard = ({
  index,
  name,
  category,
  description,
  role,
  impact,
  technologies,
  complexity,
  type,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Simple fallback rendering for debugging
  if (!name || !category) {
    return (
      <div className='bg-red-900/20 p-4 rounded border border-red-500/30'>
        <p className='text-red-400'>Missing project data</p>
      </div>
    );
  }

  return (
    <div className="project-card">
      <div 
        className="card-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-glow"></div>
        <div className="card-content">
          
          {/* Header */}
          <div className="card-header">
            <div className="header-content">
              <span className="type-icon">{getTypeIcon(type)}</span>
              <div className="header-text">
                <span className="category">{category}</span>
                <div className="complexity-info">
                  <span className="complexity-icon">{getComplexityIcon(complexity)}</span>
                  <span className="complexity-text">{complexity} complexity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Name */}
          <h3 className="project-name">
            {name}
          </h3>

          {/* Role Badge */}
          <div className="role-badge">
            <span className="badge">
              {role}
            </span>
          </div>

          {/* Description */}
          <p className="description">
            {description}
          </p>

          {/* Impact */}
          <div className="impact-section">
            <div className="impact-header">
              <span className="impact-icon">📈</span>
              <span className="impact-title">Impact</span>
            </div>
            <p className="impact-text">{impact}</p>
          </div>

          {/* Technologies */}
          <div className="technologies">
            <div className="tech-list">
              {technologies && technologies.map((tech, techIndex) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className={`hover-overlay ${isHovered ? 'hovered' : ''}`} />
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [filter, setFilter] = useState("all");
  // Track visible projects for each filter separately
  const [visibleCounts, setVisibleCounts] = useState({
    all: 6,
    healthcare: 6,
    ecommerce: 6,
    education: 6,
    enterprise: 6
  });

  const categories = [
    { value: "all", label: "All Projects", icon: "🚀", count: projects.length },
    { value: "healthcare", label: "Healthcare", icon: "🏥", count: projects.filter(p => p.type === "healthcare").length },
    { value: "ecommerce", label: "E-Commerce", icon: "🛒", count: projects.filter(p => p.type === "ecommerce").length },
    { value: "education", label: "Education", icon: "🎓", count: projects.filter(p => p.type === "education").length },
    { value: "enterprise", label: "Enterprise", icon: "🏢", count: projects.filter(p => p.type === "enterprise").length },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.type === filter);

  const currentVisibleCount = visibleCounts[filter];
  const displayedProjects = filteredProjects.slice(0, currentVisibleCount);
  const hasMore = currentVisibleCount < filteredProjects.length;

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // Don't reset visible count - maintain it for each tab
  };

  const handleLoadMore = () => {
    setVisibleCounts(prev => ({
      ...prev,
      [filter]: Math.min(prev[filter] + 6, filteredProjects.length)
    }));
  };

  return (
    <div className="works-container">
      {/* Section Header */}
      <div className="section-header">
        <p className="section-subtitle">Portfolio Showcase</p>
        <h2 className="section-title">Featured Projects.</h2>
      </div>

      {/* Description */}
      <div className="description">
        Explore my diverse portfolio of <span className="highlight">{projects.length}+ professional projects</span> spanning 
        healthcare, e-commerce, education, and enterprise solutions. Each project showcases my expertise in modern web technologies, 
        AI integration, and creating impactful user experiences that drive real business results.
      </div>

      {/* Filter Categories */}
      <div className="filter-categories">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleFilterChange(category.value)}
            className={`filter-button ${filter === category.value ? 'active' : 'inactive'}`}
          >
            <div className="button-content">
              <span className="icon">{category.icon}</span>
              <span className="label mobile-hidden">{category.label}</span>
              <span className="label mobile-short">{category.label.split(' ')[0]}</span>
              <span className={`count ${filter === category.value ? 'active-count' : 'inactive-count'}`}>
                {category.count}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Projects Stats */}
      <div className="stats-section">
        <div className="stat-card projects-stat">
          <div className="stat-number purple">{projects.length}+</div>
          <div className="stat-label">Total Projects</div>
        </div>
        <div className="stat-card experience-stat">
          <div className="stat-number green">5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="stat-card tech-stat">
          <div className="stat-number orange">50+</div>
          <div className="stat-label">Technologies Used</div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="project-grid" key={`${filter}-${currentVisibleCount}`}>
        {displayedProjects && displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <ProjectCard key={`${filter}-${project.name}-${index}`} index={index} {...project} />
          ))
        ) : (
          <div className="no-projects">
            <p className="no-projects-title">No projects found for this category.</p>
            <p className="no-projects-subtitle">Filter: {filter}, Available: {filteredProjects.length}</p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="load-more-section">
          <button onClick={handleLoadMore} className="load-more-button">
            <span className="button-content">
              <span>Load More Projects ({Math.min(6, filteredProjects.length - currentVisibleCount)} more)</span>
              <span className="arrow">→</span>
            </span>
            <div className="button-overlay"></div>
          </button>
        </div>
      )}

      {/* Achievement Banner */}
      <div className="achievement-banner">
        <h3 className="banner-title">
          🎯 Delivering Excellence Across Industries
        </h3>
        <p className="banner-text">
          From AI-powered healthcare solutions to scalable e-commerce platforms, my projects have consistently 
          delivered measurable results. Each solution is crafted with attention to user experience, 
          performance optimization, and business impact.
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");