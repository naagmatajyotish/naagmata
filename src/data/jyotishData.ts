import { ServiceItem, TestimonialItem, FaqItem } from '../types';
import serviceLoveSolution from '../assets/images/service_love_solution.jpg';
import serviceRelationshipHavan from '../assets/images/service_relationship_havan.jpg';
import serviceLoveMarriage from '../assets/images/service_love_marriage.jpg';
import serviceNegativeEnergyRemedy from '../assets/images/service_negative_energy.jpg';
import serviceBusinessGrowth from '../assets/images/service_business_growth.jpg';
import serviceMaritalHarmony from '../assets/images/service_marital_harmony.jpg';
import serviceDivorceRemedy from '../assets/images/service_divorce_remedy.jpg';
import serviceKundaliDosha from '../assets/images/service_kundali_dosha.jpg';
import serviceSantanPrapti from '../assets/images/service_santan_prapti.jpg';
import serviceKamadevRati from '../assets/images/kamadev_rati_sadhana_1789824491805.jpg';
import serviceVyasanMukti from '../assets/images/vyasan_mukti_havan_1789824730714.jpg';
import serviceSantanSadbuddhi from '../assets/images/santan_sadbuddhi_remedy_1789828803865.jpg';
import serviceParIstriNivaran from '../assets/images/par_istri_nivaran_remedy_1789829355493.jpg';

export const CONTACT_INFO = {
  phone: '+91-9714127309',
  phoneRaw: '+919714127309',
  phoneDisplay: '+91 97141 27309',
  email: 'naagmatajyotish@gmail.com',
  whatsappUrl: 'https://wa.me/919714127309?text=Pranam%20Pandit%20Ji%2C%20I%20need%20your%20sacred%20Vedic%20astrological%20guidance.',
  location: 'Shri Mahakali & Naagmata Siddha Peeth Ashram, Ujjain & Haridwar (Consultations available across India & Worldwide online)',
  address: 'Shri Maa Naagdevi Siddha Peeth Ashram, Mahakal Marg, Ujjain, Madhya Pradesh 456006, India',
  availableHours: '24 Hours / 7 Days Live Support',
  experienceYears: '35+',
  successRate: '99.4%',
  clientsCount: '51,000+'
};

