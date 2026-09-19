import React, { useState, useEffect } from 'react';
import { Globe2, MapPin, Clock, Phone, MessageCircle, Shield, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';

interface CountryData {
  id: string;
  name: string;
  flag: string;
  badge: string;
  timezones: string;
  topCities: string[];
  popularSearches: string[];
  highlights: string[];
  directHelpline: string;
}

const COUNTRIES_DATA: CountryData[] = [
  {
    id: 'north-india',
    name: 'North India (उत्तर भारत)',
    flag: '🇮🇳',
    badge: 'दिल्ली एनसीआर, उत्तर प्रदेश, राजस्थान, बिहार, पंजाब, हरियाणा',
    timezones: 'IST (भारतीय समय) • 24 घंटे तत्काल निःशुल्क फोन परामर्श',
    topCities: [
      'Delhi NCR (नई दिल्ली, नोएडा, गुड़गांव, गाजियाबाद, फरीदाबाद)',
      'Uttar Pradesh (लखनऊ, कानपुर, वाराणसी, प्रयागराज, आगरा, मेरठ, बरेली)',
      'Rajasthan (जयपुर, जोधपुर, कोटा, उदयपुर, बीकानेर, अजमेर)',
      'Bihar & Jharkhand (पटना, गया, मुजफ्फरपुर, भागलपुर, रांची, जमशेदपुर)',
      'Madhya Pradesh (इंदौर, भोपाल, उज्जैन, ग्वालियर, जबलपुर)',
      'Punjab & Haryana (चंडीगढ़, लुधियाना, अमृतसर, जालंधर, करनाल, पानीपत)',
      'Uttarakhand & Himachal (देहरादून, हरिद्वार, ऋषिकेश, शिमला)'
    ],
    popularSearches: [
      'Best Astrologer in Delhi NCR (दिल्ली के सर्वश्रेष्ठ ज्योतिषी)',
      'Love Problem Astrologer in Jaipur Lucknow',
      'Intercaste Marriage Specialist Astrologer North India',
      'Husband Wife Dispute Solution in Hindi (पति पत्नी अनबन समाधान)',
      'Kundali Dosh Shanti Ujjain Haridwar',
      'Love Marriage Solution Baba Ji Delhi',
      'Get Lost Love Back Specialist in Hindi',
      'Sattvic Jyotish Puja and Kundali Upay',
      'Kaal Sarp Dosh Manglik Dosh Nivaran',
      'Direct Phone Consultation Baba Ji'
    ],
    highlights: [
      'शुद्ध हिन्दी में आत्मीय व पूर्णतः गोपनीय बातचीत',
      'माँ नागदेवी सिद्ध पीठ के वैदिक अनुष्ठान व शांति हवन',
      'प्रेम विवाह, पारिवारिक असहमति व पति-पत्नी के कलह का स्थाई वैदिक समाधान',
      '35+ वर्षों की प्रामाणिक परंपरा — फोन व व्हाट्सएप पर 24 घंटे सुलभ'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'gujarat',
    name: 'Gujarat (ગુજરાત & Global NRI)',
    flag: '🕉️',
    badge: 'સમસ્ત ગુજરાત તથા વિદેશી ગુજરાતી NRI ડેસ્ક',
    timezones: 'IST (ભારતીય સમય) • 24/7 કટોકટી પરામર્શ લાઈન ઉપલબ્ધ',
    topCities: [
      'Ahmedabad (અમદાવાદ - Maninagar, Satellite, Bopal, SG Highway, Naroda)',
      'Surat (સુરત - Varachha, Adajan, Katargam, Vesu, Ghod Dod Road, Piplod)',
      'Vadodara (વડોદરા - Alkapuri, Manjalpur, Karelibaug, Gotri, Fatehgunj)',
      'Rajkot (રાજકોટ - Kalawad Road, Yagnik Road, University Road, Mavdi)',
      'Gandhinagar (ગાંધીનગર - Sector Hubs, Kudasan, Infocity, Pethapur)',
      'Anand & Nadiad (આણંદ અને નડિયાદ - ચરોતર NRI બેલ્ટ, Vidyanagar)',
      'Bhavnagar & Jamnagar (ભાવનગર, જામનગર, અલંગ, રિલાયન્સ ગ્રીન્સ)',
      'Mehsana & North Gujarat (મહેસાણા, પાટણ, પાલનપુર, વિસનગર, ઊંઝા)',
      'Bhuj & Kutch (ભુજ, ગાંધીધામ, અંજાર, માંડવી, કંડલા - કચ્છ)',
      'Bharuch, Ankleshwar & South Gujarat (ભરૂચ, અંકલેશ્વર, નવસારી, વલસાડ, વાપી)',
      'Junagadh, Morbi & Saurashtra (જુનાગઢ, મોરબી, સુરેન્દ્રનગર, પોરબંદર, અમરેલી)'
    ],
    popularSearches: [
      'Best Astrologer in Gujarat (ગુજરાતના સર્વશ્રેષ્ઠ જ્યોતિષી)',
      'Love Problem Specialist Ahmedabad (અમદાવાદ લવ પ્રોબ્લેમ સોલ્યુશન)',
      'Famous Astrologer in Surat (સુરત પ્રખ્યાત જ્યોતિષ કાર્યાલય)',
      'Love Marriage Specialist Vadodara (વડોદરા પ્રેમ લગ્ન વિશેષજ્ઞ)',
      'Husband Wife Dispute Solution Rajkot (પતિ પત્ની કંકાસ નિવારણ રાજકોટ)',
      'Best Jyotish in Anand, Nadiad & Kutch (ચરોતર અને કચ્છ જ્યોતિષી)',
      'Intercaste Marriage Family Consent Astrologer Gujarat',
      'Vyapar Badha & Business Growth Astrology Gujarat (વેપાર વૃદ્ધિ ઉપાય)',
      'Kundali Dosh, Manglik Shanti & Rahu Ketu Nivaran Gujarat',
      'Charotar Saurashtra NRI Gujarati Astrologer Online Consultation'
    ],
    highlights: [
      '100% Fluent Gujarati: સંપૂર્ણ માતૃભાષા શુદ્ધ ગુજરાતીમાં ગોપનીય વાતચીત અને સરળ માર્ગદર્શન',
      'Charotar, Saurashtra અને Kutchના દેશ-વિદેશમાં વસતા NRI પરિવારોનો 35+ વર્ષોથી અખંડ વિશ્વાસ',
      'પ્રેમ સંબંધ, આંતરજાતીય લગ્ન (Family Consent), પારિવારિક શાંતિ અને વેપાર વૃદ્ધિ માટે વૈદિક ઉપાય',
      'શ્રી માં નાગદેવી સિદ્ધ પીઠ દ્વારા શાસ્ત્રોક્ત હવન, સંકલ્પ અને સુરક્ષા કવચ વિધાન'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'usa',
    name: 'United States (USA)',
    flag: '🇺🇸',
    badge: 'High Priority 24/7 NRI Support Desk',
    timezones: 'EST • CST • MST • PST (Instant slots for all US timezones)',
    topCities: [
      'New York (NYC, Queens, Long Island, Brooklyn, Manhattan)',
      'New Jersey (Edison, Iselin, Jersey City, Woodbridge, Parsippany)',
      'California (Fremont, San Jose, Sunnyvale, SF Bay Area, Los Angeles, Irvine)',
      'Texas (Dallas, Plano, Frisco, Irving, Houston, Austin, Fort Worth)',
      'Illinois (Chicago, Naperville, Schaumburg, Aurora)',
      'Georgia (Atlanta, Alpharetta, Cumming, Duluth)',
      'North Carolina & Virginia (Charlotte, Raleigh, Cary, Ashburn)',
      'Florida (Tampa, Orlando, Miami, Jacksonville)',
      'Washington & Massachusetts (Seattle, Bellevue, Redmond, Boston)'
    ],
    popularSearches: [
      'Best Indian Astrologer in USA',
      'Love Problem Astrologer New York',
      'Indian Astrologer in Edison New Jersey',
      'Top Astrologer in California Fremont San Jose',
      'Indian Astrologer in Texas Dallas Houston',
      'Love Problem Solution in Chicago Naperville',
      'Intercaste Love Marriage Specialist USA',
      'Get Ex Love Back Astrologer USA',
      'Gujarati Astrologer in USA',
      'Negative Energy & Kaal Sarp Cleansing USA'
    ],
    highlights: [
      'Flexible consultations synced with US evening and weekend hours',
      'Confidential phone & WhatsApp sessions with direct Pandit Ji connection',
      'Authentic Vedic Havans with photographic Sankalp and video verification',
      'Over 6,500+ settled Indian & Gujarati families consulted across America'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'uk',
    name: 'United Kingdom (UK)',
    flag: '🇬🇧',
    badge: 'Most Trusted Indian Astrologer in UK',
    timezones: 'GMT • BST (London standard time • Daily morning & evening slots)',
    topCities: [
      'Greater London (Wembley, Harrow, Kingsbury, Southall, Ilford, Hounslow, Croydon)',
      'Leicester (Belgrave Road, Melton Road, Evington, Rushey Mead)',
      'Birmingham & West Midlands (Smethwick, Handsworth, Solihull)',
      'Manchester, Bolton & Preston',
      'Leeds, Bradford & Sheffield',
      'Slough, Reading, Luton & Milton Keynes',
      'Coventry & Wolverhampton',
      'Edinburgh & Glasgow (Scotland)'
    ],
    popularSearches: [
      'Best Indian Astrologer in UK',
      'Love Problem Specialist London Wembley Harrow',
      'Famous Indian Astrologer in Leicester Belgrave',
      'Indian Astrologer in Birmingham Smethwick',
      'Get Ex Love Back Specialist UK',
      'Husband Wife Dispute Solution London UK',
      'Intercaste Marriage Specialist Astrologer UK',
      'Gujarati Pandit Ji in London UK',
      'Negative Energy & Evil Eye Cleansing UK',
      'Relationship Reconciliation Astrologer UK'
    ],
    highlights: [
      'Specialized consultations for British-Indian and Gujarati communities in Wembley & Leicester',
      'Overcoming intercaste, cross-cultural, and family objection friction peacefully',
      'Urgent same-day direct phone & WhatsApp appointments',
      'Over 4,800+ UK devotees guided under Maa Naagdevi protection'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    badge: 'Top Rated in Ontario, BC & Alberta',
    timezones: 'EST • PST • MST (Toronto, Vancouver & Calgary friendly)',
    topCities: [
      'Greater Toronto Area (Brampton, Mississauga, Scarborough, Etobicoke, Markham, Vaughan, Milton)',
      'British Columbia (Surrey, Vancouver, Richmond, Abbotsford, Burnaby)',
      'Alberta (Calgary, Edmonton)',
      'Ottawa, Kitchener-Waterloo & Hamilton',
      'Winnipeg (Manitoba) & Montreal (Quebec)'
    ],
    popularSearches: [
      'Best Indian Astrologer in Canada',
      'Indian Astrologer in Brampton Ontario',
      'Top Astrologer in Toronto Mississauga',
      'Love Problem Astrologer Surrey Vancouver BC',
      'Love Marriage Problem Solution Canada',
      'Get Ex Partner Back Astrologer Canada',
      'PR Visa Delay & Career Astrological Remedy Canada',
      'Gujarati Astrologer in Brampton & Toronto',
      'Husband Wife Dispute Solution Calgary Canada',
      'Negative Energy & Dosha Cleansing Canada'
    ],
    highlights: [
      'Dedicated guidance for students, work permit holders, and settled PR families',
      'Vedic remedies for marriage delays, relationship distress, and career instability',
      'Consecrated Maa Naagdevi Raksha Kavach and distance Anushthan rituals',
      'Complete confidentiality and compassionate non-judgmental counsel'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'australia',
    name: 'Australia & New Zealand',
    flag: '🇦🇺 🇳🇿',
    badge: 'Sydney, Melbourne & Auckland Dedicated Desk',
    timezones: 'AEST • ACST • AWST • NZST (Morning & Evening sessions)',
    topCities: [
      'Sydney (Parramatta, Harris Park, Blacktown, Westmead, Liverpool, Strathfield)',
      'Melbourne (Tarneit, Point Cook, Dandenong, Craigieburn, Werribee, Epping)',
      'Brisbane & Gold Coast (Queensland)',
      'Perth & Adelaide',
      'Auckland (Central, Manukau, North Shore) & Wellington (NZ)',
      'Canberra & Hobart'
    ],
    popularSearches: [
      'Best Indian Astrologer in Australia',
      'Astrologer in Sydney Parramatta Harris Park',
      'Top Astrologer in Melbourne Tarneit Point Cook',
      'Love Problem Astrologer Australia',
      'Love Marriage Specialist Melbourne Sydney',
      'Get Ex Love Back in Sydney Australia',
      'Indian Astrologer in Auckland New Zealand',
      'Husband Wife Dispute Solution Australia',
      'Gujarati Astrologer in Australia & NZ',
      'Negative Energy Cleansing & Protection Australia'
    ],
    highlights: [
      'Convenient Australian morning and evening booking times',
      'Guidance for long-distance love stress, spouse PR issues, and separation anxieties',
      'Vedic Kundali analysis for Manglik, Kaal Sarp, and Rahu-Ketu doshas',
      'Direct contact with respected Baba Ji via WhatsApp or Phone'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'uae',
    name: 'UAE & Gulf Countries',
    flag: '🇦🇪 🇶🇦 🇴🇲',
    badge: 'Dubai, Abu Dhabi & Gulf Express Desk',
    timezones: 'GST • AST (Gulf Standard Time • 24/7 Rapid Response)',
    topCities: [
      'Dubai (Bur Dubai, Meena Bazaar, Karama, Deira, Al Nahda, Marina, JLT, Silicon Oasis)',
      'Abu Dhabi (Hamdan, Mussafah, Al Reem) & Al Ain',
      'Sharjah (Al Majaz, Rolla, Al Nahda) & Ajman',
      'Doha & Al Wakrah (Qatar)',
      'Muscat & Salalah (Oman)',
      'Kuwait City & Manama (Bahrain)'
    ],
    popularSearches: [
      'Best Indian Astrologer in Dubai',
      'Love Problem Astrologer Dubai Karama Bur Dubai',
      'Love Problem Solution in UAE',
      'Indian Astrologer in Abu Dhabi',
      'Husband Wife Dispute Solution Sharjah Dubai',
      'Business Growth & Financial Blockage Astrology UAE',
      'Gujarati Astrologer in Dubai & Gulf',
      'Relationship Reconciliation Astrologer UAE',
      'Negative Energy Cleansing Dubai UAE',
      'Famous Indian Jyotish in Gulf Countries'
    ],
    highlights: [
      'Instant same-day audio/video appointments for UAE and Middle East expats',
      'Proven remedies for business partnerships, retail prosperity, and financial obstacles',
      'Quick resolution for relationship estrangement and marital harmony',
      'Trusted by thousands of Indian, Gujarati, and Sindhi business families across the Gulf'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'europe',
    name: 'Europe & Worldwide',
    flag: '🇪🇺 🇸🇬 🇲🇾',
    badge: 'Worldwide Remote Distance Vedic Desk',
    timezones: 'CET • SGT (Central European & Singapore Time)',
    topCities: [
      'Germany (Frankfurt, Berlin, Munich, Stuttgart, Dusseldorf)',
      'Netherlands (Amsterdam, The Hague, Rotterdam, Amstelveen)',
      'France (Paris, Lyon) & Belgium (Antwerp, Brussels)',
      'Italy (Milan, Rome, Brescia) & Spain (Barcelona, Madrid)',
      'Switzerland (Zurich, Geneva) & Sweden (Stockholm)',
      'Singapore (Little India, Jurong, Tampines)',
      'Malaysia (Kuala Lumpur, Penang) & Hong Kong'
    ],
    popularSearches: [
      'Indian Astrologer in Europe',
      'Online Vedic Astrology Consultation Worldwide',
      'Love Problem Astrologer Germany Netherlands',
      'Indian Astrologer in Singapore Malaysia',
      'Diamond & Gemstone Merchant Astrology Antwerp',
      'Distance Energy Clearing and Protection Worldwide',
      'Ex Partner Reconciliation Abroad',
      'Gujarati Astrologer in Europe & Singapore'
    ],
    highlights: [
      'Accurate horoscope readings using birth chart details and sacred photograph',
      'Custom energized Yantras and distance Vedic Anushthan performed at Siddha Peeth',
      'Multi-language friendly: Consult fluently in Gujarati, Hindi, or English',
      '24/7 worldwide emergency spiritual support'
    ],
    directHelpline: '+91 97141 27309'
  }
];

export const GlobalPresence: React.FC = () => {
  const { lang } = useLanguage();
  const defaultTab = lang === 'hi' ? 'north-india' : lang === 'en' ? 'usa' : 'gujarat';
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  // Auto-switch tab if language changes and no specific tab hash is set
  useEffect(() => {
    if (!window.location.hash) {
      if (lang === 'hi') setActiveTab('north-india');
      else if (lang === 'gu-en') setActiveTab('gujarat');
      else if (lang === 'en') setActiveTab('usa');
    }
  }, [lang]);

  // Handle URL hash anchor on mount or change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'gujarat-seo' || hash === 'gujarat') {
        setActiveTab('gujarat');
      } else if (hash === 'north-india' || hash === 'delhi') {
        setActiveTab('north-india');
      } else if (COUNTRIES_DATA.some(c => c.id === hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const selectedCountry = COUNTRIES_DATA.find((c) => c.id === activeTab) || COUNTRIES_DATA[0];

  return (
    <section
      id="international-seo"
      className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-amber-200/80 w-full overflow-hidden relative"
    >
      <div id="gujarat-seo" className="absolute -top-24 left-0 w-1 h-1 pointer-events-none opacity-0"></div>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Globe2 className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
          <span>
            {lang === 'hi'
              ? 'अखिल भारतीय एवं अंतर्राष्ट्रीय वैदिक ज्योतिष केंद्र'
              : lang === 'en'
              ? 'Global & International Vedic Astrology Directory'
              : 'Gujarat Local & International Vedic SEO Directory'}
          </span>
        </div>
        <h2 className="heading-mystic text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-snug">
          {lang === 'hi' ? (
            'उत्तर भारत, गुजरात, अमेरिका, यूके, कनाडा एवं विश्वभर में प्रेम व विवाह समस्या समाधान'
          ) : lang === 'en' ? (
            'Vedic Astrologer & Relationship Specialist in USA, UK, Canada, Australia & Worldwide'
          ) : (
            'Vedic Astrologer & Love Problem Specialist in Gujarat, USA, UK, Canada & Worldwide'
          )}
        </h2>
        <p className="text-amber-800 font-bold text-sm sm:text-base mt-2">
          {lang === 'hi' ? (
            'दिल्ली एनसीआर, यूपी, राजस्थान, बिहार सहित समस्त भारत एवं विदेशों में 24/7 फोन परामर्श'
          ) : lang === 'en' ? (
            'Dedicated 24/7 Global NRI & International Desks with Confidential Phone & WhatsApp Support'
          ) : (
            'સમસ્ત ગુજરાત (અમદાવાદ, સુરત, વડોદરા, રાજકોટ) તથા વિશ્વભરમાં વસતા NRI પરિવારો માટે શુદ્ધ વૈદિક જ્યોતિષ સેવાઓ'
          )}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
          {lang === 'hi' ? (
            'क्या आप प्रेम समस्या, वैवाहिक कलह, अंतर्जातीय विवाह में परिवार की असहमति से परेशान हैं? पूज्य बाबा जी माँ नागदेवी की कृपा से शुद्ध वैदिक ज्योतिष, जन्मकुंडली विश्लेषण व शांति हवन द्वारा समाधान प्रदान करते हैं।'
          ) : lang === 'en' ? (
            'Facing relationship strain, marriage objections, or planetary imbalances? Respected Baba Ji provides personalized Vedic astrological analysis, relationship harmony remedies, and confidential spiritual counsel worldwide.'
          ) : (
            'Living in Gujarat or residing abroad across USA, UK, Canada, Australia, and UAE? Respected Baba Ji provides personalized Vedic horoscope analysis, love problem resolution, and family harmony remedies in Gujarati, Hindi, and English for over 14,800+ families worldwide.'
          )}
        </p>
      </div>

      {/* Country Selector Tabs */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 pb-3 mb-8 no-scrollbar w-full max-w-full">
        {COUNTRIES_DATA.map((country) => {
          const isActive = country.id === activeTab;
          return (
            <button
              key={country.id}
              onClick={() => setActiveTab(country.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-md shadow-amber-600/20 scale-[1.02]'
                  : 'bg-white border border-amber-200/80 text-stone-700 hover:bg-amber-50 hover:text-amber-900'
              }`}
            >
              <span className="text-base sm:text-lg">{country.flag}</span>
              <span>{country.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Country Detailed Card */}
      <div className="bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
        {/* Top Accent Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Details & Coverage */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-2xl">{selectedCountry.flag}</span>
                <h3 className="heading-mystic text-xl sm:text-2xl font-bold text-stone-900">
                  {selectedCountry.name} Astrology & Relationship Services
                </h3>
              </div>
              <span className="inline-block text-xs font-bold text-amber-800 bg-amber-50 border border-amber-300/80 px-2.5 py-0.5 rounded-full">
                {selectedCountry.badge}
              </span>
            </div>

            {/* Time zone & Availability */}
            <div className="flex items-center gap-3 bg-stone-50 border border-stone-200/80 p-3.5 rounded-xl text-xs sm:text-sm">
              <Clock className="w-5 h-5 text-amber-600 shrink-0" />
              <div>
                <span className="font-bold text-stone-900 block">Local Time Zone Compatibility:</span>
                <span className="text-stone-600 font-medium">{selectedCountry.timezones}</span>
              </div>
            </div>

            {/* Major Cities Covered */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-2.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Major Cities & Areas Consulted Daily:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedCountry.topCities.map((city, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-stone-700 bg-amber-50/50 border border-amber-100 px-3 py-1.5 rounded-lg"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Advantages for Abroad Clients */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-amber-900 mb-2.5 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-600" />
                <span>Spiritual Dedication for Overseas Devotees:</span>
              </h4>
              <ul className="space-y-2">
                {selectedCountry.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Direct Connect & Popular Search Terms */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#fbf9f4] border border-amber-200/60 p-5 sm:p-6 rounded-2xl">
            {/* Quick Action Box */}
            <div className="text-center space-y-3">
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping mr-1"></span>
                International Lines Open Now
              </span>
              <h4 className="heading-mystic text-lg font-bold text-stone-900">
                Direct Consultation with Baba Ji
              </h4>
              <p className="text-xs text-stone-600">
                Speak directly on Phone or WhatsApp. No middlemen, completely confidential.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="w-full bg-gradient-to-r from-amber-600 via-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 animate-bounce" />
                  <span>Call {selectedCountry.directHelpline}</span>
                </a>

                <a
                  href={`https://wa.me/919714127309?text=${encodeURIComponent(
                    selectedCountry.id === 'north-india' || lang === 'hi'
                      ? 'जय माताजी बाबा जी, मैं वैदिक ज्योतिष परामर्श एवं कुंडली समाधान हेतु संपर्क कर रहा/रही हूँ।'
                      : selectedCountry.id === 'gujarat' || lang === 'gu-en'
                      ? 'જય માતાજી બાબાજી, હું ગુજરાતથી લવ પ્રોબ્લેમ અને કુંડળી સમાધાન માટે તાત્કાલિક માર્ગદર્શન મેળવવા સંપર્ક કરું છું.'
                      : `Namaskar Baba Ji, I am contacting you from ${selectedCountry.name} regarding urgent astrological consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {selectedCountry.id === 'north-india' || lang === 'hi'
                      ? 'सीधा WhatsApp पर चैट करें'
                      : selectedCountry.id === 'gujarat' || lang === 'gu-en'
                      ? 'ગુજરાતીમાં સીધો WhatsApp સંપર્ક'
                      : `WhatsApp From ${selectedCountry.name}`}
                  </span>
                </a>
              </div>
            </div>

            {/* Popular Overseas Search Keywords (High SEO Relevance) */}
            <div className="pt-4 border-t border-amber-200/80">
              <span className="text-[11px] font-black uppercase tracking-wider text-amber-900 block mb-2">
                Top Requested Services in {selectedCountry.name}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedCountry.popularSearches.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] sm:text-[11px] font-semibold bg-white border border-amber-200/80 text-stone-700 px-2.5 py-1 rounded-md hover:border-amber-400 hover:text-amber-900 transition-colors"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Distance Vedic Healing Banner */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Distance Vedic Kripa:</strong> Authentic Siddha Pooja, Vedic spiritual protection & energized Yantras transmitted safely to your location worldwide.
            </span>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800 shrink-0 group"
          >
            <span>Contact Baba Ji</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
