import React, { useState } from 'react';
import { Sparkles, Heart, ShieldAlert, ArrowRight, MessageCircle, Phone, CheckCircle, Clock, Lock, Flame } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

interface LoveCrisis {
  id: string;
  title: string;
  hindiTitle: string;
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
    title: 'Ex-Partner Reconciliation (Get Love Back)',
    hindiTitle: 'खोया प्यार वापस पाएं / पार्टनर का दिल जीतें',
    description: 'Partner abruptly broke up, blocked your phone/social media, or got influenced by others.',
    diagnosis: 'Severe Shukra (Venus) and Chandra (Moon) affliction causing emotional numbness and stubborn disconnection in your partner.',
    planetaryCause: 'Afflicted 5th & 7th House, Rahu shadow over emotional mind (Manas).',
    recommendedRemedy: 'Kamakhya Mohini Akarshan Havan with Sacred Photo Vashikaran Vidya.',
    timeframe: 'Noticeable emotional softening within 24 to 48 Hours',
    mantra: '॥ ॐ कामदेवाय विद्महे पुष्पबाणाय धीमहि तन्नोऽनंगः प्रचोदयात् ॥',
    icon: '💔'
  },
  {
    id: 'intercaste-marriage',
    title: 'Intercaste Love Marriage & Family Approval',
    hindiTitle: 'मनपसंद प्रेम विवाह / माता-पिता की सहमति',
    description: 'Strict parents opposing marital union due to caste, status, or horoscope mismatches.',
    diagnosis: 'Brihaspati (Jupiter) and Mangal (Mars) planetary discord between family heads and children.',
    planetaryCause: 'Strong 4th & 9th house resistance, ancestral Pitra dosha blockage.',
    recommendedRemedy: 'Brihaspati-Shukra Samvaad Shanti & Manastambhan Havan to open parents\' hearts.',
    timeframe: 'Peaceful change in family attitude within 3 to 5 Days',
    mantra: '॥ ॐ क्लीं कृष्णाय गोविंदाय गोपीजनवल्लभाय स्वाहा ॥',
    icon: '💍'
  },
  {
    id: 'sautan-third-person',
    title: 'Third Person / Sautan Elimination',
    hindiTitle: 'सौतन / तीसरे व्यक्ति से तुरंत छुटकारा',
    description: 'Husband, wife, or lover has fallen into outside influence, office colleague, or illicit affair.',
    diagnosis: 'Occult energy or magnetic illusion (Mohini Bandhan) cast by third person stealing your partner.',
    planetaryCause: 'Rahu-Ketu axis cutting through 7th marital house.',
    recommendedRemedy: 'Uchchatan & Bedan Tantrik Rituals to permanently break external attachment.',
    timeframe: 'Complete detachment from third person in 2 to 4 Days',
    mantra: '॥ ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे • सर्व शत्रु उच्चाटय उच्चाटय स्वाहा ॥',
    icon: '🛡️'
  },
  {
    id: 'husband-wife-dispute',
    title: 'Husband-Wife Conflict & Divorce Prevention',
    hindiTitle: 'पति-पत्नी क्लेश निवारण / तलाक रुकवाएं',
    description: 'Constant bickering, lack of intimacy, court divorce papers served, or living separately.',
    diagnosis: 'Severe Kaal Sarp or Manglik tension eroding marital warmth, amplified by domestic negative energy.',
    planetaryCause: 'Ketu in 7th house generating mutual hatred and baseless suspicion.',
    recommendedRemedy: 'Gauri-Shankar Prema Bandhan Anushthan & Sacred Sindoor Consecration.',
    timeframe: 'Immediate pacification of anger within 24 to 72 Hours',
    mantra: '॥ ॐ उमामहेश्वराभ्यां नमः • सर्व क्लेश शमनाय स्वाहा ॥',
    icon: '⚖️'
  },
  {
    id: 'one-sided-love',
    title: 'One-Sided Love Attraction & Delayed Marriage',
    hindiTitle: 'एकतरफा प्यार आकर्षण / शादी में आ रही रुकावट',
    description: 'Loving someone deeply who does not reciprocate, or marriage getting repeatedly delayed.',
    diagnosis: 'Blocked Akarshan energy and weak planetary attraction aura (Kundalini blockage).',
    planetaryCause: 'Combust Venus or debilitated Jupiter in birth chart.',
    recommendedRemedy: 'Siddha Rati-Kamadev Akarshan Kavach & Shukra Beej Samputit Japa.',
    timeframe: 'Magnetic attraction and interest sparked in 3 to 7 Days',
    mantra: '॥ ॐ नमो भगवते कामदेवाय सर्वजन प्रियाय सर्वजन सम्मोहनाय नमः ॥',
    icon: '💘'
  }
];

