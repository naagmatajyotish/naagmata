import React from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, ShieldCheck, Sparkles, Coins } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import serviceGuptDhan from '../assets/images/service_gupt_dhan_1791174398986.jpg';

export const GuptDhanHighlightBanner: React.FC = () => {

  return (
    <section
      id="gupt-dhan-highlight"
      className="relative w-full py-8 sm:py-12 bg-gradient-to-b from-[#fdfcf7] via-[#fffbf0] to-[#fdfcf7] border-y-2 border-amber-400/60 overflow-hidden"
    >
      {/* Subtle divine background ornamentation */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-yellow-400/15 to-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/15 to-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 shadow-2xl shadow-amber-950/25"
        >
          <div className="bg-gradient-to-br from-stone-950 via-amber-950/95 to-stone-900 text-white rounded-[22px] p-6 sm:p-8 lg:p-10 border border-yellow-400/50 relative overflow-hidden">
            {/* Top Badge Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-amber-500/25">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/40 via-yellow-600/40 to-amber-600/40 border border-yellow-400/60 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black text-yellow-300 tracking-wide uppercase shadow-sm">
                <Coins className="w-4 h-4 text-yellow-300 shrink-0" />
                <span>१००% सिद्ध तांत्रिक अनुष्ठान • गुप्त धन, गड़ा धन व अकस्मात धन प्राप्ति सिद्धि</span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-200 border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span>🐍 माँ नागदेवी पाताल धन रक्षक कवच</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Image with Golden Divine Border */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/90 aspect-4/3 group">
                  <img
                    src={serviceGuptDhan}
                    alt="गुप्त धन, गड़ा धन व अकस्मात धन प्राप्ति सिद्धि (माँ नागदेवी व कुबेर महायज्ञ)"
                    loading="lazy"
                    width="600"
                    height="450"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-stone-950 text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg border border-yellow-200 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-stone-950 shrink-0" />
                    <span>गुप्त धन व गड़ा धन सिद्धि</span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-14 left-3 bg-amber-600/90 backdrop-blur-xs text-white text-[11px] font-black px-3 py-1 rounded-lg border border-yellow-300/40 flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-yellow-200" />
                    <span>धन व व्यापार</span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-center bg-black/80 backdrop-blur-xs rounded-xl py-2 px-3 border border-yellow-400/40">
                    <p className="text-yellow-200 text-xs sm:text-sm font-bold tracking-wide">
                      जमीन में गड़े धन का आभास • नाग रक्षक दोष व तांत्रिक कीलन शांति
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Priority Highlights & CTAs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-yellow-400 text-xs font-extrabold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>पाताल लोक गुप्त धन साधना • सर्वोच्च वैदिक सिद्धि</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight font-['Cinzel',serif]">
                    गुप्त धन, गड़ा धन व अकस्मात धन प्राप्ति सिद्धि (माँ नागदेवी व कुबेर महायज्ञ)
                  </h2>

                  <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                    जमीन, पुराने मकान या खेत में गड़े धन का आभास, पूर्वजों की गुप्त संपत्ति, नाग रक्षक दोष व धन कीलन निवारण तथा अकस्मात धन प्राप्ति हेतु सिद्ध नागमाता व कुबेर तांत्रिक अनुष्ठान।
                  </p>
                </div>

                {/* The 4 Exact Highlight Points */}
                <div className="space-y-2.5 pt-1 pb-2">
                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/15 via-white/5 to-transparent border border-amber-400/30 rounded-xl p-3 sm:p-3.5 hover:border-yellow-400/60 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-yellow-100 font-bold leading-snug">
                      जमीन, खेत या पुराने मकान में गड़े धन का स्वप्न में संकेत व सटीक परीक्षण
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/15 via-white/5 to-transparent border border-amber-400/30 rounded-xl p-3 sm:p-3.5 hover:border-yellow-400/60 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-yellow-100 font-bold leading-snug">
                      नाग रक्षक दोष, यक्ष पहरा, तांत्रिक कीलन व दृष्टि बंधन का अचूक शमन
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/15 via-white/5 to-transparent border border-amber-400/30 rounded-xl p-3 sm:p-3.5 hover:border-yellow-400/60 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-yellow-100 font-bold leading-snug">
                      बिना किसी अनहोनी या जनहानि के सात्विक व सुरक्षित गुप्त धन प्राप्ति विधान
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/15 via-white/5 to-transparent border border-amber-400/30 rounded-xl p-3 sm:p-3.5 hover:border-yellow-400/60 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-yellow-100 font-bold leading-snug">
                      अकस्मात धन वर्षा, पैतृक संपत्ति विवाद से मुक्ति एवं आजीवन अखंड लक्ष्मी वास
                    </span>
                  </div>
                </div>

                {/* Direct Action Button: Phone Call */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-base sm:text-lg shadow-xl shadow-amber-600/35 hover:scale-[1.01] active:scale-98 transition-all border-2 border-yellow-300 ring-2 ring-yellow-400/30"
                  >
                    <Phone className="w-5 h-5 text-white animate-bounce shrink-0" />
                    <span className="whitespace-nowrap font-extrabold">
                      गुप्त धन परामर्श हेतु सीधा फोन करें: {CONTACT_INFO.phoneDisplay}
                    </span>
                  </a>
                </div>

                {/* Trust and Sanctity Note */}
                <p className="text-xs text-amber-200/80 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2 pt-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                  <span>
                    माँ नागदेवी सिद्ध पीठ द्वारा पूर्णतः सात्विक, सुरक्षित एवं गोपनीय वैदिक विधान।
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
