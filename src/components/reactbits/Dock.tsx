import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface DockItem {
  title: string;
  icon: LucideIcon;
  href: string;
}

interface DockProps {
  items: DockItem[];
  className?: string;
}

function DockIcon({ item }: { item: DockItem }) {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const isActive = location.pathname === item.href;

  const mouseX = useMotionValue(Infinity);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [48, 72, 48]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link to={item.href}>
      <motion.div
        ref={ref}
        style={{ width }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={cn(
          "flex aspect-square items-center justify-center rounded-2xl bg-surface-elevated transition-colors hover:bg-primary/20",
          isActive && "bg-primary text-primary-foreground hover:bg-primary-hover"
        )}
      >
        <item.icon className="h-6 w-6" />
      </motion.div>
    </Link>
  );
}

export const Dock = ({ items, className }: DockProps) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 gap-4 rounded-2xl border border-primary/20 bg-background/80 p-4 shadow-2xl backdrop-blur-xl",
        className
      )}
    >
      {items.map((item, idx) => (
        <DockIcon key={idx} item={item} />
      ))}
    </motion.div>
  );
};
