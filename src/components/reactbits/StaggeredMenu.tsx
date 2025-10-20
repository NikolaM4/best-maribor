import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface MenuItem {
  title: string;
  icon: LucideIcon;
  href: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
}

export const StaggeredMenu = ({ items }: StaggeredMenuProps) => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-end gap-2 px-4 py-3 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-lg">
        {items.map((item, index) => {
          const Icon = item.icon;
          const delay = index * 0.1;
          
          return (
            <motion.div
              key={item.href}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay, duration: 0.3 }}
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.href}
                className="flex flex-col items-center gap-1 px-3 py-2 rounded-xl hover:bg-accent/10 transition-colors group"
              >
                <Icon className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {item.title}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
};
