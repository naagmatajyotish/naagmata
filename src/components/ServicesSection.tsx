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
  Phone,
  CheckCircle,
  Clock,
  Sparkles,
  Shield,
  Coins,
  Scale,
  Plane
} from 'lucide-react';
import { SACRED_SERVICES, CONTACT_INFO } from '../data/jyotishData';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export type ServiceCategory =
  | 'all'
  | 'love'
  | 'marriage'
  | 'par-istri'
  | 'family'
  | 'santan'
  | 'wealth'
  | 'court'
  | 'protection'
  | 'kundali'
  | 'foreign';

export const ServicesSection: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].services;
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<ServiceCategory>('all');

  const filteredServices = activeTab === 'all'
    ? SACRED_SERVICES
    : SACRED_SERVICES.filter(s => s.category === activeTab);

  const getCategoryLabel = (cat: string) => {
    if (lang === 'gu-en') {
      switch (cat) {
        case 'love': return 'લવ સોલ્યુશન';
        case 'marriage': return 'લગ્ન & દાંપત્ય';
        case 'par-istri': return 'પર-સ્ત્રી / સોતન';
        case 'family': return 'ઘર કંકાસ & વ્યસન';
        case 'santan': return 'સંતાન સુખ';
        case 'wealth': return 'ધન & વેપાર';
        case 'court': return 'કોર્ટ & શત્રુ';
        case 'protection': return 'મેલી વિદ્યા & રક્ષા';
        case 'kundali': return 'કુંડળી દોષ';
        case 'foreign': return 'વિદેશ યોગ';
        default: return 'વૈદિક સેવા';
      }
    }
    switch (cat) {
      case 'love': return 'प्रेम समाधान';
      case 'marriage': return 'विवाह समाधान';
      case 'par-istri': return 'पर-स्त्री निवारण';
      case 'family': return 'पारिवारिक शांति';
      case 'santan': return 'संतान सुख';
      case 'wealth': return 'धन व व्यापार';
      case 'court': return 'कोर्ट केस विजय';
      case 'protection': return 'तंत्र व नजर रक्षा';
      case 'kundali': return 'कुंडली दोष';
      case 'foreign': return 'विदेश योग';
      default: return 'वैदिक अनुष्ठान';
    }
  };

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
      case 'Coins':
        return <Coins className="w-5 h-5 text-white" />;
      case 'Scale':
        return <Scale className="w-5 h-5 text-white" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-white" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-white" />;
      case 'Star':
      default:
        return <Star className="w-5 h-5 text-white" />;
    }
  };

  const getServiceTitle = (s: ServiceItem) => {
    if (lang === 'hi' && s.titleHi) return s.titleHi;
    if (lang === 'gu-en' && s.titleGu) return s.titleGu;
    return s.title;
  };

  const getServiceBadge = (s: ServiceItem) => {
    if (lang === 'hi' && s.badgeHi) return s.badgeHi;
    if (lang === 'gu-en' && s.badgeGu) return s.badgeGu;
    return s.badge;
  };

  const getServiceShortDesc = (s: ServiceItem) => {
    if (lang === 'hi' && s.shortDescHi) return s.shortDescHi;
    if (lang === 'gu-en' && s.shortDescGu) return s.shortDescGu;
    return s.shortDesc;
  };

  const getServiceFullDesc = (s: ServiceItem) => {
    if (lang === 'hi' && s.fullDescHi) return s.fullDescHi;
    if (lang === 'gu-en' && s.fullDescGu) return s.fullDescGu;
    return s.fullDesc;
  };

  const getServiceBenefits = (s: ServiceItem) => {
    if (lang === 'hi' && s.benefitsHi) return s.benefitsHi;
    if (lang === 'gu-en' && s.benefitsGu) return s.benefitsGu;
    return s.benefits;
  };

  const getServiceTimeframe = (s: ServiceItem) => {
    if (lang === 'hi' && s.timeframeHi) return s.timeframeHi;
    if (lang === 'gu-en' && s.timeframeGu) return s.timeframeGu;
    return s.timeframe;
  };

  const categoryTabs = [
    {
      id: 'all',
      label: lang === 'hi' ? 'सभी सेवाएं' : lang === 'gu-en' ? 'બધી સેવાઓ / All Services' : 'All Services'
    },
    {
      id: 'love',
      label: lang === 'hi' ? 'प्रेम व खोया प्यार' : lang === 'gu-en' ? 'લવ સોલ્યુશન' : 'Love & Reunion'
    },
    {
      id: 'marriage',
      label: lang === 'hi' ? 'विवाह व दांपत्य सुख' : lang === 'gu-en' ? 'લગ્ન અને દાંપત્ય' : 'Marriage & Harmony'
    },
    {
      id: 'par-istri',
      label: lang === 'hi' ? 'पर-स्त्री व सौतन निवारण' : lang === 'gu-en' ? 'પર-સ્ત્રી / સોતન મુક્તિ' : 'Par-Istri & Sautan'
    },
    {
      id: 'family',
      label: lang === 'hi' ? 'पारिवारिक कलह व नशा' : lang === 'gu-en' ? 'ઘર કંકાસ અને વ્યસન' : 'Family & Habit'
    },
    {
      id: 'santan',
      label: lang === 'hi' ? 'संतान प्राप्ति व सद्बुद्धि' : lang === 'gu-en' ? 'સંતાન પ્રાપ્તિ & સદ્બુદ્ધિ' : 'Child Guidance'
    },
    {
      id: 'wealth',
      label: lang === 'hi' ? 'कर्ज मुक्ति व व्यापार' : lang === 'gu-en' ? 'દેવા મુક્તિ & વેપાર' : 'Debt & Business'
    },
    {
      id: 'court',
      label: lang === 'hi' ? 'कोर्ट केस व शत्रु विजय' : lang === 'gu-en' ? 'કોર્ટ કેસ & શત્રુ વિજય' : 'Court & Protection'
    },
    {
      id: 'protection',
      label: lang === 'hi' ? 'काला जादू व नजर दोष' : lang === 'gu-en' ? 'મેલી વિદ્યા & નજર દોષ' : 'Black Magic Cleansing'
    },
    {
      id: 'kundali',
      label: lang === 'hi' ? 'कुंडली दोष व कालसर्प' : lang === 'gu-en' ? 'કુંડળી દોષ & કાલસર્પ' : 'Kundali Dosha'
    },
    {
      id: 'foreign',
      label: lang === 'hi' ? 'विदेश यात्रा व वीज़ा' : lang === 'gu-en' ? 'વિદેશ વિઝા & PR' : 'Foreign Visa'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative w-full overflow-hidden">
      {/* Subtle warm background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-12 px-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{t.badge}</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
          {t.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-2">
          {t.subtitle}
        </p>

        {/* Category Filters - Structured Responsive Alignment */}
        <div className="mt-8 max-w-4xl mx-auto p-2 sm:p-2.5 bg-stone-100/90 rounded-2xl sm:rounded-full border border-stone-200/90 shadow-inner">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoryTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer text-center inline-flex items-center justify-center select-none shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white font-black shadow-md shadow-amber-500/30 border border-amber-300 ring-2 ring-amber-400/20'
                    : 'bg-white text-stone-700 hover:text-amber-950 hover:bg-amber-50/70 border border-stone-200 shadow-2xs hover:border-amber-300'
                }`}
              >
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Spotlight: Highlighted Vedic Anushthans stacked one after the other */}
      {(activeTab === 'all' || activeTab === 'marriage' || activeTab === 'family' || activeTab === 'santan') && (() => {
        const spotlightServices = SACRED_SERVICES.filter(
          s => s.id === 'dampatya-sukh-rati-kamadev' || 
               s.id === 'vyasan-mukti-rahu-shanti' ||
               s.id === 'santan-sadbuddhi-obedient-remedy'
        ).filter(s => activeTab === 'all' || s.category === activeTab);

        if (spotlightServices.length === 0) return null;

        return (
          <div className="space-y-8 mb-12">
            {spotlightServices.map((featured, sIdx) => {
              const isVyasan = featured.id === 'vyasan-mukti-rahu-shanti';
              const isSantan = featured.id === 'santan-sadbuddhi-obedient-remedy';

              return (
                <motion.div
                  key={featured.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: sIdx * 0.15 }}
                  className={`relative rounded-3xl p-1 shadow-2xl ${
                    isSantan
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-emerald-600 shadow-amber-500/25'
                      : isVyasan
                      ? 'bg-gradient-to-r from-orange-600 via-amber-500 to-red-600 shadow-orange-600/25'
                      : 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 shadow-amber-500/25'
                  }`}
                >
                  <div className="bg-gradient-to-br from-amber-950/95 via-stone-900 to-stone-950 text-white rounded-[22px] p-6 sm:p-8 lg:p-10 relative overflow-hidden border border-yellow-300/30">
                    {/* Background ambient light */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Spotlight Header Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10 relative z-10">
                      <div className="inline-flex items-center gap-2 bg-yellow-400/20 text-yellow-300 border border-yellow-400/40 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
                        {isSantan ? (
                          <Baby className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                        ) : isVyasan ? (
                          <Shield className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                        ) : (
                          <Sparkles className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                        )}
                        <span>
                          {isSantan
                            ? (lang === 'hi'
                                ? 'विशेष मुख्य आकर्षण ३: संतान सद्बुद्धि, आज्ञाकारिता एवं संस्कार अनुष्ठान'
                                : lang === 'gu-en'
                                ? 'વિશેષ મુખ્ય આકર્ષણ ૩: સંતાન સદ્બુદ્ધિ અને સંસ્કાર અનુષ્ઠાન'
                                : 'Featured Spotlight 3: Child Guidance, Obedience & Moral Harmony')
                            : isVyasan
                            ? (lang === 'hi'
                                ? 'विशेष मुख्य आकर्षण २: मदिरा/व्यसन मुक्ति एवं राहु शांति'
                                : lang === 'gu-en'
                                ? 'વિશેષ મુખ્ય આકર્ષણ ૨: દારૂ/વ્યસન મુક્તિ અને રાહુ શાંતિ'
                                : 'Featured Spotlight 2: Husband Addiction Relief & Rahu Shanti')
                            : (lang === 'hi'
                                ? 'विशेष मुख्य आकर्षण १: कामदेव-रति आकर्षण साधना'
                                : lang === 'gu-en'
                                ? 'વિશેષ મુખ્ય આકર્ષણ ૧: કામદેવ-રતિ આકર્ષણ સાધના'
                                : 'Featured Spotlight 1: Kamadev-Rati Spousal Attraction')}
                        </span>
                      </div>

                      <span className="text-xs font-semibold text-amber-200/90 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                        {isSantan
                          ? (lang === 'hi' ? 'पंचम भाव व राहु-बुध शांति' : lang === 'gu-en' ? 'પંચમ ભાવ અને રાહુ-બુધ શાંતિ' : '5th House & Mercury-Rahu Shanti')
                          : isVyasan
                          ? (lang === 'hi' ? 'शास्त्रोक्त राहु-शनि निवारण' : lang === 'gu-en' ? 'શાસ્ત્રોક્ત રાહુ-શનિ નિવારણ' : 'Vedic Rahu-Shani Remedy')
                          : (lang === 'hi' ? 'अखंड दांपत्य सुख विधान' : lang === 'gu-en' ? 'અખંડ દાંપત્ય સુખ વિધાન' : 'Marital Bliss Sadhana')}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                      {/* Left: Unique Photo with Golden Divine Border */}
                      <div className="lg:col-span-5 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/70 aspect-4/3 group">
                          <img
                            src={featured.imageUrl}
                            alt={getServiceTitle(featured)}
                            loading="lazy"
                            width="600"
                            height="450"
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          
                          {/* Floating top badge */}
                          <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-black px-3.5 py-1 rounded-full shadow-lg border border-yellow-300 flex items-center gap-1.5">
                            {isSantan ? (
                              <Baby className="w-3.5 h-3.5 text-yellow-200 shrink-0" />
                            ) : isVyasan ? (
                              <Shield className="w-3.5 h-3.5 text-yellow-200 shrink-0" />
                            ) : (
                              <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-spin" style={{ animationDuration: '4s' }} />
                            )}
                            <span>
                              {isSantan
                                ? (lang === 'hi' ? 'विशेष संतान सद्बुद्धि एवं संस्कार' : lang === 'gu-en' ? 'વિશેષ સંતાન સદ્બુદ્ધિ અને સંસ્કાર' : 'Vedic Child Guidance & Obedience')
                                : isVyasan
                                ? (lang === 'hi' ? 'विशेष राहु शांति व व्यसन मुक्ति' : lang === 'gu-en' ? 'વિશેષ રાહુ શાંતિ અને વ્યસન મુક્તિ' : 'Vedic Rahu Shanti Anushthan')
                                : (lang === 'hi' ? 'विशेष कामदेव-रति साधना' : lang === 'gu-en' ? 'વિશેષ कामદેવ-રતિ સાધના' : 'Vedic Kamadev-Rati Sadhana')}
                            </span>
                          </div>

                          {/* Bottom caption over image */}
                          <div className="absolute bottom-3 left-3 right-3 text-center bg-black/60 backdrop-blur-xs rounded-xl py-1.5 px-2 border border-white/10">
                            <p className="text-yellow-200 text-xs font-bold tracking-wide">
                              {isSantan
                                ? (lang === 'hi' ? 'जिद्दी स्वभाव व बुरी संगति निवारण • आज्ञाकारी संतान व उज्ज्वल भविष्य' : lang === 'gu-en' ? 'હઠીલો સ્વભાવ અને ખરાબ સંગત મુક્તિ • સંસ્કારી સંતાન' : 'Relief from Obstinacy & Bad Habits • Bright Future')
                                : isVyasan
                                ? (lang === 'hi' ? 'मदिरा व बुरी संगति निवारण • घर में सुख-शांति' : lang === 'gu-en' ? 'દારૂ તેમજ ખરાબ સંગત મુક્તિ • સુખ-શાંતિ' : 'Alcohol & Habit Relief • Household Peace')
                                : (lang === 'hi' ? 'दांपत्य आकर्षण एवं शयन सुख शांति' : lang === 'gu-en' ? 'દાંપત્ય આકર્ષણ અને પ્રેમ વૃદ્ધિ' : 'Spousal Attraction & Marital Harmony')}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right: Detailed Highlights & Direct CTAs */}
                      <div className="lg:col-span-7 space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-['Cinzel',serif]">
                          {getServiceTitle(featured)}
                        </h3>

                        <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                          {getServiceShortDesc(featured)}
                        </p>

                        {/* Bullet Benefits Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 pb-2">
                          {getServiceBenefits(featured).map((b, idx) => (
                            <div key={idx} className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl p-2.5">
                              <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm text-stone-200 font-medium leading-snug">{b}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons: Direct Call & Details */}
                        <div className="pt-3 flex flex-wrap items-center gap-3">
                          <a
                            href={`tel:${CONTACT_INFO.phoneRaw}`}
                            className="flex-1 min-w-[220px] bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-3.5 px-5 rounded-xl flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-xl shadow-amber-500/30 hover:scale-[1.01] transition-all border border-yellow-300"
                          >
                            <Phone className="w-4 h-4 text-white animate-bounce shrink-0" />
                            <span>
                              {lang === 'hi'
                                ? `सीधा फोन करें: ${CONTACT_INFO.phoneDisplay}`
                                : lang === 'gu-en'
                                ? `સીધો કૉલ: ${CONTACT_INFO.phoneDisplay}`
                                : `Direct Call: ${CONTACT_INFO.phoneDisplay}`}
                            </span>
                          </a>

                          <button
                            onClick={() => setSelectedService(featured)}
                            className="bg-white/15 hover:bg-white/25 text-yellow-200 font-extrabold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm border border-yellow-300/40 transition-all hover:border-yellow-300 shrink-0 cursor-pointer shadow-md"
                          >
                            <span>{lang === 'hi' ? 'पूर्ण वैदिक विधान विवरण' : lang === 'gu-en' ? 'વિગત જુઓ' : 'Ritual Details'}</span>
                            <ArrowRight className="w-4 h-4 text-yellow-300" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        );
      })()}

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
            className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 hover:scale-[1.01] group flex flex-col justify-between relative ${
              service.isHighlighted
                ? 'bg-gradient-to-b from-amber-50/95 via-white to-orange-50/70 border-2 border-amber-500 shadow-xl shadow-amber-500/20 ring-4 ring-amber-400/25'
                : 'bg-white border border-amber-200/80 hover:border-amber-400 shadow-xs hover:shadow-2xl hover:shadow-amber-500/15'
            }`}
          >
            {/* Special Highlighted Floating Ribbon */}
            {service.isHighlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-stone-950 font-black text-[11px] px-4 py-1 rounded-full shadow-lg border border-yellow-200 uppercase tracking-wider flex items-center gap-1.5 z-20 whitespace-nowrap">
                {service.id === 'vyasan-mukti-rahu-shanti' ? (
                  <Shield className="w-3.5 h-3.5 text-stone-950 shrink-0" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-stone-950 animate-pulse shrink-0" />
                )}
                <span>
                  {service.id === 'vyasan-mukti-rahu-shanti'
                    ? lang === 'hi'
                      ? '🛡️ गृह-क्लेश व नशा मुक्ति वैदिक संकल्प'
                      : lang === 'gu-en'
                      ? '🛡️ ઘર-કંકાસ અને વ્યસન મુક્તિ સંકલ્પ'
                      : '🛡️ Family Harmony & Addiction Freedom'
                    : lang === 'hi'
                    ? '✨ अखंड दांपत्य प्रेम व आकर्षण सिद्धि'
                    : lang === 'gu-en'
                    ? '✨ અખંડ દાંપત્ય પ્રેમ અને આકર્ષણ સિદ્ધિ'
                    : '✨ Marital Bliss & Eternal Bond'}
                </span>
              </div>
            )}

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
                  {getServiceBadge(service) && (
                    <div className="absolute top-3 right-3 bg-amber-500/95 backdrop-blur-xs text-stone-950 text-[11px] font-black px-3 py-1 rounded-full shadow-md border border-yellow-200">
                      {getServiceBadge(service)}
                    </div>
                  )}

                  {/* Floating Icon badge on bottom left of image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-md border border-white/20">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-white text-xs font-extrabold uppercase tracking-wider drop-shadow-md">
                      {getCategoryLabel(service.category)}
                    </span>
                  </div>
                </div>
              )}

              <h3 className="heading-mystic text-xl font-bold mb-2.5 text-stone-900 group-hover:text-amber-800 transition-colors">
                {getServiceTitle(service)}
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {getServiceShortDesc(service)}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-stone-600 font-medium">
                <div className="flex items-center">
                  <Clock className="w-3.5 h-3.5 mr-1.5 shrink-0 text-amber-600" />
                  <span>{getServiceTimeframe(service)}</span>
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

              {/* View Ritual Details Button */}
              <button
                onClick={() => setSelectedService(service)}
                className="w-full text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-amber-100/80 text-stone-800 hover:text-stone-950 border border-stone-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <span>
                  {lang === 'hi' ? 'वैदिक अनुष्ठान एवं मंत्र विवरण' : lang === 'gu-en' ? 'વિગત / Info' : 'View Ritual Details'}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
              </button>
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
                  alt={getServiceTitle(selectedService)}
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
                    {getServiceBadge(selectedService) || 'Divine Astrological Remedy'}
                  </span>
                  <h3 className="heading-mystic text-xl sm:text-2xl font-extrabold text-white drop-shadow-md">
                    {getServiceTitle(selectedService)}
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
                    {getServiceBadge(selectedService) || 'Divine Astrological Remedy'}
                  </span>
                  <h3 className="heading-mystic text-2xl font-extrabold text-stone-900">
                    {getServiceTitle(selectedService)}
                  </h3>
                </div>
              </div>
            )}

            <p className="text-stone-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
              {getServiceFullDesc(selectedService)}
            </p>

            {/* Sacred Benefits */}
            <div className="mb-6 bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80">
              <h4 className="text-amber-900 font-bold text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                Key Vedic Spiritual Outcomes
              </h4>
              <ul className="space-y-2">
                {getServiceBenefits(selectedService).map((benefit, i) => (
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
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center space-x-2 text-base shadow-md transition-all border border-amber-300"
              >
                <Phone className="w-5 h-5 text-white animate-bounce" />
                <span className="font-extrabold">
                  {lang === 'hi'
                    ? `सीधा फोन कॉल करें बाबाजी को: ${CONTACT_INFO.phoneDisplay}`
                    : lang === 'gu-en'
                    ? `સીધો કૉલ બાબાજી: ${CONTACT_INFO.phoneDisplay}`
                    : `Direct Call Baba Ji: ${CONTACT_INFO.phoneDisplay}`}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
