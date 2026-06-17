import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiActivity, FiTarget, FiCalendar } from 'react-icons/fi';

const education = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.E. Computer Science and Engineering",
    score: "CGPA: 8.29",
    period: "2024 - 2028",
    description: "Actively studying foundational computer science, DSA, DBMS, and participating in hackathons and coding profiles.",
  },
  {
    institution: "Nirmala Matha Convent Matric Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    score: "Score: 91.1%",
    period: "2023 - 2024",
    description: "Completed higher secondary education focusing on Biology, Mathematics, and Physics.",
  },
  {
    institution: "St. Francis Anglo Indian Girls Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    score: "Score: 94.6%",
    period: "2021 - 2022",
    description: "Completed secondary education with honors.",
  }
];

const interests = [
  "Full-Stack Systems",
  "Generative Artificial Intelligence",
  "Data Structures & Algorithms"
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-sans text-slate-800 dark:text-white"
          >
            About <span className="text-neon-gradient">Me</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Column 1: Info and Objective */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4 text-purple-600 dark:text-cyan-400">
                <FiTarget className="w-6 h-6" />
                <h3 className="text-xl font-bold font-sans">Career Objective</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                A highly driven and tech-savvy Computer Science engineering student, aiming to utilize strong coding proficiency in languages like C, C++, Java, and Python alongside modern frontend and backend architectures to develop state-of-the-art software applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-4 text-purple-600 dark:text-cyan-400">
                <FiActivity className="w-6 h-6" />
                <h3 className="text-xl font-bold font-sans">Technical Interests</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-6">
                Exploring the intersections of full-stack engineering and intelligent conversational workflows. Passionate about algorithms, structures, and using language models to automate complex query-to-insights paths.
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans bg-purple-500/10 dark:bg-purple-950/40 text-purple-600 dark:text-cyan-300 border border-purple-500/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Education Timeline */}
          <div className="lg:col-span-6">
            <div className="relative pl-6 border-l-2 border-purple-500/30 dark:border-purple-500/10 space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline bullet */}
                  <div className="absolute -left-[35px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#090514] border-4 border-purple-600 dark:border-cyan-400 group-hover:scale-125 transition-transform" />

                  <div className="glass-card rounded-2xl p-6 relative">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold font-sans text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                        {item.institution}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-purple-500 dark:text-purple-400 font-mono font-semibold">
                        <FiCalendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 font-sans">
                      {item.degree} — <span className="text-purple-600 dark:text-cyan-400 font-bold">{item.score}</span>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
