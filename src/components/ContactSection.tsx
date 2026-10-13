import React from 'react';
import { Phone, ShieldCheck, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full overflow-hidden text-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 bg-stone-900/90 border border-amber-500/40 px-3.5 py-1 rounded-full text-xs text-amber-300 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {lang === 'hi'
              ? 'दैवीय कृपा व २४/७ सीधा संपर्क'
              : lang === 'gu-en'
              ? 'દિવ્ય માર્ગદર્શન અને ૨૪/૭ સંપર્ક (Direct Contact)'
              : 'Sacred Guidance Anytime'}
          </span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
          {lang === 'hi'
            ? 'पूज्य बाबा जी से सीधा संपर्क करें'
            : lang === 'gu-en'
            ? 'બાબાજી સાથે સીધો સંપર્ક કરો'
            : 'Direct Connect with Baba Ji'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-300 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          {lang === 'hi'
            ? 'अपनी समस्या में अकेले परेशान न हों। प्रेम, विवाह, तलाक या पारिवारिक क्लेश में एक कॉल आपके जीवन में सकारात्मक मोड़ ला सकती है।'
            : lang === 'gu-en'
            ? 'ચિંતા કે વિષાદમાં એકલા ન રહો. પ્રેમ, લગ્ન, છૂટાછેડા કે કૌટુંબિક પ્રશ્નોમાં માં નાગદેવીની કૃપાથી એક કૉલ જીવન બદલી શકે છે.'
            : 'Do not suffer in silence. Whether your issue is love, marriage, divorce, or family anxiety, ethical Vedic guidance can restore harmony under divine grace.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone Contact Card */}
        <a
          href={`tel:${CONTACT_INFO.phoneRaw}`}
          className="bg-stone-900/90 border border-amber-500/30 hover:border-amber-400 p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-black/50"
        >
          <div className="w-16 h-16 rounded-2xl bg-stone-800 border border-amber-500/40 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-stone-950 transition-all shadow-inner text-amber-400">
            <Phone className="w-7 h-7 transition-colors" />
          </div>
          <span className="text-xs text-amber-300 uppercase tracking-widest font-bold mb-1">
            {lang === 'hi'
              ? '२४/७ फोन हेल्पलाइन'
              : lang === 'gu-en'
              ? '૨૪/૭ ફોન હેલ્પલાઇન (Helpline)'
              : '24/7 Phone Helpline'}
          </span>
          <h3 className="heading-mystic text-xl font-bold text-white mb-2 group-hover:text-yellow-300">
            {CONTACT_INFO.phoneDisplay}
          </h3>
          <p className="text-stone-300 text-xs">
            {lang === 'hi'
              ? `पूज्य बाबाजी हेल्पलाइन: ${CONTACT_INFO.phoneDisplay}। 24/7 निःशुल्क प्रारंभिक परामर्श।`
              : lang === 'gu-en'
              ? `બાબાજી હેલ્પલાઇન: ${CONTACT_INFO.phoneDisplay}. 24 કલાક ઉપલબ્ધ.`
              : 'Direct audio consultation with Baba Ji for urgent crises and relationship clarity.'}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
            {CONTACT_INFO.phoneDisplay} →
          </span>
        </a>

        {/* Confidential Consultation Request Card */}
        <a
          href="#consultation"
          className="bg-stone-900/90 border border-amber-500/30 hover:border-amber-400 p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-black/50"
        >
          <div className="w-16 h-16 rounded-2xl bg-stone-800 border border-amber-500/40 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-inner text-emerald-400">
            <ShieldCheck className="w-7 h-7 transition-colors" />
          </div>
          <span className="text-xs text-amber-300 uppercase tracking-widest font-bold mb-1">
            {lang === 'hi'
              ? '१००% गोपनीय परामर्श फॉर्म'
              : lang === 'gu-en'
              ? '૧૦૦% ગુપ્ત પરામર્શ ફોર્મ'
              : '100% Confidential Form'}
          </span>
          <h3 className="heading-mystic text-xl font-bold text-white mb-2 group-hover:text-yellow-300">
            {lang === 'hi'
              ? 'परामर्श अनुरोध भेजें'
              : lang === 'gu-en'
              ? 'પરામર્શ ફોર્મ ભરો'
              : 'Submit Consultation Request'}
          </h3>
          <p className="text-stone-300 text-xs">
            {lang === 'hi'
              ? 'जन्म पत्रिका, साथी का नाम या प्रश्न पूर्ण गोपनीयता से फॉर्म में दर्ज करें।'
              : lang === 'gu-en'
              ? 'કુંડળી વિગત કે પ્રશ્ન પૂર્ણ ગુપ્તતા સાથે ફોર્મમાં મોકલો.'
              : 'Submit your birth details or concerns safely and confidentially.'}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
            {lang === 'hi'
              ? 'फॉर्म पर जाएं →'
              : lang === 'gu-en'
              ? 'ફોર્મ ખોલો →'
              : 'Go to Form →'}
          </span>
        </a>

        {/* Official Email Card */}
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="bg-stone-900/90 border border-amber-500/30 hover:border-amber-400 p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xl shadow-black/50 w-full overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl bg-stone-800 border border-amber-500/40 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 group-hover:text-white transition-all shadow-inner text-orange-400">
            <Mail className="w-7 h-7 transition-colors" />
          </div>
          <span className="text-xs text-amber-300 uppercase tracking-widest font-bold mb-1">
            {lang === 'hi'
              ? 'ईमेल पत्राचार'
              : lang === 'gu-en'
              ? 'ઈમેલ સંપર્ક (Email Inquiries)'
              : 'Email Correspondence'}
          </span>
          <h3 
            className="text-xs xs:text-sm sm:text-base font-bold text-white mb-2 group-hover:text-yellow-300 break-all sm:break-normal tracking-tight max-w-full px-1 text-center"
            title={CONTACT_INFO.email}
          >
            {CONTACT_INFO.email}
          </h3>
          <p className="text-stone-300 text-xs">
            {lang === 'hi'
              ? 'विस्तृत कुंडली, पारिवारिक विवरण व दूरस्थ पूजा हेतु ईमेल भेजें।'
              : lang === 'gu-en'
              ? 'વિગતવાર કુંડળી અને વિદેશથી પૂજા વિધિ માટે ઈમેલ મોકલો.'
              : 'Send comprehensive case histories, horoscopes, or long-distance puja inquiries.'}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:underline">
            {lang === 'hi'
              ? 'ईमेल संदेश भेजें →'
              : lang === 'gu-en'
              ? 'ઈમેલ મોકલો →'
              : 'Send Email Inquiry →'}
          </span>
        </a>
      </div>

      {/* Ashram Location and Timings Banner */}
      <div className="mt-10 bg-stone-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-stone-300 shadow-xl shadow-black/50">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0 border border-amber-500/40 text-amber-400">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-white block">
              {lang === 'hi'
                ? 'मुख्य सिद्ध पीठ संस्थान:'
                : lang === 'gu-en'
                ? 'મુખ્ય સિદ્ધ પીઠ સંસ્થાન:'
                : 'Main Siddha Peeth Sansthan:'}
            </span>
            <span className="text-stone-300">{CONTACT_INFO.location}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center shrink-0 border border-emerald-500/40 text-emerald-400">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-white block">
              {lang === 'hi'
                ? 'परामर्श सेवा समय:'
                : lang === 'gu-en'
                ? 'પરામર્શ ઉપલબ્ધતા સમય:'
                : 'Consultation Availability:'}
            </span>
            <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-ping"></span>
              {lang === 'hi'
                ? '२४/७ अखंड उपलब्ध (ऑनलाइन व फोन)'
                : lang === 'gu-en'
                ? '૨૪/૭ સતત ઉપલબ્ધ (Online & Phone)'
                : CONTACT_INFO.availableHours}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
