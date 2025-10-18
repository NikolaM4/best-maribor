import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface TeamMember {
  name: string;
  role: string;
  department: string;
  image: string;
  email?: string;
  linkedin?: string;
  bio?: string;
}

const Team = () => {
  const heroRef = useScrollReveal();

  const teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'President',
      department: 'Board',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      email: 'president@best-maribor.org',
      linkedin: '#',
      bio: 'Leading BEST Maribor with passion and vision for student development.',
    },
    {
      name: 'Jane Smith',
      role: 'Vice President',
      department: 'Board',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      email: 'vp@best-maribor.org',
      linkedin: '#',
      bio: 'Supporting organizational growth and strategic initiatives.',
    },
    {
      name: 'Mike Johnson',
      role: 'Events Coordinator',
      department: 'Events',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      email: 'events@best-maribor.org',
      linkedin: '#',
      bio: 'Organizing amazing events that create lasting memories.',
    },
    {
      name: 'Sarah Williams',
      role: 'Corporate Relations Manager',
      department: 'Corporate Relations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      email: 'corporate@best-maribor.org',
      linkedin: '#',
      bio: 'Building bridges between students and industry partners.',
    },
    {
      name: 'Alex Brown',
      role: 'IT Coordinator',
      department: 'IT',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      email: 'it@best-maribor.org',
      linkedin: '#',
      bio: 'Managing technical infrastructure and digital solutions.',
    },
    {
      name: 'Emma Davis',
      role: 'Marketing Manager',
      department: 'Marketing',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
      email: 'marketing@best-maribor.org',
      linkedin: '#',
      bio: 'Crafting compelling stories and building our brand.',
    },
  ];

  const departments = Array.from(new Set(teamMembers.map(m => m.department)));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div ref={heroRef} className="max-w-3xl mx-auto text-center scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-lg text-muted-foreground">
              Meet the passionate students who dedicate their time to making BEST Maribor 
              a thriving community of innovation, learning, and international collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members by Department */}
      {departments.map((department, deptIndex) => (
        <section key={deptIndex} className={`py-16 ${deptIndex % 2 === 0 ? 'bg-background' : 'bg-surface-subtle'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">{department}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {teamMembers
                .filter(member => member.department === department)
                .map((member, index) => (
                  <Card key={index} className="hover-scale overflow-hidden">
                    <div className="overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {member.role}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {member.bio && (
                        <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                      )}
                      <div className="flex gap-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-4 w-4 text-primary" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4 text-secondary" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Team;
