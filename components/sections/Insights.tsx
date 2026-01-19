
import React from 'react';
import { motion } from 'framer-motion';

const insights = [
  {
    date: '12.10.2025',
    tag: 'INSIGHT',
    title: 'The Role of Digital Tracking in Modern Supply Chains',
    description: 'Real-time visibility isn’t just a convenience anymore; it is becoming a critical operational advantage.',
    image: 'https://images.unsplash.com/photo-1512351735230-a07ebdf5b5e1?auto=format&fit=crop&q=80&w=400'
  },
  {
    date: '16.09.2025',
    tag: 'INSIGHT',
    title: 'Project Cargo: Best Practices for Heavy-Lift Operations',
    description: 'Moving oversized cargo requires precision engineering, risk planning, and coordinated teams.',
    image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?auto=format&fit=crop&q=80&w=400'
  }
];

export const Insights: React.FC = () => {
  return (
    <section id="insights" className="py-32 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[#E2E0D9] pb-8">
          <h2 className="text-4xl font-light tracking-tighter text-[#0F172A]">Latest Insights</h2>
          <button className="text-[10px] font-mono tracking-widest uppercase text-[#64748B] hover:text-[#0A2540]">View All Insights</button>
        </div>

        <div className="space-y-12">
          {insights.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#E2E0D9] last:border-0"
            >
              <div className="md:col-span-2 overflow-hidden rounded-xl aspect-square">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="md:col-span-6 space-y-2">
                <div className="flex gap-4 text-[10px] font-mono tracking-widest text-[#64748B] uppercase">
                  <span>{item.date}</span>
                  <span className="text-[#F97316]">/</span>
                  <span>{item.tag}</span>
                </div>
                <h3 className="text-2xl font-normal text-[#0F172A] group-hover:text-[#0A2540] transition-colors">
                  {item.title}
                </h3>
                <button className="text-[10px] font-mono tracking-widest uppercase text-[#0A2540] border-b border-[#0A2540] w-fit pt-4 hover:pr-4 transition-all">
                  Read More
                </button>
              </div>
              <div className="md:col-span-4">
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
