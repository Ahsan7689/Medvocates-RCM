import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

/**
 * Custom hook for Supabase queries with loading and error states
 * @param {Function} queryFn - Async function that returns Supabase query
 * @param {Array} dependencies - Dependencies array for useEffect
 * @returns {Object} { data, loading, error, refetch }
 */
export const useSupabase = (queryFn, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await queryFn();
      setData(result);
    } catch (err) {
      console.error('Supabase query error:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

/**
 * Hook for real-time Supabase subscriptions
 * @param {String} table - Table name
 * @param {Function} callback - Callback function for updates
 * @param {Object} filter - Optional filter conditions
 */
export const useSupabaseSubscription = (table, callback, filter = {}) => {
  useEffect(() => {
    let subscription = supabase
      .channel(`public:${table}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: table,
          ...filter,
        },
        (payload) => {
          callback(payload);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [table, callback, filter]);
};

// Usage examples:
// 
// 1. Fetch blog posts:
// const { data: posts, loading, error, refetch } = useSupabase(
//   async () => {
//     const { data } = await supabase
//       .from('blog_posts')
//       .select('*')
//       .eq('status', 'published');
//     return data;
//   },
//   []
// );
//
// 2. Real-time subscription:
// useSupabaseSubscription('blog_posts', (payload) => {
//   console.log('Change received!', payload);
// });