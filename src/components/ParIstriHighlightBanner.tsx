import React from 'react';
import { motion } from 'motion/react';
import { Phone, CheckCircle2, ShieldCheck, Lock, Sparkles, HeartHandshake } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';
import serviceParIstriNivaran from '../assets/images/par_istri_nivaran_remedy_1789829355493.jpg';

export const ParIstriHighlightBanner: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="par-istri-highlight" className="relative w-full py-8 sm:py-12 bg-gradient-to-b from-[#fdfcf7] via-[#fff8eb] to-[#fdfcf7] border-y-2 border-amber-300/60 overflow-hidden">
      {/* Subtle divine background ornamentation */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-red-600 via-amber-500 to-orange-600 shadow-2xl shadow-orange-950/20"
        >
          <div className="bg-gradient-to-br from-stone-950 via-amber-950/95 to-stone-900 text-white rounded-[22px] p-6 sm:p-8 lg:p-10 border border-yellow-400/40 relative overflow-hidden">
            {/* Top Badge Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-amber-500/20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/30 to-amber-600/30 border border-yellow-400/50 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black text-yellow-300 tracking-wide uppercase">
                <Lock className="w-4 h-4 text-yellow-300 shrink-0" />
                <span>
                  {lang === 'gu-en'
                    ? '૧૦૦% સંપૂર્ણ ગોપનીય • પર-સ્ત્રી અને સોતન બાધા નિવારણ'
                    : lang === 'en'
                    ? '100% Confidential • Husband Fidelity & Third-Party Removal'
                    : '१००% पूर्णतः गोपनीय • विशेष पर-स्त्री मोह एवं सौतन बाधा निवारण'}
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 bg-white/10 px-3.5 py-1 rounded-full text-xs font-semibold text-amber-200 border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
                <span>
                  {lang === 'gu-en'
                    ? 'અખંડ દાંપત્ય સુખ રક્ષા કવચ'
                    : lang === 'en'
                    ? 'Sacred Vedic Marital Shield'
                    : 'अखंड सिंदूर व गृहस्थ रक्षा कवच'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Image with Sacred Vermilion / Golden Border */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/80 aspect-4/3 group">
                  <img
                    src={serviceParIstriNivaran}
                    alt="पति का पर-स्त्री मोह एवं सौतन बाधा निवारण वैदिक अनुष्ठान"
                    loading="lazy"
                    width="600"
                    height="450"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs font-black px-3.5 py-1 rounded-full shadow-lg border border-yellow-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-200 shrink-0" />
                    <span>
                      {lang === 'gu-en'
                        ? 'કામાખ્યા-શુક્ર શાંતિ અનુષ્ઠાન'
                        : lang === 'en'
                        ? 'Kamakhya & Shukra Shanti Puja'
                        : 'कामाख्या-शुक्र शांति अनुष्ठान'}
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-center bg-black/75 backdrop-blur-xs rounded-xl py-2 px-3 border border-yellow-400/30">
                    <p className="text-yellow-200 text-xs sm:text-sm font-bold tracking-wide">
                      {lang === 'gu-en'
                        ? 'પર-સ્ત્રીનો પ્રભાવ કાયમી દૂર • ઘરમાં પુનઃ પ્રેમ અને સુખ-શાંતિ'
                        : lang === 'en'
                        ? 'Permanent Removal of Third-Party • Restored Marital Bliss'
                        : 'पर-स्त्री का प्रभाव जड़ से समाप्त • दांपत्य में पुनः अटूट प्रेम व विश्वास'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Priority Highlights & CTAs */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-yellow-400 text-xs font-extrabold uppercase tracking-wider">
                    <HeartHandshake className="w-4 h-4 text-yellow-400 shrink-0" />
                    <span>
                      {lang === 'gu-en'
                        ? 'દાંપત્ય જીવનનું સર્વોચ્ચ સમાધાન'
                        : lang === 'en'
                        ? 'Highest Priority Marital Remedy'
                        : 'दांपत्य जीवन का सर्वोच्च वैदिक समाधान'}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight font-['Cinzel',serif]">
                    {lang === 'gu-en'
                      ? 'પતિનો પર-સ્ત્રી મોહ, સોતન બાધા અને આકર્ષણ મુક્તિ વૈદિક અનુષ્ઠાન'
                      : lang === 'en'
                      ? 'Husband Extramarital Affair & Third-Party Removal Sacred Anushthan'
                      : 'पति का पर-स्त्री मोह, सौतन बाधा एवं गुप्त आकर्षण निवारण वैदिक अनुष्ठान'}
                  </h2>

                  <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
                    {lang === 'gu-en'
                      ? 'પતિ કોઈ અન્ય સ્ત્રીના આકર્ષણ, જૂઠ કે ખોટા પ્રભાવમાં હોય તો પૂજ્ય બાબાજીના શાસ્ત્રોક્ત વિધાન દ્વારા પર-સ્ત્રીનો પ્રભાવ દૂર કરી પતિ-પત્નીમાં અખંડ પ્રેમ સ્થાપિત થાય છે.'
                      : lang === 'en'
                      ? 'Authentic Vedic astrological rituals to detach your spouse from external attractions, nullify toxic influences, and permanently re-establish heartfelt marital devotion.'
                      : 'यदि आपके पति किसी अन्य महिला के प्रभाव, संपर्क या आकर्षण में आ चुके हैं, तो पूज्य बाबाजी की कामाख्या-बगलामुखी मंत्र साधना द्वारा पर-स्त्री का सम्मोहन तोड़कर दांपत्य में पुनः समर्पण स्थापित किया जाता है।'}
                  </p>
                </div>

                {/* The 4 Exact Mandated Highlight Points */}
                <div className="space-y-2.5 pt-1 pb-2">
                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/15 via-white/5 to-transparent border border-amber-400/30 rounded-xl p-3 sm:p-3.5 hover:border-yellow-400/60 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-yellow-100 font-bold leading-snug">
                      {lang === 'gu-en'
                        ? 'પર-સ્ત્રીના ચંગુલ, સંમોહન અને ગુપ્ત આકર્ષણમાંથી પતિની સંપૂર્ણ મુક્તિ'
                        : 'पर-स्त्री के चंगुल, सम्मोहन व गुप्त आकर्षण से पति की पूर्ण मुक्ति'}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/15 via-white/5 to-transparent border border-amber-400/30 rounded-xl p-3 sm:p-3.5 hover:border-yellow-400/60 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-yellow-100 font-bold leading-snug">
                      {lang === 'gu-en'
                        ? 'પતિ અને અન્ય સ્ત્રી વચ્ચે સ્વાભાવિક વિરક્તિ અને કાયમી અલગાવ'
                        : 'पति और अन्य स्त्री के बीच स्वाभाविक विरक्ति व स्थायी अलगाव'}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/15 via-white/5 to-transparent border border-amber-400/30 rounded-xl p-3 sm:p-3.5 hover:border-yellow-400/60 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-yellow-100 font-bold leading-snug">
                      {lang === 'gu-en'
                        ? 'પત્ની અને બાળકો પ્રત્યે પતિનો પુનઃ ઊંડો પ્રેમ, આદર અને જવાબદારી'
                        : 'पत्नी और बच्चों के प्रति पति का पुनः गहरा प्रेम, आदर व जिम्मेदारी'}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 bg-gradient-to-r from-amber-500/15 via-white/5 to-transparent border border-amber-400/30 rounded-xl p-3 sm:p-3.5 hover:border-yellow-400/60 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-yellow-100 font-bold leading-snug">
                      {lang === 'gu-en'
                        ? 'રોજબરોજના શક, કલેશ, વિખવાદ અને છૂટાછેડાના તણાવનું ૧૦૦% ગોપનીય અને શાસ્ત્રોક્ત વૈદિક નિવારણ'
                        : 'रोजाना के शक, क्लेश, मार-पीट व तलाक के तनाव का 100% गोपनीय व शास्त्रसम्मत वैदिक निवारण'}
                    </span>
                  </div>
                </div>

                {/* Direct Action Button: Phone Call */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 text-base sm:text-lg shadow-xl shadow-amber-600/35 hover:scale-[1.01] active:scale-98 transition-all border-2 border-yellow-300 ring-2 ring-yellow-400/30"
                  >
                    <Phone className="w-5 h-5 text-white animate-bounce shrink-0" />
                    <span className="whitespace-nowrap font-extrabold">
                      गोपनीय परामर्श हेतु सीधा फोन करें: {CONTACT_INFO.phoneDisplay}
                    </span>
                  </a>
                </div>

                {/* Trust and Privacy Note */}
                <p className="text-xs text-amber-200/80 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2 pt-1 font-medium">
                  <Lock className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
                  <span>
                    {lang === 'gu-en'
                      ? 'તમારી ઓળખ અને વાતચીત સંપૂર્ણપણે ગુપ્ત અને પવિત્ર રાખવામાં આવે છે.'
                      : 'आपकी पहचान एवं समस्या 100% गोपनीय व सुरक्षित रखी जाती है। कोई भी तीसरा व्यक्ति कभी नहीं जान सकेगा।'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
