import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChromaGridItem {
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
}

interface ChromaGridProps {
  items: ChromaGridItem[];
  className?: string;
}

export const ChromaGrid = ({ items, className }: ChromaGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const grid = gridRef.current;
    if (grid) {
      grid.addEventListener("mousemove", handleMouseMove);
      return () => grid.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div
      ref={gridRef}
      className={cn(
        "relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-surface-elevated p-6 shadow-lg transition-all hover:shadow-2xl"
        >
          {hoveredIndex === idx && (
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 40%)`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          
          <div className="relative z-10">
            <div className="mb-4 overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={item.name}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="mb-1 text-xl font-bold">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.role}</p>
            
            {(item.email || item.linkedin) && (
              <div className="mt-4 flex gap-3">
                {item.email && (
                  <a
                    href={`mailto:${item.email}`}
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    Email
                  </a>
                )}
                {item.linkedin && (
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
