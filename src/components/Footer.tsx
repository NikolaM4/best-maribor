import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BEST Maribor
            </div>
            <p className="text-sm text-muted-foreground">
              Board of European Students of Technology
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:info@best-maribor.org" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about/best" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.aboutBest')}
                </Link>
              </li>
              <li>
                <Link to="/events/courses" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.courses')}
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-semibold mb-4">{t('nav.events')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/events/bse" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.bse')}
                </Link>
              </li>
              <li>
                <Link to="/events/technical-days" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.technicalDays')}
                </Link>
              </li>
              <li>
                <Link to="/events/hackathons" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.hackathons')}
                </Link>
              </li>
              <li>
                <Link to="/events/other" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t('nav.otherEvents')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>University of Maribor</li>
              <li>Maribor, Slovenia</li>
              <li>
                <a href="mailto:info@best-maribor.org" className="hover:text-foreground transition-colors">
                  info@best-maribor.org
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} BEST Maribor. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
