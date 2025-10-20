import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlowingMenuItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

interface FlowingMenuProps {
  items: FlowingMenuItem[];
  className?: string;
}

export const FlowingMenu = ({ items, className }: FlowingMenuProps) => {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {items.map((item, idx) => (
        <Link key={idx} to={item.href}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl border border-primary/20 bg-surface-elevated p-6 shadow-lg transition-all hover:shadow-2xl hover:border-primary/40"
          >
            <div
              className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
              style={{
                background: `linear-gradient(135deg, ${item.color}10, transparent)`,
              }}
            />
            
            <div className="relative z-10">
              <div
                className="mb-4 inline-flex rounded-lg p-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <item.icon className="h-6 w-6" style={{ color: item.color }} />
              </div>
              <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};
