import React, { useState } from 'react';
import { Sparkles, Heart, ShieldAlert, ArrowRight, MessageCircle, Phone, CheckCircle, Clock, Lock, Flame } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface LoveCrisis {
  id: string;
  title: string;
  hindiTitle: string;
  gujaratiTitle?: string;
  description: string;
  diagnosis: string;
  planetaryCause: string;
  recommendedRemedy: string;
  timeframe: string;
  mantra: string;
  icon: string;
}

const LOVE_CRISES: LoveCrisis[] = [
  {
    id: 'ex-love-back',
    title: 'Ex-Partner Reconciliation & Love Harmony',
    hindiTitle: 'खोया प्यार व दांपत्य सामंजस्य समाधान',
    gujaratiTitle: 'ખોવાયેલો પ્રેમ પાછો મેળવવો / Love Reconciliation',
    description: 'Sudden distance, emotional silence, or communication breakdown affecting mutual affection.',
    diagnosis: 'Venus (Shukra) and Moon (Chandra) afflictions causing emotional misunderstanding and distance.',
    planetaryCause: 'Afflicted 5th & 7th House, planetary transit affecting emotional state.',
    recommendedRemedy: 'Kamakhya & Vedic Shukra Love Harmony Havan with personalized mantra chanting.',
    timeframe: 'Customized Vedic Consultation & Puja',
    mantra: '॥ ॐ कामदेवाय विद्महे पुष्पबाणाय धीमहि तन्नोऽनंगः प्रचोदयात् ॥',
    icon: '❤️'
  },
  {
    id: 'intercaste-marriage',
    title: 'Love Marriage & Parental Consent Guidance',
    hindiTitle: 'प्रेम विवाह / माता-पिता की सहमति मार्गदर्शन',
    gujaratiTitle: 'પ્રેમ લગ્ન / પરિવારની મંજૂરી મેળવવી',
    description: 'Family reservations or astrological mismatches creating obstacles for marriage.',
    diagnosis: 'Brihaspati (Jupiter) and Mangal (Mars) planetary discord between family charts.',
    planetaryCause: '4th & 9th house astrological friction, generational planetary alignments.',
    recommendedRemedy: 'Brihaspati-Shukra Samvaad Shanti & Harmony Havan.',
    timeframe: 'Vedic Consultation & Muhurta Analysis',
    mantra: '॥ ॐ क्लीं कृष्णाय गोविंदाय गोपीजनवल्लभाय स्वाहा ॥',
    icon: '💍'
  },
  {
    id: 'sautan-third-person',
    title: 'Resolving External Influences in Relationships',
    hindiTitle: 'रिश्ते में बाहरी हस्तक्षेप शांति',
    gujaratiTitle: 'ત્રીજી વ્યક્તિ / સૌતન સમસ્યા નિવારણ',
    description: 'Third-party interference or outside influences creating suspicion and domestic friction.',
    diagnosis: 'Rahu-Ketu shadow affecting the 7th house of partnership, breeding mistrust.',
    planetaryCause: 'Afflicted transit through marital partnership houses.',
    recommendedRemedy: 'Vedic Shanti Rituals & Protective Raksha Kavach to clear negative vibrations.',
    timeframe: 'Personalized Spiritual Remedial Process',
    mantra: '॥ ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे • सर्व विघ्न नाशाय नमः ॥',
    icon: '🛡️'
  },
  {
    id: 'husband-wife-dispute',
    title: 'Husband-Wife Harmony & Marital Peace',
    hindiTitle: 'पति-पत्नी क्लेश निवारण व दांपत्य शांति',
    gujaratiTitle: 'પતિ-પત્ની કંકાસ નિવારણ / Marital Peace',
    description: 'Frequent disagreements, lack of understanding, or marital tension disturbing home peace.',
    diagnosis: 'Planetary tension affecting marital warmth, often compounded by household stress.',
    planetaryCause: 'Manglik or Shani-Surya transit affecting the 7th house.',
    recommendedRemedy: 'Gauri-Shankar Vedic Harmony Havan & domestic energy cleansing.',
    timeframe: 'Peaceful Astrological Counseling & Puja',
    mantra: '॥ ॐ उमामहेश्वराभ्यां नमः ॥',
    icon: '🕊️'
  },
  {
    id: 'one-sided-love',
    title: 'Emotional Receptivity & Marriage Delays',
    hindiTitle: 'विवाह में देरी व अनुकूल जीवनसाथी मार्गदर्शन',
    gujaratiTitle: 'લગ્નમાં વિલંબ / યોગ્ય જીવનસાથી માર્ગદર્શન',
    description: 'Repeated delays in finding a suitable partner or facing unreciprocated affection.',
    diagnosis: 'Afflictions in 7th or 5th house influencing emotional connections.',
    planetaryCause: 'Combust Venus or debilitated Jupiter in birth chart.',
    recommendedRemedy: 'Siddha Shukra Beej Anushthan & planetary pacification puja.',
    timeframe: 'Vedic Consultation & Remedial Guidance',
    mantra: '॥ ॐ नमो भगवते कामदेवाय सर्वजन प्रियाय नमः ॥',
    icon: '🌸'
  }
];

