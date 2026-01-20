
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, MapPin, Gauge } from 'lucide-react';

// Mock specific data for each service to populate the "System Specs" card
const serviceData = {
  dredging: {
    title: "Cutter Suction",
    subtitle: "Precision",
    description: "Advanced maritime excavation for port expansion and coastal restoration. We deliver environmental compliance with surgical accuracy.",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80",
    specs: [
      { label: "Vessel Type", value: "CSD-500" },
      { label: "Capacity", value: "2500m³/h" },
      { label: "Max Depth", value: "30.00 Meters" },
      { label: "Tier Level", value: "IMO Tier III" }
    ],
    status: "Active Operations in North Sea"
  },
  salvage: {
    title: "Heavy Lift",
    subtitle: "Recovery",
    description: "Rapid response wreck removal and emergency towage. Equipped with specialized subsea cutting and lifting gear for depths up to 300m.",
    image: "https://images.unsplash.com/photo-1605218427306-022ba95b9ab2?auto=format&fit=crop&q=80",
    specs: [
      { label: "Lift Capacity", value: "1200 Tons" },
      { label: "Crane Reach", value: "45 Meters" },
      { label: "Response Time", value: "< 4 Hours" },
      { label: "Class", value: "DNV-GL" }
    ],
    status: "Standby - Arabian Sea"
  },
  pilotage: {
    title: "Harbor",
    subtitle: "Navigation",
    description: "Precision vessel maneuvering in high-traffic commercial ports. Our pilots ensure zero-incident docking operations 24/7.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80",
    specs: [
      { label: "Fleet Size", value: "12 BOATS" },
      { label: "Max Speed", value: "35 Knots" },
      { label: "License", value: "Master Mariner" },
      { label: "Range", value: "200 NM" }
    ],
    status: "Operational - Port Qasim"
  },
  contracting: {
    title: "Marine",
    subtitle: "Logistics",
    description: "End-to-end offshore supply chain management. From personnel transfer to equipment hauling, we bridge the gap between shore and sea.",
    image: "https://images.unsplash.com/photo-1559136555-930d72f1d3d5?auto=format&fit=crop&q=80",
    specs: [
      { label: "Deck Space", value: "450 m²" },
      { label: "Passengers", value: "60 PAX" },
      { label: "Deadweight", value: "1500 DWT" },
      { label: "Endurance", value: "21 Days" }
    ],
    status: "Contracted - 3 Years"
  }
};

const tabs = [
  { id: 'dredging', label: 'Dredging' },
  { id: 'salvage', label: 'Salvage' },
  { id: 'pilotage', label: 'Pilotage' },
  { id: 'contracting', label: 'Contracting' }
];

export const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof serviceData>('dredging');
  const data = serviceData[activeTab];

  return (
    <section className="py-24 bg-[#FDFCF8] overflow-hidden" id="services">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-[#64748B] mb-4">
            Advanced Offshore Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-[#0A2540] mb-12">
            Our Capabilities
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-[#F3F2ED] rounded-full border border-[#E2E0D9]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as keyof typeof serviceData)}
                className={`
                  relative px-6 py-2.5 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all
                  ${activeTab === tab.id ? 'bg-white text-[#0A2540] shadow-sm' : 'text-[#64748B] hover:text-[#0A2540]'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Content (Left) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0A2540]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748B]">Precision Maritime Engineering</span>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-light text-[#0A2540] tracking-tight">
                    {data.title} <br />
                    <span className="italic font-normal">{data.subtitle}</span>
                  </h3>
                </div>

                <p className="text-lg text-[#64748B] leading-relaxed max-w-2xl">
                  {data.description}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <button className="px-6 py-3 bg-[#0A2540] text-white rounded-full text-[10px] font-mono tracking-widest uppercase hover:bg-[#0F172A] transition-colors flex items-center gap-2">
                    View Technical Specs
                    <ArrowRight className="w-3 h-3" />
                  </button>
                  {/* Avatars */}
                  <div className="flex items-center -space-x-2">
                    <div className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] bg-gray-200 overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=J+D&background=random" alt="Engineer" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] bg-gray-200 overflow-hidden">
                      <img src="https://ui-avatars.com/api/?name=A+S&background=random" alt="Manager" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-[#FDFCF8] bg-[#F3F2ED] flex items-center justify-center text-[10px] font-bold text-[#64748B]">
                      +12
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative h-[400px] rounded-[2rem] overflow-hidden group"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                />
                {/* Live Telemetry Badge */}
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-white/20 flex items-center gap-3 shadow-lg">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#0A2540]">Live Depth Telemetry</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar / Specs Card (Right) */}
          <div className="lg:col-span-4 lg:pt-12">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-[#0A2540] rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Background deco */}
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BarChart3 className="w-24 h-24" />
              </div>

              <div className="relative z-10 space-y-8">
                <div>
                  <BarChart3 className="w-6 h-6 mb-6 opacity-60" />
                  <h4 className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40 mb-2">System Specifications</h4>
                </div>

                <div className="space-y-6">
                  {data.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col gap-1 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/40">{spec.label}</span>
                      <span className="text-xl font-light tracking-tight">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <div className="px-4 py-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">{data.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
