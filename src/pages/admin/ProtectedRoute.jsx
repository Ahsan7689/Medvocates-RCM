import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Spinner } from '@/components/ui';

/**
 * ProtectedRoute Component
 * Protects admin routes from unauthorized access
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAdmin, loading } = useAuth();

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <Spinner size="lg" />
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Redirect to home if authenticated but not admin
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  // Render protected content
  return children;
};

export default ProtectedRoute;