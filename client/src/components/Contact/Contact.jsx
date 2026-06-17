import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import api from '../../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // Dispatch real API request to backend server
      await api.post('/contact', formData);

      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({
        submitting: false,
        success: false,
        error: err.response?.data?.message || 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold font-sans text-slate-800 dark:text-white"
          >
            Get In <span className="text-neon-gradient">Touch</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 text-purple-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                <FiMail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider mb-1">
                  Email Me
                </p>
                <a
                  href="mailto:mithrha.y2024cse@sece.ac.in"
                  className="text-sm sm:text-base font-bold font-sans text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-cyan-400 transition-colors"
                >
                  mithrha.y2024cse@sece.ac.in
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 text-purple-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                <FiPhone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider mb-1">
                  Call Me
                </p>
                <a
                  href="tel:+919750922123"
                  className="text-sm sm:text-base font-bold font-sans text-slate-800 dark:text-white hover:text-purple-600 dark:hover:text-cyan-400 transition-colors"
                >
                  +91 9750922123
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 dark:bg-purple-950/40 text-purple-600 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-sans uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-sm sm:text-base font-bold font-sans text-slate-800 dark:text-white">
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 space-y-6"
            >
              <h3 className="text-xl font-bold font-sans text-slate-800 dark:text-white">
                Send a Message
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition duration-300 font-sans"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition duration-300 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition duration-300 font-sans"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans uppercase">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition duration-300 font-sans resize-none"
                />
              </div>

              {/* Status Alert Panels */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-3">
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Your message has been sent successfully! I will reach out soon.</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm flex items-center gap-3">
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-sans font-bold shadow-lg shadow-purple-500/10 hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
              >
                {status.submitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    Send Message
                    <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
