import { ServiceItem, TestimonialItem, FaqItem } from '../types';
import serviceLoveSolution from '../assets/images/service_love_solution.jpg';
import serviceVashikaranHavan from '../assets/images/service_vashikaran_havan.jpg';
import serviceLoveMarriage from '../assets/images/service_love_marriage.jpg';
import serviceBlackMagic from '../assets/images/service_black_magic.jpg';
import serviceBusinessGrowth from '../assets/images/service_business_growth.jpg';
import serviceMaritalHarmony from '../assets/images/service_marital_harmony.jpg';
import serviceDivorceRemedy from '../assets/images/service_divorce_remedy.jpg';
import serviceKundaliDosha from '../assets/images/service_kundali_dosha.jpg';

export const CONTACT_INFO = {
  phone: '+91-9714127309',
  phoneRaw: '+919714127309',
  phoneDisplay: '+91 97141 27309',
  email: 'naagmatajyotish@gmail.com',
  whatsappUrl: 'https://wa.me/919714127309?text=Pranam%20Pandit%20Ji%2C%20I%20am%20facing%20serious%20problems%20and%20need%20your%20sacred%20astrological%20guidance.',
  location: 'Shri Mahakali & Naagmata Siddha Peeth Ashram, Ujjain & Haridwar (Consultations available across India & Worldwide online)',
  availableHours: '24 Hours / 7 Days Live Support',
  experienceYears: '35+',
  successRate: '99.8%',
  clientsCount: '25,000+'
};

