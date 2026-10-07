import React from 'react';
import { Phone, ShieldCheck, Mail, MapPin, Clock, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>
            {lang === 'hi'
              ? 'दैवीय कृपा व २४/७ सीधा संपर्क'
              : lang === 'gu-en'
              ? 'દિવ્ય માર્ગદર્શન અને ૨૪/૭ સંપર્ક (Direct Contact)'
              : 'Sacred Guidance Anytime'}
          </span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
          {lang === 'hi'
            ? 'पूज्य बाबा जी से सीधा संपर्क करें'
            : lang === 'gu-en'
            ? 'બાબાજી સાથે સીધો સંપર્ક કરો'
            : 'Direct Connect with Baba Ji'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 max-w-xl mx-auto text-sm sm:text-base">
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
          className="bg-white border border-amber-200/80 hover:border-amber-400 p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xs hover:shadow-lg hover:shadow-amber-500/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-orange-500 group-hover:text-white transition-all shadow-inner">
            <Phone className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs text-amber-800 uppercase tracking-widest font-bold mb-1">
            {lang === 'hi'
              ? '२४/७ फोन हेल्पलाइन'
              : lang === 'gu-en'
              ? '૨૪/૭ ફોન હેલ્પલાઇન (Helpline)'
              : '24/7 Phone Helpline'}
          </span>
          <h3 className="heading-mystic text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-800">
            {CONTACT_INFO.phoneDisplay}
          </h3>
          <p className="text-stone-600 text-xs">
            {lang === 'hi'
              ? 'पूज्य बाबा जी से सीधा फोन परामर्श। तत्काल मार्गदर्शन हेतु कॉल करें।'
              : lang === 'gu-en'
              ? 'બાબાજી સાથે સીધો કૉલ. તાત્કાલિક માર્ગદર્શન માટે અત્યારે જ સંપર્ક કરો.'
              : 'Direct audio consultation with Baba Ji for urgent crises and relationship clarity.'}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:underline">
            {lang === 'hi'
              ? 'अभी कॉल करें →'
              : lang === 'gu-en'
              ? 'કૉલ કરવા ટેપ કરો →'
              : 'Tap to Call Now →'}
          </span>
        </a>

        {/* Confidential Consultation Request Card */}
        <a
          href="#consultation"
          className="bg-white border border-amber-200/80 hover:border-amber-400 p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xs hover:shadow-lg hover:shadow-amber-500/5"
        >
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-inner">
            <ShieldCheck className="w-7 h-7 text-amber-700 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs text-amber-800 uppercase tracking-widest font-bold mb-1">
            {lang === 'hi'
              ? '१००% गोपनीय परामर्श फॉर्म'
              : lang === 'gu-en'
              ? '૧૦૦% ગુપ્ત પરામર્શ ફોર્મ'
              : '100% Confidential Form'}
          </span>
          <h3 className="heading-mystic text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-800">
            {lang === 'hi'
              ? 'परामर्श अनुरोध भेजें'
              : lang === 'gu-en'
              ? 'પરામર્શ ફોર્મ ભરો'
              : 'Submit Consultation Request'}
          </h3>
          <p className="text-stone-600 text-xs">
            {lang === 'hi'
              ? 'जन्म पत्रिका, साथी का नाम या प्रश्न पूर्ण गोपनीयता से फॉर्म में दर्ज करें।'
              : lang === 'gu-en'
              ? 'કુંડળી વિગત કે પ્રશ્ન પૂર્ણ ગુપ્તતા સાથે ફોર્મમાં મોકલો.'
              : 'Submit your birth details or concerns safely and confidentially.'}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:underline">
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
          className="bg-white border border-amber-200/80 hover:border-amber-400 p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] group shadow-xs hover:shadow-lg hover:shadow-amber-500/5 w-full overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 group-hover:text-white transition-all shadow-inner">
            <Mail className="w-7 h-7 text-orange-700 group-hover:text-white transition-colors" />
          </div>
          <span className="text-xs text-amber-800 uppercase tracking-widest font-bold mb-1">
            {lang === 'hi'
              ? 'ईमेल पत्राचार'
              : lang === 'gu-en'
              ? 'ઈમેલ સંપર્ક (Email Inquiries)'
              : 'Email Correspondence'}
          </span>
          <h3 
            className="text-xs xs:text-sm sm:text-base font-bold text-stone-900 mb-2 group-hover:text-amber-800 whitespace-nowrap tracking-tight max-w-full px-1"
            title={CONTACT_INFO.email}
          >
            {CONTACT_INFO.email}
          </h3>
          <p className="text-stone-600 text-xs">
            {lang === 'hi'
              ? 'विस्तृत कुंडली, पारिवारिक विवरण व दूरस्थ पूजा हेतु ईमेल भेजें।'
              : lang === 'gu-en'
              ? 'વિગતવાર કુંડળી અને વિદેશથી પૂજા વિધિ માટે ઈમેલ મોકલો.'
              : 'Send comprehensive case histories, horoscopes, or long-distance puja inquiries.'}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:underline">
            {lang === 'hi'
              ? 'ईमेल संदेश भेजें →'
              : lang === 'gu-en'
              ? 'ઈમેલ મોકલો →'
              : 'Send Email Inquiry →'}
          </span>
        </a>
      </div>

      {/* Ashram Location and Timings Banner */}
      <div className="mt-10 bg-amber-50/70 border border-amber-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-stone-700">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-100/80 flex items-center justify-center shrink-0 border border-amber-300 text-amber-700">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-stone-900 block">
              {lang === 'hi'
                ? 'मुख्य सिद्ध पीठ संस्थान:'
                : lang === 'gu-en'
                ? 'મુખ્ય સિદ્ધ પીઠ સંસ્થાન:'
                : 'Main Siddha Peeth Sansthan:'}
            </span>
            <span className="text-stone-600">{CONTACT_INFO.location}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100/80 flex items-center justify-center shrink-0 border border-emerald-300 text-emerald-700">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="font-bold text-stone-900 block">
              {lang === 'hi'
                ? 'परामर्श सेवा समय:'
                : lang === 'gu-en'
                ? 'પરામર્શ ઉપલબ્ધતા સમય:'
                : 'Consultation Availability:'}
            </span>
            <span className="text-emerald-700 flex items-center gap-1.5 font-bold">
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
