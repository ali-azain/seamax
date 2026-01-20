import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <img
      src="/seamax/logo.png"
      alt="Seamax Marine Services"
      className={`object-contain ${className}`}
    />
  );
};
