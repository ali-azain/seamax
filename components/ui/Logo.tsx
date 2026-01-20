import React from 'react';
import { Anchor } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`flex items-center justify-center rounded-full bg-[#0A2540] text-white ${className}`}>
      <Anchor className="w-1/2 h-1/2" strokeWidth={2} />
    </div>
  );
};
