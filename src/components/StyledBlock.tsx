import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StyledBlockProps {
  children: ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  backgroundImage?: string;
}

const StyledBlock = ({ children, className, variant = 'primary', backgroundImage }: StyledBlockProps) => {
  const variants = {
    primary: 'bg-[#1a1f3c]',
    secondary: 'bg-[#0f172a]',
    accent: 'bg-gradient-to-br from-[#1e1b4b] to-[#0f172a]',
  };

  return (
    <div
      className={cn(
        'relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden',
        !backgroundImage && variants[variant],
        className
      )}
    >
      {/* Background image with dark overlay */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
        </>
      )}
      
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-10">
        <div className="absolute top-8 left-8 grid grid-cols-6 gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40" />
          ))}
        </div>
        <div className="absolute bottom-8 right-8 grid grid-cols-6 gap-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40" />
          ))}
        </div>
      </div>
      
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default StyledBlock;
