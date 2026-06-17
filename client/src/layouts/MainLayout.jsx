import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const MainLayout = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col transition-colors duration-300 dark:bg-[#090514] bg-slate-50 text-slate-800 dark:text-slate-200">
      {/* Dynamic top scroll loading slider */}
      <ScrollProgress />

      {/* Sticky header bar */}
      <Navbar />

      {/* Dynamic viewport viewport pages */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global signature bottom block */}
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 cursor-pointer focus:outline-none"
            aria-label="Back to Top"
          >
            <FiArrowUp className="w-5 h-5 animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MainLayout;
