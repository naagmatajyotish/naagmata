import React from 'react';

interface SacredOmIconProps {
  className?: string;
  glow?: boolean;
}

export const SacredOmIcon: React.FC<SacredOmIconProps> = ({ className = 'w-7 h-7 text-amber-500', glow = true }) => {
  return (
    <span className={`inline-flex items-center justify-center select-none font-bold text-2xl font-serif text-amber-400 ${glow ? 'glow-text' : ''} ${className}`}>
      ॐ
    </span>
  );
};
