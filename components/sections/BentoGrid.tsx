
import React from 'react';
import { motion } from 'framer-motion';
import { Container, Warehouse, Search, ShieldCheck, Map, Globe } from 'lucide-react';
import { BentoItem } from '../../types';

const bentoItems: BentoItem[] = [
  {
    title: "Shipping & Logistics",
    description: "End-to-end cargo handling, secure packaging, and port storage solutions.",
    icon: <Container className="w-6 h-6 text-[#0A2540]" />,
  },
  {
    title: "Chartering",
    description: "Secure warehousing & specialized vessel supply for industrial needs.",
    icon: <Warehouse className="w-6 h-6 text-[#0A2540]" />,
  },
  {
    title: "Diving Services",
    description: "Certified underwater inspection, hull cleaning, and sub-sea maintenance.",
    icon: <Search className="w-6 h-6 text-[#0A2540]" />,
  },
  {
    title: "Vessel Supply",
    description: "Deploying high-capacity support vessels for offshore transport logistics available 24/7.",
    icon: <ShieldCheck className="w-6 h-6 text-[#0A2540]" />,
  },
  {
    title: "Global Maritime Network",
    description: "Operational hubs connecting Karachi to Dubai and beyond, ensuring seamless transit across major trade routes.",
    icon: <Globe className="w-6 h-6 text-[#0A2540]" />,
    span: "md:col-span-2",
    image: "https://picsum.photos/id/102/1200/400?grayscale"
  }
];

export const BentoGrid: React.FC = () => {
  return (
    <section id="fleet" className="py-32 px-6 bg-[#F3F2ED]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#64748B] mb-4 block">Core Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#0F172A]">BEYOND THE HORIZON</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`
                relative p-8 rounded-3xl bg-[#FDFCF8] border border-[#E2E0D9] flex flex-col justify-between overflow-hidden group
                ${item.span || ''}
              `}
            >
              {item.image && (
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                  />
                </div>
              )}
              
              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit bg-[#F3F2ED] rounded-2xl border border-[#E2E0D9]">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-normal tracking-tight text-[#0F172A] mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed max-w-[280px]">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-8 border-t border-[#E2E0D9]/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono tracking-widest text-[#0A2540] uppercase">Explore Capability →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
