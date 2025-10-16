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
    'home.about.title': 'About BEST Maribor',
    'home.about.p1': 'We are a dynamic student organization at the University of Maribor, part of the BEST network connecting over 3,000 students across 93 universities in 33 countries.',
    'home.about.p2': 'Through academic courses, career events, and international exchanges, we help students develop both technical and soft skills while building lasting connections across Europe.',
    'home.about.learnMore': 'Learn More About BEST',
    'home.stats.members': 'Active Members',
    'home.stats.groups': 'Local Groups',
    'home.stats.countries': 'Countries',
    'home.stats.years': 'Years Active',
    'home.whatWeDo.title': 'What We Do',
    'home.whatWeDo.subtitle': 'BEST connects students, companies, and universities across Europe through various programs and events',
    'home.features.courses': 'Academic Courses',
    'home.features.coursesDesc': 'Hands-on technical courses taught by industry professionals and academics',
    'home.features.exchange': 'Study Exchange',
    'home.features.exchangeDesc': 'Spend time at partner universities across Europe with BEST Study Exchange',
    'home.features.career': 'Career Development',
    'home.features.careerDesc': 'Connect with leading companies through career fairs and networking events',
    'home.features.hackathons': 'Hackathons',
    'home.features.hackathonsDesc': 'Participate in coding competitions and innovation challenges',
    'home.features.community': 'Community',
    'home.features.communityDesc': 'Join a network of over 3,000 students from 93 universities',
    'home.features.leadership': 'Leadership Skills',
    'home.features.leadershipDesc': 'Develop soft skills through organizing events and managing projects',
    'home.whyJoin.title': 'Why Join BEST Maribor?',
    'home.whyJoin.subtitle': 'Unlock opportunities for personal growth, professional development, and international networking',
    'home.whyJoin.network': 'International Network',
    'home.whyJoin.networkDesc': 'Connect with students from 93 universities across Europe',
    'home.whyJoin.career': 'Career Opportunities',
    'home.whyJoin.careerDesc': 'Direct access to leading companies and job opportunities',
    'home.whyJoin.skills': 'Skill Development',
    'home.whyJoin.skillsDesc': 'Develop both technical and soft skills through events and projects',
    'home.whyJoin.travel': 'Travel Europe',
    'home.whyJoin.travelDesc': 'Participate in study exchanges and international events',
    'home.whyJoin.workshops': 'Free Workshops',
    'home.whyJoin.workshopsDesc': 'Access to free training sessions and professional courses',
    'home.whyJoin.leadershipExp': 'Leadership Experience',
    'home.whyJoin.leadershipExpDesc': 'Gain valuable experience by organizing and managing events',
    'home.whyJoin.cta': 'Join BEST Maribor Today',
    'home.recentNews.title': 'Latest News',
    'home.recentNews.subtitle': 'Stay updated with our latest activities and announcements',
    'home.recentNews.viewAll': 'View All News',
    'home.recentNews.readMore': 'Read More',
    'home.cta.title': 'Ready to Start Your Journey?',
    'home.cta.subtitle': 'Join BEST Maribor and become part of Europe\'s leading student organization',
    'home.cta.button': 'Apply Now',
    'common.learnMore': 'Learn more',
    'common.exploreBse': 'Explore BSE',
    'common.viewEvents': 'View events',
    'common.joinHackathon': 'Join hackathon',
    'common.becomeMember': 'Become a member',
    'common.readMore': 'Read more',
    
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
    'home.about.title': 'O BEST Maribor',
    'home.about.p1': 'Smo dinamična študentska organizacija na Univerzi v Mariboru, del mreže BEST, ki povezuje več kot 3.000 študentov na 93 univerzah v 33 državah.',
    'home.about.p2': 'S pomočjo akademskih tečajev, kariernih dogodkov in mednarodnih izmenjav pomagamo študentom razvijati tako tehnične kot mehke veščine ter graditi trajne povezave po Evropi.',
    'home.about.learnMore': 'Več o BEST',
    'home.stats.members': 'Aktivnih članov',
    'home.stats.groups': 'Lokalnih skupin',
    'home.stats.countries': 'Držav',
    'home.stats.years': 'Let aktivnosti',
    'home.whatWeDo.title': 'Kaj počnemo',
    'home.whatWeDo.subtitle': 'BEST povezuje študente, podjetja in univerze po Evropi z različnimi programi in dogodki',
    'home.features.courses': 'Akademski tečaji',
    'home.features.coursesDesc': 'Praktični tehnični tečaji, ki jih vodijo industrijski strokovnjaki in akademiki',
    'home.features.exchange': 'Študentska izmenjava',
    'home.features.exchangeDesc': 'Preživite čas na partnerskih univerzah po Evropi z BEST študentsko izmenjavo',
    'home.features.career': 'Karierni razvoj',
    'home.features.careerDesc': 'Povežite se z vodilnimi podjetji na kariernih sejmih in mrežnih dogodkih',
    'home.features.hackathons': 'Hackathoni',
    'home.features.hackathonsDesc': 'Sodelujte v tekmovanjih v programiranju in inovacijskih izzivih',
    'home.features.community': 'Skupnost',
    'home.features.communityDesc': 'Pridružite se mreži več kot 3.000 študentov z 93 univerz',
    'home.features.leadership': 'Vodstvene veščine',
    'home.features.leadershipDesc': 'Razvijajte mehke veščine z organizacijo dogodkov in vodenjem projektov',
    'home.whyJoin.title': 'Zakaj se pridružiti BEST Maribor?',
    'home.whyJoin.subtitle': 'Odklenite priložnosti za osebno rast, profesionalni razvoj in mednarodno mreženje',
    'home.whyJoin.network': 'Mednarodna mreža',
    'home.whyJoin.networkDesc': 'Povežite se s študenti z 93 univerz po Evropi',
    'home.whyJoin.career': 'Karierne priložnosti',
    'home.whyJoin.careerDesc': 'Neposreden dostop do vodilnih podjetij in zaposlitvenih priložnosti',
    'home.whyJoin.skills': 'Razvoj veščin',
    'home.whyJoin.skillsDesc': 'Razvijajte tako tehnične kot mehke veščine skozi dogodke in projekte',
    'home.whyJoin.travel': 'Potujte po Evropi',
    'home.whyJoin.travelDesc': 'Sodelujte pri študentskih izmenjavah in mednarodnih dogodkih',
    'home.whyJoin.workshops': 'Brezplačne delavnice',
    'home.whyJoin.workshopsDesc': 'Dostop do brezplačnih usposabljanj in profesionalnih tečajev',
    'home.whyJoin.leadershipExp': 'Vodstvene izkušnje',
    'home.whyJoin.leadershipExpDesc': 'Pridobite dragocene izkušnje z organizacijo in vodenjem dogodkov',
    'home.whyJoin.cta': 'Pridružite se BEST Maribor danes',
    'home.recentNews.title': 'Najnovejše novice',
    'home.recentNews.subtitle': 'Ostanite na tekočem z našimi najnovejšimi aktivnostmi in objavami',
    'home.recentNews.viewAll': 'Vse novice',
    'home.recentNews.readMore': 'Preberi več',
    'home.cta.title': 'Pripravljeni začeti svoje potovanje?',
    'home.cta.subtitle': 'Pridružite se BEST Maribor in postanite del vodilne evropske študentske organizacije',
    'home.cta.button': 'Prijavi se zdaj',
    'common.learnMore': 'Izvedi več',
    'common.exploreBse': 'Raziskuj BSE',
    'common.viewEvents': 'Poglej dogodke',
    'common.joinHackathon': 'Pridruži se hackathonu',
    'common.becomeMember': 'Postani član',
    'common.readMore': 'Preberi več',
    
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
