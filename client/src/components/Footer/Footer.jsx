import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800/80 bg-white/20 dark:bg-[#090514]/40 z-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Profile Branding */}
        <div className="text-center md:text-left">
          <p className="text-sm font-sans font-bold text-slate-800 dark:text-slate-200">
            &copy; {new Date().getFullYear()} Mithrha Y. All rights reserved.
          </p>
          <p className="text-xs font-sans text-slate-500 dark:text-slate-400 mt-1.5">
            Designed & Engineered with React, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Social connections */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/MITHRHA3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            aria-label="GitHub Link"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/mithrha-yuvaraja-508865321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn Link"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:yuvarajamithrha@gmail.com"
            className="text-slate-500 hover:text-purple-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
            aria-label="Email Link"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
