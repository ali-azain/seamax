
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Ship, Box, Activity, Map, ArrowRight } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section id="infrastructure" className="py-24 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#64748B] mb-2 block">Infrastructure</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0A2540]">Our Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

          {/* 1. Map Card (Large, Dark) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-[#0A2540] relative overflow-hidden group p-8 flex flex-col justify-between"
          >
            {/* Map Background */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                alt="Global Network Map"
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent" />
            </div>

            {/* Top Badge */}
            <div className="relative z-10 w-fit">
              <span className="text-[10px] font-mono tracking-widest uppercase text-white/60 mb-2 block">Strategic Corridor</span>
              <div className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm">
                Karachi — Dubai
              </div>
            </div>

            {/* Visual Nodes (Decorative) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              {/* Add SVG curved lines here if needed, utilizing CSS bg pattern for now in style tag above if complex */}
              <svg className="w-full h-full absolute inset-0 opacity-20" viewBox="0 0 400 300">
                <path d="M 50 150 Q 200 50 350 150" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                <circle cx="50" cy="150" r="3" fill="white" />
                <circle cx="350" cy="150" r="3" fill="white" />
              </svg>
            </div>

            {/* Bottom Stats */}
            <div className="relative z-10 flex gap-12 mt-auto pt-12">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block mb-1">Distance</span>
                <span className="text-2xl text-white font-light">612 <span className="text-sm text-white/60 ml-1">Nautical Miles</span></span>
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block mb-1">Transit Time</span>
                <span className="text-2xl text-white font-light">~42 <span className="text-sm text-white/60 ml-1">Hours</span></span>
              </div>
            </div>
          </motion.div>

          {/* 2. Shipping Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-[#F3F2ED] p-8 flex flex-col justify-between group hover:bg-[#EAE8DD] transition-colors border border-transparent hover:border-[#E2E0D9]"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E0D9] flex items-center justify-center text-[#0A2540] mb-4">
              <Ship className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl text-[#0A2540] mb-2 font-medium">Shipping</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                End-to-end maritime logistics, vessel agency, and port services across the MENA region.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#0A2540] group-hover:gap-4 transition-all">
                Explore Details <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>

          {/* 3. Chartering Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-[#F3F2ED] p-8 flex flex-col justify-between group hover:bg-[#EAE8DD] transition-colors border border-transparent hover:border-[#E2E0D9]"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E0D9] flex items-center justify-center text-[#0A2540] mb-4">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl text-[#0A2540] mb-2 font-medium">Chartering</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                Specialized offshore asset procurement for oil, gas, and renewable energy sectors.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#0A2540] group-hover:gap-4 transition-all">
                Fleet Catalog <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>

          {/* 4. Technical Diving (Bottom Left or Spanning) - Placed in new row or bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-1 rounded-[2rem] bg-[#F3F2ED] p-8 flex flex-col justify-between group hover:bg-[#EAE8DD] transition-colors border border-transparent hover:border-[#E2E0D9]"
          >
            <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E0D9] flex items-center justify-center text-[#0A2540] mb-4">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl text-[#0A2540] mb-2 font-medium">Technical Diving</h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                Precision subsea inspection, hull cleaning, and underwater maintenance at scale.
              </p>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#0A2540] group-hover:gap-4 transition-all">
                Safety Standards <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
