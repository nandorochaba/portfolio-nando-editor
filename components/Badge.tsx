
import React, { memo } from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'white' | 'purple' | 'green' | 'gray';
  pulse?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', pulse = false }) => {
  const styles = {
    white: 'bg-white/10 text-white border-white/20',
    purple: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
    green: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    gray: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[variant]} transition-colors duration-300`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {children}
    </span>
  );
};

export default memo(Badge);
