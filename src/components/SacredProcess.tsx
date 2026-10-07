import React from 'react';
import { CONTACT_INFO } from '../data/jyotishData';
import { Phone, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const SacredProcess: React.FC = () => {
  const { lang } = useLanguage();

  const steps = [
    {
      step: '01',
      title:
        lang === 'hi'
          ? 'गोपनीय समस्या संवाद'
          : lang === 'gu-en'
          ? 'ગુપ્ત પરામર્શ (Confidential Consultation)'
          : 'Confidential Consultation & Chart Review',
      description:
        lang === 'hi'
          ? 'आप अपनी समस्या, नाम, फोटो व जन्म विवरण पूज्य बाबा जी के साथ पूर्ण गोपनीयता से साझा करते हैं।'
          : lang === 'gu-en'
          ? 'તમારી સમસ્યા, નામ અને જન્મ વિગત બાબાજી સાથે ૧૦૦% ગુપ્તતા સાથે જણાવો.'
          : 'Share your relationship or personal concerns with complete confidentiality. Submit birth details for accurate analysis.'
    },
    {
      step: '02',
      title:
        lang === 'hi'
          ? 'गहन ग्रहदोष व नक्षत्र विश्लेषण'
          : lang === 'gu-en'
          ? 'ગ્રહ દોષ વિશ્લેષણ (Planetary Analysis)'
          : 'In-Depth Planetary & Dosha Assessment',
      description:
        lang === 'hi'
          ? 'बाबा जी नवग्रह स्थिति, महादशा, गोचर व प्रेम/दांपत्य भावों का शास्त्रीय विश्लेषण करते हैं।'
          : lang === 'gu-en'
          ? 'બાબાજી નવગ્રહ, મહાદશા અને લગ્ન/પ્રેમ ભાવનું સંપૂર્ણ વિશ્લેષણ કરે છે.'
          : 'Baba Ji calculates planetary configurations (Navagraha), Dasha periods, and relationship compatibility factors.'
    },
    {
      step: '03',
      title:
        lang === 'hi'
          ? 'सात्त्विक वैदिक हवन व अनुष्ठान'
          : lang === 'gu-en'
          ? 'સાત્ત્વિક વૈદિક હવન અને પૂજા (Vedic Havan)'
          : 'Sattvic Vedic Havan & Anushthan',
      description:
        lang === 'hi'
          ? 'शुभ मुहूर्त में विशेष वैदिक शांति यज्ञ व संकल्प द्वारा अनुकूल ऊर्जा का संचार किया जाता है।'
          : lang === 'gu-en'
          ? 'શુભ મુહૂર્તમાં ખાસ શાંતિ હવન, જાપ અને આહુતિ દ્વારા દિવ્ય ઊર્જા પ્રવાહિત કરાય છે.'
          : 'Under auspicious Shubh Muhurta, Baba Ji performs customized Vedic pujas invoking benevolent divine blessings.'
    },
    {
      step: '04',
      title:
        lang === 'hi'
          ? 'सिद्ध रक्षा कवच व सतत मार्गदर्शन'
          : lang === 'gu-en'
          ? 'સિદ્ધ રક્ષા કવચ અને સતત માર્ગદર્શન'
          : 'Personal Guidance & Protective Kavach',
      description:
        lang === 'hi'
          ? 'प्राण-प्रतिष्ठित सिद्ध रक्षा कवच, दैनिक मंत्र व जीवन भर का निःस्वार्थ ज्योतिषीय मार्गदर्शन।'
          : lang === 'gu-en'
          ? 'સિદ્ધ રક્ષા કવચ, રોજના મંત્ર અને સમસ્યા સંપૂર્ણ દૂર થાય ત્યાં સુધી સતત માર્ગદર્શન.'
          : 'Receive personal mantra recommendations, energized spiritual talismans, and continuous ethical guidance.'
    }
  ];

  return (
    <section id="rituals" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto relative w-full overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>
            {lang === 'hi'
              ? 'पारदर्शी व शास्त्रसम्मत वैदिक पद्धति'
              : lang === 'gu-en'
              ? 'પારદર્શક અને શુદ્ધ આધ્યાત્મિક પદ્ધતિ (Spiritual Method)'
              : 'Transparent & Pure Spiritual Methodology'}
          </span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
          {lang === 'hi'
            ? 'बाबा जी संकट का समाधान कैसे करते हैं?'
            : lang === 'gu-en'
            ? 'બાબાજી તમારી સમસ્યાનું સમાધાન કેવી રીતે કરે છે?'
            : 'How Baba Ji Resolves Your Crisis'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          {lang === 'hi'
            ? 'चार चरणों की सिद्ध वैदिक प्रक्रिया: जन्मपत्रिका विश्लेषण, वैदिक महाहवन, एवं सिद्ध रक्षा कवच।'
            : lang === 'gu-en'
            ? '૪ તબક્કાની સિદ્ધ પદ્ધતિ: કુંડળી વિશ્લેષણ, સાત્ત્વિક હવન અને રક્ષા કવચ વિધાન.'
            : 'Our four-stage Siddha remedy protocol combines ancient Atharva Vedic hymns, sacred yajnas, and sanctified energy talismans.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
          <div
            key={item.step}
            className="bg-white p-7 rounded-3xl border border-amber-200/80 relative group hover:border-amber-400 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg hover:shadow-amber-500/5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="heading-mystic text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-orange-600">
                {item.step}
              </span>
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-xs text-emerald-700 font-bold">
                ✓
              </div>
            </div>

            <div>
              <h3 className="heading-mystic text-lg font-bold text-stone-900 mb-2.5 group-hover:text-amber-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-stone-100">
              <span className="text-[11px] text-amber-700 uppercase tracking-widest font-bold">
                {lang === 'hi'
                  ? `चरण ${index + 1} / 4`
                  : lang === 'gu-en'
                  ? `તબક્કો ${index + 1} / 4`
                  : `Phase ${index + 1} of 4`}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reassurance CTA */}
      <div className="mt-12 bg-gradient-to-r from-amber-50 via-orange-50/50 to-amber-50 border border-amber-300 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xs">
        <div className="space-y-1">
          <h4 className="heading-mystic text-xl sm:text-2xl font-extrabold text-stone-900">
            {lang === 'hi'
              ? 'क्या आपकी समस्या अति गंभीर है?'
              : lang === 'gu-en'
              ? 'શું તમારી સમસ્યા અતિ ગંભીર છે? (Immediate Help)'
              : 'Have an Emergency That Cannot Wait?'}
          </h4>
          <p className="text-stone-600 text-sm max-w-xl">
            {lang === 'hi'
              ? 'तलाक के नोटिस, ब्रेकअप या गंभीर पारिवारिक तनाव के लिए बाबा जी विशेष मध्यरात्रि शांति संकल्प करते हैं।'
              : lang === 'gu-en'
              ? 'બ્રેકઅપ, છૂટાછેડા કે પારિવારિક કંકાસ માટે બાબાજી તાત્કાલિક વિશેષ શાંતિ હવન કરે છે.'
              : 'Baba Ji conducts special Emergency Havans for critical breakups, divorce dates, and severe spiritual distress.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 text-sm transition-all shadow-md active:scale-98"
          >
            <Phone className="w-4 h-4 animate-bounce" />
            <span>
              {lang === 'hi'
                ? `सीधा फोन कॉल करें बाबाजी को: ${CONTACT_INFO.phoneDisplay}`
                : lang === 'gu-en'
                ? `સીધો ફોન કૉલ: ${CONTACT_INFO.phoneDisplay}`
                : `Direct Call Baba Ji: ${CONTACT_INFO.phoneDisplay}`}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
