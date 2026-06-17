import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiShield } from 'react-icons/fi';

const certificationsData = [
  {
    title: "Mastering Data Structures using C & C++ Programming",
    issuer: "Educational Institution",
    year: "2025",
    color: "text-purple-600 bg-purple-500/10 hover:border-purple-500/30"
  },
  {
    title: "C Boot Camp — The Complete C Language Course",
    issuer: "Professional Course",
    year: "2025",
    color: "text-cyan-600 bg-cyan-500/10 hover:border-cyan-500/30"
  },
  {
    title: "Java Course",
    issuer: "Corporate Training Provider",
    year: "2025",
    color: "text-pink-600 bg-pink-500/10 hover:border-pink-500/30"
  },
  {
    title: "Oracle Batch (Java)",
    issuer: "Oracle Academy Certified",
    year: "2025",
    color: "text-emerald-600 bg-emerald-500/10 hover:border-emerald-500/30"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-900/5 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-sans text-slate-800 dark:text-white"
          >
            Licenses & <span className="text-neon-gradient">Certifications</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between h-full group border border-slate-200/50 dark:border-slate-800/80 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Certificate Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                  <FiAward className="w-6 h-6" />
                </div>
                
                {/* Certificate Details */}
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-800 dark:text-white text-base sm:text-lg font-sans leading-snug group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Footer info */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1">
                  <FiCalendar className="w-3.5 h-3.5" />
                  {cert.year}
                </div>
                <div className="flex items-center gap-1.5 text-purple-600 dark:text-cyan-400 font-mono font-semibold">
                  <FiShield className="w-3.5 h-3.5" />
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
