import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import Loader from './components/Loader/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AnimatePresence mode="wait">
            {loading ? (
              <Loader key="loader" finishLoading={() => setLoading(false)} />
            ) : (
              <AppRoutes key="routes" />
            )}
          </AnimatePresence>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
