export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  accentColor: string;
  description: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  timeframe: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'Web App' | 'FinTech' | 'Enterprise SaaS' | 'Mobile' | 'Cloud/DevOps';
  summary: string;
  description: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  client: string;
  year: string;
  deliverables: string[];
  gradient: string;
  liveUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  skills: string[];
  github?: string;
  linkedin?: string;
  avatarSeed: string;
}

export interface Testimonial {
  id: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  content: string;
  projectScope: string;
  avatarSeed: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  note: string;
}

export interface FeedbackFormData {
  name: string;
  role?: string;
  company: string;
  rating: number;
  content: string;
}