export const SACRED_SERVICES: ServiceItem[] = [
  {
    id: 'love-problem-solution',
    title: 'Love Problem Solution',
    category: 'love',
    badge: 'Most Requested',
    shortDesc: 'Bring back your lost love, break misunderstandings, eliminate third-party interference, and rebuild attraction effortlessly.',
    fullDesc: 'Are you suffering from heartbreak, sudden silence from your lover, or outside interference destroying your romance? Baba Ji performs ancient Kamakhya & Mohini Tantrik Akarshan rituals that reignite feelings, clear mental doubts, and compel your partner to return to you with unconditional love.',
    benefits: [
      'Rekindle deep emotional affection & longing',
      'Neutralize external interference or jealous ex-partners',
      'Resolve silent treatment & stubborn ego clashes',
      'Permanent soul-level bonding within 24–48 hours'
    ],
    timeframe: 'Visible effects in 24 to 48 Hours',
    mantraPreview: 'Om Kleem Krishnaya Namah | Om Kaamadevaya Vidmahe Pushpabaanaya Dheemahi...',
    iconName: 'Heart',
    imageUrl: serviceLoveSolution
  },
  {
    id: 'powerful-vashikaran',
    title: 'Powerful Vashikaran Maha-Mantra',
    category: 'love',
    badge: 'Pure & Harmless Vedic Vidhi',
    shortDesc: 'Authentic, customized, harmless, and highly precise positive energy control rituals to influence anyone you desire.',
    fullDesc: 'Vashikaran is the sacred Vedic science of harmonizing electromagnetic thoughts and cosmic vibrations. Our Siddha Maha-Vashikaran uses sattvic and positive divine energies that gently incline the minds of stubborn partners, bosses, or family members in your favor without harmful side-effects.',
    benefits: [
      'Completely positive, safe, and karmically pure',
      'Customized to your specific birth chart and planetary dasha',
      'Overcomes severe resistance and stubborn behavioral blocks',
      'Performed with authentic Siddha Yantra & consecrated offerings'
    ],
    timeframe: 'Visible Shifts within 1 to 3 Days',
    mantraPreview: 'Om Namo Bhagavate Rudraya Sarva-Jagan-Mohanaya Swaha...',
    iconName: 'Wand2',
    imageUrl: serviceVashikaranHavan
  },
  {
    id: 'intercaste-love-marriage',
    title: 'Intercaste Love Marriage',
    category: 'marriage',
    badge: 'Parent Approval & Blessing Guidance',
    shortDesc: 'Convince reluctant strict parents, remove social hurdles, and cosmic blocks standing in the way of your marital union.',
    fullDesc: 'Love knows no caste, creed, or societal boundaries, but rigid families and societal pressures often block the path to holy matrimony. Baba Ji conducts specialized Brihaspati (Jupiter) & Shukra (Venus) Shanti Havans that pacify family anger and naturally open the hearts of parents to accept your marriage joyfully.',
    benefits: [
      'Transform parental disapproval into blessing and joy',
      'Dissolve social and cultural friction peacefully',
      'Clear planetary hurdles that delay marriage rituals',
      'Safeguard couple from societal gossip and family curses'
    ],
    timeframe: 'Parental consent typically within 3 to 5 Days',
    mantraPreview: 'Om Sham Shankaraya Sakala-Janmarjita-Paapa-Vidhvansanaya...',
    iconName: 'Ring',
    imageUrl: serviceLoveMarriage
  },
  {
    id: 'evil-eye-black-magic',
    title: 'Evil Eye & Black Magic Removal',
    category: 'protection',
    badge: 'Instant Protective Shield',
    shortDesc: 'Instantly identify and destroy curses, negative entities, jealous intentions, and long-standing ancestral bad luck chains.',
    fullDesc: 'Sudden financial collapse, chronic unexplained health deterioration, constant fighting at home, or heavy suffocating aura are typical signs of Buri Nazar (Evil Eye) or deliberate occult jealousy. Baba Ji invokes Maa Baglamukhi and Maha Bhairav Kavach to pulverize any negative magic and return it back to its source.',
    benefits: [
      'Comprehensive Aura and energy field cleansing',
      'Shatters occult bindings, curses, and evil eye gaze',
      'Permanent Mahakali Raksha Kavach protection talisman',
      'Restores vitality, sleep, mental peace, and family happiness'
    ],
    timeframe: 'Immediate Relief within 24 Hours',
    mantraPreview: 'Om Hleem Bagalamukhi Sarvadushtaanaam Vaacham Mukham Padam Stambhaya...',
    iconName: 'ShieldAlert',
    imageUrl: serviceBlackMagic
  },
  {
    id: 'business-career-growth',
    title: 'Business & Career Growth',
    category: 'career',
    badge: 'Kuber & Laxmi Siddhi',
    shortDesc: 'Clear unknown financial blocks, defeat corporate rival plots, attract premium opportunities, and unlock fast success.',
    fullDesc: 'Are your tenders getting rejected repeatedly? Is your hard-earned money draining into losses while less qualified rivals surge ahead? Our Kuber Dhanakarshan and Mercury (Budh) alignment puja clears bad debt, attracts affluent clients, and ensures unstoppable career promotions.',
    benefits: [
      'Break stagnation in business, sales, or job promotions',
      'Neutralize malicious competitors and envious colleagues',
      'Attract steady cash flow, recovery of stuck money and investments',
      'Activate auspicious Shubh Muhurta for new ventures'
    ],
    timeframe: 'Breakthrough opportunities in 7 Days',
    mantraPreview: 'Om Shreem Hreem Kleem Tribhuvana Mahalakshmyai Namah...',
    iconName: 'Briefcase',
    imageUrl: serviceBusinessGrowth
  },
  {
    id: 'husband-wife-disputes',
    title: 'Husband-Wife Disputes & Griha Klesh',
    category: 'marriage',
    badge: 'Marital Harmony',
    shortDesc: 'Eliminate toxic arguments, suspicious behavior, extra-marital affairs, and emotional detachment to restore sacred marital peace.',
    fullDesc: 'When daily bickering, interference from in-laws, or suspected infidelity poisons holy matrimony, traditional communication often fails. Baba Ji conducts powerful Gauri-Shankar Sammohan rituals that rekindle physical and emotional intimacy, removing toxicity forever.',
    benefits: [
      'End daily toxic arguments and misunderstandings immediately',
      'Sever partner connection with third parties or outside lovers',
      'Dissolve in-laws interference and restore domestic peace',
      'Reawaken genuine respect, mutual care, and romantic warmth'
    ],
    timeframe: 'Noticeable peace within 24 to 48 Hours',
    mantraPreview: 'Om Aim Kleem Souh Uma-Maheshwarabhyam Namah...',
    iconName: 'Users',
    imageUrl: serviceMaritalHarmony
  },
  {
    id: 'divorce-cancellation-solution',
    title: 'Divorce & Court Separation Remedy',
    category: 'marriage',
    badge: 'Emergency Crisis Help',
    shortDesc: 'Stop impending court divorce proceedings, dissolve stubborn legal friction, and pull your spouse back from the edge of separation.',
    fullDesc: 'If your partner has already served legal notices or filed for divorce under external manipulation, do not give up hope. Baba Ji performs urgent Manastambhan and Heart-Softening rituals that melt ego, provoke deep remorse in your partner, and inspire mutual reconciliation before court decrees.',
    benefits: [
      'Melt obstinate legal anger and withdraw court divorce petitions',
      'Expose malicious instigators counseling your spouse falsely',
      'Revive memories of sacred vows, marital love, and shared dreams',
      'Prevent devastating family fragmentation and child distress'
    ],
    timeframe: 'Urgent turnaround intervention in 3 to 7 Days',
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
  }
];

