import React, { useState } from 'react';
import { Send, ShieldCheck, CheckCircle2, Lock, Sparkles, Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';

export const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    problemType: 'Lost Love Back & Vashikaran',
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
            <span>Strict Confidentiality Assured Under Maa Naagdevi Kripa</span>
          </div>

          <h3 className="heading-mystic text-2xl sm:text-4xl font-extrabold text-stone-900 mb-2">
            Direct Consultation With Baba Ji
          </h3>
          <p className="text-stone-600 text-sm max-w-lg mx-auto">
            For fastest relief, calling directly is preferred. You can directly call Baba Ji on phone or submit your request below.
          </p>
        </div>

        {/* Prominent Direct Call Banner (Client Direct Call Preferred) */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-600 to-orange-600 text-white shadow-xl shadow-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border border-amber-300/40">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 border border-white/30">
              <Phone className="w-6 h-6 text-white animate-bounce" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-100 block">
                ⭐ DIRECT ASTROLOGICAL COUNSELING WITH BABA JI
              </span>
              <h4 className="font-extrabold text-base sm:text-lg text-white">
                Speak Directly with Baba Ji for Personalized Vedic Astrological Guidance
              </h4>
            </div>
          </div>
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-amber-50 text-stone-950 font-black px-6 py-3 rounded-xl text-sm sm:text-base shadow-lg transition-all hover:scale-105 whitespace-nowrap cursor-pointer border border-amber-200"
          >
            <Phone className="w-4 h-4 text-orange-600 shrink-0" />
            <span>Call: {CONTACT_INFO.phoneDisplay}</span>
          </a>
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
                  Your Full Name <span className="text-amber-600">*</span>
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
                  WhatsApp / Phone Number <span className="text-amber-600">*</span>
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
                  Nature of Consultation <span className="text-amber-600">*</span>
                </label>
                <select
                  value={formData.problemType}
                  onChange={(e) => setFormData({ ...formData, problemType: e.target.value })}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                >
                  <option value="Lost Love Problem & Vashikaran">Lost Love Problem & Vashikaran</option>
                  <option value="Intercaste Love Marriage & Vashikaran">Intercaste Love Marriage & Vashikaran</option>
                  <option value="Husband-Wife Dispute & Marital Vashikaran">Husband-Wife Dispute & Marital Vashikaran</option>
                  <option value="Relationship Harmony & Astrological Remedies">Relationship Harmony & Astrological Remedies</option>
                  <option value="Negative Energy Cleansing & Protection Puja">Negative Energy Cleansing & Protection Puja</option>
                  <option value="Career, Business & Financial Astrology">Career, Business & Financial Astrology</option>
                  <option value="Planetary Dosha Shanti (Manglik, Kaal Sarp)">Planetary Dosha Shanti (Manglik, Kaal Sarp)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Partner / Spouse Name (Optional)
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
                  Date of Birth (Optional)
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
                  Your City / Country
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, India / London, UK"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-12 bg-stone-50 border border-stone-200 rounded-xl px-4 text-stone-900 placeholder-stone-400 text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Briefly Describe Your Situation
              </label>
              <textarea
                rows={3}
                placeholder="Explain what is happening (e.g. partner stopped calling, parents not agreeing, constant arguments at home...)"
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
                <span>Submit Details & Connect With Baba Ji</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-stone-500 font-medium">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Strictly Confidential & Encrypted
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Initial Diagnosis Free
              </span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
