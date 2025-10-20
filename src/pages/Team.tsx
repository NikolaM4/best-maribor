import { ChromaGrid } from '@/components/reactbits/ChromaGrid';
import { AnimatedHero } from '@/components/reactbits/AnimatedHero';

const Team = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      email: 'president@best-maribor.org',
      linkedin: '#',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      email: 'vp@best-maribor.org',
      linkedin: '#',
    },
    {
      name: 'Mike Johnson',
      role: 'Events Coordinator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      email: 'events@best-maribor.org',
      linkedin: '#',
    },
    {
      name: 'Sarah Williams',
      role: 'Corporate Relations Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      email: 'corporate@best-maribor.org',
      linkedin: '#',
    },
    {
      name: 'Alex Brown',
      role: 'IT Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      email: 'it@best-maribor.org',
      linkedin: '#',
    },
    {
      name: 'Emma Davis',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      email: 'marketing@best-maribor.org',
      linkedin: '#',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <AnimatedHero className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-lg text-muted-foreground">
              Meet the passionate students who dedicate their time to making BEST Maribor 
              a thriving community of innovation, learning, and international collaboration.
            </p>
          </div>
        </div>
      </AnimatedHero>

      {/* Team Members with Chroma Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ChromaGrid items={teamMembers} className="max-w-6xl mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default Team;
