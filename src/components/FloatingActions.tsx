import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

export const FloatingActions: React.FC = () => {
  return (
    <div
      id="floating-actions-container"
      className="fixed bottom-5 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end space-y-2.5 select-none max-w-[calc(100vw-1rem)]"
    >
      {/* 24/7 Live Availability Floating Pill */}
      <div className="bg-stone-950/90 text-yellow-300 border border-amber-400/80 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3.5 py-1 rounded-full shadow-xl flex items-center gap-1.5 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="tracking-wide">Online 24/7 • Tap to Connect</span>
      </div>

      <div className="flex items-center space-x-2.5">
        {/* Quick Call Floating Button */}
        <a
          id="floating-call-btn"
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          title="Call Baba Ji Directly (+91 97141 27309)"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-yellow-300 ring-2 ring-amber-500/30"
          aria-label="Call Baba Ji Directly"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse text-white" />
        </a>

        {/* Quick WhatsApp Floating Button */}
        <a
          id="floating-whatsapp-btn"
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Chat with Baba Ji on WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-emerald-300 ring-2 ring-emerald-500/30"
          aria-label="Chat with Baba Ji on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </a>
      </div>
    </div>
  );
};
