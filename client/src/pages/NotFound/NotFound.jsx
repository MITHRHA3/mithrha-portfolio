import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden text-center px-6 bg-[#090514]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />
      
      {/* Blur Orbs */}
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[20%] right-[20%] w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] z-0" />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        {/* Animated 404 header */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-8xl md:text-9xl font-extrabold font-sans text-neon-gradient tracking-widest drop-shadow-lg"
        >
          404
        </motion.div>

        <h1 className="text-2xl md:text-3xl font-bold text-white font-sans">
          Lost in Deep Space
        </h1>

        <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
          The page you are looking for has drifted outside our solar system or has been consumed by a digital black hole.
        </p>

        {/* Back to safety action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-sans font-bold shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <FiHome className="w-4.5 h-4.5" />
            Back to Mission Control
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
