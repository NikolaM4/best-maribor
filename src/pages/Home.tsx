import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Briefcase, Globe, Calendar, Award, ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import mariborHero from '@/assets/maribor-hero.jpg';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section with Maribor Background */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mariborHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/80" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in">
              {t('home.hero.title')}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/become-member">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 hover-scale">
                  {t('home.hero.cta')}
                </Button>
              </Link>
              <Link to="/about/best">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  {t('home.hero.learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Short Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About BEST Maribor</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We are a dynamic student organization at the University of Maribor, part of the BEST network 
                connecting over 3,000 students across 93 universities in 33 countries.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Through academic courses, career events, and international exchanges, we help students develop 
                both technical and soft skills while building lasting connections across Europe.
              </p>
              <Link to="/about/best">
                <Button size="lg" className="group">
                  Learn More About BEST
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">3000+</CardTitle>
                  <CardDescription>Active Members</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">93</CardTitle>
                  <CardDescription>Local Groups</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-3xl font-bold">33</CardTitle>
                  <CardDescription>Countries</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">35+</CardTitle>
                  <CardDescription>Years Active</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              BEST connects students, companies, and universities across Europe through various programs and events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Academic Courses</CardTitle>
                <CardDescription>
                  Hands-on technical courses taught by industry professionals and academics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/courses">
                  <Button variant="link" className="px-0 story-link">
                    Learn more →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Study Exchange</CardTitle>
                <CardDescription>
                  Spend time at partner universities across Europe with BEST Study Exchange
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/bse">
                  <Button variant="link" className="px-0 story-link">
                    Explore BSE →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Career Development</CardTitle>
                <CardDescription>
                  Connect with leading companies through career fairs and networking events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/technical-days">
                  <Button variant="link" className="px-0 story-link">
                    View events →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hackathons</CardTitle>
                <CardDescription>
                  Participate in coding competitions and innovation challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/hackathons">
                  <Button variant="link" className="px-0 story-link">
                    Join hackathon →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Join a network of over 3,000 students from 93 universities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/become-member">
                  <Button variant="link" className="px-0 story-link">
                    Become a member →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Leadership Skills</CardTitle>
                <CardDescription>
                  Develop soft skills through organizing events and managing projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/about/best">
                  <Button variant="link" className="px-0 story-link">
                    Read more →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join BEST Maribor?</h2>
              <p className="text-lg text-muted-foreground">
                Unlock opportunities for personal growth, professional development, and international networking
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'International Network', desc: 'Connect with students from 93 universities across Europe' },
                { title: 'Career Opportunities', desc: 'Direct access to leading companies and job opportunities' },
                { title: 'Skill Development', desc: 'Develop both technical and soft skills through events and projects' },
                { title: 'Travel Europe', desc: 'Participate in study exchanges and international events' },
                { title: 'Free Workshops', desc: 'Access to free training sessions and professional courses' },
                { title: 'Leadership Experience', desc: 'Gain valuable experience by organizing and managing events' },
              ].map((item, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/become-member">
                <Button size="lg" className="text-lg px-8">
                  Join BEST Maribor Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join BEST Maribor and become part of Europe's leading student organization
          </p>
          <Link to="/become-member">
            <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
