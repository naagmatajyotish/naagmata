import React, { useState } from 'react';
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
import { useTheme } from '../context/ThemeContext';
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
  const { theme } = useTheme();
  const isParchment = theme === 'sacred-parchment';
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
        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border ${
          isParchment
            ? 'bg-amber-100/80 border-amber-300 text-amber-900'
            : 'bg-stone-900/90 border-amber-500/50 text-yellow-300'
        }`}>
          <Sparkles className={`w-3.5 h-3.5 ${isParchment ? 'text-amber-600' : 'text-yellow-400'}`} />
          <span>{t.badge}</span>
        </div>
        <h2 className={`heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight ${
          isParchment ? 'text-stone-950' : 'text-white'
        }`}>
          {t.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto mt-4 rounded-full"></div>
        <p className={`mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-2 font-medium ${
          isParchment ? 'text-stone-700' : 'text-stone-300'
        }`}>
          {t.subtitle}
        </p>

        {/* Category Filters - Structured Responsive Alignment */}
        <div className={`mt-8 max-w-4xl mx-auto p-2 sm:p-2.5 rounded-2xl sm:rounded-full border shadow-inner ${
          isParchment ? 'bg-amber-50/70 border-amber-200' : 'bg-stone-900/90 border-stone-800'
        }`}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoryTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer text-center inline-flex items-center justify-center select-none shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-950 font-black shadow-lg shadow-amber-500/30 border-2 border-yellow-200 ring-2 ring-yellow-400/20'
                    : isParchment
                    ? 'bg-white text-stone-800 hover:text-amber-800 hover:bg-amber-50 border border-amber-200 shadow-2xs'
                    : 'bg-stone-800/90 text-stone-300 hover:text-yellow-300 hover:bg-stone-750 border border-stone-700 shadow-2xs'
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
                <div
                  key={featured.id}
                  className={`relative rounded-3xl p-1 shadow-2xl transition-all duration-500 ${
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
                          <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[11px] sm:text-xs font-black px-2.5 sm:px-3.5 py-1 rounded-full shadow-lg border border-yellow-300 flex items-center gap-1.5 max-w-[85%] truncate">
                            {isSantan ? (
                              <Baby className="w-3.5 h-3.5 text-yellow-200 shrink-0" />
                            ) : isVyasan ? (
                              <Shield className="w-3.5 h-3.5 text-yellow-200 shrink-0" />
                            ) : (
                              <Sparkles className="w-3.5 h-3.5 text-yellow-200 animate-spin" style={{ animationDuration: '4s' }} />
                            )}
                            <span className="truncate">
                              {isSantan
                                ? (lang === 'hi' ? 'विशेष संतान सद्बुद्धि एवं संस्कार' : lang === 'gu-en' ? 'વિશેષ સંતાન સદ્બુદ્ધિ અને સંસ્કાર' : 'Vedic Child Guidance & Obedience')
                                : isVyasan
                                ? (lang === 'hi' ? 'विशेष राहु शांति व व्यसन मुक्ति' : lang === 'gu-en' ? 'વિશેષ રાહુ શાંતિ અને વ્યસન મુક્તિ' : 'Vedic Rahu Shanti Anushthan')
                                : (lang === 'hi' ? 'विशेष कामदेव-रति साधना' : lang === 'gu-en' ? 'વિશેષ कामદેવ-રતિ સાધના' : 'Vedic Kamadev-Rati Sadhana')}
                            </span>
                          </div>

                          {/* Bottom caption over image */}
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-center bg-black/75 backdrop-blur-xs rounded-xl py-1 sm:py-1.5 px-2 border border-white/10">
                            <p className="text-yellow-200 text-xs font-bold tracking-wide leading-tight line-clamp-1 sm:line-clamp-none">
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

                        {/* Action Buttons: Direct Call & Details - Clean mobile stacking */}
                        <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                          <a
                            href={`tel:${CONTACT_INFO.phoneRaw}`}
                            className="flex-1 min-h-[54px] sm:min-h-[58px] bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-3.5 px-4 sm:px-5 rounded-2xl flex items-center justify-center gap-2.5 sm:gap-3 shadow-xl shadow-amber-500/30 hover:scale-[1.01] active:scale-98 transition-all border-2 border-yellow-300 ring-2 ring-yellow-400/20"
                          >
                            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
                            <span className="font-black text-lg xs:text-xl sm:text-2xl tracking-wide text-yellow-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] whitespace-nowrap leading-none text-center">
                              {CONTACT_INFO.phoneDisplay}
                            </span>
                          </a>

                          <button
                            onClick={() => setSelectedService(featured)}
                            className="min-h-[54px] sm:min-h-[58px] bg-white/15 hover:bg-white/25 text-yellow-200 font-extrabold py-3.5 px-4 sm:px-5 rounded-2xl flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base border border-yellow-300/40 transition-all hover:border-yellow-300 shrink-0 cursor-pointer shadow-md active:scale-98"
                          >
                            <span>{lang === 'hi' ? 'पूर्ण वैदिक विधान विवरण' : lang === 'gu-en' ? 'વિગત જુઓ' : 'Ritual Details'}</span>
                            <ArrowRight className="w-4 h-4 text-yellow-300 shrink-0" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })()}

      {/* Services Grid with Scroll-triggered Animation & Photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`p-5 sm:p-6 rounded-3xl transition-all duration-300 hover:scale-[1.01] group flex flex-col justify-between relative ${
              service.isHighlighted
                ? isParchment
                  ? 'bg-white border-2 border-amber-500 shadow-xl shadow-amber-500/15 ring-2 ring-amber-400/20 text-stone-900'
                  : 'bg-gradient-to-b from-[#181512] via-[#12100e] to-[#0d0c0a] border-2 border-amber-500 shadow-2xl shadow-amber-500/20 ring-4 ring-amber-400/20 text-stone-100'
                : isParchment
                ? 'bg-white border border-amber-200/90 hover:border-amber-400 shadow-md text-stone-900'
                : 'bg-stone-900/90 border border-amber-500/30 hover:border-amber-400 shadow-xl shadow-black/50 text-stone-100'
            }`}
          >
            {/* Special Highlighted Floating Ribbon - Max width protection on mobile */}
            {service.isHighlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-950 font-black text-[10px] xs:text-[11px] px-3 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-lg border-2 border-yellow-200 uppercase tracking-wide flex items-center justify-center gap-1.5 z-20 max-w-[92%] truncate">
                {service.id === 'vyasan-mukti-rahu-shanti' ? (
                  <Shield className="w-3.5 h-3.5 text-stone-950 shrink-0" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-stone-950 animate-pulse shrink-0" />
                )}
                <span className="truncate">
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
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-5 bg-stone-950 shadow-inner group-hover:shadow-md transition-all border border-amber-500/20">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent"></div>

                  {/* Top Badge */}
                  {getServiceBadge(service) && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 text-[11px] font-black px-3 py-1 rounded-full shadow-md border border-yellow-200">
                      {getServiceBadge(service)}
                    </div>
                  )}

                  {/* Floating Icon badge on bottom left of image */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-stone-950 shadow-md border border-yellow-200">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-white text-xs font-extrabold uppercase tracking-wider drop-shadow-md">
                      {getCategoryLabel(service.category)}
                    </span>
                  </div>
                </div>
              )}

              <h3 className={`heading-mystic text-xl font-bold mb-2.5 transition-colors ${
                isParchment ? 'text-stone-950 group-hover:text-amber-800' : 'text-white group-hover:text-yellow-300'
              }`}>
                {getServiceTitle(service)}
              </h3>

              <p className={`text-sm leading-relaxed mb-4 ${
                isParchment ? 'text-stone-600' : 'text-stone-300'
              }`}>
                {getServiceShortDesc(service)}
              </p>
            </div>

            <div className={`pt-3 border-t space-y-2.5 ${isParchment ? 'border-amber-100' : 'border-stone-800'}`}>
              <div className={`flex items-center justify-between text-xs font-medium ${isParchment ? 'text-stone-500' : 'text-stone-400'}`}>
                <div className="flex items-center">
                  <Clock className={`w-3.5 h-3.5 mr-1.5 shrink-0 ${isParchment ? 'text-amber-600' : 'text-amber-400'}`} />
                  <span>{getServiceTimeframe(service)}</span>
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${
                  isParchment
                    ? 'text-emerald-800 bg-emerald-50 border-emerald-300'
                    : 'text-emerald-300 bg-emerald-950/80 border-emerald-500/40'
                }`}>
                  24/7 Live
                </span>
              </div>

              {/* Direct Call Button (First Preference) - Symmetrical & Large Text Fitted in Box */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full min-h-[54px] sm:min-h-[58px] bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 hover:from-amber-400 hover:to-orange-400 text-white font-black py-3 sm:py-3.5 px-3 sm:px-4 rounded-2xl flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-orange-500/30 hover:scale-[1.01] active:scale-98 transition-all cursor-pointer border-2 border-yellow-200 ring-2 ring-yellow-400/20"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce shrink-0" />
                <span className="font-black tracking-wide text-lg xs:text-xl sm:text-2xl text-white whitespace-nowrap leading-none text-center">
                  {CONTACT_INFO.phoneDisplay}
                </span>
              </a>

              {/* View Ritual Details Button */}
              <button
                onClick={() => setSelectedService(service)}
                className={`w-full min-h-[46px] text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-3 rounded-2xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:scale-98 ${
                  isParchment
                    ? 'bg-amber-50/80 hover:bg-amber-100 text-amber-950 border border-amber-300'
                    : 'bg-stone-800/90 hover:bg-stone-750 text-stone-200 hover:text-white border border-stone-700'
                }`}
              >
                <span>
                  {lang === 'hi' ? 'वैदिक अनुष्ठान एवं मंत्र विवरण' : lang === 'gu-en' ? 'વિગત / Info' : 'View Ritual Details'}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isParchment ? 'text-amber-700' : 'text-amber-400'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Service Detail Modal - Styled for Mystic Cosmic Dark with Mobile Comfort */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#14120f] border-2 border-amber-500/40 rounded-3xl max-w-2xl w-full p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-white">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 text-yellow-200 hover:text-white p-2 rounded-full bg-stone-900/90 hover:bg-stone-800 transition-colors shadow-md border border-amber-500/40"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Service Image */}
            {selectedService.imageUrl && (
              <div className="relative w-full h-44 sm:h-56 rounded-2xl overflow-hidden mb-5 -mt-1 sm:-mt-2 shadow-md border border-amber-500/20">
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
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4">
                  <span className="text-[10px] sm:text-[11px] text-yellow-300 font-bold tracking-wider uppercase block drop-shadow-sm">
                    {getServiceBadge(selectedService) || 'Divine Astrological Remedy'}
                  </span>
                  <h3 className="heading-mystic text-lg sm:text-2xl font-extrabold text-white drop-shadow-md leading-tight">
                    {getServiceTitle(selectedService)}
                  </h3>
                </div>
              </div>
            )}

            {!selectedService.imageUrl && (
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-800 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-inner">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-amber-400 font-bold tracking-wider uppercase">
                    {getServiceBadge(selectedService) || 'Divine Astrological Remedy'}
                  </span>
                  <h3 className="heading-mystic text-xl sm:text-2xl font-extrabold text-white">
                    {getServiceTitle(selectedService)}
                  </h3>
                </div>
              </div>
            )}

            <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5 font-normal">
              {getServiceFullDesc(selectedService)}
            </p>

            {/* Sacred Benefits */}
            <div className="mb-5 bg-stone-900/90 p-4 sm:p-5 rounded-2xl border border-amber-500/30">
              <h4 className="text-yellow-300 font-bold text-xs sm:text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Key Vedic Spiritual Outcomes
              </h4>
              <ul className="space-y-2">
                {getServiceBenefits(selectedService).map((benefit, i) => (
                  <li key={i} className="flex items-start text-xs sm:text-sm text-stone-200">
                    <span className="text-amber-400 mr-2 font-bold">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mantra preview snippet */}
            {selectedService.mantraPreview && (
              <div className="mb-5 bg-stone-900/90 p-4 sm:p-5 rounded-2xl border border-amber-500/30">
                <h5 className="text-yellow-300 font-bold text-xs uppercase tracking-wider mb-1">
                  Sacred Siddha Beej Mantra Invocation
                </h5>
                <p className="font-serif text-yellow-200 text-xs sm:text-sm italic font-medium">
                  "{selectedService.mantraPreview}"
                </p>
                <span className="text-[10px] sm:text-[11px] text-stone-400 mt-1 block">
                  *Chanted with exact Vedic swara by Baba Ji under your personal birth star (Nakshatra).
                </span>
              </div>
            )}

            {/* Action Buttons inside modal - Direct Call as First Choice */}
            <div className="pt-2">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full min-h-[54px] sm:min-h-[58px] bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl flex items-center justify-center gap-2.5 sm:gap-3 shadow-md transition-all border-2 border-yellow-300 ring-2 ring-yellow-400/20 active:scale-98"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
                <span className="font-black tracking-wide text-lg xs:text-xl sm:text-2xl text-yellow-100 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] whitespace-nowrap leading-none text-center">
                  {CONTACT_INFO.phoneDisplay}
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
