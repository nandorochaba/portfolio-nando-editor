import React, { useEffect, useRef, memo } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project, ProjectStatus } from '../types';
import Badge from './Badge';

declare global {
  interface Window {
    VanillaTilt: any;
  }
}

interface ProjectCardProps {
  project: Project;
  onClick: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (el && window.VanillaTilt) {
      window.VanillaTilt.init(el, {
        max: 5,
        speed: 1000,
        scale: 1.02,
        glare: true,
        "max-glare": 0.1,
        perspective: 1500,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        gyroscope: false,
      });
    }
    return () => {
      if (el && (el as any).vanillaTilt) {
        (el as any).vanillaTilt.destroy();
      }
    };
  }, []);

  const getStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case ProjectStatus.DEVELOPMENT:
        return <Badge variant="gray">Em Desenvolvimento</Badge>;
      case ProjectStatus.HOMOLOGATION:
        return <Badge variant="purple" pulse>Homologação</Badge>;
      case ProjectStatus.DELIVERED:
        return <Badge variant="green">Entregue</Badge>;
      default:
        return null;
    }
  };

  const isVertical = project.isVertical || project.category === 'Reels / TikTok / Shorts';

  if (isVertical) {
    return (
      <div 
        ref={cardRef}
        onClick={() => onClick(project.id)}
        className="group relative cursor-pointer overflow-hidden rounded-[32px] border border-black/15 dark:border-white/15 h-full aspect-[9/16] shadow-xl shadow-black/10 dark:shadow-black/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/10 dark:hover:shadow-brand-orange/5 bg-slate-950 flex flex-col justify-end"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Fill Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={project.image} 
            alt={`Visualização do projeto ${project.title}`} 
            className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-95"
            loading="lazy"
          />
          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100" />
        </div>

        {/* Play Icon - centered */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 backdrop-blur-[1px] pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-300 scale-75 group-hover:scale-100 group-hover:bg-brand-peach">
            <svg 
              className="w-7 h-7 fill-current translate-x-0.5" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" style={{ fill: 'currentColor' }} />
            </svg>
          </div>
        </div>

        {/* Float bottom Title overlay block */}
        <div 
          className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end text-white z-10 select-none pb-8"
          style={{ transform: 'translate3d(0, 0, 15px)' }}
        >
          <div className="bg-black/50 dark:bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex justify-between items-center transition-all duration-350 group-hover:bg-black/80 group-hover:border-brand-orange/40">
            <div className="min-w-0 pr-2">
              <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-brand-orange dark:text-brand-peach uppercase block mb-1">
                {project.category}
              </span>
              <h3 className="text-base font-bold text-white tracking-tight truncate leading-tight">
                {project.title}
              </h3>
            </div>
            <div className="p-2.5 rounded-xl bg-white/10 border border-white/10 group-hover:bg-brand-orange group-hover:text-white transition-all duration-205 shrink-0">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={cardRef}
      onClick={() => onClick(project.id)}
      className="group relative cursor-pointer overflow-visible rounded-3xl glass transition-all duration-300 glow-purple h-full flex flex-col shadow-xl shadow-black/5 dark:shadow-black/20 will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div 
        className="aspect-[16/10] overflow-hidden relative bg-slate-800 rounded-t-3xl shrink-0 pointer-events-none"
      >
        <img 
          src={project.image} 
          alt={`Visualização do projeto ${project.title}`} 
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/45 backdrop-blur-[2px]">
          <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-2xl border border-white/20 transition-all duration-300 scale-75 group-hover:scale-100 group-hover:bg-brand-peach">
            <svg 
              className="w-6 h-6 fill-current translate-x-0.5" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" style={{ fill: 'currentColor' }} />
            </svg>
          </div>
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest font-bold text-white/80 uppercase bg-black/45 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">
            Assistir Vídeo
          </span>
        </div>
      </div>

      <div className="p-7 relative flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-5 gap-4">
          <div className="flex flex-col gap-2.5 min-w-0" style={{ transform: 'translate3d(0, 0, 15px)' }}>
            <div className="transform transition-all duration-200 group-hover:translate-x-1 w-fit">
              {getStatusBadge(project.status)}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-200 group-hover:text-brand-purple truncate pr-2 text-shadow-sm">
              {project.title}
            </h3>
          </div>
          <div 
            className="p-2.5 rounded-xl bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 group-hover:bg-brand-purple group-hover:text-white transition-all duration-200 shrink-0"
            style={{ transform: 'translate3d(0, 0, 20px)' }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 text-sm leading-relaxed" style={{ transform: 'translate3d(0, 0, 10px)' }}>
          {project.description}
        </p>

        <div 
          className="mt-auto flex items-center gap-3 pt-5 border-t border-black/5 dark:border-white/10"
          style={{ transform: 'translate3d(0, 0, 5px)' }}
        >
          <div className="flex -space-x-2 shrink-0">
            {project.tech_stack.slice(0, 3).map((tech, i) => (
              <div 
                key={tech}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-black/5 dark:border-white/20 flex items-center justify-center text-[9px] font-mono text-slate-700 dark:text-slate-200 shadow-sm"
                style={{ zIndex: 10 - i }}
                title={tech}
              >
                {tech[0]}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 ml-auto min-w-0">
            {project.metrics.slice(0, 1).map((metric) => (
              <div key={metric.label} className="text-right min-w-0">
                <div className="text-[9px] text-slate-500 dark:text-slate-500 uppercase tracking-widest font-bold mb-0.5 truncate">{metric.label}</div>
                <div className="text-sm font-bold text-brand-purple dark:text-brand-orange font-mono transition-transform duration-200 group-hover:scale-105 origin-right">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);