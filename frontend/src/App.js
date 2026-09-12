import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Common/Header';
import Sidebar from './components/Common/Sidebar';
import authService from './services/authService';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated && !authService.isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const isUserAuthenticated = isAuthenticated || authService.isAuthenticated();

  useEffect(() => {
    // Close sidebar on large screens
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <Toaster position="top-right" />
      {isUserAuthenticated ? (
        <div className="flex h-screen bg-gray-50">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
            <main className="flex-1 overflow-auto">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  }
                />
                {/* Module Routes - To be added */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