export const SACRED_SERVICES: ServiceItem[] = [
  {
    id: 'love-problem-solution',
    title: 'Love Problem Solution & Relationship Harmony',
    category: 'love',
    badge: 'Most Requested',
    shortDesc: 'Restore mutual understanding, resolve emotional distance, address third-party discord, and rekindle affection with authentic Vedic relationship astrology.',
    fullDesc: 'Are you suffering from misunderstandings, emotional silence, or external interference affecting your relationship? Baba Ji performs authentic Vedic Shukra (Venus) & Kamakhya Anushthan pujas to harmonize feelings, clarify mental doubts, and rebuild deep mutual respect and affection.',
    benefits: [
      'Foster deep emotional understanding & communication',
      'Neutralize external negative influences & misunderstandings',
      'Resolve stubborn ego clashes with compassionate Vedic advice',
      'Planetary remedies & Sattvic Havans for long-term peace'
    ],
    timeframe: 'Personalized Vedic Guidance & Rituals',
    mantraPreview: 'Om Kleem Krishnaya Namah | Om Kaamadevaya Vidmahe Pushpabaanaya Dheemahi...',
    iconName: 'Heart',
    imageUrl: serviceLoveSolution
  },
  {
    id: 'dampatya-sukh-rati-kamadev',
    title: 'Marital Bliss & Spousal Attraction (Kamadev-Rati Vedic Sadhana)',
    titleHi: 'पति-पत्नी में कामदेव-रति आकर्षण साधना (दांपत्य सुख एवं प्रेम वृद्धि अनुष्ठान)',
    titleGu: 'પતિ-પત્નીમાં કામદેવ-રતિ આકર્ષણ સાધના (દાંપત્ય સુખ અને પ્રેમ વૃદ્ધિ)',
    category: 'marriage',
    isHighlighted: true,
    badge: '⭐ विशेष कामदेव-रति आकर्षण साधना',
    badgeHi: '⭐ विशेष कामदेव-रति आकर्षण साधना',
    badgeGu: '⭐ વિશેષ કામદેવ-રતિ આકર્ષણ સાધના',
    highlightBadge: '🔥 विशेष आकर्षण साधना • Marital Bliss Spotlight',
    shortDesc: 'पति-पत्नी में आपसी प्रेम, आकर्षण व दांपत्य सुख वृद्धि हेतु कामदेव-रति एवं शुक्र ग्रह शांति वैदिक अनुष्ठान। वैवाहिक नीरसता व दूरी मिटाकर दांपत्य में नई मिठास लाएं।',
    shortDescHi: 'पति-पत्नी में आपसी प्रेम, आकर्षण व दांपत्य सुख वृद्धि हेतु कामदेव-रति एवं शुक्र ग्रह शांति वैदिक अनुष्ठान। वैवाहिक नीरसता व दूरी मिटाकर दांपत्य में नई मिठास लाएं।',
    shortDescGu: 'પતિ-પત્ની વચ્ચે પરસ્પર પ્રેમ, ઊંડું આકર્ષણ અને દાંપત્ય સુખ વધારવા માટે કામદેવ-રતિ તેમજ શુક્ર શાંતિ વૈદિક વિધાન.',
    fullDesc: 'दांपत्य जीवन में समय के साथ आने वाली भावनात्मक व आकर्षण की कमी या अनचाहे मनमुटाव को दूर करने के लिए शास्त्रों में कामदेव-रति एवं शुक्र ग्रह शांति को सर्वश्रेष्ठ माना गया है। पूज्य बाबा जी माँ नागदेवी की कृपा से कामदेव-रति संपुटित वैदिक मंत्र साधना व शुक्र शांति कराकर पति-पत्नी के बीच पुनः गहरा प्रेम, आकर्षण, समर्पण और अटूट वैवाहिक सुख स्थापित करते हैं।',
    fullDescHi: 'दांपत्य जीवन में समय के साथ आने वाली भावनात्मक व आकर्षण की कमी या अनचाहे मनमुटाव को दूर करने के लिए शास्त्रों में कामदेव-रति एवं शुक्र ग्रह शांति को सर्वश्रेष्ठ माना गया है। पूज्य बाबा जी माँ नागदेवी की कृपा से कामदेव-रति संपुटित वैदिक मंत्र साधना व शुक्र शांति कराकर पति-पत्नी के बीच पुनः गहरा प्रेम, आकर्षण, समर्पण और अटूट वैवाहिक सुख स्थापित करते हैं।',
    fullDescGu: 'દાંપત્ય જીવનમાં આવતી અરસપરસની નીરસતા અને અંતર દૂર કરવા શાસ્ત્રોક્ત કામદેવ-રતિ સાધના તેમજ શુક્ર શાંતિ વિધાન દ્વારા બાબાજી અખંડ પ્રેમ અને આકર્ષણ પ્રદાન કરે છે.',
    benefits: [
      'पति-पत्नी के बीच गहरा आपसी प्रेम, आकर्षण व भावनात्मक निकटता',
      'दांपत्य जीवन की नीरसता, तनाव व अनचाही दूरी का शांतिपूर्ण निवारण',
      'कामदेव-रति वैदिक मंत्र साधना एवं शुक्र ग्रह शांति द्वारा संबंधों में नई ऊर्जा',
      'पारिवारिक जीवन में अटूट विश्वास, समर्पण एवं आजीवन दांपत्य सुख'
    ],
    benefitsHi: [
      'पति-पत्नी के बीच गहरा आपसी प्रेम, आकर्षण व भावनात्मक निकटता',
      'दांपत्य जीवन की नीरसता, तनाव व अनचाही दूरी का शांतिपूर्ण निवारण',
      'कामदेव-रति वैदिक मंत्र साधना एवं शुक्र ग्रह शांति द्वारा संबंधों में नई ऊर्जा',
      'पारिवारिक जीवन में अटूट विश्वास, समर्पण एवं आजीवन दांपत्य सुख'
    ],
    benefitsGu: [
      'પતિ-પત્ની વચ્ચે ઊંડું આકર્ષણ અને પરસ્પર પ્રેમની વૃદ્ધિ',
      'દાંપત્ય જીવનની શુષ્કતા અને તણાવનું સાત્વિક નિવારણ',
      'કામદેવ-રતિ વૈદિક મંત્ર જાપથી સંબંધોમાં નવી મધુરતા',
      'સુખી અને અખંડ વૈવાહિક જીવનનો આશીર્વાદ'
    ],
    timeframe: '7 दिवसीय कामदेव-रति वैदिक अनुष्ठान',
    timeframeHi: '7 दिवसीय कामदेव-रति वैदिक अनुष्ठान',
    timeframeGu: '7 દિવસીય કામદેવ-રતિ વૈદિક વિધાન',
    mantraPreview: 'ॐ कामदेवाय विद्महे पुष्पबाणाय धीमहि तन्नो अनंगः प्रचोदयात् || ॐ रत्यै नमः...',
    iconName: 'Heart',
    imageUrl: serviceKamadevRati
  },
  {
    id: 'vyasan-mukti-rahu-shanti',
    title: 'Husband Alcohol Addiction Relief & Rahu Shanti Anushthan',
    titleHi: 'पति की मदिरा/व्यसन मुक्ति एवं राहु शांति अनुष्ठान (नशा व बुरी संगति निवारण)',
    titleGu: 'પતિની વ્યસન મુક્તિ અને દારૂ/નશાથી મુક્તિ વૈદિક અનુષ્ઠાન (રાહુ શાંતિ)',
    category: 'marriage',
    isHighlighted: true,
    badge: '⭐ विशेष राहु शांति एवं व्यसन मुक्ति',
    badgeHi: '⭐ विशेष राहु शांति एवं व्यसन मुक्ति',
    badgeGu: '⭐ વિશેષ રાહુ શાંતિ અને વ્યસન મુક્તિ',
    highlightBadge: '🛡️ विशेष व्यसन मुक्ति अनुष्ठान • Addiction Relief Spotlight',
    shortDesc: 'पति द्वारा मदिरापान, नशे की लत या बुरी संगति के कारण घर में होने वाले क्लेश, आर्थिक तंगी व तनाव को दूर करने हेतु प्राचीन वैदिक राहु-शनि शांति एवं सद्बुद्धि अनुष्ठान।',
    shortDescHi: 'पति द्वारा मदिरापान, नशे की लत या बुरी संगति के कारण घर में होने वाले क्लेश, आर्थिक तंगी व तनाव को दूर करने हेतु प्राचीन वैदिक राहु-शनि शांति एवं सद्बुद्धि अनुष्ठान।',
    shortDescGu: 'પતિ દ્વારા દારૂ, વ્યસન કે ખરાબ સંગતના કારણે ઘરમાં થતા કંકાસ અને આર્થિક મુશ્કેલીઓ નિવારવા પ્રાચીન વૈદિક રાહુ-શનિ શાંતિ અને સદ્બુદ્ધિ અનુષ્ઠાન.',
    fullDesc: 'वैदिक ज्योतिष के अनुसार कुंडली के द्वितीय भाव (खान-पान) और द्वादश भाव (शयन व व्यसन) पर राहु अथवा पीड़ित चंद्रमा-शनि का प्रभाव व्यक्ति को शराब, जुआ या बुरी लत की ओर धकेलता है, जिससे पूरा परिवार बिखरने लगता है। पूज्य बाबाजी माँ नागदेवी की दिव्य कृपा से राहु ग्रह की विशेष शांति, गंगाजल अभिमंत्रित सद्बुद्धि संकल्प एवं सात्विक वैदिक हवन कराकर पति के मन से नशे का आकर्षण मिटाकर घर में पुनः सुख-शांति व समृद्धि स्थापित करते हैं।',
    fullDescHi: 'वैदिक ज्योतिष के अनुसार कुंडली के द्वितीय भाव (खान-पान) और द्वादश भाव (शयन व व्यसन) पर राहु अथवा पीड़ित चंद्रमा-शनि का प्रभाव व्यक्ति को शराब, जुआ या बुरी लत की ओर धकेलता है, जिससे पूरा परिवार बिखरने लगता है। पूज्य बाबाजी माँ नागदेवी की दिव्य कृपा से राहु ग्रह की विशेष शांति, गंगाजल अभिमंत्रित सद्बुद्धि संकल्प एवं सात्विक वैदिक हवन कराकर पति के मन से नशे का आकर्षण मिटाकर घर में पुनः सुख-शांति व समृद्धि स्थापित करते हैं।',
    fullDescGu: 'વૈદિક જ્યોતિષ મુજબ કુંડળીના બીજા અને બારમા ભાવ પર રાહુ અને પીડિત ચંદ્રનો પ્રભાવ વ્યક્તિને દારૂ કે ખોટી લતમાં નાખે છે. માં નાગદેવીની કૃપાથી રાહુ શાંતિ અને સદ્બુદ્ધિ વૈદિક વિધાન દ્વારા બાબાજી પરિવારમાં સુખ-શાંતિ લાવે છે.',
    benefits: [
      'पति की मदिरापान व नशे की बुरी आदत छुड़ाने हेतु सात्विक वैदिक उपाय',
      'राहु-शनि ग्रह दोष शांति द्वारा मतिभ्रम, क्रोध व बुरी संगति से मुक्ति',
      'घर में होने वाले रोजाना के झगड़े, मार-पीट व क्लेश का स्थायी निवारण',
      'पारिवारिक मान-सम्मान, धन की बचत और बच्चों के उज्ज्वल भविष्य की रक्षा'
    ],
    benefitsHi: [
      'पति की मदिरापान व नशे की बुरी आदत छुड़ाने हेतु सात्विक वैदिक उपाय',
      'राहु-शनि ग्रह दोष शांति द्वारा मतिभ्रम, क्रोध व बुरी संगति से मुक्ति',
      'घर में होने वाले रोजाना के झगड़े, मार-पीट व क्लेश का स्थायी निवारण',
      'पारिवारिक मान-सम्मान, धन की बचत और बच्चों के उज्ज्वल भविष्य की रक्षा'
    ],
    benefitsGu: [
      'પતિની દારૂ તેમજ ખોટા વ્યસનોમાંથી મુક્તિ માટે શાસ્ત્રોક્ત ઉપાય',
      'રાહુ દોષ શાંતિથી ક્રોધ, અસ્થિરતા અને ખરાબ સંગતનું નિવારણ',
      'ઘરમાં રોજિંદા કંકાસ અને અશાંતિનું કાયમી સાત્વિક સમાધાન',
      'પરિવારની સુખ-શાંતિ, બચત અને બાળકોના ભવિષ્યનું રક્ષણ'
    ],
    timeframe: '5 से 7 दिवसीय राहु शांति एवं व्यसन मुक्ति संकल्प',
    timeframeHi: '5 से 7 दिवसीय राहु शांति एवं व्यसन मुक्ति संकल्प',
    timeframeGu: '૫ થી ૭ દિવસીય રાહુ શાંતિ અને વ્યસન મુક્તિ સંકલ્પ',
    mantraPreview: 'ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः || ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवર્धनम्...',
    iconName: 'Flame',
    imageUrl: serviceVyasanMukti
  },
  {
    id: 'vedic-love-astrology',
    title: 'Authentic Vedic Relationship Astrology Specialist',
    category: 'love',
    badge: 'Pure Sattvic Vedic Puja',
    shortDesc: 'Traditional Vedic astrological practices to foster warmth, pacify anger, remove distance, and restore love in strained relationships.',
    fullDesc: 'In authentic Vedic tradition, planetary alignment and Shukra-Brihaspati Anushthan are sacred practices designed to calm agitated minds and align emotional energies. Our Siddha Anushthan uses pure sattvic rituals to gently soothe resentment and restore heartfelt compassion between loved ones safely.',
    benefits: [
      'Completely positive, peaceful, and karmically pure',
      'Customized to your specific birth chart (Kundali) and planetary dasha',
      'Helps overcome behavioral communication blocks and resentment',
      'Performed with authentic Siddha Yantra & consecrated Vedic offerings'
    ],
    timeframe: 'Traditional Vedic Anushthan Process',
    mantraPreview: 'Om Namo Bhagavate Rudraya Sarva-Jagan-Mohanaya Swaha...',
    iconName: 'Wand2',
    imageUrl: serviceRelationshipHavan
  },
  {
    id: 'intercaste-love-marriage',
    title: 'Intercaste Love Marriage & Family Harmony Guidance',
    category: 'marriage',
    badge: 'Parental Harmony & Blessing',
    shortDesc: 'Seek peaceful family consent, overcome societal doubts, and address astrological hurdles in your marital journey with Vedic astrology.',
    fullDesc: 'When rigid family opinions or astrological mismatches cause hesitation for marriage, Vedic scriptures offer harmonious paths. Baba Ji conducts specialized Brihaspati (Jupiter) & Shukra (Venus) Shanti Havans that foster dialogue, ease familial worry, and help parents extend their heartfelt blessings.',
    benefits: [
      'Encourage understanding and supportive blessings from elders',
      'Dissolve social and cultural friction through respectful dialogue',
      'Clear planetary afflictions delaying auspicious marriage dates',
      'Protective Vedic Havans to invite positive family auspiciousness'
    ],
    timeframe: 'Custom Vedic Muhurta Consultation',
    mantraPreview: 'Om Sham Shankaraya Sakala-Janmarjita-Paapa-Vidhvansanaya...',
    iconName: 'Ring',
    imageUrl: serviceLoveMarriage
  },
  {
    id: 'negative-energy-cleansing',
    title: 'Negative Energy Cleansing & Protective Havans',
    category: 'protection',
    badge: 'Spiritual Shield & Peace',
    shortDesc: 'Identify planetary afflictions, clear heavy negative energies, and restore spiritual vitality with sacred Baglamukhi Havans.',
    fullDesc: 'Sudden domestic friction, chronic unease, or a persistent heavy aura are often linked to negative vibrations, planetary transits, or evil eye (Buri Nazar). Baba Ji invokes Maa Baglamukhi and Maha Bhairav Kavach to clear negative vibrations and bless your home with protective spiritual energy.',
    benefits: [
      'Comprehensive spiritual aura and energy field assessment',
      'Vedic cleansing rituals to disperse negative energetic influences',
      'Consecrated Raksha Kavach protective talisman for the family',
      'Restores mental peace, restful sleep, and domestic tranquility'
    ],
    timeframe: 'Aura Cleansing & Shanti Rituals',
    mantraPreview: 'Om Hleem Bagalamukhi Sarvadushtaanaam Vaacham Mukham Padam Stambhaya...',
    iconName: 'ShieldAlert',
    imageUrl: serviceNegativeEnergyRemedy
  },
  {
    id: 'business-career-growth',
    title: 'Business & Career Astrological Consultation',
    category: 'career',
    badge: 'Kuber & Laxmi Puja',
    shortDesc: 'Analyze professional astrological houses, pacify financial obstacles, and choose auspicious Muhurtas for growth.',
    fullDesc: 'Facing repeated professional hurdles or unrewarded hard work? Our Kuber and Budh (Mercury) alignment consultations provide insight into career houses, recommend auspicious timings (Shubh Muhurta), and offer remedies to invite steady prosperity and clarity.',
    benefits: [
      'In-depth 10th (Karma) and 11th (Labha) house Vedic analysis',
      'Gemstone and yantra recommendations for intellectual focus',
      'Pacification of commercial and financial astrological stress',
      'Auspicious Shubh Muhurta planning for new business ventures'
    ],
    timeframe: 'Personalized Astrological Consultation',
    mantraPreview: 'Om Shreem Hreem Kleem Tribhuvana Mahalakshmyai Namah...',
    iconName: 'Briefcase',
    imageUrl: serviceBusinessGrowth
  },
  {
    id: 'husband-wife-disputes',
    title: 'Husband-Wife Harmony & Griha Klesh Shanti',
    category: 'marriage',
    badge: 'Marital Harmony',
    shortDesc: 'Address recurring domestic friction, bridge emotional gaps, and restore mutual respect and warmth in married life.',
    fullDesc: 'When daily arguments, communication breakdowns, or misunderstandings disturb marital life, astrological guidance helps pinpoint planetary friction. Baba Ji conducts Gauri-Shankar harmony rituals that nurture emotional closeness, mutual respect, and peaceful coexistence.',
    benefits: [
      'Resolve misunderstandings through calm astrological counsel',
      'Identify and balance planetary 7th house and Venus-Mars discord',
      'Restore domestic peace and positive household environment',
      'Reawaken mutual respect, empathy, and marital understanding'
    ],
    timeframe: 'Vedic Counseling & Havan Remedies',
    mantraPreview: 'Om Aim Kleem Souh Uma-Maheshwarabhyam Namah...',
    iconName: 'Users',
    imageUrl: serviceMaritalHarmony
  },
  {
    id: 'divorce-cancellation-solution',
    title: 'Marital Reconciliation & Dispute Resolution',
    category: 'marriage',
    badge: 'Crisis Counseling & Puja',
    shortDesc: 'Compassionate astrological guidance and peaceful Vedic remedies to encourage reconciliation and save sacred marital bonds.',
    fullDesc: 'If discord or external pressures are pushing your marriage towards separation, Vedic wisdom counsels patience and spiritual balance. Baba Ji provides counseling and conducts soothing Gauri-Shankar pujas to calm emotional hostility, encourage heartfelt dialogue, and support reconciliation.',
    benefits: [
      'Calm heightened anger to facilitate meaningful personal dialogue',
      'Identify unseen astrological factors triggering domestic separation',
      'Foster empathy, shared memories, and emotional healing',
      'Help protect family stability and children’s emotional well-being'
    ],
    timeframe: 'Compassionate Consultation & Puja',
    mantraPreview: 'Om Tryambakam Yajaamahe Sugandhim Pushtivardhanam...',
    iconName: 'Flame',
    imageUrl: serviceDivorceRemedy
  },
  {
    id: 'kundali-graha-dosha',
    title: 'Kundali Dosha (Manglik, Kaal Sarp, Pitra)',
    category: 'kundali',
    badge: 'Authentic Vedic Shanti',
    shortDesc: 'Neutralize severe Kaal Sarp Yoga, Mangal Dosha, Pitra Rin, and Shani Sade Sati creating lifetime obstacles.',
    fullDesc: 'Deep Vedic planetary afflictions can stunt every aspect of your life—delaying marriage till late ages, causing sudden chronic illness, or blocking progeny. Baba Ji analyzes birth charts using ancient Parashari & Jaimini principles, prescribing exact gemstone and Trimbakeshwar ritual remedies.',
    benefits: [
      'Accurate birth chart (Janampatri) & Navamsha analysis',
      'Kaal Sarp & Mangal Dosha Nivaran through certified Vedic rituals',
      'Pitra Dosha peace to grant ancestral blessings and progeny',
      'Shani Sade Sati & Rahu-Ketu transit pacification'
    ],
    timeframe: 'Permanent dosha pacification',
    mantraPreview: 'Om Navagraha Devaya Namah | Om Aadityaya Somaya Mangalaya...',
    iconName: 'Star',
    imageUrl: serviceKundaliDosha
  },
  {
    id: 'santan-prapti-solution',
    title: 'Santan Prapti & Child Problem Solution',
    category: 'kundali',
    badge: 'Santan Gopal Siddhi',
    shortDesc: 'Overcome unexplained delays in childbirth, Putra & Santan Dosha, and recurring miscarriages with sacred Vedic rituals.',
    fullDesc: 'Childbirth delays and recurrent miscarriages often originate from severe 5th house planetary afflictions (Putra Bhava), ancestral Pitra Rin, or negative evil eye curses on the family lineage. Baba Ji conducts ancient Putrakameshti and Santan Gopal Anushthan along with Maa Naagdevi Garbha Raksha blessings to bestow the divine joy of healthy parenthood.',
    benefits: [
      'Comprehensive horoscope analysis of 5th house (Putra Bhava) & Jupiter (Guru)',
      'Sacred Santan Gopal & Maa Naagdevi Garbha Raksha Anushthan',
      'Neutralization of past-life karmic Putra Dosha and ancestral Pitra Rin',
      'Energized protective silver amulet (Kavach) and Siddha Yantra for couples'
    ],
    timeframe: 'Sacred Sankalp Rituals in 3 to 7 Days',
    mantraPreview: 'Om Devaki Suta Govinda Vasudeva Jagatpate | Dehi Me Tanayam Krishna Tvaamaham Sharanam Gatah...',
    iconName: 'Baby',
    imageUrl: serviceSantanPrapti
  },
  {
    id: 'santan-sadbuddhi-obedient-remedy',
    title: 'Child Guidance, Obedience & Mental Peace (Santan Sadbuddhi Anushthan)',
    titleHi: 'संतान सद्बुद्धि, आज्ञाकारिता एवं गलत संगति निवारण वैदिक अनुष्ठान',
    titleGu: 'સંતાન સદ્બુદ્ધિ, આજ્ઞાપાલન અને ખરાબ સંગત મુક્તિ વૈદિક અનુષ્ઠાન',
    category: 'marriage',
    isHighlighted: true,
    badge: '⭐ संतान सद्बुद्धि व संस्कार',
    badgeHi: '⭐ संतान सद्बुद्धि व संस्कार',
    badgeGu: '⭐ સંતાન સદ્બુદ્ધિ અને સંસ્કાર',
    highlightBadge: '👶 विशेष संतान सद्बुद्धि अनुष्ठान • Child Guidance Spotlight',
    shortDesc: 'संतान का माता-पिता की बात न मानना, अत्यधिक जिद्दी स्वभाव, मोबाइल व गलत संगति की लत तथा पढ़ाई से भटकाव दूर करने हेतु पंचम भाव व राहु-बुध शांति वैदिक अनुष्ठान। बालक/बालिका में आज्ञाकारिता व सद्बुद्धि की स्थापना।',
    shortDescHi: 'संतान का माता-पिता की बात न मानना, अत्यधिक जिद्दी स्वभाव, मोबाइल व गलत संगति की लत तथा पढ़ाई से भटकाव दूर करने हेतु पंचम भाव व राहु-बुध शांति वैदिक अनुष्ठान। बालक/बालिका में आज्ञाकारिता व सद्बुद्धि की स्थापना।',
    shortDescGu: 'સંતાન માતા-પિતાનું ન માનવું, હઠીલો સ્વભાવ, મોબાઇલ અને ખરાબ સંગતની લત તેમજ ભણવામાં મન ન લાગવું જેવી સમસ્યાઓનું પંચમ ભાવ અને રાહુ-બુધ શાંતિ વૈદિક સમાધાન.',
    fullDesc: 'आजकल के बच्चे माता-पिता के नियंत्रण से बाहर होकर अत्यधिक जिद्दी, चिड़चिड़े व अपने मनमाने फैसले लेने वाले बन जाते हैं। वैदिक ज्योतिष के अनुसार जातक की जन्मपत्रिका के पंचम भाव (संतान व बुद्धि भाव), चंद्रमा (मन) और बुध (सद्बुद्धि) पर राहु, केतु या क्रूर ग्रहों का दुष्प्रभाव मतिभ्रम और उद्दंडता उत्पन्न करता है। पूज्य बाबा जी माँ नागदेवी की कृपा से पंचम भाव शुद्धि, सरस्वती-बृहस्पति सद्बुद्धि संपुटित महाजाप एवं अभिमंत्रित रक्षा ताबीज द्वारा संतान के मन से जिद्द, भटकाव व गलत संगति छुड़ाकर उनमें बड़ों के प्रति आदर, आज्ञाकारिता और उज्ज्वल भविष्य की नींव रखते हैं।',
    fullDescHi: 'आजकल के बच्चे माता-पिता के नियंत्रण से बाहर होकर अत्यधिक जिद्दी, चिड़चिड़े व अपने मनमाने फैसले लेने वाले बन जाते हैं। वैदिक ज्योतिष के अनुसार जातक की जन्मपत्रिका के पंचम भाव (संतान व बुद्धि भाव), चंद्रमा (मन) और बुध (सद्बुद्धि) पर राहु, केतु या क्रूर ग्रहों का दुष्प्रभाव मतिभ्रम और उद्दंडता उत्पन्न करता है। पूज्य बाबा जी माँ नागदेवी की कृपा से पंचम भाव शुद्धि, सरस्वती-बृहस्पति सद्बुद्धि संपुटित महाजाप एवं अभिमंत्रित रक्षा ताबीज द्वारा संतान के मन से जिद्द, भटकाव व गलत संगति छुड़ाकर उनमें बड़ों के प्रति आदर, आज्ञाकारिता और उज्ज्वल भविष्य की नींव रखते हैं।',
    fullDescGu: 'આજના સમયમાં બાળકો માતા-પિતાની વાત ન સાંભળવી, વધુ પડતો ગુસ્સો, જીદ અને ખોટી સંગતમાં પડી જવું એ કુંડળીના પંચમ ભાવ અને પીડિત ચંદ્ર-રાહુનો દોષ હોય છે. પૂજ્ય બાબાજી સરસ્વતી અને બૃહસ્પતિ સદ્બુદ્ધિ વૈદિક વિધાન દ્વારા બાળકોમાં સંસ્કાર અને આજ્ઞાપાલન પ્રદાન કરે છે.',
    benefits: [
      'अत्यधिक जिद्द, क्रोध व अहंकार का स्थायी वैदिक निवारण',
      'माता-पिता की आज्ञा का सम्मान और पारिवारिक संस्कारों की पुनर्स्थापना',
      'गलत मित्रों की संगति, मोबाइल की लत व बुरी आदतों से मुक्ति',
      'पढ़ाई, करियर व जिम्मेदारियों में एकाग्रता और उज्ज्वल भविष्य'
    ],
    benefitsHi: [
      'अत्यधिक जिद्द, क्रोध व अहंकार का स्थायी वैदिक निवारण',
      'माता-पिता की आज्ञा का सम्मान और पारिवारिक संस्कारों की पुनर्स्थापना',
      'गलत मित्रों की संगति, मोबाइल की लत व बुरी आदतों से मुक्ति',
      'पढ़ाई, करियर व जिम्मेदारियों में एकाग्रता और उज्ज्वल भविष्य'
    ],
    benefitsGu: [
      'સંતાનના મનમાંથી વધુ પડતી જીદ, ક્રોધ અને અહંકારનું કાયમી નિવારણ',
      'માતા-પિતાની આજ્ઞાનું પાલન અને પારિવારિક સંસ્કારોની પુનઃસ્થાપના',
      'ખોટી સંગત, મોબાઇલનું વ્યસન અને ભટકતી બુદ્ધિમાંથી મુક્તિ',
      'અભ્યાસ, કારકિર્દી અને ભવિષ્ય પ્રત્યે ગંભીરતા અને સફળતા'
    ],
    timeframe: '5 से 7 दिवसीय सद्बुद्धि एवं संस्कार संकल्प',
    timeframeHi: '5 से 7 दिवसीय सद्बुद्धि एवं संस्कार संकल्प',
    timeframeGu: '૫ થી ૭ દિવસીય સદ્બુદ્ધિ અને સંસ્કાર સંકલ્પ',
    mantraPreview: 'ॐ ऐं वाग्देव्यै च विद्महे कामराजाय धीमहि तन्नो देवी प्रचोदयात् || ॐ बृं बृहस्पतये नमः...',
    iconName: 'Baby',
    imageUrl: serviceSantanSadbuddhi
  },
  {
    id: 'par-istri-moh-sautan-nivaran',
    title: 'Husband Extramarital Affair & Third-Party Discord Relief (Par-Istri Moh & Sautan Badha Nivaran)',
    titleHi: 'पति का पर-स्त्री मोह, सौतन बाधा एवं गुप्त आकर्षण निवारण वैदिक अनुष्ठान',
    titleGu: 'પતિનો પર-સ્ત્રી મોહ, સોતન બાધા અને આકર્ષણ મુક્તિ વૈદિક અનુષ્ઠાન',
    category: 'marriage',
    badge: '🔒 100% गोपनीय • पर-स्त्री व सौतन निवारण',
    badgeHi: '🔒 100% गोपनीय • पर-स्त्री व सौतन निवारण',
    badgeGu: '🔒 ૧૦૦% ગોપનીય • પર-સ્ત્રી અને સોતન નિવારણ',
    shortDesc: 'पति का अन्य स्त्री के प्रभाव व आकर्षण में आना, झूठ बोलना, पत्नी-बच्चों की उपेक्षा व दांपत्य कलह दूर करने हेतु कामाख्या-शुक्र शांति व सौतन बाधा निवारण वैदिक अनुष्ठान। पति के मन से पर-स्त्री का प्रभाव मिटाकर दांपत्य में पुनः अटूट प्रेम व विश्वास।',
    shortDescHi: 'पति का अन्य स्त्री के प्रभाव व आकर्षण में आना, झूठ बोलना, पत्नी-बच्चों की उपेक्षा व दांपत्य कलह दूर करने हेतु कामाख्या-शुक्र शांति व सौतन बाधा निवारण वैदिक अनुष्ठान। पति के मन से पर-स्त्री का प्रभाव मिटाकर दांपत्य में पुनः अटूट प्रेम व विश्वास।',
    shortDescGu: 'પતિ અન્ય સ્ત્રીના આકર્ષણમાં ફસાઈ જવું, જૂઠ બોલવું, પત્ની-બાળકોની ઉપેક્ષા અને કલેશ નિવારવા કામાખ્યા-શુક્ર શાંતિ અને સોતન બાધા નિવારણ વૈદિક વિધાન.',
    fullDesc: 'जब किसी परिवार में पति किसी अन्य महिला (पर-स्त्री) के संपर्क, आकर्षण या सम्मोहन में आ जाता है, तो पूरा दांपत्य जीवन बिखर जाता है। वैदिक ज्योतिष के अनुसार जन्मकुंडली के सप्तम भाव (दांपत्य), द्वादश भाव (शयन व गुप्त संबंध) और शुक्र ग्रह पर राहु-केतु का कुप्रभाव अथवा पर-स्त्री द्वारा किया गया बंधन या आकर्षण बुद्धि को भ्रमित कर देता है। पूज्य बाबाजी माँ नागदेवी की दिव्य कृपा से कामाख्या-बगलामुखी मंत्र संपुटित सात्विक अनुष्ठान, शुक्र शांति एवं अखंड गृहस्थ रक्षा कवच द्वारा पति के मस्तिष्क और दृष्टि से उस अन्य स्त्री का प्रभाव जड़ से समाप्त करते हैं तथा पत्नी के प्रति पुनः अनन्य प्रेम, सम्मान व समर्पण स्थापित करते हैं।',
    fullDescHi: 'जब किसी परिवार में पति किसी अन्य महिला (पर-स्त्री) के संपर्क, आकर्षण या सम्मोहन में आ जाता है, तो पूरा दांपत्य जीवन बिखर जाता है। वैदिक ज्योतिष के अनुसार जन्मकुंडली के सप्तम भाव (दांपत्य), द्वादश भाव (शयन व गुप्त संबंध) और शुक्र ग्रह पर राहु-केतु का कुप्रभाव अथवा पर-स्त्री द्वारा किया गया बंधन या आकर्षण बुद्धि को भ्रमित कर देता है। पूज्य बाबाजी माँ नागदेवी की दिव्य कृपा से कामाख्या-बगलामुखी मंत्र संपुटित सात्विक अनुष्ठान, शुक्र शांति एवं अखंड गृहस्थ रक्षा कवच द्वारा पति के मस्तिष्क और दृष्टि से उस अन्य स्त्री का प्रभाव जड़ से समाप्त करते हैं तथा पत्नी के प्रति पुनः अनन्य प्रेम, सम्मान व समर्पण स्थापित करते हैं।',
    fullDescGu: 'જ્યારે પતિ અન્ય સ્ત્રીના વશ કે મોહમાં આવી પત્ની અને બાળકોની ઉપેક્ષા કરે ત્યારે વૈદિક જ્યોતિષ મુજબ સપ્તમ ભાવ, બારમા ભાવ અને શુક્ર-રાહુ દોષ શાંતિ તથા કામાખ્યા વિધાન દ્વારા બાબાજી પતિના મનમાંથી પર-સ્ત્રીનો પ્રભાવ હટાવી પરિવારમાં અખંડ પ્રેમ લાવે છે.',
    benefits: [
      'पर-स्त्री के चंगुल, सम्मोहन व गुप्त आकर्षण से पति की पूर्ण मुक्ति',
      'पति और अन्य स्त्री के बीच स्वाभाविक विरक्ति व स्थायी अलगाव',
      'पत्नी और बच्चों के प्रति पति का पुनः गहरा प्रेम, आदर व जिम्मेदारी',
      'रोजाना के शक, क्लेश, मार-पीट व तलाक के तनाव का 100% गोपनीय व शास्त्रसम्मत निवारण'
    ],
    benefitsHi: [
      'पर-स्त्री के चंगुल, सम्मोहन व गुप्त आकर्षण से पति की पूर्ण मुक्ति',
      'पति और अन्य स्त्री के बीच स्वाभाविक विरक्ति व स्थायी अलगाव',
      'पत्नी और बच्चों के प्रति पति का पुनः गहरा प्रेम, आदर व जिम्मेदारी',
      'रोजाना के शक, क्लेश, मार-पीट व तलाक के तनाव का 100% गोपनीय व शास्त्रसम्मत निवारण'
    ],
    benefitsGu: [
      'પર-સ્ત્રીના મોહ અને આકર્ષણમાંથી પતિની સંપૂર્ણ મુક્તિ',
      'પતિ અને અન્ય સ્ત્રી વચ્ચે કાયમી વિરક્તિ અને અંતર',
      'પત્ની અને બાળકો પ્રત્યે પતિનો પુનઃ પ્રેમ, આદર અને સમર્પણ',
      'ઘરકંકાસ, અવિશ્વાસ અને છૂટાછેડાના ભયનું કાયમી સાત્વિક સમાધાન'
    ],
    timeframe: '5 से 7 दिवसीय सौतन बाधा एवं शुक्र शांति संकल्प',
    timeframeHi: '5 से 7 दिवसीय सौतन बाधा एवं शुक्र शांति संकल्प',
    timeframeGu: '૫ થી ૭ દિવસીય સોતન બાધા અને શુક્ર શાંતિ સંકલ્પ',
    mantraPreview: 'ॐ ह्रीं क्लीं श्रीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय... || ॐ द्रां द्रीं द्रौं सः शुक्राय नमः...',
    iconName: 'Shield',
    imageUrl: serviceParIstriNivaran
  }
];

