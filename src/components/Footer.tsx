import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, ShieldCheck, FileText, AlertCircle, RefreshCw } from 'lucide-react';
import { CONTACT_INFO, SACRED_SERVICES } from '../data/jyotishData';
import { NaagdeviLogo } from './NaagdeviLogo';
import { PolicyModal, PolicyModalType } from './PolicyModal';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<PolicyModalType>(null);

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
              Traditional Vedic Astrologer & Spiritual Counselor blessed by Maa Naagdevi with 35+ years of dedicated spiritual knowledge. Providing ethical, peaceful, and compassionate guidance for relationships, family harmony, and planetary dosha remedies.
            </p>
            <div className="flex items-center space-x-2 text-xs text-stone-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Strictly Confidential & Secure Consultations</span>
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
              <span>Policies & Trust</span>
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('privacy')}
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Privacy Policy (गोपनीयता नीति)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('terms')}
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Terms of Service (नियम व शर्तें)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('disclaimer')}
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-left cursor-pointer font-bold text-amber-900"
                >
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Astrological Disclaimer (अस्वीकरण)</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal('refund')}
                  className="hover:text-amber-800 transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Cancellation & Satisfaction Policy</span>
                </button>
              </li>
              <li className="pt-1">
                <a href="#faq" className="hover:text-amber-800 transition-colors">
                  Frequently Asked Questions
                </a>
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

        {/* Sacred Shanti Blessing & Detailed Google-Compliant Astrological Disclaimer */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-stone-200 text-center space-y-3">
          <p className="text-xs text-amber-900 font-serif italic font-bold tracking-wide">
            "Sarve Bhavantu Sukhinah, Sarve Santu Niraamayaah • May all beings be happy, peaceful, and free from suffering"
          </p>
          <div className="bg-amber-50/60 border border-amber-200/60 py-2 px-4 rounded-xl max-w-2xl mx-auto text-[10px] text-stone-500 leading-normal text-center">
            <span className="font-semibold text-stone-700">Disclaimer:</span> Astrology & Vedic rituals are faith-based spiritual practices. Results vary individually. No guaranteed or supernatural outcomes. Not a substitute for medical, legal, or financial professional services.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-amber-900 font-semibold pt-1">
            <button
              type="button"
              onClick={() => setActiveModal('privacy')}
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('terms')}
              className="hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('disclaimer')}
              className="hover:underline cursor-pointer"
            >
              Astrological Disclaimer
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setActiveModal('refund')}
              className="hover:underline cursor-pointer"
            >
              Cancellation Policy
            </button>
          </div>

          <p className="text-xs text-stone-500 pt-2 font-medium">
            © {new Date().getFullYear()} Naagmata Jyotish. All Rights Reserved. Devoted to Maa Naagdevi, Truth, Love & Universal Peace.
          </p>
        </div>
      </footer>

      {/* Interactive Policy Modal */}
      <PolicyModal activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
};
