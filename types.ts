export enum Page {
  HOME = 'HOME',
  MATEMATIKA = 'MATEMATIKA',
  BAHASA_INDONESIA = 'BAHASA_INDONESIA',
  PREMIUM = 'PREMIUM',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  PRODUCT = 'PRODUCT',
  QUIZ_INTRO = 'QUIZ_INTRO',
  QUIZ_PLAY = 'QUIZ_PLAY',
  ADMIN = 'ADMIN',
  JOIN = 'JOIN',
  ADMIN_CASHBACK = 'ADMIN_CASHBACK' // ✅ TAMBAHKAN INI
}

export interface User {
  id: string;
  whatsapp: string;
  password: string;
  statusPembayaran: 'paid' | 'unpaid';
  statusAktif: boolean;
  isAdmin: boolean;
  role: 'admin' | 'user';
}

export interface Question {
  id: string;
  text: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  discussion: string;
}

export interface QuizModule {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  theory?: string;
}

export interface Topic {
  id: string;
  name: string;
  icon: string;
  coverage: string[];
  levels: {
    [key: number]: QuizModule;
  };
  purpose?: string;
  benefits?: string[];
}