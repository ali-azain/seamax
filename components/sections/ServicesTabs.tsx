
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, MapPin, Gauge } from 'lucide-react';

// Mock specific data for each service to populate the "System Specs" card
const serviceData = {
  shipping: {
    title: "Shipping",
    subtitle: "Agency Services",
    description: "End-to-end vessel agency and port services. We handle all formalities, ensuring swift turnaround for vessels calling at Karachi Port and Port Qasim.",
    image: "/seamax/images/hero-tanker.png",
    specs: [
      { label: "Vessel Type", value: "All Classes" },
      { label: "Coverage", value: "Port Qasim / KPT" },
      { label: "Service", value: "24/7 Agency" },
      { label: "Clearance", value: "Customs / Immigration" }
    ],
    status: "Active - Karachi Port"
  },
  contracting: {
    title: "Marine Contracting",
    subtitle: "Beaching Services",
    description: "Specialized contracting for beaching, flat top barges, and offshore construction equipment leasing. We support major civil works and infrastructure projects.",
    image: "/seamax/images/crane-barge.png",
    specs: [
      { label: "Equipment", value: "Flat Top Barges" },
      { label: "Leasing", value: "Short/Long Term" },
      { label: "Support", value: "Civil Works" },
      { label: "Crew", value: "Certified Operators" }
    ],
    status: "Project Based"
  },
  salvage: {
    title: "Salvage",
    subtitle: "Wreck Removal",
    description: "Rapid response emergency recovery and wreck removal operations. Successfully executed complex operations including the Al Akbar II wreck removal.",
    image: "/seamax/images/tug-harmony.png",
    specs: [
      { label: "Lift Capacity", value: "1200 Tons" },
      { label: "Experience", value: "High Stakes" },
      { label: "Response", value: "Emergency Team" },
      { label: "Safety", value: "ISO Certified" }
    ],
    status: "Standby - Arabian Sea"
  },
  diving: {
    title: "Diving",
    subtitle: "Underwater Maintenance",
    description: "Professional diving services for hull cleaning, underwater inspection, and maintenance. Our certified divers ensure fleet integrity without dry docking.",
    image: "/seamax/images/tug-explorer.png",
    specs: [
      { label: "Depth", value: "Up to 100m" },
      { label: "Team", value: "Certified Divers" },
      { label: "Services", value: "Hull Cleaning" },
      { label: "Equipment", value: "Latest Gear" }
    ],
    status: "On Call"
  },
  dredging: {
    title: "Dredging",
    subtitle: "Reclamation Works",
    description: "Cutter suction dredging and reclamation works for channel maintenance and port deepening. We own and operate versatile dredgers for demanding requirements.",
    image: "/seamax/images/crane-barge.png",
    specs: [
      { label: "Type", value: "Cutter Suction" },
      { label: "Capacity", value: "High Volume" },
      { label: "Project", value: "Capital/Maintenance" },
      { label: "Depth", value: "Channel Deepening" }
    ],
    status: "Active Operations"
  },
  pilotage: {
    title: "Pilot Boat",
    subtitle: "Services",
    description: "Fleet of versatile pilot boats including 20-knot cruisers. We provide safe personnel transfer and pilotage services for Byco Terminals and other clients.",
    image: "/seamax/images/pilot-boat.png",
    specs: [
      { label: "Fleet", value: "Pilot Boats" },
      { label: "Speed", value: "20 Knots" },
      { label: "Client", value: "Byco Terminals" },
      { label: "Ops Area", value: "SPM / Anchorage" }
    ],
    status: "Operational"
  }
};

const tabs = [
  { id: 'shipping', label: 'Shipping' },
  { id: 'contracting', label: 'Contracting' },
  { id: 'salvage', label: 'Salvage' },
  { id: 'diving', label: 'Diving' },
  { id: 'dredging', label: 'Dredging' },
  { id: 'pilotage', label: 'Pilot Boat' }
];

export const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof serviceData>('shipping');
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
