import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFolder, FiAward, FiMail, FiPlus, FiTrash2, FiLogOut, FiCheck, FiInfo } from 'react-icons/fi';
import api from '../../services/api';

// Initial Mock Datasets representing current lists to manage
const initialProjects = [
  { id: 1, title: "Velora AI", category: "AI & Data", year: "2026" },
  { id: 2, title: "Online Learning Management System (LMS)", category: "Full-Stack", year: "2025" },
  { id: 3, title: "Internship Management System", category: "Full-Stack", year: "2025" }
];

const initialCertifications = [
  { id: 1, title: "Mastering Data Structures using C & C++ Programming", issuer: "Udemy", year: "2025" },
  { id: 2, title: "C Boot Camp — The Complete C Language Course", issuer: "Udemy", year: "2025" }
];

const mockMessages = [
  { id: 1, name: "Alexander Pierce", email: "alex@example.com", subject: "Collaboration Proposal", message: "Hi Mithrha, I saw your Velora AI project and would love to collaborate on adding some core analytical tools." },
  { id: 2, name: "Sarah Connor", email: "sarah@cyberdyne.io", subject: "Opportunity", message: "Hello! We are looking for a Spring Boot and React intern in our Coimbatore office. Please send your resume!" }
];

const Admin = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('projects');
  
  // States for list managers
  const [projects, setProjects] = useState(initialProjects);
  const [certs, setCerts] = useState(initialCertifications);
  const [messages, setMessages] = useState([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  
  // Forms state
  const [newProj, setNewProj] = useState({ title: '', category: 'Full-Stack', year: '2026' });
  const [newCert, setNewCert] = useState({ title: '', issuer: '', year: '2025' });

  // Fetch contact inquiries from backend on mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await api.get('/contact');
        if (res.data && res.data.data) {
          setMessages(res.data.data);
        }
      } catch (err) {
        console.error('Failed to fetch contact inquiries', err);
      } finally {
        setLoadingMessages(false);
      }
    };
    if (user) {
      fetchMessages();
    }
  }, [user]);

  // Redirect to login if user session is absent
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProj.title) return;
    setProjects([...projects, { id: Date.now(), ...newProj }]);
    setNewProj({ title: '', category: 'Full-Stack', year: '2026' });
  };

  const handleAddCert = (e) => {
    e.preventDefault();
    if (!newCert.title) return;
    setCerts([...certs, { id: Date.now(), ...newCert }]);
    setNewCert({ title: '', issuer: '', year: '2025' });
  };

  const handleDeleteProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleDeleteCert = (id) => {
    setCerts(certs.filter(c => c.id !== id));
  };

  const handleDeleteMessage = async (id) => {
    try {
      await api.delete(`/contact/${id}`);
      setMessages(messages.filter(m => m._id !== id));
    } catch (err) {
      console.error('Failed to delete message inquiry', err);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 relative overflow-hidden bg-slate-50 dark:bg-[#090514]">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800/80">
          <div>
            <h1 className="text-3xl font-extrabold font-sans text-slate-800 dark:text-white">
              Admin <span className="text-neon-gradient">Dashboard</span>
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-sans">
              Welcome back, <span className="font-semibold text-purple-600 dark:text-cyan-400">{user.username}</span>
            </p>
          </div>
          
          <button
            onClick={logout}
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 text-red-600 dark:text-red-400 font-sans font-bold text-xs uppercase transition duration-300"
          >
            <FiLogOut />
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Navigation Menu */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl font-sans font-bold text-sm text-left whitespace-nowrap transition-all duration-300 w-full ${
                activeTab === 'projects'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/10 scale-105'
                  : 'bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:border-purple-500/35'
              }`}
            >
              <FiFolder />
              Manage Projects
            </button>
            
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl font-sans font-bold text-sm text-left whitespace-nowrap transition-all duration-300 w-full ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/10 scale-105'
                  : 'bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:border-purple-500/35'
              }`}
            >
              <FiAward />
              Certifications
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl font-sans font-bold text-sm text-left whitespace-nowrap transition-all duration-300 w-full relative ${
                activeTab === 'messages'
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/10 scale-105'
                  : 'bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 text-slate-600 dark:text-slate-400 hover:border-purple-500/35'
              }`}
            >
              <FiMail />
              Inbox Queries
              {messages.length > 0 && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  {messages.length}
                </span>
              )}
            </button>
          </div>

          {/* Dynamic Content Panel */}
          <div className="lg:col-span-9">
            
            {/* TAB: PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-8">
                {/* Form to insert new project */}
                <div className="glass-card rounded-3xl p-6">
                  <h2 className="text-xl font-bold font-sans text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <FiPlus className="text-purple-600 dark:text-cyan-400" /> Add New Project
                  </h2>
                  <form onSubmit={handleAddProject} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-400 font-sans uppercase">Project Title</label>
                      <input
                        type="text"
                        placeholder="Project Name"
                        value={newProj.title}
                        onChange={(e) => setNewProj({ ...newProj, title: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/85 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-400 font-sans uppercase">Category</label>
                      <select
                        value={newProj.category}
                        onChange={(e) => setNewProj({ ...newProj, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/85 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 font-sans"
                      >
                        <option value="Full-Stack">Full-Stack</option>
                        <option value="AI & Data">AI & Data</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-sans font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FiPlus /> Add Project
                    </button>
                  </form>
                </div>

                {/* List Projects */}
                <div className="glass-card rounded-3xl p-6 space-y-4">
                  <h3 className="text-lg font-bold font-sans text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800/80 pb-3">
                    Active Projects ({projects.length})
                  </h3>
                  <div className="divide-y divide-slate-200 dark:divide-slate-800/80">
                    {projects.map((proj) => (
                      <div key={proj.id} className="py-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-slate-800 dark:text-slate-100 font-sans">{proj.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                            {proj.category} &bull; Created: {proj.year}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-2.5 rounded-lg border border-red-500/10 hover:border-red-500/30 text-red-500 bg-red-500/5 hover:bg-red-500/10 transition"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: CERTIFICATIONS */}
            {activeTab === 'certifications' && (
              <div className="space-y-8">
                {/* Form to insert new certification */}
                <div className="glass-card rounded-3xl p-6">
                  <h2 className="text-xl font-bold font-sans text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                    <FiPlus className="text-purple-600 dark:text-cyan-400" /> Add Certification
                  </h2>
                  <form onSubmit={handleAddCert} className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-400 font-sans uppercase">Certificate Title</label>
                      <input
                        type="text"
                        placeholder="E.g., AWS Cloud Practitioner"
                        value={newCert.title}
                        onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/85 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-600 dark:text-slate-400 font-sans uppercase">Issuer</label>
                      <input
                        type="text"
                        placeholder="Issuer Agency"
                        value={newCert.issuer}
                        onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800/85 bg-white/50 dark:bg-slate-900/40 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 font-sans"
                      />
                    </div>
                    <button
                      type="submit"
                      className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-sans font-bold text-sm shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <FiPlus /> Add
                    </button>
                  </form>
                </div>

                {/* List Certs */}
                <div className="glass-card rounded-3xl p-6 space-y-4">
                  <h3 className="text-lg font-bold font-sans text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800/80 pb-3">
                    Active Certifications ({certs.length})
                  </h3>
                  <div className="divide-y divide-slate-200 dark:divide-slate-800/80">
                    {certs.map((cert) => (
                      <div key={cert.id} className="py-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-slate-800 dark:text-slate-100 font-sans">{cert.title}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                            {cert.issuer} &bull; Issued: {cert.year}
                          </p>
                        </div>
                        <button
                          onClick={() => handleDeleteCert(cert.id)}
                          className="p-2.5 rounded-lg border border-red-500/10 hover:border-red-500/30 text-red-500 bg-red-500/5 hover:bg-red-500/10 transition"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: INBOX MESSAGES */}
            {activeTab === 'messages' && (
              <div className="glass-card rounded-3xl p-6 space-y-6">
                <h3 className="text-lg font-bold font-sans text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-800/80 pb-3">
                  Inbox Inquiries ({messages.length})
                </h3>
                
                {messages.length === 0 ? (
                  <div className="text-center py-10 flex flex-col items-center justify-center text-slate-500">
                    <FiInfo className="w-8 h-8 mb-2 text-slate-400" />
                    <p className="font-sans">No messages in your inbox.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.map((msg) => (
                      <div
                        key={msg._id}
                        className="p-5 rounded-2xl bg-white/40 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 space-y-3 relative group"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-bold text-slate-800 dark:text-slate-100 font-sans text-base">{msg.name}</p>
                            <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{msg.email}</p>
                          </div>
                          <button
                            onClick={() => handleDeleteMessage(msg._id)}
                            className="p-2 rounded-lg border border-red-500/10 hover:border-red-500/30 text-red-500 bg-red-500/5 hover:bg-red-500/10 transition-all opacity-100 sm:opacity-0 group-hover:opacity-100"
                          >
                            <FiTrash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800/50">
                          <p className="text-xs font-bold text-purple-600 dark:text-cyan-400 font-sans uppercase tracking-wider mb-1">
                            Received Inquiry
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-355 leading-relaxed font-sans">
                            {msg.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Admin;
