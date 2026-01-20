
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingNav } from './components/layout/FloatingNav';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ServicesTabs } from './components/sections/ServicesTabs';
import { BentoGrid } from './components/sections/BentoGrid';
import { Insights } from './components/sections/Insights';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFCF8] selection:bg-[#0A2540] selection:text-[#FDFCF8]">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#FDFCF8] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-16 h-16 border-t-2 border-[#0A2540] rounded-full animate-spin"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingNav />

      <main className="relative z-10">
        <Hero />
        <About />
        <ServicesTabs />
        <BentoGrid />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
