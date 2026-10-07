import React, { useState } from 'react';
import { Search, MapPin, Globe2, Sparkles, CheckCircle2, Phone, Building2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/jyotishData';
import { useLanguage } from '../context/LanguageContext';

interface KeywordGroup {
  category: string;
  badge: string;
  icon: string;
  keywords: string[];
}

const LOCAL_GUJARAT_KEYWORDS: KeywordGroup[] = [
  {
    category: 'गुप्त धन, गड़ा धन व अकस्मात धन प्राप्ति सिद्धि (Gupt Dhan, Gada Dhan & Hidden Wealth Sadhana)',
    badge: '💰 High-Rank Naagmata Sadhana',
    icon: '🪙',
    keywords: [
      'गुप्त धन पाने के अचूक ज्योतिष उपाय',
      'जमीन में गड़ा धन निकालने के टोटके और मंत्र',
      'गड़ा धन का पता कैसे लगाएं ज्योतिषीय विधि',
      'सपने में गड़ा धन दिखने का क्या मतलब होता है',
      'गड़े धन पर नाग का पहरा हटाने के उपाय',
      'नाग रक्षक दोष निवारण वैदिक मंत्र साधना',
      'पाताल लोक गुप्त धन साधना उज्जैन',
      'जमीन के नीचे दबा खजाना कैसे निकालें',
      'पूर्वजों का गड़ा धन प्राप्त करने के उपाय',
      'अकस्मात धन वर्षा व कुबेर सिद्धि अनुष्ठान',
      'गड़े धन के संकेत और लक्षण परीक्षण',
      'पैतृक गुप्त धन व खजाना सिद्धि विधान',
      'Gupt dhan pane ke achuk upay',
      'Zameen me gada dhan kaise nikale mantra',
      'Gada dhan nikalne ka totka aur shanti vidhi',
      'Gade dhan par naag ka pehra hatane ke upay',
      'Naag rakshak dosha nivaran anushthan',
      'Buried treasure vedic astrology remedy india',
      'Ancestral hidden wealth recovery astrology',
      'Patal dhan rakshak siddhi naagmata peeth',
      'ગુપ્ત ધન મેળવવાના શાસ્ત્રોક્ત ઉપાય',
      'જમીનમાં ગડેલું ધન શોધવાની જ્યોતિષ રીત',
      'ગડેલા ધન પર સાપનો પહેરો હટાવવાના ઉપાય',
      'સપનામાં ગડેલું ધન કે નાગ દેખાવાના સંકેત',
      'નાગદેવી ગુપ્ત ધન અને કુબેર સિદ્ધિ અનુષ્ઠાન'
    ]
  },
  {
    category: 'पति का पर-स्त्री मोह, सौतन बाधा एवं गुप्त आकर्षण निवारण (Husband Affair & Sautan Badha Relief)',
    badge: 'High-Rank Vedic Remedy',
    icon: '🔒',
    keywords: [
      'पति को पर स्त्री से दूर करने के अचूक उपाय',
      'पति का पराई औरत से चक्कर छुड़ाने के टोटके',
      'सौतन से छुटकारा पाने के ज्योतिष उपाय',
      'पति को दूसरी औरत के चंगुल से कैसे छुड़ाएं',
      'पति पराई स्त्री के वश में हो तो क्या करें',
      'सौतन बाधा निवारण वैदिक अनुष्ठान उज्जैन',
      'पति का पर-स्त्री मोह कैसे खत्म करें',
      'Pati ko par stri se dur karne ke upay',
      'Sautan se chutkara pane ke totke',
      'Husband extramarital affair astrology remedy',
      'Stop husband affair with another woman vedic remedy',
      'Pati ka dusri aurat se chakkar chhudana',
      'Kamakhya Shukra Shanti for husband fidelity',
      'પતિને પર સ્ત્રીથી દૂર કરવાના ઉપાય',
      'પતિનો બીજી સ્ત્રી સાથે સંબંધ તોડવાના ઉપાય',
      'સોતનથી કાયમી છુટકારો મેળવવાના જ્યોતિષ ઉપાય'
    ]
  },
  {
    category: 'संतान सद्बुद्धि, आज्ञाकारिता एवं गलत संगति निवारण (Child Guidance & Mental Peace)',
    badge: 'Santan Sanskar Anushthan',
    icon: '✨',
    keywords: [
      'संतान की सद्बुद्धि के वैदिक ज्योतिष उपाय',
      'बच्चा बात न माने तो क्या उपाय करें',
      'जिद्दी और हठी बच्चे को आज्ञाकारी बनाने के उपाय',
      'संतान की गलत संगति छुड़ाने के अचूक टोटके',
      'बच्चों की मोबाइल व गेम की लत छुड़ाने के उपाय',
      'संतान का मन पढ़ाई में एकाग्र करने के उपाय',
      'पंचम भाव राहु शांति संतान दोष निवारण',
      'Santan sadbuddhi vedic anushthan',
      'Child obedience astrology remedies',
      'Remedies for disobedient child vedic astrology',
      'Child bad company and mobile addiction remedy',
      '5th house Rahu Budh dosha shanti for children',
      'સરસ્વતી સદ્બુદ્ધિ મંત્ર સંતાન માટે',
      'સંતાનની ખોટી સંગત છોડાવવાના જ્યોતિષ ઉપાય',
      'હઠીલા બાળકને શાંત અને આજ્ઞાકારી બનાવવાના ઉપાય'
    ]
  },
  {
    category: 'दांपत्य सुख, कामदेव-रति एवं आपसी आकर्षण (Marital Bliss & Spousal Attraction)',
    badge: 'Specialized Vedic Anushthan',
    icon: '💖',
    keywords: [
      'दांपत्य सुख एवं प्रेम वृद्धि अनुष्ठान',
      'पति-पत्नी में आपसी प्रेम व आकर्षण के ज्योतिष उपाय',
      'कामदेव-रति वैदिक मंत्र साधना ज्योतिषी',
      'शुक्र ग्रह शांति दांपत्य कलह निवारण',
      'Pati Patni Apsi Prem Akarshan Jyotish',
      'Dampatya Sukh Vridhi Anushthan Ujjain',
      'Kamadev Rati Vedic Mantra Sadhana Astrologer',
      'Husband Wife Relationship Attraction Healing',
      'Shukra Shanti for Marital Romance & Harmony',
      'દાંપત્ય સુખ અને પ્રેમ વૃદ્ધિ કામદેવ રતિ સાધના',
      'પતિ પત્ની આકર્ષણ અને પ્રેમ વધારવાના ઉપાય',
      'Pati Patni Kankas Door Karne Ke Vedic Upay'
    ]
  },
  {
    category: 'पति की दारू/नशा मुक्ति एवं राहु शांति (Husband Addiction Relief)',
    badge: 'Vyasan Mukti Anushthan',
    icon: '🛡️',
    keywords: [
      'पति की दारू छुड़ाने के वैदिक ज्योतिष उपाय',
      'पति का नशा छुड़ाने के सात्विक उपाय व टोटके',
      'व्यसन मुक्ति एवं राहु ग्रह शांति अनुष्ठान',
      'Pati ki daru chhudane ke upay jyotish',
      'Husband alcohol addiction astrology remedies',
      'Pati ka nasha chhudane ke tarike',
      'Rahu Shanti for alcohol addiction & bad habits',
      'પતિની દારૂ છોડાવવાના જ્યોતિષ ઉપાય',
      'પતિની વ્યસન મુક્તિ માટે રાહુ શાંતિ હવન',
      'Pati ki buri sangat aur nasha door karne ke upay',
      'Daru nasha mukti anushthan Ujjain',
      'Vedic remedies to stop husband drinking alcohol'
    ]
  },
  {
    category: 'Ahmedabad (અમદાવાદ)',
    badge: 'Mega City Hub',
    icon: '📍',
    keywords: [
      'Love Problem Specialist in Ahmedabad',
      'Best Astrologer in Ahmedabad Satellite Bopal',
      'Famous Jyotish in SG Highway Prahladnagar',
      'Love Marriage Specialist Maninagar Naroda',
      'Husband Wife Dispute Solution Ahmedabad',
      'Pati Patni Kankas Nivaran Ahmedabad Chandkheda',
      'Intercaste Marriage Specialist Vastrapur Nikol',
      'Top Astrologer in Navrangpura Ashram Road',
      'Kundali Matching Astrologer in Gota Ahmedabad',
      'અમદાવાદ લવ પ્રોબ્લેમ સોલ્યુશન જ્યોતિષી'
    ]
  },
  {
    category: 'Surat (સુરત)',
    badge: 'Diamond & Textile City',
    icon: '📍',
    keywords: [
      'Best Astrologer in Surat Varachha',
      'Love Problem Solution Surat Katargam',
      'Famous Jyotish in Adajan Vesu Surat',
      'Love Marriage Specialist Ghod Dod Road Piplod',
      'Husband Wife Dispute Astrologer Surat Pal',
      'Intercaste Marriage Problem Solution Surat',
      'Diamond Merchant Vyapar Vriddhi Jyotish Surat',
      'Negative Energy Cleansing Astrologer Surat',
      'Rahu Ketu Dosha Nivaran Surat Ring Road',
      'સુરત પ્રખ્યાત પ્રેમ લગ્ન વિશેષજ્ઞ જ્યોતિષ કાર્યાલય'
    ]
  },
  {
    category: 'Vadodara (વડોદરા)',
    badge: 'Cultural Capital',
    icon: '📍',
    keywords: [
      'Love Problem Specialist Vadodara Alkapuri',
      'Best Astrologer in Vadodara Manjalpur',
      'Love Marriage Specialist Karelibaug Gotri',
      'Husband Wife Dispute Solution Vadodara Fatehgunj',
      'Pati Patni Kankas Nivaran Vadodara Akota',
      'Intercaste Marriage Family Consent Vadodara',
      'Top Jyotish Karyalay Vadodara Subhanpura',
      'Vedic Kundali Dosha Shanti Vadodara Waghodia',
      'વડોદરા પ્રેમ લગ્ન અને કુંડળી સમાધાન વિશેષજ્ઞ'
    ]
  },
  {
    category: 'Rajkot & Saurashtra (રાજકોટ અને સૌરાષ્ટ્ર)',
    badge: 'Saurashtra Central',
    icon: '📍',
    keywords: [
      'Best Astrologer in Rajkot Kalawad Road',
      'Love Problem Specialist Rajkot Yagnik Road',
      'Pati Patni Kankas Nivaran Rajkot University Road',
      'Love Marriage Specialist Rajkot Mavdi 150ft Ring Road',
      'Family Dispute Solution Astrologer Rajkot',
      'Famous Jyotish in Bhavnagar Jamnagar Junagadh',
      'Astrologer in Morbi Surendranagar Porbandar',
      'Saurashtra NRI Family Vedic Astrologer Rajkot',
      'રાજકોટ પતિ પત્ની કંકાસ નિવારણ અને લવ પ્રોબ્લેમ જ્યોતિષ'
    ]
  },
  {
    category: 'Gandhinagar & North Gujarat (ગાંધીનગર અને ઉત્તર ગુજરાત)',
    badge: 'Capital & Heritage Belt',
    icon: '📍',
    keywords: [
      'Best Astrologer in Gandhinagar Infocity Kudasan',
      'Love Marriage Specialist Gandhinagar Raysan Sargasan',
      'Astrologer in Gandhinagar Sector Hubs & Gift City',
      'Famous Jyotish in Mehsana Patan Palanpur',
      'Love Problem Solution Visnagar Unjha Kadi',
      'Intercaste Marriage Specialist North Gujarat',
      'Business Growth & Government Job Jyotish Gandhinagar',
      'ગાંધીનગર અને ઉત્તર ગુજરાત લવ પ્રોબ્લેમ જ્યોતિષી'
    ]
  },
  {
    category: 'Anand, Nadiad & Charotar (આણંદ, નડિયાદ અને ચરોતર)',
    badge: 'NRI Charotar Belt',
    icon: '📍',
    keywords: [
      'Charotar Gujarati NRI Astrologer Anand Nadiad',
      'Love Problem Specialist in Anand Vidyanagar',
      'Love Marriage Specialist Nadiad Petlad Borsad',
      'Best Astrologer for USA UK NRI Families in Anand',
      'Pati Patni Dispute Solution Charotar Gujarat',
      'Intercaste Marriage Family Consent Anand',
      'ચરોતર આણંદ નડિયાદ એનઆરઆઈ ફેમિલી જ્યોતિષી'
    ]
  },
  {
    category: 'Bhuj, Gandhidham, Anjar & Kutch (કચ્છ, ભુજ, ગાંધીધામ અને માંડવી)',
    badge: 'Border & Coastal Belt',
    icon: '📍',
    keywords: [
      'Best Astrologer in Bhuj Gandhidham Kutch',
      'Love Problem Specialist Anjar Mandvi Mundra Kutch',
      'Kutchi Gujarati Family Astrologer Bhuj Madhapar',
      'Husband Wife Dispute Solution Gandhidham Kutch',
      'Intercaste Marriage Specialist Bhuj Anjar',
      'કચ્છ ભુજ ગાંધીધામ અંજાર જ્યોતિષ કાર્યાલય'
    ]
  },
  {
    category: 'Bhavnagar, Jamnagar & Junagadh (ભાવનગર, જામનગર અને જૂનાગઢ)',
    badge: 'Saurashtra Coast & Heritage',
    icon: '📍',
    keywords: [
      'Best Astrologer in Bhavnagar Waghawadi Road',
      'Love Problem Specialist Jamnagar Digjam Valkeshwari',
      'Famous Jyotish in Junagadh Girnar Darshan',
      'Pati Patni Kankas Nivaran Bhavnagar Ghogha Circle',
      'Love Marriage Specialist Jamnagar Bedi Bandar',
      'ભાવનગર જામનગર જૂનાગઢ પ્રેમ લગ્ન જ્યોતિષી'
    ]
  },
  {
    category: 'Morbi, Surendranagar & Porbandar (મોરબી, સુરેન્દ્રનગર અને પોરબંદર)',
    badge: 'Ceramic & Industrial Hub',
    icon: '📍',
    keywords: [
      'Best Astrologer in Morbi Ceramic Hub Trajpar',
      'Vyapar Vriddhi Astrologer Morbi Wankaner',
      'Love Problem Specialist Surendranagar Wadhwan',
      'Famous Jyotish in Porbandar Dhoraji Upleta',
      'Husband Wife Dispute Solution Morbi',
      'મોરબી સુરેન્દ્રનગર પોરબંદર વેપાર વૃદ્ધિ જ્યોતિષ'
    ]
  },
  {
    category: 'Bharuch, Ankleshwar, Navsari, Valsad & Vapi (દક્ષિણ ગુજરાત ઔદ્યોગિક પટ્ટો)',
    badge: 'South Gujarat Industrial Belt',
    icon: '📍',
    keywords: [
      'Famous Astrologer in Bharuch Ankleshwar GIDC',
      'Love Marriage Specialist Navsari Lunsikui',
      'Best Astrologer in Valsad Tithal Road Dharampur',
      'Industrial Business Obstacle Astrology Vapi Daman Silvassa',
      'Love Problem Specialist Vapi GIDC Gunjan',
      'દક્ષિણ ગુજરાત ભરૂચ અંકલેશ્વર વાપી વલસાડ જ્યોતિષ કાર્યાલય'
    ]
  },
  {
    category: 'खोया प्यार वापस पाने एवं मनचाहा प्रेम विवाह (Ex Love Back & Love Marriage Specialist)',
    badge: '❤️ #1 Most Searched Query',
    icon: '🔮',
    keywords: [
      'खोया प्यार वापस पाने के अचूक ज्योतिष उपाय',
      'रूठे प्रेमी या प्रेमिका को मनाने के टोटके',
      'ब्रेकअप के बाद प्यार को वापस कैसे पाएं',
      'मनचाहा प्रेम विवाह और माता-पिता को मनाने के उपाय',
      'इंटरकास्ट लव मैरिज समस्या समाधान उज्जैन',
      'एकतरफा प्यार को पाने के शास्त्रोक्त उपाय',
      'Khoya pyar wapas pane ke upay jyotish',
      'Ruthe premi ko manane ka mantra totka',
      'Breakup ke baad pyar wapas pane ke tarike',
      'Manchaha prem vivah jyotish samadhan',
      'Love marriage convince parents vedic astrology',
      'Intercaste love marriage specialist astrologer india',
      'Ex love back specialist astrologer ujjain',
      'Get lost love back by authentic astrology',
      'ખોવાયેલો પ્રેમ પાછો મેળવવાના જ્યોતિષ ઉપાય',
      'પ્રેમ લગ્ન માટે માતા પિતાને મનાવવાના ઉપાય'
    ]
  },
  {
    category: 'तलाक रुकवाने, शादी टूटने से बचाने एवं गृह क्लेश मुक्ति (Divorce Cancellation & Save Marriage)',
    badge: '⚖️ Relationship Protection',
    icon: '🕊️',
    keywords: [
      'तलाक रुकवाने के चमत्कारी ज्योतिष उपाय',
      'शादी टूटने से कैसे बचाएं अचूक टोटके',
      'कोर्ट कचहरी तलाक केस रद्द कराने के उपाय',
      'पति पत्नी के झगड़े और कलह दूर करने के उपाय',
      'ससुराल में मान-सम्मान पाने के उपाय',
      'Talak rukwane ke achuk jyotish upay',
      'Shadi tutne se bachane ke tarike',
      'Save marriage from divorce astrology remedies',
      'Divorce cancellation vedic puja ujjain',
      'Pati patni klesh nivaran anushthan',
      'Court case divorce settlement astrology',
      'છૂટાછેડા અટકાવવાના અને લગ્ન બચાવવાના ઉપાય',
      'સાસરીમાં માન સન્માન મેળવવાના જ્યોતિષ ઉપાય'
    ]
  },
  {
    category: 'व्यापार वृद्धि, कर्ज मुक्ति एवं लक्ष्मी-कुबेर अनुष्ठान (Business Growth & Debt Relief)',
    badge: '💰 Vyapar & Laxmi Sadhana',
    icon: '📈',
    keywords: [
      'दुकान और व्यापार में बिक्री बढ़ाने के उपाय',
      'व्यापार में लगातार घाटा दूर करने के टोटके',
      'कर्ज से मुक्ति पाने के अचूक लाल किताब उपाय',
      'अटका हुआ धन वापस पाने के ज्योतिष उपाय',
      'लक्ष्मी कुबेर महायज्ञ व्यापार वृद्धि अनुष्ठान',
      'Dukan me grahak badhane ke upay totke',
      'Vyapar me munafa badhane ke tarike',
      'Karz mukti ke achuk jyotish upay',
      'Duba hua dhan wapas pane ke mantra',
      'Business obstacle removal astrology remedy',
      'Debt relief astrological consultation ujjain',
      'Kuber Laxmi puja for financial breakthrough',
      'વેપાર ધંધામાં પ્રગતિ અને દેવા મુક્તિના ઉપાય'
    ]
  },
  {
    category: 'काला जादू काट, नजर दोष एवं ऊपरी बाधा निवारण (Black Magic Removal & Evil Eye Cleansing)',
    badge: '🛡️ Maha Raksha Kavach',
    icon: '🔥',
    keywords: [
      'काला जादू और तंत्र मंत्र हटाने के उपाय',
      'घर से बुरी नजर और नकारात्मक ऊर्जा दूर करने के टोटके',
      'ऊपरी हवा और प्रेत बाधा निवारण अनुष्ठान',
      'व्यापार और घर को नजर दोष से बचाने के उपाय',
      'माँ नागदेवी सिद्ध रक्षा ताबीज एवं कवच',
      'Kala jadu hatane ke upay totke',
      'Buri nazar dosha nivaran ujjain puja',
      'Ghar se negative energy door karne ke tarike',
      'Remove black magic symptoms and remedies',
      'Evil eye protection vedic rituals india',
      'Tantrik badha nivaran maa naagdevi peeth',
      'મેલી વિદ્યા અને નજર દોષ દૂર કરવાના ઉપાય'
    ]
  },
  {
    category: 'कालसर्प दोष, मांगलिक दोष एवं पितृ दोष शांति (Kaal Sarp & Kundali Dosha Shanti Ujjain)',
    badge: '🕉️ Mahakal Marg Ujjain',
    icon: '🐍',
    keywords: [
      'कालसर्प दोष निवारण पूजा उज्जैन महाकाल',
      'मांगलिक दोष दूर करने के सरल उपाय',
      'पितृ दोष के लक्षण और शांति पूजा विधान',
      'शनि साढ़े साती एवं ढैय्या शांति अनुष्ठान',
      'राहु केतु महादशा शांति वैदिक मंत्र',
      'Kaal sarp dosha nivaran puja ujjain',
      'Manglik dosha shanti vivah anushthan',
      'Pitra dosha nivaran remedies ujjain',
      'Shani sade sati dosha shanti havan',
      'Rahu Ketu graha shanti puja ujjain',
      'કાલસર્પ દોષ અને માંગલિક દોષ શાંતિ પૂજા'
    ]
  },
  {
    category: 'शीघ्र विवाह, शादी में देरी एवं मनचाहा जीवनसाथी (Early Marriage & Vivah Badha Nivaran)',
    badge: '💍 Top Trending Query',
    icon: '🌸',
    keywords: [
      'शीघ्र विवाह के अचूक वैदिक ज्योतिष उपाय',
      'शादी में देरी और अड़चनें दूर करने के उपाय',
      'मनचाहा जीवनसाथी पाने के सरल उपाय',
      'कुंडली में विवाह योग बनाने के ज्योतिषीय उपाय',
      'गुरु और शुक्र ग्रह शांति शीघ्र विवाह महायज्ञ',
      'Shighra vivah ke achuk jyotish upay',
      'Late marriage remedies vedic astrology',
      'Manchaha jeevansathi pane ke totke',
      'Vivah badha nivaran puja ujjain',
      'Shukra Brihaspati shanti for marriage delay',
      'ઝડપી લગ્ન માટેના અચૂક જ્યોતિષી ઉપાય',
      'લગ્નમાં વિલંબ અને અડચણ દૂર કરવાના ઉપાય'
    ]
  },
  {
    category: 'सरकारी नौकरी, करियर प्रमोशन एवं कोर्ट केस विजय (Career Growth, Govt Job & Legal Victory)',
    badge: '🏛️ Career & Success Hub',
    icon: '⚡',
    keywords: [
      'सरकारी नौकरी पाने के अचूक ज्योतिष उपाय',
      'नौकरी में मनचाहा प्रमोशन और ट्रांसफर के टोटके',
      'कोर्ट कचहरी और मुकदमों में जीत के वैदिक उपाय',
      'इंटरव्यू और प्रतियोगी परीक्षा में सफलता के उपाय',
      'सूर्य ग्रह शांति मान-सम्मान एवं सरकारी पद प्राप्ति',
      'Sarkari naukri pane ke jyotish upay',
      'Job promotion astrology remedies india',
      'Court case dispute victory vedic remedies',
      'Surya graha shanti rajyog anushthan',
      'સરકારી નોકરી મેળવવાના જ્યોતિષ ઉપાય',
      'કોર્ટ કેસમાં વિજય મેળવવાના શાસ્ત્રોક્ત ઉપાય'
    ]
  },
  {
    category: 'Mumbai, Thane & Navi Mumbai (मुंबई, ठाणे व नवी मुंबई)',
    badge: 'Maharashtra Mega Hub',
    icon: '🏙️',
    keywords: [
      'Best Astrologer in Mumbai Andheri Bandra Borivali',
      'Love Problem Specialist in Mumbai South Mumbai Dadar',
      'Famous Jyotish in Thane Ghodbunder Road Dombivli',
      'Love Marriage Specialist Navi Mumbai Vashi Kharghar',
      'Husband Wife Dispute Solution Mumbai Kurla Ghatkopar',
      'Intercaste Marriage Specialist Mumbai Malad Kandivali',
      'Business Growth & Corporate Astrologer Mumbai BKC',
      'Kala Jadu & Black Magic Removal Astrologer Mumbai',
      'Best Vedic Astrologer in Chembur Powai Mulund',
      'मुंबई प्रसिद्ध लव प्रॉब्लम एवं वैवाहिक ज्योतिषी'
    ]
  },
  {
    category: 'Delhi NCR: New Delhi, Gurugram & Noida (दिल्ली एनसीआर)',
    badge: 'National Capital Region',
    icon: '🏛️',
    keywords: [
      'Best Astrologer in Delhi NCR Connaught Place',
      'Love Problem Specialist South Delhi Hauz Khas Saket',
      'Famous Jyotish in Rohini Pitampura Janakpuri West Delhi',
      'Love Marriage Specialist Gurugram Gurgaon Cyber City DLF',
      'Best Astrologer in Noida Sector 18 Greater Noida',
      'Intercaste Love Marriage Solution Delhi Dwarka',
      'Husband Wife Dispute Solution Faridabad Ghaziabad',
      'Kundali Matching Astrologer East Delhi Laxmi Nagar',
      'Court Case & Government Job Astrologer New Delhi',
      'दिल्ली एनसीआर प्रसिद्ध प्रेम विवाह एवं कुंडली समाधान'
    ]
  },
  {
    category: 'Jaipur, Jodhpur & Rajasthan (जयपुर, जोधपुर व राजस्थान)',
    badge: 'Heritage & Marwar Hub',
    icon: '🏰',
    keywords: [
      'Best Astrologer in Jaipur Mansarovar Vaishali Nagar',
      'Famous Jyotish in Jaipur Malviya Nagar Raja Park',
      'Love Problem Specialist Jodhpur Sardarpura Ratanada',
      'Love Marriage Specialist Udaipur Panchwati Hiran Magri',
      'Famous Astrologer in Kota Gumanpura Talwandi',
      'Best Astrologer in Ajmer Bikaner Bhilwara Alwar',
      'Husband Wife Kalesh Nivaran Rajasthan',
      'Ancestral Wealth & Gupt Dhan Astrologer Rajasthan',
      'Manglik & Kaal Sarp Dosha Puja Specialist Jaipur',
      'जयपुर जोधपुर राजस्थान प्रसिद्ध वैदिक ज्योतिषी'
    ]
  },
  {
    category: 'Indore, Ujjain (Mahakal) & Madhya Pradesh (इंदौर, उज्जैन व मध्य प्रदेश)',
    badge: 'Mahakal Sacred Peeth',
    icon: '🕉️',
    keywords: [
      'Best Astrologer in Indore Vijay Nagar Palasia',
      'Famous Jyotish in Indore Annapurna Sapna Sangeeta',
      'Ujjain Mahakal Jyotish Karyalay Kaal Sarp Puja',
      'Maa Naagdevi Siddha Peeth Mahakal Marg Ujjain',
      'Love Problem Specialist Bhopal Arera Colony MP Nagar',
      'Famous Astrologer in Gwalior Lashkar Morar',
      'Best Astrologer in Jabalpur Civil Lines Wright Town',
      'Dewas Ratlam Mandsaur Vedic Astrologer',
      'Pitra Dosh & Manglik Dosh Nivaran Ujjain',
      'उज्जैन महाकाल मार्ग प्रसिद्ध वैदिक ज्योतिषी इंदौर'
    ]
  },
  {
    category: 'Pune, Pimpri, Nashik & Nagpur (पुणे, नाशिक व नागपुर)',
    badge: 'Western Maharashtra Hub',
    icon: '📍',
    keywords: [
      'Best Astrologer in Pune Kothrud Shivaji Nagar',
      'Love Problem Specialist Pune Wakad Hinjewadi Baner',
      'Famous Jyotish in Pune Hadapsar Magarpatta Viman Nagar',
      'Love Marriage Specialist Pimpri Chinchwad PCMC',
      'Famous Astrologer in Nashik College Road Panchavati',
      'Best Astrologer in Nagpur Sitabuldi Dharampeth Ramdaspeth',
      'Husband Wife Dispute Astrologer Kolhapur Solapur',
      'IT Professional Stress & Relationship Astrology Pune',
      'पुणे नाशिक नागपुर प्रसिद्ध प्रेम विवाह ज्योतिषी'
    ]
  },
  {
    category: 'Lucknow, Kanpur, Varanasi (Kashi) & UP (लखनऊ, कानपुर, काशी-वाराणसी व यूपी)',
    badge: 'Uttar Pradesh Central & Kashi',
    icon: '🪔',
    keywords: [
      'Best Astrologer in Lucknow Gomti Nagar Hazratganj',
      'Famous Jyotish in Lucknow Alambagh Indira Nagar',
      'Best Astrologer in Kanpur Swaroop Nagar Kakadeo',
      'Love Problem Specialist Varanasi Kashi Assi Ghat Lanka',
      'Famous Astrologer in Prayagraj Allahabad Civil Lines',
      'Best Astrologer in Agra Sanjay Place Mathura Road',
      'Astrologer in Meerut Bareilly Gorakhpur Aligarh',
      'Sarkari Naukri & Vivah Badha Nivaran UP',
      'लखनऊ कानपुर वाराणसी काशी प्रसिद्ध वैदिक ज्योतिषी'
    ]
  },
  {
    category: 'Chandigarh, Ludhiana, Amritsar & Punjab (चंडीगढ़, लुधियाना व पंजाब)',
    badge: 'Punjab & Haryana Hub',
    icon: '🌾',
    keywords: [
      'Best Astrologer in Chandigarh Sector 17 Sector 35',
      'Love Problem Specialist Mohali Phase 7 Panchkula',
      'Famous Astrologer in Ludhiana Model Town Civil Lines',
      'Best Astrologer in Amritsar Lawrence Road Ranjit Avenue',
      'Famous Jyotish in Jalandhar Model Town Cantt',
      'Astrologer in Panipat Karnal Ambala Sonipat',
      'NRI Punjab Marriage & Canada PR Delay Astrology',
      'चंडीगढ़ लुधियाना अमृतसर प्रसिद्ध ज्योतिषी'
    ]
  },
  {
    category: 'Patna, Gaya, Muzaffarpur & Bihar (पटना, गया व बिहार)',
    badge: 'Bihar & Purvanchal',
    icon: '📍',
    keywords: [
      'Best Astrologer in Patna Boring Road Kankarbagh',
      'Famous Jyotish in Patna Bailey Road Fraser Road',
      'Love Problem Specialist Gaya Bodh Gaya Civil Lines',
      'Best Astrologer in Muzaffarpur Bhagalpur Darbhanga',
      'Pitra Dosh Gaya Shradh Special Astrologer',
      'Shighra Vivah & Sarkari Naukri Jyotish Bihar',
      'पटना गया मुजफ्फरपुर प्रसिद्ध वैदिक ज्योतिषी'
    ]
  },
  {
    category: 'Bengaluru, Mysuru & Karnataka (बेंगलुरु व कर्नाटक)',
    badge: 'Karnataka Tech Belt',
    icon: '🌆',
    keywords: [
      'Best Indian Astrologer in Bengaluru Indiranagar',
      'Love Problem Specialist Bangalore Koramangala HSR Layout',
      'Famous Astrologer in Whitefield Electronic City Bangalore',
      'Top Vedic Astrologer Jayanagar JP Nagar Bangalore',
      'Famous Astrologer in Mysuru Saraswathipuram Gokulam',
      'Husband Wife Dispute Astrologer Bangalore Hubli',
      'IT Couple Relationship Discord Astrology Bengaluru',
      'बेंगलोर कर्नाटक प्रसिद्ध भारतीय ज्योतिषी'
    ]
  },
  {
    category: 'Hyderabad & Secunderabad (हैदराबाद व तेलंगाना)',
    badge: 'Telangana & Deccan Hub',
    icon: '📍',
    keywords: [
      'Best Indian Astrologer in Hyderabad Banjara Hills',
      'Love Problem Specialist Hyderabad Jubilee Hills Madhapur',
      'Famous Astrologer in Hitec City Gachibowli Kondapur',
      'Top Vedic Jyotish in Secunderabad Begumpet Marredpally',
      'Husband Wife Dispute Astrologer Kukatpally Hyderabad',
      'Intercaste Marriage Astrology Specialist Hyderabad',
      'हैदराबाद सिकंदराबाद प्रसिद्ध वैदिक ज्योतिषी'
    ]
  },
  {
    category: 'Kolkata, Howrah & West Bengal (कोलकाता व पश्चिम बंगाल)',
    badge: 'Eastern India Cultural Hub',
    icon: '📍',
    keywords: [
      'Best Astrologer in Kolkata Salt Lake Sector 5',
      'Famous Jyotish in Kolkata Park Street Ballygunge',
      'Love Problem Specialist South Kolkata Gariahat Jadavpur',
      'Best Astrologer in North Kolkata Shyambazar Dum Dum',
      'Famous Astrologer in Howrah Shibpur Salkia',
      'Tantrik Badha & Nazar Dosh Astrologer Kolkata Siliguri',
      'कोलकाता हावड़ा पश्चिम बंगाल प्रसिद्ध वैदिक ज्योतिषी'
    ]
  }
];

const INTERNATIONAL_NRI_KEYWORDS: KeywordGroup[] = [
  {
    category: 'Global Marital Bliss & Spousal Attraction (कामदेव-रति साधना)',
    badge: 'Worldwide NRI Anushthan',
    icon: '✨',
    keywords: [
      'Kamadev Rati Sadhana for Husband Wife in USA',
      'Marital Bliss & Spousal Attraction Astrologer UK',
      'Vedic Relationship Harmony Consultation Canada',
      'Husband Wife Distance Removal Australia',
      'Venus Shukra Shanti for Marital Romance Dubai UAE',
      'Pati Patni Prem Vridhi Anushthan for NRIs Worldwide',
      'Spousal Attraction Vedic Mantras Worldwide Remote',
      'Overcome Marital Emotional Distance NRI Astrology'
    ]
  },
  {
    category: 'United States (USA)',
    badge: 'US Nationwide Coverage',
    icon: '🇺🇸',
    keywords: [
      'Best Indian Astrologer in USA',
      'Indian Astrologer in New York NYC Queens Long Island',
      'Gujarati Astrologer in Edison Iselin New Jersey',
      'Indian Astrologer in California Fremont San Jose SF Bay Area',
      'Best Vedic Astrologer in Texas Dallas Houston Plano Austin',
      'Love Problem Specialist in Chicago Naperville Illinois',
      'Indian Astrologer in Atlanta Alpharetta Georgia',
      'Indian Astrologer in Charlotte Raleigh North Carolina',
      'Top Astrologer in Seattle Bellevue Washington',
      'Indian Astrologer in Florida Tampa Orlando Miami',
      'USA NRI Love Marriage & Intercaste Problem Solution',
      'Relationship Reconciliation Astrologer USA'
    ]
  },
  {
    category: 'United Kingdom (UK)',
    badge: 'UK British-Indian Hubs',
    icon: '🇬🇧',
    keywords: [
      'Best Indian Astrologer in London UK',
      'Love Problem Specialist London Wembley Harrow Kingsbury',
      'Famous Gujarati Pandit in Leicester Belgrave Melton Road',
      'Indian Astrologer in Birmingham Smethwick West Midlands',
      'Indian Astrologer in Southall Ilford Hounslow Croydon',
      'Love Problem Astrologer Manchester Bolton Leeds Bradford',
      'Indian Astrologer in Slough Reading Luton Milton Keynes',
      'British Indian Love Marriage & Family Consent Astrologer',
      'Husband Wife Dispute Solution London UK',
      'Negative Energy & Aura Cleansing Specialist UK'
    ]
  },
  {
    category: 'Canada',
    badge: 'Greater Toronto & BC Belt',
    icon: '🇨🇦',
    keywords: [
      'Best Indian Astrologer in Brampton Ontario',
      'Top Astrologer in Toronto Mississauga GTA',
      'Love Problem Specialist Surrey Vancouver British Columbia',
      'Indian Astrologer in Calgary Edmonton Alberta',
      'Gujarati Astrologer in Brampton Toronto for Love Marriage',
      'Husband Wife Dispute Solution Canada',
      'Intercaste Marriage Family Consent Astrologer Canada',
      'PR Visa Delay & Settlement Astrological Remedy Canada',
      'Distance Vedic Havan & Protection Canada'
    ]
  },
  {
    category: 'Australia & New Zealand',
    badge: 'Australasia Dedicated Desk',
    icon: '🇦🇺',
    keywords: [
      'Best Indian Astrologer in Sydney Parramatta Harris Park',
      'Top Astrologer in Melbourne Tarneit Point Cook Dandenong',
      'Love Problem Astrologer in Brisbane Gold Coast Perth',
      'Indian Astrologer in Adelaide Canberra Australia',
      'Indian Astrologer in Auckland Central Manukau New Zealand',
      'Love Marriage Specialist Sydney Melbourne Australia',
      'Australian NRI Relationship Crisis Solution',
      'Distance Vedic Pooja & Kundali Analysis Australia'
    ]
  },
  {
    category: 'UAE & Middle East (Gulf)',
    badge: 'Dubai & Gulf Express',
    icon: '🇦🇪',
    keywords: [
      'Best Indian Astrologer in Dubai UAE',
      'Love Problem Astrologer Dubai Karama Bur Dubai',
      'Famous Indian Astrologer in Abu Dhabi UAE',
      'Husband Wife Dispute Solution Sharjah Ajman',
      'Business Growth & Commercial Prosperity Astrology Dubai',
      'Indian Astrologer in Doha Qatar Muscat Oman',
      'Famous Indian Jyotish in Kuwait Bahrain Gulf Countries',
      'Gujarati Business Family Astrologer Dubai Meena Bazaar',
      'Rapid Vedic Relationship Guidance UAE'
    ]
  },
  {
    category: 'Europe & Worldwide',
    badge: 'Worldwide Remote Reach',
    icon: '🌍',
    keywords: [
      'Indian Astrologer in Germany Frankfurt Berlin Munich',
      'Gujarati Astrologer in Netherlands Amsterdam Rotterdam The Hague',
      'Diamond Merchant & Gem Astrologer Antwerp Belgium',
      'Indian Astrologer in Paris France Milan Rome Italy',
      'Indian Astrologer in Zurich Switzerland Stockholm Sweden',
      'Indian Astrologer in Singapore Little India Jurong',
      'Indian Astrologer in Malaysia Kuala Lumpur Penang',
      'Worldwide Remote Vedic Anushthan & Distance Healing'
    ]
  }
];

type TabType = 'india' | 'gujarat' | 'remedies' | 'international';

const GUJARAT_CITY_NAMES = [
  'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar',
  'Anand', 'Bhuj', 'Bhavnagar', 'Morbi', 'Bharuch'
];

const INDIA_METRO_NAMES = [
  'Mumbai', 'Delhi', 'Jaipur', 'Indore', 'Pune',
  'Lucknow', 'Chandigarh', 'Patna', 'Bengaluru', 'Hyderabad', 'Kolkata'
];

const isGujaratGroup = (group: KeywordGroup) =>
  GUJARAT_CITY_NAMES.some(name => group.category.includes(name));

const isIndiaMetroGroup = (group: KeywordGroup) =>
  INDIA_METRO_NAMES.some(name => group.category.includes(name));

const isRemedyGroup = (group: KeywordGroup) =>
  !isGujaratGroup(group) && !isIndiaMetroGroup(group);

const INDIA_METRO_KEYWORDS = LOCAL_GUJARAT_KEYWORDS.filter(isIndiaMetroGroup);
const GUJARAT_KEYWORDS = LOCAL_GUJARAT_KEYWORDS.filter(isGujaratGroup);
const REMEDY_KEYWORDS = LOCAL_GUJARAT_KEYWORDS.filter(isRemedyGroup);

export const SeoKeywordsDirectory: React.FC = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>('india');
  const [searchFilter, setSearchFilter] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const allGroups = [
    ...INDIA_METRO_KEYWORDS,
    ...GUJARAT_KEYWORDS,
    ...REMEDY_KEYWORDS,
    ...INTERNATIONAL_NRI_KEYWORDS
  ];

  const currentList = searchFilter.trim().length > 0
    ? allGroups
    : activeTab === 'india'
    ? INDIA_METRO_KEYWORDS
    : activeTab === 'gujarat'
    ? GUJARAT_KEYWORDS
    : activeTab === 'remedies'
    ? REMEDY_KEYWORDS
    : INTERNATIONAL_NRI_KEYWORDS;

  const filteredGroups = currentList
    .map((group) => {
      const matchedKeywords = group.keywords.filter((kw) =>
        kw.toLowerCase().includes(searchFilter.toLowerCase())
      );
      return {
        ...group,
        keywords: matchedKeywords
      };
    })
    .filter(
      (group) =>
        group.keywords.length > 0 ||
        group.category.toLowerCase().includes(searchFilter.toLowerCase())
    );

  const isFiltering = searchFilter.trim().length > 0;
  // Show 4 top categories by default, expandable to all on click
  const visibleGroups = isExpanded || isFiltering ? filteredGroups : filteredGroups.slice(0, 4);

  const tabsList = [
    {
      id: 'india' as TabType,
      label: lang === 'hi' ? 'भारत के प्रमुख महानगर' : 'All India Metros',
      icon: Building2,
      count: INDIA_METRO_KEYWORDS.length
    },
    {
      id: 'gujarat' as TabType,
      label: lang === 'hi' ? 'गुजरात के जिले व नगर' : 'Gujarat Districts',
      icon: MapPin,
      count: GUJARAT_KEYWORDS.length
    },
    {
      id: 'remedies' as TabType,
      label: lang === 'hi' ? 'वैदिक समाधान व पूजा' : 'Remedies & Puja',
      icon: Sparkles,
      count: REMEDY_KEYWORDS.length
    },
    {
      id: 'international' as TabType,
      label: lang === 'hi' ? 'विदेश / NRI केंद्र' : 'International NRI',
      icon: Globe2,
      count: INTERNATIONAL_NRI_KEYWORDS.length
    }
  ];

  return (
    <section
      id="seo-keywords-directory"
      className="py-10 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto border-t border-amber-200/80 w-full overflow-hidden"
    >
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-300 px-3 py-0.5 rounded-full text-xs text-amber-800 font-bold uppercase tracking-widest mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>
            {lang === 'hi'
              ? 'स्थानिक व अंतरराष्ट्रीय खोज अनुक्रमणिका'
              : lang === 'gu-en'
              ? 'સ્થાનિક અને વિદેશી જ્યોતિષ શોધ અનુક્રમણિકા (SEO Index)'
              : 'Complete Local & International Search Index'}
          </span>
        </div>
        <h2 className="heading-mystic text-xl sm:text-2xl md:text-3xl font-extrabold text-stone-900 leading-snug">
          {lang === 'hi'
            ? 'शहर व देशानुसार वैदिक ज्योतिष खोज निर्देशिका'
            : lang === 'gu-en'
            ? 'શહેર અને દેશ અનુસાર જ્યોતિષ શોધ નિર્દેશિકા'
            : 'Vedic Astrological Search Directory by City & Country'}
        </h2>
        <p className="text-amber-800 font-semibold text-xs sm:text-sm mt-1">
          {lang === 'hi'
            ? 'भारत के प्रमुख महानगर, गुजरात के जिले एवं अंतरराष्ट्रीय देशों हेतु शीर्ष प्रामाणिक कीवर्ड्स'
            : lang === 'gu-en'
            ? 'ભારતના મુખ્ય શહેરો, સ્થાનિક ગુજરાત અને આંતરરાષ્ટ્રીય દેશો મુજબ મુખ્ય જ્યોતિષ શોધ કીવર્ડ્સ'
            : 'Verified Astrological Search Terms for All India Metros, Gujarat & Worldwide Diaspora'}
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Tabs & Search Filter Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 mb-6 bg-white border border-amber-200/80 p-2.5 sm:p-3 rounded-2xl shadow-xs">
        {/* Tab Toggle Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 w-full lg:w-auto scrollbar-none">
          {tabsList.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id && !isFiltering;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchFilter('');
                  setIsExpanded(false);
                }}
                className={`flex items-center justify-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold text-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                    isActive ? 'bg-amber-800/40 text-amber-100' : 'bg-stone-200/80 text-stone-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Filter Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder={
              lang === 'hi'
                ? 'कोई भी शहर या कीवर्ड खोजें (जैसे मुंबई, दिल्ली, सूरत)...'
                : lang === 'gu-en'
                ? 'કોઈપણ શહેર કે કીવર્ડ શોધો...'
                : 'Search any city or keyword...'
            }
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-hidden focus:border-amber-500 focus:bg-white text-stone-900 transition-colors"
          />
        </div>
      </div>

      {isFiltering && (
        <div className="mb-4 px-2 flex items-center justify-between text-xs text-stone-600">
          <span>
            खोज परिणाम: <strong>{filteredGroups.length}</strong> श्रेणियां मिलीं
          </span>
          <button
            onClick={() => setSearchFilter('')}
            className="text-amber-700 font-bold hover:underline cursor-pointer"
          >
            फ़िल्टर हटाएं
          </button>
        </div>
      )}

      {/* Grid of Keywords (Compact, Sleek View) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleGroups.map((group, idx) => (
          <div
            key={idx}
            className="bg-white border border-amber-200/90 rounded-xl p-3.5 sm:p-4 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-base shrink-0">{group.icon}</span>
                  <h3 className="heading-mystic text-xs sm:text-sm font-bold text-stone-900 line-clamp-1">
                    {group.category}
                  </h3>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200 px-1.5 py-0.5 rounded-full shrink-0">
                  {group.badge}
                </span>
              </div>

              {/* Keywords Tag Cloud - Compact & Mini */}
              <div className="flex flex-wrap gap-1 pt-0.5">
                {group.keywords.slice(0, isExpanded || isFiltering ? 15 : 6).map((kw, kwIdx) => (
                  <a
                    key={kwIdx}
                    href={`tel:${CONTACT_INFO.phoneRaw}`}
                    title={`Consult Baba Ji for ${kw}`}
                    className="text-[10px] font-medium text-stone-700 bg-stone-50 hover:bg-amber-100 hover:text-amber-950 border border-stone-200/70 hover:border-amber-300 px-2 py-0.5 rounded-md transition-colors inline-block leading-tight"
                  >
                    {kw}
                  </a>
                ))}
                {!isExpanded && !isFiltering && group.keywords.length > 6 && (
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="text-[9.5px] font-semibold text-amber-800 bg-amber-50/90 border border-amber-200 px-1.5 py-0.5 rounded-md hover:bg-amber-100 transition-colors inline-block cursor-pointer"
                  >
                    +{group.keywords.length - 6} और
                  </button>
                )}
              </div>
            </div>

            {/* Quick Action Footer */}
            <div className="mt-3 pt-2.5 border-t border-amber-100 flex items-center justify-between text-[11px]">
              <span className="text-stone-500 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>24/7 Helpline</span>
              </span>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Expand / Collapse Button to keep website compact & short */}
      {filteredGroups.length > 3 && !isFiltering && (
        <div className="mt-6 flex flex-col items-center justify-center gap-1.5 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-100/90 hover:bg-amber-200 text-amber-950 font-bold text-xs border border-amber-300 shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
          >
            {isExpanded ? (
              <>
                <span>▲ कम श्रेणियां दिखाएं (Show Less)</span>
              </>
            ) : (
              <>
                <span>▼ सभी शहर व कीवर्ड्स सूची देखें ({filteredGroups.length - 3} और श्रेणियां)</span>
              </>
            )}
          </button>
          {!isExpanded && (
            <p className="text-[11px] text-stone-500">
              पेज को कॉम्पैक्ट रखने के लिए चुनिंदा कीवर्ड्स दिखाए जा रहे हैं। पूरी सूची देखने हेतु ऊपर बटन दबाएं।
            </p>
          )}
        </div>
      )}

      {/* Global Call to Action Bar */}
      <div className="mt-10 bg-gradient-to-r from-amber-600 via-amber-700 to-orange-600 text-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl border border-amber-500/50">
        <div className="space-y-2 flex-1 min-w-0 text-left">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-amber-200">
            {lang === 'hi'
              ? '24/7 वैश्विक व स्थानीय ज्योतिषीय मार्गदर्शन'
              : lang === 'gu-en'
              ? '24/7 વૈશ્વિક અને સ્થાનિક જ્યોતિષ હેલ્પલાઇન'
              : '24/7 Global & Local Astrological Helpline'}
          </span>
          <h3 className="heading-mystic text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-balance">
            {lang === 'hi'
              ? 'क्या आप अपने शहर या देश में ज्योतिषीय समाधान खोज रहे हैं?'
              : lang === 'gu-en'
              ? 'શું તમે તમારા શહેર કે દેશમાં જ્યોતિષીય માર્ગદર્શન શોધી રહ્યા છો?'
              : 'Looking for Astrological Guidance in Your City or Country?'}
          </h3>
          <p className="text-xs sm:text-sm text-amber-100/95 max-w-2xl leading-relaxed">
            {lang === 'hi'
              ? 'चाहे आप अहमदाबाद, सूरत, राजकोट, लंदन, न्यूयॉर्क, टोरंटो, सिडनी या दुबई में हों — पूज्य बाबा जी व्यक्तिगत, गोपनीय व सटीक मार्गदर्शन हेतु उपलब्ध हैं।'
              : lang === 'gu-en'
              ? 'તમે અમદાવાદ, સુરત, રાજકોટ, લંડન, ન્યુયોર્ક, ટોરોન્ટો, સિડની કે દુબઈમાં હોવ — બાબાજી સીધા અને ગુપ્ત માર્ગદર્શન માટે 24 કલાક ઉપલબ્ધ છે.'
              : 'Whether you are in Ahmedabad, Surat, Rajkot, London, New York, Toronto, Sydney, or Dubai, Baba Ji is available for direct, confidential consultations.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto self-stretch lg:self-center">
          <a
            id="global-cta-call"
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="h-12 sm:h-[50px] bg-white text-stone-950 hover:bg-amber-50 font-extrabold px-6 sm:px-8 rounded-2xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg active:scale-95 transition-all text-sm sm:text-base whitespace-nowrap border border-white cursor-pointer"
          >
            <Phone className="w-5 h-5 text-amber-600 shrink-0 animate-bounce" />
            <span className="whitespace-nowrap font-extrabold">
              {lang === 'hi'
                ? `सीधा फोन कॉल करें: ${CONTACT_INFO.phoneDisplay}`
                : lang === 'gu-en'
                ? `સીધો કૉલ: ${CONTACT_INFO.phoneDisplay}`
                : `Direct Call: ${CONTACT_INFO.phoneDisplay}`}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
