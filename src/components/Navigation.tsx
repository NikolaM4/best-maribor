import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/contexts/LanguageContext';
import bestLogo from '@/assets/best-logo.png';
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={bestLogo} alt="BEST Maribor" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost" className="text-sm font-medium">
                {t('nav.home')}
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  {t('nav.about')} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover/95 backdrop-blur-lg border-border">
                <DropdownMenuItem asChild>
                  <Link to="/about/best">{t('nav.aboutBest')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/maribor">{t('nav.aboutMaribor')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  {t('nav.events')} <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover/95 backdrop-blur-lg border-border">
                <DropdownMenuItem asChild>
                  <Link to="/events/courses">{t('nav.courses')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/bse">{t('nav.bse')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/technical-days">{t('nav.technicalDays')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/hackathons">{t('nav.hackathons')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/other">{t('nav.otherEvents')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/gallery">{t('nav.gallery')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/news">
              <Button variant="ghost" className="text-sm font-medium">
                {t('nav.news')}
              </Button>
            </Link>
            <Link to="/beginners-guide">
              <Button variant="ghost" className="text-sm font-medium">
                {t('nav.beginnersGuide')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" className="text-sm font-medium">
                {t('nav.contact')}
              </Button>
            </Link>
            <Link to="/become-member">
              <Button className="ml-2">
                {t('nav.becomeMember')}
              </Button>
            </Link>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-2">
                  <Globe className="h-4 w-4 mr-1" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover/95 backdrop-blur-lg border-border">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('sl')}>
                  Slovenščina
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Globe className="h-4 w-4 mr-1" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover/95 backdrop-blur-lg border-border">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('sl')}>
                  Slovenščina
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.home')}
              </Button>
            </Link>
            <Link to="/about/best" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.aboutBest')}
              </Button>
            </Link>
            <Link to="/about/maribor" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.aboutMaribor')}
              </Button>
            </Link>
            <Link to="/events/courses" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.courses')}
              </Button>
            </Link>
            <Link to="/events/bse" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.bse')}
              </Button>
            </Link>
            <Link to="/events/technical-days" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.technicalDays')}
              </Button>
            </Link>
            <Link to="/events/hackathons" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.hackathons')}
              </Button>
            </Link>
            <Link to="/events/other" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.otherEvents')}
              </Button>
            </Link>
            <Link to="/news" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.news')}
              </Button>
            </Link>
            <Link to="/events/gallery" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.gallery')}
              </Button>
            </Link>
            <Link to="/beginners-guide" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.beginnersGuide')}
              </Button>
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                {t('nav.contact')}
              </Button>
            </Link>
            <Link to="/become-member" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2">
                {t('nav.becomeMember')}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
