import React from 'react';
import { ArrowLeft, Phone, MessageCircle, Globe, Search, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { GlobalPresence } from './GlobalPresence';
import { SeoKeywordsDirectory } from './SeoKeywordsDirectory';

interface SeoDirectoryPageProps {
  onBackToHome: () => void;
}

export const SeoDirectoryPage: React.FC<SeoDirectoryPageProps> = ({ onBackToHome }) => {
  return (
    <div className="w-full bg-[#fdfcf7] min-h-screen">
      {/* Top Breadcrumb & Quick Return Bar */}
      <div className="sticky top-[108px] z-30 bg-stone-900/95 backdrop-blur-md text-white border-b border-amber-500/40 px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onBackToHome}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← मुख्य सेवाएं देखें (Back to Services)</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-amber-200">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>सभी शहर व देश डायरेक्टरी</span>
            </span>

            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>कॉल: {CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/919714127309?text=${encodeURIComponent('प्रणाम गुरुजी, मुझे ज्योतिष समाधान हेतु परामर्श लेना है।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Directory Introduction Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-3">
          <Search className="w-3.5 h-3.5 text-amber-600" />
          <span>संपूर्ण वैदिक ज्योतिष एवं शहर खोज डायरेक्टरी (SEO Index)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2a2203] font-serif mb-2">
          अखिल भारतीय एवं अंतर्राष्ट्रीय ज्योतिष केंद्र डायरेक्टरी
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-3xl mx-auto">
          भारत के समस्त प्रमुख नगरों, जिलों एवं विदेशों (USA, UK, Canada, Australia, UAE) में ऑनलाइन व आश्रम परामर्श उपलब्ध है। अपनी समस्या के समाधान हेतु नीचे अपने शहर व विषय के अनुसार जानकारी देखें।
        </p>
      </div>

      {/* Section 1: International & Major Cities */}
      <div className="w-full">
        <GlobalPresence />
      </div>

      {/* Section 2: Comprehensive SEO Keywords & Localized Searches */}
      <div className="w-full">
        <SeoKeywordsDirectory />
      </div>

      {/* Bottom Floating Return Callout */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 shadow-xl space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2a2203] font-serif">
            क्या आप मुख्य पूजा एवं समाधान सेवाएं देखना चाहते हैं?
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
            हमारे आश्रम की सभी 18+ सिद्ध तांत्रिक व वैदिक अनुष्ठान सेवाएं मुख्य पृष्ठ पर उपलब्ध हैं।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBackToHome}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-black text-sm shadow-lg transition-all"
            >
              ← मुख्य सेवाएं व समाधान देखें (View All Services)
            </button>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>सीधे बाबाजी से बात करें</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
