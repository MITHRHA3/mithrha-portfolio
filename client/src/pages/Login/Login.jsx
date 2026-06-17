import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { FiUser, FiLock, FiAlertCircle, FiLogIn } from 'react-icons/fi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(username, password);
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Blur Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-purple-600/10 dark:bg-purple-950/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-[30%] right-[20%] w-[250px] h-[250px] bg-cyan-500/10 dark:bg-cyan-950/15 rounded-full blur-[100px]" />
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0" />

      {/* Glassmorphic Panel Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto px-6 relative z-10"
      >
        <div className="glass-card rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-sans text-slate-800 dark:text-white">
              Admin <span className="text-neon-gradient">Portal</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mt-2">
              Sign in to manage portfolio contents.
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            
            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2 font-sans">
                <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="user" className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans uppercase">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="user"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/45 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition duration-300 font-sans"
                  placeholder="Enter admin username"
                />
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="pass" className="text-xs font-bold text-slate-700 dark:text-slate-300 font-sans uppercase">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="pass"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/45 text-slate-800 dark:text-white text-sm focus:outline-none focus:border-purple-500 transition duration-300 font-sans"
                  placeholder="Enter admin password"
                />
                <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-sans font-bold shadow-lg shadow-purple-500/10 hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Signing In...</span>
              ) : (
                <>
                  Sign In
                  <FiLogIn className="w-4.5 h-4.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
