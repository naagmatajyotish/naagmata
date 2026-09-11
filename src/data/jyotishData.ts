import { ServiceItem, TestimonialItem, FaqItem } from '../types';
import serviceLoveSolution from '../assets/images/service_love_solution.jpg';
import serviceVashikaranHavan from '../assets/images/service_vashikaran_havan.jpg';
import serviceLoveMarriage from '../assets/images/service_love_marriage.jpg';
import serviceBlackMagic from '../assets/images/service_black_magic.jpg';
import serviceBusinessGrowth from '../assets/images/service_business_growth.jpg';
import serviceMaritalHarmony from '../assets/images/service_marital_harmony.jpg';
import serviceDivorceRemedy from '../assets/images/service_divorce_remedy.jpg';
import serviceKundaliDosha from '../assets/images/service_kundali_dosha.jpg';
import serviceSantanPrapti from '../assets/images/service_santan_prapti.jpg';

export const CONTACT_INFO = {
  phone: '+91-9714127309',
  phoneRaw: '+919714127309',
  phoneDisplay: '+91 97141 27309',
  email: 'naagmatajyotish@gmail.com',
  whatsappUrl: 'https://wa.me/919714127309?text=Pranam%20Pandit%20Ji%2C%20I%20need%20your%20sacred%20Vedic%20astrological%20guidance.',
  location: 'Shri Mahakali & Naagmata Siddha Peeth Ashram, Ujjain & Haridwar (Consultations available across India & Worldwide online)',
  availableHours: '24 Hours / 7 Days Live Support',
  experienceYears: '35+',
  successRate: 'Vedic Sanctity',
  clientsCount: 'Thousands of Devotees'
};

export const SACRED_SERVICES: ServiceItem[] = [
  {
    id: 'love-problem-solution',
    title: 'Love Problem Solution & Vashikaran',
    category: 'love',
    badge: 'Most Requested',
    shortDesc: 'Restore mutual understanding, resolve emotional distance, address third-party discord, and rekindle affection with authentic love vashikaran remedies.',
    fullDesc: 'Are you suffering from misunderstandings, emotional silence, or external interference affecting your relationship? Baba Ji performs authentic Vedic Shukra (Venus) & Kamakhya Vashikaran Anushthan pujas to harmonize feelings, clarify mental doubts, and rebuild deep mutual respect and affection.',
    benefits: [
      'Foster deep emotional understanding & communication',
      'Neutralize external negative influences & misunderstandings',
      'Resolve stubborn ego clashes with compassionate Vedic advice',
      'Planetary remedies & Sattvic Vashikaran for long-term peace'
    ],
    timeframe: 'Personalized Vedic Guidance & Rituals',
    mantraPreview: 'Om Kleem Krishnaya Namah | Om Kaamadevaya Vidmahe Pushpabaanaya Dheemahi...',
    iconName: 'Heart',
    imageUrl: serviceLoveSolution
  },
  {
    id: 'powerful-vashikaran',
    title: 'Authentic Vedic Vashikaran Specialist',
    category: 'love',
    badge: 'Pure Sattvic Vashikaran',
    shortDesc: 'Traditional Vedic Vashikaran practices to foster warmth, pacify anger, remove distance, and restore love in strained relationships.',
    fullDesc: 'In authentic Vedic tradition, Vashikaran and Akarshan Vidhi are sacred practices designed to calm agitated minds and align emotional energies. Our Siddha Anushthan uses pure sattvic Vashikaran rituals to gently soothe resentment and restore heartfelt compassion between loved ones safely.',
    benefits: [
      'Completely positive, peaceful, and karmically pure',
      'Customized to your specific birth chart (Kundali) and planetary dasha',
      'Helps overcome behavioral communication blocks and resentment',
      'Performed with authentic Siddha Yantra & consecrated Vedic offerings'
    ],
    timeframe: 'Traditional Vedic Anushthan Process',
    mantraPreview: 'Om Namo Bhagavate Rudraya Sarva-Jagan-Mohanaya Swaha...',
    iconName: 'Wand2',
    imageUrl: serviceVashikaranHavan
  },
  {
    id: 'intercaste-love-marriage',
    title: 'Intercaste Love Marriage & Vashikaran Guidance',
    category: 'marriage',
    badge: 'Parental Harmony & Blessing',
    shortDesc: 'Seek peaceful family consent, overcome societal doubts, and address astrological hurdles in your marital journey with Vedic Vashikaran.',
    fullDesc: 'When rigid family opinions or astrological mismatches cause hesitation for marriage, Vedic scriptures offer harmonious paths. Baba Ji conducts specialized Brihaspati (Jupiter) & Shukra (Venus) Vashikaran Shanti Havans that foster dialogue, ease familial worry, and help parents extend their heartfelt blessings.',
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
    id: 'evil-eye-black-magic',
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
    imageUrl: serviceBlackMagic
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
    id: 'faq-1',
    question: 'How do Vedic astrological remedies and consultations work?',
    answer: 'Vedic remedies work by identifying planetary disharmony in your birth chart (Kundali) and performing customized Vedic pujas, havans, or mantra chanting to cultivate peace, positivity, and clarity. Timelines and experiences vary naturally depending on individual karmic factors and sincere participation.',
    category: 'Guidance'
  },
  {
    id: 'faq-2',
    question: 'Are your astrological methods safe and ethical?',
    answer: 'Yes, 100% pure and ethical. Baba Ji practices exclusively pure Sattvic and Vedic traditions rooted in ancient scriptures. We do not engage in or support harmful practices. All rituals aim solely for peace, emotional well-being, and positive spiritual upliftment.',
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
