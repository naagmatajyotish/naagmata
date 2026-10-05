export interface ServiceItem {
  id: string;
  title: string;
  titleHi?: string;
  titleGu?: string;
  category:
    | 'love'
    | 'marriage'
    | 'protection'
    | 'career'
    | 'kundali'
    | 'par-istri'
    | 'family'
    | 'santan'
    | 'wealth'
    | 'court'
    | 'foreign';
  shortDesc: string;
  shortDescHi?: string;
  shortDescGu?: string;
  fullDesc: string;
  fullDescHi?: string;
  fullDescGu?: string;
  benefits: string[];
  benefitsHi?: string[];
  benefitsGu?: string[];
  mantraPreview?: string;
  timeframe: string;
  timeframeHi?: string;
  timeframeGu?: string;
  iconName: string;
  badge?: string;
  badgeHi?: string;
  badgeGu?: string;
  imageUrl?: string;
  isHighlighted?: boolean;
  highlightBadge?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  location: string;
  problem: string;
  review: string;
  solutionTime: string;
  rating: number;
  date: string;
  verified: boolean;
  category?: 'love' | 'marriage' | 'abroad' | 'protection';
  flag?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  problemType: string;
  partnerName?: string;
  dob?: string;
  city?: string;
  details: string;
  preferredContact: 'whatsapp' | 'call';
}
