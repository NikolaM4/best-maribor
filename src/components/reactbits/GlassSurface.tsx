import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassSurfaceProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassSurface = ({ children, className }: GlassSurfaceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn(
        "rounded-2xl border border-primary/20 bg-background/40 p-8 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
