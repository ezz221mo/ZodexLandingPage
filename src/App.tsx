import { useState, useEffect, useCallback } from 'react';
import { ThemeProvider } from '@components/ThemeProvider';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import LandingPage from '@pages/LandingPage';
import LoginPage from '@pages/LoginPage';
import DashboardPage from '@pages/DashboardPage';
import { useAuth } from '@hooks/useAuth';
import { useProjects } from '@hooks/useProjects';
import { servicesData } from '@data/initialData';
import type { RoutePath } from '@types/index';

function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    return (window.location.pathname as RoutePath) || '/';
  });

  const { isAuthenticated, login, logout } = useAuth();
  const { projects, isLoading, addProject, updateProject, deleteProject, refreshProjects } = useProjects();

  const navigate = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path as RoutePath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath((window.location.pathname as RoutePath) || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Auth guard for dashboard
  useEffect(() => {
    if (currentPath === '/admin/dashboard' && !isAuthenticated) {
      navigate('/login');
    }
  }, [currentPath, isAuthenticated, navigate]);

  // Simulate loading on first visit to portfolio
  useEffect(() => {
    if (currentPath === '/') {
      refreshProjects();
    }
  }, []);

  const showHeaderFooter = currentPath === '/';

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-500 dark:bg-[#090A0F] light:bg-[#faf9f7]">
        {showHeaderFooter && <Navbar onNavigate={navigate} currentPath={currentPath} />}

        {currentPath === '/' && (
          <LandingPage projects={projects} isLoading={isLoading} services={servicesData} />
        )}

        {currentPath === '/login' && (
          <LoginPage onLogin={login} onNavigate={navigate} />
        )}

        {currentPath === '/admin/dashboard' && isAuthenticated && (
          <DashboardPage
            projects={projects}
            onLogout={logout}
            onNavigate={navigate}
            addProject={addProject}
            updateProject={updateProject}
            deleteProject={deleteProject}
          />
        )}

        {showHeaderFooter && <Footer onNavigate={navigate} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
