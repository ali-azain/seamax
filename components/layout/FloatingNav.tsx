
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Logo } from '../ui/Logo';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { label: 'HOME', href: '#' },
  { label: 'FLEET', href: '#fleet' },
  { label: 'SERVICES', href: '#services' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'ABOUT', href: '#about' },
];

export const FloatingNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 flex items-center justify-between",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <Logo className="w-8 h-8 md:w-10 md:h-10" />
        <span className="text-xl font-bold tracking-tighter text-[#0A2540] hidden md:block">SEAMAX</span>
      </div>

      {/* Nav Links - Center */}
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[10px] font-mono tracking-[0.2em] font-medium text-[#0A2540] hover:text-[#0F172A]/70 transition-colors uppercase"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Action Button - Right */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0A2540] text-white rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-[#0F172A] transition-all shadow-lg shadow-[#0A2540]/20">
          Contact
        </button>
      </div>
    </motion.header>
  );
};
