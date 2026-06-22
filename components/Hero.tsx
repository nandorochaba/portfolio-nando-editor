import { motion } from 'framer-motion';
import { ArrowRight, Clapperboard, Sparkles, Volume2 } from 'lucide-react';
import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-transparent">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[700px] h-[700px] bg-brand-purple/20 rounded-full blur-[160px] pointer-events-none opacity-40 dark:opacity-20" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[700px] h-[700px] bg-brand-purple/10 rounded-full blur-[160px] pointer-events-none opacity-30 dark:opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-[20px] bg-gradient-to-br from-brand-orange via-brand-peach to-transparent p-[1px]">
                <div className="w-full h-full rounded-[19px] overflow-hidden bg-white dark:bg-slate-950 flex items-center justify-center transition-colors duration-500">
                  <span className="text-xl font-bold text-brand-orange dark:text-white">N</span>
                </div>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-50 dark:border-[#0a0a0f] shadow-lg shadow-emerald-500/40 animate-pulse transition-colors duration-500" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight transition-colors duration-500 uppercase">Nando Rocha</h2>
              <span className="text-brand-orange dark:text-brand-orange/90 text-[9px] font-mono flex items-center gap-2 uppercase tracking-[0.3em] font-bold">
                Elite Editor • Post-Production
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold leading-[0.95] mb-8 tracking-tighter text-shadow-sm"
          >
            <span className="text-slate-900 dark:text-white transition-colors duration-500">Vídeo Editing & <br /> Storytelling de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-orange via-brand-peach to-brand-bronze dark:from-brand-orange dark:to-brand-peach">
              Elite.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl mb-10 leading-relaxed font-light transition-colors duration-500"
          >
            Criando narrativas poderosas, motion graphics complexos e sonorização imersiva para marcas e criadores de destaque global.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button 
              onClick={() => scrollToSection('projects')}
              className="h-14 px-10 text-base text-white rounded-2xl shadow-xl shadow-brand-purple/30" 
              icon={<ArrowRight />}
            >
              Explorar Projetos
            </Button>
            <Button 
              onClick={() => scrollToSection('methodology')}
              variant="secondary" 
              className="h-14 px-10 text-base text-slate-700 dark:text-white bg-slate-200/50 dark:bg-white/10 backdrop-blur-xl border-slate-300 dark:border-white/20 hover:bg-slate-300/50 dark:hover:bg-white/20 rounded-2xl transition-all"
            >
              Metodologia
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 glass rounded-[32px] border border-black/5 dark:border-white/10 shadow-2xl shadow-black/10 transition-all duration-500"
          >
            <div className="flex flex-col gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 transition-transform group-hover:scale-110">
                <Clapperboard className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-lg transition-colors duration-500">Edição Cinematográfica</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">Ritmo, cortes estratégicos e storytelling visual que mantém a retenção no máximo.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 transition-transform group-hover:scale-110">
                <Sparkles className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-lg transition-colors duration-500">Motion Graphics & VFX</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">Animações modernas, tracking, efeitos visuais premium e identidade visual em movimento.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20 transition-transform group-hover:scale-110">
                <Volume2 className="w-5 h-5 text-brand-purple" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 text-lg transition-colors duration-500">Sound Design & Mix</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-500">Sonorização imersiva, mixagem de efeitos sonoros (SFX) e trilha sonora dinâmica sincronizada.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;