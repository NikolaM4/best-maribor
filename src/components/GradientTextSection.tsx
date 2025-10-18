import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GradientTextSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current || !maskRef.current || !sectionRef.current) return;

    gsap.to(maskRef.current, {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });
  }, []);

  const text = "Were you ever interested in technology, innovation, and building connections across Europe? Do you dream of developing your skills through hands-on projects, meeting industry professionals, and traveling to international events? Are you passionate about making a difference in the student community while growing as a leader? Then you are in the right place. BEST offers you the platform to transform your university experience into something extraordinary.";

  return (
    <section
      ref={sectionRef}
      className="relative py-40 md:py-56 overflow-hidden bg-gradient-to-br from-purple-900 via-black to-purple-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Gray text layer */}
            <div
              ref={textRef}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-500 leading-relaxed text-center"
            >
              {text}
            </div>
            
            {/* White text layer with mask */}
            <div
              ref={maskRef}
              className="absolute inset-0 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed text-center"
              style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            >
              {text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientTextSection;
