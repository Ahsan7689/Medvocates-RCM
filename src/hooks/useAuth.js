import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

/**
 * Custom hook to access authentication context
 * @returns {Object} Auth context value
 * @throws {Error} If used outside AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

// Usage example:
// const { user, isAdmin, signIn, signOut, loading } = useAuth();