import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useAuth } from '../../context/AuthContext';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Profiles', href: '#coding-profiles' },
  { name: 'Certificates', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll logic for sticky nav background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Highlight active section
      if (location.pathname === '/') {
        const scrollPosition = window.scrollY + 200;
        for (const link of navLinks) {
          const sectionId = link.href.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  // Handle smooth scroll clicks
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
    }
  };

  // Check state for scrolls from external pages
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      // clear state
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-4 bg-[#090514]/85 dark:bg-[#090514]/85 bg-white/85 shadow-lg shadow-black/5 backdrop-blur-md border-b border-purple-500/10' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center font-bold text-lg text-white group-hover:rotate-6 transition-transform">
            M
          </div>
          <span className="font-sans font-bold text-xl tracking-wider text-slate-800 dark:text-white group-hover:text-purple-500 transition-colors">
            MITHRHA Y
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-sans text-sm font-semibold tracking-wide transition-colors ${
                    activeSection === link.href.substring(1) && location.pathname === '/'
                      ? 'text-purple-600 dark:text-cyan-400'
                      : 'text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-cyan-400'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && location.pathname === '/' && (
                    <motion.span
                      layoutId="activeDot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-cyan-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-4 border-l border-slate-300 dark:border-slate-800">
            <ThemeToggle />
            
            {user ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/admin"
                  className="px-4 py-2 text-xs font-bold font-sans uppercase rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-600 dark:text-purple-300 hover:bg-purple-500/20 transition"
                >
                  Admin
                </Link>
                <button
                  onClick={logout}
                  className="text-xs font-semibold text-slate-600 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 text-xs font-bold font-sans uppercase rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-500/10 hover:shadow-cyan-500/20 hover:scale-105 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-purple-500 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-white dark:bg-[#090514] border-b border-slate-200 dark:border-purple-950/40"
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block py-1.5 font-sans font-semibold text-base transition-colors ${
                      activeSection === link.href.substring(1) && location.pathname === '/'
                        ? 'text-purple-600 dark:text-cyan-400'
                        : 'text-slate-600 hover:text-purple-600 dark:text-slate-300 dark:hover:text-cyan-400'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              
              <li className="pt-4 border-t border-slate-200 dark:border-purple-950/40 flex items-center justify-between">
                {user ? (
                  <div className="flex gap-4 items-center">
                    <Link
                      to="/admin"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-1.5 text-xs font-bold font-sans uppercase rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-300"
                    >
                      Admin Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        logout();
                      }}
                      className="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-bold uppercase"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
