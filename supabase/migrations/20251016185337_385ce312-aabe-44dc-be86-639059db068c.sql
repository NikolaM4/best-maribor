-- Remove RLS policies for authenticated users since management will be done directly in Supabase
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON public.blog_posts;

-- Keep only the public read policy for published posts
-- (The "Anyone can view published blog posts" policy remains)