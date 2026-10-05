import React, { useState } from 'react';
import { Search, MapPin, Globe2, Sparkles, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';

interface KeywordGroup {
  category: string;
  badge: string;
  icon: string;
  keywords: string[];
}

const LOCAL_GUJARAT_KEYWORDS: KeywordGroup[] = [
  {
    category: 'गुप्त धन, गड़ा धन व अकस्मात धन प्राप्ति सिद्धि (Gupt Dhan, Gada Dhan & Hidden Wealth Sadhana)',
    badge: '💰 High-Rank Naagmata Sadhana',
    icon: '🪙',
    keywords: [
      'गुप्त धन पाने के अचूक ज्योतिष उपाय',
      'जमीन में गड़ा धन निकालने के टोटके और मंत्र',
      'गड़ा धन का पता कैसे लगाएं ज्योतिषीय विधि',
      'सपने में गड़ा धन दिखने का क्या मतलब होता है',
      'गड़े धन पर नाग का पहरा हटाने के उपाय',
      'नाग रक्षक दोष निवारण वैदिक मंत्र साधना',
      'पाताल लोक गुप्त धन साधना उज्जैन',
      'जमीन के नीचे दबा खजाना कैसे निकालें',
      'पूर्वजों का गड़ा धन प्राप्त करने के उपाय',
      'अकस्मात धन वर्षा व कुबेर सिद्धि अनुष्ठान',
      'गड़े धन के संकेत और लक्षण परीक्षण',
      'पैतृक गुप्त धन व खजाना सिद्धि विधान',
      'Gupt dhan pane ke achuk upay',
      'Zameen me gada dhan kaise nikale mantra',
      'Gada dhan nikalne ka totka aur shanti vidhi',
      'Gade dhan par naag ka pehra hatane ke upay',
      'Naag rakshak dosha nivaran anushthan',
      'Buried treasure vedic astrology remedy india',
      'Ancestral hidden wealth recovery astrology',
      'Patal dhan rakshak siddhi naagmata peeth',
      'ગુપ્ત ધન મેળવવાના શાસ્ત્રોક્ત ઉપાય',
      'જમીનમાં ગડેલું ધન શોધવાની જ્યોતિષ રીત',
      'ગડેલા ધન પર સાપનો પહેરો હટાવવાના ઉપાય',
      'સપનામાં ગડેલું ધન કે નાગ દેખાવાના સંકેત',
      'નાગદેવી ગુપ્ત ધન અને કુબેર સિદ્ધિ અનુષ્ઠાન'
    ]
  },
  {
    category: 'पति का पर-स्त्री मोह, सौतन बाधा एवं गुप्त आकर्षण निवारण (Husband Affair & Sautan Badha Relief)',
    badge: 'High-Rank Vedic Remedy',
    icon: '🔒',
    keywords: [
      'पति को पर स्त्री से दूर करने के अचूक उपाय',
      'पति का पराई औरत से चक्कर छुड़ाने के टोटके',
      'सौतन से छुटकारा पाने के ज्योतिष उपाय',
      'पति को दूसरी औरत के चंगुल से कैसे छुड़ाएं',
      'पति पराई स्त्री के वश में हो तो क्या करें',
      'सौतन बाधा निवारण वैदिक अनुष्ठान उज्जैन',
      'पति का पर-स्त्री मोह कैसे खत्म करें',
      'Pati ko par stri se dur karne ke upay',
      'Sautan se chutkara pane ke totke',
      'Husband extramarital affair astrology remedy',
      'Stop husband affair with another woman vedic remedy',
      'Pati ka dusri aurat se chakkar chhudana',
      'Kamakhya Shukra Shanti for husband fidelity',
      'પતિને પર સ્ત્રીથી દૂર કરવાના ઉપાય',
      'પતિનો બીજી સ્ત્રી સાથે સંબંધ તોડવાના ઉપાય',
      'સોતનથી કાયમી છુટકારો મેળવવાના જ્યોતિષ ઉપાય'
    ]
  },
  {
    category: 'संतान सद्बुद्धि, आज्ञाकारिता एवं गलत संगति निवारण (Child Guidance & Mental Peace)',
    badge: 'Santan Sanskar Anushthan',
    icon: '✨',
    keywords: [
      'संतान की सद्बुद्धि के वैदिक ज्योतिष उपाय',
      'बच्चा बात न माने तो क्या उपाय करें',
      'जिद्दी और हठी बच्चे को आज्ञाकारी बनाने के उपाय',
      'संतान की गलत संगति छुड़ाने के अचूक टोटके',
      'बच्चों की मोबाइल व गेम की लत छुड़ाने के उपाय',
      'संतान का मन पढ़ाई में एकाग्र करने के उपाय',
      'पंचम भाव राहु शांति संतान दोष निवारण',
      'Santan sadbuddhi vedic anushthan',
      'Child obedience astrology remedies',
      'Remedies for disobedient child vedic astrology',
      'Child bad company and mobile addiction remedy',
      '5th house Rahu Budh dosha shanti for children',
      'સરસ્વતી સદ્બુદ્ધિ મંત્ર સંતાન માટે',
      'સંતાનની ખોટી સંગત છોડાવવાના જ્યોતિષ ઉપાય',
      'હઠીલા બાળકને શાંત અને આજ્ઞાકારી બનાવવાના ઉપાય'
    ]
  },
  {
    category: 'दांपत्य सुख, कामदेव-रति एवं आपसी आकर्षण (Marital Bliss & Spousal Attraction)',
    badge: 'Specialized Vedic Anushthan',
    icon: '💖',
    keywords: [
      'दांपत्य सुख एवं प्रेम वृद्धि अनुष्ठान',
      'पति-पत्नी में आपसी प्रेम व आकर्षण के ज्योतिष उपाय',
      'कामदेव-रति वैदिक मंत्र साधना ज्योतिषी',
      'शुक्र ग्रह शांति दांपत्य कलह निवारण',
      'Pati Patni Apsi Prem Akarshan Jyotish',
      'Dampatya Sukh Vridhi Anushthan Ujjain',
      'Kamadev Rati Vedic Mantra Sadhana Astrologer',
      'Husband Wife Relationship Attraction Healing',
      'Shukra Shanti for Marital Romance & Harmony',
      'દાંપત્ય સુખ અને પ્રેમ વૃદ્ધિ કામદેવ રતિ સાધના',
      'પતિ પત્ની આકર્ષણ અને પ્રેમ વધારવાના ઉપાય',
      'Pati Patni Kankas Door Karne Ke Vedic Upay'
    ]
  },
  {
    category: 'पति की दारू/नशा मुक्ति एवं राहु शांति (Husband Addiction Relief)',
    badge: 'Vyasan Mukti Anushthan',
    icon: '🛡️',
    keywords: [
      'पति की दारू छुड़ाने के वैदिक ज्योतिष उपाय',
      'पति का नशा छुड़ाने के सात्विक उपाय व टोटके',
      'व्यसन मुक्ति एवं राहु ग्रह शांति अनुष्ठान',
      'Pati ki daru chhudane ke upay jyotish',
      'Husband alcohol addiction astrology remedies',
      'Pati ka nasha chhudane ke tarike',
      'Rahu Shanti for alcohol addiction & bad habits',
      'પતિની દારૂ છોડાવવાના જ્યોતિષ ઉપાય',
      'પતિની વ્યસન મુક્તિ માટે રાહુ શાંતિ હવન',
      'Pati ki buri sangat aur nasha door karne ke upay',
      'Daru nasha mukti anushthan Ujjain',
      'Vedic remedies to stop husband drinking alcohol'
    ]
  },
  {
    category: 'Ahmedabad (અમદાવાદ)',
    badge: 'Mega City Hub',
    icon: '📍',
    keywords: [
      'Love Problem Specialist in Ahmedabad',
      'Best Astrologer in Ahmedabad Satellite Bopal',
      'Famous Jyotish in SG Highway Prahladnagar',
      'Love Marriage Specialist Maninagar Naroda',
      'Husband Wife Dispute Solution Ahmedabad',
      'Pati Patni Kankas Nivaran Ahmedabad Chandkheda',
      'Intercaste Marriage Specialist Vastrapur Nikol',
      'Top Astrologer in Navrangpura Ashram Road',
      'Kundali Matching Astrologer in Gota Ahmedabad',
      'અમદાવાદ લવ પ્રોબ્લેમ સોલ્યુશન જ્યોતિષી'
    ]
  },
  {
    category: 'Surat (સુરત)',
    badge: 'Diamond & Textile City',
    icon: '📍',
    keywords: [
      'Best Astrologer in Surat Varachha',
      'Love Problem Solution Surat Katargam',
      'Famous Jyotish in Adajan Vesu Surat',
      'Love Marriage Specialist Ghod Dod Road Piplod',
      'Husband Wife Dispute Astrologer Surat Pal',
      'Intercaste Marriage Problem Solution Surat',
      'Diamond Merchant Vyapar Vriddhi Jyotish Surat',
      'Negative Energy Cleansing Astrologer Surat',
      'Rahu Ketu Dosha Nivaran Surat Ring Road',
      'સુરત પ્રખ્યાત પ્રેમ લગ્ન વિશેષજ્ઞ જ્યોતિષ કાર્યાલય'
    ]
  },
  {
    category: 'Vadodara (વડોદરા)',
    badge: 'Cultural Capital',
    icon: '📍',
    keywords: [
      'Love Problem Specialist Vadodara Alkapuri',
      'Best Astrologer in Vadodara Manjalpur',
      'Love Marriage Specialist Karelibaug Gotri',
      'Husband Wife Dispute Solution Vadodara Fatehgunj',
      'Pati Patni Kankas Nivaran Vadodara Akota',
      'Intercaste Marriage Family Consent Vadodara',
      'Top Jyotish Karyalay Vadodara Subhanpura',
      'Vedic Kundali Dosha Shanti Vadodara Waghodia',
      'વડોદરા પ્રેમ લગ્ન અને કુંડળી સમાધાન વિશેષજ્ઞ'
    ]
  },
  {
    category: 'Rajkot & Saurashtra (રાજકોટ અને સૌરાષ્ટ્ર)',
    badge: 'Saurashtra Central',
    icon: '📍',
    keywords: [
      'Best Astrologer in Rajkot Kalawad Road',
      'Love Problem Specialist Rajkot Yagnik Road',
      'Pati Patni Kankas Nivaran Rajkot University Road',
      'Love Marriage Specialist Rajkot Mavdi 150ft Ring Road',
      'Family Dispute Solution Astrologer Rajkot',
      'Famous Jyotish in Bhavnagar Jamnagar Junagadh',
      'Astrologer in Morbi Surendranagar Porbandar',
      'Saurashtra NRI Family Vedic Astrologer Rajkot',
      'રાજકોટ પતિ પત્ની કંકાસ નિવારણ અને લવ પ્રોબ્લેમ જ્યોતિષ'
    ]
  },
  {
    category: 'Gandhinagar & North Gujarat (ગાંધીનગર અને ઉત્તર ગુજરાત)',
    badge: 'Capital & Heritage Belt',
    icon: '📍',
    keywords: [
      'Best Astrologer in Gandhinagar Infocity Kudasan',
      'Love Marriage Specialist Gandhinagar Raysan Sargasan',
      'Astrologer in Gandhinagar Sector Hubs & Gift City',
      'Famous Jyotish in Mehsana Patan Palanpur',
      'Love Problem Solution Visnagar Unjha Kadi',
      'Intercaste Marriage Specialist North Gujarat',
      'Business Growth & Government Job Jyotish Gandhinagar',
      'ગાંધીનગર અને ઉત્તર ગુજરાત લવ પ્રોબ્લેમ જ્યોતિષી'
    ]
  },
  {
    category: 'Anand, Nadiad & Charotar (આણંદ, નડિયાદ અને ચરોતર)',
    badge: 'NRI Charotar Belt',
    icon: '📍',
    keywords: [
      'Charotar Gujarati NRI Astrologer Anand Nadiad',
      'Love Problem Specialist in Anand Vidyanagar',
      'Love Marriage Specialist Nadiad Petlad Borsad',
      'Best Astrologer for USA UK NRI Families in Anand',
      'Pati Patni Dispute Solution Charotar Gujarat',
      'Intercaste Marriage Family Consent Anand',
      'ચરોતર આણંદ નડિયાદ એનઆરઆઈ ફેમિલી જ્યોતિષી'
    ]
  },
  {
    category: 'Bhuj, Kutch & South Gujarat (કચ્છ અને દક્ષિણ ગુજરાત)',
    badge: 'Border & Coastal Belt',
    icon: '📍',
    keywords: [
      'Best Astrologer in Bhuj Gandhidham Kutch',
      'Love Problem Specialist Anjar Mandvi Mundra Kutch',
      'Famous Astrologer in Bharuch Ankleshwar',
      'Love Marriage Specialist Navsari Valsad Vapi',
      'Industrial Business Obstacle Astrology Vapi Ankleshwar',
      'Kutchi Gujarati NRI Family Astrologer Bhuj',
      'કચ્છ ભુજ ગાંધીધામ અને વાપી વલસાડ જ્યોતિષ કાર્યાલય'
    ]
  }
];

const INTERNATIONAL_NRI_KEYWORDS: KeywordGroup[] = [
  {
    category: 'Global Marital Bliss & Spousal Attraction (कामदेव-रति साधना)',
    badge: 'Worldwide NRI Anushthan',
    icon: '✨',
    keywords: [
      'Kamadev Rati Sadhana for Husband Wife in USA',
      'Marital Bliss & Spousal Attraction Astrologer UK',
      'Vedic Relationship Harmony Consultation Canada',
      'Husband Wife Distance Removal Australia',
      'Venus Shukra Shanti for Marital Romance Dubai UAE',
      'Pati Patni Prem Vridhi Anushthan for NRIs Worldwide',
      'Spousal Attraction Vedic Mantras Worldwide Remote',
      'Overcome Marital Emotional Distance NRI Astrology'
    ]
  },
  {
    category: 'United States (USA)',
    badge: 'US Nationwide Coverage',
    icon: '🇺🇸',
    keywords: [
      'Best Indian Astrologer in USA',
      'Indian Astrologer in New York NYC Queens Long Island',
      'Gujarati Astrologer in Edison Iselin New Jersey',
      'Indian Astrologer in California Fremont San Jose SF Bay Area',
      'Best Vedic Astrologer in Texas Dallas Houston Plano Austin',
      'Love Problem Specialist in Chicago Naperville Illinois',
      'Indian Astrologer in Atlanta Alpharetta Georgia',
      'Indian Astrologer in Charlotte Raleigh North Carolina',
      'Top Astrologer in Seattle Bellevue Washington',
      'Indian Astrologer in Florida Tampa Orlando Miami',
      'USA NRI Love Marriage & Intercaste Problem Solution',
      'Relationship Reconciliation Astrologer USA'
    ]
  },
  {
    category: 'United Kingdom (UK)',
    badge: 'UK British-Indian Hubs',
    icon: '🇬🇧',
    keywords: [
      'Best Indian Astrologer in London UK',
      'Love Problem Specialist London Wembley Harrow Kingsbury',
      'Famous Gujarati Pandit in Leicester Belgrave Melton Road',
      'Indian Astrologer in Birmingham Smethwick West Midlands',
      'Indian Astrologer in Southall Ilford Hounslow Croydon',
      'Love Problem Astrologer Manchester Bolton Leeds Bradford',
      'Indian Astrologer in Slough Reading Luton Milton Keynes',
      'British Indian Love Marriage & Family Consent Astrologer',
      'Husband Wife Dispute Solution London UK',
      'Negative Energy & Aura Cleansing Specialist UK'
    ]
  },
  {
    category: 'Canada',
    badge: 'Greater Toronto & BC Belt',
    icon: '🇨🇦',
    keywords: [
      'Best Indian Astrologer in Brampton Ontario',
      'Top Astrologer in Toronto Mississauga GTA',
      'Love Problem Specialist Surrey Vancouver British Columbia',
      'Indian Astrologer in Calgary Edmonton Alberta',
      'Gujarati Astrologer in Brampton Toronto for Love Marriage',
      'Husband Wife Dispute Solution Canada',
      'Intercaste Marriage Family Consent Astrologer Canada',
      'PR Visa Delay & Settlement Astrological Remedy Canada',
      'Distance Vedic Havan & Protection Canada'
    ]
  },
  {
    category: 'Australia & New Zealand',
    badge: 'Australasia Dedicated Desk',
    icon: '🇦🇺',
    keywords: [
      'Best Indian Astrologer in Sydney Parramatta Harris Park',
      'Top Astrologer in Melbourne Tarneit Point Cook Dandenong',
      'Love Problem Astrologer in Brisbane Gold Coast Perth',
      'Indian Astrologer in Adelaide Canberra Australia',
      'Indian Astrologer in Auckland Central Manukau New Zealand',
      'Love Marriage Specialist Sydney Melbourne Australia',
      'Australian NRI Relationship Crisis Solution',
      'Distance Vedic Pooja & Kundali Analysis Australia'
    ]
  },
  {
    category: 'UAE & Middle East (Gulf)',
    badge: 'Dubai & Gulf Express',
    icon: '🇦🇪',
    keywords: [
      'Best Indian Astrologer in Dubai UAE',
      'Love Problem Astrologer Dubai Karama Bur Dubai',
      'Famous Indian Astrologer in Abu Dhabi UAE',
      'Husband Wife Dispute Solution Sharjah Ajman',
      'Business Growth & Commercial Prosperity Astrology Dubai',
      'Indian Astrologer in Doha Qatar Muscat Oman',
      'Famous Indian Jyotish in Kuwait Bahrain Gulf Countries',
      'Gujarati Business Family Astrologer Dubai Meena Bazaar',
      'Rapid Vedic Relationship Guidance UAE'
    ]
  },
  {
    category: 'Europe & Worldwide',
    badge: 'Worldwide Remote Reach',
    icon: '🌍',
    keywords: [
      'Indian Astrologer in Germany Frankfurt Berlin Munich',
      'Gujarati Astrologer in Netherlands Amsterdam Rotterdam The Hague',
      'Diamond Merchant & Gem Astrologer Antwerp Belgium',
      'Indian Astrologer in Paris France Milan Rome Italy',
      'Indian Astrologer in Zurich Switzerland Stockholm Sweden',
      'Indian Astrologer in Singapore Little India Jurong',
      'Indian Astrologer in Malaysia Kuala Lumpur Penang',
      'Worldwide Remote Vedic Anushthan & Distance Healing'
    ]
  }
];

export const SeoKeywordsDirectory: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'local' | 'international'>('local');
  const [searchFilter, setSearchFilter] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const currentList = activeTab === 'local' ? LOCAL_GUJARAT_KEYWORDS : INTERNATIONAL_NRI_KEYWORDS;

  const filteredGroups = currentList
    .map((group) => {
      const matchedKeywords = group.keywords.filter((kw) =>
        kw.toLowerCase().includes(searchFilter.toLowerCase())
      );
      return {
        ...group,
        keywords: matchedKeywords
      };
    })
    .filter(
      (group) =>
        group.keywords.length > 0 ||
        group.category.toLowerCase().includes(searchFilter.toLowerCase())
    );

  const isFiltering = searchFilter.trim().length > 0;
  // Keep website sleek and short: show 3 top categories by default, expandable to all on click
  const visibleGroups = isExpanded || isFiltering ? filteredGroups : filteredGroups.slice(0, 3);

  return (
    <section
      id="seo-keywords-directory"
      className="py-10 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto border-t border-amber-200/80 w-full overflow-hidden"
    >
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3 py-0.5 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>
            {lang === 'hi'
              ? 'स्थानिक व अंतरराष्ट्रीय खोज अनुक्रमणिका'
              : lang === 'gu-en'
              ? 'સ્થાનિક અને વિદેશી જ્યોતિષ શોધ અનુક્રમણિકા (SEO Index)'
              : 'Complete Local & International Search Index'}
          </span>
        </div>
        <h2 className="heading-mystic text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 leading-snug">
          {lang === 'hi'
            ? 'शहर व देशानुसार वैदिक ज्योतिष खोज निर्देशिका'
            : lang === 'gu-en'
            ? 'શહેર અને દેશ અનુસાર જ્યોતિષ શોધ નિર્દેશિકા'
            : 'Vedic Astrological Search Directory by City & Country'}
        </h2>
        <p className="text-amber-800 font-semibold text-xs sm:text-sm mt-1">
          {lang === 'hi'
            ? 'उत्तर भारत, गुजरात व अंतरराष्ट्रीय देशों हेतु प्रमुख प्रामाणिक कीवर्ड्स'
            : lang === 'gu-en'
            ? 'સ્થાનિક ગુજરાત અને આંતરરાષ્ટ્રીય દેશો મુજબ મુખ્ય જ્યોતિષ શોધ કીવર્ડ્સ'
            : 'Verified Astrological Search Terms for Gujarat, North India & Worldwide Diaspora'}
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Tabs & Search Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6 bg-white border border-amber-200/80 p-2.5 sm:p-3 rounded-2xl shadow-xs">
        {/* Tab Toggle Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => {
              setActiveTab('local');
              setSearchFilter('');
              setIsExpanded(false);
            }}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'local'
                ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>
              {lang === 'hi'
                ? 'गुजरात व प्रांतीय केंद्र'
                : lang === 'gu-en'
                ? 'Gujarat Local SEO'
                : 'Gujarat & Domestic Centers'}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab('international');
              setSearchFilter('');
              setIsExpanded(false);
            }}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
              activeTab === 'international'
                ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5 shrink-0" />
            <span>
              {lang === 'hi'
                ? 'अंतरराष्ट्रीय (NRI Hubs)'
                : lang === 'gu-en'
                ? 'International Hubs'
                : 'International Hubs'}
            </span>
          </button>
        </div>

        {/* Live Filter Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder={
              lang === 'hi'
                ? 'शहर या कीवर्ड खोजें...'
                : lang === 'gu-en'
                ? 'શહેર કે કીવર્ડ શોધો...'
                : 'Search city or keyword...'
            }
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:border-amber-500 focus:bg-white text-stone-900 transition-colors"
          />
        </div>
      </div>

      {/* Grid of Keywords (Compact, Sleek View) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-white border border-amber-200/90 rounded-xl p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-base shrink-0">{group.icon}</span>
                  <h3 className="heading-mystic text-xs sm:text-sm font-bold text-stone-900 line-clamp-1">
                    {group.category}
                  </h3>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 px-1.5 py-0.5 rounded-full shrink-0">
                  {group.badge}
                </span>
              </div>

              {/* Keywords Tag Cloud - Compact & Mini */}
              <div className="flex flex-wrap gap-1 pt-0.5">
                {group.keywords.slice(0, isExpanded || isFiltering ? 15 : 6).map((kw, kwIdx) => (
                  <a
                    key={kwIdx}
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    title={`Consult Baba Ji for ${kw}`}
                    className="text-[10px] font-medium text-stone-700 bg-stone-50 hover:bg-amber-100 hover:text-amber-950 border border-stone-200/70 hover:border-amber-300 px-2 py-0.5 rounded-md transition-colors inline-block leading-tight"
                  >
                    {kw}
                  </a>
                ))}
                {!isExpanded && !isFiltering && group.keywords.length > 6 && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-[9.5px] font-semibold text-amber-800 bg-amber-50/90 border border-amber-200 px-1.5 py-0.5 rounded-md hover:bg-amber-100 transition-colors inline-block cursor-pointer"
                  >
                    +{group.keywords.length - 6} और
                  </button>
                )}
              </div>
            </div>

            {/* Quick Action Footer */}
            <div className="mt-3 pt-2.5 border-t border-amber-100 flex items-center justify-between text-[11px]">
              <span className="text-stone-500 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>24/7 Helpline</span>
              </span>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Expand / Collapse Button to keep website compact & short */}
      {filteredGroups.length > 3 && !isFiltering && (
        <div className="mt-6 flex flex-col items-center justify-center gap-1.5 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-100/90 hover:bg-amber-200 text-amber-950 font-bold text-xs border border-amber-300 shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
          >
            {isExpanded ? (
              <>
                <span>▲ कम श्रेणियां दिखाएं (Show Less)</span>
              </>
            ) : (
              <>
                <span>▼ सभी शहर व कीवर्ड्स सूची देखें ({filteredGroups.length - 3} और श्रेणियां)</span>
              </>
            )}
          </button>
          {!isExpanded && (
            <p className="text-[11px] text-stone-500">
              पेज को कॉम्पैक्ट रखने के लिए चुनिंदा कीवर्ड्स दिखाए जा रहे हैं। पूरी सूची देखने हेतु ऊपर बटन दबाएं।
            </p>
          )}
        </div>
      )}

      {/* Global Call to Action Bar */}
      <div className="mt-10 bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 text-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl border border-amber-500/50">
        <div className="space-y-2 flex-1 min-w-0 text-left">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-200">
            {lang === 'hi'
              ? '24/7 वैश्विक व स्थानीय ज्योतिषीय मार्गदर्शन'
              : lang === 'gu-en'
              ? '24/7 વૈશ્વિક અને સ્થાનિક જ્યોતિષ હેલ્પલાઇન'
              : '24/7 Global & Local Astrological Helpline'}
          </span>
          <h3 className="heading-mystic text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-balance">
            {lang === 'hi'
              ? 'क्या आप अपने शहर या देश में ज्योतिषीय समाधान खोज रहे हैं?'
              : lang === 'gu-en'
              ? 'શું તમે તમારા શહેર કે દેશમાં જ્યોતિષીય માર્ગદર્શન શોધી રહ્યા છો?'
              : 'Looking for Astrological Guidance in Your City or Country?'}
          </h3>
          <p className="text-xs sm:text-sm text-amber-100/95 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'चाहे आप अहमदाबाद, सूरत, राजकोट, लंदन, न्यूयॉर्क, टोरंटो, सिडनी या दुबई में हों — पूज्य बाबा जी व्यक्तिगत, गोपनीय व सटीक मार्गदर्शन हेतु उपलब्ध हैं।'
              : lang === 'gu-en'
              ? 'તમે અમદાવાદ, સુરત, રાજકોટ, લંડન, ન્યુયોર્ક, ટોરોન્ટો, સિડની કે દુબઈમાં હોવ — બાબાજી સીધા અને ગુપ્ત માર્ગદર્શન માટે 24 કલાક ઉપલબ્ધ છે.'
              : 'Whether you are in Ahmedabad, Surat, Rajkot, London, New York, Toronto, Sydney, or Dubai, Baba Ji is available for direct, confidential consultations.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto self-stretch lg:self-center">
          <a
            id="global-cta-call"
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="h-12 sm:h-[50px] bg-white text-stone-950 hover:bg-amber-50 font-extrabold px-5 sm:px-6 rounded-2xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-xs sm:text-sm whitespace-nowrap border border-white cursor-pointer"
          >
            <Phone className="w-4 h-4 text-amber-600 shrink-0 animate-bounce" />
            <span className="whitespace-nowrap font-extrabold">
              {lang === 'hi'
                ? `सीधा कॉल: ${CONTACT_INFO.phoneDisplay}`
                : lang === 'gu-en'
                ? `સીધો કૉલ: ${CONTACT_INFO.phoneDisplay}`
                : `Direct Call: ${CONTACT_INFO.phoneDisplay}`}
            </span>
          </a>

          <a
            id="global-cta-whatsapp"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 sm:h-[50px] bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-5 sm:px-6 rounded-2xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-xs sm:text-sm border border-emerald-400 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap font-extrabold">
              {lang === 'hi'
                ? 'व्हाट्सएप पर जुड़ें'
                : lang === 'gu-en'
                ? 'વોટ્સએપ સંપર્ક'
                : 'WhatsApp Connect'}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
