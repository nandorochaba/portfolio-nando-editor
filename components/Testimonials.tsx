import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { useProjects } from '../hooks/useProjects';

interface Testimonial {
  text: string;
  author: string;
  position: string;
  avatar: string;
  rating: number;
  projectTitle?: string;
}

// Fallback high-quality testimonials in case none or few are present in stored projects
const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    text: "O nível de sincronismo e os impactos dos graves na edição de áudio deixaram o trailer dez vezes mais imersivo. Superou todas as expectativas globais!",
    author: "Dimitri Volkov",
    position: "Product Director na CyberLabs Studios",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fm=webp&q=75&fit=crop&w=150",
    rating: 5,
    projectTitle: "Cyberpunk 2083 Cinematic Trailer"
  },
  {
    text: "Conseguimos reter a atenção dos usuários até o último segundo de vídeo. Os cortes dinâmicos entregaram o visual de cinema que queríamos.",
    author: "Ricardo Menezes",
    position: "Diretor de Marketing Esportivo LATAM",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fm=webp&q=75&fit=crop&w=150",
    rating: 5,
    projectTitle: "Nike Unstoppable Commercial"
  },
  {
    text: "Nando trouxe nossa visão musical à vida digital. O visual neon retro é uma obra de arte viva que impulsionou o lançamento do nosso álbum.",
    author: "Leo Stratus",
    position: "Vocalista da banda Neon Wave",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fm=webp&q=75&fit=crop&w=150",
    rating: 5,
    projectTitle: "Neon Drive - Music Video"
  },
  {
    text: "A montagem poética e o cuidado extremo com a fidelidade das tomadas de luz natural deram um ar internacional imbatível ao documentário.",
    author: "Marcos Villela",
    position: "Cineasta e Diretor Ambiental",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fm=webp&q=75&fit=crop&w=150",
    rating: 5,
    projectTitle: "Echoes of Modern Nature"
  }
];

export const Testimonials: React.FC = () => {
  const projects = useProjects();
  const [testimonials, setTestimonials] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  useEffect(() => {
    // Dynamically retrieve quotes from stored projects to keep in sync with local edits
    const activeQuotes = projects
      .filter(p => p.client_quote && p.client_quote.text)
      .map((p, idx) => {
        // Associate persistent high-quality avatars using modulo over standard index
        const avatars = [
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fm=webp&q=75&fit=crop&w=150",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fm=webp&q=75&fit=crop&w=150",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fm=webp&q=75&fit=crop&w=150",
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fm=webp&q=75&fit=crop&w=150",
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fm=webp&q=75&fit=crop&w=150"
        ];
        return {
          text: p.client_quote!.text,
          author: p.client_quote!.author,
          position: p.client_quote!.position || 'Diretor de Produção',
          avatar: avatars[idx % avatars.length],
          rating: 5,
          projectTitle: p.title
        };
      });

    if (activeQuotes.length > 0) {
      setTestimonials(activeQuotes);
    } else {
      setTestimonials(DEFAULT_TESTIMONIALS);
    }
  }, [projects]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // Auto roll every 8 seconds

    return () => clearInterval(timer);
  }, [testimonials]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/40 dark:bg-slate-950/20 border-t border-slate-100 dark:border-white/5 transition-colors duration-500">
      {/* Visual background details */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-brand-orange/5 dark:bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-72 h-72 bg-brand-purple/5 dark:bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange dark:text-brand-peach text-xs font-mono font-bold tracking-widest uppercase mb-1">
            <Star className="w-3.5 h-3.5 fill-current" /> Depoimentos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Quem Confia na <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-peach">Nossa Visão</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Veja o depoimento real de grandes marcas e produtores sobre o ritmo, impacto e a finalização dos cortes entregues.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[380px] md:min-h-[320px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-white/70 dark:bg-slate-900/35 border border-slate-100 dark:border-white/10 backdrop-blur-xl rounded-[32px] p-8 md:p-12 shadow-xl dark:shadow-black/40 flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start"
            >
              {/* Profile card left / top */}
              <div className="flex flex-col items-center text-center md:text-left shrink-0">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-brand-orange shadow-lg shadow-brand-orange/15 mb-4 mb:mb-5">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                {/* 5 Stars */}
                <div className="flex items-center gap-1 justify-center md:justify-start">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Text & Meta details */}
              <div className="flex-1 flex flex-col justify-between h-full space-y-6">
                <div className="relative mt-2">
                  <Quote className="absolute -top-6 -left-4 w-12 h-12 text-slate-200 dark:text-white/5 -z-10" />
                  <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic pr-4">
                    "{current.text}"
                  </p>
                </div>

                <div className="border-t border-slate-100 dark:border-white/5 pt-5 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base tracking-tight">{current.author}</h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium mt-0.5">{current.position}</span>
                  </div>

                  {current.projectTitle && (
                    <span className="text-[10px] font-mono font-bold text-brand-orange dark:text-brand-peach uppercase border border-brand-orange/30 px-3 py-1.5 rounded-full bg-brand-orange/5">
                      {current.projectTitle}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls bar */}
        <div className="flex items-center justify-between mt-10 px-4">
          {/* Pagination Indicators Container */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-8 bg-brand-orange shadow-md shadow-brand-orange/20' 
                    : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Action buttons prev/next */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-brand-orange hover:text-brand-orange text-slate-600 dark:text-slate-400 shadow-md transition-all active:scale-90 cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-brand-orange hover:text-brand-orange text-slate-600 dark:text-slate-400 shadow-md transition-all active:scale-90 cursor-pointer"
              aria-label="Seguinte"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
