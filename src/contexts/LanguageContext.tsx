import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.aboutBest': 'About BEST',
    'nav.aboutMaribor': 'About Maribor',
    'nav.events': 'Events',
    'nav.courses': 'Courses',
    'nav.bse': 'BEST Study Exchange',
    'nav.technicalDays': 'Technical Days',
    'nav.hackathons': 'Hackathons',
    'nav.otherEvents': 'Other BEST Events',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.becomeMember': 'Become a Member',
    'nav.gallery': 'Gallery',
    'nav.beginnersGuide': 'Beginner\'s Guide',
    
    // Home
    'home.hero.title': 'Board of European Students of Technology',
    'home.hero.subtitle': 'Connecting students, companies, and universities across Europe',
    'home.hero.cta': 'Join Us',
    'home.hero.learnMore': 'Learn More',
    
    // Footer
    'footer.followUs': 'Follow Us',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  sl: {
    // Navigation
    'nav.home': 'Domov',
    'nav.about': 'O nas',
    'nav.aboutBest': 'O BEST',
    'nav.aboutMaribor': 'O Mariboru',
    'nav.events': 'Dogodki',
    'nav.courses': 'Tečaji',
    'nav.bse': 'BEST Študentska izmenjava',
    'nav.technicalDays': 'Tehnični dnevi',
    'nav.hackathons': 'Hackathoni',
    'nav.otherEvents': 'Drugi BEST dogodki',
    'nav.news': 'Novice',
    'nav.contact': 'Kontakt',
    'nav.becomeMember': 'Postani član',
    'nav.gallery': 'Galerija',
    'nav.beginnersGuide': 'Vodič za začetnike',
    
    // Home
    'home.hero.title': 'Board of European Students of Technology',
    'home.hero.subtitle': 'Povezujemo študente, podjetja in univerze po Evropi',
    'home.hero.cta': 'Pridruži se nam',
    'home.hero.learnMore': 'Izvedi več',
    
    // Footer
    'footer.followUs': 'Sledite nam',
    'footer.quickLinks': 'Hitre povezave',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Vse pravice pridržane.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored === 'en' || stored === 'sl') ? stored : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
