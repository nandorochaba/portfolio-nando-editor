
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Quote, Eye, Target } from 'lucide-react';
import { Project } from '../types';
import Button from '../components/Button';
import Badge from '../components/Badge';
import DeliveryTimeline from '../components/HomologationTimeline';
import { VideoPlayer } from '../components/VideoPlayer';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <div className="pt-32 pb-24 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 px-4 py-2 -ml-4 rounded-xl transition-all duration-300 mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Voltar para Projetos
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            <header>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Badge variant="purple">Video Editing & Motion Graphics</Badge>
                <div className="h-4 w-px bg-black/10 dark:bg-white/10" />
                <span className="text-sm font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-bold">Corte ID: {project.id.toUpperCase()}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-bold mb-10 leading-tight tracking-tighter text-slate-900 dark:text-white"
              >
                {project.title}
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
                className="mb-16"
              >
                <VideoPlayer 
                  videoUrl={project.videoUrl || "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227125dc5f2f518e9868fc9a22cc37&profile_id=139&oauth2_token_id=57447761"} 
                  posterImage={project.image} 
                  title={project.title} 
                  isVertical={project.isVertical}
                />
              </motion.div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl"
              >
                {project.longDescription}
              </motion.p>
            </header>

            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-2xl bg-brand-purple/10 border border-brand-purple/20">
                  <Eye className="w-6 h-6 text-brand-purple" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Estilo & Processo Crítico</h2>
              </div>
              <div className="p-12 glass rounded-[32px] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-purple opacity-50" />
                <h3 className="text-xs font-mono text-brand-purple uppercase mb-6 tracking-widest font-bold">Telas & Montagem</h3>
                <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {project.architecture_summary}
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-black/5 dark:border-white/10">
                  <Target className="w-6 h-6 text-slate-900 dark:text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Audiência & Retenção</h2>
              </div>
              <div className="p-12 glass rounded-[32px] relative overflow-hidden">
                <h3 className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase mb-10 tracking-widest font-bold">Métricas de Engajamento</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="flex flex-col group">
                      <span className="text-5xl font-mono font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-purple transition-colors">{metric.value}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {project.client_quote && (
              <section className="relative py-12">
                <div className="gradient-border rounded-[40px] p-12 md:p-16">
                  <Quote className="w-16 h-16 text-brand-purple/20 mb-10" />
                  <p className="text-3xl md:text-4xl font-medium text-slate-800 dark:text-white mb-12 leading-tight tracking-tight italic">
                    "{project.client_quote.text}"
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-peach flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-brand-orange/20">
                      {project.client_quote.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-xl">{project.client_quote.author}</div>
                      <div className="text-xs font-mono text-brand-purple uppercase tracking-[0.2em] font-bold">{project.client_quote.position}</div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="glass rounded-[40px] p-10 border border-black/5 dark:border-white/5 space-y-12 shadow-xl shadow-black/5 dark:shadow-none">
                <div>
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold">Status de Pós-Produção</h3>
                    <Badge variant="green">Lançado</Badge>
                  </div>
                  <DeliveryTimeline currentStatus={project.status} />
                </div>

                <div className="pt-10 border-t border-black/5 dark:border-white/5 space-y-6">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold">Especificações de Saída</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Resolução Maximum</span>
                      <span className="text-emerald-500 font-mono text-xs font-bold">4K UHD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 dark:text-slate-400 text-sm font-light">Frame Rate</span>
                      <span className="text-brand-purple font-mono text-xs font-bold">60 FPS Cinematic</span>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-black/5 dark:border-white/5">
                  <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-bold mb-6">Software & Plugins</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech_stack.map(tech => (
                      <span key={tech} className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-lg text-[9px] font-mono text-slate-600 dark:text-slate-300 uppercase font-bold tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full h-16 text-lg text-white rounded-2xl shadow-2xl shadow-brand-purple/20">Solicitar Orçamento Elite</Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
