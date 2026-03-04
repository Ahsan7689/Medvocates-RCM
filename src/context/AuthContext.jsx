import { createContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check current session on mount
  useEffect(() => {
    checkUser();

    // Listen for auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await checkAdminStatus(session.user);
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Check current user
  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        await checkAdminStatus(session.user);
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setLoading(false);
    }
  };

  // Check if user is admin (based on email or role)
  const checkAdminStatus = async (user) => {
    try {
      // Option 1: Check against admin email from env
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
      if (user.email === adminEmail) {
        setIsAdmin(true);
        return;
      }

      // Option 2: Check user metadata (if you set admin role in Supabase)
      if (user.user_metadata?.role === 'admin') {
        setIsAdmin(true);
        return;
      }

      // Option 3: Query a custom admin table (future enhancement)
      // const { data } = await supabase
      //   .from('admins')
      //   .select('*')
      //   .eq('user_id', user.id)
      //   .single();
      // setIsAdmin(!!data);

      setIsAdmin(false);
    } catch (error) {
      console.error('Error checking admin status:', error);
      setIsAdmin(false);
    }
  };

  // Sign in with email/password
  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { data: null, error };
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      setUser(null);
      setSession(null);
      setIsAdmin(false);

      return { error: null };
    } catch (error) {
      console.error('Sign out error:', error);
      return { error };
    }
  };

  // Sign up (for creating admin accounts - should be restricted)
  const signUp = async (email, password, metadata = {}) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
        },
      });

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { data: null, error };
    }
  };

  // Reset password
  const resetPassword = async (email) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${import.meta.env.VITE_SITE_URL}/admin/reset-password`,
      });

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Reset password error:', error);
      return { data: null, error };
    }
  };

  // Update password
  const updatePassword = async (newPassword) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      return { data, error: null };
    } catch (error) {
      console.error('Update password error:', error);
      return { data: null, error };
    }
  };

  const value = {
    user,
    session,
    loading,
    isAdmin,
    isAuthenticated: !!user,
    signIn,
    signOut,
    signUp,
    resetPassword,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};