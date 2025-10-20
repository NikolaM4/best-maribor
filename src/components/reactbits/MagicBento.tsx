import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BentoItem {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
}

export const MagicBento = ({ items, className }: MagicBentoProps) => {
  return (
    <div className={cn("grid gap-4 md:grid-cols-3 lg:grid-cols-4", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className={cn(
            "group relative overflow-hidden rounded-2xl border border-primary/20 bg-surface-elevated p-6 shadow-lg transition-all hover:shadow-2xl hover:border-primary/40",
            idx === 0 && "md:col-span-2",
            idx === 3 && "md:col-span-2",
            item.className
          )}
        >
          <div className="relative z-10">
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
          
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
};
