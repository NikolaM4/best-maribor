import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GradientTextSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current || !sectionRef.current) return;

    const words = textRef.current.querySelectorAll('.word');

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const text = "Were you ever interested in technology, innovation, and international experiences? Then you are in the right place.";
  const words = text.split(' ');

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-black to-purple-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div ref={textRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-relaxed">
            {words.map((word, index) => (
              <span key={index} className="word inline-block mr-3 mb-2">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientTextSection;
