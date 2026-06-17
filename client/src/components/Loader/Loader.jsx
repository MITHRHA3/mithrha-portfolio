import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 400);
          return 100;
        }
        return prev + 4; // Increments to 100 quickly but smoothly
      });
    }, 40);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 bg-[#090514] z-[99999] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        {/* Animated Rings */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full rounded-full border-4 border-t-purple-500 border-r-cyan-500 border-b-transparent border-l-transparent"
          />
          <div className="absolute inset-2 rounded-full border-4 border-dashed border-pink-500/30 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-950/80 to-cyan-950/80 flex items-center justify-center">
            <span className="text-2xl font-bold font-sans text-neon-cyan neon-glow-cyan">MY</span>
          </div>
        </div>

        {/* Loading text and percentage */}
        <h2 className="text-lg font-bold tracking-widest text-slate-100 mb-2 font-sans uppercase">
          Initializing Portfolio
        </h2>
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mx-auto mb-2">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        <p className="text-sm font-semibold text-purple-400 font-sans">{percent}%</p>
      </motion.div>
    </div>
  );
};

export default Loader;
