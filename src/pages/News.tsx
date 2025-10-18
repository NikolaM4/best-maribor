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
    <div className="container mx-auto px-4 py-12">
      <div ref={heroRef} className="scroll-reveal">
        <h1 className="text-4xl font-bold mb-6">News & Blog</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Stay updated with the latest news and announcements from BEST Maribor.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No posts available yet. Check back soon for updates!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
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
                    {format(new Date(post.published_at), 'MMM d, yyyy')}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  {post.excerpt && (
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  {post.author && (
                    <Badge variant="secondary">{post.author}</Badge>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
