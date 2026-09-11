import React, { useState } from 'react';
import { Globe2, MapPin, Clock, Phone, MessageCircle, Shield, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

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
    id: 'usa',
    name: 'United States (USA)',
    flag: '🇺🇸',
    badge: 'High Priority 24/7 NRI Support',
    timezones: 'EST • CST • MST • PST (Instant slots available)',
    topCities: [
      'New York (NYC & Long Island)',
      'New Jersey (Edison, Jersey City, Woodbridge)',
      'California (San Jose, SF Bay Area, Los Angeles)',
      'Texas (Dallas, Houston, Austin, Plano)',
      'Illinois (Chicago, Naperville)',
      'Georgia (Atlanta, Alpharetta)',
      'Washington (Seattle, Bellevue)',
      'Florida (Tampa, Orlando, Miami)'
    ],
    popularSearches: [
      'Best Indian Astrologer in USA',
      'Vashikaran Specialist in New York',
      'Get Ex Love Back Astrologer California',
      'Indian Astrologer in Texas',
      'Intercaste Love Marriage Specialist USA',
      'Black Magic Removal Astrologer New Jersey',
      'Husband Wife Problem Solution Chicago',
      'Top Indian Pandit Ji in USA'
    ],
    highlights: [
      'Flexible consultation according to American evening & weekend time zones',
      'Private phone & WhatsApp audio sessions with complete confidentiality',
      'Live photo/video proof of remote Vedic Havans and Sankalpa',
      'Fast 24-48 hours turnaround for high-stress relationship emergencies'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'uk',
    name: 'United Kingdom (UK)',
    flag: '🇬🇧',
    badge: 'Most Trusted Indian Astrologer in UK',
    timezones: 'GMT • BST (London standard time)',
    topCities: [
      'London (Wembley, Southall, Harrow, Ilford, Hounslow)',
      'Birmingham (Handsworth, Smethwick)',
      'Leicester (Belgrave Road, Evington)',
      'Manchester & Bolton',
      'Leeds & Bradford',
      'Slough & Reading',
      'Coventry & Wolverhampton',
      'Luton & Milton Keynes'
    ],
    popularSearches: [
      'Best Indian Astrologer in UK',
      'Top Vashikaran Specialist London',
      'Indian Astrologer in Birmingham',
      'Famous Astrologer in Leicester',
      'Get Ex Love Back Specialist UK',
      'Husband Wife Dispute Solution London',
      'Black Magic Removal UK',
      'Divorce Cancellation Astrologer UK'
    ],
    highlights: [
      'Specialized consultations for British-Indian and South Asian families',
      'Resolving sensitive intercaste, cross-cultural, and family objection crises',
      'Immediate same-day telephone appointments for urgent breakup situations',
      'Over 4,200+ satisfied clients across Greater London and the Midlands'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    badge: 'Top Rated in Ontario & British Columbia',
    timezones: 'EST • PST • MST (Toronto & Vancouver friendly)',
    topCities: [
      'Greater Toronto Area (Brampton, Mississauga, Vaughan)',
      'Vancouver & Surrey (British Columbia)',
      'Calgary & Edmonton (Alberta)',
      'Ottawa & Montreal',
      'Winnipeg & Kitchener-Waterloo'
    ],
    popularSearches: [
      'Best Indian Astrologer in Canada',
      'Indian Astrologer in Brampton',
      'Top Astrologer in Toronto',
      'Vashikaran Specialist in Surrey BC',
      'Get Love Back Fast in Canada',
      'Love Marriage Problem Solution Mississauga',
      'Evil Eye & Negative Energy Removal Canada',
      'Famous Tantrik Baba Ji in Canada'
    ],
    highlights: [
      'Direct one-on-one session for students, PR holders, and settled diaspora',
      'Remedies for career stall, PR delays, spousal tension, and relationship breakups',
      'Ancient Maa Naagdevi Tantrik Kavach dispatched or energized remotely',
      'Strict and complete personal data privacy protection'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'australia',
    name: 'Australia & New Zealand',
    flag: '🇦🇺 🇳🇿',
    badge: 'Sydney & Melbourne Dedicated Desk',
    timezones: 'AEST • ACST • AWST • NZST',
    topCities: [
      'Sydney (Parramatta, Blacktown, Harris Park, Liverpool)',
      'Melbourne (Dandenong, Tarneit, Craigieburn)',
      'Brisbane & Gold Coast',
      'Perth & Adelaide',
      'Auckland & Wellington (NZ)'
    ],
    popularSearches: [
      'Best Indian Astrologer in Australia',
      'Astrologer in Sydney',
      'Top Astrologer in Melbourne',
      'Vashikaran Specialist in Australia',
      'Get Ex Love Back in Sydney',
      'Love Marriage Astrologer Melbourne',
      'Indian Astrologer in Auckland NZ',
      'Black Magic Removal Specialist Australia'
    ],
    highlights: [
      'Convenient morning and evening consultation slots matched to Australian time',
      'Effective solutions for long-distance relationships and partner misunderstandings',
      'Proven Vedic dosha pacification for Rahu-Ketu, Manglik dosha, and Kaal Sarp',
      'Assured privacy and discreet spiritual assistance'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'uae',
    name: 'UAE & Gulf Countries',
    flag: '🇦🇪 🇶🇦 🇴🇲',
    badge: 'Dubai & Gulf Express Consultations',
    timezones: 'GST • AST (Gulf Standard Time)',
    topCities: [
      'Dubai (Bur Dubai, Karama, Deira, Marina, Al Nahda)',
      'Abu Dhabi & Al Ain',
      'Sharjah & Ajman',
      'Doha (Qatar)',
      'Muscat (Oman) & Kuwait City'
    ],
    popularSearches: [
      'Best Indian Astrologer in Dubai',
      'Vashikaran Specialist UAE',
      'Love Problem Solution in Dubai',
      'Indian Astrologer in Abu Dhabi',
      'Black Magic Removal in Dubai',
      'Business Growth Astrology UAE',
      'Husband Wife Dispute Solution Sharjah',
      'Famous Indian Jyotish in Gulf'
    ],
    highlights: [
      'Same-day WhatsApp audio & video appointments for Gulf residents',
      'Business prosperity, partnership dispute, and sudden financial blockage remedies',
      'Rapid love relationship reconciliation and marital discord removal',
      'Strictly confidential and judgment-free guidance'
    ],
    directHelpline: '+91 97141 27309'
  },
  {
    id: 'europe',
    name: 'Europe & Worldwide',
    flag: '🇪🇺 🇸🇬 🇲🇾',
    badge: 'Global Remote Distance Healing',
    timezones: 'CET • SGT (Central European & Singapore Time)',
    topCities: [
      'Germany (Frankfurt, Berlin, Munich)',
      'France (Paris, Lyon)',
      'Netherlands (Amsterdam, The Hague)',
      'Italy (Milan, Rome)',
      'Singapore & Malaysia (Kuala Lumpur)'
    ],
    popularSearches: [
      'Indian Astrologer in Europe',
      'Online Vedic Astrology Consultation Worldwide',
      'Love Vashikaran Specialist Germany',
      'Indian Astrologer in Singapore',
      'Distance Energy Clearing and Protection',
      'Ex Partner Reconciliation Abroad'
    ],
    highlights: [
      'Distance energy reading using sacred photograph and horoscope analysis',
      'Custom energized Yantras and distance Tantrik Vidhan performed at Siddha Peeth',
      'Multi-language friendly: Consult in Hindi, Gujarati, or English',
      'Round-the-clock emergency support'
    ],
    directHelpline: '+91 97141 27309'
  }
];

export const GlobalPresence: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('usa');

  const selectedCountry = COUNTRIES_DATA.find((c) => c.id === activeTab) || COUNTRIES_DATA[0];

  return (
    <section
      id="international-seo"
      className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto border-t border-amber-200/80 w-full overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <Globe2 className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
          <span>International & Overseas Vedic Consultations</span>
        </div>
        <h2 className="heading-mystic text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight">
          Best Indian Astrologer & Vashikaran Specialist in USA, UK, Canada & Worldwide
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 text-xs sm:text-sm md:text-base leading-relaxed">
          Living abroad away from ancestral spiritual centers? Respected Baba Ji has guided over <strong className="text-stone-900 font-bold">14,800+ NRI and international families</strong> across the USA, UK, Canada, Australia, and UAE with authentic Vedic Tantra, remote photo-based rituals, and prompt 24–48 hour resolutions.
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
                  {selectedCountry.name} Astrology & Vashikaran Services
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
                    `Namaskar Baba Ji, I am contacting you from ${selectedCountry.name} regarding urgent astrological consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp From {selectedCountry.name}</span>
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
              <strong>Distance Vedic Kripa:</strong> Authentic Siddha Pooja, Tantrik protection & energized Yantras transmitted safely to your location worldwide.
            </span>
          </div>
          <a
            href="#consultation"
            className="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-800 shrink-0 group"
          >
            <span>Book Confidential Form</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
