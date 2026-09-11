import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS } from '../data/jyotishData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
          <span>Clear Doubts & Guidance</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
          Frequently Asked Questions
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 text-sm sm:text-base">
          Everything you need to know about our authentic Vedic Vashikaran and astrological consultation process.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className="bg-white border border-amber-200/80 rounded-2xl overflow-hidden shadow-xs hover:border-amber-400 transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="heading-mystic text-sm sm:text-base font-bold text-stone-900 pr-2 flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold">Q.</span> {faq.question}
                </span>
                <span className="p-1.5 rounded-full bg-amber-50 text-amber-700 shrink-0 border border-amber-200">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/60">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8 text-xs text-stone-500 font-medium">
        Still have a unique question about your case? Speak privately with Baba Ji on WhatsApp or Direct Call.
      </div>
    </section>
  );
};
