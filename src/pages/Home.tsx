import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Briefcase, Globe, Calendar, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-secondary py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {t('home.hero.title')}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/become-member">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
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
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
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
                  <Button variant="link" className="px-0">
                    Learn more →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
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
                  <Button variant="link" className="px-0">
                    Explore BSE →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Career Development</CardTitle>
                <CardDescription>
                  Connect with leading companies through career fairs and networking events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/technical-days">
                  <Button variant="link" className="px-0">
                    View events →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Hackathons</CardTitle>
                <CardDescription>
                  Participate in coding competitions and innovation challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/hackathons">
                  <Button variant="link" className="px-0">
                    Join hackathon →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Join a network of over 3,000 students from 93 universities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/become-member">
                  <Button variant="link" className="px-0">
                    Become a member →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Leadership Skills</CardTitle>
                <CardDescription>
                  Develop soft skills through organizing events and managing projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/about/best">
                  <Button variant="link" className="px-0">
                    Read more →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-hover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join BEST Maribor and become part of Europe's leading student organization
          </p>
          <Link to="/become-member">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Apply Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
