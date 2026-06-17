import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiC, SiCplusplus, SiExpress, SiSpringboot, SiMysql, SiMongodb, SiPostman, SiCanva } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import { FiBarChart2 } from 'react-icons/fi';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: SiC, color: "text-blue-500 bg-blue-500/10" },
      { name: "C++", icon: SiCplusplus, color: "text-indigo-500 bg-indigo-500/10" },
      { name: "Java", icon: FaJava, color: "text-red-500 bg-red-500/10" },
      { name: "Python", icon: FaPython, color: "text-yellow-500 bg-yellow-500/10" },
      { name: "SQL", icon: FaDatabase, color: "text-sky-500 bg-sky-500/10" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500 bg-orange-500/10" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-600 bg-blue-600/10" },
      { name: "JavaScript", icon: FaCode, color: "text-yellow-400 bg-yellow-400/10" },
      { name: "React", icon: FaReact, color: "text-cyan-400 bg-cyan-400/10" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500 bg-green-500/10" },
      { name: "Express.js", icon: SiExpress, color: "text-slate-400 bg-slate-400/10" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-emerald-500 bg-emerald-500/10" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-blue-400 bg-blue-400/10" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400 bg-green-400/10" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600 bg-orange-600/10" },
      { name: "GitHub", icon: FaGithub, color: "text-slate-700 dark:text-slate-300 bg-slate-500/10" },
      { name: "VS Code", icon: DiVisualstudio, color: "text-sky-500 bg-sky-500/10" },
      { name: "Power BI", icon: FiBarChart2, color: "text-amber-500 bg-amber-500/10" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500 bg-orange-500/10" },
      { name: "Canva", icon: SiCanva, color: "text-indigo-400 bg-indigo-400/10" }
    ]
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DSA", icon: FaCode, color: "text-cyan-500 bg-cyan-500/10" },
      { name: "OOPs", icon: FaCode, color: "text-pink-500 bg-pink-500/10" },
      { name: "DBMS", icon: FaDatabase, color: "text-emerald-400 bg-emerald-400/10" },
      { name: "Algorithms", icon: FaCode, color: "text-indigo-400 bg-indigo-400/10" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#090514]/20 dark:bg-[#090514]/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-sans text-slate-800 dark:text-white"
          >
            Technical <span className="text-neon-gradient">Skills</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold font-sans text-slate-800 dark:text-white mb-6 border-b border-purple-500/15 pb-2">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={sIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className={`p-2 rounded-lg ${skill.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-sans font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
