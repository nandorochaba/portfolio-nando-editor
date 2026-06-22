
import React from 'react';
import { Check } from 'lucide-react';
import { ProjectStatus } from '../types';

interface TimelineStep {
  label: string;
  desc: string;
  status: 'complete' | 'active' | 'upcoming';
}

interface DeliveryTimelineProps {
  currentStatus: ProjectStatus;
}

const DeliveryTimeline: React.FC<DeliveryTimelineProps> = () => {
  const steps: TimelineStep[] = [
    { 
      label: 'Brainstorm & Roteiro', 
      desc: 'Planejamento conceitual, roteiro de ritmo e storyboard visual.', 
      status: 'complete' 
    },
    { 
      label: 'Decoupagem & Rough Cut', 
      desc: 'Seleção minuciosa dos melhores takes, sincronismo de áudio e estrutura inicial.', 
      status: 'complete' 
    },
    { 
      label: 'Motion Graphics & VFX', 
      desc: 'Criação de animações de texto, rastreamento de câmera e efeitos visuais integrados.', 
      status: 'complete' 
    },
    { 
      label: 'Sound Design & Color', 
      desc: 'Tratamento de áudio, mixagem de SFX tridimensional e gradação de cor cinematográfica.', 
      status: 'complete' 
    },
    { 
      label: 'Finalização & Render 4K', 
      desc: 'Exportação otimizada em Ultra HD com compressão de alta fidelidade para plataformas.', 
      status: 'complete' 
    },
  ];

  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-px before:bg-slate-200 dark:before:bg-white/10 transition-colors duration-500">
      {steps.map((step, idx) => (
        <div key={idx} className="relative pl-12 group">
          <div className={`absolute left-0 top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-all duration-300 ${
            step.status === 'complete' 
              ? 'bg-brand-purple border-brand-purple text-white shadow-lg shadow-brand-purple/20' 
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 text-slate-200 dark:text-slate-700'
          }`}>
            <Check className="w-4 h-4 font-bold" />
          </div>
          
          <div className="transition-all duration-300 opacity-100">
            <h4 className="font-bold mb-1 text-slate-900 dark:text-white text-sm transition-colors duration-500">
              {step.label}
            </h4>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-sm transition-colors duration-500">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryTimeline;