export const VedicCalculator: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].calculator;
  const [selectedCrisisId, setSelectedCrisisId] = useState(LOVE_CRISES[0].id);
  const [separationStatus, setSeparationStatus] = useState('Completely Blocked on Phone & Social Media');
  const [duration, setDuration] = useState('Urgent Crisis: Under 1 Week');
  const [hasPhoto, setHasPhoto] = useState(true);

  const activeCrisis = LOVE_CRISES.find(c => c.id === selectedCrisisId) || LOVE_CRISES[0];

  const getWhatsAppLoveLink = () => {
    let text = '';
    if (lang === 'hi') {
      text = `प्रणाम पूज्य बाबा जी,
मुझे अपने रिश्ते के संबंध में तत्काल वैदिक समाधान चाहिए:
🔴 समस्या: ${activeCrisis.hindiTitle} (${activeCrisis.title})
🔴 वर्तमान स्थिति: ${separationStatus}
🔴 समय सीमा: ${duration}
🔴 फोटो उपलब्ध: ${hasPhoto ? 'हाँ, साथी का फोटो है' : 'नाम व जन्म विवरण उपलब्ध'}
कृपया कुंडली देखकर मार्गदर्शन व उपाय बताएं।`;
    } else if (lang === 'gu-en') {
      text = `પ્રણામ પૂજ્ય બાબાજી,
મારા સંબંધ/પ્રેમ જીવનમાં તાત્કાલિક માર્ગદર્શન જોઈએ છે:
🔴 સમસ્યા: ${activeCrisis.gujaratiTitle || activeCrisis.hindiTitle}
🔴 સ્થિતિ: ${separationStatus}
🔴 સમયગાળો: ${duration}
🔴 ફોટો: ${hasPhoto ? 'હા, પાર્ટનરનો ફોટો છે' : 'નામ અને જન્મ તારીખ છે'}
કૃપા કરી કુંડળી અનુસાર યોગ્ય વૈદિક ઉપાય જણાવો.`;
    } else {
      text = `Pranam Respected Baba Ji,
I need immediate help for my relationship crisis:
🔴 Problem: ${activeCrisis.title}
🔴 Current Status: ${separationStatus}
🔴 Duration: ${duration}
🔴 Photo Available: ${hasPhoto ? 'Yes, I have photo of partner' : 'No, I have full name & birth details'}
Please check our planetary situation and perform Vedic relationship harmony remedy.`;
    }
    return `https://wa.me/919714127309?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full text-xs font-bold text-rose-800 uppercase tracking-widest mb-3">
          <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-500" />
          <span>{t.badge}</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-snug">
          {t.title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Select Love & Relationship Crisis */}
        <div className="lg:col-span-6 bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-5">
            <h3 className="heading-mystic text-xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-600" />
              <span>
                {lang === 'hi'
                  ? 'अपनी प्रेम समस्या चुनें'
                  : lang === 'gu-en'
                  ? 'તમારી સમસ્યા પસંદ કરો (Select Crisis)'
                  : 'Select Your Relationship Crisis'}
              </span>
            </h3>
            <span className="text-[11px] font-bold px-2.5 py-0.5 bg-rose-50 text-rose-700 rounded-full border border-rose-200">
              {lang === 'hi' ? 'पूर्णतः गोपनीय' : lang === 'gu-en' ? 'સંપૂર્ણ ગુપ્ત (Confidential)' : 'Strictly Confidential'}
            </span>
          </div>

          <div className="space-y-4">
            {/* Crisis Type Options */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                {lang === 'hi'
                  ? 'मुख्य चिंता / समस्या (Select Concern)'
                  : lang === 'gu-en'
                  ? 'મુખ્ય સમસ્યા પસંદ કરો (Primary Concern)'
                  : 'Select Your Primary Concern'}
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {LOVE_CRISES.map((crisis) => {
                  const isSelected = crisis.id === selectedCrisisId;
                  return (
                    <button
                      key={crisis.id}
                      type="button"
                      onClick={() => setSelectedCrisisId(crisis.id)}
                      className={`text-left p-3 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-rose-50 to-amber-50/80 border-rose-400 shadow-sm ring-2 ring-rose-400/20'
                          : 'bg-stone-50/60 hover:bg-amber-50/40 border-stone-200 text-stone-700'
                      }`}
                    >
                      <span className="text-2xl shrink-0 mt-0.5">{crisis.icon}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className={`text-sm font-bold truncate ${isSelected ? 'text-rose-900 font-extrabold' : 'text-stone-900'}`}>
                            {lang === 'hi' ? crisis.hindiTitle : lang === 'gu-en' && crisis.gujaratiTitle ? crisis.gujaratiTitle : crisis.title}
                          </h4>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0"></span>
                          )}
                        </div>
                        <p className="text-[11px] text-amber-900 font-medium mt-0.5">
                          {lang === 'hi' ? crisis.title : crisis.hindiTitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Current Separation / Communication Status */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                {lang === 'hi'
                  ? 'वर्तमान में बातचीत / दूरी की स्थिति'
                  : lang === 'gu-en'
                  ? 'સંબંધ / વાતચીતની સ્થિતિ (Status)'
                  : 'Current Separation / Communication Status'}
              </label>
              <select
                value={separationStatus}
                onChange={(e) => setSeparationStatus(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none"
              >
                <option value="Completely Blocked on Phone & Social Media">
                  {lang === 'hi'
                    ? 'फ़ोन व सोशल मीडिया पर पूरी तरह ब्लॉक (Blocked)'
                    : lang === 'gu-en'
                    ? 'ફોન અને સોશિયલ મીડિયા પર સંપૂર્ણ બ્લૉક (Blocked)'
                    : 'Completely Blocked on Phone & Social Media'}
                </option>
                <option value="Cold Behavior, Constant Arguments & Avoiding Talk">
                  {lang === 'hi'
                    ? 'बातचीत बंद, कलह व दूरी (Avoiding Talk & Arguments)'
                    : lang === 'gu-en'
                    ? 'વાતચીત બંધ અને વારંવાર ઝઘડા (Cold Behavior)'
                    : 'Cold Behavior, Constant Arguments & Avoiding Talk'}
                </option>
                <option value="Family Forcing Marriage with Someone Else">
                  {lang === 'hi'
                    ? 'परिवार का दबाव / शादी कहीं और तय (Family Pressure)'
                    : lang === 'gu-en'
                    ? 'પરિવારનું દબાણ / બીજે લગ્ન નક્કી (Family Issue)'
                    : 'Family Forcing Marriage with Someone Else'}
                </option>
                <option value="Living Separately / Divorce Court Notice Received">
                  {lang === 'hi'
                    ? 'अलग रह रहे हैं / तलाक का नोटिस (Living Separately)'
                    : lang === 'gu-en'
                    ? 'અલગ રહીએ છીએ / છૂટાછેડાની નોટિસ (Separation)'
                    : 'Living Separately / Divorce Court Notice Received'}
                </option>
                <option value="Partner Under Outside Occult / Third-Person Control">
                  {lang === 'hi'
                    ? 'सौतन या किसी तीसरे का प्रभाव (Third-Person Influence)'
                    : lang === 'gu-en'
                    ? 'ત્રીજી વ્યક્તિ કે સૌતનનો પ્રભાવ (Third Person)'
                    : 'Partner Under Outside Influence / Third-Person Control'}
                </option>
              </select>
            </div>

            {/* Duration of Crisis */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                {lang === 'hi'
                  ? 'यह समस्या कितने समय से है?'
                  : lang === 'gu-en'
                  ? 'આ સમસ્યા કેટલા સમયથી છે?'
                  : 'How Long Has This Crisis Persisted?'}
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  'Urgent Crisis: Under 1 Week',
                  '1 to 3 Months',
                  'More than 6 Months'
                ].map((dur) => (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setDuration(dur)}
                    className={`py-2 px-2 text-center rounded-xl border font-bold transition-all cursor-pointer ${
                      duration === dur
                        ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                        : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                    }`}
                  >
                    {dur.includes('Under 1 Week')
                      ? lang === 'hi'
                        ? '⚡ १ सप्ताह से कम'
                        : lang === 'gu-en'
                        ? '⚡ ૧ અઠવાડિયાથી ઓછું'
                        : '⚡ Under 1 Wk'
                      : dur.includes('1 to 3')
                      ? lang === 'hi'
                        ? '१–३ माह'
                        : lang === 'gu-en'
                        ? '૧–૩ મહિના'
                        : '1–3 Months'
                      : lang === 'hi'
                      ? '६+ माह'
                      : lang === 'gu-en'
                      ? '૬+ મહિના'
                      : '6+ Months'}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo verification switch */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-xs font-bold text-amber-950">
                  {lang === 'hi'
                    ? 'क्या आपके पास साथी का फोटो है?'
                    : lang === 'gu-en'
                    ? 'શું તમારી પાસે પાર્ટનરનો ફોટો છે?'
                    : "Do you have partner's photo for remote ritual?"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setHasPhoto(!hasPhoto)}
                className={`px-3 py-1 text-xs font-extrabold rounded-full transition-all cursor-pointer ${
                  hasPhoto
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-stone-200 text-stone-700'
                }`}
              >
                {hasPhoto
                  ? lang === 'hi'
                    ? '✓ हाँ, फोटो उपलब्ध'
                    : lang === 'gu-en'
                    ? '✓ હા, ફોટો તૈયાર છે'
                    : '✓ Yes, Photo Ready'
                  : lang === 'hi'
                  ? 'केवल नाम व जन्मतिथि'
                  : lang === 'gu-en'
                  ? 'માત્ર નામ અને જન્મ તારીખ'
                  : 'Name & DOB Only'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Divine Love Healing & Remedial Action Plan */}
        <div className="lg:col-span-6 bg-gradient-to-b from-white to-[#fffcf8] border border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-5">
            <h3 className="heading-mystic text-xl font-bold text-stone-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-600" />
              <span>
                {lang === 'hi'
                  ? 'वैदिक समाधान व उपचार योजना'
                  : lang === 'gu-en'
                  ? 'દિવ્ય ઉપાય અને સમાધાન યોજના'
                  : 'Divine Love Healing & Remedial Plan'}
              </span>
            </h3>
            <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-300 flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
              <span>{lang === 'hi' ? 'प्रमाणित वैदिक समाधान' : lang === 'gu-en' ? 'પ્રમાણિત વૈદિક પ્લાન' : 'Verified Vedic Action Plan'}</span>
            </span>
          </div>

          {/* Active Crisis Overview Banner */}
          <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-orange-50 p-4 rounded-2xl border border-amber-200/90 mb-5">
            <div className="flex items-center gap-3">
              <span className="text-3xl shrink-0">{activeCrisis.icon}</span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 block">
                  SELECTED CRISIS DIAGNOSIS
                </span>
                <h4 className="font-extrabold text-base text-stone-900">
                  {activeCrisis.title}
                </h4>
                <p className="text-xs text-amber-900 font-semibold mt-0.5">
                  {activeCrisis.hindiTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Root Planetary Diagnosis & Recommended Remedy */}
          <div className="space-y-3.5 text-xs sm:text-sm">
            {/* Root Diagnosis */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold mb-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  {lang === 'hi'
                    ? 'ग्रह दोष व रुकावट का विश्लेषण'
                    : lang === 'gu-en'
                    ? 'ગ્રહ દોષ અને અવરોધ વિશ્લેષણ'
                    : 'Planetary Blockage Diagnosis'}
                </span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {activeCrisis.diagnosis}
              </p>
              <div className="mt-2 pt-2 border-t border-stone-200/60 text-[11px] text-amber-800 font-medium">
                <strong>
                  {lang === 'hi'
                    ? 'ज्योतिषीय योग:'
                    : lang === 'gu-en'
                    ? 'જ્યોતિષિય યોગ:'
                    : 'Astrological Alignment:'}
                </strong>{' '}
                {activeCrisis.planetaryCause}
              </div>
            </div>

            {/* Prescribed Remedy */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-amber-950 font-bold">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'शास्त्रोक्त वैदिक उपाय व अनुष्ठान'
                      : lang === 'gu-en'
                      ? 'શાસ્ત્રોક્ત વૈદિક ઉપાય અને હવન'
                      : 'Prescribed Vedic Ritual & Remedy'}
                  </span>
                </div>
                <span className="text-[11px] font-extrabold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-600" />
                  <span>{activeCrisis.timeframe}</span>
                </span>
              </div>
              <p className="text-amber-900 font-bold text-sm">
                {activeCrisis.recommendedRemedy}
              </p>
            </div>

            {/* Sacred Beej Mantra */}
            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-3.5 text-center">
              <span className="text-[10px] uppercase font-bold text-rose-800 tracking-wider block mb-1">
                {lang === 'hi'
                  ? 'सिद्ध बीज मंत्र जाप'
                  : lang === 'gu-en'
                  ? 'સિદ્ધ બીજ મંત્ર જાપ'
                  : 'Consecrated Beej Mantra Invocation'}
              </span>
              <p className="font-serif font-bold text-rose-950 text-xs sm:text-sm italic tracking-wide">
                {activeCrisis.mantra}
              </p>
            </div>
          </div>

          {/* Action CTAs: Direct Call & WhatsApp */}
          <div className="mt-6 pt-4 border-t border-stone-100 space-y-2.5">
            <a
              id="calculator-whatsapp-btn"
              href={getWhatsAppLoveLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md shadow-emerald-600/20 transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {lang === 'hi'
                  ? 'बाबा जी से WhatsApp पर समाधान जानें'
                  : lang === 'gu-en'
                  ? 'બાબાજી સાથે WhatsApp પર વાત કરો'
                  : 'Discuss Solution With Baba Ji on WhatsApp'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="calculator-call-btn"
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md transition-all cursor-pointer active:scale-95 border border-amber-300"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>
                {lang === 'hi'
                  ? `सीधा फोन कॉल करें: ${CONTACT_INFO.phoneDisplay}`
                  : lang === 'gu-en'
                  ? `સીધો ફોન કૉલ: ${CONTACT_INFO.phoneDisplay}`
                  : `Direct Phone Call: ${CONTACT_INFO.phoneDisplay}`}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
