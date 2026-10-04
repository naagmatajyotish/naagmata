import React, { useState } from 'react';
import { Send, ShieldCheck, CheckCircle2, Lock, Sparkles, Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ConsultationForm: React.FC = () => {
  const { lang } = useLanguage();
  const t = TRANSLATIONS[lang].form;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problemType: 'Lost Love Problem & Relationship Solutions',
    partnerName: '',
    dob: '',
    city: '',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp prefilled message
    const message = `*Divine Consultation Request - Naagmata Jyotish*
---------------------------------------
*Devotee Name:* ${formData.name}
*Phone / WhatsApp:* ${formData.phone}
*Problem Category:* ${formData.problemType}
*Partner/Spouse Name:* ${formData.partnerName || 'N/A'}
*Date of Birth:* ${formData.dob || 'Not provided'}
*Location:* ${formData.city || 'Not provided'}
*Situation Details:*
${formData.details || 'Urgent guidance required.'}
---------------------------------------
Pranam Baba Ji, please review my details and guide me with your divine blessings.`;

    const whatsappUrl = `https://wa.me/919714127309?text=${encodeURIComponent(message)}`;
    
    // Trigger Google Tag conversion event
    try {
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
          send_to: 'AW-18450282399',
          event_category: 'Lead',
          event_action: 'Form Submit',
          event_label: formData.concern || 'Vedic Consultation'
        });
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'generate_lead', {
          service_category: formData.concern
        });
      }
    } catch {
      // Ignore if analytics blocked by adblock
    }

    // Open WhatsApp in new window
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="consultation" className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full overflow-hidden">
      <div className="bg-white rounded-3xl border border-amber-200/90 p-6 sm:p-10 relative overflow-hidden shadow-xl shadow-amber-500/5 transition-colors duration-400 w-full">
        <div 
          className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 rounded-full blur-2xl pointer-events-none opacity-20"
          style={{ backgroundColor: 'var(--accent-primary, #d97706)' }}
        ></div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-semibold mb-3">
            <Lock className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.badge}</span>
          </div>

          <h3 className="heading-mystic text-2xl sm:text-4xl font-extrabold text-stone-900 mb-2">
            {t.title}
          </h3>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 bg-amber-50/60 border border-amber-200 rounded-2xl p-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="heading-mystic text-xl font-bold text-stone-900">Your Request Has Been Dispatched</h4>
            <p className="text-stone-600 text-sm max-w-md mx-auto">
              Your details have been received in strict confidence. Baba Ji will review your planetary configurations and guide you on WhatsApp or Phone shortly.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4" /> Call Direct: {CONTACT_INFO.phoneDisplay}
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium py-2.5 px-6 rounded-xl text-sm transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.nameLabel} <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.phoneLabel} <span className="text-amber-600">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.problemTypeLabel} <span className="text-amber-600">*</span>
                </label>
                <select
                  value={formData.problemType}
                  onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                >
                  {t.problemOptions && t.problemOptions.length > 0 ? (
                    t.problemOptions.map((opt, i) => (
                      <option key={i} value={opt.value}>
                        {opt.label}
                      </option>
                    ))
                  ) : (
                    <>
                      <option value="Lost Love Problem & Relationship Solutions">Lost Love Problem & Relationship Solutions</option>
                      <option value="Intercaste Love Marriage & Family Consent">Intercaste Love Marriage & Family Consent</option>
                      <option value="Husband-Wife Dispute & Marital Peace">Husband-Wife Dispute & Marital Peace</option>
                      <option value="Relationship Compatibility & Kundali Matching">Relationship Compatibility & Kundali Matching</option>
                      <option value="Negative Energy Cleansing & Protection Puja">Negative Energy Cleansing & Protection Puja</option>
                      <option value="Career, Business & Financial Astrology">Career, Business & Financial Astrology</option>
                      <option value="Planetary Dosha Shanti (Manglik, Kaal Sarp)">Planetary Dosha Shanti (Manglik, Kaal Sarp)</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'साथी / जीवनसाथी का नाम (वैकल्पिक)' : lang === 'gu-en' ? 'સાથીદાર / જીવનસાથીનું નામ (ઓપ્શનલ)' : 'Partner / Spouse Name (Optional)'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Priya"
                  value={formData.partnerName}
                  onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'जन्म तिथि' : lang === 'gu-en' ? 'જન્મ તારીખ' : 'Date of Birth'}
                </label>
                <div className="relative flex items-center">
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full h-12 bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 text-stone-900 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                  />
                  <Calendar className="w-4 h-4 text-amber-700 absolute left-3.5 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  {t.cityLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.cityPlaceholder || "e.g. Ahmedabad, Delhi, London, New York"}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-12 bg-stone-50 border border-stone-200 rounded-xl px-4 text-stone-900 placeholder-stone-400 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                {t.detailsLabel}
              </label>
              <textarea
                rows={3}
                placeholder={t.detailsPlaceholder || "Explain what is happening..."}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-400 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none resize-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-extrabold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 text-base shadow-lg shadow-amber-500/25 transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5 text-white" />
                <span>{t.submitWhatsApp}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 pt-2 text-xs text-stone-500 font-medium text-center">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Strictly Confidential & Encrypted
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Initial Kundali Guidance
              </span>
            </div>

            <p className="text-[11px] text-stone-400 text-center pt-1 leading-normal">
              *Disclaimer: Astrology & Vedic rituals are spiritual, faith-based services. Individual results vary. No supernatural guarantees are made.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
