import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useDiscreet } from '../context/DiscreetContext';

export const FloatingActions: React.FC = () => {
  const { enableDiscreetMode } = useDiscreet();

  return (
    <div
      id="floating-actions-container"
      className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end space-y-2 select-none max-w-[calc(100vw-1.5rem)] pointer-events-auto"
    >
      {/* 100% Confidential Panic Hide Pill */}
      <button
        onClick={enableDiscreetMode}
        type="button"
        title="तुरंत स्क्रीन छुपाएं (100% गोपनीय सीक्रेट मोड • Esc दबाएं)"
        className="bg-stone-900/90 hover:bg-stone-950 text-amber-300 border border-amber-500/60 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full shadow-lg flex items-center gap-1 backdrop-blur-md cursor-pointer transition-transform active:scale-95"
      >
        <ShieldCheck className="w-3 h-3 text-emerald-400" />
        <span>🛡️ सीक्रेट मोड</span>
      </button>

      {/* 24/7 Live Availability Floating Pill - Hidden on mobile to prevent overlapping */}
      <div className="hidden sm:flex bg-stone-950/90 text-yellow-300 border border-amber-400/80 text-xs font-bold px-3 py-1 rounded-full shadow-xl items-center gap-1.5 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/40"></span>
        <span className="tracking-wide">{CONTACT_INFO.phoneDisplay}</span>
      </div>

      <div className="flex items-center space-x-2.5">
        {/* Quick Call Floating Button */}
        <a
          id="floating-call-btn"
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          title={`Call (+91 97141 27309)`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-yellow-300 ring-4 ring-yellow-400/30"
          aria-label="Call directly"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </a>

        {/* Quick WhatsApp Floating Button (Exclusive Single WhatsApp Gateway) */}
        <a
          id="floating-whatsapp-btn"
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp पर बात करें"
          className="relative group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-emerald-300 ring-4 ring-emerald-500/25"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
        </a>
      </div>
    </div>
  );
};

