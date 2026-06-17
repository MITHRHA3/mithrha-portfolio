import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCode, FiCpu, FiCompass, FiAward as FiTrophy } from 'react-icons/fi';

const achievementsList = [
  {
    title: "Freshathon 3.0 — 3rd Prize Winner",
    category: "Hackathon Award",
    description: "Competed and won 3rd place in the institution-wide Freshathon 3.0 event, demonstrating rapid ideation, coding speed, and core problem-solving capability.",
    icon: FiTrophy,
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "1300+ Problems Solved on Skillrack",
    category: "Coding Milestones",
    description: "Solved more than 1300 complex algorithmic problems on the Skillrack platform, maintaining high consistency and speed in logical reasoning.",
    icon: FiCode,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Gen-AI Hackathon Participant",
    category: "AI Hackathons",
    description: "Pioneered interactive application concepts during the Gen-AI Hackathon, working on model orchestration interfaces, prompting setups, and pipelines.",
    icon: FiCpu,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "EchoVerse: AI audiobook generator",
    category: "Research Project",
    description: "Engineered EchoVerse, an audiobook generator utilizing IBM Granite and Watsonx services to offer adaptive vocal tones and accessible playback tools.",
    icon: FiCompass,
    color: "from-emerald-500 to-teal-500"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-900/5 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-sans text-slate-800 dark:text-white"
          >
            Milestones & <span className="text-neon-gradient">Achievements</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsList.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 flex items-start gap-5 group"
              >
                {/* Visual Icon Box */}
                <div className={`p-4 rounded-xl bg-gradient-to-tr ${ach.color} text-white flex-shrink-0 flex items-center justify-center shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <span className="text-xs font-bold font-sans text-purple-600 dark:text-cyan-400 uppercase tracking-widest block">
                    {ach.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold font-sans text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
