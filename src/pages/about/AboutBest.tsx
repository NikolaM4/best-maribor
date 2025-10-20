import { useScrollReveal } from '@/hooks/useScrollReveal';
import { AnimatedHero } from '@/components/reactbits/AnimatedHero';
import { MagicBento } from '@/components/reactbits/MagicBento';
import { ChromaGrid } from '@/components/reactbits/ChromaGrid';
import { Users, Globe, GraduationCap, Rocket, Lightbulb, Trophy } from 'lucide-react';

const AboutBest = () => {
  const contentRef = useScrollReveal();
  
  const benefits = [
    {
      title: 'International Network',
      description: 'Connect with 3,000+ students across 84 groups in 33 European countries',
      icon: Globe,
    },
    {
      title: 'Personal Development',
      description: 'Develop leadership, teamwork, and project management skills',
      icon: GraduationCap,
    },
    {
      title: 'Career Opportunities',
      description: 'Access exclusive internships, jobs, and corporate partnerships',
      icon: Rocket,
    },
    {
      title: 'Learning & Growth',
      description: 'Participate in workshops, courses, and training programs',
      icon: Lightbulb,
    },
    {
      title: 'Community',
      description: 'Join a vibrant community of like-minded technology students',
      icon: Users,
    },
    {
      title: 'Recognition',
      description: 'Gain certificates and recognition for your contributions',
      icon: Trophy,
    },
  ];

  const teamMembers = [
    {
      name: 'Main Board',
      role: 'BEST International',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    },
    {
      name: 'Local Groups',
      role: '84 Groups Across Europe',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop',
    },
    {
      name: 'Members',
      role: '3000+ Active Students',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    },
  ];
  
  return (
    <div className="min-h-screen">
      <AnimatedHero className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About BEST</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Board of European Students of Technology - A constantly growing non-profit and non-political organisation since 1989
            </p>
          </div>
        </div>
      </AnimatedHero>

      <section ref={contentRef} className="py-20 bg-background scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                BEST strives to help European students of technology to become more internationally minded, by reaching a
                better understanding of European cultures and developing capacities to work on an international basis.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                A society full of internationally minded students in engineering and technology ready to make a difference.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Network</h2>
              <p className="text-lg text-muted-foreground">
                BEST consists of 84 Local BEST Groups (LBGs) in 33 countries, connecting over 3,000 students across Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join BEST?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the amazing benefits of being part of Europe's largest technology student network
            </p>
          </div>
          <MagicBento items={benefits} className="max-w-6xl mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Network</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connecting students across Europe
            </p>
          </div>
          <ChromaGrid items={teamMembers} />
        </div>
      </section>
    </div>
  );
};

export default AboutBest;
