import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Wand2,
  Gem,
  EyeOff,
  Briefcase,
  Users,
  Flame,
  Star,
  Baby,
  ArrowRight,
  X,
  MessageCircle,
  Phone,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { SACRED_SERVICES, CONTACT_INFO } from '../data/jyotishData';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ServicesSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].services;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'love' | 'marriage' | 'protection' | 'career' | 'kundali'>('all');

  const filteredServices = activeTab === 'all'
    ? SACRED_SERVICES
    : SACRED_SERVICES.filter(s => s.category === activeTab);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Heart':
        return <Heart className="w-5 h-5 text-white" />;
      case 'Wand2':
        return <Wand2 className="w-5 h-5 text-white" />;
      case 'Ring':
        return <Gem className="w-5 h-5 text-white" />;
      case 'ShieldAlert':
        return <EyeOff className="w-5 h-5 text-white" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-white" />;
      case 'Users':
        return <Users className="w-5 h-5 text-white" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-white" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-white" />;
      case 'Star':
      default:
        return <Star className="w-5 h-5 text-white" />;
    }
  };

  const createWhatsAppServiceLink = (serviceTitle: string) => {
    const text =
      lang === 'hi'
        ? `प्रणाम बाबा जी, मुझे "${serviceTitle}" से संबंधित तत्काल ज्योतिषीय मार्गदर्शन चाहिए। कृपया उपाय बताएं।`
        : lang === 'gu-en'
        ? `પ્રણામ બાબાજી, મને "${serviceTitle}" વિષય પર તાત્કાલિક જ્યોતિષિય માર્ગદર્શન જોઈએ છે. કૃપા કરી સહાય કરો.`
        : `Pranam Baba Ji, I need urgent astrological guidance regarding: *${serviceTitle}*. Please guide me on how to proceed.`;
    return `https://wa.me/919714127309?text=${encodeURIComponent(text)}`;
  };

  const categoryTabs = [
    {
      id: 'all',
      label: lang === 'hi' ? 'सभी सेवाएं' : lang === 'gu-en' ? 'બધી સેવાઓ / All Services' : 'All Services'
    },
    {
      id: 'love',
      label: lang === 'hi' ? 'प्रेम समस्या समाधान' : lang === 'gu-en' ? 'લવ પ્રોબ્લેમ સોલ્યુશન' : 'Love Solutions'
    },
    {
      id: 'marriage',
      label: lang === 'hi' ? 'विवाह एवं परिवार कलह' : lang === 'gu-en' ? 'પ્રેમ લગ્ન અને પરિવાર' : 'Marriage & Family'
    },
    {
      id: 'protection',
      label: lang === 'hi' ? 'नकारात्मक ऊर्जा शांति' : lang === 'gu-en' ? 'નકારાત્મક ઊર્જા નિવારણ' : 'Energy Cleansing'
    },
    {
      id: 'career',
      label: lang === 'hi' ? 'व्यापार एवं करियर' : lang === 'gu-en' ? 'વેપાર અને કારકિર્દી' : 'Business & Career'
    },
    {
      id: 'kundali',
      label: lang === 'hi' ? 'कुंडली दोष निवारण' : lang === 'gu-en' ? 'કુંડળી દોષ શાંતિ' : 'Kundali Dosha'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative w-full overflow-hidden">
      {/* Subtle warm background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{t.badge}</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
          {t.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          {t.subtitle}
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 bg-stone-100/80 p-1.5 rounded-2xl sm:rounded-full max-w-3xl mx-auto border border-stone-200">
          {categoryTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white font-bold shadow-md shadow-amber-500/25'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-white/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid with Scroll-triggered Animation & Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: (index % 3) * 0.12,
              ease: [0.25, 1, 0.5, 1]
            }}
            className="bg-white p-5 sm:p-6 rounded-3xl border border-amber-200/80 hover:border-amber-400 transition-all duration-300 hover:scale-[1.01] group flex flex-col justify-between relative shadow-xs hover:shadow-2xl hover:shadow-amber-500/15"
          >
            <div>
              {/* Service Related Photo */}
              {service.imageUrl && (
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-amber-100 shadow-inner group-hover:shadow-md transition-all">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="450"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-[0.93] group-hover:brightness-100"
                  />
                  {/* Mystic warm gradient over bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent"></div>

                  {/* Top Badge */}
                  {service.badge && (
                    <div className="absolute top-3 right-3 bg-amber-500/95 backdrop-blur-xs text-stone-950 text-[11px] font-black px-3 py-1 rounded-full shadow-md border border-yellow-200">
                      {service.badge}
                    </div>
                  )}

                  {/* Floating Icon badge on bottom left of image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md border border-white/20">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-white text-xs font-extrabold uppercase tracking-wider drop-shadow-md">
                      {service.category}
                    </span>
                  </div>
                </div>
              )}

              <h3 className="heading-mystic text-xl font-bold mb-2.5 text-stone-900 group-hover:text-amber-800 transition-colors">
                {service.title}
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {service.shortDesc}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-stone-600 font-medium">
                <div className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5 shrink-0 text-amber-600" />
                  <span>{service.timeframe}</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  24/7 Live
                </span>
              </div>

              {/* Direct Call Button (First Preference) */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md shadow-amber-500/20 hover:scale-[1.02] transition-all cursor-pointer border border-amber-300"
              >
                <Phone className="w-3.5 h-3.5 text-white animate-bounce shrink-0" />
                <span>
                  {lang === 'hi'
                    ? `सीधा कॉल करें: ${CONTACT_INFO.phoneDisplay}`
                    : lang === 'gu-en'
                    ? `સીધો કૉલ: ${CONTACT_INFO.phoneDisplay}`
                    : `Direct Call: ${CONTACT_INFO.phoneDisplay}`}
                </span>
              </a>

              {/* Secondary Details & WhatsApp */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full text-xs font-semibold py-2 px-3 rounded-xl bg-stone-100 hover:bg-amber-50 text-stone-700 hover:text-stone-900 border border-stone-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>
                    {lang === 'hi' ? 'विवरण' : lang === 'gu-en' ? 'વિગત / Info' : 'Details'}
                  </span>
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                </button>

                <a
                  href={createWhatsAppServiceLink(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-xs font-bold py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-amber-200 rounded-3xl max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 text-stone-600 hover:text-stone-950 p-1.5 rounded-full bg-white/90 hover:bg-stone-100 transition-colors shadow-md border border-stone-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Service Image */}
            {selectedService.imageUrl && (
              <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-5 -mt-2 shadow-md">
                <img
                  src={selectedService.imageUrl}
                  alt={selectedService.title}
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="450"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] text-yellow-300 font-bold tracking-wider uppercase block drop-shadow-sm">
                    {selectedService.badge || 'Divine Astrological Remedy'}
                  </span>
                  <h3 className="heading-mystic text-xl sm:text-2xl font-extrabold text-white drop-shadow-md">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
            )}

            {!selectedService.imageUrl && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shadow-inner">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-amber-800 font-bold tracking-wider uppercase">
                    {selectedService.badge || 'Divine Astrological Remedy'}
                  </span>
                  <h3 className="heading-mystic text-2xl font-extrabold text-stone-900">
                    {selectedService.title}
                  </h3>
                </div>
              </div>
            )}

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
              {selectedService.fullDesc}
            </p>

            {/* Sacred Benefits */}
            <div className="mb-6 bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80">
              <h4 className="text-amber-900 font-bold text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Key Vedic Spiritual Outcomes
              </h4>
              <ul className="space-y-2">
                {selectedService.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-xs md:text-sm text-stone-700">
                    <span className="text-amber-600 mr-2 font-bold">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mantra preview snippet */}
            {selectedService.mantraPreview && (
              <div className="mb-6 bg-orange-50/80 p-5 rounded-2xl border border-orange-200">
                <h5 className="text-orange-900 font-bold text-xs uppercase tracking-wider mb-1">
                  Sacred Siddha Beej Mantra Invocation
                </h5>
                <p className="font-serif text-amber-900 text-sm italic font-medium">
                  "{selectedService.mantraPreview}"
                </p>
                <span className="text-[11px] text-stone-500 mt-1 block">
                  *Chanted with exact Vedic swara by Baba Ji under your personal birth star (Nakshatra).
                </span>
              </div>
            )}

            {/* Action Buttons inside modal - Direct Call as First Choice */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex-1 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md transition-all border border-amber-300"
              >
                <Phone className="w-4 h-4 text-white animate-bounce" />
                <span>
                  {lang === 'hi'
                    ? `सीधा फोन करें: ${CONTACT_INFO.phoneDisplay}`
                    : lang === 'gu-en'
                    ? `સીધો કૉલ બાબાજી: ${CONTACT_INFO.phoneDisplay}`
                    : `Direct Call Baba Ji: ${CONTACT_INFO.phoneDisplay}`}
                </span>
              </a>

              <a
                href={createWhatsAppServiceLink(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {lang === 'hi'
                    ? 'WhatsApp पर विधि शुरू करें'
                    : lang === 'gu-en'
                    ? 'WhatsApp પર વિધિ શરૂ કરો'
                    : 'Start Ritual on WhatsApp'}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
