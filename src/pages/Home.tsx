import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Briefcase, Globe, Calendar, Award, ArrowRight, MapPin, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import mariborHero from "@/assets/maribor-hero.jpg";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  published_at: string;
}

const Home = () => {
  const { t, language } = useLanguage();
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchRecentPosts();
  }, [language]);

  const fetchRecentPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, cover_image, published_at")
        .eq("is_published", true)
        .eq("language", language)
        .order("published_at", { ascending: false })
        .limit(3);

      if (error) throw error;
      setRecentPosts(data || []);
    } catch (error) {
      console.error("Error fetching recent posts:", error);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Maribor Background */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${mariborHero})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/80" />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-fade-in">
              {t("home.hero.title")}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              {t("home.hero.subtitle")}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/become-member">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 hover-scale">
                  {t("home.hero.cta")}
                </Button>
              </Link>
              <Link to="/about/best">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-8 bg-white/10 hover:bg-white/20 text-white border-white/30"
                >
                  {t("home.hero.learnMore")}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.about.title")}</h2>
              <p className="text-lg text-muted-foreground mb-4">{t("home.about.p1")}</p>
              <p className="text-lg text-muted-foreground mb-6">{t("home.about.p2")}</p>
              <Link to="/about/best">
                <Button size="lg" className="group">
                  {t("home.about.learnMore")}
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
                  <CardDescription>{t("home.stats.members")}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">80+</CardTitle>
                  <CardDescription>{t("home.stats.groups")}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-3xl font-bold">33</CardTitle>
                  <CardDescription>{t("home.stats.countries")}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center hover-scale">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-3xl font-bold">35+</CardTitle>
                  <CardDescription>{t("home.stats.years")}</CardDescription>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.whatWeDo.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.whatWeDo.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("home.features.courses")}</CardTitle>
                <CardDescription>{t("home.features.coursesDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/courses">
                  <Button variant="link" className="px-0 story-link">
                    {t("common.learnMore")} →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Globe className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>{t("home.features.exchange")}</CardTitle>
                <CardDescription>{t("home.features.exchangeDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/bse">
                  <Button variant="link" className="px-0 story-link">
                    {t("common.exploreBse")} →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{t("home.features.career")}</CardTitle>
                <CardDescription>{t("home.features.careerDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/technical-days">
                  <Button variant="link" className="px-0 story-link">
                    {t("common.viewEvents")} →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("home.features.hackathons")}</CardTitle>
                <CardDescription>{t("home.features.hackathonsDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/events/hackathons">
                  <Button variant="link" className="px-0 story-link">
                    {t("common.joinHackathon")} →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>{t("home.features.community")}</CardTitle>
                <CardDescription>{t("home.features.communityDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/become-member">
                  <Button variant="link" className="px-0 story-link">
                    {t("common.becomeMember")} →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{t("home.features.leadership")}</CardTitle>
                <CardDescription>{t("home.features.leadershipDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/about/best">
                  <Button variant="link" className="px-0 story-link">
                    {t("common.readMore")} →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      {recentPosts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.recentNews.title")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("home.recentNews.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {recentPosts.map((post) => (
                <Link key={post.id} to={`/news/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover-scale group">
                    {post.cover_image && (
                      <div className="overflow-hidden">
                        <img
                          src={post.cover_image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(post.published_at), "MMM d, yyyy")}
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                      {post.excerpt && <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>}
                    </CardHeader>
                    <CardContent>
                      <span className="text-primary story-link text-sm font-medium">
                        {t("home.recentNews.readMore")} →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link to="/news">
                <Button size="lg" variant="outline">
                  {t("home.recentNews.viewAll")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Join Section */}
      <section className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.whyJoin.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("home.whyJoin.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: t("home.whyJoin.network"), desc: t("home.whyJoin.networkDesc") },
                { title: t("home.whyJoin.career"), desc: t("home.whyJoin.careerDesc") },
                { title: t("home.whyJoin.skills"), desc: t("home.whyJoin.skillsDesc") },
                { title: t("home.whyJoin.travel"), desc: t("home.whyJoin.travelDesc") },
                { title: t("home.whyJoin.workshops"), desc: t("home.whyJoin.workshopsDesc") },
                { title: t("home.whyJoin.leadershipExp"), desc: t("home.whyJoin.leadershipExpDesc") },
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
                  {t("home.whyJoin.cta")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t("home.cta.title")}</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">{t("home.cta.subtitle")}</p>
          <Link to="/become-member">
            <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              {t("home.cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
