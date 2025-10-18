import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { format } from 'date-fns';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  cover_image: string | null;
  author: string;
  published_at: string;
  language: string;
}

const News = () => {
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const heroRef = useScrollReveal();

  useEffect(() => {
    fetchPosts();
  }, [language]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, cover_image, author, published_at, language')
        .eq('is_published', true)
        .eq('language', language)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">News</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-48 bg-muted" />
              <CardHeader>
                <div className="h-6 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div ref={heroRef} className="scroll-reveal text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              News & Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest news, events, and stories from BEST Maribor
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 container mx-auto px-4">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">No posts yet</h3>
              <p className="text-muted-foreground">
                Check back soon for exciting updates and stories!
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} to={`/news/${post.slug}`} className="group">
                <Card className="h-full overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {post.cover_image && (
                    <div className="relative overflow-hidden h-56">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{format(new Date(post.published_at), 'MMM d, yyyy')}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    {post.excerpt && (
                      <CardDescription className="line-clamp-3 text-base">
                        {post.excerpt}
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    {post.author && (
                      <Badge variant="secondary" className="font-medium">
                        {post.author}
                      </Badge>
                    )}
                    <span className="text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default News;
