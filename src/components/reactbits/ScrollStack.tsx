import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollStackItem {
  title: string;
  description: string;
  image?: string;
}

interface ScrollStackProps {
  items: ScrollStackItem[];
  className?: string;
}

export const ScrollStack = ({ items, className }: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="space-y-12">
        {items.map((item, idx) => {
          const targetScale = 1 - (items.length - idx) * 0.05;
          const range = [idx * 0.25, 1];
          
          const scale = useTransform(
            scrollYProgress,
            range,
            [1, targetScale]
          );

          const opacity = useTransform(
            scrollYProgress,
            [idx * 0.2, (idx + 1) * 0.2],
            [0, 1]
          );

          return (
            <motion.div
              key={idx}
              style={{ scale, opacity }}
              className="sticky top-20 overflow-hidden rounded-2xl border border-primary/20 bg-surface-elevated shadow-2xl"
            >
              <div className="grid gap-8 p-8 md:grid-cols-2 md:items-center">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
                {item.image && (
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full object-cover"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
