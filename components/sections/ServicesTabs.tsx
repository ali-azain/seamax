
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceDetail } from '../../types';
import { Ship, Anchor, Wind, Tool } from 'lucide-react';

const services: ServiceDetail[] = [
  {
    id: 'dredging',
    tag: 'DREDGING',
    title: 'Precision Extraction',
    headline: 'Cutter Suction Precision.',
    body: 'We own and operate versatile Cutter Suction Dredgers and allied equipment to meet demanding client requirements. Our operations ensure optimal depth maintenance for major port facilities.',
    image: 'https://picsum.photos/id/10/800/600'
  },
  {
    id: 'salvage',
    tag: 'SALVAGE',
    title: 'Emergency Recovery',
    headline: 'Wreck Removal & Recovery.',
    body: 'Successful execution of complex operations, including the Al Akbar II wreck removal and 10-meter seabed extractions. Our team is equipped for high-stakes maritime recovery 24/7.',
    image: 'https://picsum.photos/id/11/800/600'
  },
  {
    id: 'pilotage',
    tag: 'PILOTAGE',
    title: 'Safe Navigation',
    headline: 'Japanese-Built Fleet.',
    body: 'Three versatile Pilot Boats with 20-knot cruising speeds, optimized for Karachi port operations. We ensure safe passage for vessels through demanding industrial channels.',
    image: 'https://picsum.photos/id/12/800/600'
  },
  {
    id: 'contracting',
    tag: 'CONTRACTING',
    title: 'Marine Logistics',
    headline: 'Offshore Infrastructure.',
    body: 'End-to-end maritime contracting services, from wharf construction support to sub-sea infrastructure maintenance for global oil and gas partners.',
    image: 'https://picsum.photos/id/13/800/600'
  }
];

export const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find(s => s.id === activeTab)!;

  return (
    <section id="services" className="py-32 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#64748B] mb-4 block">Our Operations</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F172A]">ENGINEERED FOR EXCELLENCE</h2>
          </div>
          <div className="flex p-1 bg-[#F3F2ED] border border-[#E2E0D9] rounded-full overflow-hidden">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className="relative px-6 py-2.5 text-[10px] font-mono tracking-widest uppercase transition-colors z-10"
              >
                {activeTab === service.id && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={activeTab === service.id ? 'text-[#0F172A]' : 'text-[#64748B]'}>
                  {service.tag}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <h3 className="text-5xl font-light tracking-tighter text-[#0F172A] leading-tight">
                {activeService.headline}
              </h3>
              <p className="text-xl text-[#64748B] leading-relaxed">
                {activeService.body}
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-4 bg-[#0A2540] text-white rounded-2xl text-xs font-mono tracking-widest uppercase hover:bg-[#0F172A] transition-all">
                  Request Specification
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="aspect-square lg:aspect-video rounded-3xl overflow-hidden bg-[#F3F2ED] border border-[#E2E0D9] shadow-inner relative group"
            >
              <img 
                src={activeService.image} 
                alt={activeService.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
