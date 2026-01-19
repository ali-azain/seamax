
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0F172A] pt-32 pb-16 px-6 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="w-12 h-14" />
              <span className="text-xl font-light tracking-tighter text-white">SEAMAX</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Global maritime services with reliable service, expert teams, transparent communication, and operational safety.
            </p>
          </div>

          <div className="md:pl-12">
            <h5 className="text-[10px] font-mono tracking-widest uppercase text-white/40 mb-8">Quick Menu</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="md:pl-12 border-l border-white/5">
            <h5 className="text-[10px] font-mono tracking-widest uppercase text-white/40 mb-8">Resources</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reports</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>

          <div className="md:pl-12 border-l border-white/5">
            <h5 className="text-[10px] font-mono tracking-widest uppercase text-white/40 mb-8">Contact</h5>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/40" />
                <a href="tel:+922132850170" className="hover:text-white">+92 21 32850170</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/40" />
                <a href="mailto:seamax@cyber.net.pk" className="hover:text-white">seamax@cyber.net.pk</a>
              </li>
              <li className="pt-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-[9px] font-mono tracking-widest rounded-full uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  Operations: 24 / 7
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
            © 2026 Seamax Marine Services (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-mono tracking-widest text-white/40 uppercase">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>

      {/* Massive Dark Watermark */}
      <div className="absolute -bottom-12 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-10">
        <h2 className="text-[20vw] font-light tracking-tighter text-white whitespace-nowrap leading-none select-none">
          SEAMAX MARINE
        </h2>
      </div>
    </footer>
  );
};
