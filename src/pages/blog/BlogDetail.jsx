import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { RevealOnScroll } from '@/components/animations';
import { Button, Spinner, Badge } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCalendar, faClock, faUser } from '@fortawesome/free-solid-svg-icons';
import { db } from '@/lib/supabase';
import { formatDate, calculateReadingTime, extractTextFromRichText } from '@/lib/utils';
import toast from 'react-hot-toast';

/**
 * BlogDetail Page Component
 * Individual blog post detail page
 */
const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { data, error } = await db.getBlogPostBySlug(slug);
      if (error) throw error;
      
      if (!data) {
        toast.error('Blog post not found');
        return;
      }
      
      setPost(data);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      toast.error('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  // Render rich content (simplified - you might want a proper rich text renderer)
  const renderContent = (content) => {
    if (!content || !Array.isArray(content)) return null;

    return content.map((block, index) => {
      switch (block.type) {
        case 'heading1':
          return <h1 key={index} className="text-h2 font-serif font-bold text-text-primary mb-4 mt-8">{block.text}</h1>;
        case 'heading2':
          return <h2 key={index} className="text-h3 font-serif font-bold text-text-primary mb-3 mt-6">{block.text}</h2>;
        case 'heading3':
          return <h3 key={index} className="text-h4 font-serif font-semibold text-text-primary mb-2 mt-4">{block.text}</h3>;
        case 'paragraph':
          return <p key={index} className="text-text-secondary leading-relaxed mb-4">{block.text}</p>;
        case 'list':
          return (
            <ul key={index} className="list-disc list-inside space-y-2 mb-4 text-text-secondary">
              {block.items?.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
        case 'image':
          return (
            <div key={index} className="my-8">
              <img src={block.url} alt={block.alt || ''} className="w-full rounded-card" />
              {block.caption && <p className="text-sm text-text-muted text-center mt-2">{block.caption}</p>}
            </div>
          );
        default:
          return null;
      }
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h2 font-serif font-bold text-text-primary mb-4">
            Post Not Found
          </h1>
          <Link to="/blogs">
            <Button variant="primary">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const plainText = extractTextFromRichText(post.content);
  const readingTime = calculateReadingTime(plainText);

  return (
    <div className="blog-detail-page">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link to="/blogs" className="inline-flex items-center text-gold hover:opacity-80 transition-opacity mb-6">
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                <span>Back to Blog</span>
              </Link>

              {/* Category Badge */}
              {post.category && (
                <div className="mb-4">
                  <Badge variant="gold">{post.category}</Badge>
                </div>
              )}

              {/* Title */}
              <h1 className="text-h1 font-serif font-bold text-text-primary mb-6">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-text-muted">
                {post.author_name && (
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faUser} />
                    <span>{post.author_name}</span>
                  </div>
                )}
                {post.published_at && (
                  <div className="flex items-center space-x-2">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{formatDate(post.published_at, 'long')}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faClock} />
                  <span>{readingTime}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image && (
        <section className="section-padding bg-bg-primary">
          <div className="container mx-auto">
            <RevealOnScroll direction="up">
              <div className="max-w-4xl mx-auto">
                <img 
                  src={post.featured_image} 
                  alt={post.title}
                  className="w-full rounded-card shadow-luxury"
                />
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-invert max-w-none">
                {renderContent(post.content)}
              </article>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-charcoal mb-4">
                Ready to Optimize Your Practice?
              </h2>
              <p className="text-lg text-charcoal/80 mb-8">
                Get expert billing and administrative support.
              </p>
              <Link to="/contact">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="bg-charcoal text-gold hover:bg-charcoal-dark"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;