import React, { useState } from 'react';
import { X, Download, Copy, Check, Sparkles, Phone, MessageCircle, Eye, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import adBannerLandscape from '../assets/images/naagmata_display_ad_1791260005418.jpg';
import adBannerSquare from '../assets/images/ad_banner_square_1791260039983.jpg';
import serviceGuptDhan from '../assets/images/service_gupt_dhan_1791174398986.jpg';

interface GoogleAdCreativesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GoogleAdCreativesModal: React.FC<GoogleAdCreativesModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'landscape' | 'square' | 'guptDhan' | 'copyText'>('landscape');
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const adCopyData = {
    shortHeadlines: [
      'प्रामाणिक वैदिक ज्योतिष परामर्श',
      'दांपत्य व प्रेम समस्या समाधान',
      'गुप्त धन व बाधा निवारण साधना',
      'पति का पर-स्त्री मोह निवारण',
      '100% गोपनीय व सात्विक उपाय'
    ],
    longHeadline: 'माँ नागदेवी सिद्ध पीठ: प्रेम, विवाह, गुप्त धन व पारिवारिक शांति हेतु 35+ वर्षों से प्रामाणिक वैदिक मार्गदर्शन',
    descriptions: [
      'शादी में रुकावट, कलह या सौतन बाधा? पूज्य बाबाजी से फोन या व्हाट्सएप पर तुरंत समाधान पाएं।',
      'जमीन में गड़े धन व नाग रक्षक दोष की सात्विक शांति एवं समस्त कष्टों का 100% गोपनीय वैदिक उपाय।'
    ],
    businessName: 'Naagmata Jyotish',
    ctaText: 'कॉल करें / Contact Us',
    finalUrl: 'https://naagmata.com/'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#fdfcf7] rounded-3xl border-2 border-amber-400 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <div>
              <h3 className="font-extrabold text-base sm:text-lg tracking-wide">
                Google Ads डिस्प्ले विज्ञापन क्रिएटर (Display Ad Creatives)
              </h3>
              <p className="text-xs text-yellow-200">
                नागमाता ज्योतिष के लिए तैयार किए गए रेडी-टू-यूज विज्ञापन बैनर व टेक्स्ट
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-amber-200 bg-amber-50/70 p-2 gap-2 overflow-x-auto text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('landscape')}
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'landscape'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Landscape Ad (1200 × 628)</span>
          </button>
          <button
            onClick={() => setActiveTab('square')}
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'square'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Square Ad (1200 × 1200)</span>
          </button>
          <button
            onClick={() => setActiveTab('guptDhan')}
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'guptDhan'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>गुप्त धन स्पेशल Ad (1200 × 628)</span>
          </button>
          <button
            onClick={() => setActiveTab('copyText')}
            className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'copyText'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-stone-700 hover:bg-amber-100 border border-amber-200'
            }`}
          >
            <Copy className="w-4 h-4" />
            <span>हेडलाइन्स व विवरण (Copy Text)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* TAB 1: LANDSCAPE AD (1200x628) */}
          {activeTab === 'landscape' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                    Google Ads Standard Landscape Ad (अनुपात: 1.91 : 1)
                  </h4>
                  <p className="text-xs text-stone-600">
                    यह बैनर Google Display Network, YouTube और न्यूज़ वेबसाइटों पर सबसे ज़्यादा बार दिखता है।
                  </p>
                </div>
                <a
                  href={adBannerLandscape}
                  download="naagmata-jyotish-google-ad-1200x628.jpg"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>फोटो डाउनलोड करें (HD)</span>
                </a>
              </div>

              {/* Rendered Live Ad Preview (Styled as real Google Display Creative) */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl bg-stone-950 aspect-[1.91/1] w-full max-w-2xl mx-auto group">
                <img
                  src={adBannerLandscape}
                  alt="Naagmata Jyotish Google Display Ad"
                  className="w-full h-full object-cover brightness-[0.88]"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-amber-500/95 text-stone-950 font-black text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-stone-950" />
                    <span>श्री माँ नागदेवी सिद्ध पीठ</span>
                  </span>
                  <span className="bg-black/60 text-yellow-300 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-yellow-400/40 backdrop-blur-xs">
                    35+ वर्षों का विश्वास
                  </span>
                </div>

                {/* Main Headline in Ad */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 space-y-1.5 sm:space-y-2">
                  <h5 className="text-white text-base sm:text-xl md:text-2xl font-black drop-shadow-md leading-tight">
                    प्रेम संबंध, विवाह बाधा, गुप्त धन व पारिवारिक कलह का समाधान
                  </h5>
                  <p className="text-yellow-200 text-xs sm:text-sm font-semibold line-clamp-1 drop-shadow-sm">
                    १००% पूर्णतः गोपनीय वैदिक ज्योतिष एवं अनुष्ठान द्वारा सात्विक मार्गदर्शन
                  </p>

                  {/* Action Bar inside Ad */}
                  <div className="flex items-center justify-between pt-1 gap-2">
                    <div className="flex items-center gap-1.5 bg-black/75 px-2.5 py-1 rounded-full border border-yellow-300/40 text-yellow-200 text-xs sm:text-sm font-black">
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>{CONTACT_INFO.phoneDisplay}</span>
                    </div>

                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-[11px] sm:text-xs px-3.5 py-1.5 rounded-full shadow-lg border border-yellow-300">
                      अभी कॉल करें →
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-stone-700">
                💡 <strong>Google Ads में कैसे लगाएं:</strong> अपने Google Ads कैंपेन में जाएं ➔ Ads & Assets ➔ New Responsive Display Ad ➔ Images में ऊपर दिए गए "फोटो डाउनलोड करें" बटन से डाउनलोड की गई फोटो अपलोड करें।
              </div>
            </div>
          )}

          {/* TAB 2: SQUARE AD (1200x1200 / 1:1) */}
          {activeTab === 'square' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                    Google Ads Standard Square Ad (अनुपात: 1 : 1)
                  </h4>
                  <p className="text-xs text-stone-600">
                    यह चौकोर बैनर मोबाइल ऐप्स, ब्लॉग्स के साइडबार और Google डिस्कवर फीड में दिखता है।
                  </p>
                </div>
                <a
                  href={adBannerSquare}
                  download="naagmata-jyotish-google-ad-1200x1200.jpg"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>फोटो डाउनलोड करें (HD)</span>
                </a>
              </div>

              {/* Rendered Square Ad Preview */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400 shadow-xl bg-stone-950 aspect-square w-full max-w-sm mx-auto group">
                <img
                  src={adBannerSquare}
                  alt="Naagmata Jyotish Square Google Display Ad"
                  className="w-full h-full object-cover brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />

                <div className="absolute top-3 left-3">
                  <span className="bg-amber-500/95 text-stone-950 font-black text-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>नागमाता ज्योतिष</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-2">
                  <h5 className="text-white text-lg font-black leading-tight drop-shadow-md">
                    समस्त जीवन समस्याओं का शास्त्रोक्त वैदिक समाधान
                  </h5>
                  <p className="text-yellow-200 text-xs font-semibold">
                    100% गोपनीय व सात्विक कुंडली परीक्षण
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-white text-xs font-black bg-black/70 px-2.5 py-1 rounded-full border border-yellow-400/40">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs px-3 py-1 rounded-full shadow-md border border-yellow-300">
                      परामर्श लें →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GUPT DHAN SPECIAL DISPLAY AD */}
          {activeTab === 'guptDhan' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                    विशेष: गुप्त धन, गड़ा धन व अकस्मात धन सिद्धि डिस्प्ले बैनर
                  </h4>
                  <p className="text-xs text-stone-600">
                    गुप्त धन व पैतृक संपत्ति के लिए विशेष विज्ञापन बैनर (High CTR & Leads)
                  </p>
                </div>
                <a
                  href={serviceGuptDhan}
                  download="naagmata-gupt-dhan-display-ad.jpg"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>फोटो डाउनलोड करें (HD)</span>
                </a>
              </div>

              {/* Rendered Gupt Dhan Ad Preview */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-400 shadow-xl bg-stone-950 aspect-[1.91/1] w-full max-w-2xl mx-auto group">
                <img
                  src={serviceGuptDhan}
                  alt="Gupt Dhan Google Display Ad"
                  className="w-full h-full object-cover brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                <div className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-black text-xs px-3 py-1 rounded-full shadow-lg border border-yellow-200">
                  🪙 गुप्त धन व गड़ा धन सिद्धि अनुष्ठान
                </div>

                <div className="absolute bottom-3 left-3 right-3 space-y-1.5">
                  <h5 className="text-white text-base sm:text-xl font-black drop-shadow-md">
                    जमीन में गड़े धन का आभास • नाग रक्षक दोष व तांत्रिक कीलन शांति
                  </h5>
                  <p className="text-yellow-200 text-xs sm:text-sm font-semibold">
                    बिना किसी अनहोनी या नुकसान के सात्विक व सुरक्षित गुप्त धन प्राप्ति विधान
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-yellow-300 text-xs sm:text-sm font-black bg-black/80 px-3 py-1 rounded-full border border-yellow-400/50">
                      📞 {CONTACT_INFO.phoneDisplay}
                    </span>
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-xs px-3.5 py-1.5 rounded-full border border-yellow-300">
                      समाधान पाएं →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: READY-TO-COPY HEADLINES & DESCRIPTIONS */}
          {activeTab === 'copyText' && (
            <div className="space-y-5">
              <div>
                <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                  Google Ads में डालने के लिए तैयार हेडलाइन्स व विवरण
                </h4>
                <p className="text-xs text-stone-600">
                  नीचे दिए गए बटन्स पर क्लिक करके सीधे कॉपी करें और Google Ads में पेस्ट करें:
                </p>
              </div>

              {/* Short Headlines */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  1. शॉर्ट हेडलाइन्स (Short Headlines - Max 30 Chars)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {adCopyData.shortHeadlines.map((headline, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-stone-800"
                    >
                      <span className="truncate pr-2">{headline}</span>
                      <button
                        onClick={() => handleCopy(headline, `sh-${idx}`)}
                        className="px-2 py-1 rounded-md bg-amber-100 hover:bg-amber-200 text-amber-900 text-[11px] font-bold flex items-center gap-1 shrink-0 transition-colors"
                      >
                        {copiedIndex === `sh-${idx}` ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">कॉपी हुआ!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>कॉपी</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long Headline */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  2. लॉन्ग हेडलाइन (Long Headline - Max 90 Chars)
                </label>
                <div className="flex items-center justify-between p-3 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-stone-800">
                  <span className="pr-2">{adCopyData.longHeadline}</span>
                  <button
                    onClick={() => handleCopy(adCopyData.longHeadline, 'lh')}
                    className="px-2.5 py-1.5 rounded-md bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1 shrink-0 transition-colors"
                  >
                    {copiedIndex === 'lh' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">कॉपी हुआ!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>कॉपी करें</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Descriptions */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                  3. विवरण (Descriptions - Max 90 Chars)
                </label>
                <div className="space-y-2">
                  {adCopyData.descriptions.map((desc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 bg-white border border-amber-200 rounded-xl text-xs font-semibold text-stone-800"
                    >
                      <span className="pr-2">{desc}</span>
                      <button
                        onClick={() => handleCopy(desc, `desc-${idx}`)}
                        className="px-2.5 py-1.5 rounded-md bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold flex items-center gap-1 shrink-0 transition-colors"
                      >
                        {copiedIndex === `desc-${idx}` ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">कॉपी हुआ!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>कॉपी करें</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Name & Final URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-white border border-amber-200 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-stone-500">Business Name:</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900">Naagmata Jyotish</span>
                    <button
                      onClick={() => handleCopy('Naagmata Jyotish', 'bname')}
                      className="text-amber-700 font-bold hover:underline"
                    >
                      {copiedIndex === 'bname' ? 'कॉपी हुआ!' : 'कॉपी'}
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-white border border-amber-200 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-stone-500">Final URL (वेबसाइट लिंक):</span>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-stone-900 truncate pr-2">https://naagmata.com/</span>
                    <button
                      onClick={() => handleCopy('https://naagmata.com/', 'furl')}
                      className="text-amber-700 font-bold hover:underline shrink-0"
                    >
                      {copiedIndex === 'furl' ? 'कॉपी हुआ!' : 'कॉपी'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-amber-50/90 border-t border-amber-200 gap-3 shrink-0">
          <div className="text-xs text-stone-600 font-medium">
            ✅ <strong>Google Ads Approved Format:</strong> ये सभी बैनर Google की विज्ञापनों की नीतियों के पूर्णतः अनुकूल हैं।
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs shadow-sm transition-all"
          >
            बंद करें (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
