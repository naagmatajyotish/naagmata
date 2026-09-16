import React, { useState } from 'react';
import { ShieldAlert, Compass, Sparkles, AlertTriangle, CheckCircle2, RotateCcw, MessageCircle, Phone, Activity, Zap } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';

interface Symptom {
  id: string;
  titleHi: string;
  titleEn: string;
  titleGu: string;
  severity: number;
  dosha: string;
}

const SYMPTOMS: Symptom[] = [
  {
    id: 'love-drift',
    titleHi: 'रिश्ते में अचानक दूरी, मनमुटाव या तीसरा व्यक्ति आना',
    titleEn: 'Sudden coldness, misunderstandings, or third-party interference in love',
    titleGu: 'સંબંધમાં અચાનક અંતર, ઝઘડા કે ત્રીજી વ્યક્તિનો પ્રવેશ',
    severity: 25,
    dosha: 'शुक्र-राहु पीड़ा (Venus-Rahu Discord)',
  },
  {
    id: 'sleep-restless',
    titleHi: 'रात को अचानक नींद खुलना, भारीपन या बुरे सपने',
    titleEn: 'Sleep disturbances, heavy chest, or sudden eerie nightmares',
    titleGu: 'રાત્રે અચાનક ઊંઘ ઉડવી, છાતીમાં ભાર કે ડરામણા સપના',
    severity: 20,
    dosha: 'चंद्र-केतु ग्रहण दोष (Lunar Shadow)',
  },
  {
    id: 'sudden-block',
    titleHi: 'मेहनत के बाद भी बने-बनाए काम अंतिम क्षण में अटकना',
    titleEn: 'Last-minute failures, career stagnation, and financial blockages',
    titleGu: 'મહેનત છતાં બનેલા કામ છેલ્લી ઘડીએ અટકી જવા',
    severity: 20,
    dosha: 'शनि दृष्टि व कर्म बंधन (Saturn Blockage)',
  },
  {
    id: 'evil-eye',
    titleHi: 'तीव्र नजर दोष, ईर्ष्या या किसी द्वारा कराई बाधा का अंदेशा',
    titleEn: 'Evil eye (Nazar Dosha), intense jealousy, or suspected occult impact',
    titleGu: 'તીવ્ર નજર દોષ, ઈર્ષ્યા કે મેલી વિદ્યાની શંકા',
    severity: 30,
    dosha: 'तीव्र नजर व गुप्त तंत्र बाधा (Evil Eye & Infiltration)',
  },
  {
    id: 'home-discord',
    titleHi: 'घर में प्रवेश करते ही अशांति, चिड़चिड़ापन और नकारात्मक माहौल',
    titleEn: 'Immediate heaviness, anger, and tension when entering home',
    titleGu: 'ઘરમાં પ્રવેશતાં જ અશાંતિ, ગુસ્સો અને નકારાત્મક વાતાવરણ',
    severity: 25,
    dosha: 'वास्तु व पितृ अशांति (Vastu & Ancestral Turmoil)',
  },
  {
    id: 'mental-fog',
    titleHi: 'लगातार सिरदर्द, सुस्ती, भय और निर्णय लेने में असमर्थता',
    titleEn: 'Persistent mental fog, unexplained anxiety, and sudden fatigue',
    titleGu: 'સતત માથાનો દુખાવો, આળસ, ડર અને માનસિક તણાવ',
    severity: 15,
    dosha: 'प्राण ऊर्जा क्षीणता (Vital Prana Depletion)',
  },
];

