import React from 'react';
import { Shield, Award, Users, HeartHandshake, Lock, PhoneCall, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';

export const WhyChooseUs: React.FC = () => {
  const { lang } = useLanguage();

  const points = [
    {
      icon: Award,
      title:
        lang === 'hi'
          ? '३५+ वर्षों की अखंड वैदिक साधना'
          : lang === 'gu-en'
          ? '૩૫+ વર્ષનો આધ્યાત્મિક વારસો (35+ Yrs Lineage)'
          : '35+ Years Sacred Vedic Lineage',
      description:
        lang === 'hi'
          ? 'सिद्ध पीठों व पारंपरिक गुरुओं से प्राप्त प्रामाणिक ज्योतिष, महाहवन व गृहदोष शांति ज्ञान।'
          : lang === 'gu-en'
          ? 'સિદ્ધ પીઠ અને પરંપરાગત ગુરુઓના સાનિધ્યમાં મેળવેલ ઊંડું જ્યોતિષ અને યજ્ઞ વિજ્ઞાન.'
          : 'Learned under traditional masters and Siddha Peeth Gurus with deep knowledge in Vedic astrology and planetary remedies.'
    },
    {
      icon: Lock,
      title:
        lang === 'hi'
          ? '१००% पूर्ण गोपनीयता की शपथ'
          : lang === 'gu-en'
          ? '૧૦૦% સંપૂર્ણ ગુપ્તતા (Confidentiality Oath)'
          : 'Sacred Confidentiality Oath',
      description:
        lang === 'hi'
          ? 'आपकी पहचान, जन्म विवरण, पारिवारिक स्थिति व बातचीत आजीवन पूर्ण रूप से गुप्त रखी जाती है।'
          : lang === 'gu-en'
          ? 'તમારી ઓળખ, જન્મ તારીખ, અંગત સમસ્યાઓ અને વાતચીત સંપૂર્ણપણે ગુપ્ત રાખવામાં આવે છે.'
          : 'Your identity, birth details, personal concerns, and communications are held with complete confidentiality and privacy.'
    },
    {
      icon: Shield,
      title:
        lang === 'hi'
          ? 'विशुद्ध सात्त्विक वैदिक पद्धति'
          : lang === 'gu-en'
          ? 'સાત્ત્વિક અને વૈદિક વિધાન (Sattvic & Pure)'
          : 'Ethical & Sattvic Methods',
      description:
        lang === 'hi'
          ? 'हम केवल सात्त्विक मंत्र, शांति हवन व शुभ ग्रहों के सकारात्मक उपाय करते हैं।'
          : lang === 'gu-en'
          ? 'કોઈ આડઅસર વગર શુદ્ધ વૈદિક હવન, મંત્ર જાપ અને ગ્રહદોષ શાંતિ દ્વારા સમાધાન.'
          : 'We strictly practice peaceful, benevolent Vedic rituals that promote emotional harmony, clarity, and domestic tranquility.'
    },
    {
      icon: Users,
      title:
        lang === 'hi'
          ? 'भारत व वैश्विक भक्तों का भरोसा'
          : lang === 'gu-en'
          ? 'વિશ્વભરના એનઆરઆઈ ભક્તો (Global NRI Devotees)'
          : 'Worldwide Devotee Community',
      description:
        lang === 'hi'
          ? 'भारत, अमेरिका, ब्रिटेन, कनाडा, ऑस्ट्रेलिया और खाड़ी देशों के हजारों संतुष्ट परिवार।'
          : lang === 'gu-en'
          ? 'ગુજરાત, મુંબઈ તેમજ યુકે, યુએસએ, કેનેડા અને ઓસ્ટ્રેલિયાના હજારો ગુજરાતી પરિવારોનો વિશ્વાસ.'
          : 'Devotees across India, USA, UK, Canada, Australia, and UAE consult Baba Ji for spiritual peace and family harmony.'
    },
    {
      icon: HeartHandshake,
      title:
        lang === 'hi'
          ? 'संवेदनशील व धैर्यपूर्ण परामर्श'
          : lang === 'gu-en'
          ? 'ધૈર્ય અને સંવેદનાપૂર્ણ માર્ગદર્શન (Compassionate Counsel)'
          : 'Compassionate Astrological Counseling',
      description:
        lang === 'hi'
          ? 'बाबा जी प्रत्येक व्यक्ति की व्यथा को अत्यंत आत्मीयता से सुनकर सटीक आध्यात्मिक मार्ग प्रशस्त करते हैं।'
          : lang === 'gu-en'
          ? 'બાબાજી તમારી દરેક મુશ્કેલીને શાંતિથી સાંભળી શાસ્ત્રોક્ત અને વ્યવહારુ રસ્તો બતાવે છે.'
          : 'Baba Ji listens with deep patience and empathy, analyzing the underlying planetary influences affecting your situation.'
    },
    {
      icon: PhoneCall,
      title:
        lang === 'hi'
          ? '२४/७ सीधा संपर्क व परामर्श'
          : lang === 'gu-en'
          ? '૨૪/૭ બાબાજી સાથે સીધો સંપર્ક (Direct Access)'
          : '24/7 Direct Accessibility',
      description:
        lang === 'hi'
          ? 'किसी बिचौलिए के बिना, सीधे पूज्य बाबा जी से फोन या WhatsApp पर बात करें।'
          : lang === 'gu-en'
          ? 'વચ્ચે કોઈ એજન્ટ વિના, સીધા બાબાજી સાથે ફોન અથવા WhatsApp પર વાત કરો.'
          : 'Connect directly with Baba Ji on Phone or WhatsApp for personal guidance and respectful astrological counsel.'
    }
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto bg-stone-50/70 border-y border-stone-200/80 transition-colors duration-400 w-full overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>
            {lang === 'hi'
              ? 'श्री माँ नागदेवी की पावन कृपा व विश्वसनीयता'
              : lang === 'gu-en'
              ? 'માં નાગદેવીની પાવન કૃપા અને વિશ્વાસ (Divine Trust)'
              : 'Divine Sanctity & Trust Under Maa Naagdevi'}
          </span>
        </div>
        <h2 className="heading-mystic text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 max-w-4xl mx-auto leading-snug sm:leading-tight text-balance">
          {lang === 'hi' ? (
            <>
              नागमाता ज्योतिष पर <span className="whitespace-nowrap">क्यों भरोसा करते हैं भक्त?</span>
            </>
          ) : lang === 'gu-en' ? (
            <>
              નાગમાતા જ્યોતિષ પર <span className="whitespace-nowrap">કેમ વિશ્વાસ કરે છે હજારો ભક્તો?</span>
            </>
          ) : (
            <>
              Why Worldwide Devotees Trust <span className="whitespace-nowrap">Naagmata Jyotish</span>
            </>
          )}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          {lang === 'hi'
            ? 'दशकों की वैदिक तपस्या, उच्च नैतिक मूल्य व हजारों सुखी परिवारों की शुभकामनाओं का आधार।'
            : lang === 'gu-en'
            ? 'દાયકાઓની અખંડ તપસ્યા, શાસ્ત્રોક્ત પદ્ધતિ અને હજારો સુખી પરિવારોના આશીર્વાદ.'
            : 'Proven spiritual remedies backed by decades of Vedic tapasya, high moral integrity, and thousands of joyful families.'}
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

      {/* Numerical Stats Counters - Balanced & Aligned */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        <div className="bg-white border border-amber-200/80 p-5 sm:p-6 rounded-3xl shadow-xs flex flex-col items-center justify-center min-h-[130px]">
          <span className="heading-mystic text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block mb-1 whitespace-nowrap">
            {CONTACT_INFO.experienceYears}
          </span>
          <span className="text-xs text-stone-700 uppercase tracking-wider font-bold leading-tight flex items-center justify-center min-h-[32px]">
            {lang === 'hi'
              ? 'वर्षों की अखंड साधना'
              : lang === 'gu-en'
              ? 'વર્ષોની અખંડ સાધના'
              : 'Years Sacred Tapasya'}
          </span>
        </div>
        <div className="bg-white border border-amber-200/80 p-5 sm:p-6 rounded-3xl shadow-xs flex flex-col items-center justify-center min-h-[130px]">
          <span className="heading-mystic text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block mb-1 whitespace-nowrap">
            {CONTACT_INFO.clientsCount}
          </span>
          <span className="text-xs text-stone-700 uppercase tracking-wider font-bold leading-tight flex items-center justify-center min-h-[32px]">
            {lang === 'hi'
              ? 'सफल वैदिक समाधान'
              : lang === 'gu-en'
              ? 'સફળ વૈદિક સમાધાન'
              : 'Cases Solved Successfully'}
          </span>
        </div>
        <div className="bg-white border border-amber-200/80 p-5 sm:p-6 rounded-3xl shadow-xs flex flex-col items-center justify-center min-h-[130px]">
          <span className="heading-mystic text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block mb-1 whitespace-nowrap">
            18+
          </span>
          <span className="text-xs text-stone-700 uppercase tracking-wider font-bold leading-tight flex items-center justify-center min-h-[32px]">
            {lang === 'hi'
              ? 'वैश्विक देश'
              : lang === 'gu-en'
              ? 'વૈશ્વિક દેશો (Global)'
              : 'Countries Served'}
          </span>
        </div>
        <div className="bg-white border border-amber-200/80 p-5 sm:p-6 rounded-3xl shadow-xs flex flex-col items-center justify-center min-h-[130px]">
          <span className="heading-mystic text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 block mb-1 whitespace-nowrap">
            {CONTACT_INFO.successRate}
          </span>
          <span className="text-xs text-stone-700 uppercase tracking-wider font-bold leading-tight flex items-center justify-center min-h-[32px]">
            {lang === 'hi'
              ? 'वैदिक शुद्धि व संतुष्टि'
              : lang === 'gu-en'
              ? 'વૈદિક પવિત્રતા અને સંતોષ'
              : 'Vedic Sanctity & Trust'}
          </span>
        </div>
      </div>
    </section>
  );
};
