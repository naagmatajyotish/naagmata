import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, AlertCircle, RefreshCw, Heart } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

export type PolicyModalType = 'privacy' | 'terms' | 'disclaimer' | 'refund' | null;

interface PolicyModalProps {
  activeModal: PolicyModalType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ activeModal, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div
      id="policy-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#fdfcf7] text-[#2a2203] border-2 border-amber-300 rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden relative animate-scale-in"
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 text-white px-5 sm:px-8 py-4 flex items-center justify-between border-b border-amber-400">
          <div className="flex items-center gap-2.5">
            {activeModal === 'privacy' && <ShieldCheck className="w-5 h-5 text-yellow-200" />}
            {activeModal === 'terms' && <FileText className="w-5 h-5 text-yellow-200" />}
            {activeModal === 'disclaimer' && <AlertCircle className="w-5 h-5 text-yellow-200" />}
            {activeModal === 'refund' && <RefreshCw className="w-5 h-5 text-yellow-200" />}
            <h3 className="text-base sm:text-lg font-extrabold tracking-wide">
              {activeModal === 'privacy' && 'Privacy Policy (गोपनीयता नीति)'}
              {activeModal === 'terms' && 'Terms of Service & Astrological Guidance (नियम व शर्तें)'}
              {activeModal === 'disclaimer' && 'Vedic Astrological Disclaimer & Google Ads Compliance'}
              {activeModal === 'refund' && 'Cancellation & Satisfaction Policy'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
          {activeModal === 'privacy' && (
            <div className="space-y-4">
              <p className="font-semibold text-stone-900">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>
              <p>
                At <strong>Naagmata Jyotish</strong> (Shri Maa Naagdevi Siddha Peeth), we hold your personal privacy, sacred trust, and confidential consultations as our highest spiritual and ethical duty. This Privacy Policy details how your personal data is collected, used, and secured.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                1. Information We Collect
              </h4>
              <p>
                When you initiate an astrological inquiry via our contact form, phone call, or WhatsApp, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your Name, Contact Phone Number, and Email Address.</li>
                <li>Astrological details necessary for horoscope preparation: Date of Birth, Time of Birth, and Place of Birth.</li>
                <li>Photographs or family relationship context provided voluntarily for spiritual energy assessment.</li>
              </ul>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                2. How Your Information Is Used
              </h4>
              <p>
                Your details are utilized strictly and exclusively for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Calculating planetary charts (Janampatri, Kundali) and Vedic horoscope analysis.</li>
                <li>Conducting requested religious prayers, Vedic Havans, and Shanti Sankalpas.</li>
                <li>Direct communication regarding consultation appointments and spiritual advice.</li>
              </ul>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                3. Zero Third-Party Sharing & Absolute Confidentiality
              </h4>
              <p>
                We maintain an absolute zero-tolerance policy against commercializing personal data. We do not sell, rent, trade, or distribute your personal details, birth charts, or communications to any advertising network, third-party vendor, or external entity.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                4. Data Protection & Deletion
              </h4>
              <p>
                All consultations remain under strict spiritual privilege. Devotees may request permanent deletion of their submitted birth details, messages, or records at any time by contacting us directly at <a href={`mailto:${CONTACT_INFO.email}`} className="text-amber-800 font-bold underline">{CONTACT_INFO.email}</a>.
              </p>
            </div>
          )}

          {activeModal === 'terms' && (
            <div className="space-y-4">
              <p className="font-semibold text-stone-900">
                Terms of Service & Spiritual Consultation Agreement
              </p>
              <p>
                By accessing this website, scheduling a consultation, or receiving astrological remedies from Naagmata Jyotish, you acknowledge and agree to the following terms and guidelines:
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                1. Nature of Services
              </h4>
              <p>
                All consultations, Kundali matching, gemstone suggestions, Vedic Havans, and mantra recommendations are traditional Vedic astrological guidance and spiritual advisory services rooted in ancient Indian scriptures and Sanatana Dharma traditions.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                2. Voluntary Faith & Personal Discretion
              </h4>
              <p>
                Astrology is an interpretive, observational spiritual science that requires individual faith, karmic receptivity, and constructive personal effort. Clients must be at least 18 years of age to book individual consultations.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                3. Professional Boundaries (No Medical or Legal Substitute)
              </h4>
              <p>
                Astrological advice is not a substitute for licensed medical treatments, certified psychiatric diagnosis, financial investment counseling, or formal court legal representations. For acute health or legal crises, you must always seek appropriate licensed professionals.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                4. Ethical Conduct & Pure Sattvic Practices
              </h4>
              <p>
                Naagmata Jyotish strictly adheres to benevolent, peaceful Vedic practices. We do not engage in or encourage destructive sorcery, unethical interference with free will, or malicious acts toward any individual.
              </p>
            </div>
          )}

          {activeModal === 'disclaimer' && (
            <div className="space-y-4">
              <div className="bg-amber-100/70 border border-amber-300 p-3.5 rounded-2xl flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <p className="text-amber-950 font-bold text-xs sm:text-sm leading-relaxed">
                  Important Google Ads Policy Notice: Astrology and spiritual rituals are ancient faith-based spiritual disciplines. Individual experiences, spiritual insights, and life changes vary from person to person. We do not claim or guarantee supernatural, overnight, or 100% infallible outcomes.
                </p>
              </div>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                Vedic Interpretation & Astrological Scope
              </h4>
              <p>
                Astrology, Vedic horoscope readings (Kundali), gemstone recommendations, and sacred havans are based on ancient Vedic calculations (Brihat Parashara Hora Shastra, Jaimini Sutras) and individual planetary positions (Navagraha).
              </p>
              <p>
                Life decisions regarding relationships, marriage, business, and family involve multiple human, economic, and psychological variables. While our spiritual rituals and astrological remedies aim to harmonize planetary energies and foster mental peace, they work alongside human effort, mutual respect, and divine grace.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                Google Advertising Policy Compliance
              </h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong>No Guaranteed Outcomes:</strong> We do not offer or advertise guaranteed, instant, or supernatural solutions to personal problems.
                </li>
                <li>
                  <strong>No Exploitative Mind-Control:</strong> Our Vedic rituals foster mutual respect and positive harmony. We strictly respect free will and do not claim to control or coerce any person.
                </li>
                <li>
                  <strong>Transparent Communication:</strong> Devotees receive honest horoscope assessments, compassionate guidance, and sacred ritual services without deceptive promises.
                </li>
              </ul>
            </div>
          )}

          {activeModal === 'refund' && (
            <div className="space-y-4">
              <p className="font-semibold text-stone-900">
                Cancellation & Satisfaction Policy
              </p>
              <p>
                We believe in ethical spiritual service, fairness, and mutual respect between astrologer and devotee.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                1. Free Initial Guidance
              </h4>
              <p>
                Initial telephonic consultations to understand your concerns and provide preliminary Vedic horoscope direction are provided completely free with genuine compassion.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                2. Ritual Samagri & Puja Cancellation
              </h4>
              <p>
                When a dedicated Vedic Havan, Graha Shanti, or Anushthan is scheduled, sacred samagri (pure cow ghee, havan herbs, fruits, dakshina for participating Vedic Brahmins) is procured specifically in your name and gotra.
              </p>
              <p>
                If you wish to reschedule or cancel your ritual, please notify us at least 24 hours prior to the scheduled Shubh Muhurta so samagri allocations can be adjusted accordingly.
              </p>

              <h4 className="font-bold text-stone-900 text-sm sm:text-base border-b border-amber-200 pb-1">
                3. Dedicated Ongoing Support
              </h4>
              <p>
                Baba Ji remains in active spiritual communication with you before, during, and after any ritual to guide you with daily chanting, dietary sattva, and planetary meditation tips.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 px-5 sm:px-8 py-3.5 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-stone-500 text-center sm:text-left">
            Questions? Contact Ashram: <strong>{CONTACT_INFO.phoneDisplay}</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2 rounded-full cursor-pointer transition-colors shadow-xs"
          >
            I Understand & Accept (स्वीकार है)
          </button>
        </div>
      </div>
    </div>
  );
};
