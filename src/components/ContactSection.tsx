import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Sacred Guidance Anytime</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
          Direct Connect with Baba Ji
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Do not suffer in silence. Whether your issue is love, marriage, divorce, evil eye, or financial debt, one call can change your destiny under Maa Naagdevi kripa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Contact Card */}
        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="bg-white border border-amber-200/80 hover:border-amber-400 p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xs hover:shadow-lg hover:shadow-amber-500/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all shadow-inner">
            <Phone className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs text-amber-800 uppercase tracking-widest font-bold mb-1">
            24/7 Phone Helpline
          </span>
          <h3 className="heading-mystic text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-800">
            {CONTACT_INFO.phoneDisplay}
          </h3>
          <p className="text-stone-600 text-xs">
            Direct audio call with Baba Ji. Instant consultation for urgent crises.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:underline">
            Tap to Call Now →
          </span>
        </a>

        {/* WhatsApp Card */}
        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-emerald-200/80 hover:border-emerald-400 p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xs hover:shadow-lg hover:shadow-emerald-500/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-inner">
            <MessageCircle className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs text-emerald-800 uppercase tracking-widest font-bold mb-1">
            Instant WhatsApp Chat
          </span>
          <h3 className="heading-mystic text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-700">
            Chat on WhatsApp
          </h3>
          <p className="text-stone-600 text-xs">
            Share birth chart, partner photo, or questions securely and privately.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:underline">
            Open WhatsApp Chat →
          </span>
        </a>

        {/* Official Email Card */}
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="bg-white border border-amber-200/80 hover:border-amber-400 p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xs hover:shadow-lg hover:shadow-amber-500/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 group-hover:text-white transition-all shadow-inner">
            <Mail className="w-7 h-7 text-orange-700 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs text-amber-800 uppercase tracking-widest font-bold mb-1">
            Email Correspondence
          </span>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 break-all group-hover:text-amber-800">
            {CONTACT_INFO.email}
          </h3>
          <p className="text-stone-600 text-xs">
            Send comprehensive case histories, horoscopes, or long-distance puja inquiries.
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:underline">
            Send Email Inquiry →
          </span>
        </a>
      </div>

      {/* Ashram Location and Timings Banner */}
      <div className="mt-10 bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-stone-700">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100/80 flex items-center justify-center shrink-0 border border-amber-300 text-amber-700">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-stone-900 block">Main Siddha Peeth Sansthan:</span>
            <span className="text-stone-600">{CONTACT_INFO.location}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 flex items-center justify-center shrink-0 border border-emerald-300 text-emerald-700">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-stone-900 block">Consultation Availability:</span>
            <span className="text-emerald-700 flex items-center gap-1.5 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
              {CONTACT_INFO.availableHours}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
