export interface ServiceItem {
  id: string;
  title: string;
  category: 'love' | 'marriage' | 'protection' | 'career' | 'kundali';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  mantraPreview?: string;
  timeframe: string;
  iconName: string;
  badge?: string;
  imageUrl?: string;
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
