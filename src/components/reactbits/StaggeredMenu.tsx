import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon, X, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { useClickAway } from "react-use";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SubMenuItem {
  title: string;
  href: string;
}

interface MenuItem {
  title: string;
  icon: LucideIcon;
  href?: string;
  subItems?: SubMenuItem[];
}

interface StaggeredMenuProps {
  items: MenuItem[];
}

export const StaggeredMenu = ({ items }: StaggeredMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useClickAway(ref, () => setIsOpen(false));

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
                <motion.div key={item.title} variants={itemVariants}>
                  {item.subItems ? (
                    <Collapsible>
                      <CollapsibleTrigger className="w-full">
                        <div
                          className={`group flex items-center gap-6 p-4 rounded-2xl transition-all ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-accent/10"
                          }`}
                        >
                          <div
                            className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                              isActive
                                ? "bg-primary-foreground/20"
                                : "bg-accent/20 group-hover:bg-primary/20"
                            } transition-colors`}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <div className="flex flex-col flex-1 text-left">
                            <span className="text-2xl font-semibold">{item.title}</span>
                            <span className="text-xs text-muted-foreground">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-[72px] mt-2 space-y-2">
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
                      className={`group flex items-center gap-6 p-4 rounded-2xl transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent/10"
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                          isActive
                            ? "bg-primary-foreground/20"
                            : "bg-accent/20 group-hover:bg-primary/20"
                        } transition-colors`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-2xl font-semibold">{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            variants={itemVariants}
            className="mt-auto pt-8 border-t border-border"
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
