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
import { ThemeToggle } from './ThemeToggle';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-background/80 backdrop-blur-lg border border-border rounded-full shadow-lg px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BEST Maribor
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost" size="sm" className="rounded-full text-sm font-medium hover:bg-accent">
                {t('nav.home')}
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full text-sm font-medium hover:bg-accent">
                  {t('nav.about')} <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl bg-popover/95 backdrop-blur-lg border-border">
                <DropdownMenuItem asChild>
                  <Link to="/about/best" className="rounded-lg">{t('nav.aboutBest')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about/maribor" className="rounded-lg">{t('nav.aboutMaribor')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full text-sm font-medium hover:bg-accent">
                  {t('nav.events')} <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl bg-popover/95 backdrop-blur-lg border-border">
                <DropdownMenuItem asChild>
                  <Link to="/events/courses" className="rounded-lg">{t('nav.courses')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/bse" className="rounded-lg">{t('nav.bse')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/technical-days" className="rounded-lg">{t('nav.technicalDays')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/hackathons" className="rounded-lg">{t('nav.hackathons')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/other" className="rounded-lg">{t('nav.otherEvents')}</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/events/gallery" className="rounded-lg">{t('nav.gallery')}</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/news">
              <Button variant="ghost" size="sm" className="rounded-full text-sm font-medium hover:bg-accent">
                {t('nav.news')}
              </Button>
            </Link>
            <Link to="/beginners-guide">
              <Button variant="ghost" size="sm" className="rounded-full text-sm font-medium hover:bg-accent">
                {t('nav.beginnersGuide')}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="sm" className="rounded-full text-sm font-medium hover:bg-accent">
                {t('nav.contact')}
              </Button>
            </Link>
            <Link to="/become-member">
              <Button size="sm" className="ml-2 rounded-full">
                {t('nav.becomeMember')}
              </Button>
            </Link>

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-2 rounded-full hover:bg-accent">
                  <Globe className="h-4 w-4 mr-1" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl bg-popover/95 backdrop-blur-lg border-border">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="rounded-lg">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('sl')} className="rounded-lg">
                  Slovenščina
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="rounded-full">
                  <Globe className="h-4 w-4 mr-1" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl bg-popover/95 backdrop-blur-lg border-border">
                <DropdownMenuItem onClick={() => setLanguage('en')} className="rounded-lg">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('sl')} className="rounded-lg">
                  Slovenščina
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden mt-2 bg-background/95 backdrop-blur-lg border border-border rounded-3xl shadow-lg p-4 space-y-1">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.home')}
            </Button>
          </Link>
          <Link to="/about/best" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.aboutBest')}
            </Button>
          </Link>
          <Link to="/about/maribor" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.aboutMaribor')}
            </Button>
          </Link>
          <Link to="/events/courses" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.courses')}
            </Button>
          </Link>
          <Link to="/events/bse" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.bse')}
            </Button>
          </Link>
          <Link to="/events/technical-days" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.technicalDays')}
            </Button>
          </Link>
          <Link to="/events/hackathons" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.hackathons')}
            </Button>
          </Link>
          <Link to="/events/other" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.otherEvents')}
            </Button>
          </Link>
          <Link to="/news" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.news')}
            </Button>
          </Link>
          <Link to="/events/gallery" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.gallery')}
            </Button>
          </Link>
          <Link to="/beginners-guide" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.beginnersGuide')}
            </Button>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="ghost" size="sm" className="w-full justify-start rounded-full">
              {t('nav.contact')}
            </Button>
          </Link>
          <Link to="/become-member" onClick={() => setIsOpen(false)}>
            <Button size="sm" className="w-full rounded-full mt-2">
              {t('nav.becomeMember')}
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
