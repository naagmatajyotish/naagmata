import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Mail, ShieldCheck, FileText, AlertCircle, RefreshCw, MapPin } from 'lucide-react';
import { CONTACT_INFO, SACRED_SERVICES } from '../data/jyotishData';
import { NaagdeviLogo } from './NaagdeviLogo';
import { PolicyModal, PolicyModalType } from './PolicyModal';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const [activeModal, setActiveModal] = useState<PolicyModalType>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy' || hash === '#privacy-policy') setActiveModal('privacy');
      else if (hash === '#terms' || hash === '#terms-of-service') setActiveModal('terms');
      else if (hash === '#disclaimer') setActiveModal('disclaimer');
      else if (hash === '#refund' || hash === '#refund-policy') setActiveModal('refund');
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const openPolicy = (policy: 'privacy' | 'terms' | 'disclaimer' | 'refund') => {
    setActiveModal(policy);
    window.history.pushState(null, '', `#${policy}`);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    if (['#privacy', '#terms', '#disclaimer', '#refund', '#privacy-policy', '#terms-of-service', '#refund-policy'].includes(window.location.hash.toLowerCase())) {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  return (
    <>
      <footer className="bg-[#fcfaf2] border-t border-amber-200/80 pt-16 pb-24 md:pb-16 px-4 sm:px-6 text-stone-700 text-xs sm:text-sm transition-colors duration-400 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Sacred Bio */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="relative flex items-center justify-center">
                <NaagdeviLogo size="sm" />
              </div>
              <div className="flex flex-col">
                <span className="heading-mystic text-lg font-extrabold tracking-wider text-[#2a2203] uppercase">
                  Naagmata Jyotish
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mt-0.5">
                  {lang === 'hi' ? (
                    <span className="font-['Noto_Sans_Devanagari',sans-serif]">श्री नागमाता ज्योतिष संस्थान</span>
                  ) : lang === 'gu-en' ? (
                    <>
                      <span className="font-['Noto_Sans_Gujarati',sans-serif]">શ્રી નાગમાતા જ્યોતિષ</span>
                      <span className="text-amber-400">•</span>
                      <span>Vedic Jyotish</span>
                    </>
                  ) : (
                    <span>Vedic Astrological Peeth</span>
                  )}
                </div>
                <span className="text-[10px] text-amber-800 font-bold uppercase tracking-widest font-sans mt-0.5">
                  Maa Naagdevi Siddhapeeth
                </span>
              </div>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed">
              {lang === 'hi'
                ? 'माँ नागदेवी की कृपा से पूज्य बाबा जी विगत ३५+ वर्षों से सनातन वैदिक ज्योतिष, दांपत्य शांति, प्रेम विवाह व पारिवारिक सुख-शांति हेतु शास्त्रोक्त एवं सात्त्विक मार्गदर्शन प्रदान कर रहे हैं।'
                : lang === 'gu-en'
                ? 'માં નાગદેવીની કૃપાથી પૂજ્ય બાબાજી છેલ્લા ૩૫+ વર્ષોથી શુદ્ધ વૈદિક જ્યોતિષ, પ્રેમ-લગ્ન સમાધાન અને પારિવારિક શાંતિ માટે સચોટ માર્ગદર્શન પૂરું પાડે છે.'
                : 'Traditional Vedic Astrologer & Spiritual Counselor blessed by Maa Naagdevi with 35+ years of dedicated wisdom. Providing ethical, peaceful, and compassionate guidance for relationships, family harmony, and planetary dosha remedies.'}
            </p>
            <div className="flex items-center space-x-2 text-xs text-stone-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {lang === 'hi'
                  ? '१००% पूर्णतः गोपनीय व सुरक्षित परामर्श'
                  : lang === 'gu-en'
                  ? '૧૦૦% સંપૂર્ણ ગુપ્ત અને સુરક્ષિત પરામર્શ (Confidential)'
                  : 'Strictly Confidential & Secure Consultations'}
              </span>
            </div>
          </div>

          {/* Column 2: Sacred Services Links */}
          <div className="space-y-3">
            <h4 className="heading-mystic text-base font-bold text-stone-900 tracking-wider">
              {lang === 'hi'
                ? 'प्रमुख वैदिक सेवाएं'
                : lang === 'gu-en'
                ? 'મુખ્ય જ્યોતિષ સેવાઓ (Services)'
                : 'Spiritual Services'}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {SACRED_SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-amber-800 transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Trust Policies (Google Ads Compliance Mandatory) */}
          <div className="space-y-3">
            <h4 className="heading-mystic text-base font-bold text-stone-900 tracking-wider flex items-center gap-1.5">
              <span>
                {lang === 'hi'
                  ? 'नीतियां एवं नियम'
                  : lang === 'gu-en'
                  ? 'નિયમો અને નીતિઓ (Policies)'
                  : 'Policies & Trust'}
              </span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => { e.preventDefault(); openPolicy('privacy'); }}
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'गोपनीयता नीति (Privacy Policy)'
                      : lang === 'gu-en'
                      ? 'પ્રાઇવસી પોલિસી (Privacy Policy)'
                      : 'Privacy Policy'}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  onClick={(e) => { e.preventDefault(); openPolicy('terms'); }}
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'नियम व शर्तें (Terms of Service)'
                      : lang === 'gu-en'
                      ? 'નિયમો અને શરતો (Terms of Service)'
                      : 'Terms of Service'}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#disclaimer"
                  onClick={(e) => { e.preventDefault(); openPolicy('disclaimer'); }}
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-left cursor-pointer font-bold text-amber-900"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'ज्योतिष अस्वीकरण (Astrological Disclaimer)'
                      : lang === 'gu-en'
                      ? 'જ્યોતિષ ડિસ્ક્લેમર (Disclaimer)'
                      : 'Astrological Disclaimer'}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#refund"
                  onClick={(e) => { e.preventDefault(); openPolicy('refund'); }}
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'रद्द व वापसी नीति (Cancellation Policy)'
                      : lang === 'gu-en'
                      ? 'રદ્દીકરણ પોલિસી (Cancellation Policy)'
                      : 'Cancellation & Satisfaction Policy'}
                  </span>
                </a>
              </li>
              <li className="pt-1">
                <a href="#faq" className="hover:text-amber-800 transition-colors">
                  {lang === 'hi'
                    ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)'
                    : lang === 'gu-en'
                    ? 'વારંવાર પૂછાતા પ્રશ્નો (FAQ)'
                    : 'Frequently Asked Questions'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support (With Verifiable Physical Address for Google Ads Advertiser Verification) */}
          <div className="space-y-3">
            <h4 className="heading-mystic text-base font-bold text-stone-900 tracking-wider">
              {lang === 'hi'
                ? 'आश्रम सहायता व संपर्क'
                : lang === 'gu-en'
                ? 'આશ્રમ સહાયતા અને સંપર્ક'
                : 'Ashram Direct Help'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center gap-2 text-stone-900 font-bold">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-amber-700">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2 text-stone-700 font-medium">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">
                  {lang === 'hi'
                    ? 'सीधा WhatsApp परामर्श'
                    : lang === 'gu-en'
                    ? 'સીધો WhatsApp સંપર્ક'
                    : 'Direct WhatsApp Support'}
                </a>
              </p>
              <p className="flex items-center gap-2 text-stone-700 font-medium">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber-700 break-all">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <div className="flex items-start gap-2 text-stone-700 font-medium pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-stone-900">
                    {lang === 'hi' ? 'आश्रम का पता:' : lang === 'gu-en' ? 'આશ્રમ સરનામું:' : 'Physical Address:'}
                  </strong><br />
                  {CONTACT_INFO.address}
                </span>
              </div>
              <p className="text-amber-800 pt-1 text-[11px] font-medium">
                {lang === 'hi'
                  ? 'देश-विदेश के भक्तों हेतु २४ घंटे सेवा में तत्पर।'
                  : lang === 'gu-en'
                  ? 'ગુજરાત તેમજ દેશ-વિદેશના ભક્તો માટે ૨૪ કલાક સેવારત.'
                  : 'Available 24 Hours / 7 Days for worldwide devotees under Maa Naagdevi protection.'}
              </p>
            </div>
          </div>
        </div>

        {/* Local SEO & International Astrological Consultation Hubs */}
        <div className="max-w-7xl mx-auto pt-8 pb-6 border-t border-amber-200/60 text-xs text-stone-600 space-y-4">
          {/* Regional Hubs Section based on Language */}
          {lang === 'hi' ? (
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/70 rounded-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-2">
                <span className="font-bold text-amber-950 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <span>🕉️</span>
                  <span>उत्तर भारत एवं प्रमुख राष्ट्रीय ज्योतिष परामर्श केंद्र (North India & National Vedic Hubs):</span>
                </span>
                <span className="text-[11px] text-amber-800 font-semibold">
                  दिल्ली एनसीआर • जयपुर • लखनऊ • पटना • इंदौर • भोपाल • चंडीगढ़ • मुंबई
                </span>
              </div>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                <strong>प्रमुख क्षेत्र (Key Hindi Heartland Regions):</strong> दिल्ली (द्वारका, रोहिणी, साकेत, लक्ष्मी नगर, कनॉट प्लेस), नोएडा, गुरुग्राम, गाजियाबाद, फरीदाबाद, जयपुर (वैशाली नगर, मानसरोवर), जोधपुर, उदयपुर, कोटा, लखनऊ (गोमती नगर, हजरतगंज), कानपुर, वाराणसी, प्रयागराज, पटना (कंकड़बाग, बोरिंग रोड), रांची, इंदौर (विजय नगर, पलासिया), भोपाल, ग्वालियर, जबलपुर, चंडीगढ़, लुधियाना, अमृतसर, शिमला, देहरादून, हरिद्वार।
              </p>
            </div>
          ) : (
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/70 rounded-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-2">
                <span className="font-bold text-amber-950 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                  <span>🕉️</span>
                  <span>
                    {lang === 'gu-en'
                      ? 'ગુજરાત સ્થાનિક જ્યોતિષ કેન્દ્રો (Gujarat Local Vedic Consultation Hubs):'
                      : 'Gujarat & Western India Astrological Consultation Centers:'}
                  </span>
                </span>
                <span className="text-[11px] text-amber-800 font-semibold">
                  અમદાવાદ • સુરત • વડોદરા • રાજકોટ • ગાંધીનગર • આણંદ • કચ્છ
                </span>
              </div>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                <strong>{lang === 'gu-en' ? 'પ્રમુખ ક્ષેત્રો (Key Gujarat Locations):' : 'Key Gujarat Locations:'}</strong> અમદાવાદ (Satellite, Bopal, SG Highway, Maninagar, Naroda), સુરત (Varachha, Adajan, Katargam, Vesu, Ghod Dod Road), વડોદરા (Alkapuri, Manjalpur, Karelibaug, Gotri), રાજકોટ (Kalawad Road, Yagnik Road), ગાંધીનગર (Infocity, Kudasan), આણંદ અને નડિયાદ (ચરોતર બેલ્ટ), ભાવનગર, જામનગર, મહેસાણા, પાટણ, પાલનપુર, ભુજ, ગાંધીધામ (કચ્છ), ભરૂચ, અંકલેશ્વર, નવસારી, વલસાડ, જુનાગઢ, મોરબી.
              </p>
            </div>
          )}

          {/* International Hubs */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left mb-2">
              <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] text-amber-950">
                {lang === 'hi'
                  ? '🌍 अंतरराष्ट्रीय परामर्श व दूरस्थ वैदिक हवन (Global Consultations):'
                  : lang === 'gu-en'
                  ? '🌍 Global Consultations & Distance Vedic Havans (વિદેશી પરામર્શ):'
                  : '🌍 Global Consultations & Distance Vedic Havans (International Clients):'}
              </span>
              <span className="text-[11px] text-amber-800 font-semibold">
                USA • UK • Canada • Australia • UAE • New Zealand • Europe • Singapore
              </span>
            </div>
            <p className="text-[11px] text-stone-500 leading-relaxed text-center md:text-left">
              <strong>Key International & NRI Diaspora Areas:</strong> New York (NYC, Queens), New Jersey (Edison, Iselin), California (Fremont, San Jose, SF Bay Area, LA), Texas (Dallas, Houston, Austin), Chicago (Naperville), Atlanta, London (Wembley, Harrow, Southall, Ilford), Leicester (Belgrave Rd), Birmingham, Manchester, Toronto (Brampton, Mississauga), Vancouver (Surrey), Calgary, Sydney (Parramatta, Harris Park), Melbourne (Tarneit, Point Cook), Brisbane, Perth, Auckland, Dubai (Karama, Bur Dubai, Deira), Abu Dhabi, and Singapore.
            </p>
          </div>
        </div>

        {/* Sacred Shanti Blessing & Detailed Google-Compliant Astrological Disclaimer */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-stone-200 text-center space-y-3">
          <p className="text-xs text-amber-900 font-serif italic font-bold tracking-wide">
            "Sarve Bhavantu Sukhinah, Sarve Santu Niraamayaah • May all beings be happy, peaceful, and free from suffering"
          </p>
          <div className="bg-amber-50/60 border border-amber-200/60 py-2 px-4 rounded-xl max-w-2xl mx-auto text-[10px] text-stone-500 leading-normal text-center">
            <span className="font-semibold text-stone-700">
              {lang === 'hi' ? 'वैधानिक अस्वीकरण:' : lang === 'gu-en' ? 'અસ્વીકરણ (Disclaimer):' : 'Disclaimer:'}
            </span>{' '}
            {lang === 'hi'
              ? 'ज्योतिष एवं वैदिक अनुष्ठान विशुद्ध आध्यात्मिक आस्था पर आधारित हैं। परिणाम प्रत्येक व्यक्ति के कर्म, ग्रहों की दशा व निष्ठा पर निर्भर करते हैं। कोई चमत्कारिक या अलौकिक गारंटी का दावा नहीं है। यह किसी कानूनी, चिकित्सकीय या वित्तीय विशेषज्ञ परामर्श का विकल्प नहीं है।'
              : lang === 'gu-en'
              ? 'જ્યોતિષ અને વૈદિક અનુષ્ઠાન શ્રદ્ધા આધારિત આધ્યાત્મિક સાધના છે. પરિણામો વ્યક્તિગત ગ્રહદશા અને સંકલ્પ પર આધારિત રહે છે. કોઈ ચમત્કારિક દાવો કરવામાં આવતો નથી. આ કોઈપણ મેડિકલ, કાનૂની કે નાણાકીય સેવાનો વિકલ્પ નથી.'
              : 'Astrology & Vedic rituals are faith-based spiritual practices. Results vary individually based on personal planetary alignments and karma. We make no supernatural or guaranteed claims. Not a substitute for medical, legal, or financial professional services.'}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-amber-900 font-semibold pt-1">
            <a
              href="#privacy"
              onClick={(e) => { e.preventDefault(); openPolicy('privacy'); }}
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </a>
            <span>•</span>
            <a
              href="#terms"
              onClick={(e) => { e.preventDefault(); openPolicy('terms'); }}
              className="hover:underline cursor-pointer"
            >
              Terms of Service
            </a>
            <span>•</span>
            <a
              href="#disclaimer"
              onClick={(e) => { e.preventDefault(); openPolicy('disclaimer'); }}
              className="hover:underline cursor-pointer font-bold text-amber-950"
            >
              Astrological Disclaimer
            </a>
            <span>•</span>
            <a
              href="#refund"
              onClick={(e) => { e.preventDefault(); openPolicy('refund'); }}
              className="hover:underline cursor-pointer"
            >
              Cancellation Policy
            </a>
          </div>

          <p className="text-xs text-stone-500 pt-2 font-medium">
            © {new Date().getFullYear()} Naagmata Jyotish. All Rights Reserved. Devoted to Maa Naagdevi, Truth, Love & Universal Peace.
          </p>
        </div>
      </footer>

      {/* Interactive Policy Modal */}
      <PolicyModal activeModal={activeModal} onClose={handleCloseModal} />
    </>
  );
};
