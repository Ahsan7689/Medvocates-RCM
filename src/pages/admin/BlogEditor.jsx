import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faSave, 
  faEye, 
  faTrash, 
  faUser,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { db } from '@/lib/supabase';
import { slugify } from '@/lib/utils';
import { BLOG_CATEGORIES } from '@/lib/constants';
import toast from 'react-hot-toast';

/**
 * BlogEditor - Create and edit blog posts
 * ✅ Matches complete-supabase-schema.sql exactly
 */
const BlogEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    category: BLOG_CATEGORIES[0] || 'Medical Billing',
    content: [],
    featured_image: '',
    status: 'draft',
    author_name: 'Admin',
  });

  const [currentBlock, setCurrentBlock] = useState({
    type: 'paragraph',
    text: '',
  });

  useEffect(() => {
    if (isEditMode) fetchPost();
  }, [id]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const { data, error } = await db.getBlogPostBySlug(id);
      if (error) throw error;
      if (data) {
        setPostData({
          title: data.title || '',
          slug: data.slug || '',
          excerpt: data.excerpt || '',
          category: data.category || BLOG_CATEGORIES[0],
          content: data.content || [],
          featured_image: data.featured_image || '',
          status: data.status || 'draft',
          author_name: data.author_name || 'Admin',
        });
      }
    } catch (err) {
      console.error('Error loading post:', err);
      toast.error('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setPostData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'title' && !isEditMode ? { slug: slugify(value) } : {}),
    }));
  };

  const addContentBlock = () => {
    if (!currentBlock.text.trim()) {
      toast.error('Content block cannot be empty');
      return;
    }
    setPostData(prev => ({
      ...prev,
      content: [...prev.content, { ...currentBlock }],
    }));
    setCurrentBlock({ type: 'paragraph', text: '' });
    toast.success('Content block added');
  };

  const removeContentBlock = (index) => {
    setPostData(prev => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index),
    }));
    toast.success('Block removed');
  };

  const handleSave = async (status) => {
    if (!postData.title.trim()) { toast.error('Title is required'); return; }
    if (!postData.slug.trim()) { toast.error('URL Slug is required'); return; }
    if (!postData.author_name.trim()) { toast.error('Author Name is required'); return; }
    if (!postData.excerpt?.trim()) { toast.error('Excerpt is required'); return; }
    if (postData.content.length === 0) { toast.error('Add at least one content block'); return; }

    setLoading(true);

    try {
      const payload = {
        title: postData.title.trim(),
        slug: postData.slug.trim(),
        excerpt: postData.excerpt.trim(),
        category: postData.category || 'Medical Billing',
        content: postData.content,
        featured_image: postData.featured_image || null,
        status,
        author_name: postData.author_name.trim(),
        ...(status === 'published' && !isEditMode ? { published_at: new Date().toISOString() } : {}),
      };

      console.log('Saving post:', payload);

      const result = isEditMode
        ? await db.updateBlogPost(id, payload)
        : await db.createBlogPost(payload);

      if (result.error) {
        console.error('Database error:', result.error);
        throw result.error;
      }

      toast.success(`Post ${status === 'published' ? 'published' : 'saved as draft'}!`);
      setTimeout(() => navigate('/admin/dashboard'), 1500);
    } catch (error) {
      console.error('Save error:', error);
      toast.error(error.message || 'Failed to save post');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Delete this post?')) return;
    setLoading(true);
    try {
      const { error } = await db.deleteBlogPost(id);
      if (error) throw error;
      toast.success('Post deleted');
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Failed to delete post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-12">
      <div className="container mx-auto max-w-5xl">
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/admin/dashboard" className="text-text-secondary hover:text-gold transition-colors">
              <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-h2 font-bold text-text-primary">
              {isEditMode ? 'Edit Blog Post' : 'Create Blog Post'}
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleSave('draft')}
              disabled={loading}
              className="px-4 py-2 border border-grey text-text-primary hover:border-gold hover:text-gold rounded-button transition-colors disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faSave} className="mr-2" />
              Save Draft
            </button>
            <button
              onClick={() => handleSave('published')}
              disabled={loading}
              className="px-4 py-2 bg-gold text-charcoal hover:bg-gold-light rounded-button transition-colors disabled:opacity-50"
            >
              <FontAwesomeIcon icon={faEye} className="mr-2" />
              Publish
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-bg-card border border-grey rounded-card p-6">
              <label className="block text-text-primary font-semibold mb-2">Post Title *</label>
              <input
                type="text"
                value={postData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter post title..."
                className="w-full px-4 py-3 bg-bg-primary border border-grey rounded-sharp text-text-primary focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div className="bg-bg-card border border-grey rounded-card p-6">
              <label className="block text-text-primary font-semibold mb-2">
                <FontAwesomeIcon icon={faUser} className="mr-2 text-gold" />
                Author Name *
              </label>
              <input
                type="text"
                value={postData.author_name}
                onChange={(e) => handleInputChange('author_name', e.target.value)}
                placeholder="Enter author name..."
                className="w-full px-4 py-3 bg-bg-primary border border-grey rounded-sharp text-text-primary focus:border-gold focus:outline-none transition-colors"
              />
              <p className="text-xs text-text-muted mt-2">Required — displayed on the blog post</p>
            </div>

            <div className="bg-bg-card border border-grey rounded-card p-6">
              <label className="block text-text-primary font-semibold mb-2">URL Slug *</label>
              <input
                type="text"
                value={postData.slug}
                onChange={(e) => handleInputChange('slug', e.target.value)}
                placeholder="url-friendly-slug"
                className="w-full px-4 py-3 bg-bg-primary border border-grey rounded-sharp text-text-primary focus:border-gold focus:outline-none transition-colors"
              />
              <p className="text-xs text-text-muted mt-2">
                URL: /blogs/{postData.slug || 'your-slug'}
              </p>
            </div>

            <div className="bg-bg-card border border-grey rounded-card p-6">
              <label className="block text-text-primary font-semibold mb-2">Excerpt *</label>
              <textarea
                value={postData.excerpt}
                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                placeholder="Brief summary..."
                rows={3}
                className="w-full px-4 py-3 bg-bg-primary border border-grey rounded-sharp text-text-primary focus:border-gold focus:outline-none resize-none"
              />
              <p className="text-xs text-text-muted mt-2">{postData.excerpt.length} / 200</p>
            </div>

            <div className="bg-bg-card border border-grey rounded-card p-6">
              <label className="block text-text-primary font-semibold mb-4">Content Blocks</label>
              {postData.content.map((block, i) => (
                <div key={i} className="mb-3 p-4 bg-bg-primary border border-grey rounded-sharp relative group">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <span className="text-xs text-gold font-semibold uppercase">{block.type}</span>
                      <p className="text-text-secondary mt-1 text-sm">
                        {block.text.substring(0, 100)}{block.text.length > 100 ? '...' : ''}
                      </p>
                    </div>
                    <button
                      onClick={() => removeContentBlock(i)}
                      className="ml-4 text-alert hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 space-y-3">
                <select
                  value={currentBlock.type}
                  onChange={(e) => setCurrentBlock({ ...currentBlock, type: e.target.value })}
                  className="w-full px-4 py-2 bg-bg-primary border border-grey rounded-sharp text-text-primary focus:border-gold focus:outline-none"
                >
                  <option value="paragraph">Paragraph</option>
                  <option value="heading1">Heading 1</option>
                  <option value="heading2">Heading 2</option>
                  <option value="heading3">Heading 3</option>
                </select>
                <textarea
                  value={currentBlock.text}
                  onChange={(e) => setCurrentBlock({ ...currentBlock, text: e.target.value })}
                  placeholder="Enter content..."
                  rows={4}
                  className="w-full px-4 py-3 bg-bg-primary border border-grey rounded-sharp text-text-primary focus:border-gold focus:outline-none resize-none"
                />
                <button
                  onClick={addContentBlock}
                  className="w-full px-4 py-2 bg-gold text-charcoal hover:bg-gold-light rounded-button transition-colors font-semibold"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  Add Block
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-bg-card border border-grey rounded-card p-6">
              <h3 className="text-text-primary font-semibold mb-4">Post Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Status:</span>
                  <span className="text-text-primary font-semibold capitalize">{postData.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Author:</span>
                  <span className="text-text-primary font-semibold">{postData.author_name || 'Not set'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Blocks:</span>
                  <span className="text-text-primary font-semibold">{postData.content.length}</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-grey rounded-card p-6">
              <label className="block text-text-primary font-semibold mb-2">Category</label>
              <select
                value={postData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-2 bg-bg-primary border border-grey rounded-sharp text-text-primary focus:border-gold focus:outline-none"
              >
                {BLOG_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="bg-bg-card border border-grey rounded-card p-6">
              <label className="block text-text-primary font-semibold mb-2">Featured Image URL</label>
              <input
                type="text"
                value={postData.featured_image}
                onChange={(e) => handleInputChange('featured_image', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 bg-bg-primary border border-grey rounded-sharp text-text-primary focus:border-gold focus:outline-none text-sm"
              />
              <p className="text-xs text-text-muted mt-2">Enter image URL</p>
            </div>

            {isEditMode && (
              <button
                onClick={handleDelete}
                disabled={loading}
                className="w-full px-4 py-3 bg-alert text-white hover:bg-red-700 rounded-button transition-colors disabled:opacity-50"
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                Delete Post
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;