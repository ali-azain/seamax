
import React from 'react';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50, damping: 20 } },
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center px-6 overflow-hidden bg-[#FDFCF8]">
      {/* Background Visual with better contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=2000" 
          alt="Maritime Industry"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-[7vw] font-light tracking-tighter text-white leading-[0.9] mb-8"
        >
          Mastering <br /> The Tides
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed font-light"
        >
          Delivering global offshore solutions with reliability, <br /> safety, and operational excellence.
        </motion.p>
      </motion.div>

      {/* Trust Signal Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
         <div className="flex items-center gap-4 py-3 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">Trusted Partner of Byco</span>
          </div>
      </motion.div>
    </section>
  );
};
