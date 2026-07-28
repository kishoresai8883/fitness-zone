export interface Program {
  id: string;
  title: string;
  category: 'strength' | 'cardio' | 'personal' | 'group' | 'wellness';
  description: string;
  fullDetails: string;
  duration: string;
  intensity: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  features: string[];
  imageUrl: string;
  popular?: boolean;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  originalPrice?: string;
  tagline: string;
  features: string[];
  popular?: boolean;
  savings?: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  area: string;
  role: string;
  achievement: string;
  review: string;
  rating: number;
  imageUrl: string;
  program: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  className: string;
  instructor: string;
  type: string;
  room: string;
  days: string[]; // e.g. ['Mon', 'Wed', 'Fri']
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  timeframe: string;
  weightLoss: string;
  story: string;
  beforeImg: string;
  afterImg: string;
}

export interface InquiryFormData {
  name: string;
  phone: string;
  program: string;
  preferredTime: string;
  notes: string;
  plan?: string;
}
