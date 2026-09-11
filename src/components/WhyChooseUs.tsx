import React from 'react';
import { Shield, Award, Users, HeartHandshake, Lock, PhoneCall, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Award,
      title: '35+ Years Sacred Vedic Lineage',
      description: 'Learned under traditional masters and Siddha Peeth Gurus with deep knowledge in Vedic astrology and planetary remedies.'
    },
    {
      icon: Lock,
      title: 'Sacred Confidentiality Oath',
      description: 'Your identity, birth details, personal concerns, and communications are held with complete confidentiality and privacy.'
    },
    {
      icon: Shield,
      title: 'Ethical & Sattvic Methods',
      description: 'We strictly practice peaceful, benevolent Vedic rituals that promote emotional harmony, clarity, and domestic tranquility.'
    },
    {
      icon: Users,
      title: 'Worldwide Devotee Community',
      description: 'Devotees across India, USA, UK, Canada, Australia, and UAE consult Baba Ji for spiritual peace and family harmony.'
    },
    {
      icon: HeartHandshake,
      title: 'Compassionate Astrological Counseling',
      description: 'Baba Ji listens with deep patience and empathy, analyzing the underlying planetary influences affecting your situation.'
    },
    {
      icon: PhoneCall,
      title: '24/7 Direct Accessibility',
      description: 'Connect directly with Baba Ji on Phone or WhatsApp for personal guidance and respectful astrological counsel.'
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-stone-50/70 border-y border-stone-200/80 transition-colors duration-400 w-full overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Divine Sanctity & Trust Under Maa Naagdevi</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
          Why Worldwide Devotees Trust Naagmata Jyotish
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Proven spiritual remedies backed by decades of Vedic tapasya, high moral integrity, and thousands of joyful families.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <div
              key={index}
              className="bg-white p-7 rounded-3xl border border-amber-200/70 hover:border-amber-400 transition-all duration-300 shadow-xs hover:shadow-lg hover:shadow-amber-500/5 flex items-start space-x-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all shadow-inner">
                <Icon className="w-6 h-6 text-amber-700 group-hover:text-white transition-colors" />
              </div>
              <div className="space-y-1.5">
                <h3 className="heading-mystic text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {point.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Numerical Stats Counters */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        <div className="bg-white border border-amber-200/80 p-6 rounded-3xl shadow-xs">
          <span className="heading-mystic text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block mb-1">
            {CONTACT_INFO.experienceYears}
          </span>
          <span className="text-xs text-stone-600 uppercase tracking-wider font-bold">
            Years Sacred Tapasya
          </span>
        </div>
        <div className="bg-white border border-amber-200/80 p-6 rounded-3xl shadow-xs">
          <span className="heading-mystic text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block mb-1">
            {CONTACT_INFO.clientsCount}
          </span>
          <span className="text-xs text-stone-600 uppercase tracking-wider font-bold">
            Cases Solved Successfully
          </span>
        </div>
        <div className="bg-white border border-amber-200/80 p-6 rounded-3xl shadow-xs">
          <span className="heading-mystic text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block mb-1">
            18+
          </span>
          <span className="text-xs text-stone-600 uppercase tracking-wider font-bold">
            Countries Served Worldwide
          </span>
        </div>
        <div className="bg-white border border-amber-200/80 p-6 rounded-3xl shadow-xs">
          <span className="heading-mystic text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block mb-1">
            {CONTACT_INFO.successRate}
          </span>
          <span className="text-xs text-stone-600 uppercase tracking-wider font-bold">
            Satisfaction Rate
          </span>
        </div>
      </div>
    </section>
  );
};