export const SACRED_PROCESS = [
  {
    step: '01',
    title: 'Confidential Astrological Diagnosis',
    description: 'Share your birth details with Baba Ji via WhatsApp or Phone. Your identity is strictly confidential, sacred and protected.'
  },
  {
    step: '02',
    title: 'Planetary & Kundali Root Cause Analysis',
    description: 'Baba Ji calculates planetary configurations (Navagraha), Dasha periods, and relationship compatibility factors.'
  },
  {
    step: '03',
    title: 'Sattvic Vedic Havan & Anushthan',
    description: 'Under auspicious Shubh Muhurta, Baba Ji performs customized Vedic pujas invoking benevolent divine blessings.'
  },
  {
    step: '04',
    title: 'Personal Guidance & Protective Kavach',
    description: 'Receive personal mantra recommendations, energized spiritual talismans, and continuous ethical guidance.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Rahul & Sneha',
    location: 'Mumbai, Maharashtra',
    problem: 'Strained Relationship & Lack of Communication',
    review: 'We had persistent misunderstandings and communication breakdown for months. Baba Ji analyzed our Kundalis and suggested planetary remedies and a Shukra Shanti Havan. Within a short time, misunderstandings cleared, communication resumed with warmth, and we are now peacefully married. Deeply grateful for authentic Vedic guidance.',
    solutionTime: 'Vedic Consultation & Puja',
    rating: 5,
    date: 'Recent Devotee',
    verified: true,
    category: 'love',
    flag: '🇮🇳'
  },
  {
    id: 't2',
    clientName: 'Priya & Gurpreet Singh',
    location: 'Brampton & Toronto, Canada',
    problem: 'Intercaste Marriage Objection & Family Hesitation',
    review: 'Living in Canada, we faced massive opposition from our families. We connected with Baba Ji over WhatsApp. He conducted a Brihaspati Shanti Havan and advised us on how to communicate patiently. Gradually, both families softened and gave their wholehearted blessings for our marriage.',
    solutionTime: 'Family Dialogue & Havan',
    rating: 5,
    date: 'Recent Devotee',
    verified: true,
    category: 'abroad',
    flag: '🇨🇦'
  },
  {
    id: 't3',
    clientName: 'Pooja Verma',
    location: 'Delhi NCR',
    problem: 'Marital Disputes & Emotional Disconnection',
    review: 'Our marriage was suffering from extreme bitterness and constant arguments. Baba Ji identified the planetary friction between Mars and Venus in our charts. Following his Gauri-Shankar puja and dietary advice, our domestic atmosphere became calm and peaceful again.',
    solutionTime: 'Gauri-Shankar Anushthan',
    rating: 5,
    date: 'Recent Devotee',
    verified: true,
    category: 'marriage',
    flag: '🇮🇳'
  },
  {
    id: 't4',
    clientName: 'Karan Patel',
    location: 'London, United Kingdom',
    problem: 'Misunderstandings & Relationship Strain',
    review: 'My engagement was in jeopardy due to third-party misunderstandings. Baba Ji gave precise astrological advice and conducted a peaceful Vedic anushthan. Truth prevailed, misunderstandings were cleared, and our relationship is back on a healthy, loving path.',
    solutionTime: 'Vedic Guidance & Shanti',
    rating: 5,
    date: 'Recent Devotee',
    verified: true,
    category: 'abroad',
    flag: '🇬🇧'
  },
  {
    id: 't5',
    clientName: 'Simran & David K.',
    location: 'New York & New Jersey, USA',
    problem: 'Impending Separation & Household Discord',
    review: 'Our marriage was heading toward separation due to severe stress and discord. Baba Ji provided continuous telephonic spiritual support and suggested peaceful harmony remedies. We found common ground to talk calmly and withdrew legal steps to rebuild our home together.',
    solutionTime: 'Spiritual Counseling',
    rating: 5,
    date: 'Recent Devotee',
    verified: true,
    category: 'abroad',
    flag: '🇺🇸'
  },
  {
    id: 't6',
    clientName: 'Bhavesh & Ami Patel',
    location: 'Ahmedabad (Satellite) & Edison NJ',
    problem: 'Intercaste Love Marriage Family Acceptance & Visa Delay',
    review: 'અમારા લગ્ન માટે પરિવારો સહમત નહોતા અને NRI વિઝામાં વારંવાર રુકાવટ આવતી હતી. બાબાજીએ કુંડળી દોષ નિવારણ અને માં નાગદેવી સિદ્ધ હવન કરાવ્યો. ચમત્કારિક રૂપે બંને પરિવારો હૃદયપૂર્વક રાજી થયા અને અમારા સુખી લગ્ન સંપન્ન થયા. બાબાજીનો ખૂબ ખૂબ આભાર!',
    solutionTime: 'Vedic Shanti & Family Harmony',
    rating: 5,
    date: 'Recent Devotee',
    verified: true,
    category: 'love',
    flag: '🇮🇳'
  },
  {
    id: 't7',
    clientName: 'Ananya Roy',
    location: 'Kolkata, West Bengal',
    problem: 'Heavy Atmosphere & Mental Unease at Home',
    review: 'There was constant unease and disturbance in our house. Baba Ji performed a Vedic Baglamukhi protective havan and recommended daily mantras. A profound sense of peace and mental clarity returned to our family.',
    solutionTime: 'Aura Cleansing & Puja',
    rating: 5,
    date: 'Recent Devotee',
    verified: true,
    category: 'protection',
    flag: '🇮🇳'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-0',
    question: 'શું હું સંપૂર્ણ ગુજરાતીમાં વાતચીત અને પરામર્શ મેળવી શકું? (Can I consult in Gujarati?)',
    answer: 'હા, ચોક્કસ (Yes, Absolutely). બાબાજી શુદ્ધ ગુજરાતી (Mother-tongue Gujarati), હિન્દી તથા અંગ્રેજીમાં સરળતાથી વાતચીત કરે છે. અમદાવાદ, સુરત, વડોદરા, રાજકોટ, ભાવનગર, આણંદ, નડિયાદ, કચ્છ તથા અમેરિકા, લંડન, કેનેડા વસતા હજારો ગુજરાતી પરિવારો નિયમિત માર્ગદર્શન મેળવે છે.',
    category: 'Language'
  },
  {
    id: 'faq-1',
    question: 'How do Vedic astrological remedies and consultations work?',
    answer: 'Vedic remedies work by identifying planetary disharmony in your birth chart (Kundali) and performing customized Vedic pujas, havans, or mantra chanting to cultivate peace, positivity, and clarity. Timelines and experiences vary naturally depending on individual karmic factors and sincere participation.',
    category: 'Guidance'
  },
  {
    id: 'faq-2',
    question: 'Are your astrological methods safe and ethical?',
    answer: 'Yes, completely pure and ethical. Baba Ji practices exclusively pure Sattvic and Vedic traditions rooted in ancient scriptures. We do not engage in or support harmful practices. All rituals aim solely for peace, emotional well-being, and positive spiritual upliftment.',
    category: 'Safety'
  },
  {
    id: 'faq-3',
    question: 'Can consultations and rituals be done online if I live abroad?',
    answer: 'Yes. Devotees regularly consult from the USA, UK, Canada, UAE, Australia, and across India. Vedic guidance, birth chart analysis, and customized Havans can be coordinated remotely via phone or WhatsApp.',
    category: 'Consultation'
  },
  {
    id: 'faq-4',
    question: 'Will my consultation and personal problem remain confidential?',
    answer: 'We maintain complete confidentiality. Your name, contact information, birth data, and private concerns are kept strictly private and are never shared with any third party.',
    category: 'Privacy'
  },
  {
    id: 'faq-5',
    question: 'What details do I need to provide for Kundali analysis?',
    answer: 'Ideally, your Name, Date of Birth, Place of Birth, and approximate Time of Birth. If exact birth time is not available, Baba Ji can perform Prashna Kundali (Horary Astrology) to analyze your situation.',
    category: 'Details'
  },
  {
    id: 'faq-6',
    question: 'Can astrological guidance help during marital disputes or separation?',
    answer: 'Yes. Astrological consultation helps identify astrological compatibility friction, emotional triggers, and auspicious periods for constructive dialogue, helping couples understand each other with patience and compassion.',
    category: 'Marriage'
  }
];

