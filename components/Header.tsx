import { Film, Sun, Moon } from 'lucide-react';
import React, { useEffect, useState, memo } from 'react';
import SocialIcons from './SocialIcons';

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 sm:py-4 bg-white/40 dark:bg-slate-950/40 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 shadow-xl' 
          : 'py-6 sm:py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="p-1.5 sm:p-2 rounded-xl bg-brand-orange/10 border border-brand-orange/20 group-hover:bg-brand-orange group-hover:rotate-[15deg] transition-all duration-300">
            <Film className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange group-hover:text-white" />
          </div>
          <span className="font-mono text-base sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase">
            Nando<span className="text-brand-orange"> Rocha</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          <a href="#projects" className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 hover:text-brand-orange dark:hover:text-white transition-colors">Portfólio</a>
          <a href="#methodology" className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 hover:text-brand-orange dark:hover:text-white transition-colors">Metodologia</a>
          <a href="#showcase" className="text-xs uppercase tracking-widest font-bold text-slate-500 dark:text-slate-400 hover:text-brand-orange dark:hover:text-white transition-colors">Showcase</a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-6">
          <button 
            onClick={toggleTheme}
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-brand-orange dark:hover:text-white transition-all active:scale-95 shrink-0 cursor-pointer"
            aria-label="Alternar Tema"
          >
            {isDark ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-white/10 hidden sm:block" />
          
          <div className="flex items-center gap-2 sm:gap-5">
            <SocialIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);