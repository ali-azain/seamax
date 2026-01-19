
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#FDFCF8] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80&w=600" 
              alt="Ship at Sunset"
              className="w-full aspect-[4/5] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-[#E2E0D9]"
            />
          </motion.div>
        </div>

        <div className="lg:col-span-9 lg:pl-12">
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#64748B] block">01 - ABOUT</span>
            <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-[#0F172A] leading-[1.1] max-w-3xl">
              We are a global maritime services company committed to delivering reliable, efficient, and compliant solutions.
            </h2>
            <div className="pt-8 flex flex-col md:flex-row gap-12">
              <p className="text-lg text-[#64748B] leading-relaxed max-w-lg">
                Seamax Marine Services (Est. 2015) specializes in the core pillars of maritime infrastructure: 
                Dredging, Pilotage, and Salvage. Our fleet of Japanese-built vessels ensures every operation 
                is executed with Swiss-like precision.
              </p>
              <div className="flex flex-col gap-4">
                 <button className="text-xs font-mono tracking-widest uppercase text-[#0A2540] border-b border-[#0A2540] w-fit pb-1 hover:gap-2 transition-all">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-8">
            <img 
               src="https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=800" 
               alt="Dock Operations" 
               className="w-full h-64 object-cover rounded-2xl grayscale border border-[#E2E0D9]"
            />
            <div className="p-8 bg-[#F3F2ED] rounded-2xl border border-[#E2E0D9] flex flex-col justify-end">
               <span className="text-4xl font-light text-[#0F172A]">24/7</span>
               <span className="text-xs font-mono tracking-widest uppercase text-[#64748B]">Operational Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
