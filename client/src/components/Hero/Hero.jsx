import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

const roles = ["Full Stack Developer", "AI Enthusiast", "Problem Solver"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100); // normal typing speed
        
        if (displayText === currentFullText) {
          // Pause at the end of word before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50); // faster delete speed
        
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-purple-600/10 dark:bg-purple-950/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-500/10 dark:bg-cyan-950/20 rounded-full blur-[80px] md:blur-[120px] animate-float" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern dark:block hidden opacity-60 z-0" />
      <div className="absolute inset-0 bg-grid-pattern-light dark:hidden block opacity-60 z-0" />

      {/* Hero Content Wrapper */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 dark:bg-purple-950/30 text-purple-600 dark:text-cyan-400 font-sans text-xs md:text-sm font-bold uppercase tracking-widest mb-6">
            Welcome to my cosmic workspace
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight font-sans text-slate-800 dark:text-white mb-6"
        >
          Hi, I'm <span className="text-neon-gradient">Mithrha Y</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-8"
        >
          <p className="text-xl sm:text-3xl font-sans font-semibold text-slate-600 dark:text-slate-300">
            A{' '}
            <span className="text-purple-600 dark:text-cyan-400 font-mono typing-cursor border-r-2 border-purple-600 dark:border-cyan-400">
              {displayText}
            </span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-2xl mx-auto text-base sm:text-lg font-sans text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
        >
          An enthusiastic Full Stack Developer and AI explorer pursuing computer science at Sri Eshwar College of Engineering. Focused on translating complex programming patterns and datasets into modular, dynamic, and high-performing web apps.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-sans font-bold shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Get in Touch
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="https://drive.google.com/file/d/1NLgsgXFA3puxpkBXOdQVLdG9-A4GI4O9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-purple-500/20 bg-purple-500/5 dark:bg-purple-950/20 hover:bg-purple-500/10 text-purple-600 dark:text-cyan-400 font-sans font-bold hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Resume
            <FiDownload className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/MITHRHA3"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-purple-500 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mithrha-yuvaraja-508865321/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-purple-500 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:yuvarajamithrha@gmail.com"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-purple-500 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            aria-label="Email Contact"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Floating Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-40">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">Scroll Down</span>
        <div className="w-[18px] h-[30px] rounded-full border border-slate-400 dark:border-slate-600 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-cyan-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
