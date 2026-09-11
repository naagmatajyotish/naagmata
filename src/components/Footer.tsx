import React from 'react';
import { Phone, MessageCircle, Mail, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, SACRED_SERVICES } from '../data/jyotishData';
import { NaagdeviLogo } from './NaagdeviLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fcfaf2] border-t border-amber-200/80 pt-16 pb-24 md:pb-16 px-4 sm:px-6 text-stone-700 text-xs sm:text-sm transition-colors duration-400">
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
                <span className="font-['Noto_Sans_Devanagari',sans-serif]">नागमाता ज्योतिष</span>
                <span className="text-amber-400">•</span>
                <span className="font-['Noto_Sans_Gujarati',sans-serif]">નાગમાતા જ્યોતિષ</span>
              </div>
              <span className="text-[10px] text-amber-800 font-bold uppercase tracking-widest font-sans mt-0.5">
                Maa Naagdevi Siddhapeeth
              </span>
            </div>
          </div>
          <p className="text-stone-600 text-xs leading-relaxed">
            World-renowned Tantrik Sadhak & Vedic Astrologer blessed by Maa Naagdevi with 35+ years of dedicated spiritual mastery. Providing pure, harmless, and fast solutions for love, marital, black magic, and financial hardships worldwide.
          </p>
          <div className="flex items-center space-x-2 text-xs text-stone-700 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Strictly Confidential & Secure Communication</span>
          </div>
        </div>

        {/* Column 2: Sacred Services Links */}
        <div className="space-y-3">
          <h4 className="heading-mystic text-base font-bold text-stone-900 tracking-wider">
            Spiritual Services
          </h4>
          <ul className="space-y-2.5 text-xs">
            {SACRED_SERVICES.slice(0, 5).map((service) => (
              <li key={service.id}>
                <a
                  href="#services"
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 font-medium"
                >
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{service.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="heading-mystic text-base font-bold text-stone-900 tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-xs font-medium">
            <li>
              <a href="#services" className="hover:text-amber-800 transition-colors">Specialized Rituals</a>
            </li>
            <li>
              <a href="#calculator" className="hover:text-amber-800 transition-colors">Free Kundali Compatibility</a>
            </li>
            <li>
              <a href="#consultation" className="hover:text-amber-800 transition-colors">Confidential Consultation Form</a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-amber-800 transition-colors">Why Devotees Choose Baba Ji</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-amber-800 transition-colors">Devotee Reviews</a>
            </li>
            <li>
              <a href="#faq" className="hover:text-amber-800 transition-colors">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Support */}
        <div className="space-y-3">
          <h4 className="heading-mystic text-base font-bold text-stone-900 tracking-wider">
            Ashram Direct Help
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
                Direct WhatsApp Support
              </a>
            </p>
            <p className="flex items-center gap-2 text-stone-700 font-medium">
              <Mail className="w-3.5 h-3.5 text-amber-600" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber-700 break-all">
                {CONTACT_INFO.email}
              </a>
            </p>
            <p className="text-amber-800 pt-1 text-[11px] font-medium">
              Available 24 Hours / 7 Days for worldwide devotees under Maa Naagdevi protection.
            </p>
          </div>
        </div>
      </div>

      {/* International Astrological Consultation Hubs (Global SEO Directory) */}
      <div className="max-w-7xl mx-auto pt-8 pb-6 border-t border-amber-200/60 text-xs text-stone-600">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left mb-3">
          <span className="font-bold text-stone-900 uppercase tracking-wider text-[11px] text-amber-950">
            🌍 Global Consultations & Distance Vedic Havans:
          </span>
          <span className="text-[11px] text-amber-800 font-semibold">
            USA • UK • Canada • Australia • UAE • New Zealand • Europe
          </span>
        </div>
        <p className="text-[11px] text-stone-500 leading-relaxed text-center md:text-left">
          <strong>Key International Areas Served:</strong> New York, California (Bay Area, LA), Texas (Dallas, Houston), New Jersey (Edison), Chicago, London (Wembley, Southall), Birmingham, Leicester, Manchester, Toronto (Brampton, Mississauga), Vancouver (Surrey), Calgary, Sydney, Melbourne, Brisbane, Perth, Auckland, Dubai, Abu Dhabi, and Singapore.
        </p>
      </div>

      {/* Sacred Shanti Blessing & Disclaimer */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-stone-200 text-center space-y-3">
        <p className="text-xs text-amber-900 font-serif italic font-bold tracking-wide">
          "Sarve Bhavantu Sukhinah, Sarve Santu Niraamayaah • May all beings be happy, peaceful, and free from suffering"
        </p>
        <p className="text-[11px] text-stone-500 max-w-3xl mx-auto leading-relaxed">
          Disclaimer: Astrology and spiritual rituals are ancient Vedic faith-based practices. Results and timelines may vary based on individual karmic factors, personal devotion, and planetary configurations. We strictly practice positive, harmless Vedic spirituality.
        </p>
        <p className="text-xs text-stone-500 pt-2 font-medium">
          © {new Date().getFullYear()} Naagmata Jyotish. All Rights Reserved. Devoted to Maa Naagdevi, Truth, Love & Universal Peace.
        </p>
      </div>
    </footer>
  );
};
