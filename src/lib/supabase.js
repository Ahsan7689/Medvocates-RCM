import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase environment variables. Please check your .env file.'
  );
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
  },
  db: {
    schema: 'public',
  },
  global: {
    headers: {
      'X-Client-Info': 'medvocates-rcm-web',
    },
  },
});

// Helper function to handle Supabase errors
export const handleSupabaseError = (error) => {
  if (!error) return null;

  // Map common Supabase errors to user-friendly messages
  const errorMessages = {
    'Invalid login credentials': 'Incorrect email or password',
    'Email not confirmed': 'Please verify your email address',
    'User already registered': 'An account with this email already exists',
    'Invalid email': 'Please enter a valid email address',
    'Password should be at least 6 characters': 'Password must be at least 6 characters',
  };

  return errorMessages[error.message] || error.message || 'An unexpected error occurred';
};

// Storage helpers
export const storage = {
  // Upload file to Supabase Storage
  uploadFile: async (bucket, path, file) => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          cacheControl: '3600',
          upsert: false,
        });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('File upload error:', error);
      return { data: null, error };
    }
  },

  // Get public URL for a file
  getPublicUrl: (bucket, path) => {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  },

  // Delete file from storage
  deleteFile: async (bucket, path) => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .remove([path]);

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('File delete error:', error);
      return { data: null, error };
    }
  },

  // List files in a bucket
  listFiles: async (bucket, path = '') => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .list(path);

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('File list error:', error);
      return { data: null, error };
    }
  },
};

// Database query helpers
export const db = {
  // Blog posts
  getBlogPosts: async (status = 'published', limit = null) => {
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('status', status)
      .order('published_at', { ascending: false });

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;
    return { data, error };
  },

  getBlogPostBySlug: async (slug) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    return { data, error };
  },

  createBlogPost: async (post) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([post])
      .select()
      .single();

    return { data, error };
  },

  updateBlogPost: async (id, updates) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    return { data, error };
  },

  deleteBlogPost: async (id) => {
    const { data, error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    return { data, error };
  },

  // Contact inquiries
  createContactInquiry: async (inquiry) => {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([inquiry])
      .select()
      .single();

    return { data, error };
  },

  getContactInquiries: async (status = null) => {
    let query = supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;
    return { data, error };
  },

  updateContactInquiryStatus: async (id, status) => {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    return { data, error };
  },

  // Newsletter subscribers
  subscribeToNewsletter: async (email) => {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
      .single();

    return { data, error };
  },

  getNewsletterSubscribers: async () => {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .select('*')
      .order('subscribed_at', { ascending: false });

    return { data, error };
  },
};

export default supabase;