export const VedicCalculator: React.FC = () => {
  const [selectedCrisisId, setSelectedCrisisId] = useState(LOVE_CRISES[0].id);
  const [separationStatus, setSeparationStatus] = useState('Completely Blocked on Phone & Social Media');
  const [duration, setDuration] = useState('Urgent Crisis: Under 1 Week');
  const [hasPhoto, setHasPhoto] = useState(true);

  const activeCrisis = LOVE_CRISES.find(c => c.id === selectedCrisisId) || LOVE_CRISES[0];

  const getWhatsAppLoveLink = () => {
    const text = `Pranam Respected Baba Ji,
I need immediate help for my relationship crisis:
🔴 Problem: ${activeCrisis.title} (${activeCrisis.hindiTitle})
🔴 Current Status: ${separationStatus}
🔴 Duration: ${duration}
🔴 Photo Available: ${hasPhoto ? 'Yes, I have photo of partner' : 'No, I have full name & birth details'}
Please check our planetary situation and perform urgent Vedic Vashikaran remedy.`;
    return `https://wa.me/919714127309?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200 px-3.5 py-1 rounded-full text-xs font-bold text-rose-800 uppercase tracking-widest mb-3">
          <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-500" />
          <span>Vedic Love Problem Specialist & Instant Solution Finder</span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 leading-tight">
          Love Problem Diagnosis & Remedial Action Plan
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Select your exact relationship crisis below to receive an authentic Vedic diagnosis, root planetary cause, and time-tested spiritual remedy prescribed by Baba Ji.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Select Love & Relationship Crisis */}
        <div className="lg:col-span-6 bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-5">
            <h3 className="heading-mystic text-xl font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-rose-600" />
              <span>Select Your Relationship Crisis</span>
            </h3>
            <span className="text-[11px] font-bold px-2.5 py-0.5 bg-rose-50 text-rose-700 rounded-full border border-rose-200">
              100% Confidential
            </span>
          </div>

          <div className="space-y-4">
            {/* Crisis Type Options */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                Select Your Primary Concern (अपनी मुख्य समस्या चुनें)
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
                            {crisis.title}
                          </h4>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-rose-600 shrink-0"></span>
                          )}
                        </div>
                        <p className="text-[11px] text-amber-900 font-medium mt-0.5">
                          {crisis.hindiTitle}
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
                Current Separation / Communication Status
              </label>
              <select
                value={separationStatus}
                onChange={(e) => setSeparationStatus(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:bg-white focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 transition-all outline-none"
              >
                <option value="Completely Blocked on Phone & Social Media">Completely Blocked on Phone & Social Media (पूरी तरह ब्लॉक)</option>
                <option value="Cold Behavior, Constant Arguments & Avoiding Talk">Cold Behavior, Constant Arguments & Avoiding Talk (बातचीत बंद)</option>
                <option value="Family Forcing Marriage with Someone Else">Family Forcing Marriage with Someone Else (शादी कहीं और तय)</option>
                <option value="Living Separately / Divorce Court Notice Received">Living Separately / Divorce Court Notice Received (अलग रह रहे हैं)</option>
                <option value="Partner Under Outside Occult / Third-Person Control">Partner Under Outside Occult / Third-Person Control (सौतन/तीसरा व्यक्ति)</option>
              </select>
            </div>

            {/* Duration of Crisis */}
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                How Long Has This Crisis Persisted?
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
                    {dur.includes('Under 1 Week') ? '⚡ Under 1 Wk' : dur.includes('1 to 3') ? '1–3 Months' : '6+ Months'}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo verification switch */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-700 shrink-0" />
                <span className="text-xs font-bold text-amber-950">
                  Do you have partner's photo for remote ritual?
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
                {hasPhoto ? '✓ Yes, Photo Ready' : 'Name & DOB Only'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Divine Love Healing & Remedial Action Plan */}
        <div className="lg:col-span-6 bg-gradient-to-b from-white to-[#fffcf8] border border-amber-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-5">
            <h3 className="heading-mystic text-xl font-bold text-stone-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-600" />
              <span>Divine Love Healing & Remedial Plan</span>
            </h3>
            <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-300 flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
              <span>Verified Vedic Action Plan</span>
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
                <span>Planetary Blockage Diagnosis</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {activeCrisis.diagnosis}
              </p>
              <div className="mt-2 pt-2 border-t border-stone-200/60 text-[11px] text-amber-800 font-medium">
                <strong>Astrological Alignment:</strong> {activeCrisis.planetaryCause}
              </div>
            </div>

            {/* Prescribed Remedy */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-amber-950 font-bold">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Prescribed Vedic Ritual & Remedy</span>
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
                Consecrated Beej Mantra Invocation
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
              <span>Discuss Solution With Baba Ji on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="calculator-call-btn"
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-3.5 px-4 rounded-xl flex items-center justify-center space-x-2 text-sm shadow-md transition-all cursor-pointer active:scale-95 border border-amber-300"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>Direct Phone Call: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
