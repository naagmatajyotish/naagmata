import React, { useState, useRef } from 'react';
import { Sparkles, MessageCircle, Phone, RotateCcw, ShieldCheck, Heart, Flame, ShieldAlert, Award, ArrowRight, RefreshCw, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/jyotishData';

export interface ProblemReading {
  readingNumber: number;
  phaseTitleHi: string;
  phaseTitleGu: string;
  phaseTitleEn: string;
  doshHi: string;
  doshGu: string;
  doshEn: string;
  impactHi: string;
  impactGu: string;
  impactEn: string;
  remedyHi: string;
  remedyGu: string;
  remedyEn: string;
  mantra: string;
  auspiciousTimingHi: string;
  auspiciousTimingGu: string;
  auspiciousTimingEn: string;
  targetDegree: number;
  houseHi: string;
  houseGu: string;
  houseEn: string;
}

export interface ProblemCategory {
  id: string;
  icon: string;
  titleHi: string;
  titleGu: string;
  titleEn: string;
  readings: ProblemReading[];
}

const ORACLE_PROBLEMS: ProblemCategory[] = [
  {
    id: 'love',
    icon: '💖',
    titleHi: 'खोया प्यार व प्रेम संबंध समस्या',
    titleGu: 'ખોવાયેલો પ્રેમ અને સંબંધ સુધારો',
    titleEn: 'Lost Love & Broken Relationship',
    readings: [
      {
        readingNumber: 1,
        phaseTitleHi: 'शुक्र-राहु पीड़ित योग (तृतीय व्यक्ति का अनुचित हस्तक्षेप)',
        phaseTitleGu: 'શુક્ર-રાહુ પીડિત યોગ (ત્રીજી વ્યક્તિનો અણધારી દખલ)',
        phaseTitleEn: 'Venus-Rahu Affliction (Third-Party Interference)',
        doshHi: 'शुक्र-राहु पीड़ित योग एवं पंचम भाव पर पापी ग्रहों की दृष्टि (तृतीय व्यक्ति का अनुचित हस्तक्षेप व अचानक खटास)',
        doshGu: 'શુક્ર-રાહુ પીડિત યોગ અને પંચમ ભાવ પર પાપગ્રહોની દ્રષ્ટિ (ત્રીજી વ્યક્તિનો અણધારી દખલ અને અચાનક અંતર)',
        doshEn: 'Venus-Rahu Affliction & 5th House Weakness (Sudden emotional distance & third-party influence)',
        impactHi: 'अचानक बातचीत बंद होना, मनमुटाव, एक-दूसरे पर अकारण शक और रिश्ते में तीव्र खटास।',
        impactGu: 'વાતચીત અચાનક બંધ થઈ જવી, અણસમજ, પરસ્પર શંકા અને સંબંધમાં અંતર પેદા થવું.',
        impactEn: 'Sudden silent treatment, emotional estrangement, growing mistrust, and unexplainable distance.',
        remedyHi: 'माँ नागदेवी सिद्ध शुक्र-कामख्या वशीकरण काट अनुष्ठान एवं कामदेव-रति संपुटित महाहवन।',
        remedyGu: 'માં નાગદેવી સિદ્ધ શુક્ર-કામાખ્યા આકર્ષણ શાંતિ પાઠ અને પ્રેમ સંજીવની મહાહવન.',
        remedyEn: 'Maa Naagdevi Shukra Kamakhya Sanctified Anushthan & Sacred Affection Re-Harmonization Havan.',
        mantra: '॥ ॐ क्लीं कामदेवाय नमः • ॐ नवकुल नागदेव्यै नमः ॥',
        auspiciousTimingHi: 'शुक्रवार / शुक्ल पक्ष की पंचमी तिथि • ईशान कोण (उत्तर-पूर्व)',
        auspiciousTimingGu: 'શુક્રવાર / સુદ પાંચમ તિથિ • ઈશાન ખૂણો (ઉત્તર-પૂર્વ)',
        auspiciousTimingEn: 'Friday / Shukla Panchami Tithi • North-East Direction',
        targetDegree: 30,
        houseHi: 'पंचम भाव (प्रेम व आकर्षण)',
        houseGu: 'પંચમ ભાવ (પ્રેમ અને આકર્ષણ)',
        houseEn: '5th House (Love & Affection)'
      },
      {
        readingNumber: 2,
        phaseTitleHi: 'सप्तमेश वक्री व मंगल-केतु अंगारक दृष्टि (अहंकार व ब्लॉक स्थिति)',
        phaseTitleGu: 'સપ્તમેશ વક્રી અને મંગળ-કેતુ અંગારક દ્રષ્ટિ (અહંકાર અને બ્લોક સ્થિતિ)',
        phaseTitleEn: 'Retrograde 7th Lord & Angarak Influence (Ego Clashes & Blocked Communication)',
        doshHi: 'सप्तमेश वक्री स्थिति एवं मंगल-केतु अंगारक दृष्टि (अहंकार, गलतफहमी, कॉल/मैसेज ब्लॉक व अकारण तीव्र क्रोध)',
        doshGu: 'સપ્તમેશ વક્રી સ્થિતિ અને મંગળ-કેતુ અંગારક દ્રષ્ટિ (અહંકાર, ગેરસમજ, કૉલ-મેસેજ બ્લૉક અને અકારણ ક્રોધ)',
        doshEn: 'Retrograde 7th House Ruler & Mars-Ketu Heat (Ego clashes, stubborn misunderstandings, blocked communication)',
        impactHi: 'पार्टनर का संपर्क पूरी तरह काट लेना, माफी मांगने पर भी दिल न पिघलना और पुरानी बातों को पकड़कर बैठना।',
        impactGu: 'પાર્ટનર દ્વારા તમામ સંપર્ક કાપી નાખવો, માફી છતાં દિલ ન પીગળવું અને જૂની વાતો પકડી રાખવી.',
        impactEn: 'Partner completely cutting off contact, unresolved bitterness, and stony emotional detachment.',
        remedyHi: 'सिद्ध नाग-युगल सौहार्द अनुष्ठान एवं क्रोध-अहंकार विनाशिनी प्राण-प्रतिष्ठित रक्षा पोटली।',
        remedyGu: 'સિદ્ધ નાગ-યુગલ સૌહાર્દ અનુષ્ઠાન અને ક્રોધ-અહંકાર વિનાશિની પ્રાણ-પ્રતિષ્ઠિત રક્ષા પોટલી.',
        remedyEn: 'Siddha Naag-Yugal Harmony Anushthan & Sacred Ego Dissolution Consecrated Potli Ritual.',
        mantra: '॥ ॐ ह्रीं श्रीं क्लीं सम्मोहन नागदेव्यै नमः ॥',
        auspiciousTimingHi: 'मंगलवार प्रदोष काल • पूर्व दिशा',
        auspiciousTimingGu: 'મંગળવાર પ્રદોષ કાળ • પૂર્વ દિશા',
        auspiciousTimingEn: 'Tuesday Pradosh Time • East Direction',
        targetDegree: 180,
        houseHi: 'सप्तम भाव (साथी की मनोस्थिति व संबंध)',
        houseGu: 'સપ્તમ ભાવ (સાથીની માનસિકતા અને સંબંધ)',
        houseEn: '7th House (Partner Mindset & Accord)'
      },
      {
        readingNumber: 3,
        phaseTitleHi: 'चंद्र-शनि विष योग (पार्टनर का मन भटकना व भावनात्मक शून्यता)',
        phaseTitleGu: 'ચંદ્ર-શનિ વિષ યોગ (સાથીનું મન ભટકવું અને ભાવનાત્મક શૂન્યતા)',
        phaseTitleEn: 'Chandra-Shani Affliction (Wandering Mind & Emotional Numbness)',
        doshHi: 'चंद्र-शनि विष योग एवं द्वादश भाव में राहु का छाया प्रभाव (पार्टनर का मन भटकना, पुरानी यादों से कटना व भावनात्मक शून्यता)',
        doshGu: 'ચંદ્ર-શનિ વિષ યોગ અને દ્વાદશ ભાવમાં રાહુનો છાયા પ્રભાવ (સાથીનું મન ભટકવું, જૂની યાદો ભુલાવી દેવી અને ઉદાસીનતા)',
        doshEn: 'Moon-Saturn Vish Yoga & 12th House Rahu Fog (Partner feeling emotionally exhausted, fading affection, distant demeanor)',
        impactHi: 'पहले जैसी मोहब्बत का अचानक गायब हो जाना, पार्टनर का उदासीन हो जाना और नए आकर्षण की ओर खिंचना।',
        impactGu: 'પહેલા જેવો પ્રેમ અચાનક ગાયબ થઈ જવો, સાથીનું ઉદાસીન થવું અને અન્ય તરફ ખેંચાવું.',
        impactEn: 'Sudden evaporation of past warmth, indifference to your feelings, and emotional wandering.',
        remedyHi: 'माँ नागदेवी मनोकामना सिद्धि महापूजन एवं अमृत-दृष्टि चंद्र शांति शांति पाठ।',
        remedyGu: 'માં નાગદેવી મનોકામના સિદ્ધિ મહાપૂજન અને અમૃત-દ્રષ્ટિ ચંદ્ર શાંતિ પાઠ.',
        remedyEn: 'Maa Naagdevi Manokamna Siddhi Maha Puja & Amrit Drishti Chandra Shanti Cleansing.',
        mantra: '॥ ॐ सों सोमाय नमः • ॐ नागेश्वराय नमः ॥',
        auspiciousTimingHi: 'पूर्णिमा अथवा सोमवार रात्रि • उत्तर दिशा',
        auspiciousTimingGu: 'પૂનમ અથવા સોમવાર રાત્રિ • ઉત્તર દિશા',
        auspiciousTimingEn: 'Full Moon (Purnima) or Monday Night • North Direction',
        targetDegree: 330,
        houseHi: 'द्वादश व चतुर्थ भाव (मन व गुप्त भावनाएं)',
        houseGu: 'દ્વાદશ અને ચતુર્થ ભાવ (મન અને ગુપ્ત લાગણીઓ)',
        houseEn: '12th & 4th Houses (Heart & Subconscious Mind)'
      }
    ]
  },
  {
    id: 'marriage',
    icon: '💍',
    titleHi: 'विवाह में बाधा, देरी या अंतरजातीय विवाह',
    titleGu: 'લગ્નમાં વિલંબ કે પ્રેમ લગ્ન અડચણ',
    titleEn: 'Marriage Delay & Intercaste Marriage',
    readings: [
      {
        readingNumber: 1,
        phaseTitleHi: 'सप्तमेश गुरु चांडाल योग (रिश्ते पक्के होते-होते टूटना)',
        phaseTitleGu: 'સપ્તમેશ ગુરુ ચાંડાલ યોગ (સંબંધ નક્કી થતાં થતાં તૂટી જવો)',
        phaseTitleEn: 'Jupiter-Rahu Chandal Yoga (Alliances Collapsing at Final Stage)',
        doshHi: 'सप्तमेश गुरु चांडाल योग अथवा मांगलिक दोष प्रभाव (परिवार की असहमति व विवाह में बार-बार अड़चन)',
        doshGu: 'સપ્તમેશ ગુરુ ચાંડાલ યોગ અથવા માંગલિક દોષ (પરિવારની નારાજગી અને લગ્નમાં વારંવાર રુકાવટ)',
        doshEn: '7th House Jupiter-Rahu Affliction or Manglik Dosha (Family disapproval & repeated alliance breakups)',
        impactHi: 'रिश्ते पक्के होते-होते टूट जाना, शादी की उम्र निकलना, और प्रेमी युगल के बीच परिवार का कड़ा विरोध।',
        impactGu: 'સંબંધ નક્કી થતા થતા તૂટી જવો, લગ્નમાં મોડું થવું અને પરિવાર દ્વારા મંજૂરી ન મળવી.',
        impactEn: 'Alliances falling apart at the final stage, severe family resistance, and prolonged matrimonial delay.',
        remedyHi: 'सिद्ध गौरी-शंकर नाग युगल महापूजन एवं विवाह बाधा निवारण नवार्ण संपुट हवन।',
        remedyGu: 'સિદ્ધ ગૌરી-શંકર નાગ યુગલ મહાપૂજન અને વિવાહ બાધા મુક્તિ હોમ.',
        remedyEn: 'Siddha Gauri-Shankar Naga Sacred Union Puja & Matrimonial Obstacle Clearance Havan.',
        mantra: '॥ कात्यायनि महामाये महायोगिन्यधीश्वरि । नंदगोपसुतं देवि पतिं मे कुरु ते नमः ॥',
        auspiciousTimingHi: 'गुरुवार / रोहिणी नक्षत्र • पूर्व दिशा',
        auspiciousTimingGu: 'ગુરુવાર / રોહિણી નક્ષત્ર • પૂર્વ દિશા',
        auspiciousTimingEn: 'Thursday / Rohini Nakshatra • East Direction',
        targetDegree: 90,
        houseHi: 'सप्तम भाव (विवाह व दांपत्य)',
        houseGu: 'સપ્તમ ભાવ (લગ્ન અને દાંપત્ય)',
        houseEn: '7th House (Marriage & Partnership)'
      },
      {
        readingNumber: 2,
        phaseTitleHi: 'सूर्य-शनि समसप्तक दृष्टि (उम्र निकलना व कुंडलियों का न मिलना)',
        phaseTitleGu: 'સૂર્ય-શનિ સમસપ્તક દ્રષ્ટિ (ઉંમર નીકળી જવી અને કુંડળી ન મળવી)',
        phaseTitleEn: 'Sun-Saturn Opposition (Prolonged Age Delay & Kundali Mismatch)',
        doshHi: 'सूर्य-शनि समसप्तक दृष्टि एवं अष्टम भाव पर केतु की बाधा (उम्र निकलना, योग्य वर/वधू न मिलना व कुंडलियों का बार-बार न मिलना)',
        doshGu: 'સૂર્ય-શનિ સમસપ્તક દ્રષ્ટિ અને અષ્ટમ ભાવ પર કેતુની બાધા (ઉંમર નીકળી જવી, યોગ્ય પાત્ર ન મળવું અને કુંડળી દોષ)',
        doshEn: 'Sun-Saturn Astrological Friction & Ketu 8th House Blockage (Age advancing, ideal matches falling through)',
        impactHi: 'हर जगह से निराशा मिलना, बातचीत आगे न बढ़ना और मनचाहा जीवनसाथी न मिल पाने की मानसिक चिंता।',
        impactGu: 'દરેક સંબંધમાં નિરાશા, વાતચીત આગળ ન વધવી અને મનગમતો જીવનસાથી ન મળવાની ચિંતા.',
        impactEn: 'Repeated disappointments, endless rejections, and anxious uncertainty regarding marital timing.',
        remedyHi: 'माँ नागदेवी सिद्ध विवाह संस्कार बंधन काट एवं बृहस्पति-शुक्र युगल शांति पाठ।',
        remedyGu: 'માં નાગદેવી સિદ્ધ વિવાહ સંસ્કાર બંધન કાપ અને ગુરુ-શુક્ર યુગલ શાંતિ પાઠ.',
        remedyEn: 'Maa Naagdevi Vivah Sanskar Bandhan Clearance & Brihaspati-Shukra Union Blessing.',
        mantra: '॥ ॐ ग्रां ग्रीં ग्रौं सः गुरवे नमः • ॐ क्लीं नमः ॥',
        auspiciousTimingHi: 'शुक्ल पक्ष गुरुवार • उत्तर-पूर्व दिशा',
        auspiciousTimingGu: 'સુદ પક્ષ ગુરુવાર • ઉત્તર-પૂર્વ દિશા',
        auspiciousTimingEn: 'Shukla Paksha Thursday • North-East Direction',
        targetDegree: 240,
        houseHi: 'अष्टम व नवम भाव (भाग्य व विवाह समय)',
        houseGu: 'અષ્ટમ અને નવમ ભાવ (ભાગ્ય અને વિવાહ સમય)',
        houseEn: '8th & 9th Houses (Destiny & Matrimonial Timing)'
      },
      {
        readingNumber: 3,
        phaseTitleHi: 'अंतरजातीय प्रेम विवाह में परिवार व समाज का विरोध',
        phaseTitleGu: 'આંતરજ્ઞાતીય પ્રેમ લગ્નમાં પરિવાર અને સમાજનો વિરોધ',
        phaseTitleEn: 'Intercaste Love Marriage Family Resistance',
        doshHi: 'पंचम-सप्तम संबंध पर राहु का आच्छादन (प्रेम विवाह में माता-पिता, सास-ससुर व समाज का तीखा विरोध व प्रतिष्ठा का संकोच)',
        doshGu: 'પંચમ-સપ્તમ સંબંધ પર રાહુનો પ્રભાવ (પ્રેમ લગ્નમાં માતા-પિતા અને પરિવારનો ઉગ્ર વિરોધ)',
        doshEn: 'Rahu Shadow on 5th-7th Connection (Severe familial objection, intercaste barriers, prestige hesitation)',
        impactHi: 'दोनों प्रेमी एक-दूसरे को चाहते हैं परंतु दोनों परिवारों में से कोई एक पक्ष शादी के लिए राजी नहीं हो रहा।',
        impactGu: 'બંને એકબીજાને ચાહે છે છતાં પરિવારમાંથી કોઈ એક પક્ષ સંમત થતો નથી.',
        impactEn: 'Mutual love between partners, but stubborn parental veto or refusal to meet for marriage talks.',
        remedyHi: 'माँ नागदेवी कुल-सहमति महायज्ञ एवं हृदय-परिवर्तन वैदिक संकल्प अनुष्ठान।',
        remedyGu: 'માં નાગદેવી કુળ-સંમતિ મહાયજ્ઞ અને હૃદય-પરિવર્તન વૈદિક સંકલ્પ અનુષ્ઠાન.',
        remedyEn: 'Maa Naagdevi Kul-Sahamati Maha Yagya & Parental Heart Harmony Consecration.',
        mantra: '॥ ॐ सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके शरण्ये त्र्यंबके गौरि नारायणि नमोऽस्तु ते ॥',
        auspiciousTimingHi: 'शुक्रवार गोधूलि वेला • पूर्व-उत्तर दिशा',
        auspiciousTimingGu: 'શુક્રવાર સંધ્યાકાળ • પૂર્વ-ઉત્તર દિશા',
        auspiciousTimingEn: 'Friday Twilight (Godhuli Vela) • East-North Direction',
        targetDegree: 300,
        houseHi: 'द्वितीय व एकादश भाव (कुटुंब व इच्छा पूर्ति)',
        houseGu: 'દ્વિતીય અને એકાદશ ભાવ (પરિવાર અને મનોરથ પૂર્તિ)',
        houseEn: '2nd & 11th Houses (Family Accord & Fulfillment)'
      }
    ]
  },
  {
    id: 'dispute',
    icon: '🕊️',
    titleHi: 'पति-पत्नी कलह, तलाक व गृह क्लेश',
    titleGu: 'પતિ-પત્ની કંકાસ અને છૂટાછેડા નિવારણ',
    titleEn: 'Husband-Wife Conflict & Divorce Prevention',
    readings: [
      {
        readingNumber: 1,
        phaseTitleHi: 'कुटुंब भाव पर राहु-शनि दृष्टि (छोटी बातों पर उग्र झगड़े व अशांति)',
        phaseTitleGu: 'કુટુંબ ભાવ પર રાહુ-શનિ દ્રષ્ટિ (નાની વાતો પર ઉગ્ર ઝઘડા)',
        phaseTitleEn: '2nd House Rahu-Saturn Pressure (Fierce Arguments & Strife)',
        doshHi: 'सूर्य-शनि समसप्तक दृष्टि, राहु का कुटुंब भाव (द्वितीय भाव) पर घातक प्रहार व नज़र दोष',
        doshGu: 'સૂર્ય-શનિ સમસપ્તક દ્રષ્ટિ, રાહુનો કુટુંબ ભાવ પર પ્રભાવ અને ભારે નજર દોષ',
        doshEn: 'Sun-Saturn Opposition & 2nd House Disturbance (Severe domestic friction & separation threats)',
        impactHi: 'छोटी बातों पर उग्र झगड़े, घर में अशांति, ससुराल पक्ष से अनबन और घर में तनाव का माहौल।',
        impactGu: 'નાની નાની વાતો પર ઉગ્ર ઝઘડા, ઘરમાં અશાંતિ અને સાસરી પક્ષ સાથે વિખવાદ.',
        impactEn: 'Explosive arguments over trivial matters, deep loss of domestic peace, and emotional hostility.',
        remedyHi: 'माँ नागदेवी कुलशांति महायज्ञ एवं गृह क्लेश विनाशिनी अभिमंत्रित नाग रक्षा तावीज।',
        remedyGu: 'માં નાગદેવી કુળશાંતિ મહાયજ્ઞ અને પતિ-પત્ની સૌહાર્દ સુરક્ષા કવચ.',
        remedyEn: 'Maa Naagdevi Domestic Harmony Maha Yagya & Sacred Raksha Suraksha Energized Kavach.',
        mantra: '॥ ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे • ॐ नमः शिवाय ॥',
        auspiciousTimingHi: 'सोमवार / प्रदोष काल • उत्तर दिशा',
        auspiciousTimingGu: 'સોમવાર / પ્રદોષ કાળ • ઉત્તર દિશા',
        auspiciousTimingEn: 'Monday / Pradosh Time • North Direction',
        targetDegree: 60,
        houseHi: 'द्वितीय व चतुर्थ भाव (कुटुंब व गृह सुख)',
        houseGu: 'દ્વિતીય અને ચતુર્થ ભાવ (પરિવાર અને ગૃહ સુખ)',
        houseEn: '2nd & 4th Houses (Family & Domestic Bliss)'
      },
      {
        readingNumber: 2,
        phaseTitleHi: 'सप्तम भाव में विच्छेदक अंगारक योग (तलाक की धमकी व कोर्ट कचहरी)',
        phaseTitleGu: 'સપ્તમ ભાવમાં વિચ્છેદક અંગારક યોગ (છૂટાછેડાની ધમકી અને કાનૂની વિવાદ)',
        phaseTitleEn: '7th House Disruptive Mars (Divorce Threat & Legal Strain)',
        doshHi: 'सप्तम भाव में राहु का विच्छेदक अंगारक प्रभाव (कोर्ट कचहरी, तलाक की धमकी, अलग रहने की जिद्द व भारी कड़वाहट)',
        doshGu: 'સપ્તમ ભાવમાં રાહુ-મંગળનો વિચ્છેદક પ્રભાવ (છૂટાછેડાની નોટિસ, અલગ રહેવાની જીદ અને કાનૂની સંકટ)',
        doshEn: 'Mars-Rahu Disruptive Influence on 7th House (Divorce legal notices, adamant separation threats, bitterness)',
        impactHi: 'पति या पत्नी का मायके बैठ जाना, बातचीत के सारे रास्ते बंद करना और समझौता न करने की जिद।',
        impactGu: 'પતિ કે પત્નીનું પિયર બેસી જવું, સમાધાનના તમામ રસ્તા બંધ થવા અને અલગ થવાની જિદ્દ.',
        impactEn: 'Spouse walking out to maternal home, stone-walling mediation, and refusing any compromise.',
        remedyHi: 'माँ नागदेवी विच्छेद निवारण महा संपुटित हवन एवं दांपत्य पुनर्मिलन सिद्ध तंत्र पाठ।',
        remedyGu: 'માં નાગદેવી વિચ્છેદ નિવારણ મહા સંપુટિત હોમ અને દાંપત્ય પુનઃમિલન સિદ્ધ પાઠ.',
        remedyEn: 'Maa Naagdevi Divorce Halting Maha Samputit Havan & Re-Union Sacred Vedic Stotra.',
        mantra: '॥ ॐ क्लीं कृष्णाय गोविंदाय गोपीजनवल्लभाय नमः ॥',
        auspiciousTimingHi: 'बुधवार अथवा अष्टमी तिथि • ईशान कोण',
        auspiciousTimingGu: 'બુધવાર અથવા આઠમ તિથિ • ઈશાન ખૂણો',
        auspiciousTimingEn: 'Wednesday or Ashtami Tithi • North-East Corner',
        targetDegree: 150,
        houseHi: 'षष्ठ व सप्तम भाव (कलह व कानूनी संकट निवारण)',
        houseGu: 'ષષ્ઠ અને સપ્તમ ભાવ (ઝઘડા અને કાનૂની મુક્તિ)',
        houseEn: '6th & 7th Houses (Conflict Resolution)'
      },
      {
        readingNumber: 3,
        phaseTitleHi: 'तीखा पारिवारिक नज़र दोष (घर में अशांति व सिर में भारीपन)',
        phaseTitleGu: 'તીખો પારિવારિક નજર દોષ (ઘરમાં અશાંતિ અને માથું ભારે રહેવું)',
        phaseTitleEn: 'Severe Domestic Evil Eye & Negative Vibe Pressure',
        doshHi: 'ससुराल पक्ष अथवा रिश्तेदारों का तीखा ईर्ष्या जनित नज़र दोष (घर में घुसते ही अशांति, सिर भारी होना व अकारण चिड़चिड़ापन)',
        doshGu: 'સાસરી પક્ષ કે સંબંધીઓનો ભારે નજર દોષ (ઘરમાં પ્રવેશતાં જ અશાંતિ, માથું ભારે થવું અને ચીડિયાપણું)',
        doshEn: 'Severe Relative/In-Law Nazar Affliction (Entering the home triggers sudden heavy headaches and irritation)',
        impactHi: 'बाहर दोनों का मूड अच्छा रहना परंतु घर आते ही आपस में लड़ पड़ना और शांति नष्ट हो जाना।',
        impactGu: 'બહાર મૂડ સારો રહેવો પણ ઘરમાં પ્રવેશતાં જ ઝઘડો શરૂ થવો અને અશાંતિ થવી.',
        impactEn: 'Pleasant and loving outside, but stepping inside the house immediately triggers explosive friction.',
        remedyHi: 'माँ नागदेवी वास्तु-दोष शांति एवं सिद्ध अभिमंत्रित 8-मुखी नाग-कवच स्थापना।',
        remedyGu: 'માં નાગદેવી વાસ્તુ-દોષ શાંતિ અને સિદ્ધ અભિમંત્રિત નાગ-કવચ સ્થાપના.',
        remedyEn: 'Maa Naagdevi Vastu Cleansing & Consecrated 8-Faced Naga Protective Shield Placement.',
        mantra: '॥ ॐ नमो भगवते वासुदेवाय • ॐ शांतिः शांतिः शांतिः ॥',
        auspiciousTimingHi: 'शनिवार सूर्यास्त समय • मुख्य द्वार व उत्तर दिशा',
        auspiciousTimingGu: 'શનિવાર સૂર્યાસ્ત સમય • મુખ્ય દ્વાર અને ઉત્તર દિશા',
        auspiciousTimingEn: 'Saturday Sunset • Main Entrance & North Direction',
        targetDegree: 120,
        houseHi: 'चतुर्थ भाव (गृह सुख व मानसिक शांति)',
        houseGu: 'ચતુર્થ ભાવ (ગૃહ સુખ અને માનસિક શાંતિ)',
        houseEn: '4th House (Home Serenity & Peace)'
      }
    ]
  },
  {
    id: 'career',
    icon: '💼',
    titleHi: 'व्यापार मंदी, नौकरी अड़चन व कर्ज मुक्ति',
    titleGu: 'વેપાર મંદી, નોકરી મુશ્કેલી અને દેવા મુક્તિ',
    titleEn: 'Career Stagnation, Business Loss & Debt',
    readings: [
      {
        readingNumber: 1,
        phaseTitleHi: 'दशमेश नीच राशि व कुबेर स्थान का बंधन (धंधा ठप व पैसा न बचना)',
        phaseTitleGu: 'દશમેશ નીચ રાશિ અને કુબેર સ્થાનનું બંધન (વેપાર ઠપ અને પૈસા ન ટકવા)',
        phaseTitleEn: '10th House Debilitation & Kuber Obstruction (Cashflow Blockage)',
        doshHi: 'दशमेश नीच राशि में, राहु-केतु द्वारा लाभ स्थान का बंधन एवं कुबेर स्थान पर अशुभ पाप दृष्टि',
        doshGu: 'દશમેશ નીચ રાશિમાં, રાહુ-કેતુ દ્વારા લાભ સ્થાનનું બંધન અને કુબેર સ્થાન પર અશુભ પ્રભાવ',
        doshEn: '10th Lord Debilitation, 11th House Rahu Obstruction & Heavy Financial Blockage',
        impactHi: 'कड़ी मेहनत के बाद भी तरक्की न मिलना, धंधे में ग्राहक न टिकना, पैसों का बेवजह बह जाना और बढ़ता कर्ज।',
        impactGu: 'સતત મહેનત છતાં નફો ન થવો, ઘરાકી અટકી જવી, પૈસા ન ટકવા અને કરજનું ભારણ વધવું.',
        impactEn: 'Hard work yielding zero growth, vanishing clients, constant money leakage, and suffocating debts.',
        remedyHi: 'कनकधारा-कुबेर नाग महायज्ञ एवं व्यापार वृद्धि सिद्ध नाग-यंत्र की विशेष प्राण प्रतिष्ठा।',
        remedyGu: 'કનકધારા-કુબેર નાગ મહાયજ્ઞ અને વેપાર વૃદ્ધિ સિદ્ધ યંત્ર પ્રાણ પ્રતિષ્ઠા.',
        remedyEn: 'Kanakadhara-Kuber Naga Maha Yagya & Consecrated Vyapar Vriddhi Sacred Yantra Pratishtha.',
        mantra: '॥ ॐ ह्रीं श्रीं क्रीं श्रीं कुबेराय अष्ट-लक्ष्मी मम गृहे धनं पूरय पूरय नमः ॥',
        auspiciousTimingHi: 'बुधवार अथवा एकादशी • कुबेर कोण (उत्तर दिशा)',
        auspiciousTimingGu: 'બુધવાર અથવા એકાદશી • કુબેર ખૂણો (ઉત્તર દિશા)',
        auspiciousTimingEn: 'Wednesday or Ekadashi • Kuber Corner (North Direction)',
        targetDegree: 210,
        houseHi: 'दशम व एकादश भाव (कर्म व धन लाभ)',
        houseGu: 'દશમ અને એકાદશ ભાવ (કર્મ અને ધન લાભ)',
        houseEn: '10th & 11th Houses (Career & Prosperity)'
      },
      {
        readingNumber: 2,
        phaseTitleHi: 'षष्ठेश-अष्टमेश की धन भाव पर कुदृष्टि (बढ़ता कर्ज व फंसा हुआ धन)',
        phaseTitleGu: 'ષષ્ઠેશ-અષ્ટમેશની ધન ભાવ પર અશુભ દ્રષ્ટિ (વધતું દેવું અને ફસાયેલા નાણાં)',
        phaseTitleEn: '6th & 8th Lord Aspect on Wealth House (Mounting Debt & Stuck Funds)',
        doshHi: 'षष्ठेश व अष्टमेश की धन भाव पर अशुभ दृष्टि (कर्ज पर कर्ज चढ़ना, फंसा हुआ पैसा वापस न आना व लेनदारों का मानसिक दबाव)',
        doshGu: 'ષષ્ઠેશ અને અષ્ટમેશની ધન ભાવ પર અશુભ દ્રષ્ટિ (દેવા પર દેવું વધવું, ફસાયેલા નાણાં પાછા ન આવવા અને ચિંતા)',
        doshEn: '6th & 8th House Heavy Pressure on 2nd House of Wealth (Spiraling loan interest, stuck recoverables, lender stress)',
        impactHi: 'कमाई का 80% हिस्सा ब्याज और कर्ज चुकाने में चले जाना, अपनी पूंजी ब्लॉक हो जाना और बचत शून्य होना।',
        impactGu: 'કમાણીનો મોટો ભાગ વ્યાજ અને હપ્તામાં જતો રહેવો, મૂડી ફસાઈ જવી અને બચત શૂન્ય રહેવી.',
        impactEn: 'Income drained by monthly loan repayments, hard-earned capital locked up, and zero financial cushion.',
        remedyHi: 'माँ नागदेवी ऋणमुक्तेश्वर महायज्ञ एवं श्री सूक्त संपूटित तांबे के नाग पर आहुति।',
        remedyGu: 'માં નાગદેવી ઋણમુક્તેશ્વર મહાયજ્ઞ અને શ્રી સૂક્ત સંપુટિત તાંબાના નાગ પર આહુતિ.',
        remedyEn: 'Maa Naagdevi Rina-Mukteshwar Maha Yagya & Sacred Copper Naga Debt Relief Abhishek.',
        mantra: '॥ ॐ ऋणमुક્તેશ્વરાય નમઃ • ॐ મહાલક્ષ્મ્યૈ ચ વિદ્મહે ॥',
        auspiciousTimingHi: 'मंगलवार प्रातः काल • दक्षिण-पूर्व (आग्नेय कोण)',
        auspiciousTimingGu: 'મંગળવાર સવાર • અગ્નિ ખૂણો (દક્ષિણ-પૂર્વ)',
        auspiciousTimingEn: 'Tuesday Dawn • South-East Agneya Corner',
        targetDegree: 180,
        houseHi: 'षष्ठ व द्वितीय भाव (ऋण मुक्ति व संचित धन)',
        houseGu: 'ષષ્ઠ અને દ્વિતીય ભાવ (દેવા મુક્તિ અને સંચિત ધન)',
        houseEn: '6th & 2nd Houses (Debt Freedom & Savings)'
      },
      {
        readingNumber: 3,
        phaseTitleHi: 'सूर्य-राहु ग्रहण दोष (बॉस की नाराजगी, प्रमोशन में रुकावट व षड्यंत्र)',
        phaseTitleGu: 'સૂર્ય-રાહુ ગ્રહણ દોષ (પ્રમોશનમાં રુકાવટ અને નોકરીમાં અસુરક્ષા)',
        phaseTitleEn: 'Sun-Rahu Eclipse Grahan (Job Insecurity & Blocked Promotion)',
        doshHi: 'सूर्य-राहु ग्रहण दोष एवं तृतीय भाव पर शनि की ढैया (प्रमोशन रुकना, नौकरी छूटने का भय व सहकर्मियों की ईर्ष्या)',
        doshGu: 'સૂર્ય-રાહુ ગ્રહણ દોષ અને ત્રીજા ભાવ પર શનિનો પ્રભાવ (પ્રમોશન અટકવું, નોકરીની ચિંતા અને ઈર્ષ્યા)',
        doshEn: 'Sun-Rahu Solar Eclipse Affliction on 10th House (Office politics, unfairly passed over for promotion, job threat)',
        impactHi: 'पूरी योग्यता होने पर भी जूनियर को पदोन्नति मिल जाना, बॉस का अनावश्यक गुस्सा और कार्यस्थल पर तनाव।',
        impactGu: 'યોગ્યતા હોવા છતાં પ્રમોશન ન મળવું, ઉપરી અધિકારીનો અણગમો અને નોકરીમાં ચિંતા.',
        impactEn: 'Overlooked for promotions despite top performance, toxic workplace politics, and constant job anxiety.',
        remedyHi: 'माँ नागदेवी आदित्य-हृदय स्तोत्र संपुट एवं सिद्ध तांबे का सूर्य-नाग लॉकेट।',
        remedyGu: 'માં નાગદેવી આદિત્ય-હૃદય સ્તોત્ર સંપુટ અને સિદ્ધ સૂર્ય-નાગ સુરક્ષા પેન્ડન્ટ.',
        remedyEn: 'Maa Naagdevi Aditya Hridayam Vedic Stotra & Consecrated Surya-Naga Success Locket.',
        mantra: '॥ ॐ घृणिः सूर्याय नमः • ॐ नागदेव्यै नमः ॥',
        auspiciousTimingHi: 'रविवार सूर्योदय समय • पूर्व दिशा',
        auspiciousTimingGu: 'રવિવાર સૂર્યોદય સમય • પૂર્વ દિશા',
        auspiciousTimingEn: 'Sunday Sunrise • East Direction',
        targetDegree: 270,
        houseHi: 'तृतीय व दशम भाव (साहस, यश व मान-सम्मान)',
        houseGu: 'તૃતીય અને દશમ ભાવ (સાહસ, યશ અને પ્રતિષ્ઠા)',
        houseEn: '3rd & 10th Houses (Career Status & Recognition)'
      }
    ]
  },
  {
    id: 'protection',
    icon: '🛡️',
    titleHi: 'गुप्त शत्रु, नज़र दोष व नकारात्मक ऊर्जा',
    titleGu: 'ગુપ્ત શત્રુ, નજર દોષ અને નકારાત્મક શક્તિ',
    titleEn: 'Evil Eye, Hidden Enemies & Negative Aura',
    readings: [
      {
        readingNumber: 1,
        phaseTitleHi: 'अष्टम भाव पर तांत्रिक तरंगें व तीव्र नज़र दोष (अचानक भारीपन व बीमारी)',
        phaseTitleGu: 'અષ્ટમ ભાવ પર નકારાત્મક તરંગો અને ભારે નજર દોષ (અચાનક બીમારી)',
        phaseTitleEn: '8th House Toxic Nazar & Heavy Negative Aura (Sudden Illness)',
        doshHi: 'तीव्र ईर्ष्या जनित नज़र दोष, केतु की विपरीत छाया एवं अष्टम भाव पर अशुभ तांत्रिक तरंगों का प्रभाव',
        doshGu: 'ભારે નજર દોષ, કેતુની અશુભ છાયા અને અષ્ટમ ભાવ પર નકારાત્મક તાંત્રિક તરંગોની અસર',
        doshEn: 'Toxic Evil Eye (Nazar), Ketu Shadow & 8th House Dark Energy Vibrations',
        impactHi: 'घर में अचानक भारीपन, बार-बार बीमार पड़ना, बने-बनाए काम बिगड़ना और अज्ञात भय बने रहना।',
        impactGu: 'ઘરમાં અચાનક ભારેપણું, વારંવાર બીમારી, બનતા કામ બગડવા અને મનમાં સતત અજાણ્યો ભય.',
        impactEn: 'Heavy domestic aura, recurring unexplained illness, deals collapsing at final moments, and persistent dread.',
        remedyHi: 'माँ नागदेवी सिद्ध महाकाली खड्गमाला भैरव हवन एवं त्रिशूल रक्षा कवच का अभिमंत्रण।',
        remedyGu: 'માં નાગદેવી સિદ્ધ મહાકાળી ખડ્ગમાલા ભૈરવ હવન અને રક્ષા કવચ વિધિ.',
        remedyEn: 'Maa Naagdevi Mahakali Khadgamala Bhairav Havan & Sacred Trishul Shield Purification.',
        mantra: '॥ ॐ ह्रीं बटुकाय आपदुद्धारणाय कुरु कुरु बटुकाय ह्रीं ॐ स्वाहा ॥',
        auspiciousTimingHi: 'शनिवार / मंगलवार की रात्रि • दक्षिण-पश्चिम दिशा (नैऋत्य कोण)',
        auspiciousTimingGu: 'શનિવાર / મંગળવાર રાત્રિ • નૈઋત્ય ખૂણો (દક્ષિણ-પશ્ચિમ)',
        auspiciousTimingEn: 'Tuesday or Saturday Twilight • South-West Direction',
        targetDegree: 210,
        houseHi: 'अष्टम भाव (संकट व गुप्त बाधा निवारण)',
        houseGu: 'અષ્ટમ ભાવ (સંકટ અને ગુપ્ત બાધા નિવારણ)',
        houseEn: '8th House (Protection & Hidden Relief)'
      },
      {
        readingNumber: 2,
        phaseTitleHi: 'शत्रु जनित बंधन दोष व चंद्र-राहु ग्रहण पीड़ा (अनिद्रा व मानसिक बेचैनी)',
        phaseTitleGu: 'શત્રુ બંધન દોષ અને ચંદ્ર-રાહુ ગ્રહણ પીડા (અનિદ્રા અને બેચેની)',
        phaseTitleEn: 'Hidden Enemy Bandhan & Rahu-Moon Psychic Distress (Insomnia)',
        doshHi: 'शत्रु जनित बंधन दोष एवं चंद्र-राहु ग्रहण पीड़ा (अचानक रात को 2-4 बजे नींद खुलना, बेचैनी व शरीर में ऊर्जा की भारी कमी)',
        doshGu: 'શત્રુ બંધન દોષ અને ચંદ્ર-રાહુ ગ્રહણ પીડા (રાત્રે અચાનક ઊંઘ ઊડી જવી, બેચેની અને શરીરમાં કમજોરી)',
        doshEn: 'Subconscious Negative Bondage & Moon-Rahu Eclipse Anxiety (Waking up between 2-4 AM with pounding heart, exhaustion)',
        impactHi: 'चिकित्सकीय रिपोर्ट सामान्य आने पर भी शरीर में दर्द रहना, मन में लगातार नकारात्मक विचार चलना और घबराहट।',
        impactGu: 'તબીબી રિપોર્ટ નોર્મલ હોવા છતાં શરીરમાં કળતર રહેવી, સતત નકારાત્મક વિચારો અને ડર લાગવો.',
        impactEn: 'All medical checks normal yet experiencing chronic weakness, negative spirals, and nocturnal anxiety.',
        remedyHi: 'माँ नागदेवी सिद्ध अघोर रक्षा पोटली एवं 21 सिद्ध सरसो दाना नज़र काट विधान।',
        remedyGu: 'માં નાગદેવી સિદ્ધ અઘોર રક્ષા પોટલી અને રાય-સરસવ નજર કાપ વિધાન.',
        remedyEn: 'Maa Naagdevi Sanctified Aghor Raksha Potli & 21-Grains Sacred Negative Energy Cleansing.',
        mantra: '॥ ॐ नमः शिवाय • ॐ क्रां क्रीं क्रौं सः भौमाय नमः ॥',
        auspiciousTimingHi: 'शनिवार चौघड़िया • पश्चिम दिशा',
        auspiciousTimingGu: 'શનિવાર ચોઘડિયા • પશ્ચિમ દિશા',
        auspiciousTimingEn: 'Saturday Sacred Choghadiya • West Direction',
        targetDegree: 330,
        houseHi: 'द्वादश भाव (अनिद्रा व गुप्त व्याधि निवारण)',
        houseGu: 'દ્વાદશ ભાવ (અનિદ્રા અને ગુપ્ત પીડા નિવારણ)',
        houseEn: '12th House (Sleep Serenity & Psychic Cleansing)'
      },
      {
        readingNumber: 3,
        phaseTitleHi: 'स्थान दोष व व्यावसायिक स्थल पर नकारात्मक दबाव (दुकान/घर में अशांति)',
        phaseTitleGu: 'સ્થાન દોષ અને દુકાન/ઘરમાં નકારાત્મક દબાણ (ચીડિયાપણું)',
        phaseTitleEn: 'Spatial Vastu Negativity & Commercial Shop Blockage',
        doshHi: 'स्थान दोष व अज्ञात ऊपरी नकारात्मक दबाव (दुकान या घर में कदम रखते ही चिड़चिड़ापन, ग्राहकों का पलट जाना व कलह)',
        doshGu: 'જગ્યા દોષ અને નકારાત્મક ઊર્જા (દુકાન કે ઘરમાં પ્રવેશતાં જ ચિડચિડાટ, ગ્રાહકોનું પાછું વળી જવું)',
        doshEn: 'Premises Energy Depletion & Stagnant Vastu Currents (Walk-in clients leaving abruptly, oppressive room vibe)',
        impactHi: 'दुकान खोलते ही ग्राहकों का न आना, कर्मचारियों में आपस में झगड़ा और घर में शांति का अभाव।',
        impactGu: 'દુકાને ગ્રાહકો ન આવવા, સ્ટાફમાં મતભેદ અને ઘરમાં તણાવ રહેવો.',
        impactEn: 'Store footfall vanishing inexplicably, employees constantly arguing, and heavy atmosphere.',
        remedyHi: 'माँ नागदेवी महा-सुरक्षा वास्तु कीलन एवं सिद्ध गुग्गल-लोबान धूप विसर्जन।',
        remedyGu: 'માં નાગદેવી મહા-સુરક્ષા વાસ્તુ કીલન અને સિદ્ધ ધૂપ વિસર્જન વિધિ.',
        remedyEn: 'Maa Naagdevi Vastu Perimeter Fortification & Sacred Guggal-Loban Consecrated Fumigation.',
        mantra: '॥ ॐ नमो भगवते वासुदेवाय नमः • ॐ दुं दुर्गायै नमः ॥',
        auspiciousTimingHi: 'अमावस्या अथवा मंगलवार संध्या • चारों कोने',
        auspiciousTimingGu: 'અમાસ અથવા મંગળવાર સાંજ • ચારેય ખૂણા',
        auspiciousTimingEn: 'Amavasya or Tuesday Dusk • 4 Property Corners',
        targetDegree: 120,
        houseHi: 'चतुर्थ व अष्टम भाव (स्थान शुद्धि व सुरक्षा)',
        houseGu: 'ચતુર્થ અને અષ્ટમ ભાવ (સ્થાન શુદ્ધિ અને રક્ષા)',
        houseEn: '4th & 8th Houses (Premises Purification)'
      }
    ]
  },
  {
    id: 'family',
    icon: '🌟',
    titleHi: 'संतान सुख, परिवार शांति व स्वास्थ्य रक्षा',
    titleGu: 'સંતાન સુખ, પારિવારિક શાંતિ અને આરોગ્ય',
    titleEn: 'Child Blessing & Family Well-being',
    readings: [
      {
        readingNumber: 1,
        phaseTitleHi: 'कालसर्प / नाग दोष प्रभाव (संतान सुख में अनपेक्षित विलंब)',
        phaseTitleGu: 'કાલસર્પ / નાગ દોષ પ્રભાવ (સંતાન સુખમાં અણધાર્યો વિલંબ)',
        phaseTitleEn: 'Kaal Sarp / Naga Dosha (Unexplained Delay in Progeny)',
        doshHi: 'नाग दोष (सर्प दोष), संतान भाव पर छाया ग्रहों का आच्छादन अथवा कुलदेवी पूजन में अनजानी चूक',
        doshGu: 'નાગ દોષ (સર્પ દોષ), સંતાન ભાવ પર છાયાગ્રહનો પ્રભાવ અથવા કુળદેવી પૂજનમાં અજાણતાં ક્ષતિ',
        doshEn: 'Kaal Sarp / Naga Dosha on 5th House & Ancestral Pitra Impediment',
        impactHi: 'संतान प्राप्ति में अनपेक्षित देरी, बच्चों के भविष्य व पढ़ाई की चिंता और पारिवारिक अशांति।',
        impactGu: 'સંતાન સુખમાં અણધારી રુકાવટ, બાળકના ભવિષ્યની ચિંતા અને ઘરમાં માનસિક તણાવ.',
        impactEn: 'Unexpected hindrance in progeny blessings, child progress anxiety, and domestic strain.',
        remedyHi: 'शेषनाग संतान गोपाल महापूजन एवं नवनाग शांति महा संकल्प आहुति।',
        remedyGu: 'શેષનાગ સંતાન ગોપાલ મહાપૂજન અને નવનાગ શાંતિ મહાસંકલ્પ આહુતિ.',
        remedyEn: 'Sheshnaag Santan Gopal Maha Puja & Sacred Nav-Naag Peace Invocation.',
        mantra: '॥ ॐ देवकीसुत गोविंद वासुदेव जगत्पते देहि मे तनयं कृष्ण त्वामहं शरणं गतः ॥',
        auspiciousTimingHi: 'रविवार अथवा पूर्णिमा • ब्रह्म मुहूर्त (प्रातः 4-6 बजे)',
        auspiciousTimingGu: 'રવિવાર અથવા પૂનમ • બ્રહ્મ મુહૂર્ત (સવારે 4-6 વાગ્યે)',
        auspiciousTimingEn: 'Sunday or Purnima • Brahma Muhurta (Dawn)',
        targetDegree: 120,
        houseHi: 'पंचम व नवम भाव (संतान व पूर्व पुण्य)',
        houseGu: 'પંચમ અને નવમ ભાવ (સંતાન અને પૂર્વ પુણ્ય)',
        houseEn: '5th & 9th Houses (Progeny & Divine Grace)'
      },
      {
        readingNumber: 2,
        phaseTitleHi: 'पितृ दोष व कुलदेवी असंतोष संकेत (मांगलिक कार्यों में विघ्न व वंश बाधा)',
        phaseTitleGu: 'પિતૃ દોષ અને કુળદેવી અસંતોષ સંકેત (માંગલિક કાર્યોમાં વિઘ્ન)',
        phaseTitleEn: 'Pitra Dosha & Ancestral Blessing Blockage (Family Line Obstacles)',
        doshHi: 'नवम भाव में केतु-सूर्य युति से निर्मित पितृ दोष (परिवार में वंश वृद्धि में अड़चन व मांगलिक कार्यों में लगातार विघ्न)',
        doshGu: 'નવમ ભાવમાં કેતુ-સૂર્ય યુતિથી બનેલો પિતૃ દોષ (માંગલિક કાર્યોમાં અડચણો અને વંશ વૃદ્ધિમાં રુકાવટ)',
        doshEn: '9th House Sun-Ketu Pitra Impediment (Repeated hurdles during auspicious celebrations, lineage stagnation)',
        impactHi: 'घर में कोई भी शुभ कार्य शुरू होते ही कोई न कोई बाधा आ जाना, स्वास्थ्य खराब होना और मन भारी रहना।',
        impactGu: 'ઘરમાં કોઈ પણ શુભ પ્રસંગ શરૂ થતાં જ અડચણ આવી જવી, માંદગી અને ચિંતા થવી.',
        impactEn: 'Sudden emergencies interrupting family milestones, repetitive health dips, and ancestral unrest.',
        remedyHi: 'माँ नागदेवी पितृ-तृप्ति नारायण नागबली संकल्प एवं कुलदेवी आशीर्वाद पूजा।',
        remedyGu: 'માં નાગદેવી પિતૃ-તૃપ્તિ નારાયણ નાગબલી સંકલ્પ અને કુળદેવી આશીર્વાદ પૂજન.',
        remedyEn: 'Maa Naagdevi Pitra Tripti Narayan Nagabali Resolution & Kuldevi Divine Blessing Rite.',
        mantra: '॥ ॐ पितृभ्यः स्वधायिभ्यः स्वधा नमः • ॐ नमः शिवाय ॥',
        auspiciousTimingHi: 'अमावस्या अथवा रविवार मध्याह्न • दक्षिण दिशा',
        auspiciousTimingGu: 'અમાસ અથવા રવિવાર બપોર • દક્ષિણ દિશા',
        auspiciousTimingEn: 'Amavasya or Sunday Midday • South Direction',
        targetDegree: 240,
        houseHi: 'नवम भाव (पितृ व धर्म स्थान)',
        houseGu: 'નવમ ભાવ (પિતૃ અને ધર્મ સ્થાન)',
        houseEn: '9th House (Ancestral Peace & Fortune)'
      },
      {
        readingNumber: 3,
        phaseTitleHi: 'बुध-राहु जड़त्व योग (संतान का चिड़चिड़ापन, पढ़ाई से भटकाव व गलत संगति)',
        phaseTitleGu: 'બુધ-રાહુ જડત્વ યોગ (બાળકનું ચીડિયાપણું, અભ્યાસમાં એકાગ્રતાનો અભાવ)',
        phaseTitleEn: 'Mercury-Rahu Affliction (Child Restlessness & Academic Distraction)',
        doshHi: 'बुध-राहु जड़त्व योग एवं गुरु की निर्बलता (संतान का तीखा चिड़चिड़ापन, पढ़ाई से ध्यान हटना व गलत संगति का भय)',
        doshGu: 'બુધ-રાહુ જડત્વ યોગ અને ગુરુની નબળાઈ (બાળકનો ગુસ્સો, ભણવામાં ચિત્ત ન ચોંટવું અને ખોટી સોબતનો ભય)',
        doshEn: 'Mercury-Rahu Affliction on 5th Intellect House (Hyper-restlessness, screen addiction, loss of study focus)',
        impactHi: 'बच्चे का बात-बात पर जिद करना, बड़ों का अनादर, परीक्षा में एकाग्रता खोना और भविष्य को लेकर माता-पिता की चिंता।',
        impactGu: 'બાળકનું વાતવાતમાં જિદ્દ કરવી, વડીલોની અવગણના અને પરીક્ષામાં ધ્યાન ન રહેવું.',
        impactEn: 'Stubborn rebellious behavior, loss of academic retention, and parents feeling helpless.',
        remedyHi: 'माँ नागदेवी मेधा-सरस्वती संपुटित रक्षा तावीज एवं चांदी के नाग पर दूध अभिषेक।',
        remedyGu: 'માં નાગદેવી મેધા-સરસ્વતી સંપુટિત રક્ષા તાવીજ અને ચાંદીના નાગ પર દૂધ અભિષેક.',
        remedyEn: 'Maa Naagdevi Medha Saraswati Consecrated Amulet & Sacred Silver Naga Milk Abhishek.',
        mantra: '॥ ॐ ऐं सरस्वत्यै ऐं नमः • ॐ गं गणपतये नमः ॥',
        auspiciousTimingHi: 'बुधवार शुक्ल पक्ष • उत्तर-पूर्व दिशा',
        auspiciousTimingGu: 'બુધવાર સુદ પક્ષ • ઉત્તર-પૂર્વ દિશા',
        auspiciousTimingEn: 'Wednesday Shukla Paksha • North-East Direction',
        targetDegree: 60,
        houseHi: 'पंचम व तृतीय भाव (बुद्धि, एकाग्रता व संस्कार)',
        houseGu: 'પંચમ અને તૃતીય ભાવ (બુદ્ધિ, એકાગ્રતા અને સંસ્કાર)',
        houseEn: '5th & 3rd Houses (Intellect & Wisdom)'
      }
    ]
  }
];

// 12 Astrological Petals labels around the 360-degree perimeter
const PETAL_SYMBOLS = [
  { name: '1. तनु', glyph: '♈', house: '1st', angle: 0 },
  { name: '2. धन', glyph: '♉', house: '2nd', angle: 30 },
  { name: '3. सहज', glyph: '♊', house: '3rd', angle: 60 },
  { name: '4. सुख', glyph: '♋', house: '4th', angle: 90 },
  { name: '5. सुत', glyph: '♌', house: '5th', angle: 120 },
  { name: '6. रिपु', glyph: '♍', house: '6th', angle: 150 },
  { name: '7. जाया', glyph: '♎', house: '7th', angle: 180 },
  { name: '8. मृत्यु', glyph: '♏', house: '8th', angle: 210 },
  { name: '9. धर्म', glyph: '♐', house: '9th', angle: 240 },
  { name: '10. कर्म', glyph: '♑', house: '10th', angle: 270 },
  { name: '11. आय', glyph: '♒', house: '11th', angle: 300 },
  { name: '12. व्यय', glyph: '♓', house: '12th', angle: 330 }
];

export const NaagManiOracle: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedId, setSelectedId] = useState<string>('love');
  const [readingIndices, setReadingIndices] = useState<Record<string, number>>({
    love: 0,
    marriage: 0,
    dispute: 0,
    career: 0,
    protection: 0,
    family: 0
  });
  const [spinCount, setSpinCount] = useState<number>(0);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [revealed, setRevealed] = useState<boolean>(false);
  const [wheelRotation, setWheelRotation] = useState<number>(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const currentProblem = ORACLE_PROBLEMS.find((p) => p.id === selectedId) || ORACLE_PROBLEMS[0];
  const activeReadingIndex = readingIndices[selectedId] ?? 0;
  const currentReading = currentProblem.readings[activeReadingIndex] || currentProblem.readings[0];

  const handleSelectProblem = (id: string) => {
    setSelectedId(id);
    setRevealed(false);
  };

  const handleSpinOracle = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setRevealed(false);

    // Advance to the NEXT dynamic reading for this problem on every spin!
    const nextReadingIndex = (activeReadingIndex + 1) % currentProblem.readings.length;
    setReadingIndices((prev) => ({ ...prev, [selectedId]: nextReadingIndex }));
    setSpinCount((prev) => prev + 1);

    const targetReading = currentProblem.readings[nextReadingIndex];

    // Haptic feedback on mobile devices if available
    try {
      if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
        navigator.vibrate([40, 60, 40]);
      }
    } catch {
      // safe fallback
    }

    // Determine target rotation: 5 full rotations (1800deg) + the target degree of the specific reading + slight organic offset
    const currentBase = Math.floor(wheelRotation / 360) * 360;
    const spins = 1800; // 5 full spins
    const targetAngle = targetReading.targetDegree;
    const organicOffset = (Math.random() * 8) - 4; // subtle +/-4 degree realism
    const nextRotation = currentBase + spins + (360 - targetAngle) + organicOffset;

    setWheelRotation(nextRotation);

    // Complete rotation after 3.6 seconds and smoothly reveal result
    setTimeout(() => {
      setIsSpinning(false);
      setRevealed(true);

      try {
        if (typeof window !== 'undefined' && 'navigator' in window && 'vibrate' in navigator) {
          navigator.vibrate([80, 50, 120]);
        }
      } catch {
        // safe fallback
      }

      // Smoothly scroll down to result card on mobile screens
      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 250);
    }, 3600);
  };

  const getProblemTitle = (item: ProblemCategory) => {
    if (lang === 'gu-en') return item.titleGu;
    if (lang === 'en') return item.titleEn;
    return item.titleHi;
  };

  const getPhaseTitle = (item: ProblemReading) => {
    if (lang === 'gu-en') return item.phaseTitleGu;
    if (lang === 'en') return item.phaseTitleEn;
    return item.phaseTitleHi;
  };

  const getDoshText = (item: ProblemReading) => {
    if (lang === 'gu-en') return item.doshGu;
    if (lang === 'en') return item.doshEn;
    return item.doshHi;
  };

  const getImpactText = (item: ProblemReading) => {
    if (lang === 'gu-en') return item.impactGu;
    if (lang === 'en') return item.impactEn;
    return item.impactHi;
  };

  const getRemedyText = (item: ProblemReading) => {
    if (lang === 'gu-en') return item.remedyGu;
    if (lang === 'en') return item.remedyEn;
    return item.remedyHi;
  };

  const getTimingText = (item: ProblemReading) => {
    if (lang === 'gu-en') return item.auspiciousTimingGu;
    if (lang === 'en') return item.auspiciousTimingEn;
    return item.auspiciousTimingHi;
  };

  const getHouseText = (item: ProblemReading) => {
    if (lang === 'gu-en') return item.houseGu;
    if (lang === 'en') return item.houseEn;
    return item.houseHi;
  };

  // Pre-filled WhatsApp message with dynamically selected Oracle result details
  const waProblem = getProblemTitle(currentProblem);
  const waPhase = getPhaseTitle(currentReading);
  const waDosh = getDoshText(currentReading);
  const waRemedy = getRemedyText(currentReading);
  const readingNo = currentReading.readingNumber;

  const waMessage =
    lang === 'gu-en'
      ? `પ્રણામ પૂજ્ય બાબાજી, મેં નાગમણી ભાગ્ય ચક્રથી મારી સમસ્યા (${waProblem}) તપાસી છે.\n\nપ્રકટ થયેલ સૂક્ષ્મ સંકેત #${readingNo}: ${waPhase}\nઓળખાયેલ ગ્રહ દોષ: ${waDosh}\nસિદ્ધ પીઠ ગુપ્ત ઉપાય: ${waRemedy}\n\nકૃપા કરીને આ ઉપાયની સંપૂર્ણ સિદ્ધ વિધિ અને માર્ગદર્શન આપો.\nમારું નામ:`
      : lang === 'en'
      ? `Pranam Baba Ji, I consulted the Sacred Naag-Mani Oracle regarding (${waProblem}).\n\nRevealed Hora Reading #${readingNo}: ${waPhase}\nIdentified Planetary Dosha: ${waDosh}\nPrescribed Siddha Peeth Remedy: ${waRemedy}\n\nPlease guide me on the complete sacred procedure and Vedic resolution.\nMy Name:`
      : `प्रणाम पूज्य बाबा जी, मैंने नागमणि भाग्य चक्र से अपनी समस्या (${waProblem}) जाँची है।\n\nप्रकट हुआ सूक्ष्म प्रश्न गोचर #${readingNo}: ${waPhase}\nपहचाना गया ग्रह दोष: ${waDosh}\nसिद्ध पीठ गुप्त उपाय: ${waRemedy}\n\nकृपया इस उपाय की संपूर्ण सिद्ध विधि और मार्गदर्शन प्रदान करें।\nमेरा नाम:`;

  const waUrl = `https://wa.me/919714127309?text=${encodeURIComponent(waMessage)}`;

  return (
    <section
      id="naag-mani-oracle"
      className="py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#fdfcf7] via-[#fffbeb] to-[#fdfcf7]"
    >
      {/* Background Sacred Aura Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-gradient-to-tr from-amber-200/30 via-emerald-100/30 to-amber-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 shadow-xs mb-3.5">
            <span className="text-base animate-pulse">🐍</span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-amber-950 uppercase">
              {lang === 'gu-en'
                ? 'અલૌકિક સિદ્ધ પીઠ દર્શન • જીવંત નાગમણી પ્રશ્ન ચક્ર'
                : lang === 'en'
                ? 'Sacred Siddha Peeth • Dynamic Naag-Mani Oracle'
                : 'दुर्लभ सिद्ध पीठ दर्शन • जीवंत नागमणि प्रश्न चक्र'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-[#2a2203] tracking-tight heading-mystic mb-3 text-balance">
            {lang === 'gu-en' ? (
              <>
                દિવ્ય <span className="text-amber-700 font-serif">‘નાગમણી ભાગ્ય ચક્ર’</span>
              </>
            ) : lang === 'en' ? (
              <>
                Divine <span className="text-amber-700 font-serif">Sacred Naag-Mani Oracle</span>
              </>
            ) : (
              <>
                दिव्य <span className="text-amber-700 font-serif">‘नागमणि भाग्य चक्र’</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#544607] leading-relaxed max-w-2xl mx-auto px-2 sm:px-0 text-balance">
            {lang === 'gu-en'
              ? 'માં નાગદેવી સિદ્ધ પીઠનું 12-દળોનું ચમત્કારી વૈદિક ચક્ર — આપની સમસ્યાનું સ્મરણ કરી મધ્યમાં સ્થિત નાગમણીને સ્પર્શ કરો. દરેક સ્પર્શે ચક્ર આપના સૂક્ષ્મ ગ્રહ સંકેતો પ્રગટ કરશે.'
              : lang === 'en'
              ? 'Sacred 12-petal Vedic Chakra of Shri Maa Naagdevi Siddha Peeth. Touch the glowing Naag-Mani in the center; each spin reveals deep astrological layers of your worry.'
              : 'माँ नागदेवी सिद्ध पीठ का 12-दलों का वैदिक चक्र — अपनी समस्या का ध्यान कर बीच में चमकती "नागमणि" को स्पर्श करें। हर स्पर्श पर चक्र सूक्ष्म ग्रह गोचर व गुप्त उपाय प्रकट करता है।'}
          </p>

          {/* Dynamic Prashna Badge */}
          <div className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300/80 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs max-w-full">
            <RefreshCw className="w-3.5 h-3.5 text-emerald-700 animate-spin-slow shrink-0" />
            <span className="leading-snug">
              {lang === 'gu-en'
                ? 'દરેક સ્પર્શે નવું પ્રશ્ન કુંડળી વિશ્લેષણ પ્રગટ થશે'
                : lang === 'en'
                ? 'Every spin manifests a unique Vedic Prashna reading'
                : 'हर चक्र-स्पर्श पर नया सूक्ष्म प्रश्न गोचर व सिद्ध उपाय'}
            </span>
          </div>
        </div>

        {/* Step 1: Select Worry / Intention */}
        <div className="mb-8">
          <div className="flex items-center justify-between gap-2 mb-3 px-1">
            <span className="text-xs sm:text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-amber-600 text-white inline-flex items-center justify-center text-[11px] font-bold">1</span>
              {lang === 'gu-en'
                ? 'પહેલાં આપની મુખ્ય સમસ્યા પસંદ કરો:'
                : lang === 'en'
                ? 'Select Your Core Life Concern:'
                : 'सर्वप्रथम अपनी मुख्य समस्या अथवा मनोकामना चुनें:'}
            </span>
            <span className="text-[11px] text-amber-800/80 font-medium hidden sm:inline">
              {lang === 'gu-en' ? 'ગોપનીય અને પવિત્ર વિધિ' : lang === 'en' ? '100% Confidential & Sacred' : 'शत-प्रतिशत गोपनीय व पवित्र'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
            {ORACLE_PROBLEMS.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectProblem(item.id)}
                  disabled={isSpinning}
                  className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-600 shadow-md font-bold ring-2 ring-amber-400/50 scale-[1.02]'
                      : 'bg-white/90 hover:bg-amber-50 text-[#2a2203] border-amber-200/80 font-medium hover:border-amber-400'
                  } ${isSpinning ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="text-2xl mb-1.5">{item.icon}</div>
                  <div className="text-xs sm:text-xs leading-snug">
                    {getProblemTitle(item)}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: The Sacred 12-Spoke Chakra Interactive Stage */}
        <div className="bg-white/95 rounded-2xl sm:rounded-3xl border-2 border-amber-300/80 shadow-xl p-4 sm:p-8 relative overflow-hidden">
          <div className="text-center text-xs font-bold text-amber-900/80 uppercase tracking-widest mb-1">
            ॥ ॐ नवकुल नागदेव्यै नमः ॥
          </div>

          <div className="flex flex-col items-center">
            {/* Guide Text */}
            <div className="mb-4 sm:mb-6 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {lang === 'gu-en'
                  ? 'ચક્ર મધ્યે સ્થાપિત દિવ્ય નાગમણી પર ક્લિક કરો (સ્પર્શ કરો)'
                  : lang === 'en'
                  ? 'Click / Tap the Glowing Naag-Mani in the Center'
                  : 'नीचे चक्र के केंद्र में स्थित चमकती नागमणि को स्पर्श करें'}
              </span>
            </div>

            {/* The Chakra Stage */}
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] flex items-center justify-center select-none my-2">
              {/* Outer Golden Halo Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-amber-300/60 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-2 sm:inset-3 rounded-full border-2 border-amber-400/40 animate-spin-reverse-slow pointer-events-none" />

              {/* Fixed Top Oracle Indicator Pointer */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[16px] border-t-amber-600 drop-shadow-md" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 ring-2 ring-white -mt-1 shadow-xs" />
              </div>

              {/* Rotating 12-Spoke Vedic Wheel */}
              <div
                className="relative w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] rounded-full shadow-inner transition-transform duration-[3600ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{
                  transform: `rotate(${wheelRotation}deg)`,
                  willChange: 'transform'
                }}
              >
                {/* SVG Mandala Graphic */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full drop-shadow-md"
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="chakraBaseGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fffbeb" />
                      <stop offset="70%" stopColor="#fef3c7" />
                      <stop offset="100%" stopColor="#fde68a" />
                    </radialGradient>
                    <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ca8a04" />
                      <stop offset="50%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#854d0e" />
                    </linearGradient>
                  </defs>

                  {/* Base Circle */}
                  <circle cx="200" cy="200" r="192" fill="url(#chakraBaseGrad)" stroke="url(#goldRimGrad)" strokeWidth="6" />
                  <circle cx="200" cy="200" r="170" fill="none" stroke="#d97706" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="130" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />

                  {/* 12 Radiant Sector Dividers */}
                  {PETAL_SYMBOLS.map((_, index) => {
                    const angle = index * 30;
                    const rad = (angle * Math.PI) / 180;
                    const x2 = 200 + 192 * Math.cos(rad);
                    const y2 = 200 + 192 * Math.sin(rad);
                    return (
                      <line
                        key={index}
                        x1="200"
                        y1="200"
                        x2={x2}
                        y2={y2}
                        stroke="#d97706"
                        strokeWidth="1.5"
                        strokeOpacity="0.45"
                      />
                    );
                  })}

                  {/* 12 Sacred Petal Texts & Astrological Signs */}
                  {PETAL_SYMBOLS.map((item, index) => {
                    const angle = index * 30 + 15; // center in sector
                    const rad = (angle * Math.PI) / 180;
                    // Text position
                    const textDist = 155;
                    const tx = 200 + textDist * Math.cos(rad);
                    const ty = 200 + textDist * Math.sin(rad);

                    // Glyph position
                    const glyphDist = 178;
                    const gx = 200 + glyphDist * Math.cos(rad);
                    const gy = 200 + glyphDist * Math.sin(rad);

                    return (
                      <g key={item.name} transform={`rotate(${angle}, ${tx}, ${ty})`}>
                        <text
                          x={tx}
                          y={ty}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="#78350f"
                          fontSize="11"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          {item.name}
                        </text>
                        <text
                          x={gx}
                          y={gy}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="#b45309"
                          fontSize="13"
                          fontWeight="bold"
                        >
                          {item.glyph}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* CENTER PIECE: THE RADIANT SACRED NAAG-MANI (Interactive Trigger) */}
              <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <button
                  type="button"
                  onClick={handleSpinOracle}
                  disabled={isSpinning}
                  aria-label="Touch Sacred Naag-Mani to consult Oracle"
                  className={`group relative rounded-full w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-amber-400 ${
                    isSpinning ? 'scale-95' : 'hover:scale-105 active:scale-95'
                  }`}
                >
                  {/* Outer Pulsing Emerald Ring */}
                  <div className="absolute -inset-2.5 sm:-inset-3 rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 opacity-70 blur-md animate-pulse pointer-events-none" />

                  {/* Golden Cobra-Scale Frame */}
                  <div className="absolute inset-0 rounded-full border-4 border-amber-400 shadow-xl bg-gradient-to-tr from-amber-700 via-yellow-500 to-amber-600" />

                  {/* Inner Glowing Sacred Emerald Gemstone */}
                  <div className="absolute inset-1.5 sm:inset-2 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-600 to-teal-900 flex flex-col items-center justify-center overflow-hidden shadow-inner border border-emerald-300/80">
                    {/* Gem Shimmer Highlights */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/40 rounded-full blur-xs pointer-events-none" />
                    <div className="absolute bottom-1 right-2 w-6 h-6 bg-teal-300/20 rounded-full blur-xs pointer-events-none" />

                    {/* Sacred Snake & Mani Emblem */}
                    <span className="text-2xl sm:text-3xl filter drop-shadow-md transform transition-transform group-hover:scale-110">
                      🐍
                    </span>
                    <span className="text-[10px] sm:text-xs font-black tracking-wider text-emerald-50 uppercase drop-shadow-md mt-0.5">
                      {isSpinning ? (
                        <span className="animate-pulse">घूम रहा...</span>
                      ) : (
                        <span>स्पर्श करें</span>
                      )}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Interaction Instruction Banner below Wheel */}
            <div className="mt-4 text-center space-y-2">
              <button
                type="button"
                onClick={handleSpinOracle}
                disabled={isSpinning}
                className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-md ${
                  isSpinning
                    ? 'bg-amber-100 text-amber-800 border border-amber-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700 hover:from-amber-700 hover:to-yellow-800 text-white border border-amber-500/80 hover:shadow-lg active:scale-98'
                }`}
              >
                {isSpinning ? (
                  <>
                    <RotateCcw className="w-4 h-4 animate-spin text-amber-700" />
                    <span>
                      {lang === 'gu-en'
                        ? 'ચક્ર દિવ્ય સંકેત આપી રહ્યું છે... (પ્રતીક્ષા કરો)'
                        : lang === 'en'
                        ? 'Chakra reading cosmic signs... (Please wait)'
                        : 'चक्र दिव्य संकेत प्रकट कर रहा है... (प्रतीक्षा करें)'}
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-200 animate-spin-slow" />
                    <span>
                      {spinCount > 0
                        ? lang === 'gu-en'
                          ? 'ફરીથી સ્પર્શ કરો (બીજો સૂક્ષ્મ ગ્રહ સંકેત તપાસો)'
                          : lang === 'en'
                          ? 'Spin Again (Reveal Next Astrological Layer)'
                          : 'पुनः स्पर्श करें (अगला सूक्ष्म ग्रह संकेत जानें)'
                        : lang === 'gu-en'
                        ? 'નાગમણી સ્પર્શ કરી રહસ્ય પ્રકટ કરો'
                        : lang === 'en'
                        ? 'Touch Naag-Mani to Reveal Secret Remedy'
                        : 'नागमणि स्पर्श कर गुप्त उपाय प्रकट करें'}
                    </span>
                    <ArrowRight className="w-4 h-4 text-amber-200" />
                  </>
                )}
              </button>

              {spinCount > 0 && !isSpinning && (
                <div className="text-[11px] text-amber-900/80 font-medium">
                  {lang === 'gu-en'
                    ? 'આપે આ સમસ્યા માટે ' + spinCount + ' વખત ચક્ર પરિભ્રમણ કર્યું છે (નવો સંકેત સક્રિય)'
                    : lang === 'en'
                    ? 'Consultation count: ' + spinCount + ' (Manifesting deeper Prashna layers)'
                    : 'आपने इस समस्या हेतु ' + spinCount + ' बार चक्र घुमाया है (ताज़ा सूक्ष्म दृष्टि सक्रिय)'}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Step 3: Revealed Dynamic Oracle Result Card */}
        {revealed && (
          <div
            ref={resultRef}
            className="mt-8 bg-gradient-to-b from-white via-[#fefce8] to-white rounded-2xl sm:rounded-3xl border-2 border-amber-500/80 shadow-2xl p-5 sm:p-8 relative overflow-hidden animate-in fade-in duration-500"
          >
            {/* Top Blessed Badge with Phase Indicator */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-amber-200">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{currentProblem.icon}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs uppercase tracking-wider text-amber-800 font-bold">
                      {lang === 'gu-en' ? 'ચક્ર દ્વારા નિર્ધારિત ભાવ:' : lang === 'en' ? 'Activated Vedic Bhava:' : 'सक्रिय ज्योतिष भाव:'}{' '}
                      <span className="text-amber-950 font-extrabold">{getHouseText(currentReading)}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-200/80 text-amber-950 text-[11px] font-extrabold">
                      <span>✨</span>
                      <span>
                        {lang === 'gu-en'
                          ? 'સૂક્ષ્મ સંકેત #' + currentReading.readingNumber
                          : lang === 'en'
                          ? 'Hora Reading #' + currentReading.readingNumber
                          : 'सूक्ष्म प्रश्न गोचर #' + currentReading.readingNumber}
                      </span>
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#2a2203] mt-0.5">
                    {getProblemTitle(currentProblem)} • <span className="text-amber-700 text-base sm:text-lg">{getPhaseTitle(currentReading)}</span>
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs font-bold shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>
                  {lang === 'gu-en'
                    ? 'સિદ્ધ પીઠ દિવ્ય આદેશ'
                    : lang === 'en'
                    ? 'Siddha Peeth Divine Order'
                    : 'सिद्ध पीठ प्रत्यक्ष आदेश'}
                </span>
              </div>
            </div>

            {/* Diagnostic Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6">
              {/* 1. Root Planetary Cause */}
              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-extrabold text-amber-900 uppercase tracking-wide">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span>
                      {lang === 'gu-en'
                        ? 'ઓળખાયેલ મૂળ ગ્રહ દોષ:'
                        : lang === 'en'
                        ? 'Root Astrological Dosha:'
                        : 'पहचाना गया मुख्य ग्रह दोष व बाधा:'}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-[#2a2203] leading-snug mb-2">
                    {getDoshText(currentReading)}
                  </p>
                </div>
                <div className="text-xs text-[#544607] pt-2 border-t border-amber-200/60">
                  <span className="font-semibold text-amber-900">
                    {lang === 'gu-en' ? 'જીવન પર અસર:' : lang === 'en' ? 'Cosmic Impact:' : 'जीवन पर प्रभाव:'}{' '}
                  </span>
                  {getImpactText(currentReading)}
                </div>
              </div>

              {/* 2. Siddha Peeth Secret Remedy */}
              <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-xs font-extrabold text-emerald-900 uppercase tracking-wide">
                    <Flame className="w-4 h-4 text-emerald-700" />
                    <span>
                      {lang === 'gu-en'
                        ? 'માં નાગદેવી સિદ્ધ પીઠ ગુપ્ત ઉપાય:'
                        : lang === 'en'
                        ? 'Siddha Peeth Secret Remedy:'
                        : 'माँ नागदेवी सिद्ध पीठ का अचूक गुप्त उपाय:'}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-emerald-950 leading-snug mb-2">
                    {getRemedyText(currentReading)}
                  </p>
                </div>
                <div className="text-xs text-emerald-900 pt-2 border-t border-emerald-200/60">
                  <span className="font-semibold text-emerald-950">
                    {lang === 'gu-en' ? 'શુભ મુહૂર્ત અને દિશા:' : lang === 'en' ? 'Auspicious Time & Direction:' : 'शुभ समय व दिशा:'}{' '}
                  </span>
                  {getTimingText(currentReading)}
                </div>
              </div>
            </div>

            {/* Sacred Vedic Seed Mantra Card */}
            <div className="bg-gradient-to-r from-amber-100/90 via-yellow-100/80 to-amber-100/90 p-3.5 sm:p-4 rounded-xl border border-amber-300 text-center mb-6">
              <span className="text-[11px] font-bold text-amber-900 uppercase tracking-wider block mb-1">
                {lang === 'gu-en' ? '॥ વિશેષ વૈદિક મંત્ર સંકલ્પ ॥' : lang === 'en' ? '॥ Sacred Vedic Seed Mantra ॥' : '॥ विशेष सिद्ध वैदिक बीज-मंत्र ॥'}
              </span>
              <div className="text-sm sm:text-base font-bold text-[#2a2203] font-serif tracking-wide py-1 selection:bg-amber-300">
                {currentReading.mantra}
              </div>
              <span className="text-[11px] text-amber-800 italic block mt-0.5">
                {lang === 'gu-en'
                  ? 'આ મંત્રની સંપૂર્ણ જપ સંખ્યા તથા વિધિ-વિધાન પૂજ્ય બાબાજી પાસેથી સીધું જાણી લો'
                  : lang === 'en'
                  ? 'Exact repetition count and sanctification procedure are prescribed directly by Baba Ji'
                  : 'इस मंत्र के पूर्ण जपों की संख्या व गोपनीय सामग्री पूज्य बाबा जी से फोन या WhatsApp पर समझें'}
              </span>
            </div>

            {/* High Conversion Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              {/* WhatsApp Action */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>
                  {lang === 'gu-en'
                    ? 'આ ઉપાયની સંપૂર્ણ વિધિ WhatsApp પર મેળવો'
                    : lang === 'en'
                    ? 'Receive Full Secret Remedy via WhatsApp'
                    : 'इस उपाय की संपूर्ण सिद्ध विधि WhatsApp पर प्राप्त करें'}
                </span>
              </a>

              {/* Direct Phone Call */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 active:scale-98 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-600/20 transition-all"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>

              {/* Spin Again for next reading */}
              <button
                type="button"
                onClick={handleSpinOracle}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-amber-100/90 hover:bg-amber-200/80 text-amber-950 font-bold text-xs sm:text-sm border border-amber-300/80 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>
                  {lang === 'gu-en'
                    ? 'ફરી ચક્ર સ્પર્શ કરો (નવો સંકેત)'
                    : lang === 'en'
                    ? 'Spin Again (Next Reading)'
                    : 'पुनः घुमाएं (नया सूक्ष्म दोष)'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
