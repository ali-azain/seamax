
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
}

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", variant = 'color' }) => {
  // A high-fidelity SVG recreation of the Seamax logo
  return (
    <svg 
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Lifebuoy Ring */}
      <circle cx="50" cy="50" r="48" fill={variant === 'light' ? 'white' : '#A82E29'} />
      
      {/* White Quadrants of Lifebuoy */}
      <path d="M50 2 C65 2 80 10 88 22 L72 35 C68 30 60 25 50 25 L50 2Z" fill="white" />
      <path d="M50 98 C35 98 20 90 12 78 L28 65 C32 70 40 75 50 75 L50 98Z" fill="white" />
      <path d="M2 50 C2 35 10 20 22 12 L35 28 C30 32 25 40 25 50 L2 50Z" fill="white" />
      <path d="M98 50 C98 65 90 80 78 88 L65 72 C70 68 75 60 75 50 L98 50Z" fill="white" />
      
      {/* Blue Center */}
      <circle cx="50" cy="50" r="32" fill={variant === 'light' ? 'white' : '#1A428A'} />
      
      {/* Sea Max Text */}
      <text 
        x="50" 
        y="46" 
        textAnchor="middle" 
        fill={variant === 'light' ? '#0A2540' : 'white'} 
        style={{ fontSize: '18px', fontWeight: '900', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
      >
        SEA
      </text>
      <text 
        x="50" 
        y="62" 
        textAnchor="middle" 
        fill={variant === 'light' ? '#0A2540' : 'white'} 
        style={{ fontSize: '18px', fontWeight: '900', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}
      >
        MAX
      </text>
      
      {/* Waves in center */}
      <path d="M35 50 Q50 47 65 50" stroke="white" strokeWidth="1" opacity="0.6" />
      <path d="M35 54 Q50 51 65 54" stroke="white" strokeWidth="1" opacity="0.6" />

      {/* "Marine Services" text below logo */}
      <text 
        x="50" 
        y="115" 
        textAnchor="middle" 
        fill={variant === 'light' ? 'white' : '#0F172A'} 
        style={{ fontSize: '9px', fontStyle: 'italic', fontFamily: 'serif' }}
      >
        Marine Services
      </text>
    </svg>
  );
};
