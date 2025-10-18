import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  cover_image: string | null;
  author: string;
  published_at: string;
}

const NewsPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-muted rounded mb-4" />
          <div className="h-64 bg-muted rounded mb-8" />
          <div className="space-y-4">
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/news">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <div className="border-b bg-surface-subtle">
        <div className="container mx-auto px-4 py-4">
          <Link to="/news">
            <Button variant="ghost" className="hover:bg-background">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>
      </div>

      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time>{format(new Date(post.published_at), 'MMMM d, yyyy')}</time>
              </div>
              {post.author && (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.cover_image && (
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={post.cover_image}
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <div 
            className="prose prose-lg prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl prose-img:shadow-lg max-w-none
                       dark:prose-invert
                       prose-p:text-foreground prose-p:leading-relaxed
                       prose-headings:text-foreground
                       prose-strong:text-foreground
                       prose-code:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default NewsPost;
