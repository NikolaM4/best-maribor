import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon, X, ChevronDown, Facebook, Instagram, Linkedin, Moon, Sun, Globe } from "lucide-react";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import { useTheme } from "@/components/ThemeProvider";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  icon?: LucideIcon;
  href?: string;
  subItems?: SubMenuItem[];
  isCTA?: boolean;
}

interface StaggeredMenuProps {
  items: MenuItem[];
}

export const StaggeredMenu = ({ items }: StaggeredMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  useClickAway(ref, () => setIsOpen(false));

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/bestmaribor", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/bestmaribor", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/best-maribor", label: "LinkedIn" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg hover:bg-accent/10 transition-colors"
      >
        <span className="text-sm font-medium text-foreground">Menu</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <X className="h-5 w-5" />
        </motion.div>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={overlayVariants}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <motion.nav
        ref={ref}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
      >
        <div className="flex flex-col h-full p-12">
          <motion.div
            variants={{
              open: {
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="flex flex-col gap-4 mt-20"
          >
            {items.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.href ? location.pathname === item.href : item.subItems?.some(sub => location.pathname === sub.href);
              
              return (
                <motion.div key={item.title} variants={itemVariants} className={item.isCTA ? "mt-6" : ""}>
                  {item.isCTA ? (
                    <Link
                      to={item.href!}
                      onClick={() => setIsOpen(false)}
                      className="group relative overflow-hidden px-8 py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-center block"
                    >
                      <span className="relative z-10">{item.title}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  ) : item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <div
                          className={`group flex items-center justify-between p-4 rounded-2xl transition-all ${
                            isActive
                              ? "bg-accent/20 text-foreground"
                              : "hover:bg-accent/10"
                          }`}
                        >
                          <span className="text-xl font-semibold">{item.title}</span>
                          <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-6 mt-2 space-y-2">
                        {item.subItems.map((subItem) => {
                          const isSubActive = location.pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              to={subItem.href}
                              onClick={() => setIsOpen(false)}
                              className={`block p-3 rounded-lg transition-all ${
                                isSubActive
                                  ? "bg-primary/20 text-primary font-medium"
                                  : "hover:bg-accent/10"
                              }`}
                            >
                              {subItem.title}
                            </Link>
                          );
                        })}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <Link
                      to={item.href!}
                      onClick={() => setIsOpen(false)}
                      className={`group block p-4 rounded-2xl transition-all ${
                        isActive
                          ? "bg-accent/20 text-foreground"
                          : "hover:bg-accent/10"
                      }`}
                    >
                      <span className="text-xl font-semibold">{item.title}</span>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Theme and Language Toggle */}
          <motion.div
            variants={itemVariants}
            className="mt-auto pt-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="flex items-center gap-2"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="h-4 w-4" />
                    <span>Dark</span>
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4" />
                    <span>Light</span>
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "sl" : "en")}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                <span>{language === "en" ? "SL" : "EN"}</span>
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="pt-6 border-t border-border"
          >
            <p className="text-sm text-muted-foreground mb-3">Follow us</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20 hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="pt-4"
          >
            <p className="text-sm text-muted-foreground">
              © 2025 BEST Maribor
            </p>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};
