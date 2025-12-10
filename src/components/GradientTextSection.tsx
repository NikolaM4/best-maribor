import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GradientTextSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const letters = containerRef.current.querySelectorAll('.letter');
    
    // Kill any existing ScrollTrigger instances for this element
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger === sectionRef.current) {
        trigger.kill();
      }
    });

    const animation = gsap.fromTo(
      letters,
      {
        opacity: 0.3,
        color: '#6b7280',
      },
      {
        opacity: 1,
        color: '#ffffff',
        stagger: 0.02,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
        },
      }
    );

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, []);

  const text = "Were you ever interested in technology, innovation, and building connections across Europe? Do you dream of developing your skills through hands-on projects, meeting industry professionals, and traveling to international events? Are you passionate about making a difference in the student community while growing as a leader? Then you are in the right place. BEST offers you the platform to transform your university experience into something extraordinary.";

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-black to-purple-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            ref={containerRef}
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-relaxed text-center"
          >
            {text.split('').map((char, index) => (
              <span
                key={index}
                className="letter inline-block"
                style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientTextSection;
