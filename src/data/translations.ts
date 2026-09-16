export interface SectionTranslations {
  // Navigation & General
  nav: {
    services: string;
    darshan: string;
    solutions: string;
    global: string;
    whyUs: string;
    rituals: string;
    testimonials: string;
    faq: string;
    contact: string;
    callNow: string;
    whatsapp: string;
    helpline: string;
  };
  // Marquee Ticker
  ticker: {
    verse: string;
    gujaratPromo: string;
    brandTag: string;
    servicesTag: string;
    disputesTag: string;
    trustTag: string;
    helplineTag: string;
  };
  // Hero Section
  hero: {
    badge: string;
    subBadgeDeity: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    badge1: string;
    badge2: string;
    badge3: string;
    badge4: string;
    callCta: string;
    whatsappCta: string;
    preferenceNotice: string;
    subActivity: string;
  };
  // Consultation Form
  form: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    cityLabel: string;
    cityPlaceholder: string;
    problemTypeLabel: string;
    selectPlaceholder: string;
    problemOptions: { value: string; label: string }[];
    detailsLabel: string;
    detailsPlaceholder: string;
    submitCall: string;
    submitWhatsApp: string;
    guaranteeText: string;
  };
  // Vedic Calculator
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    yourZodiac: string;
    partnerZodiac: string;
    issueType: string;
    btnCalculate: string;
    resultTitle: string;
  };
  // Services
  services: {
    badge: string;
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  // Why Choose Us
  whyUs: {
    badge: string;
    title: string;
    subtitle: string;
  };
  // Process
  process: {
    badge: string;
    title: string;
    subtitle: string;
  };
  // Testimonials
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  // FAQ
  faq: {
    badge: string;
    title: string;
    subtitle: string;
  };
  // Contact
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    directCall: string;
    chatWhatsapp: string;
    ashramLocation: string;
    hours: string;
  };
}

