import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RevealOnScroll, StaggerChildren } from '@/components/animations';
import { Input, Select, Spinner } from '@/components/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import BlogCard from './BlogCard';
import { db } from '@/lib/supabase';
import { BLOG_CATEGORIES } from '@/lib/constants';

/**
 * BlogList — FIXED
 * ✅ "Subscribe Now" button on gold bg:
 *    Dark mode  — Default: charcoal bg + white text | Hover: transparent + white border + white text
 *    Light mode — Default: teal bg + white text     | Hover: transparent + teal border + white text
 */
const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data, error } = await db.getBlogPosts('published');
      if (error) throw error;
      setPosts(data || []);
    } catch (e) {
      console.error('Error fetching posts:', e);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryOptions = [
    { value: '', label: 'All Categories' },
    ...(BLOG_CATEGORIES || []).map(cat => ({ value: cat, label: cat })),
  ];

  return (
    <div className="blog-list-page">

      {/* Hero */}
      <section className="section-padding bg-gradient-dark">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-h1 font-serif font-bold text-white mb-6">MedVocates Blog</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Healthcare insights, billing tips, and industry updates from our experts.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="section-padding bg-bg-primary">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <FontAwesomeIcon icon={faSearch} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted text-sm" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-bg-card border border-grey rounded-sharp text-text-primary text-sm focus:outline-none focus:border-gold transition-colors placeholder:text-text-muted"
                    />
                  </div>
                </div>
                <div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-bg-card border border-grey rounded-sharp text-text-primary text-sm focus:outline-none focus:border-gold transition-colors cursor-pointer"
                  >
                    {categoryOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {loading && <div className="flex justify-center py-12"><Spinner size="lg" /></div>}

          {!loading && filteredPosts.length === 0 && (
            <RevealOnScroll direction="up">
              <div className="text-center py-12">
                <p className="text-text-secondary text-lg mb-4">
                  {searchTerm || selectedCategory ? 'No articles found matching your criteria.' : 'No blog posts available yet.'}
                </p>
                {(searchTerm || selectedCategory) && (
                  <button onClick={() => { setSearchTerm(''); setSelectedCategory(''); }}
                    className="px-6 py-3 border border-grey text-text-primary hover:border-gold hover:text-gold rounded-button text-sm font-medium transition-all">
                    Clear Filters
                  </button>
                )}
              </div>
            </RevealOnScroll>
          )}

          {!loading && filteredPosts.length > 0 && (
            <StaggerChildren stagger={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)}
              </div>
            </StaggerChildren>
          )}

          {!loading && filteredPosts.length > 0 && (
            <RevealOnScroll direction="up" delay={0.3}>
              <div className="text-center mt-12">
                <p className="text-text-muted">Showing {filteredPosts.length} of {posts.length} articles</p>
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {/* ✅ Newsletter CTA — gold bg */}
      <section className="section-padding bg-gradient-gold">
        <div className="container mx-auto">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-h2 font-serif font-bold text-charcoal mb-4">Stay Updated</h2>
              <p className="text-lg text-charcoal/80 mb-8">
                Subscribe to our newsletter for the latest healthcare billing insights.
              </p>

              {/* ✅ FIXED: visible button with correct hover */}
              <Link to="/contact">
                <button
                  className="blog-cta-btn inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-button transition-all duration-200"
                >
                  Subscribe Now
                </button>
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Scoped CTA button styles */}
      <style>{`
        /* DARK MODE — charcoal bg + white text | Hover: transparent + white border + white text */
        .blog-cta-btn {
          background: #1a1a1a;
          color: #ffffff;
          border: 2px solid #1a1a1a;
        }
        .blog-cta-btn:hover {
          background: transparent;
          color: #ffffff;
          border-color: #ffffff;
        }

        /* LIGHT MODE — teal bg + white text | Hover: transparent + teal border + white text */
        [data-theme="light"] .blog-cta-btn {
          background: #2d8685;
          color: #ffffff;
          border: 2px solid #2d8685;
        }
        [data-theme="light"] .blog-cta-btn:hover {
          background: transparent;
          color: #ffffff;
          border-color: #2d8685;
        }
      `}</style>
    </div>
  );
};

export default BlogList;