export const ZODIAC_SIGNS = [
  { name: 'Mesh (Aries)', element: 'Fire', lord: 'Mars', luckyStone: 'Red Coral', symbol: '♈' },
  { name: 'Vrishabh (Taurus)', element: 'Earth', lord: 'Venus', luckyStone: 'Diamond / Opal', symbol: '♉' },
  { name: 'Mithun (Gemini)', element: 'Air', lord: 'Mercury', luckyStone: 'Emerald', symbol: '♊' },
  { name: 'Kark (Cancer)', element: 'Water', lord: 'Moon', luckyStone: 'Pearl', symbol: '♋' },
  { name: 'Simha (Leo)', element: 'Fire', lord: 'Sun', luckyStone: 'Ruby', symbol: '♌' },
  { name: 'Kanya (Virgo)', element: 'Earth', lord: 'Mercury', luckyStone: 'Emerald', symbol: '♍' },
  { name: 'Tula (Libra)', element: 'Air', lord: 'Venus', luckyStone: 'Diamond / White Topaz', symbol: '♎' },
  { name: 'Vrishchik (Scorpio)', element: 'Water', lord: 'Mars', luckyStone: 'Red Coral', symbol: '♏' },
  { name: 'Dhanu (Sagittarius)', element: 'Fire', lord: 'Jupiter', luckyStone: 'Yellow Sapphire', symbol: '♐' },
  { name: 'Makar (Capricorn)', element: 'Earth', lord: 'Saturn', luckyStone: 'Blue Sapphire', symbol: '♑' },
  { name: 'Kumbh (Aquarius)', element: 'Air', lord: 'Saturn', luckyStone: 'Blue Sapphire / Amethyst', symbol: '♒' },
  { name: 'Meen (Pisces)', element: 'Water', lord: 'Jupiter', luckyStone: 'Yellow Sapphire', symbol: '♓' }
];
