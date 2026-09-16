import React, { useState, useRef } from 'react';
import { Sparkles, ShieldCheck, Download, MessageCircle, Phone, Printer, RotateCcw, CheckCircle2, Lock, Flame, Heart, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/jyotishData';

interface RashiInfo {
  id: string;
  nameHi: string;
  nameGu: string;
  nameEn: string;
  rulerHi: string;
  rulerGu: string;
  rulerEn: string;
  glyph: string;
  beejMantra: string;
}

const RASHIS: RashiInfo[] = [
  { id: 'aries', nameHi: 'मेष (Aries)', nameGu: 'મેષ (Aries)', nameEn: 'Mesh (Aries)', rulerHi: 'मंगल देव', rulerGu: 'મંગળ દેવ', rulerEn: 'Mars', glyph: '♈', beejMantra: '॥ ॐ क्रां क्रीं क्रौं सः भौमाय नमः ॥' },
  { id: 'taurus', nameHi: 'वृषभ (Taurus)', nameGu: 'વૃષભ (Taurus)', nameEn: 'Vrishabh (Taurus)', rulerHi: 'शुक्र देव', rulerGu: 'શુક્ર દેવ', rulerEn: 'Venus', glyph: '♉', beejMantra: '॥ ॐ द्रां द्रीं द्रौं सः शुक्राय नमः ॥' },
  { id: 'gemini', nameHi: 'मिथुन (Gemini)', nameGu: 'મિથુન (Gemini)', nameEn: 'Mithun (Gemini)', rulerHi: 'बुध देव', rulerGu: 'બુધ દેવ', rulerEn: 'Mercury', glyph: '♊', beejMantra: '॥ ॐ ब्रां ब्रीં ब्रौं सः बुधाय नमः ॥' },
  { id: 'cancer', nameHi: 'कर्क (Cancer)', nameGu: 'કર્ક (Cancer)', nameEn: 'Kark (Cancer)', rulerHi: 'चंद्र देव', rulerGu: 'ચંદ્ર દેવ', rulerEn: 'Moon', glyph: '♋', beejMantra: '॥ ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः ॥' },
  { id: 'leo', nameHi: 'सिंह (Leo)', nameGu: 'સિંહ (Leo)', nameEn: 'Singh (Leo)', rulerHi: 'सूर्य देव', rulerGu: 'સૂર્ય દેવ', rulerEn: 'Sun', glyph: '♌', beejMantra: '॥ ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः ॥' },
  { id: 'virgo', nameHi: 'कन्या (Virgo)', nameGu: 'કન્યા (Virgo)', nameEn: 'Kanya (Virgo)', rulerHi: 'बुध देव', rulerGu: 'બુધ દેવ', rulerEn: 'Mercury', glyph: '♍', beejMantra: '॥ ॐ ऐं श्रीं श्रीं बुधाय नमः ॥' },
  { id: 'libra', nameHi: 'तुला (Libra)', nameGu: 'તુલા (Libra)', nameEn: 'Tula (Libra)', rulerHi: 'शुक्र देव', rulerGu: 'શુક્ર દેવ', rulerEn: 'Venus', glyph: '♎', beejMantra: '॥ ॐ वस्त्रं मे देहि शुक्राय नमः ॥' },
  { id: 'scorpio', nameHi: 'वृश्चिक (Scorpio)', nameGu: 'વૃશ્ચિક (Scorpio)', nameEn: 'Vrishchik (Scorpio)', rulerHi: 'मंगल देव', rulerGu: 'મંગળ દેવ', rulerEn: 'Mars', glyph: '♏', beejMantra: '॥ ॐ अं अंगारकाय नमः ॥' },
  { id: 'sagittarius', nameHi: 'धनु (Sagittarius)', nameGu: 'ધન (Sagittarius)', nameEn: 'Dhanu (Sagittarius)', rulerHi: 'बृहस्पति देव', rulerGu: 'ગુરુ દેવ', rulerEn: 'Jupiter', glyph: '♐', beejMantra: '॥ ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः ॥' },
  { id: 'capricorn', nameHi: 'मकर (Capricorn)', nameGu: 'મકર (Capricorn)', nameEn: 'Makar (Capricorn)', rulerHi: 'शनि देव', rulerGu: 'શનિ દેવ', rulerEn: 'Saturn', glyph: '♑', beejMantra: '॥ ॐ शं शनैश्चराय नमः ॥' },
  { id: 'aquarius', nameHi: 'कुंभ (Aquarius)', nameGu: 'કુંભ (Aquarius)', nameEn: 'Kumbh (Aquarius)', rulerHi: 'शनि देव', rulerGu: 'શનિ દેવ', rulerEn: 'Saturn', glyph: '♒', beejMantra: '॥ ॐ प्रां प्रीं प्रौं सः शनैश्चराय नमः ॥' },
  { id: 'pisces', nameHi: 'मीन (Pisces)', nameGu: 'મીન (Pisces)', nameEn: 'Meen (Pisces)', rulerHi: 'बृहस्पति देव', rulerGu: 'ગુરુ દેવ', rulerEn: 'Jupiter', glyph: '♓', beejMantra: '॥ ॐ बृं बृहस्पतये नमः ॥' }
];

interface SankalpFocus {
  id: string;
  icon: string;
  titleHi: string;
  titleGu: string;
  titleEn: string;
  verseHi: string;
  verseGu: string;
  verseEn: string;
}

const SANKALPS: SankalpFocus[] = [
  {
    id: 'harmony',
    icon: '💖',
    titleHi: 'दांपत्य व संबंध सौहार्द रक्षा',
    titleGu: 'દાંપત્ય અને સંબંધ સૌહાર્દ રક્ષા',
    titleEn: 'Relationship Harmony & Peace',
    verseHi: '॥ ॐ कामदेवाय विद्महे पुष्पबाणाय धीमहि तन्नोऽनंगः प्रचोदयात् ॥',
    verseGu: '॥ ૐ કામદેવાય વિદ્મહે પુષ્પબાણાય ધીમહિ તન્નોઽનંગઃ પ્રચોદયાત્ ॥',
    verseEn: '॥ Om Kaamadevaya Vidmahe Pushpabaanaya Dheemahi ॥'
  },
  {
    id: 'marriage',
    icon: '💍',
    titleHi: 'विवाह बाधा निवारण व परिवार सहमति',
    titleGu: 'વિવાહ વિલંબ મુક્તિ અને પારિવારિક સંમતિ',
    titleEn: 'Marriage Delay Relief & Family Accord',
    verseHi: '॥ कात्यायनि महामाये महायोगिन्यधीश्वरि नंदगोपसुतं देवि पतिं मे कुरु ते नमः ॥',
    verseGu: '॥ કાત્યાયનિ મહામાયે મહાયોગિન્યધીશ્વરિ નંદગોપસુતં દેવિ પતિં મે કુરુ તે નમઃ ॥',
    verseEn: '॥ Katyayani Mahamaye Mahayoginyadheeshwari Devi Namah ॥'
  },
  {
    id: 'protection',
    icon: '🛡️',
    titleHi: 'सकारात्मक ऊर्जा व दृष्टि दोष शांति',
    titleGu: 'સકારાત્મક ઊર્જા અને નજર દોષ શાંતિ',
    titleEn: 'Positive Aura & Evil Eye Shielding',
    verseHi: '॥ ॐ नवकुल नागदेव्यै नमः • सर्वबाधा प्रशमनं त्रैलोक्यस्याखिलेश्वरी ॥',
    verseGu: '॥ ૐ નવકુલ નાગદેવ્યૈ નમઃ • સર્વબાધા પ્રશમનં ત્રૈલોક્યસ્યાખિલેશ્વરી ॥',
    verseEn: '॥ Om Navakula Naagdevyai Namah • Sarvabadha Prashamanam ॥'
  },
  {
    id: 'growth',
    icon: '💼',
    titleHi: 'व्यापार-कर्म वृद्धि व आर्थिक स्थिरता',
    titleGu: 'વેપાર વૃદ્ધિ અને આર્થિક સ્થિરતા',
    titleEn: 'Career Progress & Financial Stability',
    verseHi: '॥ ॐ श्रीं ह्रीं क्लीं त्रिभुवन महालक्ष्म्यै अस्मांक दारिद्र्य नाशय प्रसीद नमः ॥',
    verseGu: '॥ ૐ શ્રીં હ્રીં ક્લીં ત્રિભુવન મહાલક્ષ્મ્યૈ દારિદ્ર્ય નાશય પ્રસીદ નમઃ ॥',
    verseEn: '॥ Om Shreem Hreem Kleem Tribhuvana Mahalakshmyai Namah ॥'
  }
];

export const BhojpatraKavach: React.FC = () => {
  const { lang } = useLanguage();
  const [devoteeName, setDevoteeName] = useState<string>('');
  const [selectedRashiId, setSelectedRashiId] = useState<string>('aries');
  const [selectedSankalpId, setSelectedSankalpId] = useState<string>('harmony');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generatedKavach, setGeneratedKavach] = useState<{
    name: string;
    rashi: RashiInfo;
    sankalp: SankalpFocus;
    tokenId: string;
    createdDate: string;
  } | null>(null);

  const kavachCardRef = useRef<HTMLDivElement>(null);

  const currentRashi = RASHIS.find((r) => r.id === selectedRashiId) || RASHIS[0];
  const currentSankalp = SANKALPS.find((s) => s.id === selectedSankalpId) || SANKALPS[0];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = devoteeName.trim();
    if (!cleanName) return;

    setIsGenerating(true);

    try {
      if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
        navigator.vibrate([30, 40, 50]);
      }
    } catch {
      // fallback
    }

    setTimeout(() => {
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const today = new Date().toLocaleDateString('hi-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      setGeneratedKavach({
        name: cleanName,
        rashi: currentRashi,
        sankalp: currentSankalp,
        tokenId: `NGD-BHOJ-${randomNum}`,
        createdDate: today
      });

      setIsGenerating(false);

      setTimeout(() => {
        if (kavachCardRef.current) {
          kavachCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 200);
    }, 1800);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  // WhatsApp formatted direct message
  const waName = generatedKavach?.name || devoteeName || 'भक्त';
  const waRashi = generatedKavach
    ? lang === 'gu-en'
      ? generatedKavach.rashi.nameGu
      : lang === 'en'
      ? generatedKavach.rashi.nameEn
      : generatedKavach.rashi.nameHi
    : currentRashi.nameHi;

  const waSankalp = generatedKavach
    ? lang === 'gu-en'
      ? generatedKavach.sankalp.titleGu
      : lang === 'en'
      ? generatedKavach.sankalp.titleEn
      : generatedKavach.sankalp.titleHi
    : currentSankalp.titleHi;

  const waToken = generatedKavach?.tokenId || 'NGD-BHOJ-PREMIUM';

  const waMessage =
    lang === 'gu-en'
      ? `પ્રણામ પૂજ્ય બાબાજી,\nમેં વેબસાઇટ પર મારા નામે 'નાગ-કવચ' ભોજપત્ર તૈયાર કર્યું છે.\n\nયજમાન નામ: ${waName}\nરાશિ: ${waRashi}\nસંકલ્પ: ${waSankalp}\nકવચ ટોકન: #${waToken}\n\nકૃપા કરીને આ ભોજપત્ર કવચને વિધિવત સિદ્ધ કરવાની પદ્ધતિ તથા સંકલ્પ પૂજન વિશે માર્ગદર્શન આપો.`
      : lang === 'en'
      ? `Pranam Baba Ji,\nI generated my personalized Sacred Vedic Bhojpatra Raksha Kavach on the portal.\n\nDevotee Name: ${waName}\nRashi: ${waRashi}\nSankalp Focus: ${waSankalp}\nKavach Token: #${waToken}\n\nPlease guide me on sanctifying this sacred Kavach with Vedic rituals.`
      : `प्रणाम पूज्य बाबा जी,\nमैंने वेबसाइट पर अपने नाम का 'नाग-कवच' सिद्ध भोजपत्र तैयार किया है।\n\nयजमान नाम: ${waName}\nराशि: ${waRashi}\nसंकल्प: ${waSankalp}\nकवच टोकन: #${waToken}\n\nकृपया इस भोजपत्र रक्षा-कवच को सिद्ध करने की वैदिक विधि एवं संकल्प मार्गदर्शन प्रदान करें।`;

  const waUrl = `https://wa.me/919714127309?text=${encodeURIComponent(waMessage)}`;

  return (
    <section
      id="bhojpatra-kavach"
      className="py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#fefce8]/60 via-[#fdfcf7] to-[#fefce8]/60"
    >
      {/* Background Decorative Aura */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 shadow-2xs mb-3">
            <span className="text-base">📜</span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-950 uppercase">
              {lang === 'gu-en'
                ? 'પવિત્ર વૈદિક સંકલ્પ પત્ર • ભોજપત્ર રક્ષા કવચ'
                : lang === 'en'
                ? 'Sacred Vedic Bhojpatra Protection Scroll'
                : 'पवित्र वैदिक संकल्प पत्र • व्यक्तिगत सिद्ध भोजपत्र कवच'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#2a2203] tracking-tight heading-mystic mb-3">
            {lang === 'gu-en' ? (
              <>
                વ્યક્તિગત <span className="text-amber-700 font-serif">‘નાગ-કવચ’</span> ભોજપત્ર
              </>
            ) : lang === 'en' ? (
              <>
                Personalized <span className="text-amber-700 font-serif">‘Naag-Kavach’</span> Bhojpatra
              </>
            ) : (
              <>
                व्यक्तिगत <span className="text-amber-700 font-serif">‘नाग-कवच’</span> सिद्ध भोजपत्र
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#544607] leading-relaxed">
            {lang === 'gu-en'
              ? 'આપનું નામ અને રાશિ દાખલ કરી પ્રાચીન સુવર્ણ ભોજપત્ર પર આપના નામનું સિદ્ધ વૈદિક રક્ષા કવચ અને મંત્ર પ્રગટ કરો.'
              : lang === 'en'
              ? 'Enter your name and sacred zodiac sign to manifest your consecrated Vedic protection scroll with authentic seed mantras.'
              : 'अपना नाम एवं राशि चुनकर प्राचीन स्वर्णिम भोजपत्र पर अपने नाम का सिद्ध रक्षा-कवच व विशिष्ट वैदिक बीज-मंत्र प्रकट करें।'}
          </p>
        </div>

        {/* Input Generator Form */}
        <div className="bg-white/95 rounded-2xl sm:rounded-3xl border border-amber-300/80 shadow-lg p-5 sm:p-8 mb-8">
          <form onSubmit={handleGenerate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Devotee Name Input */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-amber-950 mb-1.5">
                  {lang === 'gu-en' ? '૧. આપનું પવિત્ર નામ (યજમાન):' : lang === 'en' ? '1. Devotee Full Name:' : '१. आपका नाम (यजमान):'}
                </label>
                <input
                  type="text"
                  required
                  value={devoteeName}
                  onChange={(e) => setDevoteeName(e.target.value)}
                  placeholder={lang === 'gu-en' ? 'દા.ત. રાહુલ શર્મા' : lang === 'en' ? 'e.g. Rahul Sharma' : 'उदा. राहुल शर्मा'}
                  className="w-full px-4 py-3 rounded-xl border border-amber-300/80 bg-amber-50/30 text-[#2a2203] font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder:text-amber-800/40"
                />
              </div>

              {/* Rashi Select */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-amber-950 mb-1.5">
                  {lang === 'gu-en' ? '૨. આપની જન્મ રાશિ (Zodiac):' : lang === 'en' ? '2. Sacred Zodiac Sign (Rashi):' : '२. आपकी जन्म अथवा बोलती राशि:'}
                </label>
                <select
                  value={selectedRashiId}
                  onChange={(e) => setSelectedRashiId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-amber-300/80 bg-amber-50/30 text-[#2a2203] font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all cursor-pointer"
                >
                  {RASHIS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.glyph} {lang === 'gu-en' ? r.nameGu : lang === 'en' ? r.nameEn : r.nameHi} (स्वामी: {lang === 'gu-en' ? r.rulerGu : lang === 'en' ? r.rulerEn : r.rulerHi})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sankalp / Intention Selection */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-amber-950 mb-2">
                {lang === 'gu-en'
                  ? '૩. મુખ્ય સંકલ્પ ઉદ્દેશ્ય પસંદ કરો:'
                  : lang === 'en'
                  ? '3. Core Sankalp Blessing Focus:'
                  : '३. मुख्य रक्षा संकल्प एवं आशीर्वाद उद्देश्य:'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {SANKALPS.map((s) => {
                  const isSelected = s.id === selectedSankalpId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSankalpId(s.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 cursor-pointer ${
                        isSelected
                          ? 'bg-amber-600 text-white border-amber-600 shadow-md font-bold ring-2 ring-amber-400/40'
                          : 'bg-white hover:bg-amber-50/70 text-[#2a2203] border-amber-200/90 font-semibold'
                      }`}
                    >
                      <span className="text-xl shrink-0">{s.icon}</span>
                      <span className="text-xs sm:text-xs leading-snug">
                        {lang === 'gu-en' ? s.titleGu : lang === 'en' ? s.titleEn : s.titleHi}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Generate Action Button */}
            <div className="text-center pt-2">
              <button
                type="submit"
                disabled={isGenerating}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-amber-600/25 transition-all hover:scale-102 active:scale-98 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isGenerating ? (
                  <>
                    <RotateCcw className="w-5 h-5 animate-spin text-amber-200" />
                    <span>
                      {lang === 'gu-en'
                        ? 'ભોજપત્ર કવચ તૈયાર થઈ રહ્યું છે... (પ્રતીક્ષા કરો)'
                        : lang === 'en'
                        ? 'Consecrating Sacred Bhojpatra Scroll...'
                        : 'सिद्ध भोजपत्र कवच तैयार हो रहा है... (प्रतीक्षा करें)'}
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-amber-200" />
                    <span>
                      {lang === 'gu-en'
                        ? 'શ્રી ભોજપત્ર કવચ પ્રગટ કરો'
                        : lang === 'en'
                        ? 'Manifest Sacred Bhojpatra Scroll'
                        : 'श्री भोजपत्र रक्षा-कवच प्रकट करें'}
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Revealed Personalized Bhojpatra Scroll */}
        {generatedKavach && (
          <div ref={kavachCardRef} className="space-y-6 animate-in fade-in duration-600">
            {/* The Ancient Golden Bhojpatra Document */}
            <div className="relative p-6 sm:p-10 rounded-2xl sm:rounded-3xl border-4 border-double border-amber-600/80 shadow-2xl bg-gradient-to-br from-[#fbf4db] via-[#f7e8b9] to-[#eed797] text-[#2c1d04] overflow-hidden select-text">
              {/* Subtle Parchment Texture & Sanskrit Watermark */}
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none flex items-center justify-center text-7xl font-serif leading-none">
                ॥ ॐ नवकुल नागदेव्यै नमः ॥
              </div>
              <div className="absolute top-2 left-2 text-amber-900/30 text-xs font-serif pointer-events-none">
                ॥ ॐ नमः शिवाय ॥
              </div>
              <div className="absolute top-2 right-2 text-amber-900/30 text-xs font-serif pointer-events-none">
                ॥ ॐ महालक्ष्म्यै नमः ॥
              </div>
              <div className="absolute bottom-2 left-2 text-amber-900/30 text-xs font-serif pointer-events-none">
                ॥ श्री क्षेत्र उज्जैन ॥
              </div>
              <div className="absolute bottom-2 right-2 text-amber-900/30 text-xs font-serif pointer-events-none">
                ॥ सिद्ध पीठ हरद्वार ॥
              </div>

              {/* Scroll Ornate Frame Header */}
              <div className="text-center pb-4 mb-4 border-b-2 border-amber-700/40 relative">
                <div className="inline-flex items-center justify-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-950 mb-1">
                  <span>🐍</span>
                  <span>श्री माँ नागदेवी सिद्ध पीठ • वैदिक रक्षा आशीर्वाद पत्र</span>
                  <span>🐍</span>
                </div>
                <div className="text-xl sm:text-2xl font-serif font-extrabold text-amber-950 tracking-wide mt-1">
                  ॥ व्यक्तिगत सिद्ध नाग-कवच भोजपत्र ॥
                </div>
                <div className="text-[11px] text-amber-900/80 mt-1 font-mono">
                  प्रमाणित टोकन: #{generatedKavach.tokenId} • दिनांक: {generatedKavach.createdDate}
                </div>
              </div>

              {/* Devotee Consecration Name Plate */}
              <div className="bg-amber-900/10 rounded-xl p-3.5 sm:p-4 border border-amber-800/30 text-center mb-5">
                <span className="text-xs uppercase font-bold text-amber-900 block mb-0.5">
                  ॥ अभिमंत्रित संकल्प यजमान ॥
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-[#2a2203] font-serif tracking-wide py-0.5">
                  {generatedKavach.name}
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 text-xs font-bold text-amber-950">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-800/15 border border-amber-800/30">
                    <span>{generatedKavach.rashi.glyph}</span>
                    <span>राशि: {lang === 'gu-en' ? generatedKavach.rashi.nameGu : lang === 'en' ? generatedKavach.rashi.nameEn : generatedKavach.rashi.nameHi}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-800/15 border border-amber-800/30">
                    <span>ग्रह स्वामी: {lang === 'gu-en' ? generatedKavach.rashi.rulerGu : lang === 'en' ? generatedKavach.rashi.rulerEn : generatedKavach.rashi.rulerHi}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-800/15 border border-amber-800/30">
                    <span>{generatedKavach.sankalp.icon}</span>
                    <span>संकल्प: {lang === 'gu-en' ? generatedKavach.sankalp.titleGu : lang === 'en' ? generatedKavach.sankalp.titleEn : generatedKavach.sankalp.titleHi}</span>
                  </span>
                </div>
              </div>

              {/* Central Geometric Vedic Yantra Graphic */}
              <div className="my-5 flex flex-col items-center justify-center text-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-amber-800/50 bg-[#fff5d6] flex items-center justify-center shadow-inner p-2">
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-amber-700/60" />
                  <div className="absolute inset-3 rounded-full border border-amber-800/30" />
                  <div className="flex flex-col items-center justify-center space-y-1 z-10 select-none">
                    <span className="text-2xl sm:text-3xl">🔱</span>
                    <span className="font-serif font-black text-xs sm:text-sm text-amber-950">
                      ॥ ॐ श्रीं क्लीं ॥
                    </span>
                    <span className="text-[10px] font-bold text-amber-900/90 tracking-wider">
                      सिद्ध नाग यंत्र
                    </span>
                    <span className="text-base sm:text-lg text-amber-800">
                      {generatedKavach.rashi.glyph}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sacred Rashi Seed Mantra & Vedic Protection Stotra */}
              <div className="space-y-3 mb-6">
                <div className="bg-white/80 p-3.5 rounded-xl border border-amber-700/30 text-center">
                  <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-wide block mb-1">
                    ॥ राशि स्वामी सिद्ध बीज-मंत्र ॥
                  </span>
                  <div className="text-sm sm:text-base font-bold text-amber-950 font-serif">
                    {generatedKavach.rashi.beejMantra}
                  </div>
                </div>

                <div className="bg-amber-100/70 p-3.5 rounded-xl border border-amber-700/30 text-center">
                  <span className="text-[11px] font-extrabold text-amber-900 uppercase tracking-wide block mb-1">
                    ॥ संकल्प रक्षण श्लोक ॥
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-amber-950 font-serif leading-relaxed">
                    {generatedKavach.sankalp.verseHi}
                  </div>
                </div>
              </div>

              {/* 4 Sacred Protective Pillars Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-amber-700/30 text-center text-[11px] font-bold text-amber-950">
                <div className="p-2 rounded-lg bg-white/50 border border-amber-600/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mx-auto mb-0.5" />
                  <span>सकारात्मक आभा</span>
                </div>
                <div className="p-2 rounded-lg bg-white/50 border border-amber-600/20">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700 mx-auto mb-0.5" />
                  <span>दृष्टि दोष शांति</span>
                </div>
                <div className="p-2 rounded-lg bg-white/50 border border-amber-600/20">
                  <Heart className="w-3.5 h-3.5 text-red-600 mx-auto mb-0.5" />
                  <span>दांपत्य सौहार्द</span>
                </div>
                <div className="p-2 rounded-lg bg-white/50 border border-amber-600/20">
                  <Flame className="w-3.5 h-3.5 text-orange-600 mx-auto mb-0.5" />
                  <span>हवन आहुति संकल्प</span>
                </div>
              </div>

              {/* Policy-Compliant Devotional Disclaimer */}
              <div className="mt-5 pt-3 border-t border-amber-700/20 text-[10px] text-amber-900/70 text-center leading-normal">
                ॥ यह एक सनातन वैदिक प्रार्थना व आध्यात्मिक आशीर्वाद पत्र है जो यजमान की आत्मिक शांति, सकारात्मक ऊर्जा और ईश्वर-निष्ठा हेतु तैयार किया गया है। इसका उद्देश्य किसी भी प्रकार के अंधविश्वास को बढ़ावा देना नहीं है ॥
              </div>
            </div>

            {/* High Conversion Action Bar */}
            <div className="bg-white rounded-2xl border border-amber-300 p-4 sm:p-6 shadow-md">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                {/* 1. Direct WhatsApp to Baba Ji */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>
                    {lang === 'gu-en'
                      ? 'આ કવચ પૂજ્ય બાબાજી પાસેથી સિદ્ધ કરાવો (WhatsApp)'
                      : lang === 'en'
                      ? 'Sanctify This Scroll via Baba Ji (WhatsApp)'
                      : 'इस भोजपत्र को पूज्य बाबा जी से सिद्ध करवाएं (WhatsApp)'}
                  </span>
                </a>

                {/* 2. Print / Save / Screenshot Friendly */}
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl bg-amber-100 hover:bg-amber-200/80 text-amber-950 font-bold text-xs sm:text-sm border border-amber-300 transition-all cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>{lang === 'gu-en' ? 'પ્રિન્ટ / સેવ કરો' : lang === 'en' ? 'Print / Save' : 'प्रिंट / सेव करें'}</span>
                </button>

                {/* 3. Direct Helpline Call */}
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>

                {/* 4. Reset Button */}
                <button
                  type="button"
                  onClick={() => setGeneratedKavach(null)}
                  className="inline-flex items-center justify-center p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold transition-all cursor-pointer"
                  title="नया कवच बनाएं"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
