import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

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
    <div className="w-full">
      <div className='relative group'>
        <div className='absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt'></div>
        <div className='relative bg-gray-900 p-8 rounded-3xl leading-none flex flex-col h-full min-h-[400px] border border-gray-800 hover:border-purple-500/50 transition-all duration-300'>
          
          {/* Header */}
          <div className='flex items-start justify-between mb-6'>
            <div className='flex items-center gap-3'>
              <span className='text-3xl'>{getTypeIcon(type)}</span>
              <div>
                <span className='text-purple-400 text-sm font-medium uppercase tracking-wider'>{category}</span>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='text-lg'>{getComplexityIcon(complexity)}</span>
                  <span className='text-xs text-gray-400 capitalize'>{complexity} complexity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Project Name */}
          <h3 className='text-white font-bold text-2xl mb-3 group-hover:text-purple-300 transition-colors duration-300'>
            {name}
          </h3>

          {/* Role Badge */}
          <div className='mb-4'>
            <span className='inline-block bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30'>
              {role}
            </span>
          </div>

          {/* Description */}
          <p className='text-gray-300 text-sm leading-relaxed mb-6 flex-grow'>
            {description}
          </p>

          {/* Impact */}
          <div className='mb-6 p-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl border border-green-500/20'>
            <div className='flex items-center gap-2 mb-2'>
              <span className='text-green-400'>📈</span>
              <span className='text-green-300 font-semibold text-sm'>Impact</span>
            </div>
            <p className='text-green-200 text-sm'>{impact}</p>
          </div>

          {/* Technologies */}
          <div className='mt-auto'>
            <div className='flex flex-wrap gap-2'>
              {technologies && technologies.map((tech, techIndex) => (
                <span
                  key={tech}
                  className='bg-gradient-to-r from-gray-800 to-gray-700 text-white px-3 py-1 rounded-lg text-xs font-medium border border-gray-600 hover:from-purple-600/20 hover:to-blue-600/20 hover:border-purple-500/50 transition-all duration-300 cursor-default'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl transition-opacity duration-300 pointer-events-none ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
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
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Portfolio Showcase</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'
        >
          Explore my diverse portfolio of <span className="text-purple-400 font-semibold">{projects.length}+ professional projects</span> spanning 
          healthcare, e-commerce, education, and enterprise solutions. Each project showcases my expertise in modern web technologies, 
          AI integration, and creating impactful user experiences that drive real business results.
        </motion.p>
      </div>

      {/* Filter Categories */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.2, 1)}
        className='mt-12 flex flex-wrap gap-4 justify-center'
      >
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleFilterChange(category.value)}
            className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filter === category.value
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
            }`}
          >
            <div className='flex items-center gap-2'>
              <span className='text-lg'>{category.icon}</span>
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                filter === category.value 
                  ? 'bg-white/20 text-white' 
                  : 'bg-purple-600/20 text-purple-300'
              }`}>
                {category.count}
              </span>
            </div>
          </button>
        ))}
      </motion.div>

      {/* Projects Stats */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.3, 1)}
        className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto'
      >
        <div className='text-center p-4 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20'>
          <div className='text-2xl font-bold text-purple-400'>{projects.length}+</div>
          <div className='text-sm text-gray-400'>Total Projects</div>
        </div>
        <div className='text-center p-4 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl border border-green-500/20'>
          <div className='text-2xl font-bold text-green-400'>5+</div>
          <div className='text-sm text-gray-400'>Years Experience</div>
        </div>
        <div className='text-center p-4 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-500/20'>
          <div className='text-2xl font-bold text-orange-400'>50+</div>
          <div className='text-sm text-gray-400'>Technologies Used</div>
        </div>
      </motion.div>


      {/* Project Grid */}
      <div 
        key={`${filter}-${currentVisibleCount}`}
        className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
      >
        {displayedProjects && displayedProjects.length > 0 ? (
          displayedProjects.map((project, index) => (
            <ProjectCard key={`${filter}-${project.name}-${index}`} index={index} {...project} />
          ))
        ) : (
          <div className='col-span-full text-center py-12'>
            <p className='text-gray-400 text-lg'>No projects found for this category.</p>
            <p className='text-sm text-gray-500 mt-2'>Filter: {filter}, Available: {filteredProjects.length}</p>
          </div>
        )}
      </div>


      {/* Load More Button */}
      {hasMore && (
        <motion.div 
          variants={fadeIn("up", "spring", 0.5, 1)}
          className='mt-12 text-center'
        >
          <button
            onClick={handleLoadMore}
            className='group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 overflow-hidden'
          >
            <span className='relative z-10 flex items-center gap-2'>
              <span>Load More Projects ({Math.min(6, filteredProjects.length - currentVisibleCount)} more)</span>
              <span className='group-hover:translate-x-1 transition-transform duration-300'>→</span>
            </span>
            <div className='absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300'></div>
          </button>
        </motion.div>
      )}

      {/* Achievement Banner */}
      <motion.div 
        variants={fadeIn("up", "spring", 0.6, 1)}
        className='mt-16 p-8 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-green-900/20 rounded-3xl border border-purple-500/20 text-center'
      >
        <h3 className='text-2xl font-bold text-white mb-4'>
          🎯 Delivering Excellence Across Industries
        </h3>
        <p className='text-gray-300 max-w-3xl mx-auto leading-relaxed'>
          From AI-powered healthcare solutions to scalable e-commerce platforms, my projects have consistently 
          delivered measurable results. Each solution is crafted with attention to user experience, 
          performance optimization, and business impact.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
