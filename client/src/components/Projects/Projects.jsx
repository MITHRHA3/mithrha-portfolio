import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiCheck, FiFilter } from 'react-icons/fi';

const categories = ["All", "Full-Stack", "AI & Data"];

const projectsData = [
  {
    title: "Velora AI",
    category: "AI & Data",
    year: "2026",
    description: "Developed a conversational analytics platform that enables natural language querying of ARGO oceanographic datasets. Built a React frontend with interactive chat and dynamic visualizations, supported by a FastAPI backend for data processing. Integrated LLaMA 3 70B via Groq API to convert user queries into structured filters and generate AI-driven scientific insights.",
    technologies: ["React", "FastAPI", "LLaMA 3 (Groq API)", "Python", "Tailwind CSS"],
    features: [
      "Natural language queries to structured insights",
      "FastAPI real-time data ingestion",
      "Dynamic interactive scientific charts",
      "Modular, high-performance architecture"
    ],
    github: "https://github.com/MITHRHA/velora-ai",
    live: "#",
    gradient: "from-blue-600 via-cyan-500 to-indigo-600"
  },
  {
    title: "Online Learning Management System (LMS)",
    category: "Full-Stack",
    year: "2025",
    description: "Developed a web-based LMS enabling teachers to upload course materials, quizzes, and assignments. Students can enroll, track progress, and submit work. Includes real-time notifications for deadlines, live class integrations via video conferencing, and detailed admin metrics for managing users and enrollments.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    features: [
      "Video integration for live classes",
      "Real-time notifications for updates",
      "Assignment submission & progress tracking",
      "Admin user management & reports panel"
    ],
    github: "https://github.com/MITHRHA/online-lms",
    live: "#",
    gradient: "from-purple-600 via-pink-500 to-purple-800"
  },
  {
    title: "Internship Management System",
    category: "Full-Stack",
    year: "2025",
    description: "Developed a full-stack system for managing student internships with role-based access control. Implemented REST APIs and interactive dashboards for tracking student registrations, periodic submission reviews, and automated approvals workflow to streamline department administration.",
    technologies: ["Spring Boot", "MySQL", "React", "REST API", "JWT Auth"],
    features: [
      "Role-based portals (Student/Mentor/Admin)",
      "Secure file upload for progress reports",
      "Automated approval & dashboard statistics",
      "Optimized query speed using MySQL schemas"
    ],
    github: "https://github.com/MITHRHA/internship-management",
    live: "#",
    gradient: "from-emerald-600 via-teal-500 to-cyan-600"
  }
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter projects by both category selection and search bar input
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-900/5 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-sans text-slate-800 dark:text-white"
          >
            Featured <span className="text-neon-gradient">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Controls (Search + Categories) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2.5 order-2 md:order-1">
            <FiFilter className="text-purple-600 dark:text-cyan-400 mr-1.5 hidden sm:block" />
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold font-sans transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-500/15 scale-105'
                    : 'bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-purple-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <input
              type="text"
              placeholder="Search project or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition duration-300 font-sans"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
          </div>
        </div>

        {/* Projects Grid Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group"
              >
                {/* Simulated Image Header */}
                <div className={`relative h-48 bg-gradient-to-tr ${project.gradient} overflow-hidden flex items-center justify-center p-6`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Floating Year badge */}
                  <span className="absolute top-4 right-4 bg-black/40 text-cyan-400 font-mono text-xs font-bold px-2.5 py-1 rounded-full border border-cyan-400/20 backdrop-blur-sm">
                    {project.year}
                  </span>
                  
                  {/* Visual mockup detail */}
                  <span className="text-xl font-extrabold tracking-widest text-white/45 uppercase select-none font-sans drop-shadow-md">
                    {project.title.split(' ')[0]} Frame
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold font-sans text-purple-600 dark:text-cyan-400 uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans mb-6">
                    {project.description}
                  </p>

                  {/* Features Bullet List */}
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans mb-3 uppercase tracking-wider">
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <FiCheck className="w-4 h-4 text-purple-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="font-sans leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 font-mono text-[10px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link buttons removed as requested */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg font-sans">No projects match your current filters.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
