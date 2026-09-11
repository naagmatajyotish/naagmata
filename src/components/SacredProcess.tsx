import React from 'react';
import { SACRED_PROCESS, CONTACT_INFO } from '../data/jyotishData';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';

export const SacredProcess: React.FC = () => {
  return (
    <section id="rituals" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative w-full overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Transparent & Pure Spiritual Methodology</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
          How Baba Ji Resolves Your Crisis
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Our four-stage Siddha remedy protocol combines ancient Atharva Vedic hymns, sacred yajnas, and sanctified energy talismans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SACRED_PROCESS.map((item, index) => (
          <div
            key={item.step}
            className="bg-white p-7 rounded-3xl border border-amber-200/80 relative group hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-amber-500/5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="heading-mystic text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-600">
                {item.step}
              </span>
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-xs text-emerald-700 font-bold">
                ✓
              </div>
            </div>

            <div>
              <h3 className="heading-mystic text-lg font-bold text-stone-900 mb-2.5 group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-stone-100">
              <span className="text-[11px] text-amber-700 uppercase tracking-widest font-bold">
                Phase {index + 1} of 4
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reassurance CTA */}
      <div className="mt-12 bg-gradient-to-r from-amber-50 via-orange-50/50 to-amber-50 border border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xs">
        <div className="space-y-1">
          <h4 className="heading-mystic text-xl sm:text-2xl font-extrabold text-stone-900">
            Have an Emergency That Cannot Wait?
          </h4>
          <p className="text-stone-600 text-sm max-w-xl">
            Baba Ji conducts special midnight Emergency Havans for critical breakups, divorce dates, and severe psychic attacks.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 text-sm transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Emergency WhatsApp</span>
          </a>
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 text-sm transition-all shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Direct Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};
