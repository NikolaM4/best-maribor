import { useScrollReveal } from '@/hooks/useScrollReveal'
import { AnimatedHero } from '@/components/reactbits/AnimatedHero'
import { ChromaGrid } from '@/components/reactbits/ChromaGrid'
import { Calendar, Briefcase, Code, Users, Heart, Sparkles } from 'lucide-react'
import mariborHero from '@/assets/maribor-hero.jpg'

const AboutMaribor = () => {
  const contentRef = useScrollReveal()

  const whatWeDo = [
    {
      title: 'Academic Courses',
      description: 'Technical workshops and courses to enhance your engineering skills',
      icon: Code,
    },
    {
      title: 'Career Fairs',
      description: 'Connect with leading tech companies and explore career opportunities',
      icon: Briefcase,
    },
    {
      title: 'Hackathons',
      description: 'Compete in exciting coding challenges and innovation contests',
      icon: Sparkles,
    },
    {
      title: 'Social Events',
      description: 'Network with fellow students through fun social activities',
      icon: Users,
    },
    {
      title: 'Volunteer Opportunities',
      description: 'Make a difference while developing your leadership skills',
      icon: Heart,
    },
    {
      title: 'International Exchange',
      description: 'Participate in BEST events across Europe and meet new people',
      icon: Calendar,
    },
  ]

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
      role: 'Corporate Relations',
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
  ]

  return (
    <div className="min-h-screen">
      <AnimatedHero className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About BEST Maribor</h1>
            <p className="text-lg md:text-xl text-muted-foreground">Your gateway to personal growth, international connections, and career opportunities in Slovenia</p>
          </div>
        </div>
      </AnimatedHero>

      <section ref={contentRef} className="py-20 bg-background scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  BEST Maribor is the local group representing the University of Maribor in the BEST network. We are a student organization dedicated to connecting students with
                  companies and providing opportunities for personal and professional development.
                </p>
                <p className="text-lg text-muted-foreground">
                  Run entirely by students who volunteer their time, we organize events, build corporate relationships, and create opportunities that make a real difference in the
                  student community.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={mariborHero} alt="BEST Maribor" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">From technical courses to international exchanges, we provide diverse opportunities for growth</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">The dedicated students who make BEST Maribor possible</p>
          </div>
          <ChromaGrid items={teamMembers} />
        </div>
      </section>
    </div>
  )
}

export default AboutMaribor
