
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import BubblesBackground from './components/BubblesBackground';
import SocialIcons from './components/SocialIcons';
import { useProjects } from './hooks/useProjects';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  const projects = useProjects();
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/project/', '');
      if (hash && projects.find(p => p.id === hash)) {
        setActiveProjectId(hash);
      } else {
        setActiveProjectId(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [projects]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const handleProjectClick = (id: string) => { window.location.hash = `#/project/${id}`; };
  const handleBackToGrid = () => { window.location.hash = '#/'; };

  const activeProject = projects.find(p => p.id === activeProjectId);

  return (
    <div className="relative min-h-screen bg-transparent selection:bg-brand-purple selection:text-white overflow-x-hidden transition-colors duration-500 font-sans">
      <BubblesBackground />
      
      <div className="relative z-10">
        <Header toggleTheme={toggleTheme} isDark={isDark} />
        
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div
              key={`detail-${activeProject.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectDetail project={activeProject} onBack={handleBackToGrid} />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Home onProjectClick={handleProjectClick} />
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="py-20 border-t border-slate-200 dark:border-white/5 bg-white/40 dark:bg-black/40 backdrop-blur-2xl transition-colors duration-500">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-slate-500 dark:text-slate-400 text-sm font-mono flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-purple/40"></span>
              &copy; 2026 Nando Rocha // EDIÇÃO DE VÍDEO & DESIGN
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <SocialIcons />
              <div className="flex gap-8">
                <a href="#" className="text-xs uppercase tracking-widest text-slate-500 hover:text-brand-purple transition-colors">Showreel</a>
                <a href="#" className="text-xs uppercase tracking-widest text-slate-500 hover:text-brand-purple transition-colors">Processo</a>
                <a href="#" className="text-xs uppercase tracking-widest text-slate-500 hover:text-brand-purple transition-colors">Orçamento</a>
              </div>
            </div>
          </div>
        </footer>
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
