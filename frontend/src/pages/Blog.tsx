
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  // Get the newest blog post for the featured post section (the new post with id '6')
  const featuredPost = blogPosts.find(post => post.id === '6') || blogPosts[0];
  // Get the rest of the blog posts for the grid section
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>
      <SEO 
        title="Revv Aerospace" 
        description="At Revv Aerospace, we are redefining the future of flight through innovation, precision engineering, and relentless pursuit of excellence. Our capabilities span across next-generation UAV systems, advanced composite structures, CNC and additive manufacturing, payload integration, AI-driven autonomy, and urban air mobility (UAM) solutions.
We design, build, and operate aerial systems that are mission-ready today and future-ready for tomorrow."
        imageUrl={featuredPost?.imageUrl || "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png"}
        keywords={['smart textiles', 'textile technology', 'industry news', 'sensor innovation', 'wearable tech', 'smart fabrics']}
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300 mb-6">
            At Revv Aerospace, we are redefining the future of flight through innovation, precision engineering, and relentless pursuit of excellence. Our capabilities span across next-generation UAV systems, advanced composite structures, CNC and additive manufacturing, payload integration, AI-driven autonomy, and urban air mobility (UAM) solutions.
            We design, build, and operate aerial systems that are mission-ready today and future-ready for tomorrow
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          
          {/* Other blog posts */}
          {otherPosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/lovable-uploads/48ecf6e2-5a98-4a9d-af6f-ae2265cd4098.png'}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
          
          {/* If there are fewer than 3 published posts, add placeholders */}
          {blogPosts.length < 4 && Array.from({ length: Math.max(0, 4 - blogPosts.length) }).map((_, index) => (
            <BlogPostCard 
              key={`placeholder-${index}`}
              title="Upcoming article"
              excerpt="Stay tuned for more exciting articles about smart textiles and sensor technology."
              imageUrl={index % 2 === 0 ? "/lovable-uploads/6b0637e9-4a7b-40d0-b219-c8b7f879f93e.png" : "/lovable-uploads/700e27d7-0513-4bfa-8ac4-f7fd6087594c.png"}
              date="Coming soon"
              slug="#"
              category="Upcoming"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
