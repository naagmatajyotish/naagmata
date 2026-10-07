import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const getFaqs = (): FaqItemData[] => {
    if (lang === 'hi') {
      return [
        {
          id: 'faq-hi-par-istri',
          question: 'पति का पर-स्त्री मोह, सौतन बाधा या बाहरी आकर्षण दूर करने के लिए क्या वैदिक उपाय हैं?',
          answer: 'जब जन्मकुंडली के सप्तम भाव (विवाह) अथवा द्वादश भाव पर राहु, केतु या दूषित शुक्र का प्रभाव होता है, तो पति का मन भटकने लगता है और वह पराई स्त्री के आकर्षण या चंगुल में आ जाता है। पूज्य बाबाजी कामाख्या-बगलामुखी संपुटित मंत्र साधना एवं शुक्र-राहु शांति अनुष्ठान द्वारा उस बाहरी सम्मोहन व आकर्षण को जड़ से समाप्त करते हैं, जिससे पति का मन अन्य स्त्री से विरक्त होकर अपनी पत्नी व बच्चों के प्रति पुनः समर्पित हो जाता है।'
        },
        {
          id: 'faq-hi-santan',
          question: 'यदि संतान माता-पिता की बात न माने, अत्यधिक जिद्दी हो या गलत संगति और मोबाइल की लत में पड़ जाए तो क्या उपाय हैं?',
          answer: 'कुंडली का पंचम भाव संतान, बुद्धि और संस्कारों का भाव होता है। इस पर राहु या पाप ग्रहों की कुदृष्टि होने पर संतान हठी, आक्रामक और गलत संगति या स्क्रीन की लत में पड़ जाती है। पूज्य बाबाजी पंचम भाव राहु-बुध शांति, माँ सरस्वती-बृहस्पति महाजाप एवं सिद्ध वैदिक रक्षा कवच द्वारा संतान की बुद्धि को सकारात्मक दिशा में मोड़कर आज्ञाकारी, एकाग्र और संस्कारवान बनाते हैं।'
        },
        {
          id: 'faq-hi-cities',
          question: 'क्या मैं अपने शहर (मुंबई, दिल्ली, जयपुर, इंदौर, लखनऊ, अहमदाबाद, सूरत आदि) से घर बैठे परामर्श ले सकता हूँ?',
          answer: 'हाँ, बिल्कुल! पूरे भारत के सभी प्रमुख नगरों — जैसे मुंबई, पुणे, ठाणे, दिल्ली NCR, जयपुर, जोधपुर, इंदौर, उज्जैन, भोपाल, लखनऊ, कानपुर, वाराणसी, पटना, चंडीगढ़, कोलकाता, बेंगलुरु, हैदराबाद, अहमदाबाद, सूरत, वडोदरा, राजकोट आदि के भक्त घर बैठे सीधे फोन कॉल द्वारा 24/7 व्यक्तिगत परामर्श एवं ऑनलाइन वैदिक अनुष्ठान का संकल्प ले सकते हैं।'
        },
        {
          id: 'faq-hi-1',
          question: 'क्या मैं अपनी प्रेम व वैवाहिक समस्या पर हिंदी में विस्तृत परामर्श ले सकता हूँ?',
          answer: 'हाँ, बिल्कुल। पूज्य बाबा जी पूर्णतः हिंदी एवं सरल भाषा में आपकी बात सुनते हैं। उत्तर भारत (दिल्ली, यूपी, बिहार, राजस्थान, हरियाणा, एमपी, पंजाब) के हजारों भक्त नियमित रूप से फोन और WhatsApp पर अपनी जन्मकुंडली व दांपत्य समस्याओं का सटीक समाधान प्राप्त कर रहे हैं।'
        },
        {
          id: 'faq-hi-2',
          question: 'वैदिक ज्योतिष उपाय व महाहवन कैसे काम करते हैं?',
          answer: 'वैदिक पद्धति में जन्मपत्रिका के सातवें (विवाह/प्रेम), पंचम (प्रेम संबंध) एवं नवग्रहों की अशुभ दशाओं का शांति विधान किया जाता है। सात्त्विक महाहवन, मंत्र जाप और सिद्ध रक्षा कवच के माध्यम से दोनों पक्षों के मन में सकारात्मक ऊर्जा और प्रेम का संचार होता है।'
        },
        {
          id: 'faq-hi-3',
          question: 'क्या आपकी पद्धति पूर्णतः सुरक्षित व सात्त्विक है?',
          answer: 'हाँ, १००% सात्त्विक और शास्त्रसम्मत। हम किसी भी प्रकार की नकारात्मक या हानिकारक विद्या का प्रयोग नहीं करते। हमारी सभी विधियां केवल भगवान शिव-पार्वती (गौरी-शंकर), माँ नागदेवी और नवग्रहों की अनुकंपा से प्रेम, शांति और पारिवारिक सौहार्द स्थापित करने के लिए की जाती हैं।'
        },
        {
          id: 'faq-hi-4',
          question: 'क्या मेरी बातचीत और जानकारी पूर्णतः गोपनीय रहेगी?',
          answer: 'आपकी पहचान, जन्म विवरण, फोटो, पारिवारिक परिस्थिति और हमारे बीच हुई हर बातचीत आजीवन १००% गोपनीय रखी जाती है। यह हमारी नैतिक व आध्यात्मिक शपथ है।'
        },
        {
          id: 'faq-hi-5',
          question: 'यदि मेरे पास जन्म समय न हो, तो क्या परामर्श संभव है?',
          answer: 'हाँ। यदि आपके पास सटीक जन्म समय नहीं है, तो बाबा जी प्रश्न कुंडली (Horary Astrology), हस्तरेखा, नाम व फोटो के माध्यम से ग्रहों की स्थिति देखकर सटीक उपाय बताते हैं।'
        },
        {
          id: 'faq-hi-6',
          question: 'क्या दूर बैठे (Online) पूजा व अनुष्ठान संपन्न हो सकते हैं?',
          answer: 'हाँ। देश-विदेश के भक्त जो आश्रम नहीं आ सकते, उनके नाम-गोत्र और संकल्प के साथ बाबा जी पवित्र यज्ञशाला में विधिपूर्वक हवन करते हैं और WhatsApp पर लाइव वीडियो/फोटो व आशीर्वाद प्रेषित करते हैं।'
        }
      ];
    }

    if (lang === 'gu-en') {
      return [
        {
          id: 'faq-gu-par-istri',
          question: 'પતિના પર-સ્ત્રી મોહ, સોતન બાધા કે આકર્ષણ મુક્તિ માટે વૈદિક ઉપાય શું છે? (Husband affair & third-party removal)',
          answer: 'કુંડળીના ૭મા કે ૧૨મા ભાવ પર રાહુ કે દૂષિત શુક્રના દોષથી પતિ પર-સ્ત્રીના સંમોહન કે ખોટા સંપર્કમાં આવી જાય છે. પૂજ્ય બાબાજી કામાખ્યા-બગલામુખી વિધાન અને શુક્ર-રાહુ શાંતિ અનુષ્ઠાન દ્વારા પર-સ્ત્રીનો પ્રભાવ કાયમી દૂર કરી પતિ-પત્નીમાં અખંડ પ્રેમ, આદર અને સમર્પણ પુનઃ સ્થાપિત કરે છે.'
        },
        {
          id: 'faq-gu-santan',
          question: 'સંતાન વાત ન માને, જીદ્દી હોય કે ખોટી સંગત અને મોબાઈલની લતમાં હોય તો શું ઉપાય? (Child guidance & obedience)',
          answer: 'કુંડળીનો ૫મો ભાવ બુદ્ધિ અને સંસ્કારનો છે. ૫મા ભાવ પર રાહુ કે પાપ ગ્રહોના પ્રભાવથી સંતાન હઠીલું અને ખોટી સંગતમાં જાય છે. બાબાજી સરસ્વતી-ગુરુ મહાજાપ અને રાહુ શાંતિ વિધાન દ્વારા સંતાનને સદ્બુદ્ધિ, અભ્યાસમાં એકાગ્રતા અને માતા-પિતા પ્રત્યે આદરભાવ પ્રદાન કરે છે.'
        },
        {
          id: 'faq-gu-1',
          question: 'શું હું સંપૂર્ણ ગુજરાતીમાં વાતચીત અને પરામર્શ મેળવી શકું? (Can I consult in Gujarati?)',
          answer: 'હા, ચોક્કસ (Yes, Absolutely). બાબાજી શુદ્ધ ગુજરાતી (Mother-tongue Gujarati), હિન્દી તથા અંગ્રેજીમાં સરળતાથી વાતચીત કરે છે. અમદાવાદ, સુરત, વડોદરા, રાજકોટ, ભાવનગર, આણંદ, નડિયાદ, કચ્છ તેમજ અમેરિકા, લંડન, કેનેડા વસતા હજારો ગુજરાતી પરિવારો નિયમિત માર્ગદર્શન મેળવે છે.'
        },
        {
          id: 'faq-gu-2',
          question: 'વૈદિક ઉપાય અને હવન કેવી રીતે કામ કરે છે? (How do Vedic Remedies work?)',
          answer: 'કુંડળીના ૭મા (લગ્ન/પ્રેમ) અને ૫મા ભાવમાં શુક્ર-મંગળ કે રાહુ-કેતુના દોષથી સંબંધોમાં અંતર આવે છે. બાબાજી ગૌરી-શંકર શાંતિ હવન અને સિદ્ધ બીજ મંત્રો દ્વારા નકારાત્મકતા દૂર કરી પ્રેમ અને સંવાદ પુનઃ સ્થાપિત કરે છે.'
        },
        {
          id: 'faq-gu-3',
          question: 'વિદેશથી ઓનલાઈન પૂજા અને કન્સલ્ટેશન શક્ય છે? (Online Puja for NRIs)',
          answer: 'હા, જરૂર (Yes, 100%). USA, UK, Canada, Australia અને UAE રહેતા ભક્તો WhatsApp વિડીયો કૉલ અથવા સીધા ફોન પર વાત કરી શકે છે. તમારા નામ અને ગોત્ર સાથે સંકલ્પ લઈ ખાસ હવન કરવામાં આવે છે.'
        },
        {
          id: 'faq-gu-4',
          question: 'મારી વિગતો અને સમસ્યા ગુપ્ત રહેશે? (Confidentiality & Privacy)',
          answer: '૧૦૦% સંપૂર્ણ ગુપ્તતા (Strictly Confidential). તમારું નામ, ફોટો, જન્મ વિગત કે કૌટુંબિક વાત કોઈ ત્રીજી વ્યક્તિ સમક્ષ જાહેર કરવામાં આવતી નથી.'
        },
        {
          id: 'faq-gu-5',
          question: 'જો મારી પાસે જન્મ સમય ન હોય તો શું કરવું? (No exact birth time)',
          answer: 'કોઈ ચિંતા નથી. જો ચોક્કસ જન્મ સમય ન હોય તો બાબાજી પ્રશ્ન કુંડળી (Prashna Kundali), નામ અને ફોટો દ્વારા સચોટ માર્ગદર્શન અને ઉપાય આપે છે.'
        }
      ];
    }

    // Default / Pure English
    return [
      {
        id: 'faq-en-par-istri',
        question: 'What Vedic astrological remedies exist for husband extramarital affairs & third-party separation?',
        answer: 'Afflictions to Venus (Shukra), Rahu, or the 7th and 12th houses often trigger marital infidelity, lack of commitment, and external attractions. Baba Ji conducts specialized Kamakhya & Shukra Shanti Vedic rituals to break toxic external attachments and permanently rekindle genuine spousal devotion, mutual respect, and family fidelity.'
      },
      {
        id: 'faq-en-santan',
        question: 'How can Vedic astrology help with a disobedient child, bad company, or mobile addiction?',
        answer: 'The 5th house in Vedic astrology governs intellect (Buddhi), child upbringing (Santan), and ethical tendencies. When afflicted by Rahu or malefic planetary combinations, children become defiant, screen-addicted, or misled by bad company. Baba Ji performs Saraswati-Brihaspati Japam and 5th-house planetary peace havans to restore mental clarity, study concentration, obedience, and familial respect.'
      },
      {
        id: 'faq-en-1',
        question: 'How does authentic Vedic astrology address relationship and marriage distress?',
        answer: 'Vedic astrology analyzes the 7th house (marriage and partnerships), Venus (love and harmony), Mars (temperament), and Jupiter (wisdom). By identifying planetary afflictions or doshas, customized Vedic pujas, peace havans, and consecrated mantras help restore emotional balance, clarity, and constructive communication.'
      },
      {
        id: 'faq-en-2',
        question: 'Are these spiritual remedies ethical, benevolent, and scripture-based?',
        answer: 'Yes, completely benevolent and ethical. Baba Ji strictly adheres to Vedic scriptures and Sattvic methodologies. We never practice or support coercive or negative rituals. All services focus entirely on peace, harmony, mutual understanding, and divine grace.'
      },
      {
        id: 'faq-en-3',
        question: 'Can international clients consult remotely and have rituals performed?',
        answer: 'Yes, absolutely. Clients from the United States, United Kingdom, Canada, Australia, Singapore, and Europe regularly consult with Baba Ji via phone or WhatsApp. Remote astrological chart assessments and customized yajnas are conducted under precise planetary alignments.'
      },
      {
        id: 'faq-en-4',
        question: 'Is my consultation and personal information kept completely confidential?',
        answer: 'Yes. We maintain strict client confidentiality. Your identity, personal history, birth details, and consultation discussions are held in strict privacy and are never disclosed to third parties.'
      },
      {
        id: 'faq-en-5',
        question: 'What details are needed if I do not know my exact birth time?',
        answer: 'While exact birth date, time, and place provide maximum astrological precision, Baba Ji can also perform Prashna Kundali (Horary Astrology) or utilize your current name and photographs to provide accurate insights and effective remedial guidance.'
      },
      {
        id: 'faq-en-6',
        question: 'How quickly can I consult with Baba Ji for an urgent domestic concern?',
        answer: 'Direct telephone calls and WhatsApp inquiries are prioritized 24/7 for urgent marital conflicts, family estrangements, or impending relationship separations.'
      }
    ];
  };

  const faqs = getFaqs();

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 max-w-4xl mx-auto w-full overflow-hidden">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
          <span>
            {lang === 'hi'
              ? 'जिज्ञासा व शंका समाधान'
              : lang === 'gu-en'
              ? 'પ્રશ્નો અને શંકા નિવારણ (FAQ Guidance)'
              : 'Clear Doubts & Guidance'}
          </span>
        </div>
        <h2 className="heading-mystic text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900">
          {lang === 'hi'
            ? 'अक्सर पूछे जाने वाले महत्वपूर्ण प्रश्न'
            : lang === 'gu-en'
            ? 'વારંવાર પૂછાતા મહત્વના પ્રશ્નો (FAQ)'
            : 'Frequently Asked Questions'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-stone-600 mt-4 text-sm sm:text-base">
          {lang === 'hi'
            ? 'वैदिक ज्योतिष, प्रेम व पारिवारिक समस्या समाधान और परामर्श प्रक्रिया के संबंध में संपूर्ण जानकारी।'
            : lang === 'gu-en'
            ? 'વૈદિક જ્યોતિષ, પ્રેમ-દાંપત્ય સમાધાન અને પૂજા વિધિ વિશેની સંપૂર્ણ માહિતી.'
            : 'Everything you need to know about our authentic Vedic astrology, relationship guidance, and consultation process.'}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id}
              className="bg-white border border-amber-200/80 rounded-2xl overflow-hidden shadow-xs hover:border-amber-400 transition-all duration-200"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="heading-mystic text-sm sm:text-base font-bold text-stone-900 pr-2 flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold">Q.</span> {faq.question}
                </span>
                <span className="p-1.5 rounded-full bg-amber-50 text-amber-700 shrink-0 border border-amber-200">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/60">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8 text-xs text-stone-500 font-medium">
        {lang === 'hi'
          ? 'क्या आपके मन में कोई अन्य विशेष प्रश्न है? बाबा जी से WhatsApp या फोन पर सीधे निःसंकोच बात करें।'
          : lang === 'gu-en'
          ? 'શું તમારી સમસ્યા બાબતે કોઈ પ્રશ્ન છે? બાબાજી સાથે WhatsApp અથવા કૉલ પર સીધી વાત કરો.'
          : 'Still have a specific question about your situation? Speak privately with Baba Ji via WhatsApp or Direct Call.'}
      </div>
    </section>
  );
};
