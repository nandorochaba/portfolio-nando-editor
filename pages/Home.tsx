import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ProjectCarousel from '../components/ProjectCarousel';
import { useProjects } from '../hooks/useProjects';
import { Testimonials } from '../components/Testimonials';

interface HomeProps {
  onProjectClick: (id: string) => void;
}

const categories = ['Todos', 'Comercial', 'Cinematográfico', 'Reels / TikTok / Shorts', 'YouTube'];

const Home: React.FC<HomeProps> = ({ onProjectClick }) => {
  const projectsData = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredProjects = selectedCategory === 'Todos'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <main className="bg-transparent">
      <Hero />
      
      {/* Featured Showcase Section - Spacing Optimized */}
      <section className="py-12 overflow-hidden" id="showcase">
        <div className="container mx-auto px-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-brand-orange" />
            <span className="text-xs font-mono font-bold text-brand-orange uppercase tracking-[0.3em]">Showcase Elite</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">Projetos em <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-peach">Destaque</span></h2>
        </div>
        
        <ProjectCarousel onProjectClick={onProjectClick} />
      </section>

      <section className="py-16 scroll-mt-24" id="projects">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          >
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-500 text-shadow-sm">Todos os Cortes</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl text-base transition-colors duration-500 leading-relaxed">
                Nossa galeria completa de produções, comerciais e peças de alta performance visual.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] font-mono text-brand-orange dark:text-brand-peach uppercase tracking-[0.2em] border border-brand-orange/30 px-6 py-2.5 rounded-full font-bold bg-brand-orange/5 backdrop-blur-xl transition-all">
                {filteredProjects.length} VÍDEOS EXIBIDOS
              </span>
            </div>
          </motion.div>

          {/* Filtros de Categoria */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex overflow-x-auto no-scrollbar items-center gap-2 sm:gap-3 mb-10 pb-4 px-6 -mx-6 md:mx-0 md:px-0 md:flex-wrap snap-x snap-mandatory"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer select-none outline-none focus:outline-none z-10 shrink-0 snap-start overflow-hidden ${
                    isActive
                      ? 'text-white border-brand-orange/40'
                      : 'bg-white/40 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border-black/5 dark:border-white/5 hover:border-brand-orange/30 hover:text-brand-orange'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryBg"
                      className="absolute inset-0 bg-brand-orange -z-10 shadow-lg shadow-brand-orange/25"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full"
                >
                  <ProjectCard 
                    project={project} 
                    onClick={onProjectClick} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 bg-black/[0.02] dark:bg-black/40 backdrop-blur-2xl border-y border-black/5 dark:border-white/10 transition-colors duration-500 scroll-mt-24" id="methodology">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-12 text-slate-900 dark:text-white tracking-tight transition-colors duration-500 uppercase tracking-widest">Fluxo de Trabalho Cinematográfico</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { label: 'Análise de Ritmo', text: 'Estrutura temporal orientada a reter a atenção do espectador no primeiro segundo.' },
              { label: 'Cor Imersiva', text: 'Calibração e gradação de cores profissionais para transmitir a atmosfera ideal (Color Grading).' },
              { label: 'Som Tridimensional', text: 'Mixagem rica de trilhas sonoras, dublagens, e efeitos sonoros (SFX) realistas.' },
              { label: 'Motion Graphics', text: 'Títulos animados, rastreamento 3D de elementos e identidade visual fluida em movimento.' }
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-2xl border border-black/10 dark:border-white/20 flex items-center justify-center text-brand-orange dark:text-brand-peach font-mono mb-5 font-bold bg-white/50 dark:bg-slate-900/50 shadow-lg group-hover:scale-110 group-hover:border-brand-orange/40 transition-all duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold mb-2 text-slate-900 dark:text-white text-base transition-colors duration-500">{item.label}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 px-2 leading-relaxed transition-colors duration-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;