export const AuraEnergyScanner: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['love-drift']);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStageText, setScanStageText] = useState('');
  const [hasResult, setHasResult] = useState(false);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((item) => item !== id) : prev) : [...prev, id]
    );
  };

  const startScan = () => {
    setIsScanning(true);
    setHasResult(false);
    setScanProgress(0);

    const stages =
      lang === 'hi'
        ? [
            'नाड़ी मंडल व कॉस्मिक ऑरा तरंगों का संकलन...',
            'राहु-केतु व शनि छाया प्रभाव की गणना...',
            'नकारात्मक ऊर्जा व नजर दोष घनत्व का मापन...',
            'माँ नागदेवी सिद्ध कवच वैदिक डायग्नोसिस पूर्ण...',
          ]
        : lang === 'en'
        ? [
            'Aligning subtle cosmic aura frequencies...',
            'Measuring Rahu-Ketu shadow interference...',
            'Analyzing evil eye and negative density...',
            'Finalizing Maa Naagdevi Vedic Diagnostic Report...',
          ]
        : [
            'નાડી મંડળ અને ઓરા તરંગોનું વિશ્લેષણ...',
            'રાહુ-કેતુ અને શનિ છાયાની ગણતરી...',
            'નજર દોષ અને નકારાત્મક ઉર્જાની તપાસ...',
            'માઁ નાગદેવી વૈદિક રિપોર્ટ તૈયાર થઈ રહ્યો છે...',
          ];

    let currentProgress = 0;
    const interval = window.setInterval(() => {
      currentProgress += 4;
      setScanProgress(currentProgress);

      const stageIndex = Math.min(Math.floor(currentProgress / 26), stages.length - 1);
      setScanStageText(stages[stageIndex]);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsScanning(false);
          setHasResult(true);
        }, 500);
      }
    }, 90);
  };

  const resetScan = () => {
    setHasResult(false);
    setIsScanning(false);
    setScanProgress(0);
  };

  // Calculate stats based on chosen symptoms
  const selectedObjects = SYMPTOMS.filter((s) => selectedSymptoms.includes(s.id));
  const rawSeverity = selectedObjects.reduce((acc, curr) => acc + curr.severity, 0);
  const negativePercentage = Math.min(Math.max(rawSeverity + 18, 48), 96);
  const auraVitality = 100 - negativePercentage;

  const whatsappReportMessage =
    lang === 'hi'
      ? `प्रणाम बाबा जी, मैंने वेबसाइट पर ऑरा व ऊर्जा स्कैन किया है।\n- नकारात्मक ऊर्जा प्रभाव: ${negativePercentage}%\n- प्राथमिक दोष: ${selectedObjects.map((s) => s.dosha).join(', ')}\nकृपया मुझे तत्काल वैदिक काट एवं समाधान बताएं।`
      : lang === 'en'
      ? `Pranam Baba Ji, I ran the Aura & Negative Energy Scanner on your site.\n- Negative Energy Index: ${negativePercentage}%\n- Planetary Afflictions: ${selectedObjects.map((s) => s.dosha).join(', ')}\nPlease guide me with the sacred Vedic remedy.`
      : `પ્રણામ બાબા જી, મેં વેબસાઇટ પર ઓરા સ્કેનર કર્યું છે.\n- નકારાત્મક ઉર્જા: ${negativePercentage}%\n- દોષ: ${selectedObjects.map((s) => s.dosha).join(', ')}\nકૃપા કરીને તાત્કાલિક વૈદિક ઉપાય અને આશીર્વાદ આપો.`;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
    whatsappReportMessage
  )}`;

  return (
    <section
      id="aura-scanner-section"
      className="w-full max-w-5xl mx-auto px-3.5 sm:px-6 my-10 sm:my-16"
    >
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 border-2 border-amber-500/50 shadow-2xl p-5 sm:p-8 md:p-10 text-white">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-600/10 blur-3xl pointer-events-none rounded-full" />

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-bold mb-3 shadow-2xs">
            <Activity className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>
              {lang === 'hi'
                ? '॥ वैदिक ऑरा व नकारात्मक ऊर्जा स्कैनर ॥'
                : lang === 'en'
                ? '॥ Vedic Aura & Negative Energy Diagnostic Scanner ॥'
                : '॥ વૈદિક ઓરા અને નકારાત્મક ઉર્જા સ્કેનર ॥'}
            </span>
          </div>

          <h2 className="heading-mystic text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-100 mb-2 leading-snug">
            {lang === 'hi'
              ? 'अपनी ऑरा एवं गुप्त ऊर्जा रुकावटों की जांच करें'
              : lang === 'en'
              ? 'Scan Your Subtle Aura & Hidden Energy Blockages'
              : 'તમારી ઓરા અને છુપી નકારાત્મક ઉર્જા તપાસો'}
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            {lang === 'hi'
              ? 'जब जीवन में अचानक रिश्ते टूटने लगें या हर काम में रुकावट आए, तो अक्सर नकारात्मक नजर या ग्रह दोष सक्रिय होते हैं। अपने लक्षण चुनें और ऊर्जा स्तर मापें।'
              : lang === 'en'
              ? 'When relationships collapse unexpectedly or success stalls, unaligned astral shadows or evil eye are often responsible. Select your symptoms to reveal your aura status.'
              : 'જ્યારે જીવનમાં અચાનક સંબંધો તૂટે કે કામ અટકે, ત્યારે નજર દોષ કે ગ્રહ પીડા સક્રિય હોય છે. તમારા લક્ષણો પસંદ કરો અને ઉર્જા સ્તર જાણો.'}
          </p>
        </div>

        {/* STEP 1: Select Symptoms (When not scanning and no result) */}
        {!isScanning && !hasResult && (
          <div className="relative z-10">
            <div className="mb-4 flex items-center justify-between text-xs text-amber-300 font-semibold">
              <span>
                {lang === 'hi'
                  ? '१. अपने अनुभव के लक्षण चुनें (कम से कम १):'
                  : lang === 'en'
                  ? '1. Select symptoms you are experiencing:'
                  : '૧. તમને થતા અનુભવો પસંદ કરો:'}
              </span>
              <span className="text-stone-400 font-normal">
                {selectedSymptoms.length} {lang === 'hi' ? 'चयनित' : 'selected'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6">
              {SYMPTOMS.map((item) => {
                const isSelected = selectedSymptoms.includes(item.id);
                const title =
                  lang === 'hi'
                    ? item.titleHi
                    : lang === 'en'
                    ? item.titleEn
                    : item.titleGu;

                return (
                  <button
                    key={item.id}
                    onClick={() => toggleSymptom(item.id)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl text-left text-xs sm:text-sm transition-all duration-200 cursor-pointer border ${
                      isSelected
                        ? 'bg-amber-500/20 border-amber-400 text-amber-100 shadow-md shadow-amber-900/30'
                        : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700/80 text-stone-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                        isSelected
                          ? 'bg-amber-500 border-amber-400 text-stone-950 font-bold'
                          : 'border-stone-600'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span className="leading-snug">{title}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center px-2">
              <button
                onClick={startScan}
                className="group relative w-full sm:w-auto max-w-md inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-extrabold text-xs sm:text-base shadow-xl hover:shadow-2xl transition-all active:scale-95 cursor-pointer border-2 border-amber-300 select-none text-center"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-stone-950 text-stone-950 group-hover:animate-bounce shrink-0 self-center" />
                <span className="leading-normal font-extrabold whitespace-nowrap">
                  {lang === 'hi'
                    ? 'वैदिक ऑरा स्कैन शुरू करें'
                    : lang === 'en'
                    ? 'Begin Vedic Aura Scan'
                    : 'ઓરા સ્કેન શરૂ કરો'}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-stone-950/15 px-2 py-0.5 rounded-full shrink-0">
                  {lang === 'hi' ? 'स्कैन करें' : lang === 'en' ? 'Scan Now' : 'હમણાં'}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Actively Scanning Animation */}
        {isScanning && (
          <div className="relative z-10 py-10 flex flex-col items-center text-center">
            {/* Cosmic Radar Rings */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-amber-500/20 animate-ping" />
              <div className="absolute inset-4 rounded-full border-2 border-amber-400/40 animate-spin [animation-duration:8s]" />
              <div className="absolute inset-8 rounded-full border border-orange-500/30" />
              <div className="absolute inset-0 rounded-full border-t-2 border-amber-400 animate-spin [animation-duration:1.5s]" />

              {/* Central Counter */}
              <div className="relative flex flex-col items-center">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-400">
                  {scanProgress}%
                </span>
                <span className="text-[10px] text-amber-200/80 uppercase tracking-widest mt-1">
                  Scanning
                </span>
              </div>
            </div>

            {/* Dynamic Stage Text */}
            <div className="bg-stone-800/80 px-4 py-2 rounded-full border border-amber-500/30 text-amber-200 text-xs sm:text-sm font-medium flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400 animate-spin" />
              <span>{scanStageText}</span>
            </div>
          </div>
        )}

        {/* STEP 3: Results & Action Recommendation */}
        {!isScanning && hasResult && (
          <div className="relative z-10 bg-stone-900/90 rounded-2xl p-5 sm:p-7 border border-amber-500/40 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between border-b border-stone-800 pb-6 mb-6">
              {/* Score Indicator */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-full bg-red-950/60 border-2 border-red-500 flex flex-col items-center justify-center text-center shrink-0">
                  <span className="font-mono text-2xl font-black text-red-400">
                    {negativePercentage}%
                  </span>
                  <span className="text-[9px] text-red-200 uppercase font-bold">
                    नकारात्मक
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base">
                    <ShieldAlert className="w-4 h-4 text-red-400" />
                    <span>
                      {lang === 'hi'
                        ? 'तीव्र ऊर्जा अवरोध एवं ग्रह पीड़ा चिन्हित'
                        : lang === 'en'
                        ? 'High Negative Energy Interference Detected'
                        : 'તીવ્ર નકારાત્મક ઉર્જા અને ગ્રહ દોષ મળ્યા'}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 mt-1 max-w-md">
                    {lang === 'hi'
                      ? `आपकी ऑरा जीवनी शक्ति केवल ${auraVitality}% सक्रिय है। नकारात्मक ऊर्जा व नजर दोष के कारण विचारों में द्वंद्व व संबंधों में अलगाव बढ़ रहा है।`
                      : `Aura vitality is suppressed at ${auraVitality}%. External malefic influences are obstructing harmony and emotional clarity.`}
                  </p>
                </div>
              </div>

              {/* Retest */}
              <button
                onClick={resetScan}
                className="text-stone-400 hover:text-amber-300 text-xs flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>
                  {lang === 'hi' ? 'पुनः लक्षण बदलें' : lang === 'en' ? 'Modify & Retest' : 'ફરી તપાસો'}
                </span>
              </button>
            </div>

            {/* Identified Influences */}
            <div className="mb-6">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-2.5">
                {lang === 'hi' ? 'चिन्हित प्रमुख ग्रह एवं ऊर्जा दोष:' : 'Primary Planetary Afflictions:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedObjects.map((s) => (
                  <span
                    key={s.id}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-medium"
                  >
                    <AlertTriangle className="w-3 h-3 text-red-400" />
                    <span>{s.dosha}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Vedic Remedy Prescription */}
            <div className="bg-amber-950/40 rounded-xl p-4 border border-amber-500/30 mb-6 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              <strong className="text-amber-300 block mb-1">
                {lang === 'hi' ? '॥ पूज्य बाबा जी द्वारा वैदिक समाधान संस्तुति ॥' : 'Vedic Remedy Recommendation:'}
              </strong>
              {lang === 'hi'
                ? 'इस ऊर्जा अवरोध को तुरंत प्रभावहीन करने के लिए "श्री माँ नागदेवी रक्षा बंधन" एवं "सिद्ध शुक्र-महामृत्युंजय आहुति" अति आवश्यक है। इससे २४ से ४८ घंटे में संबंधों व मन में शांति पुनः स्थापित होती है।'
                : 'To neutralize this astral blockage, the Maa Naagdevi Raksha Bandhan ritual and Shukra Havan are recommended to restore emotional peace within 24 to 48 hours.'}
            </div>

            {/* Dual CTAs: WhatsApp & Direct Call */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>
                  {lang === 'hi'
                    ? 'यह रिपोर्ट बाबा जी को व्हाट्सएप भेजें'
                    : 'Send This Diagnostic to Baba Ji'}
                </span>
              </a>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-stone-950 font-bold text-sm shadow-md transition-transform active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-stone-950" />
                <span>
                  {lang === 'hi'
                    ? 'तत्काल समाधान हेतु कॉल करें'
                    : 'Call Baba Ji Directly for Remedy'}
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
