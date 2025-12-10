import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeroProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

export const AnimatedHero = ({ children, className, backgroundImage }: AnimatedHeroProps) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {backgroundImage ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute inset-0 bg-black/45" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
            
            {/* Animated orbs */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl"
            />
            
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-secondary/30 blur-3xl"
            />
            
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl"
            />
          </>
        )}
      </div>

      {children}
    </div>
  );
};
