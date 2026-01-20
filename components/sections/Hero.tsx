
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Waves, Ship, ChevronRight, AlertTriangle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#FDFCF8] flex flex-col pt-32 pb-12">

      {/* 1. Typographic Header */}
      <div className="container mx-auto px-6 text-center z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-[10px] md:text-xs font-mono tracking-[0.4em] uppercase text-[#64748B]">
            Est. 2008 &nbsp;//&nbsp; Global Offshore Operations
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[12vw] md:text-[8vw] leading-[0.8] font-light tracking-tighter text-[#0A2540] uppercase"
        >
          Mastering <br /> The Tides
        </motion.h1>
      </div>

      {/* 2. Hero Image Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mx-4 md:mx-12 h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden group shadow-2xl shadow-indigo-900/10"
      >
        <img
          src="/seamax/images/hero-tanker.png"
          alt="Seamax Fleet Vessel"
          className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <p className="text-lg md:text-2xl font-light leading-relaxed text-white/90">
              Strategic offshore solutions across pilotage, dredging, and marine salvage. Precision-engineered for global maritime excellence.
            </p>
          </div>
          <button className="bg-[#FDFCF8] text-[#0A2540] px-8 py-4 rounded-full text-xs font-mono tracking-widest uppercase hover:bg-white transition-colors flex items-center gap-2">
            Explore Fleet
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* 3. Feature Grid Overlay / Bottom Section */}
      <div className="container mx-auto px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="w-12 h-12 mb-6 text-[#0A2540] flex items-center justify-center border border-[#E2E0D9] rounded-xl bg-white shadow-sm group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
              <Anchor className="w-6 h-6 stroke-1" />
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#0A2540] mb-3">Pilotage</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Expert vessel navigation and high-stakes docking maneuvers in complex harbor environments.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group cursor-pointer"
          >
            <div className="w-12 h-12 mb-6 text-[#0A2540] flex items-center justify-center border border-[#E2E0D9] rounded-xl bg-white shadow-sm group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
              <Waves className="w-6 h-6 stroke-1" />
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#0A2540] mb-3">Dredging</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Critical channel maintenance and strategic harbor deepening utilizing advanced suction technology.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group cursor-pointer"
          >
            <div className="w-12 h-12 mb-6 text-[#0A2540] flex items-center justify-center border border-[#E2E0D9] rounded-xl bg-white shadow-sm group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
              <AlertTriangle className="w-6 h-6 stroke-1" />
            </div>
            <h3 className="text-sm font-bold tracking-widest uppercase text-[#0A2540] mb-3">Salvage</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Rapid response emergency recovery and wreck removal operations with zero environmental compromise.
            </p>
          </motion.div>

          {/* Floating Action Button (Decorative) */}
          <div className="hidden md:flex absolute -right-4 -bottom-4 w-16 h-16 bg-[#0A2540] rounded-full items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform cursor-pointer">
            <Ship className="w-6 h-6" />
          </div>
        </div>

        {/* Footer Bar */}
        <div className="mt-24 pt-8 border-t border-[#E2E0D9] flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#94A3B8]">
          <span>© 2026 Seamax Marine Services Ltd.</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Safety Protocols</span>
            <span>ISO 9001 Certified</span>
            <span>Fleet Tracking</span>
          </div>
        </div>
      </div>
    </section>
  );
};
