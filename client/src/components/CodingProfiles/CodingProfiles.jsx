import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiCodechef } from 'react-icons/si';
import { FiCode, FiAward, FiTrendingUp, FiTarget } from 'react-icons/fi';

const profiles = [
  {
    platform: "LeetCode",
    username: "0e53I7gSTE",
    icon: SiLeetcode,
    color: "text-amber-500 bg-amber-500/10 hover:border-amber-500/30",
    link: "https://leetcode.com/u/0e53I7gSTE/",
    stats: [
      { label: "Problems Solved", value: "141+" },
      { label: "Global Ranking", value: "289,316" },
      { label: "Contest Ranking", value: "1,540" }
    ]
  },
  {
    platform: "Skillrack",
    username: "MITHRHA",
    icon: FiCode,
    color: "text-blue-500 bg-blue-500/10 hover:border-blue-500/30",
    link: "https://www.skillrack.com/profile/MITHRHA", // placeholder or general profile
    stats: [
      { label: "Problems Solved", value: "1,318" },
      { label: "Global Ranking", value: "12,322" },
      { label: "Bronze Medals", value: "381" }
    ]
  },
  {
    platform: "CodeChef",
    username: "MITHRHA",
    icon: SiCodechef,
    color: "text-emerald-500 bg-emerald-500/10 hover:border-emerald-500/30",
    link: "https://www.codechef.com/users/MITHRHA",
    stats: [
      { label: "Problems Solved", value: "100+" },
      { label: "Rating/Stars", value: "Active Contender" },
      { label: "Practice Count", value: "Consistent" }
    ]
  }
];

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-sans text-slate-800 dark:text-white"
          >
            Competitive <span className="text-neon-gradient">Coding Profiles</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card rounded-3xl p-6 flex flex-col h-full hover:shadow-xl transition-all duration-300"
              >
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-2xl ${profile.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-sans text-slate-800 dark:text-white">
                        {profile.platform}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        @{profile.username}
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold font-sans text-purple-600 dark:text-cyan-400 hover:underline"
                  >
                    View Profile
                  </a>
                </div>

                {/* Platform Stats */}
                <div className="space-y-4 flex-grow">
                  {profile.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/55"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans">
                        {sIdx === 0 && <FiCode className="w-4 h-4 text-purple-500" />}
                        {sIdx === 1 && <FiAward className="w-4 h-4 text-cyan-500" />}
                        {sIdx === 2 && <FiTrendingUp className="w-4 h-4 text-pink-500" />}
                        {stat.label}
                      </div>
                      <span className="font-mono text-sm font-bold text-slate-800 dark:text-slate-200">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 font-sans font-medium">
                  <FiTarget className="text-cyan-400" />
                  Consistently developing coding skills.
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