export const SACRED_PROCESS = [
  {
    step: '01',
    title: 'Confidential Energy Diagnosis',
    description: 'Share your birth details or your photo with Baba Ji via WhatsApp or Phone. Your identity is strictly confidential, sacred and protected.'
  },
  {
    step: '02',
    title: 'Planetary & Aura Root Cause Analysis',
    description: 'Baba Ji calculates the exact planetary afflictions, evil eye influences, or relationship energy blockages causing your distress.'
  },
  {
    step: '03',
    title: 'Sattvic Tantrik Havan & Vashikaran Siddhi',
    description: 'Under auspicious Shubh Muhurta, Baba Ji performs customized Vedic pujas and invokes pure divine cosmic frequencies.'
  },
  {
    step: '04',
    title: 'Sacred Anushthan & Protective Kavach',
    description: 'Experience visible reconciliation, mind change in your partner, or sudden relief within 24 to 72 hours with lifetime protection.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Rahul & Sneha',
    location: 'Mumbai, Maharashtra',
    problem: 'Lost Love & Partner Blocked for 8 Months',
    review: 'My girlfriend had blocked me everywhere for 8 months and her family was setting up her arranged marriage. I was devastated and couldn’t eat or sleep. Baba Ji performed an emergency Vashikaran Akarshan ritual on Tuesday night. By Thursday afternoon, she called me crying, asking for forgiveness and said she couldn’t live without me! We are now happily married. Baba Ji is a true divine messenger.',
    solutionTime: 'Solved in 44 Hours',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    category: 'love',
    flag: '🇮🇳'
  },
  {
    id: 't2',
    clientName: 'Priya & Gurpreet Singh',
    location: 'Brampton & Toronto, Canada',
    problem: 'Intercaste Marriage Objection & Visa Delay',
    review: 'Living in Canada, we faced massive opposition from both traditional families back in Punjab. They gave an ultimatum to sever all ties. We connected with Baba Ji over WhatsApp video call. He performed a special Brihaspati Shanti Havan at his Peeth using our photographs. Within 4 days, both parents softened, called us together on a group call, and gave their wholehearted blessings! Baba Ji made the impossible happen.',
    solutionTime: 'Solved in 4 Days',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    category: 'abroad',
    flag: '🇨🇦'
  },
  {
    id: 't3',
    clientName: 'Pooja Verma',
    location: 'Delhi NCR',
    problem: 'Husband Extra-Marital Affair & Divorce Notice',
    review: 'My husband had completely fallen under the spell of another woman at his office and hired a lawyer to divorce me after 7 years of marriage. Baba Ji identified the negative black magic done on him. Within 3 days of the Mahakali Puja and holy water remedy, his anger melted completely. He broke off all ties with the other woman and came home with folded hands. Thank you Naagmata Jyotish!',
    solutionTime: 'Solved in 3 Days',
    rating: 5,
    date: '1 month ago',
    verified: true,
    category: 'marriage',
    flag: '🇮🇳'
  },
  {
    id: 't4',
    clientName: 'Karan Patel',
    location: 'London, United Kingdom',
    problem: 'Ex-Fiancée Breakup & Third-Party Interference',
    review: 'My fiancée suddenly broke our 4-year engagement in London without any clear reason and refused to answer calls. I was in deep agony. A friend in Wembley recommended Baba Ji. He conducted distance Kamakhya Akarshan on a full moon night. On the third day, she unblocked me, drove over to my place, and confessed that third-party rumors had poisoned her mind. We are reunited and planning our wedding this winter.',
    solutionTime: 'Solved in 72 Hours',
    rating: 5,
    date: 'Last month',
    verified: true,
    category: 'abroad',
    flag: '🇬🇧'
  },
  {
    id: 't5',
    clientName: 'Simran & David K.',
    location: 'New York & New Jersey, USA',
    problem: 'Severe Marital Separation & Impending Court Case',
    review: 'My marriage was heading straight for a contested divorce in New York courts. The anger and toxicity between us was extreme. Baba Ji provided continuous telephonic guidance, energized a Raksha Kavach, and performed Gauri-Shankar Sammohan rituals. Astonishingly, my husband withdrew his legal petition and asked to rebuild our home together. Baba Ji saved my family and my children’s future.',
    solutionTime: 'Solved in 6 Days',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    category: 'abroad',
    flag: '🇺🇸'
  },
  {
    id: 't6',
    clientName: 'Aditya Mehta',
    location: 'Melbourne, Australia',
    problem: 'One-Sided Love Attraction & Delayed Marriage',
    review: 'I had been in love with someone for over two years but she only considered me a casual friend and was entertaining proposals from other men. Baba Ji gave me a personal consecrated mantra and performed distance Shukra Anushthan. Within a week, her perspective toward me changed dramatically—she began calling me daily and confessed her deep feelings! We are now officially engaged.',
    solutionTime: 'Solved in 5 Days',
    rating: 5,
    date: '1 month ago',
    verified: true,
    category: 'love',
    flag: '🇦🇺'
  },
  {
    id: 't7',
    clientName: 'Ananya Roy',
    location: 'Kolkata, West Bengal',
    problem: 'Severe Jealousy, Night Terrors & Buri Nazar',
    review: 'I had not slept properly for 6 months due to heavy weight on my chest, nightmares, and failing health despite all medical tests showing normal. Baba Ji gave me a personalized protection mantra and did Bhairav Shanti. From the very first night, the darkness vanished and I felt pure light and calmness. His powers are real and benevolent.',
    solutionTime: 'Immediate Relief in 24 Hours',
    rating: 5,
    date: 'Just recently',
    verified: true,
    category: 'protection',
    flag: '🇮🇳'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly will I see results for my love or marriage problem?',
    answer: 'Most authentic Vedic Vashikaran and energy alignment rituals start exhibiting powerful effects within 24 to 72 hours. Depending on the karmic depth of planetary afflictions and external interference, Baba Ji provides an exact personalized timeline upon reviewing your birth chart or photo.',
    category: 'Timing'
  },
  {
    id: 'faq-2',
    question: 'Is your Vashikaran safe? Will it have negative karma or backfire?',
    answer: 'Yes, completely safe. Baba Ji practices exclusively pure Sattvic and Vedic Tantra. We do not use dark destructive sorcery. Our methods work by elevating love, melting anger, resolving planetary friction, and removing evil blockages. There are zero negative side-effects for you or your loved ones.',
    category: 'Safety'
  },
  {
    id: 'faq-3',
    question: 'Can consultations and rituals be done online if I live in another city or abroad?',
    answer: 'Absolutely. Over 40% of Baba Ji’s devotees consult from USA, UK, Canada, UAE, Australia, and all across India. Cosmic spiritual energies and Vedic mantras transcend physical distance. You can connect directly via WhatsApp audio/video call or phone, and sacred prasad/yantras can be consecrated in your name.',
    category: 'Consultation'
  },
  {
    id: 'faq-4',
    question: 'Will my consultation and personal problem remain confidential?',
    answer: 'We ensure strictly confidential privacy. Your name, phone number, partner details, photos, and life situation will never be disclosed to anyone. Everything is held sacred under strict spiritual confidentiality oaths.',
    category: 'Privacy'
  },
  {
    id: 'faq-5',
    question: 'What details do I need to provide to Baba Ji for diagnosis?',
    answer: 'Ideally, your Name, Date of Birth, Place of Birth, and approximate Time of Birth. If exact birth time is not available, your recent photograph and your mother’s name are sufficient for Baba Ji to perform accurate Vedic Prashna and Aura energy scanning.',
    category: 'Details'
  },
  {
    id: 'faq-6',
    question: 'Can Baba Ji help stop an imminent divorce or separation?',
    answer: 'Yes. Even if legal paperwork has already begun or court dates are scheduled, Baba Ji’s special Gauri-Shankar & Manastambhan remedies calm hostile minds, dispel third-party poison, and induce genuine empathy in your spouse to withdraw separation cases.',
    category: 'Divorce'
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
