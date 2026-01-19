
import React from 'react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex flex-col justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516513813933-46092ce4e2f7?auto=format&fit=crop&q=80&w=1600" 
          alt="Container Ship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2540]/60 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[0.9] mb-8">
            Start Your Operation <br /> With Confidence
          </h2>
        </div>
        <div className="space-y-8">
          <p className="text-white/80 text-lg leading-relaxed max-w-md">
            Get a tailored operational plan designed by our maritime experts — precise, reliable, and fully compliant with Karachi Port standards.
          </p>
          <button className="px-10 py-5 bg-white text-[#0A2540] rounded-2xl text-xs font-mono tracking-widest uppercase hover:bg-white/90 transition-all">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};
