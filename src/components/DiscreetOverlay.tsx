import React from 'react';
import { useDiscreet } from '../context/DiscreetContext';
import { ShieldCheck, EyeOff, RotateCcw, BookOpen, Sun, Sparkles } from 'lucide-react';

export const DiscreetOverlay: React.FC = () => {
  const { isDiscreetMode, disableDiscreetMode } = useDiscreet();

  if (!isDiscreetMode) return null;

  return (
    <div
      id="discreet-panic-overlay"
      className="fixed inset-0 z-[99999] bg-[#faf8f2] text-stone-800 overflow-y-auto font-serif select-text"
      style={{ minHeight: '100vh' }}
    >
      {/* Top discreet bar */}
      <div className="sticky top-0 z-10 bg-amber-50/95 backdrop-blur-md border-b border-amber-200/70 px-4 py-2.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 font-sans">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span className="font-semibold">गोपनीय सुरक्षा मोड सक्रिय (100% Private Mode Active)</span>
          <span className="hidden sm:inline text-stone-400">|</span>
          <span className="hidden sm:inline text-xs text-stone-500">
            (यह स्क्रीन तुरंत सुरक्षित दैनिक पंचांग व पाठ में बदल गई है • Press Esc to toggle)
          </span>
        </div>

        <button
          onClick={disableDiscreetMode}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-sans font-bold shadow-sm transition-transform active:scale-95 cursor-pointer"
          title="Return to Consultation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>वापस जाएं (Return)</span>
        </button>
      </div>

      {/* Innocent Devotional Body Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {/* Sacred Header */}
        <div className="text-center mb-8 pb-6 border-b border-stone-200">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-800 mb-3">
            <Sun className="w-6 h-6 text-amber-700" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-950 font-sans tracking-wide mb-2">
            ॥ श्री हनुमान चालीसा एवं दैनिक नित्य पाठ ॥
          </h1>
          <p className="text-sm text-stone-600 font-sans max-w-lg mx-auto">
            दैनिक वैदिक पंचांग, शांति पाठ एवं संकट मोचन मंगल स्तुति • समस्त विघ्न बाधा निवारण
          </p>
        </div>

        {/* Shubh Muhurat Card */}
        <div className="bg-amber-100/50 rounded-xl p-4 sm:p-5 border border-amber-200/80 mb-8 font-sans text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base mb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>आज का दैनिक पंचांग व शुभ मुहूर्त (Daily Vedic Timings)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-stone-700 mt-3">
            <div className="bg-white/80 p-2.5 rounded-lg border border-amber-100">
              <span className="block text-stone-500 text-[11px]">ब्रह्म मुहूर्त</span>
              <span className="font-bold text-stone-900">04:42 AM - 05:30 AM</span>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-amber-100">
              <span className="block text-stone-500 text-[11px]">अभिजित मुहूर्त</span>
              <span className="font-bold text-stone-900">11:58 AM - 12:48 PM</span>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-amber-100">
              <span className="block text-stone-500 text-[11px]">विजय मुहूर्त</span>
              <span className="font-bold text-stone-900">02:26 PM - 03:15 PM</span>
            </div>
            <div className="bg-white/80 p-2.5 rounded-lg border border-amber-100">
              <span className="block text-stone-500 text-[11px]">गोधूलि वेला</span>
              <span className="font-bold text-stone-900">06:28 PM - 06:52 PM</span>
            </div>
          </div>
        </div>

        {/* Sacred Chalisa Verses */}
        <div className="bg-white rounded-2xl shadow-xs border border-stone-200/80 p-6 sm:p-8 space-y-6 text-center leading-relaxed text-stone-800 text-sm sm:text-base">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-xs font-sans uppercase font-bold text-amber-800 tracking-wider">॥ दोहा ॥</span>
            <p className="font-medium text-stone-900 mt-2">
              श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।<br />
              बरनउँ रघुबर बिमल जसु जो दायकु फल चारि॥
            </p>
            <p className="font-medium text-stone-900 mt-2">
              बुद्धिहीन तनु जानिके सुमिरौं पवन-कुमार।<br />
              बल बुद्धि बिद्या देहु मोहिं हरहु कलेस बिकार॥
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-sans uppercase font-bold text-amber-800 tracking-wider">॥ चौपाई ॥</span>
            <p>
              जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥<br />
              राम दूत अतुलित बल धामा। अंजनि-पुत्र पवनसुत नामा॥
            </p>
            <p>
              महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥<br />
              कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥
            </p>
            <p>
              हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै॥<br />
              संकर सुवन केसरीनंदन। तेज प्रताप महा जग बन्दन॥
            </p>
            <p>
              नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥<br />
              संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥
            </p>
            <p>
              सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥<br />
              और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै॥
            </p>
          </div>

          <div className="pt-4 border-t border-stone-100">
            <span className="text-xs font-sans uppercase font-bold text-amber-800 tracking-wider">॥ दोहा ॥</span>
            <p className="font-medium text-stone-900 mt-2">
              पवनतनय संकट हरन मंगल मूरति रूप।<br />
              राम लखन सीता सहित हृदय बसहु सुर भूप॥
            </p>
          </div>
        </div>

        {/* Bottom prompt to restore */}
        <div className="mt-8 text-center font-sans">
          <button
            onClick={disableDiscreetMode}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <EyeOff className="w-4 h-4" />
            <span>गोपनीय मोड बंद करें एवं ज्योतिष पृष्ठ पर लौटें</span>
          </button>
        </div>
      </div>
    </div>
  );
};
