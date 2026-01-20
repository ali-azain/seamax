
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#FDFCF8] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Images */}
        <div className="lg:col-span-4 sticky top-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <img 
              src="/images/seamax_ship.png" 
              alt="Seamax Service Vessel"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700 border border-[#E2E0D9]"
            />
          </motion.div>
          
          <div className="p-8 bg-[#0A2540] rounded-2xl border border-[#0A2540] text-white">
             <span className="block text-5xl font-light mb-2">2008</span>
             <span className="text-xs font-mono tracking-widest uppercase opacity-80">Established</span>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-8 lg:pl-12">
          <div className="space-y-12">
            
            {/* Header */}
            <div className="space-y-6">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#64748B] block">01 - ABOUT US</span>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#0F172A] leading-tight">
                Providing Marine and Offshore services to companies within Ports, Oil and Gas sector and engineering groups.
              </h2>
            </div>

            {/* Sections */}
            <div className="grid grid-cols-1 gap-12">
              
              {/* Company Profile */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-[#0A2540] font-serif border-b border-[#E2E0D9] pb-2">COMPANY PROFILE</h3>
                <p className="text-lg text-[#64748B] leading-relaxed">
                  Sea Marine Services (SMS) is well known amongst all the marine and offshore industrial establishments. SMS main activities consist of chartering Tugboats, Supply Boats, Pilotage, Dredging & Reclamation works, Flat Top Barges, leasing of offshore construction equipment, Shipping, Diving & underwater maintenance activities.
                </p>
                <p className="text-lg text-[#64748B] leading-relaxed">
                  SMS has skilled and well-experienced personnel in each category to attend to the requirements of our customers and to carry out assigned jobs on time. SMS equipment is well maintained and all the vessels are manned in accordance with the National Maritime Conventions requirements and conform to the International Maritime Standards and the Classification Societies requirements at all times.
                </p>
              </div>

              {/* Our History */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-[#0A2540] font-serif border-b border-[#E2E0D9] pb-2">OUR HISTORY</h3>
                <p className="text-[#64748B] leading-relaxed">
                  The Seamax Marine Services journey started in the early part of 2008, when there was a need for a reliable and progressive company in the marine sector. A solid foundation was structured and the Seamax Marine Group was founded on the shores of Karachi, Pakistan constantly looking to improve their market share. Sea Marine Group pride themselves on the fact their staff, crew and management are the backbone of the company, taking pride in their well-maintained vessels.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Seamax Marine Group was established to focus on the marine development in a rapidly growing region. In 2015 Seamax Marine Services were awarded Single Buoy Maintenance work along with support vessels by Byco Terminals Pakistan.
                </p>
              </div>

              {/* Mission & Vision Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#F3F2ED] p-8 rounded-2xl border border-[#E2E0D9]">
                  <h3 className="text-lg font-medium text-[#0A2540] mb-4 font-serif">OUR VISION</h3>
                  <p className="text-[#64748B] leading-relaxed text-sm">
                    To provide a quality service to the Port Operators, Oil and Gas industry for fleet maintenance and repair works. To maintain a safe working environment and develop our workforce to become the best in Pakistan.
                  </p>
                </div>
                
                <div className="bg-[#F3F2ED] p-8 rounded-2xl border border-[#E2E0D9]">
                  <h3 className="text-lg font-medium text-[#0A2540] mb-4 font-serif">OUR MISSION</h3>
                  <p className="text-[#64748B] leading-relaxed text-sm">
                    Our mission is to provide the highest quality service and unmatched value to our clients through the efforts of a highly dedicated, educated and productive workforce who share a commitment to the long-term growth and success of the company.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
