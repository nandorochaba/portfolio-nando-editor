
import React, { useEffect, useRef, memo } from 'react';

const BubblesBackground: React.FC = () => {
  const interRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const coords = useRef({ curX: 0, curY: 0, tgX: 0, tgY: 0 });

  useEffect(() => {
    const move = () => {
      coords.current.curX += (coords.current.tgX - coords.current.curX) / 12;
      coords.current.curY += (coords.current.tgY - coords.current.curY) / 12;
      
      if (interRef.current) {
        interRef.current.style.transform = `translate3d(${Math.round(coords.current.curX)}px, ${Math.round(coords.current.curY)}px, 0)`;
      }
      rafRef.current = requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      coords.current.tgX = event.clientX;
      coords.current.tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(move);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="gradient-bg pointer-events-none">
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div ref={interRef} className="interactive"></div>
      </div>
    </div>
  );
};

export default memo(BubblesBackground);