export const TRANSLATIONS: Record<'gu-en' | 'hi' | 'en', SectionTranslations> = {
  // 1. GUJARATI + ENGLISH MIX (Default for Gujarat & Gujarati NRIs worldwide)
  'gu-en': {
    nav: {
      services: 'સેવાઓ / Services',
      darshan: '3D દર્શન',
      solutions: 'લવ સોલ્યુશન',
      global: 'NRI / Global',
      whyUs: 'શા માટે બાબાજી',
      rituals: 'પવિત્ર વિધાન',
      testimonials: 'અનુભવો',
      faq: 'પ્રશ્નોત્તરી',
      contact: 'સંપર્ક',
      callNow: 'Direct Call',
      whatsapp: 'WhatsApp',
      helpline: '24/7 HELPLINE:'
    },
    ticker: {
      verse: '॥ ૐ નવકુલ નાગદેવ્યૈ નમઃ ॥',
      gujaratPromo: '🕉️ સમસ્ત ગુજરાત (અમદાવાદ, સુરત, વડોદરા, રાજકોટ), સમગ્ર ભારત તથા વિદેશ (Abroad: USA, UK, Canada, Australia, UAE) માટે 24/7 પરામર્શ',
      brandTag: '🐍 શ્રી માં નાગદેવી સિદ્ધ પીઠ • World Renowned Vedic Astrologer & Love Problem Specialist',
      servicesTag: '✨ Explore Authentic Vedic Love Problem & Relationship Shanti Havans',
      disputesTag: '🔱 લવ પ્રોબ્લેમ સોલ્યુશન • પ્રેમ લગ્ન વિલંબ • પતિ-પત્ની કંકાસ નિવારણ',
      trustTag: '🔒 35+ Years of Proven Vedic Lineage — Strictly Confidential Astrological Consultations',
      helplineTag: '📞 24/7 Helpline: +91 97141 27309 (Call / WhatsApp Baba Ji)'
    },
    hero: {
      badge: 'World Renowned Vedic Astrologer & Love Problem Specialist',
      subBadgeDeity: '🐍 નાગમાતા જ્યોતિષ • Naagmata Jyotish • શ્રી માં નાગદેવી સિદ્ધ પીઠ ✨',
      titleMain: 'Solve All Love & Relationship Problems With',
      titleHighlight: 'Vedic Astrology & પવિત્ર કુંડળી સમાધાન',
      subtitle: 'પ્રેમ સંબંધમાં અંતર, પ્રેમ લગ્નમાં પારિવારિક વિરોધ, મનમોટાવ કે પતિ-પત્નીના કંકાસથી ચિંતિત છો? માં નાગદેવીના આશીર્વાદ અને પ્રાચીન વૈદિક જ્યોતિષ પદ્ધતિ દ્વારા બાબાજી આપે છે 100% ગોપનીય અને વિશ્વસનીય સમાધાન.',
      badge1: 'વૈદિક માર્ગદર્શન',
      badge2: '100% Strictly Confidential',
      badge3: 'સાત્વિક હવન & પૂજા',
      badge4: '35+ Yrs Experience',
      callCta: 'Direct Call Baba Ji: +91 97141 27309',
      whatsappCta: 'Chat With Baba Ji on WhatsApp',
      preferenceNotice: 'Direct Phone Call Preferred for Immediate Solution • તાત્કાલિક માર્ગદર્શન',
      subActivity: 'Shri Maa Naagdevi Siddha Peeth: Over 14,800+ Devotees Guided Across Gujarat, USA, UK & Worldwide'
    },
    form: {
      badge: '24/7 Urgent Astrological Consultation',
      title: 'કટોકટી પરામર્શ • Request Urgent Vedic Guidance',
      subtitle: 'તમારી અંગત માહિતી ૧૦૦% ગોપનીય રહેશે. વિગતો ભરો અથવા સીધો કૉલ કરો:',
      nameLabel: 'તમારું પૂરું નામ (Full Name)',
      namePlaceholder: 'દા.ત. રમેશ પટેલ / Priya Shah',
      phoneLabel: 'મોબાઇલ / WhatsApp નંબર',
      phonePlaceholder: '+91 98765 43210 (દેશ કોડ સાથે)',
      cityLabel: 'શહેર અને દેશ (City & Country)',
      cityPlaceholder: 'દા.ત. Ahmedabad / London / New York',
      problemTypeLabel: 'મુખ્ય સમસ્યા પસંદ કરો (Problem Category)',
      selectPlaceholder: '-- સમસ્યા પસંદ કરો --',
      problemOptions: [
        { value: 'love-problem', label: 'પ્રેમ સંબંધમાં વિખવાદ / Love Problem & Misunderstandings' },
        { value: 'love-marriage', label: 'પ્રેમ લગ્ન અને પરિવાર સંમતિ / Love Marriage & Family Objections' },
        { value: 'husband-wife', label: 'પતિ-પત્ની વચ્ચે તણાવ કે કંકાસ / Husband-Wife Disputes & Distance' },
        { value: 'breakup', label: 'બ્રેકઅપ અને સંબંધ પુનઃસ્થાપન / Breakup & Lost Love Reunion' },
        { value: 'intercaste', label: 'આંતરજાતીય લગ્ન સમસ્યા / Intercaste Marriage Obstacles' },
        { value: 'kundali-dosha', label: 'માંગલિક અથવા કુંડળી દોષ / Manglik & Kundali Dosha' },
        { value: 'negative-energy', label: 'નકારાત્મક ઊર્જા અને નજર દોષ / Negative Energy Cleansing' }
      ],
      detailsLabel: 'સમસ્યાની ટૂંકી વિગત (Brief Issue Details)',
      detailsPlaceholder: 'તમારા પ્રશ્ન કે પરિસ્થિતિ વિશે ટૂંકમાં જણાવો...',
      submitCall: 'સીધો કૉલ કરો (Direct Call Baba Ji)',
      submitWhatsApp: 'WhatsApp પર વિગત મોકલો',
      guaranteeText: 'તમારી માહિતી 100% સુરક્ષિત અને ગુપ્ત રહેશે • No Information Shared'
    },
    calculator: {
      badge: 'Vedic Relationship Remedy Finder',
      title: 'પ્રેમ અને લગ્ન કુંડળી સમાધાન કેલ્ક્યુલેટર',
      subtitle: 'તમારી અને તમારા પાર્ટનરની રાશિ પસંદ કરી વૈદિક ઉપાય જાણો',
      yourZodiac: 'તમારી રાશિ (Your Rashi)',
      partnerZodiac: 'સાથીદારની રાશિ (Partner Rashi)',
      issueType: 'મુખ્ય સમસ્યાનો પ્રકાર (Type of Concern)',
      btnCalculate: 'વૈદિક સમાધાન અને ઉપાય જુઓ',
      resultTitle: 'વૈદિક જ્યોતિષિય વિશ્લેષણ અને સૂચવેલ ઉપાય'
    },
    services: {
      badge: 'Authentic Vedic Services',
      title: 'શાસ્ત્રોક્ત વૈદિક જ્યોતિષ સેવાઓ',
      subtitle: 'માં નાગદેવી સિદ્ધ પીઠ દ્વારા પ્રેમ, વિવાહ અને પારિવારિક શાંતિ માટે શુદ્ધ સાત્વિક અનુષ્ઠાન',
      ctaButton: 'પરામર્શ મેળવો / Consult Baba Ji'
    },
    whyUs: {
      badge: 'Trust Badges & Hallmarks',
      title: 'શા માટે હજારો ભક્તો બાબાજી પર વિશ્વાસ કરે છે?',
      subtitle: '35+ વર્ષોની અખંડ પરંપરા, પ્રાચીન વૈદિક જ્ઞાન અને પૂર્ણ ગોપનીયતા'
    },
    process: {
      badge: 'Ancient 4-Stage Remedy Process',
      title: '૪-તબક્કાનું શાસ્ત્રોક્ત નિવારણ વિધાન',
      subtitle: 'કુંડળી વિશ્લેષણથી લઈને પવિત્ર હવન અને રક્ષા કવચ સુધીની વૈદિક પ્રક્રિયા'
    },
    testimonials: {
      badge: 'Verified Devotee Testimonials',
      title: 'ભક્તોના સાચા અનુભવો અને આશીર્વાદ',
      subtitle: 'ગુજરાત, યુએસએ, યુકે અને કેનેડાના ભક્તો દ્વારા શેર કરાયેલા સાચા અનુભવો'
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'વારંવાર પૂછાતા પ્રશ્નો',
      subtitle: 'તમારા મનના તમામ સંશયો અને પ્રશ્નોના સ્પષ્ટ, શાસ્ત્રોક્ત જવાબો'
    },
    contact: {
      badge: 'Direct Connect',
      title: 'બાબાજી સાથે સીધો સંપર્ક કરો',
      subtitle: 'કોઈપણ સંકોચ વિના અત્યારે જ ફોન કૉલ અથવા વૉટ્સએપ દ્વારા માર્ગદર્શન મેળવો',
      directCall: 'સીધો ફોન કૉલ (Direct Call)',
      chatWhatsapp: 'WhatsApp ચેટ (Chat on WhatsApp)',
      ashramLocation: 'સિદ્ધ પીઠ આશ્રમ સ્થળ:',
      hours: 'ઉપલબ્ધ સમય: ૨૪ કલાક / ૭ દિવસ લાઈવ સપોર્ટ'
    }
  },

  // 2. HINDI (For North India: Delhi, UP, Bihar, Rajasthan, MP, Haryana & nationwide Hindi speakers)
  'hi': {
    nav: {
      services: 'सेवाएं',
      darshan: '3D दर्शन',
      solutions: 'प्रेम समाधान',
      global: 'NRI / विदेश',
      whyUs: 'हमारे बारे में',
      rituals: 'वैदिक अनुष्ठान',
      testimonials: 'भक्तों के अनुभव',
      faq: 'प्रश्नोत्तरी',
      contact: 'संपर्क',
      callNow: 'सीधा फोन करें',
      whatsapp: 'व्हाट्सएप',
      helpline: '24/7 हेल्पलाइन:'
    },
    ticker: {
      verse: '॥ ॐ नवकुल नागदेव्यै नमः ॥',
      gujaratPromo: '🕉️ उत्तर भारत (दिल्ली, यूपी, बिहार, राजस्थान, एमपी, हरियाणा), समस्त भारत एवं विदेश (Abroad: USA, UK, Canada, Australia, UAE) हेतु 24/7 ज्योतिष परामर्श',
      brandTag: '🐍 श्री माँ नागदेवी सिद्ध पीठ • विश्व प्रसिद्ध वैदिक ज्योतिषी एवं प्रेम समस्या समाधान विशेषज्ञ',
      servicesTag: '✨ प्रामाणिक वैदिक प्रेम समाधान एवं पारिवारिक शांति अनुष्ठान',
      disputesTag: '🔱 लव प्रॉब्लम सॉल्यूशन • प्रेम विवाह बाधा निवारण • पति-पत्नी कलह शांति',
      trustTag: '🔒 35+ वर्षों की प्रामाणिक परंपरा — 100% गोपनीय एवं शास्त्रसम्मत परामर्श',
      helplineTag: '📞 24/7 हेल्पलाइन: +91 97141 27309 (कॉल / व्हाट्सएप बाबाजी)'
    },
    hero: {
      badge: 'विश्व प्रसिद्ध वैदिक ज्योतिषी एवं प्रेम समस्या विशेषज्ञ',
      subBadgeDeity: '🐍 नागमाता ज्योतिष • Naagmata Jyotish • श्री माँ नागदेवी सिद्ध पीठ ✨',
      titleMain: 'प्रेम संबंध, विवाह बाधा एवं पारिवारिक कलह का समाधान',
      titleHighlight: 'प्रामाणिक वैदिक ज्योतिष एवं कुंडली अनुष्ठान द्वारा',
      subtitle: 'क्या आप प्रेम में बढ़ती दूरी, माता-पिता की असहमति, विवाह में रुकावट, ब्रेकअप या पति-पत्नी के तनाव से व्यथित हैं? पूज्य बाबाजी माँ नागदेवी की दिव्य कृपा और वैदिक ज्योतिष द्वारा देते हैं 100% गोपनीय और सात्विक समाधान।',
      badge1: 'वैदिक मार्गदर्शन',
      badge2: '100% पूर्णतः गोपनीय',
      badge3: 'सात्विक हवन अनुष्ठान',
      badge4: '35+ वर्षों का अनुभव',
      callCta: 'सीधा फोन करें बाबाजी को: +91 97141 27309',
      whatsappCta: 'व्हाट्सएप पर बात करें',
      preferenceNotice: 'तत्काल एवं सटीक समाधान हेतु सीधा फोन कॉल करें • 24/7 निःशुल्क प्रारंभिक परामर्श',
      subActivity: 'श्री माँ नागदेवी सिद्ध पीठ: उत्तर भारत, गुजरात एवं विदेश (USA, UK) के 14,800+ भक्तों का अटूट विश्वास'
    },
    form: {
      badge: '24/7 आपातकालीन ज्योतिष परामर्श',
      title: 'तत्काल परामर्श हेतु फॉर्म भरें',
      subtitle: 'आपकी समस्त जानकारी 100% गोपनीय रहेगी। नीचे विवरण भरें या सीधा कॉल करें:',
      nameLabel: 'आपका पूरा नाम',
      namePlaceholder: 'उदा. अमित शर्मा / पूजा वर्मा',
      phoneLabel: 'मोबाइल / व्हाट्सएप नंबर',
      phonePlaceholder: '+91 98765 43210 (कंट्री कोड सहित)',
      cityLabel: 'शहर एवं राज्य / देश',
      cityPlaceholder: 'उदा. दिल्ली / लखनऊ / जयपुर / मुंबई',
      problemTypeLabel: 'अपनी मुख्य समस्या चुनें',
      selectPlaceholder: '-- समस्या का चयन करें --',
      problemOptions: [
        { value: 'love-problem', label: 'प्रेम संबंधों में मतभेद एवं दूरी (Love Problem)' },
        { value: 'love-marriage', label: 'प्रेम विवाह एवं परिजनों की असहमति (Love Marriage Delay)' },
        { value: 'husband-wife', label: 'पति-पत्नी के बीच कलह एवं तनाव (Husband-Wife Disputes)' },
        { value: 'breakup', label: 'ब्रेकअप एवं खोया प्यार वापस पाना (Breakup Reconciliation)' },
        { value: 'intercaste', label: 'अंतरजातीय विवाह बाधा निवारण (Intercaste Marriage)' },
        { value: 'kundali-dosha', label: 'मांगलिक दोष अथवा कुंडली मिलान बाधा (Kundali Dosha)' },
        { value: 'negative-energy', label: 'नकारात्मक ऊर्जा एवं नजर दोष शांति (Negative Energy Cleansing)' }
      ],
      detailsLabel: 'अपनी समस्या का संक्षिप्त विवरण',
      detailsPlaceholder: 'अपनी स्थिति अथवा प्रश्न के बारे में संक्षेप में लिखें...',
      submitCall: 'सीधा कॉल करें (Direct Call)',
      submitWhatsApp: 'व्हाट्सएप पर विवरण भेजें',
      guaranteeText: 'आपकी पहचान 100% गुप्त और सुरक्षित रहेगी • कोई जानकारी साझा नहीं की जाती'
    },
    calculator: {
      badge: 'वैदिक संबंध समाधान कैलकुलेटर',
      title: 'प्रेम एवं विवाह कुंडली समाधान कैलकुलेटर',
      subtitle: 'अपनी और अपने जीवनसाथी की राशि चुनकर वैदिक उपाय जानें',
      yourZodiac: 'आपकी राशि',
      partnerZodiac: 'साथी की राशि',
      issueType: 'मुख्य समस्या का प्रकार',
      btnCalculate: 'वैदिक उपाय एवं विश्लेषण देखें',
      resultTitle: 'वैदिक ज्योतिषीय विश्लेषण एवं सुझाए गए उपाय'
    },
    services: {
      badge: 'शास्त्रसम्मत वैदिक सेवाएं',
      title: 'प्रामाणिक वैदिक ज्योतिष सेवाएं',
      subtitle: 'माँ नागदेवी सिद्ध पीठ द्वारा प्रेम, विवाह और पारिवारिक शांति हेतु सात्विक अनुष्ठान',
      ctaButton: 'परामर्श प्राप्त करें'
    },
    whyUs: {
      badge: 'भरोसा और प्रतिष्ठा',
      title: 'हजारों परिवार बाबाजी पर क्यों विश्वास करते हैं?',
      subtitle: '35+ वर्षों की अटूट परंपरा, गहन वैदिक ज्ञान और 100% गोपनीयता'
    },
    process: {
      badge: 'प्राचीन 4-चरणीय निवारण प्रक्रिया',
      title: '4-चरणीय शास्त्रसम्मत समाधान विधान',
      subtitle: 'कुंडली विश्लेषण से लेकर पवित्र हवन और रक्षा कवच तक की वैदिक प्रक्रिया'
    },
    testimonials: {
      badge: 'सत्यापित भक्तों के अनुभव',
      title: 'भक्तों के सच्चे अनुभव और आशीर्वाद',
      subtitle: 'दिल्ली, यूपी, बिहार, राजस्थान, गुजरात और विदेश से भक्तों द्वारा साझा किए गए अनुभव'
    },
    faq: {
      badge: 'अक्सर पूछे जाने वाले प्रश्न',
      title: 'महत्वपूर्ण प्रश्नोत्तरी',
      subtitle: 'आपके सभी प्रश्नों और जिज्ञासाओं के शास्त्रसम्मत व स्पष्ट उत्तर'
    },
    contact: {
      badge: 'सीधा संपर्क',
      title: 'बाबाजी से सीधा संपर्क करें',
      subtitle: 'बिना किसी संकोच के अभी फोन कॉल या व्हाट्सएप द्वारा मार्गदर्शन प्राप्त करें',
      directCall: 'सीधा फोन कॉल करें',
      chatWhatsapp: 'व्हाट्सएप पर बात करें',
      ashramLocation: 'सिद्ध पीठ आश्रम स्थान:',
      hours: 'उपलब्ध समय: 24 घंटे / 7 दिन लाइव सपोर्ट'
    }
  },

  // 3. PURE ENGLISH (For Westerners, International Clients & Abroad English Speakers)
  'en': {
    nav: {
      services: 'Services',
      darshan: '3D Darshan',
      solutions: 'Love Solutions',
      global: 'Global / NRI',
      whyUs: 'Why Baba Ji',
      rituals: 'Sacred Rituals',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
      callNow: 'Direct Call',
      whatsapp: 'WhatsApp',
      helpline: '24/7 HELPLINE:'
    },
    ticker: {
      verse: '॥ Om Navakula Naagdevyai Namah ॥',
      gujaratPromo: '🕉️ 24/7 Sacred Vedic Consultations across India & Abroad (USA, UK, Canada, Australia, UAE & Europe)',
      brandTag: '🐍 Shri Maa Naagdevi Siddha Peeth • World Renowned Vedic Astrologer & Relationship Specialist',
      servicesTag: '✨ Explore Authentic Vedic Love Problem & Relationship Harmony Havans',
      disputesTag: '🔱 Relationship Reconciliation • Marriage Harmony • Dispute Resolution',
      trustTag: '🔒 35+ Years of Proven Vedic Lineage — Strictly Confidential Astrological Consultations',
      helplineTag: '📞 24/7 Global Helpline: +91 97141 27309 (Call / WhatsApp Baba Ji)'
    },
    hero: {
      badge: 'World Renowned Vedic Astrologer & Love Problem Specialist',
      subBadgeDeity: '🐍 Naagmata Jyotish • Shri Maa Naagdevi Siddha Peeth ✨',
      titleMain: 'Solve All Love & Relationship Problems',
      titleHighlight: 'With Authentic Vedic Astrology & Sacred Kundali Remedies',
      subtitle: 'Facing painful emotional distance, breakup heartache, marriage delays, or parental disagreements? Through the divine grace of Maa Naagdevi and ancient Vedic astrological science, Baba Ji provides compassionate, authentic, and 100% strictly confidential guidance.',
      badge1: 'Vedic Guidance',
      badge2: 'Strictly Confidential',
      badge3: 'Sattvic Havans',
      badge4: '35+ Yrs Experience',
      callCta: 'Direct Call Baba Ji: +91 97141 27309',
      whatsappCta: 'Chat With Baba Ji on WhatsApp',
      preferenceNotice: 'Direct Phone Call Preferred for Immediate Solution • 24/7 Complimentary Initial Guidance',
      subActivity: 'Shri Maa Naagdevi Siddha Peeth: Over 14,800+ Devotees Guided Across USA, UK, Canada & Worldwide'
    },
    form: {
      badge: '24/7 Urgent Astrological Consultation',
      title: 'Confidential Consultation • Request Vedic Guidance',
      subtitle: 'Your personal information is 100% strictly confidential. Fill in your details below or call directly:',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. John Miller / Priya Patel',
      phoneLabel: 'Mobile / WhatsApp Number',
      phonePlaceholder: '+1 (555) 000-0000 (with Country Code)',
      cityLabel: 'City & Country',
      cityPlaceholder: 'e.g. New York, USA / London, UK / Toronto, Canada',
      problemTypeLabel: 'Select Your Primary Concern',
      selectPlaceholder: '-- Select Concern --',
      problemOptions: [
        { value: 'love-problem', label: 'Relationship Misunderstandings & Emotional Distance' },
        { value: 'love-marriage', label: 'Marriage Approval & Family Objections' },
        { value: 'husband-wife', label: 'Marital Discord & Spousal Communication Blocks' },
        { value: 'breakup', label: 'Breakup Healing & Lost Love Reconciliation' },
        { value: 'intercaste', label: 'Intercultural & Intercaste Marriage Harmony' },
        { value: 'kundali-dosha', label: 'Planetary & Astrological Dosha Rectification' },
        { value: 'negative-energy', label: 'Negative Energy Cleansing & Aura Protection' }
      ],
      detailsLabel: 'Brief Details of Your Situation',
      detailsPlaceholder: 'Briefly explain your concern or questions for Baba Ji...',
      submitCall: 'Direct Call Baba Ji',
      submitWhatsApp: 'Send Details via WhatsApp',
      guaranteeText: '100% Confidential & Secure • No Personal Information is Ever Shared'
    },
    calculator: {
      badge: 'Vedic Relationship Remedy Finder',
      title: 'Vedic Love & Marriage Compatibility Calculator',
      subtitle: 'Select your and your partner zodiac sign to reveal personalized Vedic remedies',
      yourZodiac: 'Your Zodiac Sign',
      partnerZodiac: "Partner's Zodiac Sign",
      issueType: 'Primary Relationship Challenge',
      btnCalculate: 'Calculate Vedic Analysis & Remedies',
      resultTitle: 'Personalized Vedic Astrological Diagnosis'
    },
    services: {
      badge: 'Authentic Vedic Services',
      title: 'Sacred Vedic Astrological Services',
      subtitle: 'Pure sattvic rituals and birth chart harmonization by Maa Naagdevi Siddha Peeth',
      ctaButton: 'Consult Baba Ji'
    },
    whyUs: {
      badge: 'Trust Badges & Hallmarks',
      title: 'Why Do Thousands Worldwide Trust Baba Ji?',
      subtitle: '35+ years of unbroken spiritual lineage, authentic Vedic wisdom, and complete confidentiality'
    },
    process: {
      badge: 'Ancient 4-Stage Remedy Process',
      title: 'Sacred 4-Stage Vedic Remedial Process',
      subtitle: 'From birth chart diagnosis to consecrated sattvic havans and protective talisman'
    },
    testimonials: {
      badge: 'Verified Devotee Testimonials',
      title: 'True Stories of Reunited Couples & Restored Peace',
      subtitle: 'Real experiences shared by clients across USA, UK, Canada, Australia and India'
    },
    faq: {
      badge: 'Frequently Asked Questions',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear, authentic answers to common queries regarding Vedic consultations'
    },
    contact: {
      badge: 'Direct Connect',
      title: 'Connect Directly With Baba Ji',
      subtitle: 'Feel free to reach out anytime via direct phone call or WhatsApp for guidance',
      directCall: 'Direct Phone Call',
      chatWhatsapp: 'Chat on WhatsApp',
      ashramLocation: 'Siddha Peeth Ashram Sanctum:',
      hours: 'Available Hours: 24 Hours / 7 Days Live Support'
    }
  }
};
