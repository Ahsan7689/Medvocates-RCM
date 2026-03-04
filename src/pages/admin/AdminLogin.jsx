import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Card, CardContent } from '@/components/ui';
import { useAuth } from '@/hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

/**
 * AdminLogin Page Component
 * Admin authentication page
 */
const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect if already authenticated
  useState(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await signIn(email, password);
      
      if (error) {
        toast.error(error.message || 'Invalid credentials');
      } else {
        toast.success('Welcome back!');
        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-h2 font-serif font-bold text-text-primary mb-2">
            Admin Login
          </h1>
          <p className="text-text-secondary">
            Sign in to access the admin dashboard
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <Input
                type="email"
                label="Email Address"
                placeholder="admin@medvocatesrcm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftIcon={<FontAwesomeIcon icon={faEnvelope} />}
                required
              />

              {/* Password */}
              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                leftIcon={<FontAwesomeIcon icon={faLock} />}
                required
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                loading={loading}
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            {/* Security Notice */}
            <p className="mt-6 text-xs text-text-muted text-center">
              This area is restricted to authorized personnel only.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;