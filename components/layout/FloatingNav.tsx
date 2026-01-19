
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Logo } from '../ui/Logo';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
];

export const FloatingNav: React.FC = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <motion.nav
      style={{ scale }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-4 py-2 bg-[#FDFCF8]/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-full"
    >
      <div className="flex items-center gap-2 pl-2">
        <Logo className="w-10 h-12" />
      </div>

      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActiveTab(item.label)}
            className={cn(
              "px-4 py-2 text-xs font-mono tracking-widest uppercase transition-colors rounded-full",
              activeTab === item.label ? "text-[#0F172A] bg-black/5" : "text-[#64748B] hover:text-[#0A2540]"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0A2540] text-white rounded-full text-xs font-mono tracking-widest uppercase hover:bg-[#0F172A] transition-all">
          <Phone className="w-3 h-3" />
          Contact
        </button>
      </div>
    </motion.nav>
  );
};
